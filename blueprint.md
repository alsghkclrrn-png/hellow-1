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

*   **Context-Aware Recommendations:** Adjusts workout intensity and exercise types based on weather, current health status, time of day, and season.
*   **Body Metrics Analysis:** Calculates BMI (Body Mass Index) and BMR (Basal Metabolic Rate) based on age, gender, height, and weight.
*   **User Input Form:** Interactive form to select Fitness Level, Goal, Health Status, and Weather.
*   **AI Dynamic Recommendation:** Integrates a real-time Exercise API to fetch thousands of unique exercises dynamically.
*   **Workout Display:** Custom Web Component (`WorkoutCard`) with Shadow DOM encapsulation.
*   **Visual Guidance:** Integrated high-quality images and step-by-step instructions from the global exercise database.
*   **Theme Switching:** Seamless toggle between Dark and Light modes with preference persistence.

## Current State (v1.9)

1.  **Contextual Intelligence:** Implemented logic to filter and adjust workouts based on external and internal contexts (e.g., bodyweight-only for rainy weather, stretching for recovery status, activation exercises for morning sessions).
2.  **BMI-Responsive Logic:** The recommendation engine now uses the user's BMI from the Body Metrics section to dynamically adjust repetition counts and rest periods.
3.  **Expanded Form:** Added Health Status and Weather conditions to the main workout generation form.
4.  **Body Metrics Integration:** Users can input gender, age, height, and weight to receive instant BMI and BMR calculations.
5.  **Robust Error Handling:** Added an `onerror` fallback for exercise images and graceful loading states.
6.  **Dynamic Exercise API Integration:** Fully integrated real-time data fetching for over 800+ exercises.
7.  **Theme Toggle Implementation:** Seamless dynamic theme switching.
8.  **Deployment Ready:** Optimized for static hosting on platforms like GitHub Pages.

## Next Steps

*   Add filtering by specific equipment (Dumbbell, Barbell, etc.).
*   Implement a "Share" feature for workout plans.
*   Add exercise video/GIF support for better clarity.
