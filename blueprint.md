# AI Workout Coach - Project Blueprint

## Project Overview
A professional holistic health platform that provides personalized workout plans, Sasang Constitution analysis, MBTI-based fitness guidance, and expert health insights. The application is built with vanilla HTML, CSS, and JavaScript, leveraging modern web standards and AI-driven personalization.

## Key Features
- **Expert Core Scan (Integrated Diagnosis):** A high-concentration 5-question system that scientifically derives both MBTI and Sasang Constitution using weighted logic.
- **AI Coach Analysis (Multi-Persona):** A sophisticated feedback engine powered by a "World-Class Sports Scientist & Oriental Medicine Specialist" persona.
- **Data-Driven Health Insights:** Comprehensive analysis of BMI, BMR, psychological profiles, and traditional constitution with practical metaphors.
- **Visual Intelligence:** Generates specific image prompts for constitution-based physical traits and recommended diet/workout plans.
- **Body Metrics Analysis:** Calculates BMI and BMR using user-provided data (gender, age, height, weight).
- **MBTI-based Fitness Guidance:** Analyzes psychological profiles to recommend suitable workout environments and styles.
- **Sasang Constitution Diagnosis:** Traditional Oriental medicine approach to categorize users into four types (Taeyangin, Taeeumin, Soyangin, Soeumin) for personalized health advice.
- **Personalized Workout Plans:** Generates custom workout routines based on fitness level, goals, health status, and even weather/time of day.
- **Health & Wisdom Magazine:** Provides deep-dive articles on fitness science, nutrition, and psychology.
- **Multilingual Support:** Seamlessly switches between Korean and English with natural, localized phrasing and strict language enforcement.
- **Theme Customization:** Supports light and dark modes with interactive UI feedback.


## Implementation Details
- **Frontend:** Pure HTML5, CSS3 (using modern features like custom properties, flexbox, and grid), and ES Modules.
- **Localization:** Uses a centralized `translations.js` and `data-i18n` attributes for dynamic content updates.
- **Web Components:** Custom elements like `<workout-card>` for encapsulated and reusable UI logic.
- **Icons:** Powered by Lucide icons for a consistent and modern look.
- **External APIs:** Integrates a free exercise database for high-quality workout content.

## Recent Changes & Localization Improvements
- **Expert Core Scan Integration:** Replaced/supplemented lengthy quizzes with a 5-question integrated diagnostic tool for faster, more accurate personalization.
- **Advanced AI Persona:** Upgraded AI coaching tone to reflect the expertise of world-class sports scientists and Oriental medicine specialists.
- **Dynamic Visual Prompts:** Included detailed prompts for image generation within the AI analysis cards.
- **UI Progress Standardization:** Unified progress bar styles across all diagnostic sections for a polished look.
- **Natural Korean Translations:** Removed English in parentheses from Korean text to provide a more immersive and natural experience for Korean users.
- **Full Localization:** Ensured that all UI elements, including document titles, selection options, and dynamically generated fallback text (like "Full Body"), are correctly translated based on the selected language.
- **Clean UI:** Removed hardcoded strings from `main.js` and `index.html`, consolidating all text into the translation framework.
- **Bug Fixes:** Resolved issues where some text remained in the previous language after switching.

## Future Roadmap
- [ ] Integration with real-time health tracking APIs (e.g., Google Fit, Apple Health).
- [ ] Advanced 3D exercise visualizations using Three.js.
- [ ] Social features for community feedback and shared workouts.
- [ ] Progress tracking and history logging via local storage or cloud sync.
