# CMC Club Website - Image Management Guide

## 📁 Image Organization Structure

Your images should be organized in the `public` folder with the following structure:

```
public/
├── image.png                    # Main logo (already exists)
├── president-image.jpg          # President's photo
├── team/                       # Team member photos
│   ├── sarah-johnson.jpg
│   ├── mike-chen.jpg
│   ├── emily-davis.jpg
│   ├── alex-rodriguez.jpg
│   ├── lisa-wang.jpg
│   ├── david-kim.jpg
│   ├── maya-patel.jpg
│   ├── james-wilson.jpg
│   ├── sophie-brown.jpg
│   ├── ryan-lee.jpg
│   ├── zara-ahmed.jpg
│   └── tom-garcia.jpg
├── projects/                   # Project images
│   ├── smart-campus-navigation.jpg
│   ├── eco-transport.jpg
│   ├── tech-workshops.jpg
│   └── alumni-connect.jpg
└── events/                     # Event images
    ├── tech-summit-2024.jpg
    ├── ai-ml-workshop.jpg
    ├── startup-pitch.jpg
    ├── expert-talk.jpg
    ├── hackathon-2024.jpg
    └── alumni-networking.jpg
```

## 🖼️ How to Add Images

### 1. President Image

- Save your president's photo as `president-image.jpg` in the `public` folder
- Recommended size: 400x400 pixels or higher
- Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`

### 2. Team Member Images

- Save team member photos in the `public/team/` folder
- Use the exact filenames as specified in the structure above
- Recommended size: 300x300 pixels or higher
- If you don't have a photo for someone, the system will show a default icon

### 3. Project Images

- Save project images in the `public/projects/` folder
- Use the exact filenames as specified in the structure above
- Recommended size: 600x400 pixels or higher
- These images represent your club's projects

### 4. Event Images

- Save event images in the `public/events/` folder
- Use the exact filenames as specified in the structure above
- Recommended size: 400x300 pixels or higher
- These images will be displayed in the events section

## ⚙️ Customizing Content

### Update President Information

Edit `lib/imageData.ts` to modify president details:

```typescript
export const presidentData: PresidentData = {
  name: "Your President Name",
  title: "President, CMC Club",
  description: "Your description here...",
  vision: "Your vision statement",
  image: "/president-image.jpg", // Make sure this matches your uploaded file
  social: {
    facebook: "https://facebook.com/yourpresident",
    instagram: "https://instagram.com/yourpresident",
    linkedin: "https://linkedin.com/in/yourpresident",
  },
};
```

### Update Team Members

Edit the `teamMembers` array in `lib/imageData.ts`:

```typescript
export const teamMembers: TeamMember[] = [
  {
    name: "Team Member Name",
    role: "Their Role",
    image: "/team/their-photo.jpg", // Make sure this matches your uploaded file
    social: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  // Add more members...
];
```

### Update Projects

Edit the `projectsData` array in `lib/imageData.ts`:

```typescript
export const projectsData: ProjectData[] = [
  {
    title: "Project Name",
    description: "Project description...",
    status: "Completed" or "Ongoing",
    image: "/projects/project-image.jpg" // Make sure this matches your uploaded file
  },
  // Add more projects...
];
```

### Update Events

Edit the `eventsData` array in `lib/imageData.ts`:

```typescript
export const eventsData: EventData[] = [
  {
    title: "Event Name",
    date: "Event Date",
    time: "Event Time",
    location: "Event Location",
    description: "Event description...",
    category: "Event Category",
    image: "/events/event-image.jpg", // Make sure this matches your uploaded file
  },
  // Add more events...
];
```

## 🔄 Adding New Content

### Adding a New Team Member

1. Add their photo to `public/team/` with a descriptive filename
2. Add their information to the `teamMembers` array in `lib/imageData.ts`
3. The website will automatically display the new member

### Adding a New Project

1. Add the project image to `public/projects/`
2. Add project details to the `projectsData` array in `lib/imageData.ts`
3. The website will automatically display the new project

### Adding a New Event

1. Add the event image to `public/events/`
2. Add event details to the `eventsData` array in `lib/imageData.ts`
3. The website will automatically display the new event

## 📏 Image Guidelines

### Recommended Specifications:

- **President Photo**: 400x400px minimum, square aspect ratio preferred
- **Team Photos**: 300x300px minimum, square aspect ratio preferred
- **Project Images**: 600x400px minimum, 3:2 aspect ratio preferred
- **Event Images**: 400x300px minimum, 4:3 aspect ratio preferred

### File Format Guidelines:

- Use `.jpg` for photographs
- Use `.png` for graphics with transparency
- Use `.webp` for optimal web performance
- Keep file sizes under 1MB for better loading times

### Naming Conventions:

- Use lowercase letters
- Use hyphens (-) instead of spaces
- Use descriptive names (e.g., `john-doe.jpg` not `img1.jpg`)
- Include file extensions

## 🚀 Fallback System

If an image is missing or fails to load, the system will automatically display:

- **President/Team**: Orange circle with user icon
- **Projects**: Orange circle with target icon
- **Events**: Orange circle with calendar icon

This ensures your website always looks professional, even with missing images!

## 🛠️ Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📝 Notes

- Images are automatically optimized by Next.js
- The system supports responsive images for different screen sizes
- Social media links are optional - use "#" for placeholder links
- All image paths are relative to the `public` folder
- Changes to `imageData.ts` require a server restart in development mode

## 🎨 Styling Customization

The image components use Tailwind CSS classes. You can customize the appearance by modifying:

- `components/ImageWithFallback.tsx` - For fallback styling
- `lib/imageData.ts` - For content and image paths
- `app/page.tsx` - For layout and spacing

---

**Happy building! 🚀**
