const translations = {
    ko: {
        'nav-logo': 'AI 운동 코치',
        'nav-coach': 'AI 코치',
        'nav-home': '홈',
        'nav-stretching': '스트레칭 추천',
        'nav-catalog': '운동 종류',
        'nav-home-workout': '홈트 추천',
        'nav-diet': '식단 추천',
        'nav-sasang': '사상체질 진단',
        'nav-supplement': '영양제 추천',
        'theme-toggle': '테마 변경',
        'header-subtitle': 'AI가 제안하는 당신만을 위한 라이프스타일 & 운동 플랜',
        'metrics-title': '신체 지표 분석',
        'calculate-btn': '신체 분석 시작하기',
        'workout-loading': 'AI 루틴 생성 중...',
        'workout-plan-title': '당신의 맞춤 운동 플랜',
        'workout-card-badge': '전문 트레이닝 플랜',
        'workout-card-default-name': '운동',
        'workout-card-default-desc': '트레이너의 안내에 따라 동작을 수행하세요.',
        'workout-card-default-target': '전신',
        'workout-card-target-sets': '목표 세트',
        'workout-card-target-reps': '목표 횟수',
        'workout-card-completed-status': '완료',
        'workout-card-actual-sets-label': '수행 세트',
        'workout-card-actual-reps-label': '수행 횟수',
        'workout-card-actual-rest-label': '휴식 (초)',
        'workout-card-actual-time-label': '시간 (분)',
        'stretching-empty': '운동을 생성하면 부위에 맞는 스트레칭이 여기에 표시됩니다.',
        'stretching-item-desc': '[효과] {target} 근육의 긴장을 완화하고 가동 범위를 넓힙니다. [방법] 통증이 없는 범위 내에서 20초간 유지하며 깊게 호흡하세요.',
        'bmi-normal': '정상',
        'bmi-underweight': '저체중',
        'bmi-overweight': '과체중',
        'bmi-obese': '비만',
        'mbti-step': '단계 중',
        'mbti-step-suffix': '단계'
    },
    en: {
        'nav-logo': 'AI Workout Coach',
        'nav-coach': 'AI Coach',
        'nav-home': 'Home',
        'nav-stretching': 'Stretching',
        'nav-catalog': 'Exercises',
        'nav-home-workout': 'Home Workout',
        'nav-diet': 'Diet Plans',
        'nav-sasang': 'Sasang Type',
        'nav-supplement': 'Supplements',
        'theme-toggle': 'Toggle Theme',
        'header-subtitle': 'AI-driven lifestyle & workout plans personalized for you.',
        'metrics-title': 'Body Metrics Analysis',
        'calculate-btn': 'Analyze My Body',
        'workout-loading': 'Generating AI Routine...',
        'workout-plan-title': 'Your Personalized Workout Plan',
        'workout-card-badge': 'Pro Training Plan',
        'workout-card-default-name': 'Exercise',
        'workout-card-default-desc': 'Follow the trainer\'s guide for this exercise.',
        'workout-card-default-target': 'Full Body',
        'workout-card-target-sets': 'Target Sets',
        'workout-card-target-reps': 'Target Reps',
        'workout-card-completed-status': 'Completed',
        'workout-card-actual-sets-label': 'Actual Sets',
        'workout-card-actual-reps-label': 'Actual Reps',
        'workout-card-actual-rest-label': 'Rest (sec)',
        'workout-card-actual-time-label': 'Time (min)',
        'stretching-empty': 'Generated stretches for your workout will appear here.',
        'stretching-item-desc': '[Effect] Relieves {target} tension. [Method] Hold for 20s with deep breathing.',
        'bmi-normal': 'Normal',
        'bmi-underweight': 'Underweight',
        'bmi-overweight': 'Overweight',
        'bmi-obese': 'Obese',
        'mbti-step': 'Step',
        'mbti-step-suffix': 'of'
    }
};

const muscleTranslations = {
    ko: {
        'chest': '가슴', 'back': '등', 'lats': '광배근', 'shoulders': '어깨', 'biceps': '이두근', 'triceps': '삼두근',
        'quads': '대퇴사두근', 'hamstrings': '햄스트링', 'glutes': '둔근', 'abs': '복근', 'obliques': '복사근',
        'calves': '종아리', 'forearms': '전완근', 'traps': '승모근', 'lower back': '등 하부', 'cardio': '유산소',
        'full body': '전신', 'stretching': '스트레칭'
    },
    en: {
        'chest': 'Chest', 'back': 'Back', 'lats': 'Lats', 'shoulders': 'Shoulders', 'biceps': 'Biceps', 'triceps': 'Triceps',
        'quads': 'Quadriceps', 'hamstrings': 'Hamstrings', 'glutes': 'Glutes', 'abs': 'Abs', 'obliques': 'Obliques',
        'calves': 'Calves', 'forearms': 'Forearms', 'traps': 'Traps', 'lower back': 'Lower Back', 'cardio': 'Cardio',
        'full body': 'Full Body', 'stretching': 'Stretching'
    }
};

const exerciseTranslations = {
    'push-up': {
        ko: '푸시업 (팔굽혀펴기)', en: 'Push-up', primary: { ko: '가슴', en: 'Chest' },
        image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=400',
        desc: {
            ko: '[방법] 양손을 어깨너비로 짚고 몸을 일직선으로 유지하며 가슴이 바닥에 닿기 전까지 내렸다가 밀어 올립니다.',
            en: 'Keep your body in a straight line, lower your chest until it almost touches the floor, then push back up.'
        }
    },
    'squat': {
        ko: '스쿼트', en: 'Squat', primary: { ko: '대퇴사두근', en: 'Quadriceps' },
        image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=400',
        desc: {
            ko: '[방법] 발을 어깨너비로 벌리고 엉덩이를 뒤로 빼며 무릎을 굽혀 내려갔다가 하체의 힘으로 일어납니다.',
            en: 'Stand with feet shoulder-width apart, sit back by bending your knees, and stand back up using your leg strength.'
        }
    },
    'deadlift': {
        ko: '데드리프트', en: 'Deadlift', primary: { ko: '전신', en: 'Full Body' },
        image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=400',
        desc: {
            ko: '[방법] 바닥의 무게를 잡고 등을 곧게 편 상태에서 전신의 근육을 사용하여 들어 올립니다.',
            en: 'Grip the weight on the floor, keep your back straight, and lift using your entire body muscles.'
        }
    }
};

const stretchingDatabase = [
    { name: { ko: '흉근 스트레칭', en: 'Chest Stretch' }, target: 'chest', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400' },
    { name: { ko: '광배근 스트레칭', en: 'Lat Stretch' }, target: 'back', image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&q=80&w=400' }
];
