# Photos Directory

Place your photos for the monthsary website in this directory.

## How to Add Photos to Your Gallery

1. Add your photos to this `public/images` directory
2. Name them in a way that's easy to reference (e.g., `photo1.jpg`, `photo2.jpg`, etc.)
3. Edit the `photos` array in `app/page.js` to include your images with the following structure:

```javascript
const photos = [
  { 
    id: 1, 
    title: 'First Date', 
    description: 'Our wonderful first date at the park', 
    src: '/images/photo1.jpg' 
  },
  { 
    id: 2, 
    title: 'Beach Trip', 
    description: 'That amazing weekend at the beach', 
    src: '/images/photo2.jpg' 
  },
  // Add more photos as needed
];
```

For best results, use photos with an aspect ratio close to 4:5 (portrait orientation works best).

Enjoy your beautiful monthsary website! 