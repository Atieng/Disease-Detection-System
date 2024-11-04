from flask import Flask, request, jsonify
import pandas as pd
import re
from datetime import datetime

app = Flask(__name__)

@app.route('/upload-csv', methods=['POST'])
def upload_csv():
    file = request.files['file']
    if not file:
        return jsonify({"error": "No file uploaded"}), 400

    data = pd.read_csv(file)
    # Preprocess and analyze data (using code you provided)
    # ...
    # Return results (e.g., outbreak dates and counts)
    return jsonify({"outbreak_dates": outbreak_dates.tolist()})
