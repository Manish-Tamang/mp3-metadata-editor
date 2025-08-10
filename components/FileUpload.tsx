"use client"

import { Upload, Music } from "lucide-react"

interface FileUploadProps {
  onFileSelect: (e: React.ChangeEvent<HTMLInputElement>) => void
  fileName?: string
  fileSize?: string
}

export function FileUpload({ onFileSelect, fileName, fileSize }: FileUploadProps) {
  return (
    <div className="w-full">
      {!fileName ? (
        <div className="border border-gray-300 p-8">
          <div className="text-center">
            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <div className="space-y-2 mb-6">
              <p className="text-gray-600">
                Drag and drop your MP3 file here, or click to browse
              </p>
              <p className="text-sm text-gray-500">
                Supports MP3 files only
              </p>
            </div>
            <button
              onClick={() => document.getElementById("mp3-upload")?.click()}
              className="bg-black text-white px-6 py-3 font-medium hover:bg-gray-800"
            >
              Choose File
            </button>
            <input
              id="mp3-upload"
              type="file"
              accept="*/*"
              onChange={onFileSelect}
              className="hidden"
            />
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="border border-gray-300 p-4">
            <div className="flex items-center gap-3">
              <Music className="w-8 h-8 text-gray-600" />
              <div>
                <p className="font-medium text-gray-900">{fileName}</p>
                <p className="text-sm text-gray-600">{fileSize}</p>
              </div>
            </div>
          </div>
          <button
            onClick={() => document.getElementById("mp3-upload")?.click()}
            className="border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-50"
          >
            Change File
          </button>
          <input
            id="mp3-upload"
            type="file"
            accept="*/*"
            onChange={onFileSelect}
            className="hidden"
          />
        </div>
      )}
    </div>
  )
}
