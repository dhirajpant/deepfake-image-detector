from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from app.model_loader import load_model
from app.utils import preprocess_image
import numpy as np

app = FastAPI()

# Allow frontend requests (CORS)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, set specific origin
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load model once at startup
model = load_model()

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    try:
        # Read file and preprocess
        contents = await file.read()
        preprocessed_image = preprocess_image(image_bytes=contents)

        # Predict
        preds = model.predict(preprocessed_image)[0][0]
        label = "Deepfake" if preds >= 0.5 else "Real"

        return {
            "label": label,
            "confidence": round(float(preds), 4)
        }
    except Exception as e:
        return {"error": str(e)}
