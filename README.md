# UniResource Hub

A centralized platform for managing and accessing academic learning resources for ALU students.

## Overview

The UniResource Hub is a web-based application designed to eliminate resource fragmentation by providing a unified platform where ALU students can upload, organize, search, and access all their academic materials in one place.

## Features

- **User Authentication**: Secure registration and login with ALU email addresses
- **Resource Management**: Upload files (PDF, DOCX, PPTX, etc.) and submit external links
- **Smart Categorization**: Organize resources by course, module, and topics with custom tags
- **Powerful Search**: Full-text search across titles, descriptions, and tags
- **Advanced Filtering**: Filter by category, resource type, and upload date
- **Personalized Dashboard**: Quick access to recent resources and bookmarks
- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices

## Technology Stack

### Backend

- **FastAPI**: Modern Python web framework
- **PostgreSQL**: Robust relational database
- **SQLAlchemy**: Python ORM for database operations
- **Pydantic**: Data validation and serialization
- **JWT**: Secure authentication tokens
- **bcrypt**: Password hashing

### Frontend

- **React**: Component-based UI library
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Axios**: HTTP client for API calls

### Infrastructure

- **Docker**: Containerization for easy deployment
- **Cloud Storage**: File storage and management

## Project Structure

```
liberiste/
├── backend/                 # FastAPI backend application
│   ├── app/
│   │   ├── api/            # API routes
│   │   ├── core/           # Core functionality (auth, config)
│   │   ├── db/             # Database models and operations
│   │   ├── schemas/        # Pydantic schemas
│   │   └── services/       # Business logic
│   ├── alembic/            # Database migrations
│   ├── tests/              # Backend tests
│   └── requirements.txt    # Python dependencies
├── frontend/               # React TypeScript frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Application pages
│   │   ├── services/       # API service functions
│   │   ├── types/          # TypeScript type definitions
│   │   └── utils/          # Utility functions
│   ├── public/             # Static assets
│   └── package.json        # Node.js dependencies
└── docker-compose.yml      # Development environment
```

## Getting Started

### Prerequisites

- Python 3.9+
- Node.js 16+
- PostgreSQL 13+
- Docker (optional)

### Development Setup

1. **Clone and navigate to the project**

   ```bash
   cd liberiste
   ```

2. **Backend Setup**

   ```bash
   cd backend
   pip install -r requirements.txt
   # Set up environment variables
   # Run database migrations
   uvicorn app.main:app --reload
   ```

3. **Frontend Setup**

   ```bash
   cd frontend
   npm install
   npm start
   ```

4. **Database Setup**
   ```bash
   # Create PostgreSQL database
   # Run migrations
   ```

## Development Guidelines

- Follow the Software Requirements Specification (SRS) document
- Implement security best practices (HTTPS, input validation, authentication)
- Write clean, documented code with proper error handling
- Follow the established project structure
- Test new features thoroughly

## API Documentation

Once the backend is running, API documentation is available at:

- Swagger UI: `http://localhost:8000/docs`
- ReDoc: `http://localhost:8000/redoc`

## Contributing

1. Follow the established code style and structure
2. Write tests for new features
3. Update documentation as needed
4. Ensure all security requirements are met

## License

This project is developed for African Leadership University (ALU) students.
