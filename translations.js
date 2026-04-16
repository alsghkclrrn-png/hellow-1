const translations = {
    ko: {
        'nav-logo': 'AI 운동 코치',
        'nav-coach': 'AI 코치',
        'nav-home': '홈',
        'nav-stretching': '스트레칭',
        'nav-catalog': '운동 종류',
        'nav-home-workout': '홈트 추천',
        'nav-diet': '식단 추천',
        'nav-sasang': '사상체질',
        'nav-supplement': '영양제',
        'nav-diary': '건강 다이어리',
        'theme-toggle': '테마 변경',
        'header-subtitle': '내 정보를 입력하고 AI가 분석한 맞춤형 운동·식단·영양제 플랜을 받아보세요',

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
        'mbti-intro-title': '1. MBTI(Myers-Briggs Type Indicator)란?',
        'mbti-intro-content': '칼 융의 심리 유형론을 바탕으로 고안된 성격 유형 검사입니다. 당신의 내면적 선호 경향을 파악하여 최적의 동기 부여 방식을 제안합니다.',
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
        'sasang-intro-title': '1. 사상체질(四象體質)이란 무엇인가?',
        'sasang-intro-content': '사상의학은 19세기 말 이제마 선생이 창시한 독창적인 체질 의학입니다. 모든 사람을 네 가지 체질로 나누고 그에 맞는 섭생과 치료를 적용합니다.',
        'sasang-diag-title': '사상체질 자가진단',
        'sasang-diag-subtitle': '가장 많이 해당하는 본인의 특징을 선택해 주세요.',
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
        'sasang-deep-title': '3. 나의 체질 심층 분석 및 섭생법',
        'sasang-closing': '나의 부족함을 알고 조화롭게 채우는 지혜를 얻으시길 바랍니다.',
        'retake-sasang': '진단 다시 하기',

        // Workout & Diet
        'workout-personalization-title': '현재 당신의 컨디션 상태 체크',
        'workout-personalization-desc': '당신의 현재 상태와 목표에 맞춰 AI가 최적의 운동 루틴을 구성합니다.',
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
        'diet-title': '당신의 맞춤 식단 추천',
        'diet-desc': '운동 목표에 맞춰 영양학적으로 최적화된 아침·점심·저녁 식단을 제안합니다.',
        'diet-breakfast': '🌅 아침 식단',
        'diet-lunch': '☀️ 점심 식단',
        'diet-dinner': '🌙 저녁 식단',
        'diet-ingredients': '재료',
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
        'fitness-level-label': '운동 숙련도',
        'fitness-beginner': '초보자',
        'fitness-intermediate': '중급자',
        'fitness-advanced': '상급자',
        'goal-label': '운동 목표',
        'health-status-label': '현재 컨디션',
        'health-excellent': '최상/보통',
        'health-tired': '피로함',
        'health-recovery': '회복 중/부상',
        'weather-label': '현재 날씨',
        'weather-sunny': '맑음/실내',
        'weather-rainy': '비/눈',
        'weather-hot': '폭염',
        'weather-cold': '한파',
        'time-of-day-label': '시간대',
        'time-dawn': '새벽',
        'time-morning': '오전',
        'time-afternoon': '오후',
        'time-night': '밤',
        'weekly-frequency-label': '주간 운동 횟수',
        'freq-1-2': '주 1-2회',
        'freq-3-4': '주 3-4회',
        'freq-5-6': '주 5-6회',
        'freq-7': '매일',
        'generate-workout-btn': '상황 맞춤형 운동 생성하기',
        'workout-plan-title': '당신의 맞춤 운동 플랜',
        'refresh-workout-btn': '다른 운동 추천',
        'refresh-btn-text': '새로고침',
        'workout-card-desc-title': '운동 방법',
        'workout-card-caution': '주의 사항',
        'workout-analysis-title': '운동 세션 분석',
        'analyze-workout-btn': '분석 및 피드백 받기',
        'ai-evaluation-title': 'AI 코치의 평가',
        'stretching-title': '맞춤형 스트레칭 추천',
        'stretching-desc': '생성된 운동 부위를 분석하여 부상 방지와 회복을 돕는 최적의 스트레칭을 제안합니다.',
        'stretching-empty': '운동을 먼저 생성해 주세요!',
        'exercise-catalog-title': '운동 종류 가이드',
        'home-workout-desc': '집에서도 효과적으로 수행할 수 있는 맨몸 및 소도구 운동 가이드입니다.',
        'supplement-title': '영양제 추천',
        'supplement-desc': '운동 목표와 체질에 맞는 효과적인 영양 성분 및 복용법 가이드입니다.',
        'share-results': '공유하기',
        'share-mbti-prefix': '나의 MBTI 운동 프로필은',
        'share-sasang-prefix': '나의 사상체질은',
        'share-suffix': '당신의 유형도 지금 확인해보세요!',
        'share-workout-text': 'AI 운동 코치가 추천해준 오늘의 루틴을 완료했습니다! 💪 #AI운동코치 #오운완',
        'toast-copy-success': '링크가 클립보드에 복사되었습니다!',

        // Magazine
        'magazine-title': 'Health & Wisdom Magazine',
        'mag-art1-badge': 'Expert Insight',
        'mag-art1-title': '사상체질과 피트니스',
        'mag-art1-p1': '체질에 맞는 운동은 효율을 극대화합니다.',
        'mag-art2-badge': 'Psychology',
        'mag-art2-title': 'MBTI와 운동 심리학',
        'mag-art2-p1': '성격 유형에 따라 지속 가능한 운동 방식이 다릅니다.',

        // Footer
        'footer-about-title': 'AI 운동 코치',
        'footer-about-desc': '전통 한방과 현대 심리학을 결합한 개인 맞춤형 피트니스 솔루션.',
        'footer-links-title': '빠른 링크',
        'footer-legal-title': '법적 고지',
        'footer-copyright': '© 2026 AI Workout Coach. All rights reserved.',

        // Health Diary
        'nav-diary': '건강 다이어리',
        'diary-title': '오늘의 건강 다이어리',
        'diary-subtitle': '오늘 하루의 건강 습관을 기록하고 달성률을 확인하세요.',
        'diary-tab-exercise': '🏃 운동 체크',
        'diary-tab-meal': '🍽️ 식사 체크',
        'diary-tab-supplement': '💊 영양제 체크',
        'diary-tab-health': '❤️ 건강 체크',
        'diary-water-label': '물 섭취량 (잔)',
        'diary-sleep-label': '수면 시간 (시간)',
        'diary-mood-label': '오늘의 기분',
        'diary-weight-label': '오늘 몸무게 (kg)',
        'diary-steps-label': '걸음수 (보)',
        'diary-save-btn': '오늘 기록 저장하기',
        'diary-streak': '🔥 연속 달성일',
        'diary-progress-label': '오늘 종합 달성률',
        'diary-exercise-progress': '운동 달성률',
        'diary-meal-progress': '식사 달성률',
        'diary-supplement-progress': '영양제 달성률',
        'diary-health-progress': '건강 달성률',
        'diary-summary-title': '오늘의 달성 요약',
        'diary-save-success': '오늘의 건강 기록이 저장되었습니다! 💪',
        'diary-exercise-hint': '오늘 수행한 운동에 체크하세요',
        'diary-meal-hint': '아침·점심·저녁 식사를 기록하세요',
        'diary-supplement-hint': '복용한 영양제에 체크하고 시간을 기록하세요',
        'diary-health-hint': '오늘의 건강 지표를 입력하세요',
        'diary-meal-breakfast': '🌅 아침 식사',
        'diary-meal-lunch': '☀️ 점심 식사',
        'diary-meal-dinner': '🌙 저녁 식사',
        'diary-meal-done': '완료',
        'diary-meal-notes-placeholder': '오늘 먹은 음식을 기록해보세요',
        'diary-meal-calories-placeholder': '칼로리 (kcal)',
        'diary-water-hint': '물 한 잔(200ml)씩 클릭해서 섭취량을 기록하세요',
        'diary-mood-hint': '오늘의 컨디션을 선택하세요',
        'diary-mood-1': '매우 피곤함',
        'diary-mood-2': '조금 피곤함',
        'diary-mood-3': '보통',
        'diary-mood-4': '좋음',
        'diary-mood-5': '최고!',
        'diary-supplement-time-placeholder': '복용 시간',
        'diary-no-workout': '운동 플랜을 먼저 생성하거나 아래 운동 목록에서 직접 선택하세요',
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
        'nav-diary': 'Health Diary',
        'theme-toggle': 'Toggle Theme',
        'header-subtitle': 'Enter your info and get AI-personalized workout, diet & supplement plans',
        'metrics-title': 'Body Metrics Analysis',
        'calculate-btn': 'Analyze My Body',
        'label-gender': 'Gender',
        'option-male': 'Male',
        'option-female': 'Female',
        'label-age': 'Age',
        'label-height': 'Height (cm)',
        'label-weight': 'Weight (kg)',
        'bmi-label': 'BMI Index',
        'bmr-label': 'Basal Metabolic Rate',
        'daily-calories-label': 'Daily Calorie Target',
        'bmr-unit': 'kcal/day',
        'bmi-underweight': 'Underweight',
        'bmi-normal': 'Normal',
        'bmi-overweight': 'Overweight',
        'bmi-obese': 'Obese',
        'mbti-title': 'Personality Analysis (MBTI)',
        'mbti-desc': 'Find workout routines that match your psychological profile.',
        'mbti-intro-title': '1. What is MBTI?',
        'mbti-intro-content': 'Based on Carl Jung\'s typology, MBTI identifies your personality preferences to suggest optimal motivation strategies.',
        'mbti-diag-title': 'MBTI Self-Assessment',
        'mbti-diag-subtitle': 'Choose the answer that feels most natural to you.',
        'mbti-insight-label': 'Personality Insight',
        'retake-mbti': 'Retake Quiz',
        'mbti-default-type': 'Your MBTI Profile',
        'sasang-title': 'Korean Body Type (Sasang)',
        'sasang-desc': 'Discover your innate body constitution based on traditional Korean medicine.',
        'sasang-intro-title': '1. What is Sasang Medicine?',
        'sasang-intro-content': 'Developed by Lee Je-ma in the 19th century, Sasang medicine classifies people into four body types.',
        'sasang-diag-title': 'Sasang Self-Diagnosis',
        'sasang-diag-subtitle': 'Choose the trait that best describes you.',
        'sasang-deep-title': '3. Your Detailed Constitution Analysis',
        'sasang-closing': 'May you find wisdom in understanding your nature and achieving balance.',
        'retake-sasang': 'Retake Quiz',
        'workout-personalization-title': 'Current Condition Check',
        'workout-personalization-desc': 'AI builds your optimal workout routine based on your current state and goals.',
        'fitness-level-label': 'Fitness Level',
        'fitness-beginner': 'Beginner',
        'fitness-intermediate': 'Intermediate',
        'fitness-advanced': 'Advanced',
        'goal-label': 'Workout Goal',
        'goal-weight-loss': 'Weight Loss',
        'goal-muscle-gain': 'Muscle Gain',
        'goal-general-fitness': 'General Fitness',
        'health-status-label': 'Current Condition',
        'health-excellent': 'Great / Normal',
        'health-tired': 'Tired',
        'health-recovery': 'Recovery / Injured',
        'weather-label': 'Weather',
        'weather-sunny': 'Sunny / Indoor',
        'weather-rainy': 'Rain / Snow',
        'weather-hot': 'Heat Wave',
        'weather-cold': 'Cold Wave',
        'time-of-day-label': 'Time of Day',
        'time-dawn': 'Dawn',
        'time-morning': 'Morning',
        'time-afternoon': 'Afternoon',
        'time-night': 'Night',
        'weekly-frequency-label': 'Weekly Frequency',
        'freq-1-2': '1-2x / Week',
        'freq-3-4': '3-4x / Week',
        'freq-5-6': '5-6x / Week',
        'freq-7': 'Daily',
        'generate-workout-btn': 'Generate My Workout',
        'workout-plan-title': 'Your Custom Workout Plan',
        'refresh-workout-btn': 'Refresh Workout',
        'refresh-btn-text': 'Refresh',
        'workout-card-desc-title': 'Instructions',
        'workout-card-caution': 'Cautions',
        'workout-analysis-title': 'Workout Session Analysis',
        'analyze-workout-btn': 'Analyze & Get Feedback',
        'ai-evaluation-title': 'AI Coach Evaluation',
        'stretching-title': 'Customized Stretching',
        'stretching-desc': 'Optimal stretches to prevent injury and aid recovery.',
        'stretching-empty': 'Generate a workout first!',
        'diet-title': 'Personalized Diet Plan',
        'diet-desc': 'Nutritionally optimized meals based on your workout goal.',
        'diet-breakfast': '🌅 Breakfast',
        'diet-lunch': '☀️ Lunch',
        'diet-dinner': '🌙 Dinner',
        'exercise-catalog-title': 'Exercise Guide',
        'home-workout-desc': 'Bodyweight and light equipment exercises you can do at home.',
        'supplement-title': 'Supplement Guide',
        'supplement-desc': 'Effective nutrients and dosage recommendations for your goals.',
        'share-results': 'Share',
        'share-mbti-prefix': 'My MBTI Workout Profile is',
        'share-sasang-prefix': 'My Sasang Body Type is',
        'share-suffix': 'Find yours now at AI Workout Coach!',
        'share-workout-text': 'Just finished my AI-powered workout routine! 💪 #AIWorkoutCoach #Fitness',
        'toast-copy-success': 'Link copied to clipboard!',
        'mbti-display-label': 'My MBTI',
        'mbti-display-placeholder': 'Complete the quiz above',
        'metrics-display-label': 'Body Summary',
        'metrics-display-placeholder': 'Analyze body metrics above',
        'footer-about-title': 'AI Workout Coach',
        'footer-about-desc': 'Personalized fitness combining traditional medicine and modern psychology.',
        'footer-links-title': 'Quick Links',
        'footer-legal-title': 'Legal',
        'footer-copyright': '© 2026 AI Workout Coach. All rights reserved.',
        'magazine-title': 'Health & Wisdom Magazine',
        'nav-diary': 'Health Diary',
        'diary-title': "Today's Health Diary",
        'diary-subtitle': 'Track your daily health habits and check your completion rate.',
        'diary-tab-exercise': '🏃 Exercise',
        'diary-tab-meal': '🍽️ Meals',
        'diary-tab-supplement': '💊 Supplements',
        'diary-tab-health': '❤️ Health',
        'diary-water-label': 'Water Intake (glasses)',
        'diary-sleep-label': 'Sleep (hours)',
        'diary-mood-label': 'Today\'s Mood',
        'diary-weight-label': 'Today\'s Weight (kg)',
        'diary-steps-label': 'Steps',
        'diary-save-btn': 'Save Today\'s Record',
        'diary-streak': '🔥 Day Streak',
        'diary-progress-label': 'Today\'s Overall Progress',
        'diary-exercise-progress': 'Exercise',
        'diary-meal-progress': 'Meals',
        'diary-supplement-progress': 'Supplements',
        'diary-health-progress': 'Health',
        'diary-summary-title': "Today's Achievement Summary",
        'diary-save-success': "Today's health record saved! 💪",
        'diary-exercise-hint': 'Check off exercises you completed today',
        'diary-meal-hint': 'Log your breakfast, lunch, and dinner',
        'diary-supplement-hint': 'Check supplements taken and log the time',
        'diary-health-hint': 'Enter your health metrics for today',
        'diary-meal-breakfast': '🌅 Breakfast',
        'diary-meal-lunch': '☀️ Lunch',
        'diary-meal-dinner': '🌙 Dinner',
        'diary-meal-done': 'Done',
        'diary-meal-notes-placeholder': 'What did you eat?',
        'diary-meal-calories-placeholder': 'Calories (kcal)',
        'diary-water-hint': 'Click each glass to log 200ml of water',
        'diary-mood-hint': 'How are you feeling today?',
        'diary-mood-1': 'Very Tired',
        'diary-mood-2': 'A bit tired',
        'diary-mood-3': 'Okay',
        'diary-mood-4': 'Good',
        'diary-mood-5': 'Great!',
        'diary-supplement-time-placeholder': 'Time taken',
        'diary-no-workout': 'Generate a workout plan or select exercises from the list below',
        'sasang-q1': 'How would you describe your physique and energy?',
        'sasang-q1-a': 'Upper body dominant, energy flows upward',
        'sasang-q1-b': 'Large frame, strong waist, heavy build',
        'sasang-q1-c': 'Broad chest, fast gait, runs warm',
        'sasang-q1-d': 'Lower body dominant, lean, tends to feel cold',
        'sasang-q2': 'How would you describe your personality?',
        'sasang-q2-a': 'Creative and decisive',
        'sasang-q2-b': 'Persistent, solid and conservative',
        'sasang-q2-c': 'Cheerful, quick, sometimes impulsive',
        'sasang-q2-d': 'Logical, detail-oriented and introverted',
        'sasang-q3': 'What foods or health patterns suit you?',
        'sasang-q3-a': 'Seafood and vegetables; feel good with smooth urination',
        'sasang-q3-b': 'Meat suits me; feel refreshed after sweating',
        'sasang-q3-c': 'Cool foods; healthy when bowel movements are regular',
        'sasang-q3-d': 'Warm foods; healthy when digestion is smooth',
        'sasang-sun-title': '☀️ Taeyang (太陽人)',
        'sasang-sun-pros': 'Innovator, drive, decisiveness',
        'sasang-sun-cons': 'Anger management, weak liver function',
        'sasang-sun-diet': 'Best: seafood, buckwheat, grapes, wild grape tea',
        'sasang-earth-title': '🌳 Taeeum (太陰人)',
        'sasang-earth-pros': 'Endurance, tolerance, great stamina',
        'sasang-earth-cons': 'Watch for obesity, cardiovascular issues',
        'sasang-earth-diet': 'Best: beef, radish, bellflower root, adlay',
        'sasang-fire-title': '🔥 Soyang (少陽人)',
        'sasang-fire-pros': 'Agility, passion, versatility',
        'sasang-fire-cons': 'Impatience, watch for arthritis',
        'sasang-fire-diet': 'Best: pork, watermelon, melon, barley tea',
        'sasang-water-title': '❄️ Soeum (少陰人)',
        'sasang-water-pros': 'Perfectionism, warmth, carefulness',
        'sasang-water-cons': 'Digestion, cold sensitivity, mood dips',
        'sasang-water-diet': 'Best: chicken, ginseng, ginger, jujube tea',
        'mbti-type-ISTJ': '<strong>Inspector (ISTJ)</strong><br>Diligent and responsible, you prefer structured, planned workouts.',
        'mbti-type-ISFJ': '<strong>Defender (ISFJ)</strong><br>Warm and dedicated. Steady, consistent exercise suits you best.',
        'mbti-type-INFJ': '<strong>Advocate (INFJ)</strong><br>Insightful idealist. Yoga, meditation, and mind-body practices work well.',
        'mbti-type-INTJ': '<strong>Architect (INTJ)</strong><br>Logical and independent. Goal-oriented, efficient training systems.',
        'mbti-type-ISTP': '<strong>Virtuoso (ISTP)</strong><br>Keen observer with skill. Technical sports and tool-based training.',
        'mbti-type-ISFP': '<strong>Adventurer (ISFP)</strong><br>Artistic free spirit. Enjoyable, flexible physical activity.',
        'mbti-type-INFP': '<strong>Mediator (INFP)</strong><br>Values-driven. Solo workouts at your own pace.',
        'mbti-type-INTP': '<strong>Logician (INTP)</strong><br>Curious analyst. Understanding the mechanics of movement.',
        'mbti-type-ESTP': '<strong>Entrepreneur (ESTP)</strong><br>Energetic and action-oriented. Competitive, dynamic sports.',
        'mbti-type-ESFP': '<strong>Entertainer (ESFP)</strong><br>Social and fun-loving. Group classes and team sports.',
        'mbti-type-ENFP': '<strong>Campaigner (ENFP)</strong><br>Passionate and imaginative. Varied programs to stay engaged.',
        'mbti-type-ENTP': '<strong>Debater (ENTP)</strong><br>Creative challenger. New training methods and experiments.',
        'mbti-type-ESTJ': '<strong>Executive (ESTJ)</strong><br>Orderly natural leader. Systematic programs with clear metrics.',
        'mbti-type-ESFJ': '<strong>Consul (ESFJ)</strong><br>Warm social supporter. Team sports and social fitness.',
        'mbti-type-ENFJ': '<strong>Protagonist (ENFJ)</strong><br>Charismatic empath. Leading fitness communities.',
        'mbti-type-ENTJ': '<strong>Commander (ENTJ)</strong><br>Driven leader. Hard training with ambitious targets.',
        'mbti-q1-title': '1. At a large social gathering, you typically:',
        'mbti-q1-a': 'Actively talk to many people and gain energy from it (E)',
        'mbti-q1-b': 'Stick to a few friends or quietly observe to conserve energy (I)',
        'mbti-q2-title': '2. When meeting someone new:',
        'mbti-q2-a': 'I initiate conversation and naturally take the lead (E)',
        'mbti-q2-b': 'I wait for them to approach and observe carefully (I)',
        'mbti-q3-title': '3. Your ideal weekend rest looks like:',
        'mbti-q3-a': 'Going out, meeting friends, and being active (E)',
        'mbti-q3-b': 'Staying home quietly with a book or movie (I)',
        'mbti-q4-title': '4. When communicating, you prefer to:',
        'mbti-q4-a': 'Think out loud and speak spontaneously (E)',
        'mbti-q4-b': 'Organize your thoughts fully before speaking (I)',
        'mbti-q5-title': '5. You work most efficiently:',
        'mbti-q5-a': 'Collaborating and exchanging ideas with others (E)',
        'mbti-q5-b': 'Working alone in a quiet, undisturbed environment (I)',
        'mbti-q6-title': '6. You instinctively trust:',
        'mbti-q6-a': 'Concrete facts and real data in front of you (S)',
        'mbti-q6-b': 'Hidden meanings, future possibilities, and inspiration (N)',
        'mbti-q7-title': '7. Starting a new project or exercise routine:',
        'mbti-q7-a': 'I follow proven methods and established manuals (S)',
        'mbti-q7-b': 'I try my own creative or experimental approach (N)',
        'mbti-q8-title': '8. When giving directions, you tend to use:',
        'mbti-q8-a': 'Specific landmarks and building names (S)',
        'mbti-q8-b': 'Overall direction and abstract imagery (N)',
        'mbti-q9-title': '9. In movies or books, you enjoy more:',
        'mbti-q9-a': 'Realistic, vivid descriptions and concrete plot events (S)',
        'mbti-q9-b': 'Metaphors, symbolism, and imaginative messages (N)',
        'mbti-q10-title': '10. Your daily focus tends to be on:',
        'mbti-q10-a': 'Practical, present-day real problems (S)',
        'mbti-q10-b': 'Future visions, theoretical concepts, unrealized possibilities (N)',
        'mbti-q11-title': '11. When making important decisions, your top priority is:',
        'mbti-q11-a': 'Objective logic, causality, and fair principles (T)',
        'mbti-q11-b': 'Others\' feelings, relational harmony, personal values (F)',
        'mbti-q12-title': '12. When a friend shares a problem, your first instinct is:',
        'mbti-q12-a': 'Analyze the situation and think of practical solutions (T)',
        'mbti-q12-b': 'Empathize deeply and offer warm comfort (F)',
        'mbti-q13-title': '13. During conflict or disagreement, you tend to:',
        'mbti-q13-a': 'Focus on facts over feelings and reason logically (T)',
        'mbti-q13-b': 'Prioritize the other\'s feelings and seek compromise (F)',
        'mbti-q14-title': '14. The virtue you prize most in life:',
        'mbti-q14-a': 'Sharp truth, accuracy, and efficiency-based competence (T)',
        'mbti-q14-b': 'Warmth, inclusivity, and human connection (F)',
        'mbti-q15-title': '15. The fairest way to evaluate performance:',
        'mbti-q15-a': 'Quantified results and objectively proven achievements (T)',
        'mbti-q15-b': 'Dedicated effort and contribution to teamwork (F)',
        'mbti-q16-title': '16. When planning a trip, you typically:',
        'mbti-q16-a': 'Plan a detailed hour-by-hour itinerary and follow it (J)',
        'mbti-q16-b': 'Set a destination and improvise based on mood (P)',
        'mbti-q17-title': '17. When facing a deadline:',
        'mbti-q17-a': 'Plan ahead, work in stages, and finish with time to spare (J)',
        'mbti-q17-b': 'Procrastinate until the last moment then burst with focus (P)',
        'mbti-q18-title': '18. Your workspace or environment is:',
        'mbti-q18-a': 'Organized with everything in its place (J)',
        'mbti-q18-b': 'Somewhat chaotic but comfortable and flexible (P)',
        'mbti-q19-title': '19. When unexpected changes break your plans:',
        'mbti-q19-a': 'You feel stressed and unsettled by the disruption (J)',
        'mbti-q19-b': 'You adapt flexibly and even find it interesting (P)',
        'mbti-q20-title': '20. Your life philosophy is closer to:',
        'mbti-q20-a': 'Seeking a stable, controlled, and predictable life (J)',
        'mbti-q20-b': 'Keeping all options open and flowing with change (P)',
    }
};

const exerciseTranslations = {
    'push-up': {
        ko: '푸쉬업', en: 'Push-up',
        image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '가슴', en: 'Chest' },
        desc: {
            ko: '1. 바닥에 엎드려 손을 어깨너비보다 약간 넓게 짚습니다.\n2. 몸 전체를 일직선으로 유지합니다.\n3. 팔꿈치를 굽히며 가슴을 바닥 가까이 내립니다.\n4. 가슴 근육의 힘으로 밀어 올려 시작 자세로 돌아옵니다.',
            en: '1. Place hands slightly wider than shoulders.\n2. Keep body in a straight line from head to heels.\n3. Bend elbows lowering chest toward floor.\n4. Push through chest to return to start.'
        },
        caution: {
            ko: '허리가 아래로 처지지 않도록 복부에 힘을 주세요. 초보자는 무릎을 바닥에 대고 시작해도 됩니다.',
            en: 'Keep core engaged to prevent lower back sagging. Beginners may start with knees on the floor.'
        },
        tip: { ko: '초보자 팁: 무릎 푸쉬업으로 시작해 점차 일반 푸쉬업으로 전환하세요.', en: 'Beginner tip: Start with knee push-ups, then progress to full push-ups.' },
        isHome: true, intensity: 'medium'
    },
    'squat': {
        ko: '스쿼트', en: 'Squat',
        image: 'https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '다리', en: 'Legs' },
        desc: {
            ko: '1. 발을 어깨너비로 벌리고 발끝은 약간 바깥쪽을 향합니다.\n2. 가슴을 펴고 허리를 곧게 세웁니다.\n3. 무릎이 발끝 방향으로 향하도록 하며 엉덩이를 내립니다.\n4. 허벅지가 바닥과 평행해지면 발뒤꿈치로 밀며 일어납니다.',
            en: '1. Stand with feet shoulder-width apart, toes slightly out.\n2. Keep chest up and spine neutral.\n3. Lower hips with knees tracking over toes.\n4. Rise when thighs are parallel to floor.'
        },
        caution: {
            ko: '무릎이 안쪽으로 모이지 않도록 바깥쪽으로 향하게 유지하세요. 발뒤꿈치가 들리면 안 됩니다.',
            en: 'Keep knees aligned with toes, never caving in. Heels must stay flat on the floor.'
        },
        tip: { ko: '초보자 팁: 의자에 앉았다 일어나는 동작을 연습하여 자세를 익히세요.', en: 'Beginner tip: Practice sitting into a chair to learn the movement pattern.' },
        isHome: true, intensity: 'medium'
    },
    'plank': {
        ko: '플랭크', en: 'Plank',
        image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '복근', en: 'Abs' },
        desc: {
            ko: '1. 팔꿈치를 어깨 바로 아래 바닥에 댑니다.\n2. 발끝으로 몸을 지지하며 일직선을 만듭니다.\n3. 복부와 엉덩이에 힘을 꽉 주어 자세를 유지합니다.\n4. 정해진 시간 동안 버팁니다. (초보자: 20초)',
            en: '1. Place forearms on floor, elbows under shoulders.\n2. Support body on toes forming a straight line.\n3. Squeeze core and glutes to hold position.\n4. Hold for time. (Beginner: 20 seconds)'
        },
        caution: {
            ko: '엉덩이가 너무 높게 솟거나 아래로 처지지 않게 수평을 유지하세요. 숨을 참지 마세요.',
            en: 'Maintain a neutral spine. Do not let hips rise or dip. Keep breathing normally.'
        },
        tip: { ko: '초보자 팁: 10~20초부터 시작해 매주 5초씩 늘려나가세요.', en: 'Beginner tip: Start with 10-20 seconds and add 5 seconds each week.' },
        isHome: true, intensity: 'low'
    },
    'burpee': {
        ko: '버피 테스트', en: 'Burpees',
        image: 'https://images.unsplash.com/photo-1599058917233-97f394156059?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '유산소', en: 'Cardio' },
        desc: {
            ko: '1. 차렷 자세로 시작합니다.\n2. 쪼그려 앉으며 손을 바닥에 짚습니다.\n3. 발을 뒤로 뻗어 푸쉬업 자세를 만듭니다.\n4. 다시 발을 당겨와 일어서며 높이 점프합니다.',
            en: '1. Start standing upright.\n2. Squat down placing hands on floor.\n3. Jump or step feet back to push-up position.\n4. Return feet forward, stand and jump high.'
        },
        caution: {
            ko: '착지 시 무릎을 살짝 굽혀 충격을 흡수하세요. 초보자는 점프 대신 걸어서 이동해도 됩니다.',
            en: 'Bend knees slightly when landing. Beginners may step instead of jump.'
        },
        tip: { ko: '초보자 팁: 점프 없이 천천히 동작을 이어나가는 "노 점프 버피"로 시작하세요.', en: 'Beginner tip: Start with "no-jump burpees" — walk through each step slowly.' },
        isHome: true, intensity: 'high'
    },
    'lunges': {
        ko: '런지', en: 'Lunges',
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '다리', en: 'Legs' },
        desc: {
            ko: '1. 등을 곧게 세우고 차렷 자세로 시작합니다.\n2. 한쪽 발을 앞으로 크게 내딛습니다.\n3. 양쪽 무릎이 90도가 되도록 몸을 내립니다.\n4. 앞발의 힘으로 원래 자세로 돌아옵니다.',
            en: '1. Stand tall with spine neutral.\n2. Step one foot forward.\n3. Lower body until both knees reach 90 degrees.\n4. Push through the front foot to return.'
        },
        caution: {
            ko: '앞쪽 무릎이 발가락보다 앞으로 나가지 않게 하세요. 상체가 앞으로 기울지 않게 유지합니다.',
            en: 'Ensure front knee stays behind the toes. Keep torso upright throughout.'
        },
        tip: { ko: '초보자 팁: 벽을 잡고 균형을 유지하며 연습해보세요.', en: 'Beginner tip: Hold a wall for balance support when learning.' },
        isHome: true, intensity: 'medium'
    },
    'mountain-climber': {
        ko: '마운틴 클라이머', en: 'Mountain Climbers',
        image: 'https://images.unsplash.com/photo-1434608519344-49d77a699e1d?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '복근', en: 'Abs' },
        desc: {
            ko: '1. 팔을 쭉 편 푸쉬업 자세를 취합니다.\n2. 오른쪽 무릎을 가슴 쪽으로 빠르게 당깁니다.\n3. 오른발을 돌려 보내며 왼쪽 무릎을 당깁니다.\n4. 달리듯 빠르게 교차하며 반복합니다.',
            en: '1. Start in a high push-up position.\n2. Drive right knee toward chest quickly.\n3. Switch, driving left knee as right foot returns.\n4. Alternate rapidly as if running in place.'
        },
        caution: {
            ko: '엉덩이를 낮게 유지하고 상체는 흔들리지 않게 고정하세요.',
            en: 'Keep hips low and minimize upper body movement.'
        },
        tip: { ko: '초보자 팁: 천천히 한 쪽씩 교차하여 자세를 익힌 후 속도를 올리세요.', en: 'Beginner tip: Start slowly alternating each knee before increasing speed.' },
        isHome: true, intensity: 'high'
    },
    'bridge': {
        ko: '힙 브릿지', en: 'Glute Bridge',
        image: 'https://images.unsplash.com/photo-1594911772125-07fc7a2d8d9f?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '다리', en: 'Legs' },
        desc: {
            ko: '1. 등을 대고 누워 무릎을 세우고 발을 바닥에 댑니다.\n2. 엉덩이 근육에 힘을 주며 골반을 위로 들어 올립니다.\n3. 어깨-골반-무릎이 일직선이 되면 2초 유지합니다.\n4. 천천히 내려 시작 자세로 돌아옵니다.',
            en: '1. Lie on back, knees bent, feet flat.\n2. Squeeze glutes and lift hips toward ceiling.\n3. Hold when shoulders-hips-knees form a straight line.\n4. Slowly lower back to the floor.'
        },
        caution: {
            ko: '목과 어깨에 과한 압력이 가지 않도록 주의하고 엉덩이 힘에 집중하세요.',
            en: 'Avoid straining the neck. Focus the effort on squeezing the glutes.'
        },
        tip: { ko: '초보자 팁: 등 통증이 있거나 재활 중인 분들도 안전하게 할 수 있는 기초 운동입니다.', en: 'Beginner tip: This is a gentle foundational move safe for those with back issues.' },
        isHome: true, intensity: 'low'
    },
    'bird-dog': {
        ko: '버드독', en: 'Bird Dog',
        image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '복근', en: 'Abs' },
        desc: {
            ko: '1. 손과 무릎을 바닥에 대는 네발기기 자세를 취합니다.\n2. 오른쪽 팔을 앞으로, 왼쪽 다리를 뒤로 동시에 뻗습니다.\n3. 몸의 균형을 유지하며 3초 유지합니다.\n4. 반대편도 동일하게 반복합니다.',
            en: '1. Begin on all fours, hands under shoulders.\n2. Extend right arm forward and left leg back simultaneously.\n3. Hold with body balanced for 3 seconds.\n4. Repeat on the opposite side.'
        },
        caution: {
            ko: '허리가 아래로 꺾이지 않도록 골반의 수평을 유지하세요.',
            en: 'Keep hips level and avoid arching your lower back.'
        },
        tip: { ko: '초보자 팁: 팔만 들거나 다리만 드는 동작부터 시작하여 균형 감각을 키우세요.', en: 'Beginner tip: Start by lifting only the arm or only the leg to build balance.' },
        isHome: true, intensity: 'low'
    },
    'superman': {
        ko: '슈퍼맨', en: 'Superman',
        image: 'https://images.unsplash.com/photo-1518611012118-2969c63d002e?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '등', en: 'Back' },
        desc: {
            ko: '1. 바닥에 엎드려 팔을 앞으로 뻗습니다.\n2. 등 근육의 힘으로 팔과 다리를 동시에 들어 올립니다.\n3. 등 근육의 자극을 느끼며 2~3초 유지합니다.\n4. 천천히 내리며 반복합니다.',
            en: '1. Lie face down with arms extended forward.\n2. Using back muscles, lift both arms and legs simultaneously.\n3. Hold feeling the back muscles squeeze for 2-3 seconds.\n4. Slowly lower and repeat.'
        },
        caution: {
            ko: '목을 너무 뒤로 젖히지 말고 시선은 바닥을 유지하세요.',
            en: 'Do not hyperextend the neck. Keep gaze toward the floor.'
        },
        tip: { ko: '초보자 팁: 팔과 다리를 교차로 한 쪽씩 드는 것부터 시작해도 좋습니다.', en: 'Beginner tip: Start by lifting opposite arm and leg alternately.' },
        isHome: true, intensity: 'low'
    },
    'jumping-jacks': {
        ko: '팔벌려뛰기', en: 'Jumping Jacks',
        image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '유산소', en: 'Cardio' },
        desc: {
            ko: '1. 발 모아 차렷 자세로 시작합니다.\n2. 점프하며 발을 어깨너비보다 넓게 벌리고 팔을 머리 위로 올립니다.\n3. 다시 점프하며 발을 모으고 팔을 내립니다.\n4. 리드미컬하게 반복합니다.',
            en: '1. Start with feet together, arms at sides.\n2. Jump spreading feet wide and raising arms overhead.\n3. Jump back to starting position.\n4. Repeat rhythmically.'
        },
        caution: {
            ko: '발 앞꿈치로 가볍게 착지하여 무릎 충격을 줄이세요.',
            en: 'Land softly on the balls of your feet to protect your knees.'
        },
        tip: { ko: '초보자 팁: 점프 대신 스텝으로 대체해도 좋습니다. 관절에 부담이 줄어듭니다.', en: 'Beginner tip: Step side to side instead of jumping to reduce joint stress.' },
        isHome: true, intensity: 'medium'
    },
    'crunch': {
        ko: '크런치', en: 'Crunch',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '복근', en: 'Abs' },
        desc: {
            ko: '1. 등을 대고 누워 무릎을 세우고 손을 귀 옆에 살짝 댑니다.\n2. 복근의 힘으로 상체를 살짝 들어 올립니다.\n3. 목이 아닌 복부 근육으로 움직임을 만들어야 합니다.\n4. 천천히 내리며 반복합니다.',
            en: '1. Lie on back, knees bent, hands lightly beside ears.\n2. Use abs to curl upper body slightly off floor.\n3. The movement must come from abs, not the neck.\n4. Lower slowly and repeat.'
        },
        caution: {
            ko: '목을 앞으로 당기지 마세요. 시선은 천장을 향해 유지하세요.',
            en: 'Do not pull your neck forward. Keep gaze toward the ceiling.'
        },
        tip: { ko: '초보자 팁: 등 전체를 들지 않아도 됩니다. 어깨만 살짝 들리는 작은 동작도 충분히 효과적입니다.', en: 'Beginner tip: A small movement lifting just the shoulder blades is perfectly effective.' },
        isHome: true, intensity: 'low'
    },
    'leg-raise': {
        ko: '레그레이즈', en: 'Leg Raise',
        image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '복근', en: 'Abs' },
        desc: {
            ko: '1. 등을 대고 누워 손을 엉덩이 아래에 받쳐 허리를 지지합니다.\n2. 다리를 붙여 천천히 90도까지 들어 올립니다.\n3. 잠깐 멈추고 천천히 내립니다.\n4. 바닥에 닿기 직전 다시 들어 올립니다.',
            en: '1. Lie on back with hands under hips for lower back support.\n2. Keep legs together and slowly raise to 90 degrees.\n3. Pause briefly then lower slowly.\n4. Stop just before touching the floor and raise again.'
        },
        caution: {
            ko: '허리가 바닥에서 뜨지 않도록 복부에 힘을 유지하세요.',
            en: 'Keep lower back pressed to the floor by engaging your core throughout.'
        },
        tip: { ko: '초보자 팁: 무릎을 살짝 굽혀 수행하면 난이도가 낮아집니다.', en: 'Beginner tip: Bend knees slightly to reduce difficulty.' },
        isHome: true, intensity: 'medium'
    },
    'side-plank': {
        ko: '사이드 플랭크', en: 'Side Plank',
        image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '복근', en: 'Abs' },
        desc: {
            ko: '1. 옆으로 누워 팔꿈치를 바닥에 대고 몸을 지지합니다.\n2. 골반을 들어 올려 머리부터 발끝까지 일직선을 만듭니다.\n3. 허리가 처지지 않도록 복부에 힘을 줍니다.\n4. 정해진 시간 동안 유지 후 반대편도 진행합니다.',
            en: '1. Lie on your side, supporting on your forearm.\n2. Lift hips to form a straight line from head to feet.\n3. Engage core to prevent hips from dropping.\n4. Hold for time, then switch sides.'
        },
        caution: {
            ko: '지지하는 어깨에 무리가 가지 않도록 팔꿈치를 어깨 바로 아래에 위치시킵니다.',
            en: 'Position elbow directly below shoulder to prevent shoulder strain.'
        },
        tip: { ko: '초보자 팁: 무릎을 바닥에 대고 수행하면 더 쉽게 자세를 익힐 수 있습니다.', en: 'Beginner tip: Drop the bottom knee to the floor to start.' },
        isHome: true, intensity: 'medium'
    },
    'wall-sit': {
        ko: '월 시트', en: 'Wall Sit',
        image: 'https://images.unsplash.com/photo-1567013127542-490d757e51cd?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '다리', en: 'Legs' },
        desc: {
            ko: '1. 벽에 등을 기댑니다.\n2. 발을 앞으로 내밀며 무릎이 90도가 되도록 천천히 내려앉습니다.\n3. 허벅지가 바닥과 평행한 상태를 유지합니다.\n4. 정해진 시간 동안 버팁니다. (초보자: 20~30초)',
            en: '1. Lean your back against a wall.\n2. Slide down until knees are at 90 degrees.\n3. Keep thighs parallel to the floor.\n4. Hold for time. (Beginner: 20-30 seconds)'
        },
        caution: {
            ko: '무릎이 90도 이상 굽혀지지 않게 하고 발끝이 무릎 위로 오지 않게 합니다.',
            en: 'Do not bend knees past 90 degrees. Feet should be ahead of knees.'
        },
        tip: { ko: '초보자 팁: 처음에는 30초를 목표로 하고 익숙해지면 시간을 늘리세요.', en: 'Beginner tip: Aim for 30 seconds first, gradually increasing over time.' },
        isHome: true, intensity: 'medium'
    },
    'high-knees': {
        ko: '하이 니', en: 'High Knees',
        image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '유산소', en: 'Cardio' },
        desc: {
            ko: '1. 제자리에 서서 시작합니다.\n2. 오른쪽 무릎을 허리 높이까지 들어 올리며 왼쪽 팔을 앞으로 흔듭니다.\n3. 즉시 왼쪽 무릎으로 바꾸며 팔도 바꿉니다.\n4. 제자리 달리기 하듯 빠르게 반복합니다.',
            en: '1. Stand in place.\n2. Drive right knee up to hip height while swinging left arm forward.\n3. Quickly switch to left knee with right arm.\n4. Alternate rapidly like running in place.'
        },
        caution: {
            ko: '발 앞꿈치로 가볍게 착지하여 무릎 충격을 최소화하세요.',
            en: 'Land on the balls of your feet to minimize knee impact.'
        },
        tip: { ko: '초보자 팁: 천천히 걷듯 무릎만 높이 들어 올리는 동작부터 시작하세요.', en: 'Beginner tip: Start by slowly marching in place, lifting knees high.' },
        isHome: true, intensity: 'high'
    },
    'step-up': {
        ko: '스텝업', en: 'Step Up',
        image: 'https://images.unsplash.com/photo-1434682881908-b43d0467b798?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '다리', en: 'Legs' },
        desc: {
            ko: '1. 계단이나 박스 앞에 서서 오른발을 올립니다.\n2. 오른발로 밀어 올라가며 왼발도 올립니다.\n3. 오른발을 먼저 내려 시작 자세로 돌아옵니다.\n4. 양쪽을 번갈아 반복합니다.',
            en: '1. Stand before a step or box, place right foot on it.\n2. Push through right foot to step up, bringing left foot up.\n3. Step down with right foot first to return.\n4. Alternate leading legs.'
        },
        caution: {
            ko: '계단 위에 발 전체가 올라가도록 하고 앞으로 기울지 않게 상체를 세웁니다.',
            en: 'Place the full foot on the step. Keep torso upright without leaning forward.'
        },
        tip: { ko: '초보자 팁: 낮은 계단부터 시작해 균형과 근력이 생기면 높이를 높이세요.', en: 'Beginner tip: Start with a low step and increase height as strength improves.' },
        isHome: true, intensity: 'medium'
    },
    'tricep-dip': {
        ko: '트라이셉 딥스', en: 'Tricep Dips',
        image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '팔', en: 'Arms' },
        desc: {
            ko: '1. 의자나 낮은 테이블 가장자리에 손을 짚고 앉습니다.\n2. 엉덩이를 앞으로 내밀어 의자에서 띄웁니다.\n3. 팔꿈치를 굽히며 몸을 내립니다. (90도까지)\n4. 팔뒤쪽 힘으로 밀어 올려 시작 자세로 돌아옵니다.',
            en: '1. Place hands on the edge of a chair, sitting position.\n2. Slide hips off the chair.\n3. Bend elbows lowering body toward floor (to 90 degrees).\n4. Press back up using triceps.'
        },
        caution: {
            ko: '어깨가 귀 쪽으로 올라가지 않도록 내리고 팔뒤꿈치가 옆으로 벌어지지 않게 합니다.',
            en: 'Keep shoulders down away from ears. Elbows should point straight back, not flare out.'
        },
        tip: { ko: '초보자 팁: 발을 몸 가까이에 두면 체중이 줄어 쉬워집니다.', en: 'Beginner tip: Bend your knees and keep feet closer to reduce difficulty.' },
        isHome: true, intensity: 'medium'
    },
    'shoulder-press': {
        ko: '숄더 프레스', en: 'Shoulder Press',
        image: 'https://images.unsplash.com/photo-1581009137042-c552e485697a?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '어깨', en: 'Shoulders' },
        desc: {
            ko: '1. 앉거나 선 자세에서 덤벨이나 물병을 어깨 높이로 듭니다.\n2. 팔꿈치가 90도가 되게 합니다.\n3. 머리 위로 똑바로 밀어 올립니다.\n4. 천천히 내려 시작 자세로 돌아옵니다.',
            en: '1. Sitting or standing, hold weights at shoulder height.\n2. Elbows at 90 degrees.\n3. Press straight up overhead.\n4. Slowly lower to start.'
        },
        caution: {
            ko: '허리가 과도하게 젖혀지지 않도록 복부에 힘을 주고 천천히 수행하세요.',
            en: 'Engage core to avoid arching the lower back. Move with control.'
        },
        tip: { ko: '초보자 팁: 덤벨이 없다면 500ml 물병으로도 충분히 수행할 수 있습니다.', en: 'Beginner tip: 500ml water bottles work great as beginner weights.' },
        isHome: true, intensity: 'medium'
    },
    'deadlift': {
        ko: '데드리프트', en: 'Deadlift',
        image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '등', en: 'Back' },
        desc: {
            ko: '1. 발을 어깨너비로 벌리고 무릎을 살짝 굽힙니다.\n2. 허리를 곧게 펴고 엉덩이를 뒤로 빼며 상체를 숙입니다.\n3. 등을 평평하게 유지하며 바닥의 무게를 잡습니다.\n4. 엉덩이를 앞으로 밀며 몸을 세워 올립니다.',
            en: '1. Stand with feet shoulder-width apart, knees slightly bent.\n2. Hinge at hips keeping spine flat, lowering toward floor.\n3. Grip the weight keeping back flat.\n4. Drive hips forward to return to standing.'
        },
        caution: {
            ko: '허리를 둥글게 굽히는 것이 가장 위험합니다. 항상 등을 평평하게 유지하세요.',
            en: 'Rounding the lower back is the most dangerous mistake. Always keep spine neutral.'
        },
        tip: { ko: '초보자 팁: 처음에는 가벼운 덤벨이나 빈 몸으로 허리 자세를 완벽히 익히고 무게를 올리세요.', en: 'Beginner tip: Master the hip-hinge movement with no weight before adding load.' },
        isHome: false, intensity: 'high'
    },
    'hip-hinge': {
        ko: '힙 힌지', en: 'Hip Hinge',
        image: 'https://images.unsplash.com/photo-1518611012118-2969c63d002e?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '등', en: 'Back' },
        desc: {
            ko: '1. 발을 어깨너비로 벌리고 섭니다.\n2. 엉덩이를 뒤로 밀며 상체를 바닥과 평행하게 내립니다.\n3. 등이 일직선임을 확인합니다.\n4. 엉덩이를 앞으로 밀며 똑바로 일어납니다.',
            en: '1. Stand with feet shoulder-width apart.\n2. Push hips back lowering torso parallel to floor.\n3. Ensure spine remains straight.\n4. Drive hips forward to stand upright.'
        },
        caution: {
            ko: '허리가 아치형으로 굽지 않도록 주의하세요. 어깨에 힘을 빼고 수행하세요.',
            en: 'Avoid arching or rounding the lower back. Relax the shoulders.'
        },
        tip: { ko: '초보자 팁: 벽을 등 뒤에 두고 연습하면 올바른 엉덩이 방향을 익힐 수 있습니다.', en: 'Beginner tip: Practice with a wall behind you to learn the correct hip direction.' },
        isHome: true, intensity: 'low'
    }
};

const stretchingDatabase = [
    {
        target: 'Chest',
        name: { ko: '가슴 스트레칭', en: 'Chest Stretch' },
        image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400',
        duration: { ko: '30초 × 2세트', en: '30s × 2 sets' },
        instructions: {
            ko: '1. 등을 곧게 세우고 섭니다.\n2. 두 손을 등 뒤에서 깍지를 낍니다.\n3. 가슴을 앞으로 내밀며 어깨를 뒤로 당깁니다.\n4. 가슴 근육이 늘어나는 느낌을 유지하며 30초 버팁니다.',
            en: '1. Stand tall with back straight.\n2. Clasp hands behind your back.\n3. Push chest forward while pulling shoulders back.\n4. Hold the stretch in your chest for 30 seconds.'
        }
    },
    {
        target: 'Abs',
        name: { ko: '코브라 자세 (등 스트레칭)', en: 'Cobra Stretch' },
        image: 'https://images.unsplash.com/photo-1552196564-977484dfb66e?auto=format&fit=crop&q=80&w=400',
        duration: { ko: '20초 × 3세트', en: '20s × 3 sets' },
        instructions: {
            ko: '1. 엎드려서 손을 어깨 아래에 댑니다.\n2. 팔을 펴며 상체를 들어 올립니다.\n3. 골반은 바닥에 붙인 상태를 유지합니다.\n4. 복부가 늘어나는 느낌을 유지하며 20초 유지합니다.',
            en: '1. Lie face down with hands under shoulders.\n2. Press arms straight to lift your upper body.\n3. Keep hips on the floor.\n4. Feel the stretch in your abs and hold for 20 seconds.'
        }
    },
    {
        target: 'Legs',
        name: { ko: '햄스트링 스트레칭', en: 'Hamstring Stretch' },
        image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&q=80&w=400',
        duration: { ko: '30초 × 2세트 (양쪽)', en: '30s × 2 sets (each side)' },
        instructions: {
            ko: '1. 바닥에 앉아 한쪽 다리를 앞으로 뻗습니다.\n2. 등을 곧게 세우고 발끝을 몸 쪽으로 당깁니다.\n3. 허리를 굽히지 말고 가슴을 발 방향으로 내밉니다.\n4. 허벅지 뒤쪽이 당기는 느낌을 유지합니다.',
            en: '1. Sit on the floor with one leg extended.\n2. Keep back straight and flex the foot toward you.\n3. Lean chest toward foot without rounding the back.\n4. Hold the pull in the back of the thigh.'
        }
    },
    {
        target: 'Back',
        name: { ko: '고양이-소 자세 (척추 스트레칭)', en: 'Cat-Cow Stretch' },
        image: 'https://images.unsplash.com/photo-1518611012118-2969c63d002e?auto=format&fit=crop&q=80&w=400',
        duration: { ko: '10회 반복', en: '10 repetitions' },
        instructions: {
            ko: '1. 손과 무릎을 바닥에 대는 네발기기 자세를 취합니다.\n2. 숨을 들이쉬며 허리를 아래로 처지게 하고 고개를 들어 올립니다. (소 자세)\n3. 숨을 내쉬며 등을 위로 동그랗게 말고 고개를 숙입니다. (고양이 자세)\n4. 천천히 10회 반복합니다.',
            en: '1. Start on all fours.\n2. Inhale: arch back down and lift head (Cow pose).\n3. Exhale: round back up and tuck chin (Cat pose).\n4. Repeat slowly 10 times.'
        }
    },
    {
        target: 'Cardio',
        name: { ko: '종아리 스트레칭', en: 'Calf Stretch' },
        image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400',
        duration: { ko: '30초 × 2세트 (양쪽)', en: '30s × 2 sets (each side)' },
        instructions: {
            ko: '1. 벽 앞에 서서 양손을 벽에 댑니다.\n2. 한 발을 뒤로 길게 내딛고 발뒤꿈치를 바닥에 붙입니다.\n3. 앞 무릎을 굽히며 뒤쪽 다리의 종아리가 당기는 느낌을 만듭니다.\n4. 30초 유지 후 반대편도 진행합니다.',
            en: '1. Stand facing a wall, hands on wall.\n2. Step one foot back, keeping heel flat on floor.\n3. Bend front knee until you feel a stretch in the back calf.\n4. Hold 30 seconds, then switch sides.'
        }
    },
    {
        target: 'Arms',
        name: { ko: '삼두근 스트레칭', en: 'Triceps Stretch' },
        image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400',
        duration: { ko: '20초 × 2세트 (양쪽)', en: '20s × 2 sets (each side)' },
        instructions: {
            ko: '1. 서거나 앉아서 오른팔을 머리 위로 들어 올립니다.\n2. 팔꿈치를 굽혀 손이 등 쪽으로 닿게 합니다.\n3. 왼손으로 오른쪽 팔꿈치를 잡아 살짝 당겨줍니다.\n4. 20초 유지 후 반대편도 진행합니다.',
            en: '1. Stand or sit and raise right arm overhead.\n2. Bend elbow so hand reaches behind your head.\n3. Use left hand to gently pull right elbow.\n4. Hold 20 seconds, then switch sides.'
        }
    },
    {
        target: 'Shoulders',
        name: { ko: '어깨 가로 스트레칭', en: 'Cross-Body Shoulder Stretch' },
        image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&q=80&w=400',
        duration: { ko: '20초 × 2세트 (양쪽)', en: '20s × 2 sets (each side)' },
        instructions: {
            ko: '1. 오른팔을 가슴 높이로 펴서 몸 앞쪽으로 뻗습니다.\n2. 왼손으로 오른팔 팔꿈치 부근을 잡습니다.\n3. 오른팔을 왼쪽으로 당겨 어깨 뒤쪽이 늘어나는 느낌을 만듭니다.\n4. 20초 유지 후 반대편도 진행합니다.',
            en: '1. Extend right arm across body at chest height.\n2. Hook left hand around right elbow.\n3. Pull right arm toward your body, feeling stretch in rear shoulder.\n4. Hold 20 seconds, then switch.'
        }
    },
    {
        target: 'Legs',
        name: { ko: '대퇴사두근(앞 허벅지) 스트레칭', en: 'Quad Stretch' },
        image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&q=80&w=400',
        duration: { ko: '30초 × 2세트 (양쪽)', en: '30s × 2 sets (each side)' },
        instructions: {
            ko: '1. 한 손으로 벽이나 의자를 잡아 균형을 유지합니다.\n2. 한쪽 무릎을 굽혀 발목을 엉덩이 쪽으로 당깁니다.\n3. 무릎을 모아 앞 허벅지가 당기는 느낌을 만듭니다.\n4. 30초 유지 후 반대편도 진행합니다.',
            en: '1. Hold a wall or chair for balance.\n2. Bend one knee pulling ankle toward buttocks.\n3. Keep knees together to feel the front thigh stretch.\n4. Hold 30 seconds, then switch.'
        }
    },
    {
        target: 'Back',
        name: { ko: '아이 자세 (휴식 스트레칭)', en: "Child's Pose" },
        image: 'https://images.unsplash.com/photo-1552196564-977484dfb66e?auto=format&fit=crop&q=80&w=400',
        duration: { ko: '30~60초', en: '30-60 seconds' },
        instructions: {
            ko: '1. 무릎을 꿇고 엉덩이를 발뒤꿈치 위에 내립니다.\n2. 팔을 앞으로 뻗으며 상체를 바닥으로 내립니다.\n3. 이마를 바닥에 대고 온몸의 힘을 뺍니다.\n4. 깊은 복식 호흡과 함께 30~60초 휴식합니다.',
            en: '1. Kneel and lower hips to rest on your heels.\n2. Extend arms forward, lowering torso to floor.\n3. Rest forehead on floor and release all tension.\n4. Take deep breaths and hold for 30-60 seconds.'
        }
    },
    {
        target: 'Abs',
        name: { ko: '누운 비틀기 (척추 회전)', en: 'Supine Twist' },
        image: 'https://images.unsplash.com/photo-1518611012118-2969c63d002e?auto=format&fit=crop&q=80&w=400',
        duration: { ko: '30초 × 2세트 (양쪽)', en: '30s × 2 sets (each side)' },
        instructions: {
            ko: '1. 등을 대고 누워 한쪽 무릎을 가슴으로 당깁니다.\n2. 당긴 무릎을 반대편으로 넘겨 허리를 비틀어줍니다.\n3. 양쪽 어깨는 바닥에 붙인 채 유지합니다.\n4. 30초 유지 후 반대편도 진행합니다.',
            en: '1. Lie on back and draw one knee to chest.\n2. Drop that knee across body to twist the spine.\n3. Keep both shoulders flat on the floor.\n4. Hold 30 seconds, then switch.'
        }
    },
    {
        target: 'Cardio',
        name: { ko: '고관절 굴곡근 스트레칭', en: 'Hip Flexor Stretch' },
        image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&q=80&w=400',
        duration: { ko: '30초 × 2세트 (양쪽)', en: '30s × 2 sets (each side)' },
        instructions: {
            ko: '1. 한쪽 무릎을 바닥에 대고 런지 자세를 취합니다.\n2. 골반을 앞으로 밀며 뒤쪽 다리 앞 허벅지가 늘어나게 합니다.\n3. 허리가 과도하게 젖혀지지 않도록 주의합니다.\n4. 30초 유지 후 반대편도 진행합니다.',
            en: '1. Kneel on one knee in a lunge position.\n2. Push hips forward until you feel a stretch in the front of the back thigh.\n3. Avoid excessive lower back arch.\n4. Hold 30 seconds, then switch.'
        }
    }
];

const dietDatabase = [
    // 체중 감량 (weight-loss)
    {
        time: 'breakfast', goal: 'weight-loss',
        name: { ko: '닭가슴살 야채 샐러드', en: 'Chicken & Veggie Salad' },
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400',
        calories: 320, protein: 30,
        ingredients: { ko: '닭가슴살 100g, 양상추, 방울토마토, 오이, 올리브오일', en: '100g Chicken, Lettuce, Cherry Tomatoes, Cucumber, Olive Oil' },
        recipe: { ko: '1. 닭가슴살을 삶아 찢습니다. 2. 채소와 함께 그릇에 담습니다. 3. 올리브오일 1큰술로 드레싱합니다.', en: '1. Boil chicken and shred. 2. Plate with vegetables. 3. Drizzle with 1 tbsp olive oil.' }
    },
    {
        time: 'lunch', goal: 'weight-loss',
        name: { ko: '두부 된장국 + 현미밥', en: 'Tofu Doenjang Soup + Brown Rice' },
        image: 'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?auto=format&fit=crop&q=80&w=400',
        calories: 420, protein: 22,
        ingredients: { ko: '두부 150g, 된장 1큰술, 현미밥 100g, 호박, 파', en: '150g Tofu, 1 tbsp Doenjang, 100g Brown Rice, Zucchini, Green Onion' },
        recipe: { ko: '1. 된장국을 끓입니다. 2. 두부와 채소를 넣습니다. 3. 현미밥과 함께 섭취합니다.', en: '1. Boil doenjang broth. 2. Add tofu and vegetables. 3. Serve with brown rice.' }
    },
    {
        time: 'dinner', goal: 'weight-loss',
        name: { ko: '연어 & 아스파라거스', en: 'Salmon & Asparagus' },
        image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=400',
        calories: 380, protein: 35,
        ingredients: { ko: '연어 150g, 아스파라거스, 레몬, 마늘', en: '150g Salmon, Asparagus, Lemon, Garlic' },
        recipe: { ko: '1. 연어에 소금·후추로 간합니다. 2. 팬에 아스파라거스와 함께 굽습니다. 3. 레몬즙으로 마무리합니다.', en: '1. Season salmon with salt and pepper. 2. Pan-grill with asparagus. 3. Finish with lemon juice.' }
    },
    // 근육 증가 (muscle-gain)
    {
        time: 'breakfast', goal: 'muscle-gain',
        name: { ko: '오트밀 + 달걀 프라이 3개', en: 'Oatmeal + 3 Fried Eggs' },
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400',
        calories: 580, protein: 38,
        ingredients: { ko: '오트밀 80g, 달걀 3개, 바나나 1개, 우유 200ml', en: '80g Oats, 3 Eggs, 1 Banana, 200ml Milk' },
        recipe: { ko: '1. 오트밀을 우유로 끓입니다. 2. 달걀 프라이를 만듭니다. 3. 바나나와 함께 섭취합니다.', en: '1. Cook oats in milk. 2. Fry the eggs. 3. Eat with a banana.' }
    },
    {
        time: 'lunch', goal: 'muscle-gain',
        name: { ko: '소고기 브로콜리 볶음 + 흰밥', en: 'Beef Broccoli Stir-fry + White Rice' },
        image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=400',
        calories: 650, protein: 45,
        ingredients: { ko: '소고기 200g, 브로콜리, 마늘, 간장, 흰밥 200g', en: '200g Beef, Broccoli, Garlic, Soy Sauce, 200g White Rice' },
        recipe: { ko: '1. 마늘을 볶고 소고기를 넣습니다. 2. 브로콜리를 추가하고 간장으로 간합니다. 3. 흰밥과 함께 섭취합니다.', en: '1. Stir-fry garlic then add beef. 2. Add broccoli and season with soy sauce. 3. Serve with white rice.' }
    },
    {
        time: 'dinner', goal: 'muscle-gain',
        name: { ko: '닭가슴살 파스타', en: 'Chicken Breast Pasta' },
        image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&q=80&w=400',
        calories: 620, protein: 48,
        ingredients: { ko: '닭가슴살 200g, 파스타 80g, 토마토소스, 파마산치즈', en: '200g Chicken, 80g Pasta, Tomato Sauce, Parmesan' },
        recipe: { ko: '1. 파스타를 삶습니다. 2. 닭가슴살을 구워 슬라이스합니다. 3. 토마토소스와 함께 버무립니다.', en: '1. Boil pasta. 2. Grill chicken and slice. 3. Toss with tomato sauce.' }
    },
    // 건강 관리 (general-fitness)
    {
        time: 'breakfast', goal: 'general-fitness',
        name: { ko: '요거트 그래놀라 볼', en: 'Yogurt Granola Bowl' },
        image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=400',
        calories: 380, protein: 18,
        ingredients: { ko: '그릭요거트 200g, 그래놀라 40g, 블루베리, 꿀', en: '200g Greek Yogurt, 40g Granola, Blueberries, Honey' },
        recipe: { ko: '1. 그릭요거트를 그릇에 담습니다. 2. 그래놀라와 블루베리를 얹습니다. 3. 꿀을 뿌려 마무리합니다.', en: '1. Spoon Greek yogurt into a bowl. 2. Top with granola and blueberries. 3. Drizzle honey.' }
    },
    {
        time: 'lunch', goal: 'general-fitness',
        name: { ko: '아보카도 토스트 + 수란', en: 'Avocado Toast + Poached Egg' },
        image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=400',
        calories: 460, protein: 20,
        ingredients: { ko: '통밀빵 2장, 아보카도 1개, 달걀 2개, 레몬', en: '2 Whole Wheat Toasts, 1 Avocado, 2 Eggs, Lemon' },
        recipe: { ko: '1. 아보카도를 으깨어 레몬즙을 섞습니다. 2. 토스트에 바릅니다. 3. 수란을 올려 완성합니다.', en: '1. Mash avocado with lemon juice. 2. Spread on toast. 3. Top with poached eggs.' }
    },
    {
        time: 'dinner', goal: 'general-fitness',
        name: { ko: '고등어구이 + 나물반찬', en: 'Grilled Mackerel + Namul Sides' },
        image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=400',
        calories: 490, protein: 36,
        ingredients: { ko: '고등어 1마리, 시금치 나물, 콩나물, 현미밥 150g', en: '1 Mackerel, Spinach Namul, Bean Sprouts, 150g Brown Rice' },
        recipe: { ko: '1. 고등어에 소금 간을 합니다. 2. 오븐 또는 팬에 굽습니다. 3. 나물과 밥과 함께 섭취합니다.', en: '1. Season mackerel with salt. 2. Grill in oven or pan. 3. Serve with namul sides and rice.' }
    }
];

const supplementDatabase = [
    {
        id: 'whey',
        name: { ko: '유청 단백질 (Whey Protein)', en: 'Whey Protein' },
        benefit: { ko: '근육 합성 및 빠른 회복에 도움', en: 'Muscle synthesis and rapid recovery' },
        dosage: { ko: '1회 25~30g (스쿱 1개)', en: '25-30g per serving (1 scoop)' },
        timing: { ko: '운동 직후 30분 이내', en: 'Within 30 min after workout' },
        goal: ['muscle-gain', 'general-fitness'],
        icon: '🥛'
    },
    {
        id: 'bcaa',
        name: { ko: 'BCAA (분지사슬 아미노산)', en: 'BCAA' },
        benefit: { ko: '운동 중 근손실 방지 및 피로 감소', en: 'Prevent muscle breakdown, reduce fatigue' },
        dosage: { ko: '5~10g (물 300ml에 혼합)', en: '5-10g mixed in 300ml water' },
        timing: { ko: '운동 중 또는 직전', en: 'During or just before workout' },
        goal: ['muscle-gain', 'weight-loss'],
        icon: '💪'
    },
    {
        id: 'multivitamin',
        name: { ko: '종합 비타민', en: 'Multivitamin' },
        benefit: { ko: '면역력 강화, 피로 회복, 전반적 건강 유지', en: 'Immune support, fatigue recovery, overall health' },
        dosage: { ko: '1일 1정 (식사와 함께)', en: '1 tablet daily with meal' },
        timing: { ko: '아침 식사 후', en: 'After breakfast' },
        goal: ['general-fitness', 'weight-loss', 'muscle-gain'],
        icon: '🌈'
    },
    {
        id: 'vitamin-d',
        name: { ko: '비타민 D', en: 'Vitamin D' },
        benefit: { ko: '뼈 건강, 면역력, 근기능 향상', en: 'Bone health, immunity, muscle function' },
        dosage: { ko: '1,000~2,000 IU (1일 1회)', en: '1,000-2,000 IU once daily' },
        timing: { ko: '점심 식사 후 (햇빛 섭취가 부족한 경우 필수)', en: 'After lunch (essential if lacking sun exposure)' },
        goal: ['general-fitness', 'weight-loss', 'muscle-gain'],
        icon: '☀️'
    },
    {
        id: 'omega3',
        name: { ko: '오메가 3 (Omega-3)', en: 'Omega-3' },
        benefit: { ko: '관절 건강, 염증 감소, 심혈관 건강', en: 'Joint health, reduced inflammation, cardiovascular support' },
        dosage: { ko: '1,000~2,000mg (EPA+DHA 합산)', en: '1,000-2,000mg total EPA+DHA' },
        timing: { ko: '식사와 함께 (공복에 섭취 시 속쓰림 가능)', en: 'With meals (avoid on empty stomach)' },
        goal: ['general-fitness', 'muscle-gain'],
        icon: '🐟'
    },
    {
        id: 'creatine',
        name: { ko: '크레아틴 (Creatine)', en: 'Creatine' },
        benefit: { ko: '근력 및 운동 성능 향상, 근육 증가 가속', en: 'Strength and performance boost, accelerates muscle growth' },
        dosage: { ko: '3~5g (1일 1회)', en: '3-5g once daily' },
        timing: { ko: '운동 전후 아무 때나 꾸준히 섭취', en: 'Anytime consistently (timing is less critical)' },
        goal: ['muscle-gain'],
        icon: '⚡'
    },
    {
        id: 'magnesium',
        name: { ko: '마그네슘 (Magnesium)', en: 'Magnesium' },
        benefit: { ko: '근육 이완, 수면의 질 향상, 스트레스 완화', en: 'Muscle relaxation, sleep quality, stress relief' },
        dosage: { ko: '200~400mg (1일 1회)', en: '200-400mg once daily' },
        timing: { ko: '취침 30분 전 (수면 개선 효과)', en: '30 min before bed (enhances sleep)' },
        goal: ['general-fitness', 'weight-loss', 'muscle-gain'],
        icon: '🌙'
    },
    {
        id: 'collagen',
        name: { ko: '콜라겐 (Collagen)', en: 'Collagen' },
        benefit: { ko: '관절·피부·연골 건강, 운동 후 회복 지원', en: 'Joint, skin and cartilage health, post-workout recovery' },
        dosage: { ko: '5~10g (1일 1회)', en: '5-10g once daily' },
        timing: { ko: '아침 공복 또는 운동 1시간 전 (비타민C와 함께)', en: 'Morning on empty stomach or 1hr before workout (with vitamin C)' },
        goal: ['general-fitness', 'weight-loss'],
        icon: '✨'
    }
];
