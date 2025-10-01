import type { Video } from "./types";

export const sampleVideos: Video[] = [
  {
    id: "bigbuckbunny",
    title: "Big Buck Bunny",
    channel: "Blender Foundation",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/5/5f/Blender_logo_no_text.svg",
    views: 1250000,
    minutes: 10,
    uploadedAt: 1609459200,
    description:
      "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore!",
    thumbnail:
      "https://images.unsplash.com/photo‑1?auto=format&fit=crop&w=400&q=80", // sample Unsplash URL
    src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    status: "published",
    featured: true,
    tags: ["animation", "short film", "blender", "open source"],
    sizeMB: 82.5,
  },
  {
    id: "elephantdream",
    title: "Elephant Dream",
    channel: "Blender Foundation",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/5/5f/Blender_logo_no_text.svg",
    views: 980000,
    minutes: 9,
    uploadedAt: 1612137600,
    description: "The first Blender Open Movie from 2006.",
    thumbnail:
      "https://images.unsplash.com/photo‑2?auto=format&fit=crop&w=400&q=80",
    src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    status: "published",
    featured: false,
    tags: ["animation", "short film", "open source"],
    sizeMB: 75.4,
  },
  {
    id: "forbiggerblazes",
    title: "For Bigger Blazes",
    channel: "Google",
    avatar:
      "https://www.gstatic.com/images/branding/product/2x/chromecast_64dp.png",
    views: 450000,
    minutes: 1,
    uploadedAt: 1614556800,
    description:
      "HBO GO now works with Chromecast — the easiest way to enjoy online video on your TV.",
    thumbnail:
      "https://images.unsplash.com/photo‑3?auto=format&fit=crop&w=400&q=80",
    src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    status: "published",
    featured: false,
    tags: ["ad", "chromecast", "tech"],
    sizeMB: 20.1,
  },
  {
    id: "forbiggerescape",
    title: "For Bigger Escape",
    channel: "Google",
    avatar:
      "https://www.gstatic.com/images/branding/product/2x/chromecast_64dp.png",
    views: 600000,
    minutes: 1,
    uploadedAt: 1617235200,
    description:
      "Enjoy online video and music on your TV — for when Batman's escapes aren't quite big enough.",
    thumbnail:
      "https://images.unsplash.com/photo‑4?auto=format&fit=crop&w=400&q=80",
    src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    status: "published",
    featured: false,
    tags: ["ad", "tv", "streaming"],
    sizeMB: 19.3,
  },
  {
    id: "forbiggerfun",
    title: "For Bigger Fun",
    channel: "Google",
    avatar:
      "https://www.gstatic.com/images/branding/product/2x/chromecast_64dp.png",
    views: 720000,
    minutes: 1,
    uploadedAt: 1619827200,
    description:
      "Introducing Chromecast. The easiest way to enjoy online video and music on your TV.",
    thumbnail:
      "https://images.unsplash.com/photo‑5?auto=format&fit=crop&w=400&q=80",
    src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    status: "published",
    featured: false,
    tags: ["chromecast", "tech", "video"],
    sizeMB: 18.8,
  },
];
