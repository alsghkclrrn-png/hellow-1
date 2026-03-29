# AI Workout Coach - Blueprint

## Project Overview
AI Workout Coach is a comprehensive AI-driven lifestyle platform. It provides personalized workout plans, nutrition guidance, styling advice, and supplement recommendations by cross-analyzing body metrics, MBTI personality, health status, and environmental factors.

## Current Features
- **Body Metrics Analysis:** BMI/BMR calculation with automatic data sync.
- **Advanced MBTI Personality Assessment:** 24-question survey for deep psychological alignment.
- **Dynamic Workout Generation:** Diverse activities (Yoga, Boxing, etc.) optimized for time of day and weather.
- **나의 운동기록 (Workout History):** Tracks the last 10 generated sessions using local storage.
- **운동의 종류 (Exercise Catalog):** A visual gallery of all supported activity types.
- **식단 추천 (Diet Recommendations):** Goal-based nutrition plans with calorie targets.
- **체형별 옷스타일 추천 (Body Styling):** Personalized fashion tips based on BMI and gender.
- **건강별 영양제 추천 (Supplement Guide):** Targeted supplement advice based on current health status.
- **Community & Interaction:** Disqus integration and Formspree partnership form.
- **Modern UI/UX:** Sticky navigation, responsive design, and smooth scroll.

## Planned Upgrade: Comprehensive Lifestyle Ecosystem
### 1. Navigation System
- Implemented a sticky header with smooth scrolling to key feature sections.

### 2. Feature Implementation Details
- **History:** Uses `localStorage` to persist session data across reloads.
- **Diet/Style:** Deterministic logic mapping BMI and goals to expert-curated tips.
- **Supplements:** Context-sensitive recommendations triggered by the workout generation process.

### 3. Design Philosophy
- **Holistic Integration:** Moving from a "workout generator" to an "all-in-one health assistant."
- **Data Continuity:** Ensuring body metrics analyzed at the top flow through all recommendation engines.
