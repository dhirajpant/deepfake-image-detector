import tensorflow as tf

# Load and return the model
def load_model(model_path='model/deepse_model.h5'):
    model = tf.keras.models.load_model(model_path, compile=False)
    return model
