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
        'mbti-diag-title': 'MBTI 전문가 자가진단',
        'mbti-diag-subtitle': '가장 자연스러운 본인의 모습을 선택해 주세요.',
        'mbti-q1-title': '[Q1. 에너지 방향]',
        'mbti-q1-e': '사람들을 만나며 에너지를 얻는다 (E)',
        'mbti-q1-i': '혼자만의 시간으로 재충전한다 (I)',
        'mbti-q2-title': '[Q2. 정보 인식]',
        'mbti-q2-s': '구체적인 사실과 경험을 중시한다 (S)',
        'mbti-q2-n': '미래의 가능성과 아이디어를 중시한다 (N)',
        'mbti-q3-title': '[Q3. 판단 근거]',
        'mbti-q3-t': '논리와 객관적 사실이 중요하다 (T)',
        'mbti-q3-f': '인간관계와 공감이 중요하다 (F)',
        'mbti-q4-title': '[Q4. 생활 양식]',
        'mbti-q4-j': '계획적이고 체계적인 것이 좋다 (J)',
        'mbti-q4-p': '상황에 맞춰 유연하게 행동한다 (P)',
        
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
        
        // Workout Plan
        'workout-recommends': 'AI 추천 설정',
        'workout-actual-input': '나의 수행 기록',
        'workout-reps': '추천 횟수',
        'workout-sets': '추천 세트',
        'workout-rest': '추천 휴식',
        'workout-time': '추천 시간',
        'actual-reps': '실행 횟수',
        'actual-sets': '실행 세트',
        'actual-rest': '실행 휴식',
        'actual-time': '실행 시간',
        
        // Diet
        'diet-title': '당신의 맞춤 식단 추천',
        'diet-breakfast': '아침 식단',
        'diet-lunch': '점심 식단',
        'diet-dinner': '저녁 식단',
        'diet-ingredients': '필요한 재료',
        'diet-recipe-title': '레시피',
        
        // Supplement
        'supplement-title': '전문가 추천 영양제',
        
        'workout-card-default-name': '추천 운동',
        'workout-card-default-desc': '가이드를 따라 진행하세요.',
        'workout-card-default-target': '전신',
        'stretching-empty': '운동을 생성해 주세요!',
        'generate-workout-btn': '상황 맞춤형 운동 생성하기',
        'workout-personalization-title': '현재 당신의 컨디션 상태 체크',

        // MBTI Detailed Descriptions
        'mbti-type-INTJ': '<strong>전략가 (INTJ)</strong><br>논리적이고 전략적인 마인드를 가진 당신은 효율성을 극대화하는 정교한 운동 프로그램을 선호합니다. 데이터에 기반한 성장을 즐기며, 혼자 집중할 수 있는 환경에서 최고의 성과를 냅니다. 추천: 체계적인 분할 운동, 기록 중심의 웨이트 트레이닝.',
        'mbti-type-INTP': '<strong>논리술사 (INTP)</strong><br>운동의 원리와 신체 메커니즘을 이해하는 것을 즐깁니다. 반복적인 루틴보다는 새로운 운동법이나 이론을 실험해보는 것을 선호합니다. 추천: 고난도 요가, 복합 관절 운동, 운동 과학 기반 프로그램.',
        'mbti-type-ENTJ': '<strong>통솔자 (ENTJ)</strong><br>명확한 목표와 성취를 지향합니다. 경쟁적인 환경이나 눈에 띄는 변화가 있을 때 동기부여를 강하게 받습니다. 추천: 고강도 인터벌 트레이닝(HIIT), 경쟁형 크로스핏, 명확한 목표 설정형 챌린지.',
        'mbti-type-ENTP': '<strong>변론가 (ENTP)</strong><br>지루한 것을 참지 못하며 항상 새로운 자극을 원합니다. 매일 똑같은 루틴보다는 매번 변화를 줄 수 있는 자유로운 스타일을 선호합니다. 추천: 다양한 운동 종목 번갈아 하기, 야외 액티비티, 신기술 기반 운동.',
        'mbti-type-INFJ': '<strong>옹호자 (INFJ)</strong><br>내면의 평화와 신체적 건강의 조화를 중시합니다. 소음이 적고 차분한 분위기에서 자기성찰과 함께하는 운동이 잘 맞습니다. 추천: 필라테스, 명상 중심 요가, 조용한 숲길 산책.',
        'mbti-type-INFP': '<strong>중재자 (INFP)</strong><br>의무감보다는 본인의 가치관과 즐거움을 따릅니다. 창의적이고 감성을 자극하는 운동 환경에서 지속 가능성이 높습니다. 추천: 댄스 워크아웃, 감성적인 플레이리스트와 함께하는 러닝, 자연 속 요가.',
        'mbti-type-ENFJ': '<strong>주인도자 (ENFJ)</strong><br>함께하는 즐거움과 성장을 중요하게 생각합니다. 타인에게 긍정적인 에너지를 주거나 함께 목표를 달성할 때 행복을 느낍니다. 추천: 그룹 클래스, 팀 스포츠, 파트너와 함께하는 운동.',
        'mbti-type-ENFP': '<strong>활동가 (ENFP)</strong><br>에너지가 넘치고 열정적입니다. 운동을 하나의 놀이처럼 즐기며, 분위기에 따라 퍼포먼스가 크게 달라집니다. 추천: 줌바, 트램펄린 운동, 사교적인 피트니스 커뮤니티 활동.',
        'mbti-type-ISTJ': '<strong>현실주의자 (ISTJ)</strong><br>정해진 규칙과 계획을 철저히 따르는 것을 선호합니다. 검증된 방식과 꾸준한 반복을 통해 확실한 결과를 만들어냅니다. 추천: 정석적인 5x5 스트렝스 루틴, 체계적인 달리기 계획.',
        'mbti-type-ISFJ': '<strong>수호자 (ISFJ)</strong><br>안정적이고 편안한 환경에서 꾸준히 하는 것을 잘합니다. 과한 경쟁보다는 본인의 페이스를 유지하며 주변을 배려하는 타입입니다. 추천: 일정한 루틴의 홈트레이닝, 정적인 근력 운동, 꾸준한 스트레칭.',
        'mbti-type-ESTJ': '<strong>경영자 (ESTJ)</strong><br>체계적이고 효율적인 운동 환경을 선호합니다. 명확한 규칙과 성과 지표가 있을 때 가장 성실하게 임합니다. 추천: 규율 있는 PT 수업, 기록 측정형 서킷 트레이닝, 명확한 스케줄 관리.',
        'mbti-type-ESFJ': '<strong>집정관 (ESFJ)</strong><br>사교적이며 타인과의 유대감을 중시합니다. 운동 시설의 분위기와 사람들과의 관계가 운동 지속의 핵심입니다. 추천: 에어로빅, 테니스 모임, 사람들이 많은 활기찬 헬스장.',
        'mbti-type-ISTP': '<strong>장인 (ISTP)</strong><br>도구 활용과 기술적인 움직임에 능숙합니다. 이론보다는 직접 몸으로 부딪치며 감각을 익히는 것을 즐깁니다. 추천: 클라이밍, 자전거 정비 및 라이딩, 복싱, 무술.',
        'mbti-type-ISFP': '<strong>모험가 (ISFP)</strong><br>현재의 감각과 즐거움에 집중합니다. 아름다운 풍경이나 감각적인 공간에서의 운동을 선호하며 강요받는 루틴은 싫어합니다. 추천: 서핑, 숲속 하이킹, 미적 감각을 살린 체조.',
        'mbti-type-ESTP': '<strong>사업가 (ESTP)</strong><br>모험과 스릴을 즐기며 즉각적인 반응이 오는 운동을 선호합니다. 에너지가 넘치며 역동적인 환경에서 빛을 발합니다. 추천: 스포츠 경기, 산악 자전거, 고강도 타바타.',
        'mbti-type-ESFP': '<strong>연예인 (ESFP)</strong><br>주목받는 것을 즐기며 운동 과정 자체가 즐거워야 합니다. 음악과 화려한 조명, 신나는 분위기가 필수입니다. 추천: 스피닝, 고강도 댄스 피트니스, 파티형 러닝 이벤트.'
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
        
        // Metrics
        'metrics-title': 'Body Metrics Analysis',
        'bmi-label': 'BMI Index',
        'bmr-label': 'BMR',
        'daily-calories-label': 'Rec. Daily Calories',
        'bmr-unit': 'kcal/day',
        'bmi-underweight': 'Underweight',
        'bmi-normal': 'Normal',
        'bmi-overweight': 'Overweight',
        'bmi-obese': 'Obese',
        'calculate-btn': 'Analyze My Body',
        'label-gender': 'Gender',
        'option-male': 'Male',
        'option-female': 'Female',
        'label-age': 'Age',
        'label-height': 'Height (cm)',
        'label-weight': 'Weight (kg)',
        
        // MBTI
        'mbti-title': 'Personality Analysis (MBTI)',
        'mbti-diag-title': 'MBTI Self-Diagnosis',
        'mbti-q1-title': '[Q1. Energy]',
        'mbti-q1-e': 'Gain energy from others (E)',
        'mbti-q1-i': 'Recharge alone (I)',
        
        // Workout Plan
        'workout-reps': 'Rec. Reps',
        'workout-sets': 'Rec. Sets',
        'workout-rest': 'Rec. Rest',
        'workout-time': 'Rec. Time',
        'actual-reps': 'Actual Reps',
        'actual-sets': 'Actual Sets',
        'actual-rest': 'Actual Rest',
        'actual-time': 'Actual Time',
        
        // Diet
        'diet-title': 'Your Custom Diet Plan',
        'diet-breakfast': 'Breakfast',
        'diet-lunch': 'Lunch',
        'diet-dinner': 'Dinner',
        'diet-ingredients': 'Ingredients',
        'diet-recipe-title': 'Recipe',
        
        'generate-workout-btn': 'Generate Custom Workout',
        'workout-personalization-title': 'Current Condition Check',

        // MBTI Detailed Descriptions
        'mbti-type-INTJ': '<strong>Architect (INTJ)</strong><br>With a logical and strategic mind, you prefer sophisticated workout programs that maximize efficiency. You enjoy data-driven growth and perform best in environments where you can focus alone. Recommended: Structured split routines, data-centric weight training.',
        'mbti-type-INTP': '<strong>Logician (INTP)</strong><br>You enjoy understanding the principles and mechanics of exercise. You prefer experimenting with new methods or theories rather than repetitive routines. Recommended: Advanced yoga, compound movements, science-based programs.',
        'mbti-type-ENTJ': '<strong>Commander (ENTJ)</strong><br>You are goal-oriented and achievement-driven. You are highly motivated in competitive environments or when seeing clear progress. Recommended: HIIT, competitive CrossFit, goal-focused challenges.',
        'mbti-type-ENTP': '<strong>Debater (ENTP)</strong><br>You cannot stand boredom and always want new stimuli. You prefer a free style that allows for changes rather than the same routine every day. Recommended: Varied exercise rotation, outdoor activities, tech-based workouts.',
        'mbti-type-INFJ': '<strong>Advocate (INFJ)</strong><br>You value the harmony between inner peace and physical health. Exercises that allow for introspection in a quiet atmosphere suit you best. Recommended: Pilates, meditation-focused yoga, quiet nature walks.',
        'mbti-type-INFP': '<strong>Mediator (INFP)</strong><br>You follow your values and enjoyment rather than a sense of duty. Sustainability is high in creative and emotionally stimulating environments. Recommended: Dance workouts, running with emotional playlists, yoga in nature.',
        'mbti-type-ENFJ': '<strong>Protagonist (ENFJ)</strong><br>You value the joy of being together and growing together. You feel happy when giving positive energy to others or achieving goals as a team. Recommended: Group classes, team sports, partner workouts.',
        'mbti-type-ENFP': '<strong>Campaigner (ENFP)</strong><br>You are energetic and passionate. You enjoy exercise like a game, and your performance varies greatly depending on the atmosphere. Recommended: Zumba, trampoline workouts, social fitness communities.',
        'mbti-type-ISTJ': '<strong>Logistician (ISTJ)</strong><br>You prefer to strictly follow established rules and plans. You produce solid results through proven methods and steady repetition. Recommended: Standard 5x5 strength routines, systematic running plans.',
        'mbti-type-ISFJ': '<strong>Defender (ISFJ)</strong><br>You excel at doing things consistently in a stable and comfortable environment. You maintain your pace and care for others rather than engaging in excessive competition. Recommended: Consistent home workouts, steady strength training, regular stretching.',
        'mbti-type-ESTJ': '<strong>Executive (ESTJ)</strong><br>You prefer a systematic and efficient workout environment. You are most diligent when there are clear rules and performance metrics. Recommended: Disciplined PT sessions, record-measuring circuit training, clear scheduling.',
        'mbti-type-ESFJ': '<strong>Consul (ESFJ)</strong><br>You are social and value bonds with others. The atmosphere of the facility and relationships with people are key to your consistency. Recommended: Aerobics, tennis clubs, lively gyms with many people.',
        'mbti-type-ISTP': '<strong>Virtuoso (ISTP)</strong><br>You are skilled in tool use and technical movements. You enjoy learning by doing rather than theory. Recommended: Climbing, cycling maintenance and riding, boxing, martial arts.',
        'mbti-type-ISFP': '<strong>Adventurer (ISFP)</strong><br>You focus on current senses and enjoyment. You prefer exercising in beautiful scenery or sensory spaces and dislike forced routines. Recommended: Surfing, hiking, aesthetically pleasing gymnastics.',
        'mbti-type-ESTP': '<strong>Entrepreneur (ESTP)</strong><br>You enjoy adventure and thrill, preferring exercises with immediate feedback. You shine in energetic and dynamic environments. Recommended: Sports matches, mountain biking, high-intensity Tabata.',
        'mbti-type-ESFP': '<strong>Entertainer (ESFP)</strong><br>You enjoy being the center of attention, and the exercise process itself must be fun. Music, bright lights, and an exciting atmosphere are essential. Recommended: Spinning, high-intensity dance fitness, party-style running events.'
    }
};

const exerciseTranslations = {
    // 가슴 (Chest)
    'push-up': {
        ko: '푸시업 (팔굽혀펴기)', en: 'Push-up', primary: { ko: '가슴', en: 'Chest' }, isHome: true,
        image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=400',
        desc: { ko: '양손을 어깨너비로 벌리고 몸을 일직선으로 유지하며 가슴이 바닥에 닿기 전까지 내립니다.', en: 'Keep body in a straight line, lower chest until almost touching floor.' },
        tip: { ko: '코어에 힘을 주어 엉덩이가 처지지 않게 하세요.', en: 'Keep your core tight, do not let hips sag.' },
        caution: { ko: '손목 통증 시 무릎을 대고 진행하세요.', en: 'If wrist hurts, put your knees down.' }
    },
    'bench-press': {
        ko: '벤치 프레스', en: 'Bench Press', primary: { ko: '가슴', en: 'Chest' }, isHome: false,
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400',
        desc: { ko: '벤치에 누워 바벨을 가슴 높이에서 밀어 올립니다.', en: 'Lie on bench, press barbell up from chest level.' },
        tip: { ko: '어깨를 고정하고 가슴 근육의 수축에 집중하세요.', en: 'Fix your shoulders and focus on chest contraction.' },
        caution: { ko: '바벨을 떨어뜨리지 않도록 주의하세요.', en: 'Be careful not to drop the barbell.' }
    },
    'incline-dumbbell-press': {
        ko: '인클라인 덤벨 프레스', en: 'Incline Dumbbell Press', primary: { ko: '가슴', en: 'Chest' }, isHome: true,
        image: 'https://images.unsplash.com/photo-1581009146145-b5ef03a7403f?auto=format&fit=crop&q=80&w=400',
        desc: { ko: '경사진 벤치에 앉아 덤벨을 위로 밀어 올립니다. 상부 가슴을 타겟으로 합니다.', en: 'Sit on incline bench, press dumbbells up. Targets upper chest.' },
        tip: { ko: '덤벨이 서로 부딪히지 않게 수직으로 올리세요.', en: 'Press dumbbells vertically without clashing them.' },
        caution: { ko: '덤벨 무게 조절에 유의하세요.', en: 'Control the dumbbell weight carefully.' }
    },
    'chest-fly': {
        ko: '체스트 플라이', en: 'Chest Fly', primary: { ko: '가슴', en: 'Chest' }, isHome: true,
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400',
        desc: { ko: '양팔을 옆으로 벌렸다가 가슴 앞으로 모으는 동작입니다.', en: 'Open arms to sides, then bring them together in front of chest.' },
        tip: { ko: '팔꿈치를 살짝 굽혀 관절 부담을 줄이세요.', en: 'Slightly bend elbows to reduce joint strain.' },
        caution: { ko: '가슴 근육이 과하게 늘어나지 않게 하세요.', en: 'Do not overstretch the chest muscles.' }
    },
    'dips': {
        ko: '딥스', en: 'Dips', primary: { ko: '가슴', en: 'Chest' }, isHome: true,
        image: 'https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&q=80&w=400',
        desc: { ko: '평행봉을 잡고 몸을 내렸다가 팔의 힘으로 다시 올라옵니다.', en: 'Grip parallel bars, lower body and push back up.' },
        tip: { ko: '상체를 살짝 숙이면 가슴 하부에 더 큰 자극이 갑니다.', en: 'Lean forward slightly to target lower chest.' },
        caution: { ko: '어깨 유연성이 부족하면 가동 범위를 조절하세요.', en: 'Adjust range of motion if shoulders are tight.' }
    },
    'dumbbell-fly': {
        ko: '덤벨 플라이', en: 'Dumbbell Fly', primary: { ko: '가슴', en: 'Chest' }, isHome: true,
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400',
        desc: { ko: '벤치에 누워 팔을 벌렸다 모으며 가슴 근육을 확장하고 수축시킵니다.', en: 'Lie on bench, open and close arms to expand and contract chest muscles.' },
        tip: { ko: '큰 나무를 껴안는 듯한 느낌으로 동작하세요.', en: 'Perform the movement as if hugging a large tree.' },
        caution: { ko: '무게가 너무 무거우면 어깨에 무리가 갈 수 있습니다.', en: 'Excessive weight can strain your shoulders.' }
    },
    'cable-crossover': {
        ko: '케이블 크로스오버', en: 'Cable Crossover', primary: { ko: '가슴', en: 'Chest' }, isHome: false,
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400',
        desc: { ko: '케이블 머신 중앙에서 양손으로 케이블을 가슴 앞쪽으로 당겨 모읍니다.', en: 'Pull cables together in front of your chest from the center of the machine.' },
        tip: { ko: '가슴 안쪽의 수축을 끝까지 느껴보세요.', en: 'Feel the contraction in the inner chest.' },
        caution: { ko: '상체가 너무 앞으로 쏠리지 않게 중심을 잡으세요.', en: 'Balance yourself so your upper body doesn\'t lean too far forward.' }
    },

    // 등 (Back)
    'pull-up': {
        ko: '풀업 (턱걸이)', en: 'Pull-up', primary: { ko: '등', en: 'Back' }, isHome: false,
        image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80&w=400',
        desc: { ko: '철봉을 잡고 등 근육을 사용하여 몸을 끌어올립니다.', en: 'Grip bar, pull body up using back muscles.' },
        tip: { ko: '가슴을 펴고 견갑골을 모으는 느낌으로 당기세요.', en: 'Open chest and squeeze shoulder blades.' },
        caution: { ko: '반동을 주지 않도록 노력하세요.', en: 'Try not to use momentum.' }
    },
    'lat-pulldown': {
        ko: '렛 풀다운', en: 'Lat Pulldown', primary: { ko: '등', en: 'Back' }, isHome: false,
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400',
        desc: { ko: '앉아서 바를 가슴 쪽으로 당겨 등 근육을 수축시킵니다.', en: 'Sit and pull bar towards chest to contract back muscles.' },
        tip: { ko: '팔보다는 등의 힘으로 당기는 것에 집중하세요.', en: 'Focus on pulling with back rather than arms.' },
        caution: { ko: '허리가 과하게 꺾이지 않게 하세요.', en: 'Do not arch lower back excessively.' }
    },
    'bent-over-row': {
        ko: '벤트 오버 로우', en: 'Bent Over Row', primary: { ko: '등', en: 'Back' }, isHome: true,
        image: 'https://images.unsplash.com/photo-1581009146145-b5ef03a7403f?auto=format&fit=crop&q=80&w=400',
        desc: { ko: '상체를 숙인 상태에서 바벨이나 덤벨을 배꼽 쪽으로 당깁니다.', en: 'Lean forward and pull weight towards navel.' },
        tip: { ko: '등을 평평하게 유지하여 허리를 보호하세요.', en: 'Keep back flat to protect spine.' },
        caution: { ko: '시선은 정면보다 약간 아래를 보세요.', en: 'Look slightly down rather than straight ahead.' }
    },
    'seated-row': {
        ko: '시티드 로우', en: 'Seated Row', primary: { ko: '등', en: 'Back' }, isHome: false,
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400',
        desc: { ko: '앉아서 케이블을 몸쪽으로 당겨 등의 중앙부를 강화합니다.', en: 'Sit and pull cable towards body to strengthen mid-back.' },
        tip: { ko: '당길 때 가슴을 내밀어 수축을 극대화하세요.', en: 'Push chest out when pulling for max contraction.' },
        caution: { ko: '어깨가 으쓱하지 않게 주의하세요.', en: 'Avoid shrugging shoulders.' }
    },
    'back-extension': {
        ko: '백 익스텐션', en: 'Back Extension', primary: { ko: '등', en: 'Back' }, isHome: true,
        image: 'https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&q=80&w=400',
        desc: { ko: '기구에 엎드려 상체를 들어 올려 척추기립근을 강화합니다.', en: 'Lie face down on equipment and lift upper body to strengthen erectors.' },
        tip: { ko: '천천히 상체를 내리며 근육의 긴장을 유지하세요.', en: 'Lower body slowly to maintain tension.' },
        caution: { ko: '허리를 너무 뒤로 젖히지 마세요.', en: 'Do not hyperextend the lower back.' }
    },
    't-bar-row': {
        ko: '티바 로우', en: 'T-Bar Row', primary: { ko: '등', en: 'Back' }, isHome: false,
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400',
        desc: { ko: 'T자 형태의 바를 가랑이 사이에 두고 당겨 등 근육의 두께를 키웁니다.', en: 'Pull a T-shaped bar between your legs to increase back thickness.' },
        tip: { ko: '팔꿈치를 몸 뒤로 최대한 보낸다는 느낌으로 당기세요.', en: 'Pull as if driving your elbows as far behind your body as possible.' },
        caution: { ko: '반동을 과하게 주면 허리에 무리가 올 수 있습니다.', en: 'Excessive momentum can strain your lower back.' }
    },
    'face-pull': {
        ko: '페이스 풀', en: 'Face Pull', primary: { ko: '등', en: 'Back' }, isHome: false,
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400',
        desc: { ko: '케이블을 얼굴 쪽으로 당겨 등 상부와 후면 어깨를 강화합니다.', en: 'Pull cable towards your face to strengthen upper back and rear delts.' },
        tip: { ko: '당길 때 양손을 바깥쪽으로 벌려주세요.', en: 'Pull your hands outward as you pull toward your face.' },
        caution: { ko: '어깨 관절에 무리가 가지 않도록 적당한 무게로 진행하세요.', en: 'Use moderate weight to avoid shoulder joint strain.' }
    },
    'one-arm-dumbbell-row': {
        ko: '원 암 덤벨 로우', en: 'One Arm Dumbbell Row', primary: { ko: '등', en: 'Back' }, isHome: true,
        image: 'https://images.unsplash.com/photo-1581009146145-b5ef03a7403f?auto=format&fit=crop&q=80&w=400',
        desc: { ko: '한 손으로 덤벨을 당겨 등 근육을 한쪽씩 집중적으로 단련합니다.', en: 'Pull a dumbbell with one hand to train back muscles one side at a time.' },
        tip: { ko: '등의 이완과 수축 범위를 최대한 넓게 가져가세요.', en: 'Maximize the range of motion for back extension and contraction.' },
        caution: { ko: '상체가 과하게 비틀리지 않도록 주의하세요.', en: 'Be careful not to twist your torso excessively.' }
    },

    // 하체 (Legs)
    'squat': {
        ko: '스쿼트', en: 'Squat', primary: { ko: '하체', en: 'Legs' }, isHome: true,
        image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=400',
        desc: { ko: '발을 벌리고 앉았다 일어나는 하체 대표 운동입니다.', en: 'Stand with feet apart, sit down and stand back up.' },
        tip: { ko: '무릎이 발끝보다 앞으로 나가지 않게 하세요.', en: 'Keep knees behind toes.' },
        caution: { ko: '발꿈치가 들리지 않게 지면을 누르세요.', en: 'Keep heels on the ground.' }
    },
    'lunge': {
        ko: '런지', en: 'Lunge', primary: { ko: '하체', en: 'Legs' }, isHome: true,
        image: 'https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&q=80&w=400',
        desc: { ko: '한쪽 발을 앞으로 내딛고 무릎을 굽혀 하체를 강화합니다.', en: 'Step forward and bend knees to strengthen legs.' },
        tip: { ko: '상체를 바로 세워 균형을 잡으세요.', en: 'Keep torso upright for balance.' },
        caution: { ko: '앞쪽 무릎이 과하게 구부러지지 않게 하세요.', en: 'Do not let front knee overshoot.' }
    },
    'leg-press': {
        ko: '레그 프레스', en: 'Leg Press', primary: { ko: '하체', en: 'Legs' }, isHome: false,
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400',
        desc: { ko: '발판을 밀어 허벅지 근육을 단련합니다.', en: 'Push footplate to train thigh muscles.' },
        tip: { ko: '발판을 밀 때 무릎을 완전히 펴지 마세요.', en: 'Do not lock knees at the top.' },
        caution: { ko: '허리가 등받이에서 떨어지지 않게 하세요.', en: 'Keep lower back against the seat.' }
    },
    'leg-curl': {
        ko: '레그 컬', en: 'Leg Curl', primary: { ko: '하체', en: 'Legs' }, isHome: false,
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400',
        desc: { ko: '엎드려서 다리를 굽혀 허벅지 뒤쪽 근육을 단련합니다.', en: 'Lie face down and bend legs to train hamstrings.' },
        tip: { ko: '내릴 때도 천천히 자극을 느끼며 내리세요.', en: 'Lower weight slowly to feel tension.' },
        caution: { ko: '골반이 들리지 않도록 주의하세요.', en: 'Do not let hips lift off the pad.' }
    },
    'deadlift': {
        ko: '데드리프트', en: 'Deadlift', primary: { ko: '하체', en: 'Legs' }, isHome: false,
        image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=400',
        desc: { ko: '바닥의 무게를 들어 올려 전신과 하체를 강화합니다.', en: 'Lift weight from floor to strengthen full body and legs.' },
        tip: { ko: '바를 몸에 가깝게 유지하며 들어 올리세요.', en: 'Keep bar close to body during lift.' },
        caution: { ko: '등을 절대로 굽히지 마세요.', en: 'Never round your back.' }
    },
    'leg-extension': {
        ko: '레그 익스텐션', en: 'Leg Extension', primary: { ko: '하체', en: 'Legs' }, isHome: false,
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400',
        desc: { ko: '앉아서 다리를 펴 허벅지 앞쪽 근육(대퇴사두근)을 강화합니다.', en: 'Sit and extend legs to strengthen quadriceps.' },
        tip: { ko: '다리를 펼 때 무릎 근육에 집중하여 끝까지 수축하세요.', en: 'Focus on knee muscles and contract fully when extending.' },
        caution: { ko: '무릎에 무리가 가지 않도록 적절한 무게를 선택하세요.', en: 'Choose appropriate weight to avoid knee strain.' }
    },
    'bulgarian-split-squat': {
        ko: '불가리안 스플릿 스쿼트', en: 'Bulgarian Split Squat', primary: { ko: '하체', en: 'Legs' }, isHome: true,
        image: 'https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&q=80&w=400',
        desc: { ko: '한쪽 발을 벤치에 올리고 반대쪽 다리로 스쿼트를 진행합니다.', en: 'Place one foot on a bench and perform squats with the other leg.' },
        tip: { ko: '상체를 약간 숙이면 엉덩이(둔근)에 더 큰 자극이 갑니다.', en: 'Lean forward slightly to target the glutes more.' },
        caution: { ko: '중심을 잡기 어려우면 처음에는 맨몸으로 시작하세요.', en: 'Start with bodyweight if you find it hard to balance.' }
    },
    'calf-raise': {
        ko: '카프 레이즈', en: 'Calf Raise', primary: { ko: '하체', en: 'Legs' }, isHome: true,
        image: 'https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&q=80&w=400',
        desc: { ko: '발뒤꿈치를 들어 올려 종아리 근육을 단련합니다.', en: 'Lift your heels to train calf muscles.' },
        tip: { ko: '최대한 높이 들어 올린 후 천천히 내리세요.', en: 'Lift as high as possible and lower slowly.' },
        caution: { ko: '발목에 통증이 느껴지면 가동 범위를 줄이세요.', en: 'Reduce range of motion if you feel ankle pain.' }
    },

    // 팔 (Arms)
    'bicep-curl': {
        ko: '바벨 컬', en: 'Barbell Curl', primary: { ko: '팔', en: 'Arms' }, isHome: true,
        image: 'https://images.unsplash.com/photo-1581009146145-b5ef03a7403f?auto=format&fit=crop&q=80&w=400',
        desc: { ko: '바벨을 들어 올려 팔 앞쪽(이두근)을 강화합니다.', en: 'Lift barbell to strengthen biceps.' },
        tip: { ko: '팔꿈치를 옆구리에 고정하고 반동을 줄이세요.', en: 'Fix elbows to your sides and minimize momentum.' },
        caution: { ko: '손목이 꺾이지 않도록 주의하세요.', en: 'Be careful not to bend your wrists.' }
    },
    'tricep-pushdown': {
        ko: '트라이셉 푸쉬다운', en: 'Tricep Pushdown', primary: { ko: '팔', en: 'Arms' }, isHome: false,
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400',
        desc: { ko: '케이블을 아래로 밀어내 팔 뒤쪽(삼두근)을 단련합니다.', en: 'Push cable down to train triceps.' },
        tip: { ko: '팔꿈치를 고정하고 팔의 힘으로만 밀어내세요.', en: 'Fix elbows and push using only arm strength.' },
        caution: { ko: '어깨가 위로 들리지 않도록 주의하세요.', en: 'Do not let your shoulders shrug up.' }
    },
    'hammer-curl': {
        ko: '해머 컬', en: 'Hammer Curl', primary: { ko: '팔', en: 'Arms' }, isHome: true,
        image: 'https://images.unsplash.com/photo-1581009146145-b5ef03a7403f?auto=format&fit=crop&q=80&w=400',
        desc: { ko: '덤벨을 세운 상태로 들어 올려 팔의 바깥쪽과 전완근을 강화합니다.', en: 'Lift dumbbells with a neutral grip to strengthen outer biceps and forearms.' },
        tip: { ko: '덤벨을 쥐는 힘을 일정하게 유지하세요.', en: 'Maintain a consistent grip on the dumbbells.' },
        caution: { ko: '상체가 앞뒤로 흔들리지 않게 하세요.', en: 'Keep your torso from swinging back and forth.' }
    },

    // 복근 (Abs)
    'crunch': {
        ko: '크런치', en: 'Crunch', primary: { ko: '복근', en: 'Abs' }, isHome: true,
        image: 'https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&q=80&w=400',
        desc: { ko: '상체를 살짝 들어 올려 복근을 수축시킵니다.', en: 'Lift upper body slightly to contract abs.' },
        tip: { ko: '복부의 힘으로만 상체를 들어 올리세요.', en: 'Use only abdominal strength.' },
        caution: { ko: '목을 과하게 당기지 마세요.', en: 'Do not pull your neck.' }
    },
    'leg-raise': {
        ko: '레그 레이즈', en: 'Leg Raise', primary: { ko: '복근', en: 'Abs' }, isHome: true,
        image: 'https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&q=80&w=400',
        desc: { ko: '누워서 다리를 들어 올려 하복부를 단련합니다.', en: 'Lie down and lift legs to train lower abs.' },
        tip: { ko: '허리가 바닥에서 뜨지 않도록 주의하세요.', en: 'Keep lower back pressed against floor.' },
        caution: { ko: '다리를 내릴 때 천천히 내리세요.', en: 'Lower legs slowly.' }
    },
    'plank': {
        ko: '플랭크', en: 'Plank', primary: { ko: '복근', en: 'Abs' }, isHome: true,
        image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400',
        desc: { ko: '몸을 일직선으로 유지하며 버티는 코어 운동입니다.', en: 'Hold body in a straight line to train core.' },
        tip: { ko: '엉덩이가 위로 솟거나 아래로 처지지 않게 하세요.', en: 'Do not let hips sag or peak.' },
        caution: { ko: '호흡을 참지 말고 일정하게 하세요.', en: 'Do not hold your breath.' }
    },
    'russian-twist': {
        ko: '러시안 트위스트', en: 'Russian Twist', primary: { ko: '복근', en: 'Abs' }, isHome: true,
        image: 'https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&q=80&w=400',
        desc: { ko: '상체를 비틀어 옆구리 근육을 강화합니다.', en: 'Twist torso to strengthen obliques.' },
        tip: { ko: '발을 바닥에서 떼면 난이도가 높아집니다.', en: 'Lift feet off floor for more challenge.' },
        caution: { ko: '허리에 무리가 가지 않는 선에서 비틀어 주세요.', en: 'Do not twist too far if it hurts lower back.' }
    },
    'mountain-climber': {
        ko: '마운틴 클라이머', en: 'Mountain Climbers', primary: { ko: '복근', en: 'Abs' }, isHome: true,
        image: 'https://images.unsplash.com/photo-1599058917232-d750c1859d7c?auto=format&fit=crop&q=80&w=400',
        desc: { ko: '엎드린 자세에서 달리는 듯한 동작으로 복근과 유산소를 동시에 잡습니다.', en: 'Plank position, move legs as if running to train abs and cardio.' },
        tip: { ko: '빠르게 진행할수록 유산소 효과가 큽니다.', en: 'Faster movement increases cardio benefit.' },
        caution: { ko: '어깨가 손목보다 앞으로 나가지 않게 하세요.', en: 'Keep shoulders above wrists.' }
    },
    'v-up': {
        ko: '브이업', en: 'V-up', primary: { ko: '복근', en: 'Abs' }, isHome: true,
        image: 'https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&q=80&w=400',
        desc: { ko: '누운 상태에서 상체와 하체를 동시에 들어 올려 몸을 V자로 만듭니다.', en: 'Lift both upper and lower body simultaneously to form a V shape.' },
        tip: { ko: '손 끝이 발가락에 닿는다는 느낌으로 올라오세요.', en: 'Reach your fingertips towards your toes.' },
        caution: { ko: '허리에 무리가 갈 수 있으니 코어 힘을 잘 활용하세요.', en: 'Use core strength to avoid straining your lower back.' }
    },
    'bicycle-crunch': {
        ko: '바이시클 크런치', en: 'Bicycle Crunch', primary: { ko: '복근', en: 'Abs' }, isHome: true,
        image: 'https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&q=80&w=400',
        desc: { ko: '누워서 자전거를 타듯 다리를 움직이며 반대쪽 팔꿈치와 무릎을 맞닿게 합니다.', en: 'Move legs as if cycling and bring opposite elbow and knee together.' },
        tip: { ko: '상체를 충분히 비틀어 옆구리 자극을 극대화하세요.', en: 'Twist your torso fully to maximize oblique engagement.' },
        caution: { ko: '목을 과하게 잡아당기지 않도록 주의하세요.', en: 'Avoid pulling too hard on your neck.' }
    },
    'hanging-leg-raise': {
        ko: '행잉 레그 레이즈', en: 'Hanging Leg Raise', primary: { ko: '복근', en: 'Abs' }, isHome: false,
        image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80&w=400',
        desc: { ko: '철봉에 매달려 다리를 들어 올리는 고난도 복근 운동입니다.', en: 'Lift your legs while hanging from a bar; advanced abdominal exercise.' },
        tip: { ko: '몸의 반동을 최소화하고 복부의 힘으로 다리를 들어 올리세요.', en: 'Minimize body swing and lift legs using abdominal strength.' },
        caution: { ko: '어깨와 악력이 부족하면 가동 범위를 조절하세요.', en: 'Adjust range of motion if shoulder or grip strength is lacking.' }
    },

    // 유산소 (Cardio)
    'burpee': {
        ko: '버피 테스트', en: 'Burpees', primary: { ko: '유산소', en: 'Cardio' }, isHome: true,
        image: 'https://images.unsplash.com/photo-1599058917232-d750c1859d7c?auto=format&fit=crop&q=80&w=400',
        desc: { ko: '전신을 사용하는 고강도 유산소 운동입니다.', en: 'High intensity full body cardio exercise.' },
        tip: { ko: '일정한 리듬을 유지하며 진행하세요.', en: 'Maintain a steady rhythm.' },
        caution: { ko: '착지 시 무릎에 충격이 가지 않게 부드럽게 착지하세요.', en: 'Land softly to protect knees.' }
    },
    'jumping-jack': {
        ko: '점핑 잭 (팔 벌려 뛰기)', en: 'Jumping Jacks', primary: { ko: '유산소', en: 'Cardio' }, isHome: true,
        image: 'https://images.unsplash.com/photo-1599058917232-d750c1859d7c?auto=format&fit=crop&q=80&w=400',
        desc: { ko: '가볍게 뛰면서 팔과 다리를 벌렸다 모읍니다.', en: 'Jump lightly while spreading and closing arms/legs.' },
        tip: { ko: '가벼운 유산소 운동으로 워밍업에 좋습니다.', en: 'Good for warming up.' },
        caution: { ko: '발바닥 전체보다 앞꿈치로 가볍게 뛰세요.', en: 'Land on the balls of your feet.' }
    },
    'running': {
        ko: '러닝 (달리기)', en: 'Running', primary: { ko: '유산소', en: 'Cardio' }, isHome: false,
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400',
        desc: { ko: '심폐 지구력을 강화하는 대표적인 유산소 운동입니다.', en: 'Representative cardio exercise to improve endurance.' },
        tip: { ko: '호흡을 깊고 일정하게 유지하세요.', en: 'Breathe deeply and steadily.' },
        caution: { ko: '적절한 러닝화를 착용하여 관절을 보호하세요.', en: 'Wear proper shoes to protect joints.' }
    },
    'cycling': {
        ko: '사이클링 (자전거)', en: 'Cycling', primary: { ko: '유산소', en: 'Cardio' }, isHome: false,
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400',
        desc: { ko: '자전거를 타며 하체와 심폐 기능을 강화합니다.', en: 'Ride bike to strengthen legs and cardio system.' },
        tip: { ko: '안장 높이를 체형에 맞게 조절하세요.', en: 'Adjust seat height properly.' },
        caution: { ko: '무릎에 통증이 느껴지면 부하를 줄이세요.', en: 'Reduce load if knees hurt.' }
    },
    'rowing': {
        ko: '로잉 (노 젓기)', en: 'Rowing', primary: { ko: '유산소', en: 'Cardio' }, isHome: false,
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400',
        desc: { ko: '노를 젓는 동작으로 전신 근육과 심폐를 단련합니다.', en: 'Rowing motion to train full body and cardio.' },
        tip: { ko: '하체의 힘으로 먼저 밀고 팔로 당기세요.', en: 'Push with legs first, then pull with arms.' },
        caution: { ko: '허리가 굽지 않게 곧게 펴세요.', en: 'Keep back straight.' }
    },
    'high-knees': {
        ko: '하이 니 (제자리 높이 뛰기)', en: 'High Knees', primary: { ko: '유산소', en: 'Cardio' }, isHome: true,
        image: 'https://images.unsplash.com/photo-1599058917232-d750c1859d7c?auto=format&fit=crop&q=80&w=400',
        desc: { ko: '제자리에서 무릎을 가슴 높이까지 들어 올리며 빠르게 뜁니다.', en: 'Run in place while lifting knees to chest height.' },
        tip: { ko: '팔을 같이 흔들어 리듬감을 유지하세요.', en: 'Swing your arms to maintain rhythm.' },
        caution: { ko: '층간 소음에 유의하거나 매트 위에서 진행하세요.', en: 'Be mindful of noise or use a mat.' }
    },
    'skaters': {
        ko: '스케이터 홉', en: 'Skaters', primary: { ko: '유산소', en: 'Cardio' }, isHome: true,
        image: 'https://images.unsplash.com/photo-1599058917232-d750c1859d7c?auto=format&fit=crop&q=80&w=400',
        desc: { ko: '스케이트를 타듯 옆으로 점프하며 반대쪽 다리를 뒤로 교차합니다.', en: 'Jump sideways like a skater and cross the opposite leg behind.' },
        tip: { ko: '옆으로 최대한 멀리 뛰면 운동 강도가 높아집니다.', en: 'Jump further sideways for higher intensity.' },
        caution: { ko: '착지 시 발목이 꺾이지 않도록 주의하세요.', en: 'Be careful not to twist your ankle when landing.' }
    },
    'jump-rope': {
        ko: '줄넘기', en: 'Jump Rope', primary: { ko: '유산소', en: 'Cardio' }, isHome: true,
        image: 'https://images.unsplash.com/photo-1599058917232-d750c1859d7c?auto=format&fit=crop&q=80&w=400',
        desc: { ko: '줄을 넘으며 가볍게 점프하여 전신과 심폐 지구력을 강화합니다.', en: 'Jump lightly over a rope to strengthen full body and cardio endurance.' },
        tip: { ko: '손목 스냅을 이용하여 줄을 돌리세요.', en: 'Use your wrist snap to swing the rope.' },
        caution: { ko: '무릎 관절 보호를 위해 쿠션이 있는 신발을 착용하세요.', en: 'Wear cushioned shoes to protect your knees.' }
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
        ingredients: { ko: '닭가슴살 100g, 양상추, 사과 1/2개, 견과류', en: '100g Chicken, Lettuce, 1/2 Apple, Nuts' },
        recipe: { ko: '1. 닭가슴살을 삶거나 굽습니다. 2. 신선한 채소와 사과를 씻어 그릇에 담습니다. 3. 드레싱은 올리브유와 발사믹을 추천합니다.', en: '1. Cook chicken. 2. Wash and plate greens and apple. 3. Use olive oil and balsamic.' }
    },
    { 
        time: 'breakfast', 
        name: { ko: '오트밀과 블루베리', en: 'Oatmeal & Blueberries' },
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400',
        ingredients: { ko: '오트밀 50g, 우유 또는 두유, 블루베리, 꿀 한 스푼', en: '50g Oatmeal, Milk/Soy Milk, Blueberries, 1 tsp Honey' },
        recipe: { ko: '1. 오트밀에 우유를 붓고 전자레인지에 2분간 데웁니다. 2. 블루베리와 꿀을 토핑으로 올립니다.', en: '1. Heat oats with milk. 2. Top with berries and honey.' }
    },
    { 
        time: 'breakfast', 
        name: { ko: '그릭 요거트와 그래놀라', en: 'Greek Yogurt & Granola' },
        image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=400',
        ingredients: { ko: '그릭 요거트 150g, 그래놀라 30g, 꿀, 제철 과일', en: '150g Greek Yogurt, 30g Granola, Honey, Seasonal Fruit' },
        recipe: { ko: '1. 그릭 요거트를 볼에 담습니다. 2. 그래놀라와 과일을 토핑합니다. 3. 꿀을 살짝 뿌려 마무리합니다.', en: '1. Put yogurt in a bowl. 2. Top with granola and fruit. 3. Drizzle with honey.' }
    },
    { 
        time: 'breakfast', 
        name: { ko: '아보카도 토스트와 수란', en: 'Avocado Toast & Poached Egg' },
        image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=400',
        ingredients: { ko: '통밀빵 1장, 아보카도 1/2개, 계란 1개, 레드페퍼', en: '1 Slice Whole Grain Bread, 1/2 Avocado, 1 Egg, Red Pepper Flakes' },
        recipe: { ko: '1. 빵을 굽고 아보카도를 으깨어 바릅니다. 2. 수란을 만들어 올립니다. 3. 레드페퍼와 소금을 뿌립니다.', en: '1. Toast bread and spread mashed avocado. 2. Top with a poached egg. 3. Sprinkle red pepper and salt.' }
    },
    { 
        time: 'lunch', 
        name: { ko: '현미밥과 연어 구이', en: 'Brown Rice & Salmon' },
        image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=400',
        ingredients: { ko: '현미밥 1공기, 연어 150g, 브로콜리, 버섯', en: '1 Bowl Brown Rice, 150g Salmon, Broccoli, Mushrooms' },
        recipe: { ko: '1. 현미밥을 짓습니다. 2. 연어에 소금, 후추 간을 하여 굽습니다. 3. 브로콜리와 버섯을 살짝 볶아 함께 냅니다.', en: '1. Cook rice. 2. Season and grill salmon. 3. Stir-fry broccoli and mushrooms.' }
    },
    { 
        time: 'lunch', 
        name: { ko: '닭가슴살 볶음밥', en: 'Chicken Fried Rice' },
        image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=400',
        ingredients: { ko: '닭가슴살 100g, 현미밥, 파, 계란 1개', en: '100g Chicken, Brown Rice, Green Onions, 1 Egg' },
        recipe: { ko: '1. 파를 볶아 향을 냅니다. 2. 닭가슴살과 밥을 넣고 볶습니다. 3. 계란을 스크램블하여 섞습니다.', en: '1. Sauté onions. 2. Add chicken and rice. 3. Mix with scrambled egg.' }
    },
    { 
        time: 'lunch', 
        name: { ko: '소고기 브로콜리 볶음', en: 'Beef & Broccoli Stir-fry' },
        image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=400',
        ingredients: { ko: '소고기 우둔살 150g, 브로콜리, 굴소스, 마늘', en: '150g Beef Lean Cut, Broccoli, Oyster Sauce, Garlic' },
        recipe: { ko: '1. 소고기와 마늘을 먼저 볶습니다. 2. 브로콜리를 넣고 굴소스로 간을 합니다. 3. 현미밥과 함께 곁들입니다.', en: '1. Stir-fry beef and garlic. 2. Add broccoli and season with oyster sauce. 3. Serve with brown rice.' }
    },
    { 
        time: 'lunch', 
        name: { ko: '터키 아보카도 샌드위치', en: 'Turkey Avocado Sandwich' },
        image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=400',
        ingredients: { ko: '통밀 식빵, 터키 햄, 아보카도, 상추, 토마토', en: 'Whole Wheat Bread, Turkey Ham, Avocado, Lettuce, Tomato' },
        recipe: { ko: '1. 빵 사이에 재료를 층층이 쌓습니다. 2. 머스타드나 저칼로리 소스를 바릅니다. 3. 반으로 잘라 완성합니다.', en: '1. Layer ingredients between slices of bread. 2. Spread mustard or low-cal sauce. 3. Cut in half and serve.' }
    },
    { 
        time: 'dinner', 
        name: { ko: '소고기 안심과 구운 채소', en: 'Beef Tenderloin & Veggies' },
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=400',
        ingredients: { ko: '소고기 안심 150g, 아스파라거스, 방울토마토', en: '150g Beef Tenderloin, Asparagus, Cherry Tomatoes' },
        recipe: { ko: '1. 소고기를 원하는 굽기로 익힙니다. 2. 아스파라거스와 토마토를 소고기 기름에 같이 굽습니다.', en: '1. Grill beef. 2. Roast veggies in the same pan.' }
    },
    { 
        time: 'dinner', 
        name: { ko: '두부 스테이크와 샐러드', en: 'Tofu Steak & Salad' },
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=400',
        ingredients: { ko: '두부 1모, 전분가루 약간, 어린잎 채소', en: '1 Block Tofu, Cornstarch, Baby Greens' },
        recipe: { ko: '1. 두부의 물기를 제거하고 전분가루를 묻힙니다. 2. 팬에 노릇하게 굽습니다. 3. 샐러드와 곁들여 먹습니다.', en: '1. Drain and coat tofu with starch. 2. Pan-fry until golden. 3. Serve with salad.' }
    },
    { 
        time: 'dinner', 
        name: { ko: '구운 새우와 퀴노아 샐러드', en: 'Grilled Shrimp & Quinoa' },
        image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=400',
        ingredients: { ko: '새우 10마리, 퀴노아 1/2컵, 오이, 올리브유', en: '10 Shrimp, 1/2 Cup Quinoa, Cucumber, Olive Oil' },
        recipe: { ko: '1. 삶은 퀴노아와 채소를 섞습니다. 2. 새우를 그릴에 구워 올립니다. 3. 레몬즙과 올리브유 드레싱을 뿌립니다.', en: '1. Mix cooked quinoa and veggies. 2. Top with grilled shrimp. 3. Drizzle lemon juice and olive oil.' }
    },
    { 
        time: 'dinner', 
        name: { ko: '렌틸콩 스프와 호밀빵', en: 'Lentil Soup & Sourdough' },
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=400',
        ingredients: { ko: '렌틸콩, 당근, 양파, 호밀빵 1조각', en: 'Lentils, Carrots, Onion, 1 Slice Sourdough' },
        recipe: { ko: '1. 채소를 볶다가 렌틸콩과 물을 넣고 끓입니다. 2. 뭉근하게 익을 때까지 소금으로 간을 합니다. 3. 호밀빵과 함께 따뜻하게 먹습니다.', en: '1. Sauté veggies, add lentils and water, then boil. 2. Simmer until tender and season. 3. Serve warm with sourdough.' }
    }
];

const supplementDatabase = [
    { name: { ko: '유청 단백질 (Whey Protein)', en: 'Whey Protein' }, benefit: { ko: '근육 합성 및 회복 속도 증가', en: 'Muscle synthesis and faster recovery' }, products: { ko: '신타6, 마이프로틴 등', en: 'Syntha-6, MyProtein, etc.' } },
    { name: { ko: 'BCAA', en: 'BCAA' }, benefit: { ko: '근손실 방지 및 피로 감소', en: 'Prevent muscle loss and reduce fatigue' }, products: { ko: '엑스텐드 등', en: 'Scivation XTEND, etc.' } },
    { name: { ko: '크레아틴', en: 'Creatine' }, benefit: { ko: '근력 향상 및 고강도 운동 수행 능력 증대', en: 'Strength gain and high-intensity performance' }, products: { ko: '모노하이드레이트 크레아틴', en: 'Creatine Monohydrate' } },
    { name: { ko: '멀티비타민', en: 'Multivitamin' }, benefit: { ko: '전반적인 대사 활성화 및 영양 균형', en: 'Overall metabolism and nutritional balance' }, products: { ko: '얼라이브, 센트룸 등', en: 'Alive!, Centrum, etc.' } },
    { name: { ko: '오메가-3', en: 'Omega-3' }, benefit: { ko: '염증 감소 및 혈행 개선', en: 'Reduce inflammation and improve circulation' }, products: { ko: '나우푸드 오메가3 등', en: 'Now Foods Omega-3, etc.' } }
];
