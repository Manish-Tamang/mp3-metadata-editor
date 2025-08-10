# MP3 Metadata Editor

A modern, client-side MP3 metadata editor built with Next.js and TypeScript. Edit MP3 file tags including title, artist, album, and cover image directly in your browser without uploading files to any server.

![MP3 Metadata Editor - Hero Section](Screenshot%202025-08-10%20234240.png)
![MP3 Metadata Editor - Editor Interface](Screenshot%202025-08-10%20234308.png)

## ✨ Features

- **Client-side Processing**: All file processing happens in your browser - your files never leave your device
- **Metadata Editing**: Edit title, artist, album, and cover image
- **Real-time Preview**: See current metadata before making changes
- **Cover Image Support**: Upload and replace album artwork
- **Privacy First**: No server-side file storage or processing
- **Modern UI**: Clean, minimal design with Funnel Sans typography
- **Cross-platform**: Works on any device with a modern web browser

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Funnel Sans (Google Fonts)
- **MP3 Processing**: music-metadata (reading), browser-id3-writer (writing)
- **Icons**: Lucide React
- **UI Components**: Custom minimal design components

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Manish-Tamang/mp3-metadata-editor.git
   cd mp3-metadata-editor
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
mp3-metadata-editor/
├── app/                    # Next.js app directory
│   ├── contact/           # Contact page
│   ├── how-it-works/      # How it works page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/             # React components
│   ├── ui/                # UI components (unused in current design)
│   ├── FileUpload.tsx     # File upload component
│   ├── Footer.tsx         # Footer component
│   ├── HeroSection.tsx    # Hero section component
│   ├── MetadataForm.tsx   # Metadata editing form
│   ├── MetadataPreview.tsx # Metadata preview component
│   ├── Navbar.tsx         # Navigation component
│   └── UploadForm.tsx     # Main upload form wrapper
├── hooks/                  # Custom React hooks
│   └── useMp3Metadata.ts  # MP3 metadata management hook
├── lib/                    # Utility libraries
│   ├── id3.ts             # ID3 tag reading/writing functions
│   └── utils.ts           # Utility functions
├── public/                 # Static assets
└── styles/                 # Additional styles
```

## 🔧 How It Works

### 1. File Upload
- Users drag & drop or select MP3 files
- File validation ensures only MP3 files are accepted
- File size and name are displayed

### 2. Metadata Reading
- Uses `music-metadata` library to parse existing ID3 tags
- Extracts title, artist, album, and cover image
- Displays current metadata in a clean preview

### 3. Metadata Editing
- Users can modify title, artist, and album fields
- Upload new cover images to replace existing artwork
- Real-time preview of changes

### 4. File Download
- Uses `browser-id3-writer` to write new metadata
- Creates a new MP3 file with updated tags
- Downloads the modified file with new filename

## 🎨 Design Philosophy

- **Minimal**: Clean, distraction-free interface
- **Typography**: Funnel Sans font for excellent readability
- **No Curves**: Sharp, geometric design elements
- **No Shadows**: Flat, modern aesthetic
- **Accessibility**: High contrast and clear visual hierarchy

## 🔒 Privacy & Security

- **Zero Server Storage**: Files are processed entirely in your browser
- **No Tracking**: No analytics or user behavior tracking
- **Open Source**: Transparent codebase for security review
- **Client-side Only**: All processing happens locally

## 🐛 Troubleshooting

### Common Issues

1. **"ID3Writer is not a constructor"**
   - Ensure `browser-id3-writer` is properly installed
   - Check browser console for detailed error messages

2. **Metadata not displaying**
   - Verify the MP3 file has embedded ID3 tags
   - Check browser console for parsing errors

3. **Cover image not showing**
   - Ensure the image file is a valid image format
   - Check file size (large images may cause issues)

### Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Manish Tamang**
- Website: [https://www.manishtamang.com](https://www.manishtamang.com)
- GitHub: [@Manish-Tamang](https://github.com/Manish-Tamang)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- MP3 processing with [music-metadata](https://github.com/Borewit/music-metadata) and [browser-id3-writer](https://github.com/egoroof/browser-id3-writer)
- Icons from [Lucide React](https://lucide.dev/)

---

Made with ❤️ by [Manish Tamang](https://www.manishtamang.com)
