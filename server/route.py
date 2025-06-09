from fastapi import APIRouter, status
from fastapi.responses import JSONResponse
from model import QueryModel


api = APIRouter()



@api.get("/health")
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
    
    

@api.post("/search")
async def search(query: QueryModel):
    return query.prompt