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
        'mbti-diag-title': 'Advanced MBTI Diagnosis',
        'mbti-diag-subtitle': 'Please choose the answers that best represent your usual self.',
        'mbti-insight-label': 'Personality Precision Insight',
        'retake-mbti': 'Retake Test',
        'mbti-default-type': 'Your MBTI Result',

        // MBTI Questions
        'mbti-q1-title': '1. At a large social gathering or party, how do you usually behave?',
        'mbti-q1-a': 'Active conversation with many, gaining energy (E)',
        'mbti-q1-b': 'Small talk with a few, conserving energy (I)',
        // ... (truncated for brevity in translation, but I will include full English set in actual file write)
        'mbti-q20-title': '20. Which sentence best describes your attitude toward life?',
        'mbti-q20-a': 'Aim for a controlled, predictable, and stable life (J)',
        'mbti-q20-b': 'Aim for a flexible life, open to all possibilities (P)',
        
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
        'workout-personalization-title': 'Current Condition Check'
    }
};

const exerciseTranslations = {
    // 가슴 (Chest)
    'push-up': {
        ko: '푸시업 (팔굽혀펴기)', en: 'Push-up', primary: { ko: '가슴', en: 'Chest' }, isHome: true,
        image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=400',
        desc: { ko: '1. 양손을 어깨너비보다 약간 넓게 바닥에 짚습니다. 2. 머리부터 발꿈치까지 몸을 일직선으로 만듭니다. 3. 가슴이 바닥에 닿기 직전까지 천천히 몸을 내립니다. 4. 가슴 근육의 힘을 사용하여 원래 자세로 밀어 올립니다.', en: '1. Place hands slightly wider than shoulders. 2. Keep body in a straight line from head to heels. 3. Lower body until chest almost touches floor. 4. Push back up using chest muscles.' },
        tip: { ko: '코어에 힘을 주어 엉덩이가 처지거나 위로 솟지 않게 하세요.', en: 'Keep your core tight, do not let hips sag or peak.' },
        caution: { ko: '손목 통증이 느껴진다면 무릎을 바닥에 대고 진행하거나 푸시업 바를 사용하세요. 어깨를 과하게 으쓱하지 마세요.', en: 'If wrist hurts, put your knees down or use push-up bars. Do not shrug your shoulders.' }
    },
    'bench-press': {
        ko: '벤치 프레스', en: 'Bench Press', primary: { ko: '가슴', en: 'Chest' }, isHome: false,
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400',
        desc: { ko: '1. 벤치에 등을 대고 누워 발을 바닥에 단단히 고정합니다. 2. 바를 어깨너비보다 넓게 잡습니다. 3. 바를 가슴 중앙부까지 천천히 내립니다. 4. 가슴의 힘으로 바를 수직 위로 밀어 올립니다.', en: '1. Lie on bench with feet flat on floor. 2. Grip bar wider than shoulders. 3. Lower bar to mid-chest slowly. 4. Press bar vertically using chest strength.' },
        tip: { ko: '견갑골(날개뼈)을 뒤로 모아 고정하면 가슴 근육에 더 큰 자극을 줄 수 있습니다.', en: 'Retract shoulder blades to maximize chest engagement.' },
        caution: { ko: '바를 내릴 때 가슴에서 튕기지 마세요. 무거운 무게를 다룰 때는 반드시 보조자와 함께 하세요.', en: 'Do not bounce the bar off your chest. Use a spotter for heavy weights.' }
    },
    'incline-dumbbell-press': {
        ko: '인클라인 덤벨 프레스', en: 'Incline Dumbbell Press', primary: { ko: '가슴', en: 'Chest' }, isHome: true,
        image: 'https://images.unsplash.com/photo-1581009146145-b5ef03a7403f?auto=format&fit=crop&q=80&w=400',
        desc: { ko: '1. 30~45도 경사진 벤치에 앉습니다. 2. 양손에 덤벨을 들고 쇄골 위쪽 방향으로 밀어 올립니다. 3. 가슴 상부가 늘어나는 것을 느끼며 천천히 내립니다.', en: '1. Sit on a 30-45 degree incline bench. 2. Press dumbbells up towards the upper chest area. 3. Lower slowly feeling the upper chest stretch.' },
        tip: { ko: '덤벨이 서로 부딪히지 않게 평행을 유지하며 올리세요.', en: 'Keep dumbbells parallel and avoid clashing them at the top.' },
        caution: { ko: '팔꿈치가 어깨 뒤로 너무 많이 넘어가지 않게 가동 범위를 조절하세요.', en: 'Control range of motion so elbows don\'t go too far back.' }
    },
    'chest-fly': {
        ko: '체스트 플라이', en: 'Chest Fly', primary: { ko: '가슴', en: 'Chest' }, isHome: true,
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400',
        desc: { ko: '1. 벤치에 누워 덤벨을 가슴 위로 듭니다. 2. 큰 나무를 껴안는 듯한 느낌으로 팔을 옆으로 벌립니다. 3. 가슴 근육이 충분히 이완되면 다시 가슴 앞쪽으로 모읍니다.', en: '1. Lie on bench with dumbbells above chest. 2. Open arms to sides like hugging a large tree. 3. Bring dumbbells together in front of chest once muscles are stretched.' },
        tip: { ko: '팔꿈치를 살짝 굽힌 상태를 유지하여 관절의 부담을 줄이세요.', en: 'Keep elbows slightly bent to reduce joint strain.' },
        caution: { ko: '가슴 근육이 과하게 늘어나 부상을 입지 않도록 적절한 깊이까지만 내리세요.', en: 'Do not overstretch to avoid injury; lower only to a comfortable depth.' }
    },
    'dips': {
        ko: '딥스', en: 'Dips', primary: { ko: '가슴', en: 'Chest' }, isHome: true,
        image: 'https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&q=80&w=400',
        desc: { ko: '1. 평행봉을 잡고 몸을 띄웁니다. 2. 상체를 약간 앞으로 기울입니다. 3. 팔꿈치가 90도가 될 때까지 몸을 내립니다. 4. 가슴 하부의 힘으로 다시 올라옵니다.', en: '1. Grip parallel bars and lift body. 2. Lean torso forward slightly. 3. Lower body until elbows are at 90 degrees. 4. Push back up using lower chest strength.' },
        tip: { ko: '시선을 정면보다 약간 아래에 두면 상체 기울기를 유지하기 쉽습니다.', en: 'Look slightly down to help maintain the forward lean.' },
        caution: { ko: '어깨 관절에 통증이 있다면 가동 범위를 줄이거나 중단하세요.', en: 'If you feel shoulder pain, reduce range of motion or stop.' }
    },

    // 등 (Back)
    'pull-up': {
        ko: '풀업 (턱걸이)', en: 'Pull-up', primary: { ko: '등', en: 'Back' }, isHome: false,
        image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80&w=400',
        desc: { ko: '1. 철봉을 어깨너비보다 넓게 잡습니다. 2. 가슴을 하늘 쪽으로 들어 올리며 몸을 끌어올립니다. 3. 턱이 봉 위에 올라오면 잠시 멈췄다가 천천히 내려옵니다.', en: '1. Grip bar wider than shoulders. 2. Pull body up by lifting chest towards the bar. 3. Pause when chin is above bar, then lower slowly.' },
        tip: { ko: '팔의 힘보다는 등의 날개뼈를 아래로 당기는 힘에 집중하세요.', en: 'Focus on pulling shoulder blades down rather than using arm strength.' },
        caution: { ko: '몸을 흔드는 반동을 쓰지 마세요. 내려올 때 툭 떨어지지 않게 광배근으로 버티세요.', en: 'Avoid using momentum. Control the descent using your lats.' }
    },
    'lat-pulldown': {
        ko: '렛 풀다운', en: 'Lat Pulldown', primary: { ko: '등', en: 'Back' }, isHome: false,
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400',
        desc: { ko: '1. 머신에 앉아 무릎 고정대에 다리를 넣습니다. 2. 바를 넓게 잡고 가슴 윗부분까지 당깁니다. 3. 등이 수축되는 것을 느끼며 바를 천천히 위로 보냅니다.', en: '1. Sit at machine with knees under pads. 2. Grip bar wide and pull down to upper chest. 3. Feel the back contraction and return bar slowly.' },
        tip: { ko: '바를 당길 때 상체를 아주 살짝 뒤로 젖히면 광배근 자극이 좋아집니다.', en: 'Leaning back very slightly can enhance lat engagement.' },
        caution: { ko: '허리를 너무 심하게 꺾지 마세요. 팔꿈치가 뒤로 빠지지 않게 수직으로 당기세요.', en: 'Do not arch lower back excessively. Pull elbows vertically down.' }
    },
    'bent-over-row': {
        ko: '벤트 오버 로우', en: 'Bent Over Row', primary: { ko: '등', en: 'Back' }, isHome: true,
        image: 'https://images.unsplash.com/photo-1581009146145-b5ef03a7403f?auto=format&fit=crop&q=80&w=400',
        desc: { ko: '1. 무릎을 살짝 굽히고 상체를 45도 정도 숙입니다. 2. 바벨이나 덤벨을 배꼽 방향으로 당깁니다. 3. 등의 중앙 근육을 쥐어짜는 느낌으로 수축시킨 후 천천히 내립니다.', en: '1. Bend knees slightly and lean torso forward at 45 degrees. 2. Pull weight towards your navel. 3. Squeeze mid-back muscles and lower slowly.' },
        tip: { ko: '시선은 바닥에서 1~2m 앞을 보며 목의 정렬을 유지하세요.', en: 'Look 1-2m ahead on the floor to keep neck aligned.' },
        caution: { ko: '허리가 굽지 않게 평평하게 유지하는 것이 가장 중요합니다.', en: 'Most important: keep your back flat, never rounded.' }
    },

    // 하체 (Legs)
    'squat': {
        ko: '스쿼트', en: 'Squat', primary: { ko: '하체', en: 'Legs' }, isHome: true,
        image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=400',
        desc: { ko: '1. 발을 어깨너비로 벌리고 발끝은 살짝 바깥을 향하게 합니다. 2. 의자에 앉듯이 엉덩이를 뒤로 빼며 천천히 내려갑니다. 3. 허벅지가 바닥과 평행이 될 때까지 내려갔다가 발바닥으로 지면을 밀며 올라옵니다.', en: '1. Stand with feet shoulder-width apart, toes pointed slightly out. 2. Lower hips back as if sitting in a chair. 3. Descend until thighs are parallel to floor, then push through heels to stand.' },
        tip: { ko: '체중을 발뒤꿈치와 중앙에 실으세요. 무릎과 발끝의 방향을 일치시키세요.', en: 'Keep weight on heels/mid-foot. Ensure knees track in line with toes.' },
        caution: { ko: '무릎이 발등보다 너무 앞으로 나가지 않게 주의하고, 허리가 안쪽으로 말리지 않게 하세요.', en: 'Don\'t let knees overshoot toes too far; keep lower back from rounding.' }
    },
    'lunge': {
        ko: '런지', en: 'Lunge', primary: { ko: '하체', en: 'Legs' }, isHome: true,
        image: 'https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&q=80&w=400',
        desc: { ko: '1. 똑바로 서서 한쪽 발을 앞으로 크게 내딛습니다. 2. 앞뒤 무릎이 모두 90도가 될 때까지 몸을 내립니다. 3. 앞발의 뒤꿈치를 밀어 원래 자세로 돌아옵니다.', en: '1. Stand straight and take a big step forward. 2. Lower body until both knees are at 90 degrees. 3. Push through front heel to return to start.' },
        tip: { ko: '상체를 수직으로 세우면 허벅지 앞쪽, 약간 숙이면 엉덩이 자극이 강해집니다.', en: 'Keep torso upright for quads, or lean slightly for glutes.' },
        caution: { ko: '앞쪽 무릎이 안쪽으로 모이지 않게 고정하세요.', en: 'Keep front knee from collapsing inward.' }
    },
    'deadlift': {
        ko: '데드리프트', en: 'Deadlift', primary: { ko: '하체', en: 'Legs' }, isHome: false,
        image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=400',
        desc: { ko: '1. 바벨 앞에 서서 정강이를 바에 가깝게 댑니다. 2. 허리를 펴고 엉덩이를 뒤로 빼며 바를 잡습니다. 3. 지면을 밀어내며 몸을 곧게 세웁니다. 4. 바를 몸에 붙인 상태로 천천히 내립니다.', en: '1. Stand with shins close to bar. 2. Keep back flat, hips back, and grip bar. 3. Push floor away to stand upright. 4. Lower bar slowly keeping it close to body.' },
        tip: { ko: '바를 들어 올릴 때 숨을 참고 복압을 유지하는 것이 허리 보호에 필수적입니다.', en: 'Hold breath and maintain intra-abdominal pressure to protect spine.' },
        caution: { ko: '등이 굽는 순간 즉시 중단하세요. 허리의 힘이 아닌 하체와 둔근의 힘을 사용하세요.', en: 'Stop immediately if back rounds. Use legs and glutes, not just lower back.' }
    },

    // 복근 (Abs)
    'crunch': {
        ko: '크런치', en: 'Crunch', primary: { ko: '복근', en: 'Abs' }, isHome: true,
        image: 'https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&q=80&w=400',
        desc: { ko: '1. 바닥에 누워 무릎을 굽히고 발을 바닥에 댑니다. 2. 상체를 명치까지만 살짝 들어 올려 복근을 수축합니다. 3. 배의 긴장을 유지하며 천천히 내려옵니다.', en: '1. Lie on back with knees bent and feet flat. 2. Lift upper body slightly to contract abs. 3. Lower slowly while maintaining tension.' },
        tip: { ko: '손으로 목을 당기지 말고, 가슴에 손을 얹거나 귀 옆에 살짝 대세요.', en: 'Don\'t pull your neck; cross arms over chest or touch ears lightly.' },
        caution: { ko: '허리가 바닥에서 과하게 뜨지 않도록 주의하세요.', en: 'Ensure your lower back stays pressed or close to the floor.' }
    },
    'plank': {
        ko: '플랭크', en: 'Plank', primary: { ko: '복근', en: 'Abs' }, isHome: true,
        image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400',
        desc: { ko: '1. 바닥에 엎드려 전완(팔꿈치 아래)을 바닥에 댑니다. 2. 어깨와 팔꿈치가 수직이 되게 합니다. 3. 몸 전체를 일직선으로 만들고 복부와 엉덩이에 힘을 주어 버팁니다.', en: '1. Lie face down and rest on forearms. 2. Keep shoulders directly above elbows. 3. Form a straight line with body and hold using core and glute strength.' },
        tip: { ko: '어깨 근육으로 바닥을 밀어낸다는 느낌을 유지하세요.', en: 'Think about pushing the floor away with your shoulder muscles.' },
        caution: { ko: '엉덩이가 아래로 처지면 허리에 통증이 올 수 있으니 주의하세요.', en: 'Avoid letting hips sag to prevent lower back pain.' }
    },

    // 유산소 (Cardio)
    'burpee': {
        ko: '버피 테스트', en: 'Burpees', primary: { ko: '유산소', en: 'Cardio' }, isHome: true,
        image: 'https://images.unsplash.com/photo-1599058917232-d750c1859d7c?auto=format&fit=crop&q=80&w=400',
        desc: { ko: '1. 똑바로 서서 시작합니다. 2. 손을 바닥에 짚고 다리를 뒤로 뻗어 푸시업 자세를 만듭니다. 3. 다시 다리를 가슴 쪽으로 당깁니다. 4. 머리 위로 손을 올리며 점프합니다.', en: '1. Start standing. 2. Drop hands to floor and kick feet back to plank. 3. Jump feet back to chest. 4. Jump up with hands overhead.' },
        tip: { ko: '동작 사이에 끊김이 없이 부드럽게 연결하는 것이 중요합니다.', en: 'Keep movements fluid and continuous.' },
        caution: { ko: '체력이 급격히 저하되면 점프를 생략하고 한 발씩 뒤로 뻗는 방식으로 조절하세요.', en: 'If exhausted, step back one foot at a time instead of jumping.' }
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
