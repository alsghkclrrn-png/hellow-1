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

*   **Body Metrics Analysis:** Calculates BMI (Body Mass Index) and BMR (Basal Metabolic Rate) based on age, gender, height, and weight.
*   **User Input Form:** Interactive form to select Fitness Level and Workout Goal.
*   **AI Dynamic Recommendation:** Integrates a real-time Exercise API to fetch thousands of unique exercises dynamically.
*   **Workout Display:** Custom Web Component (`WorkoutCard`) with Shadow DOM encapsulation.
*   **Visual Guidance:** Integrated high-quality images and step-by-step instructions from the global exercise database.
*   **Theme Switching:** Seamless toggle between Dark and Light modes with preference persistence.
*   **Interactivity:** Real-time generation of workout plans without page reload.

## Current State (v1.8)

1.  **Body Metrics Integration:** Added a new "Body Metrics Analysis" section. Users can now input their gender, age, height, and weight to receive instant BMI and BMR calculations.
2.  **Health Status Assessment:** Implemented logic to categorize BMI into Underweight, Healthy, Overweight, or Obese statuses.
3.  **Refined UI Layout:** Updated the main layout to accommodate the metrics analysis section while maintaining a clean, glassmorphic aesthetic.
4.  **Image Path Fix & Fallback:** Corrected the image URL pattern for the `free-exercise-db` API and added a robust `onerror` fallback.
5.  **Dynamic Exercise API Integration:** Fully integrated real-time data fetching for exercises, instructions, and imagery.
6.  **Theme Toggle Implementation:** Seamless dynamic theme switching between light and dark modes.
7.  **Deployment Ready:** Optimized for static hosting on platforms like GitHub Pages.

## Next Steps

*   Use BMI/BMR data to further personalize workout intensities.
*   Add filtering by specific equipment (Dumbbell, Barbell, etc.).
*   Implement a "Share" feature for workout plans.
