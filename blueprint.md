# AI Workout Coach - Blueprint

## Project Overview
AI Workout Coach is a modern, framework-less web application that provides personalized workout recommendations. It analyzes user body metrics (Age, Weight, Height, Gender), environmental factors (Weather), health status, and now, **MBTI Personality Types** to suggest the most suitable exercises.

## Current Features
- **Body Metrics Analysis:** Calculates BMI and BMR to tailor workout intensity.
- **Context-Aware Workouts:** Considers fitness level, goals, health status, and weather.
- **Modern UI:** Built with Web Components, CSS Variables, and Lucide icons for a premium feel.
- **Dynamic Exercise Loading:** Fetches real exercise data from an external repository.
- **Theming:** Supports light and dark modes.

## Planned Upgrade: Professional MBTI Integration
### 1. MBTI Personality Assessment
- **Professional Survey:** A structured questionnaire covering the four dimensions (E/I, S/N, T/F, J/P).
- **Result Analysis:** Determines the user's 16-personality type.
- **Interactive UI:** A step-by-step or grouped question interface that feels "premium."

### 2. Personality-Based Exercise Recommendations
- **E (Extraversion) vs. I (Introversion):** Social/Group workouts vs. Focused/Solo sessions.
- **S (Sensing) vs. N (Intuition):** Methodical/Form-focused vs. Creative/Varied routines.
- **T (Thinking) vs. F (Feeling):** Performance/Metric-driven vs. Holistic/Mindful activities.
- **J (Judging) vs. P (Perceiving):** Structured/Planned programs vs. Flexible/Dynamic movements.

### 3. Implementation Steps
1. **HTML Structure:** Add a new `<section>` for the MBTI test before the workout generation.
2. **CSS Styling:** Create styles for question cards, progress bars, and result badges.
3. **JavaScript Logic:**
   - Define the question set and scoring algorithm.
   - Update `userData` to include the MBTI type.
   - Modify `getExercisesByContext` to incorporate personality traits into muscle selection and exercise type bias.
4. **Validation:** Test the full flow from metrics -> MBTI -> Workout.
5. **Deployment:** Push to GitHub.

## Design Philosophy
- **Vibrant & Energetic:** Using high-contrast colors and smooth transitions.
- **Accessible:** Clear typography and intuitive navigation.
- **Professional:** Data-backed recommendations that feel authoritative yet personal.
