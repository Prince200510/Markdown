# 🚀 Roadmap Viewer

A modern, professional web application for viewing markdown-based programming roadmaps and documentation with a beautiful, interactive interface.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![React](https://img.shields.io/badge/React-18.3.1-61dafb.svg)
![Vite](https://img.shields.io/badge/Vite-6.0.1-646cff.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## ✨ Features

- **🔐 Secure Login System** - Beautiful glassmorphism login interface
- **📖 Markdown Viewer** - Premium styled markdown renderer with syntax highlighting
- **📱 Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **🎨 Modern UI/UX** - Professional design with smooth animations and transitions
- **📚 Multiple Documents** - Easy navigation between different markdown files
- **⚡ Fast Performance** - Built with Vite for lightning-fast development and builds
- **🌙 Professional Styling** - Glassmorphism effects and modern gradients

## 🛠️ Tech Stack

- **Frontend Framework:** React 18.3.1
- **Build Tool:** Vite 6.0.1
- **Styling:** CSS3 with modern features (Grid, Flexbox, Glassmorphism)
- **Markdown Rendering:** react-markdown
- **Font:** Inter (Google Fonts)
- **Icons:** Emoji-based for lightweight performance

## 📁 Project Structure

```
mark/
├── public/
│   ├── C++_COMPLETE_MASTERY_ROADMAP.md
│   ├── DSA.md
│   └── README.md
├── src/
│   ├── components/
│   │   ├── Login.jsx
│   │   ├── Login.css
│   │   ├── MarkdownViewer.jsx
│   │   └── MarkdownViewer.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone [repository-url](https://github.com/Prince200510/Markdown.git)
   cd mark
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   Navigate to http://localhost:5173
   ```

### Login Credentials

- **Username:** `prince`
- **Password:** `1111`

## 📖 Usage

1. **Login:** Enter your credentials on the beautiful login screen
2. **Navigate:** Use the navigation buttons to switch between different documents
3. **Read:** Enjoy the premium markdown reading experience with:
   - Syntax-highlighted code blocks
   - Beautiful typography
   - Responsive tables
   - Professional styling

## 📄 Adding New Documents

To add new markdown files to the viewer:

1. Place your `.md` files in the `public/` directory
2. Update the navigation in `App.jsx` to include your new documents
3. The markdown files will be automatically rendered with professional styling

## 🎨 Customization

### Styling
- **Login Page:** Modify `src/Login.css` for login interface customization
- **Markdown Viewer:** Edit `src/MarkdownViewer.css` for document styling
- **App Layout:** Update `src/App.css` for overall application styling

### Content
- **Documents:** Add/edit markdown files in the `public/` directory
- **Navigation:** Update document list in `src/App.jsx`
- **Branding:** Modify developer credits and app title as needed

## 🚀 Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

## 🌐 Deployment

This application can be deployed to any static hosting service:

- **Vercel:** `npm run build` then deploy `dist/` folder
- **Netlify:** Connect repository and set build command to `npm run build`
- **GitHub Pages:** Use GitHub Actions to build and deploy
- **Firebase Hosting:** Deploy the `dist/` folder after building

## 📱 Browser Support

- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+

## 🔧 Development Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build locally
npm run lint         # Run ESLint
```

## 🎯 Features in Detail

### Login Interface
- **Glassmorphism Design:** Modern glass-like interface with backdrop blur
- **Smooth Animations:** Slide-up animations and hover effects
- **Loading States:** Professional loading spinner during authentication
- **Responsive:** Works seamlessly on all device sizes
- **Error Handling:** Beautiful error messages with shake animations

### Markdown Viewer
- **Premium Typography:** Professional font hierarchy and spacing
- **Code Highlighting:** Syntax-highlighted code blocks with dark theme
- **Responsive Tables:** Mobile-friendly table layouts
- **Modern Elements:** Styled blockquotes, lists, and links
- **Professional Colors:** Carefully chosen color palette for readability

### Navigation
- **Smooth Transitions:** Animated button states and hover effects
- **Active States:** Clear indication of current document
- **Mobile Friendly:** Responsive navigation that works on all devices

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Developer

**Prince Maurya**
- 📧 Email: [princemaurya8879@gmail.com](mailto:princemaurya8879@gmail.com)
- 🌟 Crafted with ❤️ for the programming community

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite team for the lightning-fast build tool
- Google Fonts for the beautiful Inter typeface
- The open-source community for inspiration and tools

---

<div align="center">
  <p>Made with ❤️ by Prince Maurya</p>
  <p>⭐ Star this repo if you found it helpful!</p>
</div>
