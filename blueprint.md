# AI Workout Coach - Blueprint

## Project Overview
AI Workout Coach is a comprehensive AI-driven lifestyle platform. It provides personalized workout plans, nutrition guidance, **Sasang Constitution Analysis**, and supplement recommendations by cross-analyzing body metrics, MBTI personality, and oriental medicine principles. It also includes Google AdSense integration for monetization.

## Current Features
- **Body Metrics Analysis:** BMI/BMR calculation with automatic data sync.
- **Advanced MBTI Personality Assessment:** 24-question survey for deep psychological alignment.
- **나의 한방 체질 (Sasang Constitution):** 20-question professional diagnostic test to determine constitution (Tae-Yang, Tae-Eum, So-Yang, So-Eum) with detailed health and dietary advice.
- **Dynamic Workout Generation:** Diverse activities optimized for time of day, weather, and personality.
- **나의 운동기록 (Workout History):** Tracks the last 10 generated sessions.
- **운동의 종류 (Exercise Catalog):** A visual gallery of all supported activity types.
- **식단 추천 (Diet Recommendations):** Goal-based nutrition plans with calorie targets.
- **건강별 영양제 추천 (Supplement Guide):** Targeted supplement advice based on health status.
- **Community & Interaction:** Disqus integration and Formspree partnership form.
- **Google AdSense:** Integrated monetization through display ads.

## Feature Implementation Details
### 1. Sasang Constitution Analysis
- **Scoring System:** Weighted algorithm mapping user responses across 20 points of interest (Appearance, Personality, Physiology).
- **Type-Specific Advice:** Provides tailored health tips, dietary restrictions, and recommended exercise styles based on traditional Korean medicine.

### 2. Google AdSense Integration
- **Account Verification:** Added `<meta name="google-adsense-account">` to the `index.html` head.
- **Ad Script:** Integrated the `adsbygoogle.js` script in the `index.html` head for automated ad serving.
- **Sellers Authorization:** Created `ads.txt` in the root directory to authorize Google as a seller.

### 3. Design Philosophy
- **Holistic Health Integration:** Combining modern metrics (BMI/MBTI) with traditional wisdom (Sasang Constitution).
- **Seamless Data Flow:** Ensuring analysis results are instantly visible and used across the platform.

## Current Task: Google AdSense Integration
### Plan & Steps
1.  **Authorize Seller:** Create `ads.txt` in the root directory with the provided publisher ID.
2.  **Verify Account:** Add the `<meta>` tag to `index.html` for AdSense account verification.
3.  **Implement Ad Script:** Insert the Google AdSense script into the `<head>` of `index.html`.
