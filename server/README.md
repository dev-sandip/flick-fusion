# 🎥 Video Streaming Platform (YouTube-like)

<div align="center">
  <img src="https://nestjs.com/img/logo_text.svg" alt="NestJS Logo" width="200">
  <h3>A scalable video streaming platform built with NestJS</h3>
  <p>Featuring adaptive bitrate streaming, real-time engagement, and microservices architecture</p>
  
  <!-- Badges -->
  <img src="https://img.shields.io/badge/Node.js-18%2B-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js Version">
  <img src="https://img.shields.io/badge/TypeScript-4%2B-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License">
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen?style=for-the-badge" alt="PRs Welcome">
</div>

---

## 🌟 Features

- **Video Upload & Processing**: Chunked uploads with resumable support and automatic transcoding
- **Adaptive Streaming**: HLS/DASH streaming for smooth playback across devices
- **User Management**: Account creation, channel customization, and subscription system
- **Real-time Engagement**: Live comments, view counts, and like/dislike synchronization
- **Search & Discovery**: Full-text search with filtering and personalized recommendations
- **Content Moderation**: Automated content checking using AI services
- **Monetization**: Ad integration, premium content, and creator analytics
- **Scalable Architecture**: Microservices-based transcoding, CDN integration, and horizontal scaling

---

## 🛠️ Tech Stack

### Backend

<div align="center">
  <table>
    <tr>
      <td align="center" width="96">
        <a href="https://nestjs.com">
          <img src="https://nestjs.com/img/logo-small.svg" width="48" height="48" alt="NestJS" />
        </a>
        <br>NestJS
      </td>
      <td align="center" width="96">
        <a href="https://nodejs.org">
          <img src="https://nodejs.org/static/images/logo.svg" width="48" height="48" alt="Node.js" />
        </a>
        <br>Node.js
      </td>
      <td align="center" width="96">
        <a href="https://www.typescriptlang.org">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" width="48" height="48" alt="TypeScript" />
        </a>
        <br>TypeScript
      </td>
      <td align="center" width="96">
        <a href="https://www.postgresql.org">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" width="48" height="48" alt="PostgreSQL" />
        </a>
        <br>PostgreSQL
      </td>
      <td align="center" width="96">
        <a href="https://redis.io">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg" width="48" height="48" alt="Redis" />
        </a>
        <br>Redis
      </td>
    </tr>
    <tr>
      <td align="center" width="96">
        <a href="https://aws.amazon.com/s3">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg" width="48" height="48" alt="AWS S3" />
        </a>
        <br>AWS S3
      </td>
      <td align="center" width="96">
        <a href="https://www.elastic.co">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/elasticsearch/elasticsearch-original.svg" width="48" height="48" alt="Elasticsearch" />
        </a>
        <br>Elasticsearch
      </td>
      <td align="center" width="96">
        <a href="https://socket.io">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/socketio/socketio-original.svg" width="48" height="48" alt="Socket.IO" />
        </a>
        <br>Socket.IO
      </td>
      <td align="center" width="96">
        <a href="https://ffmpeg.org">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/ffmpeg/ffmpeg-original.svg" width="48" height="48" alt="FFmpeg" />
        </a>
        <br>FFmpeg
      </td>
      <td align="center" width="96">
        <a href="https://www.docker.com">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg" width="48" height="48" alt="Docker" />
        </a>
        <br>Docker
      </td>
    </tr>
  </table>
</div>

### Frontend

<div align="center">
  <table>
    <tr>
      <td align="center" width="96">
        <a href="https://reactjs.org">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" width="48" height="48" alt="React" />
        </a>
        <br>React
      </td>
      <td align="center" width="96">
        <a href="https://reactnative.dev">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" width="48" height="48" alt="React Native" />
        </a>
        <br>React Native
      </td>
      <td align="center" width="96">
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" width="48" height="48" alt="JavaScript" />
        </a>
        <br>JavaScript
      </td>
    </tr>
  </table>
</div>

---

## 📋 Prerequisites

- Node.js 18+
- PostgreSQL 14+
- Redis 6+
- Docker & Docker Compose
- AWS Account (for S3 and CloudFront)
- FFmpeg (for local development)

---

## 🚀 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/video-streaming-platform.git
   cd video-streaming-platform
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env
   ```

   Edit `.env` with your configuration:

   ```env
   # Database
   DB_HOST=localhost
   DB_PORT=5432
   DB_USER=postgres
   DB_PASSWORD=yourpassword
   DB_NAME=video_platform

   # Redis
   REDIS_HOST=localhost
   REDIS_PORT=6379

   # JWT
   JWT_SECRET=your_jwt_secret
   JWT_EXPIRES_IN=7d

   # AWS
   AWS_ACCESS_KEY_ID=your_access_key
   AWS_SECRET_ACCESS_KEY=your_secret_key
   AWS_S3_BUCKET=your_bucket_name
   AWS_REGION=us-east-1

   # Elasticsearch
   ELASTICSEARCH_URL=http://localhost:9200
   ```

4. **Set up the database**

   ```bash
   # Create database
   createdb video_platform

   # Run migrations
   npm run migration:run
   ```

5. **Start Redis**

   ```bash
   redis-server
   ```

6. **Start Elasticsearch** (using Docker)
   ```bash
   docker run -p 9200:9200 -e "discovery.type=single-node" docker.elastic.co/elasticsearch/elasticsearch:7.17.0
   ```

## 🏃 Running the Application

### Development Mode

1. **Start the main application**

   ```bash
   npm run start:dev
   ```

2. **Start the transcoding microservice** (in a separate terminal)
   ```bash
   cd transcoding-service
   npm install
   npm run start:dev
   ```

### Production Mode

1. **Build the application**

   ```bash
   npm run build
   ```

2. **Start the application**
   ```bash
   npm run start:prod
   ```

### Using Docker Compose

For a complete setup with all services:

```bash
docker-compose up -d
```

---

## 🧪 Testing

```bash
# Unit tests
npm test

# E2E tests
npm run test:e2e

# Test coverage
npm run test:cov
```

---

## 📚 API Documentation

Once the application is running, access the Swagger UI at:

```
http://localhost:3000/api
```

---

## 📁 Project Structure

```
├── src/
│   ├── modules/
│   │   ├── auth/           # Authentication module
│   │   ├── videos/         # Video management
│   │   ├── users/          # User management
│   │   ├── channels/       # Channel management
│   │   ├── comments/       # Comments system
│   │   ├── search/         # Search functionality
│   │   ├── recommendations/ # Recommendation engine
│   │   ├── moderation/     # Content moderation
│   │   ├── analytics/      # Analytics dashboard
│   │   └── notifications/  # Real-time notifications
│   ├── common/
│   │   ├── decorators/     # Custom decorators
│   │   ├── filters/        # Exception filters
│   │   ├── interceptors/   # Interceptors
│   │   ├── pipes/          # Validation pipes
│   │   └── utils/          # Utility functions
│   ├── config/             # Configuration files
│   ├── database/           # Database configuration
│   └── main.ts             # Application entry point
├── transcoding-service/    # Video transcoding microservice
├── test/                   # Test files
├── .env.example            # Environment variables template
├── docker-compose.yml      # Docker compose configuration
└── README.md               # This file
```

## 🔧 Key Components

### Video Processing Pipeline

<div align="center">
  <img src="https://img.shields.io/badge/Upload-Chunked-blue?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2ZmZiI+PHBhdGggZD0iTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTAgMThjLTQuNDEgMC04LTMuNTktOC04czMuNTktOCA4LTggOCAzLjU5IDggOC0zLjU5IDgtOCA4em0wLTE0Yy0yLjIxIDAtNCAxLjc5LTQgNGg0djQuMTdjMCAuNDUuMzUuODIuNzkuODJzLjgxLS4zNS44MS0uODFWMTJjMC0yLjIxLTEuNzktNC00LTR6Ii8+PC9zdmc+" alt="Upload">
  <img src="https://img.shields.io/badge/Validation-Success-green?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2ZmZiI+PHBhdGggZD0iTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bS0yIDE1bC01LTUgMS40MS0xLjQxTDEwIDE0LjE3bDcuNTktNy41OUwxOSA4bC05IDl6Ii8+PC9zdmc+" alt="Validation">
  <img src="https://img.shields.io/badge/Transcoding-Multi-orange?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2ZmZiI+PHBhdGggZD0iTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTAgMThjLTQuNDEgMC04LTMuNTktOC04czMuNTktOCA4LTggOCAzLjU5IDggOC0zLjU5IDgtOCA4em0wLTE0Yy0yLjIxIDAtNCAxLjc5LTQgNGg0djRjMCAuNTUuNDUgMSAxIDFzMS0uNDUgMS0xdi00aDRjMC0yLjIxLTEuNzktNC00LTR6Ii8+PC9zdmc+" alt="Transcoding">
  <img src="https://img.shields.io/badge/Storage-S3-yellow?style=for-the-badge&logo=amazon-s3&logoColor=white" alt="Storage">
</div>

1. **Upload**: Videos are uploaded in chunks using the tus protocol
2. **Validation**: File format and content verification
3. **Transcoding**: Conversion to multiple resolutions (1080p, 720p, 480p, 360p)
4. **Segmentation**: Splitting into 2-10 second chunks for adaptive streaming
5. **Storage**: Upload to AWS S3 with CloudFront CDN
6. **Metadata**: Update database with video information

### Real-time Features

<div align="center">
  <img src="https://img.shields.io/badge/Comments-Live-purple?style=for-the-badge&logo=socket.io&logoColor=white" alt="Comments">
  <img src="https://img.shields.io/badge/Views-Realtime-red?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2ZmZiI+PHBhdGggZD0iTTEyIDQuNWMtNyAwIDExIDcuNSAxMSA3LjVzLTQgNy41LTExIDcuNS0xMS03LjUtMTEtNy41IDQtNy41IDExLTcuNXptMCAxM2MtMy4wMyAwLTUuNS0yLjQ3LTUuNS01LjVzMi40Ny01LjUgNS41LTUuNSA1LjUgMi40NyA1LjUgNS41LTIuNDcgNS41LTUuNSA1LjV6bTAtOWMtMS45MyAwLTMuNSAxLjU3LTMuNSAzLjVzMS41NyAzLjUgMy41IDMuNSAzLjUtMS41NyAzLjUtMy41LTEuNTctMy41LTMuNS0zLjV6Ii8+PC9zdmc+" alt="Views">
  <img src="https://img.shields.io/badge/Engagement-Instant-blue?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2ZmZiI+PHBhdGggZD0iTTEyIDIxLjM1bC0xLjQ1LTEuMzJDNS40IDE1LjM2IDIgMTIuMjggMiA4LjUgMiA1LjQyIDQuNDIgMyA3LjUgM2MxLjc0IDAgMy40MS44MSA0LjUgMi4wOUMxMy4wOSAzLjgxIDE0Ljc2IDMgMTYuNSAzYzMuMDggMCA1LjUgMi40MiA1LjUgNS41IDAgMy43OC0zLjQgNi44Ni04LjU1IDExLjU0TDEyIDIxLjM1eiIvPjwvc3ZnPg==" alt="Engagement">
</div>

- Live comments during video playback
- View count updates
- Like/dislike synchronization
- Notification system for new uploads and replies

### Search & Discovery

<div align="center">
  <img src="https://img.shields.io/badge/Search-Elasticsearch-005571?style=for-the-badge&logo=elasticsearch&logoColor=white" alt="Search">
  <img src="https://img.shields.io/badge/Recommendations-AI-FF6F00?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2ZmZiI+PHBhdGggZD0iTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTAgMThjLTQuNDEgMC04LTMuNTktOC04czMuNTktOCA4LTggOCAzLjU5IDggOC0zLjU5IDgtOCA4em0xLTEzaC0yVjdoMnYyem0wIDRoLTJ2LTJoMnYyeiIvPjwvc3ZnPg==" alt="Recommendations">
</div>

- Full-text search across video titles, descriptions, and tags
- Filtering by duration, upload date, resolution
- Personalized recommendations based on viewing history
- Trending videos algorithm

## 🤝 Contributing

<div align="center">
  <img src="https://img.shields.io/badge/Contributions-Welcome-green?style=for-the-badge&logo=github&logoColor=white" alt="Contributions">
  <img src="https://img.shields.io/badge/PRs-Enjoy-brightgreen?style=for-the-badge&logo=git&logoColor=white" alt="PRs">
</div>

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

<div align="center">
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License">
  <p>This project is licensed under the MIT License - see the <a href="LICENSE">LICENSE</a> file for details</p>
</div>

## 🙏 Acknowledgments

<div align="center">
  <table>
    <tr>
      <td align="center">
        <a href="https://nestjs.com">
          <img src="https://nestjs.com/img/logo-small.svg" width="48" height="48" alt="NestJS" />
        </a>
      </td>
      <td align="center">
        <a href="https://ffmpeg.org">
          <img src="https://avatars.githubusercontent.com/u/729418?s=48&v=4" width="48" height="48" alt="FFmpeg" />
        </a>
      </td>
      <td align="center">
        <a href="https://aws.amazon.com">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg" width="48" height="48" alt="AWS" />
        </a>
      </td>
      <td align="center">
        <a href="https://socket.io">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/socketio/socketio-original.svg" width="48" height="48" alt="Socket.IO" />
        </a>
      </td>
    </tr>
    <tr>
      <td align="center">NestJS Team</td>
      <td align="center">FFmpeg Community</td>
      <td align="center">AWS Services</td>
      <td align="center">Socket.IO Team</td>
    </tr>
  </table>
</div>

## 📞 Support

<div align="center">
  <p>For support, please open an issue in the repository or contact the development team</p>
  <a href="https://github.com/dev-sandip/flick-fusion/issues">
    <img src="https://img.shields.io/badge/Report_Issue-FF6B6B?style=for-the-badge&logo=github&logoColor=white" alt="Report Issue">
  </a>
  <a href="mailto:dev@example.com">
    <img src="https://img.shields.io/badge/Email_Dev-4ECDC4?style=for-the-badge&logo=gmail&logoColor=white" alt="Email">
  </a>
</div>

<div align="center">
  <p>⭐ If you find this project useful, please consider giving it a star!</p>
  <img src="https://img.shields.io/github/stars/dev-sandip/flick-fusion?style=social" alt="GitHub Stars">
</div>
