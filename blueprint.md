# Project Blueprint: Workout Recommendation Website

## Overview

This is a dynamic and engaging workout recommendation website, "AI Workout Coach". The application provides personalized workout suggestions based on fitness level and goals, featuring a modern, dark-themed UI with glassmorphism and smooth animations.

## Project Outline

### Design and Styling

*   **Theme:** Dark mode with neon blue (`#38bdf8`) and indigo (`#818cf8`) accents.
*   **Layout:** Responsive grid and flexbox layout.
*   **Aesthetics:** Glassmorphism (backdrop-filter: blur), animated background glow, and smooth hover transitions.
*   **Typography:** Roboto font (Google Fonts) with clear hierarchy and gradient headings.
*   **Iconography:** Lucide icons for visual context (dumbbell logo).

### Features

*   **User Input Form:** Interactive form to select Fitness Level and Workout Goal.
*   **AI Dynamic Recommendation:** Integrates a real-time Exercise API to fetch thousands of unique exercises dynamically.
*   **Workout Display:** Custom Web Component (`WorkoutCard`) with Shadow DOM encapsulation.
*   **Visual Guidance:** Integrated high-quality images and step-by-step instructions from the global exercise database.
*   **Theme Switching:** Seamless toggle between Dark and Light modes with preference persistence.
*   **Interactivity:** Real-time generation of workout plans without page reload.

## Current State (v1.6)

1.  **Exercise API Integration:** Successfully integrated the `free-exercise-db` API. The app now fetches real-time exercise data, including names, detailed instructions, and professional imagery.
2.  **Dynamic Filtering:** Implemented logic to map user goals (Weight Loss, Muscle Gain, etc.) to specific muscle groups and exercise types from the API.
3.  **Content Refinement & Accuracy:** Replaced static lists with a vast, searchable database of over 800+ exercises.
4.  **Visual Exercise Guidance:** Updated `WorkoutCard` to support dynamic image URLs and long-form instructions from the API.
5.  **Theme Toggle Implementation:** Added a dynamic theme switcher with support for light and dark modes.
6.  **Enhanced Visuals:** Integrated Lucide icons for better UX and modern styling with glassmorphism.
7.  **Deployment Ready:** Optimized for static hosting on platforms like GitHub Pages.

## Next Steps

*   Add filtering by specific equipment (Dumbbell, Barbell, etc.).
*   Implement a "Share" feature for workout plans.
*   Add exercise video/GIF support for better clarity.
