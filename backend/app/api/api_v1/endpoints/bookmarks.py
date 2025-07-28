from fastapi import APIRouter

router = APIRouter()

@router.get("/")
async def list_bookmarks():
    return {"message": "Bookmarks endpoint - to be implemented"}
