# Our Love Story - Monthsary Celebration

A beautiful and professional website to celebrate your monthsary with your loved one. This modern UI showcases your special message and cherished photos with elegant animations and a clean design.

## Features

- **Responsive Design**: Looks great on all devices
- **Beautiful Hero Section**: Eye-catching opening with floating elements
- **Heartfelt Message Section**: A customizable love letter to your partner
- **Interactive Photo Gallery**: Showcases your beautiful moments together with a lightbox view
- **Smooth Animations**: Parallax effects and fade-ins enhance the user experience
- **Modern UI**: Clean gradient-based design with professional typography

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/monthsary.git
cd monthsary
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Customization

### Adding Your Photos

1. Add your photos to the `public/images` directory.
2. Edit the `photos` array in `app/page.js` to include your images:

```javascript
const photos = [
  { 
    id: 1, 
    title: 'First Date', 
    description: 'Our wonderful first date at the park', 
    src: '/images/photo1.jpg' 
  },
  // Add more photos as needed
];
```

### Customizing the Message

Edit the `Message` component in `app/page.js` to customize your message:

```jsx
<Message 
  sender="Your Name" 
  recipient="Your Partner's Name"
  message={
    <>
      <p>Your custom message here...</p>
      <p>You can add multiple paragraphs...</p>
    </>
  } 
/>
```

Or leave the `message` prop empty to use the default romantic message.

### Customizing the Hero Section

Edit the `Hero` component in `app/page.js` to customize the hero section:

```jsx
<Hero 
  title="Your Custom Title"
  subtitle="Your custom subtitle or quote"
  ctaText="Custom Button Text"
  ctaLink="#message"
/>
```

## Deployment

You can deploy this website to any platform that supports Next.js, such as Vercel, Netlify, or GitHub Pages.

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

1. Push your code to a GitHub repository
2. Import your repository on Vercel
3. Vercel will automatically detect Next.js and deploy your site

## Technical Details

This project is built with:

- [Next.js](https://nextjs.org/) - React framework
- [React](https://reactjs.org/) - JavaScript library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- Modern JavaScript (ES6+)

## License

This project is open source and available under the [MIT License](LICENSE).

Enjoy your beautiful monthsary celebration! ❤️
#   n e t l i f y  
 