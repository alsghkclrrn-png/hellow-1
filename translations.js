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
        
        // Metrics
        'metrics-title': '신체 지표 분석',
        'bmi-label': 'BMI 지수',
        'bmr-label': '기초대사량 (BMR)',
        'daily-calories-label': '하루 권장 섭취 칼로리',
        'bmr-unit': 'kcal/일',
        'bmi-underweight': '저체중',
        'bmi-normal': '정상',
        'bmi-overweight': '과체중',
        'bmi-obese': '비만',
        'calculate-btn': '신체 분석 시작하기',
        'label-gender': '성별',
        'option-male': '남성',
        'option-female': '여성',
        'label-age': '나이',
        'label-height': '신장 (cm)',
        'label-weight': '체중 (kg)',
        'placeholder-age': '세',
        'placeholder-height': 'cm',
        'placeholder-weight': 'kg',
        
        // MBTI
        'mbti-title': '성격 및 마인드셋 분석 (MBTI)',
        'mbti-desc': '심리적 프로필에 맞는 운동 루틴을 찾아 지속 가능성을 극대화하세요.',
        'mbti-diag-title': '심층 MBTI 정밀 진단',
        'mbti-diag-subtitle': '본인의 평소 모습에 가장 가까운 답변을 신중하게 선택해 주세요.',
        'mbti-insight-label': '성격 정밀 인사이트',
        'retake-mbti': '테스트 다시 하기',
        'mbti-default-type': '분석된 당신의 MBTI 유형',

        'mbti-type-ISTJ': '<strong>현실주의자 (ISTJ)</strong><br>성실하고 책임감이 강하며 계획적인 운동을 선호합니다. 정해진 루틴을 지키는 데 탁월합니다.',
        'mbti-type-ISFJ': '<strong>수호자 (ISFJ)</strong><br>온화하고 헌신적이며 주변을 잘 챙깁니다. 꾸준하고 안정적인 운동이 잘 맞습니다.',
        'mbti-type-INFJ': '<strong>옹호자 (INFJ)</strong><br>통찰력이 깊고 이상주의적입니다. 요가나 명상처럼 내면을 돌보는 운동을 추천합니다.',
        'mbti-type-INTJ': '<strong>전략가 (INTJ)</strong><br>논리적이고 독립적입니다. 효율적인 시스템과 목표 중심의 트레이닝을 선호합니다.',
        'mbti-type-ISTP': '<strong>장인 (ISTP)</strong><br>냉철한 관찰력과 기술이 뛰어납니다. 도구를 활용하거나 기술적인 스포츠에 흥미를 느낍니다.',
        'mbti-type-ISFP': '<strong>모험가 (ISFP)</strong><br>예술적 감각이 있고 자유로운 영혼입니다. 즐겁고 유연한 신체 활동을 즐깁니다.',
        'mbti-type-INFP': '<strong>중재자 (INFP)</strong><br>깊은 감수성과 가치관을 중시합니다. 나만의 속도로 즐기는 개인 운동이 적합합니다.',
        'mbti-type-INTP': '<strong>논리술사 (INTP)</strong><br>지적 호기심이 많고 분석적입니다. 운동의 원리를 이해하며 수행하는 것을 좋아합니다.',
        'mbti-type-ESTP': '<strong>사업가 (ESTP)</strong><br>에너지가 넘치고 활동적입니다. 역동적이고 경쟁적인 스포츠에서 활력을 얻습니다.',
        'mbti-type-ESFP': '<strong>연예인 (ESFP)</strong><br>사교적이고 현재의 즐거움을 중시합니다. 사람들과 함께하는 그룹 운동이 최고입니다.',
        'mbti-type-ENFP': '<strong>활동가 (ENFP)</strong><br>열정적이고 상상력이 풍부합니다. 지루하지 않은 다양한 운동 프로그램을 선호합니다.',
        'mbti-type-ENTP': '<strong>변론가 (ENTP)</strong><br>독창적이고 도전을 즐깁니다. 새로운 방식의 트레이닝에 도전하는 것을 좋아합니다.',
        'mbti-type-ESTJ': '<strong>경영자 (ESTJ)</strong><br>질서와 규칙을 중시하는 타고난 리더입니다. 체계적인 관리 아래 운동할 때 효과가 큽니다.',
        'mbti-type-ESFJ': '<strong>집정관 (ESFJ)</strong><br>따뜻하고 사교적인 지원가입니다. 협동이 필요한 팀 스포츠나 소셜 운동을 추천합니다.',
        'mbti-type-ENFJ': '<strong>주인도자 (ENFJ)</strong><br>카리스마 있고 공감 능력이 뛰어납니다. 타인에게 긍정적인 영향을 주는 운동 모임을 이끕니다.',
        'mbti-type-ENTJ': '<strong>통솔자 (ENTJ)</strong><br>강력한 추진력을 가진 리더입니다. 높은 목표를 설정하고 달성하는 하드 트레이닝을 즐깁니다.',

        // MBTI Questions
        'mbti-q1-title': '1. 대규모 사교 행사나 파티에서 당신은 주로 어떻게 행동하나요?',
        'mbti-q1-a': '여러 사람과 활발히 대화하며 적극적으로 에너지를 얻는다 (E)',
        'mbti-q1-b': '아는 사람 소수와 대화하거나 혼자 조용히 관찰하며 에너지를 비축한다 (I)',
        'mbti-q2-title': '2. 새로운 사람을 만났을 때 당신의 일반적인 태도는 어떤가요?',
        'mbti-q2-a': '먼저 다가가 말을 걸고 자연스럽게 대화를 주도하는 편이다 (E)',
        'mbti-q2-b': '상대방이 먼저 다가오기를 기다리며 신중하게 지켜보는 편이다 (I)',
        'mbti-q3-title': '3. 휴일이나 주말에 당신이 선호하는 완벽한 휴식 방식은?',
        'mbti-q3-a': '외부 활동을 하거나 친구들을 만나 시끌벅적하게 보낸다 (E)',
        'mbti-q3-b': '집에서 조용히 책을 읽거나 영화를 보며 혼자만의 시간을 갖는다 (I)',
        'mbti-q4-title': '4. 대화를 나눌 때 당신이 더 편하게 느끼는 방식은 무엇인가요?',
        'mbti-q4-a': '생각나는 대로 즉흥적으로 말을 내뱉으며 소통하는 것이 편하다 (E)',
        'mbti-q4-b': '머릿속으로 생각을 충분히 정리한 후 조심스럽게 말을 꺼낸다 (I)',
        'mbti-q5-title': '5. 업무나 공부를 할 때 어떤 환경에서 더 큰 효율을 느끼나요?',
        'mbti-q5-a': '다른 사람들과 의견을 활발히 나누며 협업하는 환경 (E)',
        'mbti-q5-b': '외부의 방해 없이 혼자 집중할 수 있는 독립된 환경 (I)',
        'mbti-q6-title': '6. 정보를 받아들일 때 당신이 본능적으로 더 신뢰하는 것은?',
        'mbti-q6-a': '현재 눈앞에 보이는 구체적인 사실과 실제적인 데이터 (S)',
        'mbti-q6-b': '사실 이면의 숨겨진 의미나 미래의 가능성, 영감 (N)',
        'mbti-q7-title': '7. 새로운 프로젝트나 운동을 시작할 때 당신의 접근 방식은?',
        'mbti-q7-a': '이미 검증된 정석적인 방식과 매뉴얼을 철저히 따른다 (S)',
        'mbti-q7-b': '나만의 독창적인 방식이나 새로운 실험적 아이디어를 시도한다 (N)',
        'mbti-q8-title': '8. 누군가에게 길을 설명할 때 당신은 주로 어떻게 표현하나요?',
        'mbti-q8-a': '눈에 보이는 구체적인 건물명이나 랜드마크를 기준으로 설명한다 (S)',
        'mbti-q8-b': '전체적인 방향성이나 추상적인 이미지를 중심으로 설명한다 (N)',
        'mbti-q9-title': '9. 영화나 책을 감상할 때 당신이 더 흥미를 느끼는 부분은?',
        'mbti-q9-a': '현실감 있고 생생한 묘사나 구체적인 사건의 전개 과정 (S)',
        'mbti-q9-b': '상상력을 자극하는 은유적 표현이나 상징적인 메시지 (N)',
        'mbti-q10-title': '10. 당신의 일상적인 관심사는 주로 어디에 머물러 있나요?',
        'mbti-q10-a': '현재 시점에서 일어나고 있는 실제적이고 실용적인 문제들 (S)',
        'mbti-q10-b': '미래에 대한 비전, 이론적인 개념, 혹은 실현되지 않은 가능성 (N)',
        'mbti-q11-title': '11. 중요한 결정을 내려야 할 때 당신의 가장 우선적인 기준은?',
        'mbti-q11-a': '객관적인 논리와 인과관계, 공정한 원리원칙 (T)',
        'mbti-q11-b': '주변 사람들의 감정과 관계의 조화, 개인적인 가치관 (F)',
        'mbti-q12-title': '12. 친구가 고민을 털어놓을 때 당신의 본능적인 첫 반응은?',
        'mbti-q12-a': '상황을 냉철하게 분석하고 실질적인 해결책을 고민한다 (T)',
        'mbti-q12-b': '친구의 감정에 깊이 공감해주고 따뜻한 위로를 건넨다 (F)',
        'mbti-q13-title': '13. 타인과 의견 충돌이나 갈등이 생겼을 때 당신은 어떤 편인가요?',
        'mbti-q13-a': '감정보다는 사실 관계를 명확히 짚고 논리적으로 시비를 가린다 (T)',
        'mbti-q13-b': '상대방의 감정 상태를 먼저 배려하며 원만하게 타협하려 한다 (F)',
        'mbti-q14-title': '14. 당신이 인생에서 더 가치 있게 여기는 덕목은 무엇인가요?',
        'mbti-q14-a': '냉철한 진실과 정확성, 효율성에 기반한 능력 (T)',
        'mbti-q14-b': '따뜻한 선의와 포용력, 인간적인 유대와 화합 (F)',
        'mbti-q15-title': '15. 업무 성과를 평가할 때 당신이 더 공정하다고 믿는 기준은?',
        'mbti-q15-a': '수치화된 결과물과 객관적으로 증명된 실적 (T)',
        'mbti-q15-b': '과정에서의 헌신적인 노력과 팀워크에 기여한 정도 (F)',
        'mbti-q16-title': '16. 여행 계획을 세울 때 당신의 전형적인 스타일은?',
        'mbti-q16-a': '시간대별로 세부 일정을 꼼꼼히 짜고 최대한 계획대로 움직인다 (J)',
        'mbti-q16-b': '큰 목적지만 정해두고 현지 상황과 기분에 따라 즉흥적으로 행동한다 (P)',
        'mbti-q17-title': '17. 마감 기한이 있는 업무를 처리할 때 당신의 모습은?',
        'mbti-q17-a': '미리 계획을 세워 단계별로 차근차근 여유 있게 마무리한다 (J)',
        'mbti-q17-b': '마지막 순간까지 미루다가 막판에 엄청난 집중력을 발휘해 끝낸다 (P)',
        'mbti-q18-title': '18. 당신의 작업 공간이나 주변 환경을 정리하는 방식은?',
        'mbti-q18-a': '항상 정해진 위치에 물건이 놓여 있어야 마음이 편안하다 (J)',
        'mbti-q18-b': '다소 어수선하더라도 자유롭고 유연하게 사용하는 것이 편하다 (P)',
        'mbti-q19-title': '19. 예기치 못한 상황으로 계획이 변경되었을 때 당신의 반응은?',
        'mbti-q19-a': '당혹감을 느끼며 계획이 틀어지는 것에 상당한 스트레스를 받는다 (J)',
        'mbti-q19-b': '상황에 맞춰 유연하게 받아들이며 변화를 오히려 흥미롭게 여긴다 (P)',
        'mbti-q20-title': '20. 본인의 삶의 태도에 더 가깝다고 생각하는 문장은?',
        'mbti-q20-a': '통제 가능하고 예측 가능한 안정적인 삶을 지향한다 (J)',
        'mbti-q20-b': '모든 가능성을 열어두고 변화에 대응하는 유동적인 삶을 지향한다 (P)',

        // Sasang
        'sasang-title': '나의 한방 체질 (사상체질)',
        'sasang-desc': '이제마 선생의 사상의학을 바탕으로 당신의 타고난 체질을 분석합니다.',
        'sasang-diag-title': '사상체질 자가진단',
        'sasang-q1': '평소 체형과 기운은 어떠신가요?',
        'sasang-q1-a': '상체가 발달하고 기운이 위로 뻗친다',
        'sasang-q1-b': '골격이 굵고 허리가 튼튼하며 몸이 무겁다',
        'sasang-q1-c': '가슴이 넓고 걸음걸이가 빠르며 몸에 열이 많다',
        'sasang-q1-d': '하체가 발달하고 마른 편이며 몸이 차다',
        'sasang-q2': '평소 성격은 어떠신가요?',
        'sasang-q2-a': '창의적이고 결단력이 강하다',
        'sasang-q2-b': '끈기 있고 듬직하며 보수적이다',
        'sasang-q2-c': '명랑하고 민첩하며 급한 면이 있다',
        'sasang-q2-d': '논리적이고 세심하며 내성적이다',
        'sasang-q3': '좋아하는 음식이나 건강 상태는?',
        'sasang-q3-a': '해물과 채식이 잘 맞고 소변이 시원하다',
        'sasang-q3-b': '고기류가 잘 맞고 땀을 흘리면 개운하다',
        'sasang-q3-c': '서늘한 음식이 좋고 대변이 잘 나오면 건강하다',
        'sasang-q3-d': '따뜻한 음식이 좋고 소화가 잘 되면 건강하다',
        
        'sasang-sun-title': '☀️ 태양인 (太陽人)',
        'sasang-sun-pros': '혁신가, 추진력, 결단력',
        'sasang-sun-cons': '분노 조절, 간 기능 약화 주의',
        'sasang-sun-diet': '추천: 해물, 메밀, 포도, 머루차',
        'sasang-earth-title': '🌳 태음인 (太陰人)',
        'sasang-earth-pros': '지구력, 포용력, 뛰어난 체력',
        'sasang-earth-cons': '비만, 심혈관계 질환 주의',
        'sasang-earth-diet': '추천: 소고기, 무, 도라지, 율무',
        'sasang-fire-title': '🔥 소양인 (少陽人)',
        'sasang-fire-pros': '순발력, 열정, 다재다능',
        'sasang-fire-cons': '조급함, 관절염 주의',
        'sasang-fire-diet': '추천: 돼지고기, 수박, 참외, 보리차',
        'sasang-water-title': '❄️ 소음인 (少陰人)',
        'sasang-water-pros': '완벽주의, 다정함, 신중함',
        'sasang-water-cons': '소화불량, 냉증, 우울감 주의',
        'sasang-water-diet': '추천: 닭고기, 인삼, 생강, 대추차',
        
        // Workout & Diet
        'workout-recommends': 'AI 추천 설정',
        'workout-reps': '권장 횟수',
        'workout-sets': '권장 세트',
        'workout-rest': '휴식 시간',
        'workout-time': '소요 시간',
        'workout-actual-input': '실제 수행 기록',
        'actual-reps': '횟수',
        'actual-sets': '세트',
        'actual-rest': '휴식',
        'actual-time': '시간',
        'diet-breakfast': '아침 식단',
        'diet-lunch': '점심 식단',
        'diet-dinner': '저녁 식단',
        'diet-ingredients': '필요한 재료',
        'diet-recipe-title': '조리법',
        'goal-weight-loss': '체중 감량형',
        'goal-muscle-gain': '근육 증가형',
        'goal-general-fitness': '건강 관리형',
        'bmi-underweight': '저체중',
        'bmi-normal': '정상',
        'bmi-overweight': '과체중',
        'bmi-obese': '비만',
        'mbti-display-label': '나의 MBTI',
        'mbti-display-placeholder': '상단 퀴즈 진행',
        'metrics-display-label': '신체 분석 요약',
        'metrics-display-placeholder': '상단 신체 분석 진행',
        'weekly-frequency-label': '주간 운동 횟수',
        'freq-1-2': '주 1-2회',
        'freq-3-4': '주 3-4회',
        'freq-5-6': '주 5-6회',
        'freq-7': '매일',
        'refresh-workout-btn': '다른 운동 추천',
        'refresh-btn-text': '다른 운동 보기',
        'workout-card-desc-title': '운동 방법',
        'workout-card-caution': '주의 사항',
    },
    en: {
        'nav-logo': 'AI Workout Coach',
        'nav-coach': 'AI Coach',
        'nav-home': 'Home',
        'nav-stretching': 'Stretching',
        'nav-catalog': 'Exercises',
        'nav-home-workout': 'Home Workout',
        'nav-diet': 'Diet Plan',
        'nav-sasang': 'Sasang Quiz',
        'nav-supplement': 'Supplements',
        'theme-toggle': 'Toggle Theme',
        'header-subtitle': 'AI Personalized Lifestyle & Workout Plan',
        'metrics-title': 'Body Metrics Analysis',
        'calculate-btn': 'Analyze My Body',
        'mbti-title': 'Personality (MBTI)',
        'sasang-title': 'Body Type (Sasang)',
        'workout-recommends': 'AI Recommendations',
        'refresh-workout-btn': 'Refresh Workout',
        'workout-card-desc-title': 'Instructions',
        'workout-card-caution': 'Cautions',
    }
};

const exerciseTranslations = {
    'push-up': { 
        ko: '푸쉬업', en: 'Push-up', 
        image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=400', 
        primary: { ko: '가슴', en: 'Chest' }, 
        desc: { 
            ko: '1. 바닥에 엎드려 손을 어깨너비보다 넓게 짚습니다. 2. 몸을 일직선으로 유지하며 가슴을 내립니다. 3. 가슴 근육의 힘으로 밀어 올립니다.', 
            en: '1. Place hands wider than shoulders. 2. Lower chest while keeping body straight. 3. Push up using chest power.' 
        }, 
        caution: {
            ko: '허리가 아래로 처지지 않도록 복부에 힘을 주어 몸을 수평으로 유지하세요.',
            en: 'Keep your core engaged to prevent your lower back from sagging.'
        },
        isHome: true, intensity: 'medium' 
    },
    'squat': { 
        ko: '스쿼트', en: 'Squat', 
        image: 'https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?auto=format&fit=crop&q=80&w=400', 
        primary: { ko: '다리', en: 'Legs' }, 
        desc: { 
            ko: '1. 발을 어깨너비로 벌리고 섭니다. 2. 무릎이 발끝을 넘게 주의하며 엉덩이를 내립니다. 3. 발뒤꿈치를 밀며 일어납니다.', 
            en: '1. Stand with feet shoulder-width apart. 2. Lower hips without knees passing toes. 3. Push through heels to stand up.' 
        }, 
        caution: {
            ko: '무릎이 안쪽으로 모이지 않도록 바깥쪽으로 향하게 유지하세요.',
            en: 'Keep your knees aligned with your toes, preventing them from caving in.'
        },
        isHome: true, intensity: 'medium' 
    },
    'plank': { 
        ko: '플랭크', en: 'Plank', 
        image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400', 
        primary: { ko: '복근', en: 'Abs' }, 
        desc: { 
            ko: '1. 팔꿈치를 바닥에 대고 엎드립니다. 2. 복부와 엉덩이에 힘을 주어 몸을 일직선으로 만듭니다. 3. 정해진 시간 동안 버팁니다.', 
            en: '1. Support body on forearms. 2. Keep body in a straight line. 3. Hold for time.' 
        }, 
        caution: {
            ko: '엉덩이가 너무 높게 솟거나 아래로 처지지 않게 수평을 유지하는 것이 중요합니다.',
            en: 'Maintain a neutral spine; don\'t let your hips rise too high or dip too low.'
        },
        isHome: true, intensity: 'low' 
    },
    'burpee': { 
        ko: '버피 테스트', en: 'Burpees', 
        image: 'https://images.unsplash.com/photo-1599058917233-97f394156059?auto=format&fit=crop&q=80&w=400', 
        primary: { ko: '유산소', en: 'Cardio' }, 
        desc: { 
            ko: '1. 선 자세에서 바닥에 손을 짚습니다. 2. 다리를 뒤로 뻗었다가 다시 당겨옵니다. 3. 위로 높이 점프합니다.', 
            en: '1. From standing, place hands on floor. 2. Kick feet back and pull them back in. 3. Jump high.' 
        }, 
        caution: {
            ko: '착지 시 무릎을 살짝 굽혀 충격을 흡수하세요.',
            en: 'Bend your knees slightly when landing to absorb impact.'
        },
        isHome: true, intensity: 'high' 
    },
    'lunges': { 
        ko: '런지', en: 'Lunges', 
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400', 
        primary: { ko: '다리', en: 'Legs' }, 
        desc: { 
            ko: '1. 한쪽 발을 앞으로 크게 내딛습니다. 2. 양쪽 무릎이 90도가 되도록 몸을 내립니다. 3. 앞발의 힘으로 돌아옵니다.', 
            en: '1. Step forward with one foot. 2. Lower body until both knees are 90 degrees. 3. Push back to start.' 
        }, 
        caution: {
            ko: '상체를 바로 세우고 앞쪽 무릎이 발가락보다 앞으로 나가지 않게 하세요.',
            en: 'Keep your torso upright and ensure the front knee doesn\'t pass the toes.'
        },
        isHome: true, intensity: 'medium' 
    },
    'mountain-climber': { 
        ko: '마운틴 클라이머', en: 'Mountain Climbers', 
        image: 'https://images.unsplash.com/photo-1434608519344-49d77a699e1d?auto=format&fit=crop&q=80&w=400', 
        primary: { ko: '복근', en: 'Abs' }, 
        desc: { 
            ko: '1. 푸쉬업 자세를 취합니다. 2. 무릎을 가슴 쪽으로 빠르게 교차하며 당깁니다. 3. 달리듯 반복합니다.', 
            en: '1. Start in push-up position. 2. Drive knees to chest quickly in an alternating motion.' 
        }, 
        caution: {
            ko: '엉덩이를 낮게 유지하고 상체는 흔들리지 않게 고정하세요.',
            en: 'Keep your hips low and minimize upper body movement.'
        },
        isHome: true, intensity: 'high' 
    },
    'bridge': { 
        ko: '브릿지', en: 'Glute Bridge', 
        image: 'https://images.unsplash.com/photo-1594911772125-07fc7a2d8d9f?auto=format&fit=crop&q=80&w=400', 
        primary: { ko: '다리', en: 'Legs' }, 
        desc: { 
            ko: '1. 누워서 무릎을 굽히고 발을 바닥에 댑니다. 2. 골반을 위로 들어 올립니다. 3. 엉덩이를 수축하며 잠시 멈춥니다.', 
            en: '1. Lie on back with knees bent. 2. Lift hips toward ceiling. 3. Squeeze glutes at the top.' 
        }, 
        caution: {
            ko: '목과 어깨에 과한 압력이 가지 않도록 주의하고 엉덩이 힘에 집중하세요.',
            en: 'Avoid excessive pressure on your neck; focus on the glute squeeze.'
        },
        isHome: true, intensity: 'low' 
    },
    'bird-dog': { 
        ko: '버드독', en: 'Bird Dog', 
        image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400', 
        primary: { ko: '복근', en: 'Abs' }, 
        desc: { 
            ko: '1. 네발기기 자세를 취합니다. 2. 반대쪽 팔과 다리를 동시에 앞뒤로 뻗습니다. 3. 몸의 균형을 유지하며 반복합니다.', 
            en: '1. Start on all fours. 2. Extend opposite arm and leg simultaneously.' 
        }, 
        caution: {
            ko: '허리가 아래로 꺾이지 않도록 골반의 수평을 유지하세요.',
            en: 'Keep your hips level and avoid arching your back.'
        },
        isHome: true, intensity: 'low' 
    },
    'superman': { 
        ko: '슈퍼맨', en: 'Superman', 
        image: 'https://images.unsplash.com/photo-1518611012118-2969c63d002e?auto=format&fit=crop&q=80&w=400', 
        primary: { ko: '등', en: 'Back' }, 
        desc: { 
            ko: '1. 바닥에 엎드립니다. 2. 양팔과 다리를 동시에 들어 올립니다. 3. 등 근육의 자극을 느끼며 내립니다.', 
            en: '1. Lie face down. 2. Lift both arms and legs off the floor simultaneously.' 
        }, 
        caution: {
            ko: '목을 너무 뒤로 젖히지 말고 시선은 바닥을 유지하세요.',
            en: 'Don\'t strain your neck; keep your gaze toward the floor.'
        },
        isHome: true, intensity: 'low' 
    },
    'jumping-jacks': { 
        ko: '팔벌려뛰기', en: 'Jumping Jacks', 
        image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=400', 
        primary: { ko: '유산소', en: 'Cardio' }, 
        desc: { 
            ko: '1. 차렷 자세에서 점프하며 팔과 다리를 벌립니다. 2. 다시 점프하며 차렷 자세로 돌아옵니다.', 
            en: '1. Jump and spread arms and legs. 2. Jump back to starting position.' 
        }, 
        caution: {
            ko: '발 앞꿈치로 가볍게 착지하여 무릎 충격을 줄이세요.',
            en: 'Land softly on the balls of your feet to protect your knees.'
        },
        isHome: true, intensity: 'medium' 
    }
};

const stretchingDatabase = [
    { target: 'Chest', name: { ko: '대흉근 스트레칭', en: 'Chest Stretch' }, image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400' },
    { target: 'Abs', name: { ko: '코브라 자세', en: 'Cobra Stretch' }, image: 'https://images.unsplash.com/photo-1552196564-977484dfb66e?auto=format&fit=crop&q=80&w=400' },
    { target: 'Legs', name: { ko: '햄스트링 스트레칭', en: 'Hamstring Stretch' }, image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&q=80&w=400' },
    { target: 'Back', name: { ko: '고양이 자세', en: 'Cat-Cow Stretch' }, image: 'https://images.unsplash.com/photo-1518611012118-2969c63d002e?auto=format&fit=crop&q=80&w=400' },
    { target: 'Cardio', name: { ko: '종아리 스트레칭', en: 'Calf Stretch' }, image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400' },
    { target: 'Arms', name: { ko: '삼두근 스트레칭', en: 'Triceps Stretch' }, image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400' }
];

const dietDatabase = [
    { 
        time: 'breakfast', 
        name: { ko: '닭가슴살 샐러드와 사과', en: 'Chicken Salad & Apple' },
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400',
        ingredients: { ko: '닭가슴살 100g, 양상추, 사과 1/2개', en: '100g Chicken, Lettuce, 1/2 Apple' },
        recipe: { ko: '1. 닭가슴살을 삶습니다. 2. 채소와 함께 그릇에 담습니다.', en: '1. Boil chicken. 2. Plate with greens.' }
    },
    { 
        time: 'lunch', 
        name: { ko: '소고기 브로콜리 볶음', en: 'Beef & Broccoli Stir-fry' },
        image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=400',
        ingredients: { ko: '소고기 150g, 브로콜리, 마늘', en: '150g Beef, Broccoli, Garlic' },
        recipe: { ko: '1. 소고기와 마늘을 볶습니다. 2. 브로콜리를 넣고 마무리합니다.', en: '1. Stir-fry beef and garlic. 2. Add broccoli.' }
    },
    { 
        time: 'dinner', 
        name: { ko: '연어 스테이크', en: 'Salmon Steak' },
        image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=400',
        ingredients: { ko: '연어 150g, 아스파라거스', en: '150g Salmon, Asparagus' },
        recipe: { ko: '1. 연어에 간을 합니다. 2. 팬에 노릇하게 굽습니다.', en: '1. Season salmon. 2. Grill in a pan.' }
    }
];

const supplementDatabase = [
    { name: { ko: '유청 단백질', en: 'Whey Protein' }, benefit: { ko: '근육 합성 및 회복', en: 'Muscle recovery' }, products: { ko: '신타6, 마이프로틴', en: 'Syntha-6, MyProtein' } },
    { name: { ko: 'BCAA', en: 'BCAA' }, benefit: { ko: '근손실 방지', en: 'Prevent muscle loss' }, products: { ko: '엑스텐드', en: 'XTEND' } },
    { name: { ko: '종합 비타민', en: 'Multivitamin' }, benefit: { ko: '면역력 및 피로 회복', en: 'Immunity' }, products: { ko: '얼라이브, 센트룸', en: 'Alive, Centrum' } }
];
