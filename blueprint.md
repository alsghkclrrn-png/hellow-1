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
  - Manual: Workout Proficiency (Beginner/Intermediate/Advanced), Workout Goal, Current Condition, Current Weather, Time of Day.
- **Action:** "Generate Custom Workout" button.

### 4. Your Custom Workout Plan (당신의 맞춤 운동 플랜)
- **Structure:** 5+ exercises per session.
  - 1x Abdominal exercise (Mandatory).
  - 1x Cardio exercise (Mandatory).
  - 3x Targeted body part exercises.
- **Variety:** Logic to ensure 100+ days of non-repeating variety.
- **Exercise Details:** Name, Image, Detailed Instructions (beginner-friendly), Target Area, Recommended (Reps, Sets, Rest, Time).
- **Tracking:** Input fields for Actual (Reps, Sets, Rest, Time).

### 5. Customized Stretching (맞춤형 스트레칭 추천)
- **Requirement:** 5+ stretching exercises.
- **Details:** Name, matching Image, and detailed instructions for beginners.

### 6. Exercise Types Catalog (운동의 종류)
- **Categories:** Arms, Chest, Back, Legs, Abs, Cardio.
- **Details:** Professional name, Image, Detailed instructions, Tips, and Cautions for beginners.

### 7. Home Workout Recommendations (홈트 추천)
- **Content:** Bodyweight exercises and small equipment (bands, dumbbells) exercises.
- **Details:** Name, Image, Professional instructions, Tips, and Cautions.

### 8. Personalized Diet Plan (식단 추천)
- **Structure:** 3 meals (Breakfast, Lunch, Dinner).
- **Logic:** Based on the generated workout plan and nutritional needs.
- **Variety:** 100-day variety.
- **Details:** Food name, Image, Detailed recipe (Ingredients + Cooking instructions).

### 9. Supplement Guide (영양제 추천)
- **Content:** List of beneficial nutrients for exercise and recommended health functional products.

### 10. Sasang Constitution Analysis (나의 한방 체질)
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
