# datavault-insight-stream

A next.js and fastapi-powered analytical SaaS tool for real-time data visualization and insights

## Features

- Dynamic dashboard creation
- Real-time data synchronization
- Intuitive user interface

## Getting Started

### Prerequisites

Make sure you have Node.js and Python installed on your machine.

### Installation

1. Clone the project repository:
   ```bash
   git clone https://github.com/yourusername/datavault-insight-stream.git
   ```

2. Navigate to the project directory:
   ```bash
   cd datavault-insight-stream
   ```

3. Install Node.js dependencies:
   ```bash
   npm install
   ```

4. Navigate to the `backend` directory and set up the Python environment:
   ```bash
   cd backend
   python -m venv env
   source env/bin/activate # On Windows use `env\Scripts\activate`
   pip install -r requirements.txt
   ```

### Running the Application

1. Start the FastAPI server:
   ```bash
   cd backend
   uvicorn main:app --reload
   ```

2. Start the Next.js development server:
   ```bash
   cd datavault-insight-stream
   npm run dev
   ```

3. Open your browser and go to `http://localhost:3000` to see the application in action.

## Contributing

Feel free to contribute to this project by submitting issues or pull requests.

## License

This project is licensed under the MIT License.