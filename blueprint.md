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

*   **Enhanced Personalized Recommendations:** Specifically analyzes gender, age, height, and weight to adjust exercise selection, volume (sets/reps), and safety parameters (joint protection for higher BMI).
*   **Context-Aware Analysis:** Dynamically adjusts routines based on weather, current health status, time of day, and season.
*   **Body Metrics Analysis:** Calculates BMI (Body Mass Index) and BMR (Basal Metabolic Rate) to inform the AI trainer's decisions.
*   **AI Dynamic Recommendation:** Integrates a real-time Exercise API to fetch thousands of unique exercises dynamically.
*   **Workout Display:** Custom Web Component (`WorkoutCard`) with Shadow DOM encapsulation and dynamic imagery.

## Current State (v1.10)

1.  **Biometric Intelligence:** The recommendation engine now explicitly uses gender, age, height, and weight. It applies specific biases (e.g., glute focus for female fitness, chest focus for male hypertrophy) and safety logic (e.g., lower reps and longer rest for users over 50 or with BMI > 28).
2.  **Adaptive Volume:** Implemented logic to increase repetition volume for users with higher BMR during weight-loss goals.
3.  **Contextual Intelligence:** Advanced filtering based on weather (indoor-only for rain) and health status (recovery focus).
4.  **Body Metrics Integration:** Users receive instant BMI and BMR calculations which are automatically applied to the AI Coach.
5.  **Dynamic Exercise API Integration:** Real-time data fetching from a database of 800+ exercises.
6.  **Theme Toggle Implementation:** Seamless dynamic theme switching.
7.  **Deployment Ready:** Optimized for static hosting on platforms like GitHub Pages.

## Next Steps

*   Add filtering by specific equipment (Dumbbell, Barbell, etc.).
*   Implement a "Share" feature for workout plans.
*   Add exercise video/GIF support for better clarity.
