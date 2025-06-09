from fastapi import APIRouter, status
from fastapi.responses import JSONResponse
from model import QueryModel
from search_agent import search_and_format_artisans


api = APIRouter()



@api.get("/health", tags=["Health Check"])
def health_check():
    from datetime import datetime
    return JSONResponse(
        content={
            "status": "healthy",
            "timestamp": datetime.utcnow().isoformat() + "Z"
        },
        status_code=status.HTTP_200_OK,
        headers={
            "X-Health-Check": "OK",
            "X-Server-Time": datetime.utcnow().isoformat() + "Z"
        })
    
    

@api.post("/search", tags=["Search"])
async def search(query: QueryModel):
    try:
        data = await search_and_format_artisans(query.prompt)
        return JSONResponse(
            content=data,
            status_code=status.HTTP_200_OK
        )
    except Exception as e:
        print(f"Error during search: {e}")
        return JSONResponse(
            content={"message": f"Unable to process search, please try again later. -> {e}"},
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR
        )