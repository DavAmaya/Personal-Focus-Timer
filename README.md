# FocusFlow ⏱️  
*A calm, state-driven focus timer for deep work*

## Overview

**FocusFlow** is a minimalist focus timer designed to help users move from *“phone in hand”* to *“focus mode”* in under **3 seconds**.  
The application prioritizes clarity, responsiveness, and calm visual feedback while tracking daily productivity with zero setup.

This project was built for a **code jam** with a strong emphasis on:
- clean state management
- UX-driven engineering decisions
- predictable and extensible architecture

---

## Key Features

### Core Functionality
- Preset focus sessions (15 / 25 / 45 minutes)
- Start / pause / resume / reset timer
- Visual countdown with animated progress ring
- Focus completion screen with celebration state
- Daily session counter and total focus time
- Session history persisted in `localStorage`
- Optional focus sound (user-triggered, browser-safe)

### UX Highlights
- Time-first interface (clock is always the primary focus)
- State-driven animations (UI never desyncs from logic)
- Calm color palette with state-based visual feedback
- Breathing halo animation during active focus
- Accessible motion with `prefers-reduced-motion` support

---

## Application States

FocusFlow is built around a simple and explicit state model:

- `idle` — session selection / ready state  
- `running` — active focus session  
- `paused` — temporarily stopped  
- `completed` — session finished with stats update  

All UI rendering, animations, audio, and side effects are derived from these states.

---

## Tech Stack

- **React** (functional components + hooks)
- **Vite** (development & build tooling)
- **CSS (BEM methodology)** for scalable styling
- **LocalStorage** for persistence
- **HTML5 Audio API** for optional focus sound

No external UI libraries were used to keep the MVP lightweight and intentional.

---

## Project Structure

```text
src/
├── Components/
│   ├── App/
│   ├── Timer/
│   ├── Presets/
│   ├── Completed/
│   ├── Stats/
│   └── Layout/
├── Hooks/
│   ├── useTimerEngine.js
│   ├── useSessionHistory.js
│   └── useFocusSound.js
├── Utils/
│   ├── constants.js
│   └── stats.js
└── main.jsx

public/
└── sounds/
    └── rain.wav
