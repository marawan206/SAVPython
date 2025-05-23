# Sorting Algorithm Visualizer (SAV)

This project demonstrates how common sorting algorithms work using a Flask backend and a React (Vite) frontend. It is developed as a university project for **Nile University** under the supervision of **Dr. Islam Tharwat**.

## Team

- **Mahmoud Magdy Badawy** – Team Leader
- Youssef Mohammed Gamal
- Aly Sayed Aly
- Donya Mousa
- Marwan Mostafa

## Features

- Implementations of Bubble, Selection, Insertion, Merge, Quick and Heap sort algorithms with metrics for comparisons and swaps
- REST API providing algorithm steps and team information
- React visualizer with tabs for each algorithm and an overlay to display sorting steps
- Team page listing all members
- Basic unit tests for all algorithms

## Getting Started

### Prerequisites

- Python 3.8 or newer
- Node.js 18+ and npm

### Backend Setup

1. Install Python dependencies:
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   pip install -r requirements.txt
   ```
2. Run the Flask server:
   ```bash
   python server/app.py
   ```
   The API will be available at `http://localhost:5000`.

### Frontend Setup

1. Install Node packages:
   ```bash
   cd client
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
   Open the provided URL (typically `http://localhost:5173/`) to view the visualizer.

### Running Tests

To verify algorithm implementations, run:

```bash
pytest -q
```

## API Endpoints

- `GET /algorithms` – list available algorithms
- `POST /sort` – sort an array using a chosen algorithm. Body example:
  ```json
  {
    "algorithm": "bubble",
    "array": [5, 1, 4, 2, 8]
  }
  ```
  The response contains the sequence of states and metrics.
- `GET /team` – retrieve team information

## Project Structure

- `server/` – Flask application and sorting algorithms
- `client/` – React frontend (Vite)
- `tests/` – Pytest suite validating algorithms

## License

This project is for educational purposes at Nile University.
