# Project Blueprint: AI Workout Coach

## Overview
A professional holistic health platform that provides personalized workout plans, Sasang Constitution analysis, MBTI-based fitness guidance, and expert health insights. The application is built with vanilla HTML, CSS, and JavaScript, leveraging modern web standards and AI-driven personalization.

## Core Features & Requirements

### 1. Body Metrics Analysis (신체 지표 분석)
- **Inputs:** Gender, Age, Height, Weight.
- **Outputs:** BMI Index, Basal Metabolic Rate (BMR), Recommended Daily Calorie Intake.
- **Logic:** Standard BMI and Mifflin-St Jeor Equation for BMR.

### 2. Personality & Mindset Analysis (MBTI)
- **Quiz:** Simple, accessible questions for general users.
- **Results:** Personality type with detailed descriptions of characteristics and fitness-related insights.

### 3. Current Condition Check (현재 당신의 컨디션 상태 체크)
- **Rename:** Formerly "Session Personalization Settings".
- **Inputs:**
  - Auto-populated: MBTI, Body Metrics Summary.
  - Manual: Workout Proficiency (Beginner/Intermediate/Advanced), Workout Goal, Current Condition (Excellent/Tired/Recovery), Current Weather, Time of Day.
- **Action:** "Generate Custom Workout" button.

### 4. Your Custom Workout Plan (당신의 맞춤 운동 플랜)
- **Structure:** 4-10 exercises per session based on **Current Condition**.
  - 1x Abdominal exercise (if available in unseen pool).
  - 1x Cardio exercise (if available in unseen pool).
  - 2-8x Targeted body part exercises (Normal condition: 8 exercises total).
- **Variety (30-Click Guarantee):** Integrated with **wger API** with a massive pool of 500+ exercises. Implemented advanced tracking logic to ensure NO repeats for at least 30 consecutive refreshes. 
- **Selection Logic:** Prioritizes never-seen exercises across ALL categories. If a specific category (e.g., Abs) is exhausted, the system automatically falls back to any other unseen exercise to maintain absolute diversity instead of repeating immediately.
- **Exercise Details:** 
  - **Dynamic Fetching:** Real-time data from wger.de (500+ exercises).
  - **Detailed Instructions:** AI-formatted step-by-step numbered lists for beginners.
  - **Multimedia:** High-quality matching images from wger database.
  - **Safety First:** Context-aware cautionary notes generated based on muscle groups, equipment, and category.
- **Tracking:** Input fields for Actual (Reps, Sets, Rest, Time).

### 5. AI Performance Analysis & Coaching (운동 세션 분석 및 피드백)
- **Action:** "Analyze and Get Feedback" button.
- **Logic:** Compares recommended vs. actual performance records (Reps, Sets).
- **Outputs:** 
  - Detailed expert coaching report (5+ sentences).
  - Personalized evaluation based on performance ratio.
  - Integration of **Sasang Constitution** and **MBTI** traits in the feedback.
  - Specific advice on overtraining, intensity adjustment, and recovery.

### 6. Customized Stretching (맞춤형 스트레칭 추천)
- **Requirement:** 5+ stretching exercises.
- **Details:** Name, matching Image, and detailed instructions for beginners.

### 7. Exercise Types Catalog (운동의 종류)
- **Categories:** Arms, Chest, Back, Legs, Abs, Cardio.
- **Details:** Professional name, Image, Detailed instructions, Tips, and Cautions for beginners.

### 8. Home Workout Recommendations (홈트 추천)
- **Content:** Bodyweight exercises and small equipment (bands, dumbbells) exercises.
- **Details:** Name, Image, Professional instructions, Tips, and Cautions.

### 9. Personalized Diet Plan (식단 추천)
- **Structure:** 3 meals (Breakfast, Lunch, Dinner).
- **Logic:** Based on the generated workout plan and nutritional needs.
- **Variety:** 100-day variety.
- **Details:** Food name, Image, Detailed recipe (Ingredients + Cooking instructions).

### 10. Supplement Guide (영양제 추천)
- **Content:** List of beneficial nutrients for exercise and recommended health functional products.

### 11. Sasang Constitution Analysis (나의 한방 체질)
- **Quiz:** Self-diagnosis questionnaire.
- **Results:** Determination of constitution (Taeyang, Taeum, Soyang, Soeum) with professional descriptions and images.

## Project Structure
- `index.html`: Main application shell with SEO-optimized metadata and responsive layout.
- `main.js`: Core application logic, state management, and interactive features.
- `style.css`: Modern, responsive styling using CSS variables, Grid, and Flexbox.
- `translations.js`: Multi-language support (KO/EN) and content database.
- `GEMINI.md`: AI development guidelines and project-specific mandates.

## Implementation Plan

### Phase 1: HTML & CSS Structure
- Update `index.html` section titles and input fields.
- Add containers for Diet, Supplements, and Sasang results.
- Refine CSS for workout cards and results display.

### Phase 2: JavaScript Logic & State
- Update `userData` to store new inputs.
- Implement BMI/BMR/Calorie calculations.
- Create MBTI and Sasang quiz handlers.
- Build the randomized generation logic for Workouts and Diets.

### Phase 3: Content Database
- Populate `translations.js` with a large database of exercises, stretches, meals, and supplement info.
- Ensure 100-day variety logic by having enough content or a structured randomization algorithm.

### Phase 4: Validation & Deployment
- Comprehensive testing of all UI/UX flows.
- Verify correctness of AI-generated content (stretches, diets).
- Fix "starting preview" error by adding `python3` and `nodejs` to `.idx/dev.nix` and switching to `npx http-server`.
- Deploy to Firebase Hosting.
