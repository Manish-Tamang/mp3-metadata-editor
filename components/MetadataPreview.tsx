"use client"

interface MetadataPreviewProps {
  metadata: {
    title?: string
    artist?: string
    album?: string
    coverImage?: string
  }
  fileName: string
  fileSize: string
}

export function MetadataPreview({ metadata, fileName, fileSize }: MetadataPreviewProps) {
  return (
    <div className="w-full">
      <div className="border border-gray-300 p-6 space-y-6">
        <div>
          <h4 className="font-medium text-gray-900 mb-1">{fileName}</h4>
          <p className="text-sm text-gray-600">{fileSize}</p>
        </div>

        {metadata.title || metadata.artist || metadata.album ? (
          <div>
            <h5 className="font-medium text-gray-900 mb-3">Current Metadata</h5>
            <div className="space-y-3">
              {metadata.title && (
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-500 w-16">Title</span>
                  <span className="text-sm text-gray-700">{metadata.title}</span>
                </div>
              )}
              {metadata.artist && (
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-500 w-16">Artist</span>
                  <span className="text-sm text-gray-700">{metadata.artist}</span>
                </div>
              )}
              {metadata.album && (
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-500 w-16">Album</span>
                  <span className="text-sm text-gray-700">{metadata.album}</span>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="text-sm text-gray-500 italic">No metadata found</div>
        )}

        {metadata.coverImage && (
          <div>
            <h5 className="font-medium text-gray-900 mb-3">Cover Image</h5>
            <img
              src={metadata.coverImage}
              alt="Cover"
              className="w-24 h-24 object-cover border border-gray-200"
            />
          </div>
        )}
      </div>
    </div>
  )
}
