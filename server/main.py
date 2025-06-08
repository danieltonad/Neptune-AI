from fastapi import FastAPI
from route import api

app = FastAPI()

app.include_router(api, prefix="/api")