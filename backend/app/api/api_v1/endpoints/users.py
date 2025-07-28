# Placeholder endpoint files - these will be implemented as we continue

from fastapi import APIRouter

router = APIRouter()

@router.get("/")
async def list_users():
    return {"message": "Users endpoint - to be implemented"}
