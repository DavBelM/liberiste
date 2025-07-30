from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.trustedhost import TrustedHostMiddleware
from app.core.config import settings
from app.api.api_v1.api import api_router
from app.db.init_db import init_db

def create_application() -> FastAPI:
    """
    Create and configure the FastAPI application.
    
    Returns:
        FastAPI: Configured FastAPI application instance
    """
    application = FastAPI(
        title="UniResource Hub API",
        description="A centralized platform for managing and accessing academic learning resources for ALU students",
        version="1.0.0",
        docs_url="/docs" if settings.DEBUG else None,
        redoc_url="/redoc" if settings.DEBUG else None,
    )

    # CORS settings for development and production
    origins = [
        "http://localhost:3000",  # Development
        "http://localhost:3001",  # Development
        "https://liberiste-anlfoech9-gunnerbels-projects.vercel.app",  # Current Vercel URL
    ]
    
    application.add_middleware(
        CORSMiddleware,
        allow_origins=origins,
        allow_origin_regex=r"https://.*\.vercel\.app",  # Allow all Vercel domains
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    # Add trusted host middleware for security
    application.add_middleware(
        TrustedHostMiddleware, 
        allowed_hosts=["localhost", "127.0.0.1", "*.alu.edu"]
    )

    # Include API router
    application.include_router(api_router, prefix="/api/v1")

    return application

app = create_application()

@app.on_event("startup")
async def startup_event():
    """Initialize database on startup."""
    init_db()

@app.get("/")
async def root():
    """Root endpoint for health check."""
    return {
        "message": "UniResource Hub API",
        "status": "healthy",
        "version": "1.0.0"
    }

@app.get("/health")
async def health_check():
    """Health check endpoint for Railway."""
    return {"status": "healthy"}
