export default function HowItWorks() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-2xl font-medium text-gray-900 mb-8">How it works</h1>

      <div className="space-y-12">
        <div>
          <div className="flex items-start justify-between mb-3">
            <h2 className="text-lg font-medium text-gray-900">Upload your MP3 file</h2>
            <span className="text-sm text-gray-500">Step 1</span>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Select an MP3 file from your device. The file is processed entirely in your browser - no data is sent to our
            servers, ensuring your privacy and security.
          </p>
        </div>

        <div>
          <div className="flex items-start justify-between mb-3">
            <h2 className="text-lg font-medium text-gray-900">Edit metadata fields</h2>
            <span className="text-sm text-gray-500">Step 2</span>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Update the title, artist, album, and cover image. You can see a preview of the current metadata and make
            changes as needed.
          </p>
        </div>

        <div>
          <div className="flex items-start justify-between mb-3">
            <h2 className="text-lg font-medium text-gray-900">Download updated file</h2>
            <span className="text-sm text-gray-500">Step 3</span>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Click the download button to get your MP3 file with the updated metadata embedded. The original file remains
            unchanged on your device.
          </p>
        </div>
      </div>

      <div className="mt-16">
        <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-4">PRIVACY & SECURITY</h3>
        <p className="text-gray-600 leading-relaxed">
          All processing happens locally in your browser using JavaScript. Your files never leave your device, making
          this tool completely private and secure.
        </p>
      </div>
    </div>
  )
}
