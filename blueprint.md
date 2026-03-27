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
*   **Workout Recommendation Engine:** JavaScript logic that selects from a predefined database of workouts.
*   **Workout Display:** Custom Web Component (`WorkoutCard`) with Shadow DOM encapsulation.
*   **Theme Switching:** Seamless toggle between Dark and Light modes with preference persistence.
*   **Interactivity:** Real-time generation of workout plans without page reload.

## Current State (v1.2)

1.  **Refactored `WorkoutCard`:** Fixed a bug where attributes were accessed before initialization. Used `connectedCallback` and a robust `render()` method.
2.  **Modernized UI:** Updated `style.css` with a high-performance dark theme, gradients, and animations.
3.  **Theme Toggle Implementation:** Added a dynamic theme switcher with support for light and dark modes.
4.  **Enhanced Visuals:** Integrated Lucide icons for better UX.
5.  **Deployment Ready:** Optimized for static hosting on platforms like GitHub Pages.

## Next Steps

*   Add exercise illustrations or animations.
*   Implement a "Share" feature for workout plans.
*   Add more exercise variety and detailed descriptions.
