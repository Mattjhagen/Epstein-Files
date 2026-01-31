# Forensic Analysis Archive: Jan 30 2026 DOJ Release

A high-fidelity digital archive and forensic analysis platform designed to host the simulated "Epstein Files Transparency Act" release. This application serves as a technical demonstration of modern React architecture, real-time AI integration, and document forensic visualization.

## 🚀 Features

*   **Forensic Report Viewer:** A structured, responsive interface for navigating complex investigative summaries (Executive Branch, Royal Dossier, Financial Ties).
*   **Interactive Evidence Tables:** Dynamic data visualization for verified evidence vs. raw intelligence.
*   **Forensic AI Assistant (Gemini Live):** 
    *   **Text Analysis:** Chat-based querying of the report corpus using `gemini-3-flash-preview`.
    *   **Voice Interrogation:** Real-time, low-latency voice interaction using the **Gemini Multimodal Live API** (`gemini-2.5-flash-native-audio-preview`). Users can "interrogate" the database verbally.
*   **Simulated Attachments:** A secure-download simulation for evidence files (PDFs, CCTV footage, CSVs).
*   **Social Sharing:** Integrated native and social media sharing capabilities.

## 🛠 Tech Stack

*   **Frontend:** React 19, TypeScript, Vite
*   **Styling:** Tailwind CSS (Slate/Red forensic color palette)
*   **Icons:** Lucide React
*   **AI Core:** Google GenAI SDK (`@google/genai` v0.2.1+)
    *   WebSocket-based Live API for audio streaming.
    *   Server-side generation for text analysis.

## 📦 Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd epstein-files-forensic
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure Environment:**
    You must provide a Google GenAI API Key. This project expects the key to be available in the environment variables.

    *   Get a key from [Google AI Studio](https://aistudio.google.com/).
    *   Set it in your shell or `.env` file (depending on your build setup) as `GEMINI_API_KEY`:
        ```bash
        export GEMINI_API_KEY="your_actual_api_key_here"
        ```

4.  **Run Development Server:**
    ```bash
    npm run dev
    ```

## 🧠 AI Architecture

### Gemini Live API Integration
The "Voice Interrogation" feature utilizes the new `@google/genai` SDK's `live.connect` method to establish a persistent WebSocket connection with the model.

*   **Audio Input:** Captures microphone input at 16kHz via `ScriptProcessorNode`.
*   **Encoding:** Converts raw Float32 Web Audio data into PCM Int16 format required by the model.
*   **Streaming:** Sends chunks of audio data in real-time to the model via `session.sendRealtimeInput`.
*   **Audio Output:** Receives raw PCM audio chunks from the model, decodes them to `AudioBuffer`, and schedules playback using the Web Audio API to ensure gapless streaming.

## 📂 Project Structure

*   `src/App.tsx`: Main application layout and routing logic.
*   `src/components/ForensicAssistant.tsx`: Core logic for Chat and Live Voice AI interaction.
*   `src/constants.tsx`: Contains the full text of the forensic report and evidentiary data.
*   `src/utils/audio.ts`: Low-level audio encoding/decoding utilities (Float32 <-> Int16).
*   `src/utils/actions.ts`: Helpers for file downloads and sharing.

## ⚠️ Disclaimer

This project is a **simulation**. The "January 30, 2026" release date and the specific contents of the forensic report text provided in the application are fictional/scenario-based for demonstration purposes. While it references real public figures and historical context, the specific "newly released documents" described herein are part of the simulation logic.