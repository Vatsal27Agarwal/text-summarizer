# Text Summarizer

A modern web application that summarizes large chunks of text into concise summaries using Natural Language Processing (NLP) techniques.

## Features
- 🚀 Modern React-based UI with Material-UI components
- 🤖 NLTK-based text summarization
- 📊 Word count statistics and reduction percentage
- 🎚️ Adjustable summary length (1-10 sentences)
- 🐳 Docker containerization for easy deployment

## Prerequisites

Before running the application, make sure you have the following installed:

### Required for Running
- Docker Desktop
  - [Download for Mac](https://www.docker.com/products/docker-desktop)
  - [Download for Windows](https://www.docker.com/products/docker-desktop)
  - [Installation guide for Linux](https://docs.docker.com/engine/install/)

### Required for Development (optional)
- Node.js (v16 or higher) and npm
  - [Download from nodejs.org](https://nodejs.org/)
- Python (v3.9 or higher)
  - [Download from python.org](https://www.python.org/downloads/)

## Quick Start

1. Unzip the project folder
```bash
unzip text-summarizer.zip
```

2. Navigate to the project directory
```bash
cd text-summarizer
```

3. Start the application using Docker
```bash
docker compose up --build --attach
```

4. Access the application:
- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend API: [http://localhost:5001](http://localhost:5001)

## Development Setup

If you want to develop or modify the application:

### Frontend (React)
```bash
cd frontend
npm install
npm start
```

### Backend (Flask)
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

## Project Structure
```
text-summarizer/
├── frontend/           # React frontend application
│   ├── src/           # React source code
│   ├── public/        # Static files
│   └── Dockerfile     # Frontend container configuration
├── backend/           # Flask backend application
│   ├── app.py        # Main backend logic
│   ├── requirements.txt # Python dependencies
│   └── Dockerfile    # Backend container configuration
└── docker-compose.yml # Docker services configuration
```

## How to Use

1. Open the application in your browser at [http://localhost:3000](http://localhost:3000)
2. Paste or type your text in the input field
3. Use the slider to select how many sentences you want in the summary (1-10)
4. Click "Summarize" to generate the summary
5. View the summary and statistics (original length, summary length, reduction percentage)

## Troubleshooting

### Common Issues

1. **Port already in use**
   - Stop any running services on ports 3000 or 5001
   - Or modify the ports in docker-compose.yml

2. **Docker not running**
   - Make sure Docker Desktop is running
   - Try restarting Docker Desktop

3. **Container build fails**
   - Check your internet connection
   - Try removing existing containers and images:
     ```bash
     docker compose down
     docker system prune -a
     ```

### Getting Help

If you encounter any issues:
1. Check the Docker logs:
   ```bash
   docker compose logs
   ```
2. Check individual container logs:
   ```bash
   docker compose logs frontend
   docker compose logs backend
   ```

## License

This project is open-source and available under the MIT License.
