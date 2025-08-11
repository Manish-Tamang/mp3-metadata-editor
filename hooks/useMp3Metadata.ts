import { useState, useCallback } from "react";
import { writeID3Tags, readID3Tags } from "@/lib/id3";

interface MetadataForm {
  title: string;
  artist: string;
  album: string;
  coverImage: File | null;
}

interface MP3Preview {
  name: string;
  size: string;
  currentMetadata?: {
    title?: string;
    artist?: string;
    album?: string;
    coverImage?: string;
  };
}

export function useMp3Metadata() {
  const [mp3File, setMp3File] = useState<File | null>(null);
  const [mp3Preview, setMp3Preview] = useState<MP3Preview | null>(null);
  const [metadata, setMetadata] = useState<MetadataForm>({
    title: "",
    artist: "",
    album: "",
    coverImage: null,
  });
  const [coverPreview, setCoverPreview] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const formatFileSize = useCallback((bytes: number): string => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return (
      Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
    );
  }, []);

  const handleMp3Upload = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (
        file &&
        (file.type === "audio/mpeg" || file.name.toLowerCase().endsWith(".mp3"))
      ) {
        console.log("MP3 file selected:", file.name, file.size);
        console.log("File type:", file.type);
        console.log("File instanceof File:", file instanceof File);
        console.log("File instanceof Blob:", file instanceof Blob);
        setMp3File(file);

        const preview: MP3Preview = {
          name: file.name,
          size: formatFileSize(file.size),
        };

        try {
          console.log("Attempting to read metadata...");
          const existingMetadata = await readID3Tags(file);
          console.log("Metadata read successfully:", existingMetadata);
          console.log("Metadata keys:", Object.keys(existingMetadata));
          console.log("Title:", existingMetadata.title);
          console.log("Artist:", existingMetadata.artist);
          console.log("Album:", existingMetadata.album);
          console.log("Cover:", existingMetadata.coverImage);

          preview.currentMetadata = existingMetadata;

          setMetadata({
            title: existingMetadata.title || "",
            artist: existingMetadata.artist || "",
            album: existingMetadata.album || "",
            coverImage: null,
          });

          if (existingMetadata.coverImage) {
            setCoverPreview(existingMetadata.coverImage);
          }
        } catch (error) {
          console.error("Could not read existing metadata:", error);
          console.error("Error details:", error);
        }

        setMp3Preview(preview);
      } else {
        console.log("Invalid file selected:", file?.type, file?.name);
      }
    },
    [formatFileSize]
  );

  const handleCoverUpload = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file && file.type.startsWith("image/")) {
        setMetadata((prev) => ({ ...prev, coverImage: file }));

        const reader = new FileReader();
        reader.onload = (e) => {
          setCoverPreview(e.target?.result as string);
        };
        reader.readAsDataURL(file);
      }
    },
    []
  );

  const handleMetadataChange = useCallback(
    (field: string, value: string | File | null) => {
      setMetadata((prev) => ({ ...prev, [field]: value }));
    },
    []
  );

  const handleDownload = useCallback(async () => {
    if (!mp3File) return;

    setIsProcessing(true);
    try {
      const updatedMp3 = await writeID3Tags(mp3File, metadata);

      const url = URL.createObjectURL(updatedMp3);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${metadata.title || mp3File.name.replace(".mp3", "")}.mp3`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error processing MP3:", error);
    } finally {
      setIsProcessing(false);
    }
  }, [mp3File, metadata]);

  const resetForm = useCallback(() => {
    setMp3File(null);
    setMp3Preview(null);
    setMetadata({
      title: "",
      artist: "",
      album: "",
      coverImage: null,
    });
    setCoverPreview(null);
  }, []);

  return {
    mp3File,
    mp3Preview,
    metadata,
    coverPreview,
    isProcessing,
    handleMp3Upload,
    handleCoverUpload,
    handleMetadataChange,
    handleDownload,
    resetForm,
  };
}
