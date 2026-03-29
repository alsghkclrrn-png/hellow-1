# AI Workout Coach - Blueprint

## Project Overview
AI Workout Coach is a modern, framework-less web application that provides personalized workout recommendations. It analyzes user body metrics (Age, Weight, Height, Gender), environmental factors (Weather), health status, **Time of Day**, and **Professional MBTI Personality Profiles** to suggest a diverse range of activities.

## Current Features
- **Body Metrics Analysis:** Calculates BMI and BMR to tailor workout intensity.
- **Advanced MBTI Personality Assessment:** 24-question professional survey to align activities with user psychology.
- **Diverse Exercise Themes:** Recommendations span Yoga, Pilates, Aerobics, Zumba, Swimming, Jogging, Cycling, and Boxing.
- **Time of Day Optimization:** Suggests activities based on circadian rhythms (Dawn, Morning, Afternoon, Night).
- **Disqus Integration:** Community feedback section at the bottom of the page.
- **Context-Aware Recommendations:** Automatically populates MBTI and metrics into the personalization form for real-time routine generation.
- **Partnership Inquiry:** Integrated contact form via Formspree.
- **Modern UI:** Built with Web Components, CSS Variables, and Lucide icons.
- **Dynamic Theming:** Supports light and dark modes.

## Planned Upgrade: Multi-Factor Personalization
### 1. MBTI & Time Alignment
- **Dawn/Night:** Prioritizes indoor, low-impact, or mindfulness activities like Yoga and Stretching.
- **Morning/Afternoon:** Prioritizes high-energy, strength, or competitive sports.

### 2. Technical Implementation
- **Enhanced Filtering:** Logic that cross-references weather, personality, and time of day.
- **Activity Metadata:** Added `time` tags to the activity library for precise matching.

## Design Philosophy
- **Vibrant & Energetic:** Using high-contrast colors and smooth transitions.
- **Holistic Health:** Considering when you work out as much as how you work out.
