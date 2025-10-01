🎥 Flick Fusion: Adaptive Bitrate Video Streaming
Flick Fusion is a robust and scalable adaptive bitrate video streaming platform built using a microservice architecture. It leverages modern technologies to deliver seamless video streaming across devices with a sleek and responsive user interface.

✨ Features

🚀 Adaptive Bitrate Streaming: Converts videos into multiple resolutions for optimal streaming on any device.
🏗️ Microservice Architecture: Decoupled services for scalability, maintainability, and fault tolerance.
☁️ AWS Integration:
Temporary video storage in AWS S3 for uploads.
Permanent storage in a dedicated S3 bucket post-processing.


🎞️ FFmpeg Video Processing:
Converts videos into multiple resolutions using FFmpeg.
Automated processing within Docker containers for efficiency.


🔄 Event-Driven Workflow:
Videos are processed asynchronously via an event queue.
Ensures reliable and scalable operations.


💻 Modern Frontend:
Built with Next.js for server-side rendering and performance.
Styled with shadcn/ui for a polished, responsive UI.




🛠️ Architecture Overview

📤 Video Upload:
Users upload videos to a temporary AWS S3 bucket.


📩 Event Queue:
Upload triggers an event in the queue (e.g., RabbitMQ or Kafka).


🐳 Dockerized FFmpeg:
A Docker container spins up on AWS to process videos.
FFmpeg converts videos into multiple resolutions for adaptive streaming.


📥 Permanent Storage:
Processed videos are stored in a permanent AWS S3 bucket.


🌐 Frontend:
Users stream videos via a Next.js-based frontend with a shadcn/ui interface.




🧰 Tech Stack

Backend: 🟦 NestJS – A progressive Node.js framework for building scalable server-side applications.
Frontend: ⚛️ Next.js – A React framework for server-side rendering and static site generation.
UI Components: 🎨 shadcn/ui – Beautifully designed, accessible UI components.
Video Processing: 🎥 FFmpeg – A powerful tool for video/audio processing.
Storage: ☁️ AWS S3 – Scalable cloud storage for temporary and permanent video storage.
Containerization: 🐳 Docker – Containerized environments for consistent deployments.
Event Queue: 🔔 RabbitMQ (or Kafka) – Reliable messaging for asynchronous video processing.


🚀 Getting Started
✅ Prerequisites

🟢 Node.js (v16 or higher)
🐳 Docker and Docker Compose
☁️ AWS Account with S3 bucket setup
🎞️ FFmpeg installed locally (for development)

📦 Installation

Clone the repository:
git clone <repository-url>
cd flick-fusion


Install dependencies:
npm install


Set up environment variables:

Create a .env file in the root directory.
Add the following configurations (example):AWS_ACCESS_KEY_ID=your-access-key
AWS_SECRET_ACCESS_KEY=your-secret-key
AWS_REGION=your-region
S3_TEMP_BUCKET=temp-bucket-name
S3_PERMANENT_BUCKET=permanent-bucket-name
QUEUE_URL=your-queue-url




Start the services:
docker-compose up




🌐 Frontend Setup

Navigate to the frontend directory:
cd frontend


Install dependencies:
npm install


Run the development server:
npm run dev


Access the app at http://localhost:3000.




🔙 Backend Setup

Navigate to the backend directory:
cd backend


Install dependencies:
npm install


Start the NestJS server:
npm run start:dev


The backend API will be available at http://localhost:3001.




🤝 Contributing
We welcome contributions! To contribute:

Fork the repository.
Create a feature branch (git checkout -b feature/your-feature).
Commit your changes (git commit -m 'Add your feature').
Push to the branch (git push origin feature/your-feature).
Open a pull request.


📜 License
This project is licensed under the MIT License. See the LICENSE file for details.


  Built with ❤️ by the Flick Fusion Team
