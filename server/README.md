Neptune AI · FastAPI Server 🌊

A simple backend service built with FastAPI. It handles natural-language queries, processes them with the Llama‑3 model (via Groq), and returns structured responses.

---

🧠 What It Does

- Exposes an API endpoint to receive queries from the React frontend.
- Sends the query to Groq’s Llama‑3 model for processing.
- Returns a structured response with service listings and scores.
- Supports interactive documentation via Swagger UI and ReDoc.

---

⚙️ Getting Started

1. Clone the repo:
   git clone https://github.com/danieltonad/Neptune-AI.git
   cd Neptune-AI/server

2. Install dependencies:
   pip install -r requirements.txt

3. Set your API key:
   export GROQ_API_KEY="YOUR_GROQ_KEY"

4. Run the server:
   uvicorn main:app --reload

   The server will be accessible at http://127.0.0.1:8000

---

🛠️ API Documentation

Interactive docs are available once the server is running:

- Swagger UI: http://127.0.0.1:8000/docs
- ReDoc:        http://127.0.0.1:8000/redoc

These docs are auto-generated based on FastAPI's type annotations.


---

🎯 Key Features

- FastAPI: async-ready, type-checked, and clean routing.
- OpenAPI Docs: automatic API documentation.
- Model Integration: uses Groq's free-tier Llama‑3 model.
- Neptune Score: custom scoring based on rating, reviews, and booking ease.

---

🔮 Future Enhancements

- Add error handling and retry logic.
- Support streaming responses for real-time updates.
- Add unit tests (e.g., pytest).
- Add Docker support and CI/CD pipelines.

---

🙋‍♂️ Feedback

Got ideas or issues? Open an issue on GitHub or join the discussion!

