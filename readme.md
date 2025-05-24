# Personal Portfolio Website

This is a personal portfolio website inspired by [Mahak Makharia's site](https://mahak.me), originally hosted at [https://mahak.me](https://mahak.me) and [source code here](https://github.com/mahakmakharia/mahakmakharia.github.io). It is a single-page static website built using HTML, CSS, pure CSS animations and Javascript (no frameworks or JavaScript libraries).

## ✨ Features

- Responsive layout
- Projects showcase
- Reference showcase
- Contact information section
- Smooth scrolling navigation
- Lightweight, fast, and dependency-free
- Animated sections using CSS `@keyframes`

## 📁 Project Structure

```bash
├── assets/
│ ├── css/
│ │ └── style.css # All custom styles and animations
│ └── images/ # Profile image, project thumbnails, icons
├── index.html # Main HTML structure
├── CNAME # Optional: for custom domain setup
└── README.md
```

## 🚀 Getting Started

To create your own version of this website:

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/yourusername.github.io
   cd yourusername.github.io
   ```

2. **Edit the content**

- Update index.html with your own name, about info, project links, etc.
- Replace images in assets/images/ with your own.
- Customize the styles in assets/css/style.css.

3. **Preview locally**

- Open index.html directly in your browser, or use a local server through some extension

4. **Deploy with GitHub Pages**

- Push your changes to a GitHub repo named yourusername.github.io.
- GitHub will automatically serve it at <https://yourusername.github.io>.

5. **Optional: Set up a custom domain**

- Add a CNAME file containing your domain name (e.g. yourdomain.com).
- Update DNS settings to point to GitHub Pages.

## 🛠 Customizing Animations

All animations are created using CSS keyframes defined in `style.css`. You can easily add new animations or modify existing ones by editing or creating new `@keyframes` blocks.

Example:

```bash
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.my-element {
  animation: fadeIn 1s ease-in;
}
```

## 📄 License

This project open-source. Feel free to fork this repository and use it as the foundation for your own online portfolio!
