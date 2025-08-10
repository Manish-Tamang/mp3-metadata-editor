"use client"

import { FileUpload } from "./FileUpload"
import { MetadataPreview } from "./MetadataPreview"
import { MetadataForm } from "./MetadataForm"
import { useMp3Metadata } from "@/hooks/useMp3Metadata"

export function UploadForm() {
  const {
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
  } = useMp3Metadata()

  return (
    <section id="editor" className="max-w-4xl mx-auto px-6 py-16">
      <div className="space-y-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            MP3 Metadata Editor
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Upload your MP3 files, edit metadata, and download them with updated information.
            All processing happens in your browser - no files are uploaded to servers.
          </p>
        </div>

        <FileUpload
          onFileSelect={handleMp3Upload}
          fileName={mp3Preview?.name}
          fileSize={mp3Preview?.size}
        />

        {mp3Preview && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <MetadataPreview
              metadata={mp3Preview.currentMetadata || {}}
              fileName={mp3Preview.name}
              fileSize={mp3Preview.size}
            />
            <MetadataForm
              metadata={metadata}
              onMetadataChange={handleMetadataChange}
              coverPreview={coverPreview}
              onCoverUpload={handleCoverUpload}
              onDownload={handleDownload}
              onReset={resetForm}
              isProcessing={isProcessing}
            />
          </div>
        )}
      </div>
    </section>
  )
}
