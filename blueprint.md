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
- **Condition-Based Intensity Scaling:**
  - **Excellent:** Full intensity, 8 exercises, high-intensity movements included.
  - **Tired:** Moderate intensity, 6 exercises, avoids high-impact cardio. Reps/Sets reduced.
  - **Recovery:** Low intensity, 4 exercises, strictly filters for recovery/stretching/low-impact movements. Rest time increased.
- **Detailed Beginner Instructions:** Each exercise features a step-by-step numbered guide (1. 2. 3...) ensuring beginners can perform movements safely without prior knowledge.
- **Dedicated Cautions Section:** Every exercise card displays a prominent "⚠️ Cautions" area highlighting common mistakes and injury prevention tips.
- **Variety (30-Click Guarantee):** Integrated with **wger API** (500+ exercises) and an **expanded local database** (20+ core movements with detailed meta-data).
- **Selection Logic:** Prioritizes never-seen exercises. Automatically falls back to any unseen exercise if a category is exhausted under current intensity filters.
- **Exercise Details:** 
  - **Dynamic Fetching:** Real-time data from wger.de (500+ exercises).
  - **Multimedia:** High-quality matching images curated for each movement.
- **Tracking:** Input fields for Actual (Reps, Sets, Rest, Time).

### 5. AI Performance Analysis & Coaching (운동 세션 분석 및 피드백)
- **Action:** "Analyze and Get Feedback" button.
- **Logic:** Compares recommended vs. actual performance records.
- **Outputs:** 
  - Detailed expert coaching report (5+ sentences).
  - Personalized evaluation based on performance ratio.
  - Integration of **Sasang Constitution** and **MBTI** traits in the feedback.

### 6. Customized Stretching (맞춤형 스트레칭 추천)
- **Requirement:** 5+ stretching exercises.
- **Details:** Name, matching Image, and detailed instructions for beginners.

### 7. Exercise Types Catalog (운동의 종류)
- **Categories:** Arms, Chest, Back, Legs, Abs, Cardio.
- **Details:** Professional name, Image, Detailed instructions, Tips, and Cautions.

### 8. Home Workout Recommendations (홈트 추천)
- **Content:** Bodyweight exercises and small equipment (bands, dumbbells) exercises.

### 9. Personalized Diet Plan (식단 추천)
- **Structure:** 3 meals (Breakfast, Lunch, Dinner).
- **Logic:** Based on the generated workout plan and nutritional needs.

### 10. Supplement Guide (영양제 추천)
- **Content:** List of beneficial nutrients for exercise and recommended products.

### 11. Sasang Constitution Analysis (나의 한방 체질)
- **Quiz:** Self-diagnosis questionnaire.
- **Results:** taeyang, taeum, soyang, soeum with professional descriptions and images.

### 12. User Feedback Service (Userback)
- **Integration:** Implementation of the Userback widget to collect real-time user feedback.
- **Access Token:** `A-pIeGjAZDDfhtqPYd9sm6pcKyj`

## Project Structure
- `index.html`: Main application shell.
- `main.js`: Core application logic and state management.
- `style.css`: Modern, responsive styling.
- `translations.js`: Multi-language support and content database.
- `GEMINI.md`: AI development guidelines.

## Implementation Plan

### Phase 1: HTML & CSS Structure
- Update `index.html` section titles and input fields.
- Refine CSS for workout cards to accommodate detailed instructions and caution boxes.

### Phase 2: JavaScript Logic & State
- Update `userData` to store condition inputs.
- Implement intensity-based filtering algorithm in `generateWorkout`.
- Build the randomized generation logic with 30-click diversity guarantee.

### Phase 3: Content Database
- Expand `translations.js` with 20+ exercises featuring step-by-step guides and injury warnings.
- Map precise Unsplash images to exercise names.

### Phase 4: Third-Party Integrations
- Integrate Userback feedback widget for user insights.

### Phase 5: Validation & Deployment
- Comprehensive testing of UI/UX flows.
- Deploy to Firebase Hosting.
