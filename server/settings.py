import os
from dotenv import load_dotenv


load_dotenv(override=True)

class Settings:
    GROQ_API_KEY = os.getenv("GROQ_API_KEY")
    
    
    
    
settings = Settings()