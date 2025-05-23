from flask import Flask, request, jsonify
from flask_cors import CORS

from algorithms.quick import quick_sort
from algorithms.heap import heap_sort

# You can re-enable these once available
# from algorithms.bubble import bubble_sort
# from algorithms.selection import selection_sort
# from algorithms.insertion import insertion_sort
# from algorithms.merge import merge_sort

ALGORITHMS = {
    "quick": quick_sort,
    "heap": heap_sort,
    # "bubble": bubble_sort,
    # "selection": selection_sort,
    # "insertion": insertion_sort,
    # "merge": merge_sort,
}

TEAM_INFO = {
    "team_leader": "Mahmoud Magdy Badawy",
    "team_members": [
        "Youssef Mohammed Gamal",
        "Aly Sayed Aly",
        "Donya Mousa",
        "Marwan Mostafa",
    ],
}

app = Flask(__name__)
CORS(app)

@app.get("/algorithms")
def list_algorithms():
    return jsonify(sorted(ALGORITHMS.keys()))

@app.post("/sort")
def sort_endpoint():
    data = request.get_json() or {}
    algorithm = data.get("algorithm")
    array = data.get("array")
    if algorithm not in ALGORITHMS or not isinstance(array, list):
        return jsonify({"error": "Invalid request"}), 400
    steps = [
        {"state": state, "metrics": metrics}
        for state, metrics in ALGORITHMS[algorithm](array)
    ]
    return jsonify({"steps": steps})

@app.get("/team")
def team_endpoint():
    return jsonify(TEAM_INFO)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
