from PIL import Image
import numpy as np
from io import BytesIO

def preprocess_image(image_bytes, target_size=(224, 224)):
    # Wrap bytes in BytesIO to create a file-like object
    image = Image.open(BytesIO(image_bytes)).convert("RGB")
    image = image.resize(target_size)

    # Normalize and expand dims for batch
    image_array = np.array(image) / 255.0
    image_array = np.expand_dims(image_array, axis=0)  # Shape: (1, 224, 224, 3)
    return image_array
