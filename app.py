from flask_cors import CORS

from flask import Flask, request, jsonify
import random
import string

print("Starting Flask app...")

app = Flask(__name__)
CORS(app)


@app.route("/")
def home():
    return "Password Generator Backend is Running!"

@app.route("/generate-password", methods=["POST"])
def generate_password():
    data = request.get_json()

    length = data.get("length", 8)
    uppercase = data.get("uppercase", True)
    numbers = data.get("numbers", True)
    symbols = data.get("symbols", True)

    characters = string.ascii_lowercase

    if uppercase:
        characters += string.ascii_uppercase
    if numbers:
        characters += string.digits
    if symbols:
        characters += string.punctuation

    password = "".join(random.choice(characters) for _ in range(length))

    return jsonify({"password": password})

if __name__ == "__main__":
    app.run(debug=True)
