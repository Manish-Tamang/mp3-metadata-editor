interface MetadataForm {
  title: string
  artist: string
  album: string
  coverImage: File | null
}

interface ExistingMetadata {
  title?: string
  artist?: string
  album?: string
  coverImage?: string
}

export async function writeID3Tags(mp3File: File, metadata: MetadataForm): Promise<Blob> {
  try {
    const ID3WriterModule = await import("browser-id3-writer")
    console.log("ID3Writer module imported:", ID3WriterModule)
    
    const ID3Writer = ID3WriterModule.default || ID3WriterModule.ID3Writer || ID3WriterModule
    console.log("ID3Writer constructor:", ID3Writer)
    
    if (typeof ID3Writer !== 'function') {
      throw new Error(`ID3Writer is not a constructor, got: ${typeof ID3Writer}`)
    }

    const arrayBuffer = await mp3File.arrayBuffer()
    const writer = new (ID3Writer as any)(arrayBuffer)

    if (metadata.title) {
      writer.setFrame("TIT2", metadata.title)
    }
    if (metadata.artist) {
      writer.setFrame("TPE1", [metadata.artist])
    }
    if (metadata.album) {
      writer.setFrame("TALB", metadata.album)
    }

    if (metadata.coverImage) {
      const coverArrayBuffer = await metadata.coverImage.arrayBuffer()
      writer.setFrame("APIC", {
        type: 3,
        data: coverArrayBuffer,
        description: "Cover",
      })
    }

    writer.addTag()
    const taggedBuffer = writer.arrayBuffer

    return new Blob([taggedBuffer], { type: "audio/mpeg" })
  } catch (error) {
    console.error("Error writing ID3 tags:", error)
    throw error
  }
}

export async function readID3Tags(mp3File: File): Promise<ExistingMetadata> {
  try {
    console.log("Starting to read ID3 tags from file:", mp3File.name)
    console.log("File size:", mp3File.size)
    console.log("File type:", mp3File.type)
    
    console.log("Attempting to import music-metadata...")
    const musicMetadataModule = await import("music-metadata")
    console.log("music-metadata module imported:", musicMetadataModule)
    console.log("Available exports:", Object.keys(musicMetadataModule))
    
    const { parseBlob } = musicMetadataModule
    console.log("parseBlob function:", parseBlob)
    console.log("parseBlob type:", typeof parseBlob)
    
    if (typeof parseBlob !== 'function') {
      throw new Error(`parseBlob is not a function, got: ${typeof parseBlob}`)
    }
    
    console.log("Calling parseBlob...")
    const metadata = await parseBlob(mp3File)
    console.log("Raw metadata from parseBlob:", metadata)
    console.log("Common metadata:", metadata.common)
    
    const result: ExistingMetadata = {}
    
    if (metadata.common.title) {
      result.title = metadata.common.title
      console.log("Found title:", result.title)
    }
    if (metadata.common.artist) {
      result.artist = metadata.common.artist
      console.log("Found artist:", result.artist)
    }
    if (metadata.common.album) {
      result.album = metadata.common.album
      console.log("Found album:", result.album)
    }
    
    if (metadata.common.picture && metadata.common.picture.length > 0) {
      console.log("Found pictures:", metadata.common.picture.length)
      const picture = metadata.common.picture[0]
      const arrayBuffer = picture.data.buffer.slice(picture.data.byteOffset, picture.data.byteOffset + picture.data.byteLength)
      if (arrayBuffer instanceof ArrayBuffer) {
        const blob = new Blob([arrayBuffer], { type: picture.format })
        result.coverImage = URL.createObjectURL(blob)
        console.log("Created cover image URL:", result.coverImage)
      }
    }
    
    console.log("Final result:", result)
    return result
  } catch (error) {
    console.error("Error reading metadata:", error)
    console.error("Error stack:", error instanceof Error ? error.stack : "No stack trace")
    return {}
  }
}
