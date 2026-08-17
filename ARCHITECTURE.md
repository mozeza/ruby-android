# Ruby Android Architecture

## Overview
The Ruby Android app is built using **React Native**, providing a cross-platform foundation with native performance. It serves as a client for the Ruby AI Backend, utilizing the Federation Bridge for external actions and the Chat API for conversational intelligence.

## Layers

### 1. API Layer (`/src/api`)
- **ChatClient**: Handles WebSocket/REST communication with the Ruby Chat API.
- **FederationBridge**: Interface for executing cross-platform actions (e.g., interacting with other AI agents or system tools).
- **ContextManager**: Captures and sends page context (URL, page title, or accessibility snapshots) to the backend.

### 2. State Management (`/src/hooks`)
- **useChat**: Custom hook managing message history, loading states, and streaming responses.
- **useOrbState**: Manages the visibility and animation state of the Ruby Orb.

### 3. UI Layer (`/src/components`, `/src/screens`)
- **ChatScreen**: The primary interface for interaction.
- **RubyOrb**: A floating action button (FAB) that acts as the "soul" of the app, triggering voice or text input.
- **RichMediaRenderer**: A specialized component to render images, videos, and interactive cards returned by the AI.

## Branding Palette
- **Primary:** `#FF3131` (Ruby Red)
- **Accent:** `#FF5E62` (Soft Ruby)
- **Dark:** `#0B0E14` (Deep Void)

## Integration Flow
`User Input` $\rightarrow$ `ChatClient` $\rightarrow$ `Ruby AI Backend` $\rightarrow$ `Federation Bridge (if needed)` $\rightarrow$ `UI Response`
