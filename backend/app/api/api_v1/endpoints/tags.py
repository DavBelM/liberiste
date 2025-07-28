from fastapi import APIRouter

router = APIRouter()

@router.get("/")
async def list_tags():
    return {"message": "Tags endpoint - to be implemented"}
