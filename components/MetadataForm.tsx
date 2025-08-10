"use client"

interface MetadataFormProps {
  metadata: {
    title: string
    artist: string
    album: string
    coverImage: File | null
  }
  onMetadataChange: (field: string, value: string | File | null) => void
  coverPreview: string | null
  onCoverUpload: (e: React.ChangeEvent<HTMLInputElement>) => void
  onDownload: () => void
  onReset: () => void
  isProcessing: boolean
}

export function MetadataForm({
  metadata,
  onMetadataChange,
  coverPreview,
  onCoverUpload,
  onDownload,
  onReset,
  isProcessing,
}: MetadataFormProps) {
  return (
    <div className="w-full">
      <div className="border border-gray-300 p-6 space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Title
          </label>
          <input
            type="text"
            value={metadata.title}
            onChange={(e) => onMetadataChange("title", e.target.value)}
            className="w-full border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:border-black"
            placeholder="Enter song title"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Artist
          </label>
          <input
            type="text"
            value={metadata.artist}
            onChange={(e) => onMetadataChange("artist", e.target.value)}
            className="w-full border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:border-black"
            placeholder="Enter artist name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Album
          </label>
          <input
            type="text"
            value={metadata.album}
            onChange={(e) => onMetadataChange("album", e.target.value)}
            className="w-full border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:border-black"
            placeholder="Enter album name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Cover Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={onCoverUpload}
            className="w-full border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:border-black"
          />
          {coverPreview && (
            <div className="mt-3">
              <img
                src={coverPreview}
                alt="Cover preview"
                className="w-24 h-24 object-cover border border-gray-200"
              />
            </div>
          )}
        </div>

        <div className="flex gap-4 pt-4">
          <button
            onClick={onDownload}
            disabled={isProcessing}
            className="bg-black text-white px-6 py-3 font-medium hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isProcessing ? "Processing..." : "Download MP3"}
          </button>
          <button
            onClick={onReset}
            className="border border-gray-300 px-6 py-2 text-gray-700 hover:bg-gray-50"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}
