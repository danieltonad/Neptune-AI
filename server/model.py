from pydantic import BaseModel


class QueryModel(BaseModel):
    prompt: str