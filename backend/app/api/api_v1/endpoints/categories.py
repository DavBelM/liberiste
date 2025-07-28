from fastapi import APIRouter

router = APIRouter()

@router.get("/")
async def list_categories():
    return {"message": "Categories endpoint - to be implemented"}
