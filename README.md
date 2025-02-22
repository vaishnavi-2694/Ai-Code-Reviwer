# AI Code Reviewer

## Overview
This is an AI-powered code reviewer application that takes user input code, analyzes it using Google's Gemini AI model, and provides feedback on potential improvements, optimizations, and best practices.

## Features
- Code input editor with syntax highlighting
- AI-powered code review and suggestions
- Markdown-rendered review output
- Simple and intuitive UI built with React
- Backend API using Node.js and Express

## Tech Stack
- **Frontend:** React, React Markdown, Prism.js, React Simple Code Editor
- **Backend:** Node.js, Express
- **AI Model:** Google Generative AI (Gemini)
- **Styling:** CSS

## Setup & Installation
### Prerequisites
- Node.js installed ([Download here](https://nodejs.org/))
- Git installed ([Download here](https://git-scm.com/))
- Google Gemini API Key ([Get one here](https://ai.google.dev/))

### Steps
1. **Clone the repository:**
   ```sh
   git clone https://github.com/vaishnavi-2694/Ai-Code-Reviwer.git
   cd Ai-Code-Reviwer
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Set up environment variables:**
   - Create a `.env` file in the root directory
   - Add the following line:
     ```sh
     GOOGLE_GEMINI_KEY=your_api_key_here
     ```

4. **Run the backend server:**
   ```sh
   npm start
   ```

5. **Run the frontend:**
   ```sh
   npm run dev
   ```

## Usage
- Enter your code in the left-side editor
- Click on the **Review** button
- AI-generated feedback appears on the right side



