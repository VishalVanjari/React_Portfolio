# 🚀 Vishal Vanjari - React Portfolio

A modern, responsive portfolio website built with React.js showcasing my skills, projects, and professional experience as a Full Stack Developer.

![React](https://img.shields.io/badge/React-18.2.0-blue.svg)
![CSS3](https://img.shields.io/badge/CSS3-Styling-orange.svg)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)
![Responsive](https://img.shields.io/badge/Design-Responsive-green.svg)

## 🌟 Live Demo

[View Live Portfolio](https://vishavanjari.github.io/React_Portfolio) *(Replace with your actual deployed URL)*

## 📋 Table of Contents

- [Features](#-features)
- [Technologies Used](#-technologies-used)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Usage](#-usage)
- [Sections](#-sections)
- [Customization](#-customization)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [Contact](#-contact)
- [License](#-license)

## ✨ Features

- **Fully Responsive Design** - Works perfectly on all devices (mobile, tablet, desktop)
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Interactive Components** - Modal popups, smooth scrolling, and hover effects
- **Contact Form Integration** - Working contact form using EmailJS
- **Skills Showcase** - Interactive skills section with progress indicators
- **Project Gallery** - Detailed project cards with descriptions and links
- **Downloadable Resume** - One-click CV download functionality
- **SEO Optimized** - Meta tags and semantic HTML structure
- **Fast Loading** - Optimized images and efficient code structure
- **Cross-browser Compatible** - Works on all modern browsers

## 🛠 Technologies Used

### Frontend
- **React.js** (18.2.0) - Core framework
- **HTML5** - Markup structure
- **CSS3** - Styling and animations
- **JavaScript (ES6+)** - Interactive functionality

### Libraries & Dependencies
- **@emailjs/browser** (3.10.0) - Contact form functionality
- **@iconscout/react-unicons** (1.1.6) - Icon library
- **Swiper.js** (9.0.4) - Touch slider for testimonials
- **React Router DOM** (6.8.1) - Navigation (if needed)
- **Bootstrap** (5.2.3) - Additional styling utilities

### Development Tools
- **Create React App** - Project setup and build tools
- **React Scripts** (5.0.1) - Development server and build scripts
- **Git** - Version control
- **GitHub** - Code repository and deployment

## 📁 Project Structure

```
React_Portfolio/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── about/
│   │   │   ├── About.jsx
│   │   │   ├── Info.jsx
│   │   │   └── about.css
│   │   ├── contact/
│   │   │   ├── Contact.jsx
│   │   │   └── contact.css
│   │   ├── footer/
│   │   │   ├── Footer.jsx
│   │   │   └── footer.css
│   │   ├── header/
│   │   │   ├── Header.jsx
│   │   │   └── header.css
│   │   ├── home/
│   │   │   ├── Home.jsx
│   │   │   ├── Data.jsx
│   │   │   ├── Social.jsx
│   │   │   ├── ScrollDown.jsx
│   │   │   └── home.css
│   │   ├── qualification/
│   │   │   ├── Qualification.jsx
│   │   │   └── qualification.css
│   │   ├── services/
│   │   │   ├── Services.jsx
│   │   │   └── services.css
│   │   ├── skills/
│   │   │   ├── Skills.jsx
│   │   │   ├── Frontend.jsx
│   │   │   ├── Backend.jsx
│   │   │   └── skills.css
│   │   ├── testimonial/
│   │   │   ├── Testimonial.jsx
│   │   │   ├── Data.jsx
│   │   │   └── testimonial.css
│   │   └── scrollup/
│   │       ├── ScrollUp.jsx
│   │       └── scrollup.css
│   ├── assets/
│   │   ├── images/
│   │   ├── icons/
│   │   └── Vishal-Cv.pdf
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
├── package-lock.json
└── README.md
```

## 🚀 Installation

### Prerequisites
- Node.js (v14.0.0 or higher)
- npm or yarn package manager
- Git

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/VishalVanjari/React_Portfolio.git
   cd React_Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open in browser**
   - Navigate to `http://localhost:3000`
   - The app will automatically reload when you make changes

## 💻 Usage

### Development
```bash
npm start          # Start development server
npm test           # Run tests
npm run build      # Build for production
npm run eject      # Eject from Create React App (irreversible)
```

### Environment Setup
Create a `.env` file in the root directory for environment variables:
```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

## 📖 Sections

### 🏠 Home
- Hero section with introduction
- Professional title and description
- Call-to-action button
- Social media links

### 👨‍💻 About
- Personal introduction
- Key statistics and achievements
- Downloadable CV/Resume
- Profile image with animations

### 🛠 Skills
- **Frontend Technologies**: HTML, CSS, JavaScript, React, Bootstrap
- **Backend Technologies**: Node.js, Java, Python, PHP, MySQL, MongoDB
- Interactive skill cards with proficiency levels

### 💼 Services/Projects
- **Rural E-health** - Healthcare management system
- **Converges 2k23 Website** - Event management platform
- **Tour Management** - Travel booking system
- Modal popups with detailed project information

### 🎓 Qualification
- Education timeline
- Work experience
- Interactive tabs for easy navigation

### 📞 Contact
- Contact form with EmailJS integration
- Personal information
- Social media links
- Location details

## 🎨 Customization

### Updating Personal Information
1. **Edit personal details** in `src/components/home/Data.jsx`
2. **Update skills** in `src/components/skills/Frontend.jsx` and `Backend.jsx`
3. **Modify projects** in `src/components/services/Services.jsx`
4. **Change contact info** in `src/components/contact/Contact.jsx`

### Styling Customization
- **CSS Variables**: Modify `src/App.css` for global theme changes
- **Colors**: Update CSS custom properties for consistent theming
- **Fonts**: Change font families in the root CSS variables
- **Responsive Design**: Adjust breakpoints in component CSS files

### Adding New Sections
1. Create a new component folder in `src/components/`
2. Add the component to `src/App.js`
3. Update navigation in `src/components/header/Header.jsx`

## 🌐 Deployment

### GitHub Pages
```bash
npm install --save-dev gh-pages
npm run build
npm run deploy
```

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`

### Vercel
```bash
npm install -g vercel
vercel --prod
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📬 Contact

**Vishal Vanjari**
- **Email**: [your-email@example.com](mailto:your-email@example.com)
- **LinkedIn**: [linkedin.com/in/vishal-vanjari](https://linkedin.com/in/vishal-vanjari)
- **GitHub**: [github.com/VishalVanjari](https://github.com/VishalVanjari)
- **Portfolio**: [Your Portfolio URL](https://your-portfolio-url.com)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Create React App** for the initial project setup
- **Unicons** for the beautiful icons
- **EmailJS** for contact form functionality
- **Swiper.js** for the smooth slider component
- **React Community** for excellent documentation and support

---

⭐ **If you found this project helpful, please give it a star!** ⭐

Made with ❤️ by [Vishal Vanjari](https://github.com/VishalVanjari)