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
    /* ── 복근 (Abs) ── */
    'plank': {
        ko: '플랭크', en: 'Plank',
        category: 'abs',
        image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '복근', en: 'Abs' },
        desc: {
            ko: '1. 팔꿈치를 어깨 바로 아래 바닥에 댑니다.\n2. 발끝으로 몸을 지지하며 일직선을 만듭니다.\n3. 복부와 엉덩이에 힘을 꽉 주어 자세를 유지합니다.\n4. 정해진 시간 동안 버팁니다. (초보자: 20초)',
            en: '1. Place forearms on floor, elbows under shoulders.\n2. Support body on toes forming a straight line.\n3. Squeeze core and glutes to hold position.\n4. Hold for time. (Beginner: 20 seconds)'
        },
        caution: { ko: '엉덩이가 너무 높게 솟거나 아래로 처지지 않게 수평을 유지하세요. 숨을 참지 마세요.', en: 'Maintain a neutral spine. Do not let hips rise or dip. Keep breathing normally.' },
        tip: { ko: '초보자 팁: 10~20초부터 시작해 매주 5초씩 늘려나가세요.', en: 'Beginner tip: Start with 10-20 seconds and add 5 seconds each week.' },
        recReps: { excellent: '30~60초', tired: '20~30초', recovery: '15~20초' },
        recSets: { excellent: '3', tired: '2', recovery: '2' },
        recRest: { excellent: '45초', tired: '60초', recovery: '90초' },
        recTime: { excellent: '3분', tired: '2분', recovery: '1분' },
        isHome: true, intensity: 'low'
    },
    'crunch': {
        ko: '크런치', en: 'Crunch',
        category: 'abs',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '복근', en: 'Abs' },
        desc: {
            ko: '1. 등을 대고 누워 무릎을 세우고 손을 귀 옆에 살짝 댑니다.\n2. 복근의 힘으로 상체를 살짝 들어 올립니다.\n3. 목이 아닌 복부 근육으로 움직임을 만들어야 합니다.\n4. 천천히 내리며 반복합니다.',
            en: '1. Lie on back, knees bent, hands lightly beside ears.\n2. Use abs to curl upper body slightly off floor.\n3. The movement must come from abs, not the neck.\n4. Lower slowly and repeat.'
        },
        caution: { ko: '목을 앞으로 당기지 마세요. 시선은 천장을 향해 유지하세요.', en: 'Do not pull your neck forward. Keep gaze toward the ceiling.' },
        tip: { ko: '초보자 팁: 어깨만 살짝 들리는 작은 동작도 충분히 효과적입니다.', en: 'Beginner tip: A small movement lifting just the shoulder blades is perfectly effective.' },
        recReps: { excellent: '20회', tired: '12회', recovery: '10회' },
        recSets: { excellent: '4', tired: '3', recovery: '2' },
        recRest: { excellent: '45초', tired: '60초', recovery: '60초' },
        recTime: { excellent: '5분', tired: '3분', recovery: '2분' },
        isHome: true, intensity: 'low'
    },
    'leg-raise': {
        ko: '레그레이즈', en: 'Leg Raise',
        category: 'abs',
        image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '하복부', en: 'Lower Abs' },
        desc: {
            ko: '1. 등을 대고 누워 손을 엉덩이 아래에 받쳐 허리를 지지합니다.\n2. 다리를 붙여 천천히 90도까지 들어 올립니다.\n3. 잠깐 멈추고 천천히 내립니다.\n4. 바닥에 닿기 직전 다시 들어 올립니다.',
            en: '1. Lie on back with hands under hips for lower back support.\n2. Keep legs together and slowly raise to 90 degrees.\n3. Pause briefly then lower slowly.\n4. Stop just before touching the floor and raise again.'
        },
        caution: { ko: '허리가 바닥에서 뜨지 않도록 복부에 힘을 유지하세요.', en: 'Keep lower back pressed to the floor by engaging your core throughout.' },
        tip: { ko: '초보자 팁: 무릎을 살짝 굽혀 수행하면 난이도가 낮아집니다.', en: 'Beginner tip: Bend knees slightly to reduce difficulty.' },
        recReps: { excellent: '15회', tired: '10회', recovery: '8회' },
        recSets: { excellent: '4', tired: '3', recovery: '2' },
        recRest: { excellent: '45초', tired: '60초', recovery: '60초' },
        recTime: { excellent: '5분', tired: '3분', recovery: '2분' },
        isHome: true, intensity: 'medium'
    },
    'side-plank': {
        ko: '사이드 플랭크', en: 'Side Plank',
        category: 'abs',
        image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '옆구리', en: 'Obliques' },
        desc: {
            ko: '1. 옆으로 누워 팔꿈치를 바닥에 대고 몸을 지지합니다.\n2. 골반을 들어 올려 머리부터 발끝까지 일직선을 만듭니다.\n3. 허리가 처지지 않도록 복부에 힘을 줍니다.\n4. 정해진 시간 동안 유지 후 반대편도 진행합니다.',
            en: '1. Lie on your side, supporting on your forearm.\n2. Lift hips to form a straight line from head to feet.\n3. Engage core to prevent hips from dropping.\n4. Hold for time, then switch sides.'
        },
        caution: { ko: '지지하는 어깨에 무리가 가지 않도록 팔꿈치를 어깨 바로 아래에 위치시킵니다.', en: 'Position elbow directly below shoulder to prevent shoulder strain.' },
        tip: { ko: '초보자 팁: 무릎을 바닥에 대고 수행하면 더 쉽게 자세를 익힐 수 있습니다.', en: 'Beginner tip: Drop the bottom knee to the floor to start.' },
        recReps: { excellent: '30초 (양쪽)', tired: '20초 (양쪽)', recovery: '15초 (양쪽)' },
        recSets: { excellent: '3', tired: '2', recovery: '2' },
        recRest: { excellent: '45초', tired: '60초', recovery: '90초' },
        recTime: { excellent: '4분', tired: '3분', recovery: '2분' },
        isHome: true, intensity: 'medium'
    },
    'mountain-climber': {
        ko: '마운틴 클라이머', en: 'Mountain Climbers',
        category: 'abs',
        image: 'https://images.unsplash.com/photo-1434608519344-49d77a699e1d?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '복근·유산소', en: 'Abs & Cardio' },
        desc: {
            ko: '1. 팔을 쭉 편 푸쉬업 자세를 취합니다.\n2. 오른쪽 무릎을 가슴 쪽으로 빠르게 당깁니다.\n3. 오른발을 돌려 보내며 왼쪽 무릎을 당깁니다.\n4. 달리듯 빠르게 교차하며 반복합니다.',
            en: '1. Start in a high push-up position.\n2. Drive right knee toward chest quickly.\n3. Switch, driving left knee as right foot returns.\n4. Alternate rapidly as if running in place.'
        },
        caution: { ko: '엉덩이를 낮게 유지하고 상체는 흔들리지 않게 고정하세요.', en: 'Keep hips low and minimize upper body movement.' },
        tip: { ko: '초보자 팁: 천천히 한 쪽씩 교차하여 자세를 익힌 후 속도를 올리세요.', en: 'Beginner tip: Start slowly alternating each knee before increasing speed.' },
        recReps: { excellent: '20회', tired: '12회', recovery: '10회' },
        recSets: { excellent: '4', tired: '3', recovery: '2' },
        recRest: { excellent: '45초', tired: '60초', recovery: '90초' },
        recTime: { excellent: '5분', tired: '3분', recovery: '2분' },
        isHome: true, intensity: 'high'
    },
    'bird-dog': {
        ko: '버드독', en: 'Bird Dog',
        category: 'abs',
        image: 'https://images.unsplash.com/lrQPTQs7nQQ?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '복근·코어', en: 'Core' },
        desc: {
            ko: '1. 손과 무릎을 바닥에 대는 네발기기 자세를 취합니다.\n2. 오른쪽 팔을 앞으로, 왼쪽 다리를 뒤로 동시에 뻗습니다.\n3. 몸의 균형을 유지하며 3초 유지합니다.\n4. 반대편도 동일하게 반복합니다.',
            en: '1. Begin on all fours, hands under shoulders.\n2. Extend right arm forward and left leg back simultaneously.\n3. Hold with body balanced for 3 seconds.\n4. Repeat on the opposite side.'
        },
        caution: { ko: '허리가 아래로 꺾이지 않도록 골반의 수평을 유지하세요.', en: 'Keep hips level and avoid arching your lower back.' },
        tip: { ko: '초보자 팁: 팔만 들거나 다리만 드는 동작부터 시작하여 균형 감각을 키우세요.', en: 'Beginner tip: Start by lifting only the arm or only the leg to build balance.' },
        recReps: { excellent: '12회 (양쪽)', tired: '8회 (양쪽)', recovery: '6회 (양쪽)' },
        recSets: { excellent: '3', tired: '2', recovery: '2' },
        recRest: { excellent: '45초', tired: '60초', recovery: '60초' },
        recTime: { excellent: '4분', tired: '3분', recovery: '2분' },
        isHome: true, intensity: 'low'
    },
    /* ── 유산소 (Cardio) ── */
    'burpee': {
        ko: '버피 테스트', en: 'Burpees',
        category: 'cardio',
        image: 'https://images.unsplash.com/photo-1599058917233-97f394156059?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '전신 유산소', en: 'Full Body Cardio' },
        desc: {
            ko: '1. 차렷 자세로 시작합니다.\n2. 쪼그려 앉으며 손을 바닥에 짚습니다.\n3. 발을 뒤로 뻗어 푸쉬업 자세를 만듭니다.\n4. 다시 발을 당겨와 일어서며 높이 점프합니다.',
            en: '1. Start standing upright.\n2. Squat down placing hands on floor.\n3. Jump or step feet back to push-up position.\n4. Return feet forward, stand and jump high.'
        },
        caution: { ko: '착지 시 무릎을 살짝 굽혀 충격을 흡수하세요. 초보자는 점프 대신 걸어서 이동해도 됩니다.', en: 'Bend knees slightly when landing. Beginners may step instead of jump.' },
        tip: { ko: '초보자 팁: 점프 없이 천천히 동작을 이어나가는 "노 점프 버피"로 시작하세요.', en: 'Beginner tip: Start with "no-jump burpees" — walk through each step slowly.' },
        recReps: { excellent: '15회', tired: '8회', recovery: '5회' },
        recSets: { excellent: '4', tired: '3', recovery: '2' },
        recRest: { excellent: '60초', tired: '90초', recovery: '120초' },
        recTime: { excellent: '8분', tired: '5분', recovery: '3분' },
        isHome: true, intensity: 'high'
    },
    'jumping-jacks': {
        ko: '팔벌려뛰기', en: 'Jumping Jacks',
        category: 'cardio',
        image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '유산소', en: 'Cardio' },
        desc: {
            ko: '1. 발 모아 차렷 자세로 시작합니다.\n2. 점프하며 발을 어깨너비보다 넓게 벌리고 팔을 머리 위로 올립니다.\n3. 다시 점프하며 발을 모으고 팔을 내립니다.\n4. 리드미컬하게 반복합니다.',
            en: '1. Start with feet together, arms at sides.\n2. Jump spreading feet wide and raising arms overhead.\n3. Jump back to starting position.\n4. Repeat rhythmically.'
        },
        caution: { ko: '발 앞꿈치로 가볍게 착지하여 무릎 충격을 줄이세요.', en: 'Land softly on the balls of your feet to protect your knees.' },
        tip: { ko: '초보자 팁: 점프 대신 스텝으로 대체해도 좋습니다.', en: 'Beginner tip: Step side to side instead of jumping to reduce joint stress.' },
        recReps: { excellent: '40회', tired: '25회', recovery: '20회' },
        recSets: { excellent: '4', tired: '3', recovery: '2' },
        recRest: { excellent: '45초', tired: '60초', recovery: '90초' },
        recTime: { excellent: '6분', tired: '4분', recovery: '3분' },
        isHome: true, intensity: 'medium'
    },
    'high-knees': {
        ko: '하이 니', en: 'High Knees',
        category: 'cardio',
        image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '유산소', en: 'Cardio' },
        desc: {
            ko: '1. 제자리에 서서 시작합니다.\n2. 오른쪽 무릎을 허리 높이까지 들어 올리며 왼쪽 팔을 앞으로 흔듭니다.\n3. 즉시 왼쪽 무릎으로 바꾸며 팔도 바꿉니다.\n4. 제자리 달리기 하듯 빠르게 반복합니다.',
            en: '1. Stand in place.\n2. Drive right knee up to hip height while swinging left arm forward.\n3. Quickly switch to left knee with right arm.\n4. Alternate rapidly like running in place.'
        },
        caution: { ko: '발 앞꿈치로 가볍게 착지하여 무릎 충격을 최소화하세요.', en: 'Land on the balls of your feet to minimize knee impact.' },
        tip: { ko: '초보자 팁: 천천히 걷듯 무릎만 높이 들어 올리는 동작부터 시작하세요.', en: 'Beginner tip: Start by slowly marching in place, lifting knees high.' },
        recReps: { excellent: '30초', tired: '20초', recovery: '15초' },
        recSets: { excellent: '4', tired: '3', recovery: '2' },
        recRest: { excellent: '45초', tired: '60초', recovery: '90초' },
        recTime: { excellent: '6분', tired: '4분', recovery: '3분' },
        isHome: true, intensity: 'high'
    },
    'jump-rope': {
        ko: '줄넘기 (제자리)', en: 'Jump Rope (In-place)',
        category: 'cardio',
        image: 'https://images.unsplash.com/photo-1434682881908-b43d0467b798?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '유산소', en: 'Cardio' },
        desc: {
            ko: '1. 발을 모아 서고 팔꿈치를 몸 가까이 붙입니다.\n2. 손목을 회전시켜 줄을 돌리는 동작을 상상합니다.\n3. 발 앞꿈치로 가볍게 뛰어오릅니다. (줄이 없어도 동작으로 수행 가능)\n4. 일정한 리듬으로 계속 반복합니다.',
            en: '1. Stand with feet together, elbows close to body.\n2. Rotate wrists as if swinging a rope.\n3. Lightly hop on the balls of your feet (can be done without actual rope).\n4. Maintain a steady rhythm.'
        },
        caution: { ko: '착지 시 발뒤꿈치가 바닥에 닿지 않게 앞꿈치로 착지하세요.', en: 'Always land on the balls of your feet, never the heels.' },
        tip: { ko: '초보자 팁: 줄 없이 제자리에서 발 앞꿈치로 가볍게 뛰는 것만으로도 충분합니다.', en: 'Beginner tip: Simply hopping lightly on the spot without a rope works great.' },
        recReps: { excellent: '1분', tired: '30초', recovery: '20초' },
        recSets: { excellent: '4', tired: '3', recovery: '2' },
        recRest: { excellent: '45초', tired: '60초', recovery: '90초' },
        recTime: { excellent: '8분', tired: '5분', recovery: '3분' },
        isHome: true, intensity: 'medium'
    },
    'speed-step': {
        ko: '스피드 스텝', en: 'Speed Step',
        category: 'cardio',
        image: 'https://images.unsplash.com/7TZdZVXDKPk?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '유산소', en: 'Cardio' },
        desc: {
            ko: '1. 낮은 자세(반 스쿼트)로 시작합니다.\n2. 발을 좌우로 빠르게 교차하며 옆으로 이동합니다.\n3. 팔을 리드미컬하게 흔들어 속도를 유지합니다.\n4. 일정 거리 또는 시간 동안 반복합니다.',
            en: '1. Start in a low position (half squat).\n2. Quickly shuffle feet side to side.\n3. Swing arms rhythmically to maintain speed.\n4. Repeat for distance or time.'
        },
        caution: { ko: '무릎이 안쪽으로 모이지 않도록 주의하고 허리를 곧게 유지하세요.', en: 'Keep knees from caving inward and maintain an upright torso.' },
        tip: { ko: '초보자 팁: 천천히 시작해서 익숙해지면 속도를 높이세요.', en: 'Beginner tip: Start slowly and increase your pace as you get comfortable.' },
        recReps: { excellent: '45초', tired: '25초', recovery: '20초' },
        recSets: { excellent: '4', tired: '3', recovery: '2' },
        recRest: { excellent: '45초', tired: '60초', recovery: '90초' },
        recTime: { excellent: '6분', tired: '4분', recovery: '3분' },
        isHome: true, intensity: 'medium'
    },
    'jumping-lunge': {
        ko: '점핑 런지', en: 'Jumping Lunge',
        category: 'cardio',
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '유산소·다리', en: 'Cardio & Legs' },
        desc: {
            ko: '1. 런지 자세(한 발 앞)로 시작합니다.\n2. 힘차게 위로 점프하며 두 발의 위치를 서로 바꿉니다.\n3. 반대편 런지 자세로 착지합니다.\n4. 계속 반복합니다.',
            en: '1. Start in a lunge position with one foot forward.\n2. Explosively jump upward and switch leg positions mid-air.\n3. Land in a lunge with opposite foot forward.\n4. Continue alternating.'
        },
        caution: { ko: '착지 시 무릎을 부드럽게 굽혀 충격을 흡수하세요. 무릎이 발끝 앞으로 나가지 않게 합니다.', en: 'Absorb the landing by bending your knees gently. Keep knees behind toes.' },
        tip: { ko: '초보자 팁: 점프 없이 일반 런지로 시작한 뒤 점프를 추가하세요.', en: 'Beginner tip: Start with regular lunges without jumping, then add the jump.' },
        recReps: { excellent: '20회', tired: '10회', recovery: '8회' },
        recSets: { excellent: '4', tired: '3', recovery: '2' },
        recRest: { excellent: '60초', tired: '90초', recovery: '120초' },
        recTime: { excellent: '8분', tired: '5분', recovery: '3분' },
        isHome: true, intensity: 'high'
    },
    /* ── 부위별 타겟 (Targeted) ── */
    'push-up': {
        ko: '푸쉬업', en: 'Push-up',
        category: 'targeted',
        image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '가슴', en: 'Chest' },
        desc: {
            ko: '1. 바닥에 엎드려 손을 어깨너비보다 약간 넓게 짚습니다.\n2. 몸 전체를 일직선으로 유지합니다.\n3. 팔꿈치를 굽히며 가슴을 바닥 가까이 내립니다.\n4. 가슴 근육의 힘으로 밀어 올려 시작 자세로 돌아옵니다.',
            en: '1. Place hands slightly wider than shoulders.\n2. Keep body in a straight line from head to heels.\n3. Bend elbows lowering chest toward floor.\n4. Push through chest to return to start.'
        },
        caution: { ko: '허리가 아래로 처지지 않도록 복부에 힘을 주세요. 초보자는 무릎을 바닥에 대고 시작해도 됩니다.', en: 'Keep core engaged to prevent lower back sagging. Beginners may start with knees on the floor.' },
        tip: { ko: '초보자 팁: 무릎 푸쉬업으로 시작해 점차 일반 푸쉬업으로 전환하세요.', en: 'Beginner tip: Start with knee push-ups, then progress to full push-ups.' },
        recReps: { excellent: '15회', tired: '10회', recovery: '8회' },
        recSets: { excellent: '4', tired: '3', recovery: '2' },
        recRest: { excellent: '60초', tired: '90초', recovery: '90초' },
        recTime: { excellent: '8분', tired: '5분', recovery: '3분' },
        isHome: true, intensity: 'medium'
    },
    'squat': {
        ko: '스쿼트', en: 'Squat',
        category: 'targeted',
        image: 'https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '하체', en: 'Legs' },
        desc: {
            ko: '1. 발을 어깨너비로 벌리고 발끝은 약간 바깥쪽을 향합니다.\n2. 가슴을 펴고 허리를 곧게 세웁니다.\n3. 무릎이 발끝 방향으로 향하도록 하며 엉덩이를 내립니다.\n4. 허벅지가 바닥과 평행해지면 발뒤꿈치로 밀며 일어납니다.',
            en: '1. Stand with feet shoulder-width apart, toes slightly out.\n2. Keep chest up and spine neutral.\n3. Lower hips with knees tracking over toes.\n4. Rise when thighs are parallel to floor.'
        },
        caution: { ko: '무릎이 안쪽으로 모이지 않도록 바깥쪽으로 향하게 유지하세요. 발뒤꿈치가 들리면 안 됩니다.', en: 'Keep knees aligned with toes, never caving in. Heels must stay flat on the floor.' },
        tip: { ko: '초보자 팁: 의자에 앉았다 일어나는 동작을 연습하여 자세를 익히세요.', en: 'Beginner tip: Practice sitting into a chair to learn the movement pattern.' },
        recReps: { excellent: '20회', tired: '12회', recovery: '10회' },
        recSets: { excellent: '4', tired: '3', recovery: '2' },
        recRest: { excellent: '60초', tired: '90초', recovery: '90초' },
        recTime: { excellent: '8분', tired: '5분', recovery: '3분' },
        isHome: true, intensity: 'medium'
    },
    'lunges': {
        ko: '런지', en: 'Lunges',
        category: 'targeted',
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '하체', en: 'Legs' },
        desc: {
            ko: '1. 등을 곧게 세우고 차렷 자세로 시작합니다.\n2. 한쪽 발을 앞으로 크게 내딛습니다.\n3. 양쪽 무릎이 90도가 되도록 몸을 내립니다.\n4. 앞발의 힘으로 원래 자세로 돌아옵니다.',
            en: '1. Stand tall with spine neutral.\n2. Step one foot forward.\n3. Lower body until both knees reach 90 degrees.\n4. Push through the front foot to return.'
        },
        caution: { ko: '앞쪽 무릎이 발가락보다 앞으로 나가지 않게 하세요. 상체가 앞으로 기울지 않게 유지합니다.', en: 'Ensure front knee stays behind the toes. Keep torso upright throughout.' },
        tip: { ko: '초보자 팁: 벽을 잡고 균형을 유지하며 연습해보세요.', en: 'Beginner tip: Hold a wall for balance support when learning.' },
        recReps: { excellent: '12회 (양쪽)', tired: '8회 (양쪽)', recovery: '6회 (양쪽)' },
        recSets: { excellent: '4', tired: '3', recovery: '2' },
        recRest: { excellent: '60초', tired: '90초', recovery: '90초' },
        recTime: { excellent: '8분', tired: '5분', recovery: '3분' },
        isHome: true, intensity: 'medium'
    },
    'bridge': {
        ko: '힙 브릿지', en: 'Glute Bridge',
        category: 'targeted',
        image: 'https://images.unsplash.com/photo-1594911772125-07fc7a2d8d9f?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '둔근', en: 'Glutes' },
        desc: {
            ko: '1. 등을 대고 누워 무릎을 세우고 발을 바닥에 댑니다.\n2. 엉덩이 근육에 힘을 주며 골반을 위로 들어 올립니다.\n3. 어깨-골반-무릎이 일직선이 되면 2초 유지합니다.\n4. 천천히 내려 시작 자세로 돌아옵니다.',
            en: '1. Lie on back, knees bent, feet flat.\n2. Squeeze glutes and lift hips toward ceiling.\n3. Hold when shoulders-hips-knees form a straight line.\n4. Slowly lower back to the floor.'
        },
        caution: { ko: '목과 어깨에 과한 압력이 가지 않도록 주의하고 엉덩이 힘에 집중하세요.', en: 'Avoid straining the neck. Focus the effort on squeezing the glutes.' },
        tip: { ko: '초보자 팁: 등 통증이 있거나 재활 중인 분들도 안전하게 할 수 있는 기초 운동입니다.', en: 'Beginner tip: This is a gentle foundational move safe for those with back issues.' },
        recReps: { excellent: '20회', tired: '12회', recovery: '10회' },
        recSets: { excellent: '3', tired: '3', recovery: '2' },
        recRest: { excellent: '45초', tired: '60초', recovery: '90초' },
        recTime: { excellent: '6분', tired: '4분', recovery: '3분' },
        isHome: true, intensity: 'low'
    },
    'superman': {
        ko: '슈퍼맨', en: 'Superman',
        category: 'targeted',
        image: 'https://images.unsplash.com/photo-1518611012118-2969c63d002e?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '등', en: 'Back' },
        desc: {
            ko: '1. 바닥에 엎드려 팔을 앞으로 뻗습니다.\n2. 등 근육의 힘으로 팔과 다리를 동시에 들어 올립니다.\n3. 등 근육의 자극을 느끼며 2~3초 유지합니다.\n4. 천천히 내리며 반복합니다.',
            en: '1. Lie face down with arms extended forward.\n2. Using back muscles, lift both arms and legs simultaneously.\n3. Hold feeling the back muscles squeeze for 2-3 seconds.\n4. Slowly lower and repeat.'
        },
        caution: { ko: '목을 너무 뒤로 젖히지 말고 시선은 바닥을 유지하세요.', en: 'Do not hyperextend the neck. Keep gaze toward the floor.' },
        tip: { ko: '초보자 팁: 팔과 다리를 교차로 한 쪽씩 드는 것부터 시작해도 좋습니다.', en: 'Beginner tip: Start by lifting opposite arm and leg alternately.' },
        recReps: { excellent: '15회', tired: '10회', recovery: '8회' },
        recSets: { excellent: '3', tired: '3', recovery: '2' },
        recRest: { excellent: '45초', tired: '60초', recovery: '60초' },
        recTime: { excellent: '5분', tired: '4분', recovery: '3분' },
        isHome: true, intensity: 'low'
    },
    'wall-sit': {
        ko: '월 시트', en: 'Wall Sit',
        category: 'targeted',
        image: 'https://images.unsplash.com/photo-1567013127542-490d757e51cd?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '허벅지', en: 'Quads' },
        desc: {
            ko: '1. 벽에 등을 기댑니다.\n2. 발을 앞으로 내밀며 무릎이 90도가 되도록 천천히 내려앉습니다.\n3. 허벅지가 바닥과 평행한 상태를 유지합니다.\n4. 정해진 시간 동안 버팁니다. (초보자: 20~30초)',
            en: '1. Lean your back against a wall.\n2. Slide down until knees are at 90 degrees.\n3. Keep thighs parallel to the floor.\n4. Hold for time. (Beginner: 20-30 seconds)'
        },
        caution: { ko: '무릎이 90도 이상 굽혀지지 않게 하고 발끝이 무릎 위로 오지 않게 합니다.', en: 'Do not bend knees past 90 degrees. Feet should be ahead of knees.' },
        tip: { ko: '초보자 팁: 처음에는 30초를 목표로 하고 익숙해지면 시간을 늘리세요.', en: 'Beginner tip: Aim for 30 seconds first, gradually increasing over time.' },
        recReps: { excellent: '45초', tired: '30초', recovery: '20초' },
        recSets: { excellent: '3', tired: '2', recovery: '2' },
        recRest: { excellent: '60초', tired: '90초', recovery: '90초' },
        recTime: { excellent: '5분', tired: '3분', recovery: '2분' },
        isHome: true, intensity: 'medium'
    },
    'step-up': {
        ko: '스텝업', en: 'Step Up',
        category: 'targeted',
        image: 'https://images.unsplash.com/udp_cuRqIrg?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '하체', en: 'Legs' },
        desc: {
            ko: '1. 계단이나 박스 앞에 서서 오른발을 올립니다.\n2. 오른발로 밀어 올라가며 왼발도 올립니다.\n3. 오른발을 먼저 내려 시작 자세로 돌아옵니다.\n4. 양쪽을 번갈아 반복합니다.',
            en: '1. Stand before a step or box, place right foot on it.\n2. Push through right foot to step up, bringing left foot up.\n3. Step down with right foot first to return.\n4. Alternate leading legs.'
        },
        caution: { ko: '계단 위에 발 전체가 올라가도록 하고 앞으로 기울지 않게 상체를 세웁니다.', en: 'Place the full foot on the step. Keep torso upright without leaning forward.' },
        tip: { ko: '초보자 팁: 낮은 계단부터 시작해 균형과 근력이 생기면 높이를 높이세요.', en: 'Beginner tip: Start with a low step and increase height as strength improves.' },
        recReps: { excellent: '15회 (양쪽)', tired: '10회 (양쪽)', recovery: '8회 (양쪽)' },
        recSets: { excellent: '3', tired: '3', recovery: '2' },
        recRest: { excellent: '60초', tired: '90초', recovery: '90초' },
        recTime: { excellent: '6분', tired: '4분', recovery: '3분' },
        isHome: true, intensity: 'medium'
    },
    'tricep-dip': {
        ko: '트라이셉 딥스', en: 'Tricep Dips',
        category: 'targeted',
        image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '팔 뒤쪽', en: 'Triceps' },
        desc: {
            ko: '1. 의자나 낮은 테이블 가장자리에 손을 짚고 앉습니다.\n2. 엉덩이를 앞으로 내밀어 의자에서 띄웁니다.\n3. 팔꿈치를 굽히며 몸을 내립니다. (90도까지)\n4. 팔뒤쪽 힘으로 밀어 올려 시작 자세로 돌아옵니다.',
            en: '1. Place hands on the edge of a chair, sitting position.\n2. Slide hips off the chair.\n3. Bend elbows lowering body toward floor (to 90 degrees).\n4. Press back up using triceps.'
        },
        caution: { ko: '어깨가 귀 쪽으로 올라가지 않도록 내리고 팔뒤꿈치가 옆으로 벌어지지 않게 합니다.', en: 'Keep shoulders down away from ears. Elbows should point straight back, not flare out.' },
        tip: { ko: '초보자 팁: 발을 몸 가까이에 두면 체중이 줄어 쉬워집니다.', en: 'Beginner tip: Bend your knees and keep feet closer to reduce difficulty.' },
        recReps: { excellent: '15회', tired: '10회', recovery: '8회' },
        recSets: { excellent: '3', tired: '3', recovery: '2' },
        recRest: { excellent: '60초', tired: '90초', recovery: '90초' },
        recTime: { excellent: '5분', tired: '4분', recovery: '3분' },
        isHome: true, intensity: 'medium'
    },
    'shoulder-press': {
        ko: '숄더 프레스', en: 'Shoulder Press',
        category: 'targeted',
        image: 'https://images.unsplash.com/photo-1581009137042-c552e485697a?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '어깨', en: 'Shoulders' },
        desc: {
            ko: '1. 앉거나 선 자세에서 덤벨이나 물병을 어깨 높이로 듭니다.\n2. 팔꿈치가 90도가 되게 합니다.\n3. 머리 위로 똑바로 밀어 올립니다.\n4. 천천히 내려 시작 자세로 돌아옵니다.',
            en: '1. Sitting or standing, hold weights at shoulder height.\n2. Elbows at 90 degrees.\n3. Press straight up overhead.\n4. Slowly lower to start.'
        },
        caution: { ko: '허리가 과도하게 젖혀지지 않도록 복부에 힘을 주고 천천히 수행하세요.', en: 'Engage core to avoid arching the lower back. Move with control.' },
        tip: { ko: '초보자 팁: 덤벨이 없다면 500ml 물병으로도 충분히 수행할 수 있습니다.', en: 'Beginner tip: 500ml water bottles work great as beginner weights.' },
        recReps: { excellent: '12회', tired: '8회', recovery: '6회' },
        recSets: { excellent: '4', tired: '3', recovery: '2' },
        recRest: { excellent: '60초', tired: '90초', recovery: '90초' },
        recTime: { excellent: '7분', tired: '4분', recovery: '3분' },
        isHome: true, intensity: 'medium'
    },
    'deadlift': {
        ko: '데드리프트', en: 'Deadlift',
        category: 'targeted',
        image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '등·하체', en: 'Back & Legs' },
        desc: {
            ko: '1. 발을 어깨너비로 벌리고 무릎을 살짝 굽힙니다.\n2. 허리를 곧게 펴고 엉덩이를 뒤로 빼며 상체를 숙입니다.\n3. 등을 평평하게 유지하며 바닥의 무게를 잡습니다.\n4. 엉덩이를 앞으로 밀며 몸을 세워 올립니다.',
            en: '1. Stand with feet shoulder-width apart, knees slightly bent.\n2. Hinge at hips keeping spine flat, lowering toward floor.\n3. Grip the weight keeping back flat.\n4. Drive hips forward to return to standing.'
        },
        caution: { ko: '허리를 둥글게 굽히는 것이 가장 위험합니다. 항상 등을 평평하게 유지하세요.', en: 'Rounding the lower back is the most dangerous mistake. Always keep spine neutral.' },
        tip: { ko: '초보자 팁: 처음에는 가벼운 덤벨이나 빈 몸으로 허리 자세를 완벽히 익히고 무게를 올리세요.', en: 'Beginner tip: Master the hip-hinge movement with no weight before adding load.' },
        recReps: { excellent: '12회', tired: '8회', recovery: '6회' },
        recSets: { excellent: '4', tired: '3', recovery: '2' },
        recRest: { excellent: '90초', tired: '120초', recovery: '120초' },
        recTime: { excellent: '10분', tired: '6분', recovery: '4분' },
        isHome: false, intensity: 'high'
    },
    'hip-hinge': {
        ko: '힙 힌지', en: 'Hip Hinge',
        category: 'targeted',
        image: 'https://images.unsplash.com/NC8brK1Y_6U?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '등·둔근', en: 'Back & Glutes' },
        desc: {
            ko: '1. 발을 어깨너비로 벌리고 섭니다.\n2. 엉덩이를 뒤로 밀며 상체를 바닥과 평행하게 내립니다.\n3. 등이 일직선임을 확인합니다.\n4. 엉덩이를 앞으로 밀며 똑바로 일어납니다.',
            en: '1. Stand with feet shoulder-width apart.\n2. Push hips back lowering torso parallel to floor.\n3. Ensure spine remains straight.\n4. Drive hips forward to stand upright.'
        },
        caution: { ko: '허리가 아치형으로 굽지 않도록 주의하세요. 어깨에 힘을 빼고 수행하세요.', en: 'Avoid arching or rounding the lower back. Relax the shoulders.' },
        tip: { ko: '초보자 팁: 벽을 등 뒤에 두고 연습하면 올바른 엉덩이 방향을 익힐 수 있습니다.', en: 'Beginner tip: Practice with a wall behind you to learn the correct hip direction.' },
        recReps: { excellent: '15회', tired: '10회', recovery: '8회' },
        recSets: { excellent: '3', tired: '3', recovery: '2' },
        recRest: { excellent: '60초', tired: '90초', recovery: '90초' },
        recTime: { excellent: '6분', tired: '4분', recovery: '3분' },
        isHome: true, intensity: 'low'
    },
    'wide-squat': {
        ko: '와이드 스쿼트', en: 'Wide Squat',
        category: 'targeted',
        image: 'https://images.unsplash.com/W8IMcfVCA_o?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '내전근·둔근', en: 'Inner Thighs & Glutes' },
        desc: {
            ko: '1. 발을 어깨너비의 1.5배 정도 넓게 벌리고 발끝을 45도 바깥으로 향합니다.\n2. 가슴을 펴고 허리를 곧게 세웁니다.\n3. 무릎이 발끝 방향으로 향하도록 엉덩이를 내립니다.\n4. 허벅지가 바닥과 평행해지면 발뒤꿈치로 밀며 일어납니다.',
            en: '1. Stand with feet 1.5x shoulder-width, toes out 45 degrees.\n2. Keep chest up and spine neutral.\n3. Lower hips with knees tracking over toes.\n4. Rise when thighs are parallel to floor.'
        },
        caution: { ko: '무릎이 안쪽으로 무너지지 않도록 발끝 방향으로 유지하세요.', en: 'Keep knees tracking over toes; do not allow them to cave inward.' },
        tip: { ko: '초보자 팁: 발 간격을 좁혀서 시작하고 점차 넓히며 자세를 익히세요.', en: 'Beginner tip: Start with a narrower stance and gradually widen as you get comfortable.' },
        recReps: { excellent: '20회', tired: '12회', recovery: '10회' },
        recSets: { excellent: '4', tired: '3', recovery: '2' },
        recRest: { excellent: '60초', tired: '90초', recovery: '90초' },
        recTime: { excellent: '8분', tired: '5분', recovery: '3분' },
        isHome: true, intensity: 'medium'
    },
    'pike-push-up': {
        ko: '파이크 푸쉬업', en: 'Pike Push-up',
        category: 'targeted',
        image: 'https://images.unsplash.com/DRzYMtae-vA?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '어깨·가슴', en: 'Shoulders & Chest' },
        desc: {
            ko: '1. 엎드린 상태에서 엉덩이를 들어 올려 역V 자세를 만듭니다.\n2. 손은 어깨너비, 발은 골반너비로 유지합니다.\n3. 팔꿈치를 굽히며 머리를 바닥 방향으로 내립니다.\n4. 팔을 펴며 시작 자세로 돌아옵니다.',
            en: '1. Start in downward dog position with hips high forming an inverted V.\n2. Hands shoulder-width, feet hip-width apart.\n3. Bend elbows lowering head toward the floor.\n4. Press back up to start.'
        },
        caution: { ko: '어깨에 부담이 집중되므로 통증이 있으면 즉시 멈추세요.', en: 'This loads the shoulders heavily — stop immediately if you feel shoulder pain.' },
        tip: { ko: '초보자 팁: 동작 범위를 작게 시작해 어깨 근력이 생기면 점차 깊이 내려가세요.', en: 'Beginner tip: Use a small range of motion at first, deepen as shoulder strength builds.' },
        recReps: { excellent: '12회', tired: '8회', recovery: '6회' },
        recSets: { excellent: '3', tired: '3', recovery: '2' },
        recRest: { excellent: '60초', tired: '90초', recovery: '90초' },
        recTime: { excellent: '6분', tired: '4분', recovery: '3분' },
        isHome: true, intensity: 'medium'
    },
    'reverse-lunge': {
        ko: '리버스 런지', en: 'Reverse Lunge',
        category: 'targeted',
        image: 'https://images.unsplash.com/1UnEP_LiMw0?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '하체·둔근', en: 'Legs & Glutes' },
        desc: {
            ko: '1. 등을 곧게 세우고 차렷 자세로 시작합니다.\n2. 한쪽 발을 뒤로 크게 내딛습니다.\n3. 양쪽 무릎이 90도가 되도록 몸을 내립니다.\n4. 앞발의 힘으로 원래 자세로 돌아옵니다.',
            en: '1. Stand tall with spine neutral.\n2. Step one foot backward.\n3. Lower body until both knees reach 90 degrees.\n4. Push through the front foot to return.'
        },
        caution: { ko: '뒤쪽 무릎이 바닥에 닿지 않게 하고 앞무릎은 발끝 뒤에 위치하도록 합니다.', en: 'Keep back knee from touching the floor. Front knee should stay behind toes.' },
        tip: { ko: '초보자 팁: 일반 런지보다 무릎 안정성이 더 좋아 초보자에게 추천됩니다.', en: 'Beginner tip: Reverse lunges are more knee-friendly than forward lunges for beginners.' },
        recReps: { excellent: '12회 (양쪽)', tired: '8회 (양쪽)', recovery: '6회 (양쪽)' },
        recSets: { excellent: '4', tired: '3', recovery: '2' },
        recRest: { excellent: '60초', tired: '90초', recovery: '90초' },
        recTime: { excellent: '8분', tired: '5분', recovery: '3분' },
        isHome: true, intensity: 'medium'
    },
    'hip-thrust': {
        ko: '힙 스러스트', en: 'Hip Thrust',
        category: 'targeted',
        image: 'https://images.unsplash.com/SMSpk9fprcU?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '둔근', en: 'Glutes' },
        desc: {
            ko: '1. 벤치나 소파 가장자리에 어깨를 기대고 무릎을 세워 앉습니다.\n2. 엉덩이 근육에 힘을 주며 골반을 위로 밀어 올립니다.\n3. 어깨-골반-무릎이 일직선이 되면 1~2초 유지합니다.\n4. 천천히 내려 시작 자세로 돌아옵니다.',
            en: '1. Lean upper back on a bench or sofa edge, knees bent, feet flat.\n2. Squeeze glutes and drive hips up toward ceiling.\n3. Hold at top when shoulders-hips-knees align for 1-2 seconds.\n4. Slowly lower back to start.'
        },
        caution: { ko: '허리를 과도하게 젖히지 말고 복부에 힘을 주어 엉덩이 근육에 자극이 오도록 하세요.', en: 'Avoid hyperextending the lower back. Engage core to isolate the glutes.' },
        tip: { ko: '초보자 팁: 바닥에서 힙 브릿지로 시작하고 근력이 생기면 벤치를 이용하세요.', en: 'Beginner tip: Start with floor glute bridges, progress to bench hip thrusts as strength improves.' },
        recReps: { excellent: '15회', tired: '10회', recovery: '8회' },
        recSets: { excellent: '4', tired: '3', recovery: '2' },
        recRest: { excellent: '60초', tired: '90초', recovery: '90초' },
        recTime: { excellent: '7분', tired: '4분', recovery: '3분' },
        isHome: true, intensity: 'medium'
    },
    'dumbbell-row': {
        ko: '덤벨 로우', en: 'Dumbbell Row',
        category: 'targeted',
        image: 'https://images.unsplash.com/BoWp9uOVY7g?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '등·팔', en: 'Back & Arms' },
        desc: {
            ko: '1. 한 손과 무릎을 벤치에 올려 상체를 지지합니다.\n2. 반대쪽 손으로 덤벨을 잡고 팔을 아래로 내립니다.\n3. 팔꿈치를 뒤로 당기며 덤벨을 옆구리 쪽으로 들어 올립니다.\n4. 천천히 내려 시작 자세로 돌아옵니다.',
            en: '1. Support yourself with one hand and knee on a bench.\n2. Hold a dumbbell in the other hand with arm extended.\n3. Pull elbow back lifting the dumbbell to your side.\n4. Slowly lower back to start.'
        },
        caution: { ko: '등을 곧게 유지하고 팔 힘만이 아닌 등 근육으로 당기는 느낌에 집중하세요.', en: 'Keep back straight. Focus on pulling with the back muscle, not just the arm.' },
        tip: { ko: '초보자 팁: 덤벨이 없다면 책이나 물병을 담은 가방으로 대체할 수 있습니다.', en: 'Beginner tip: A bag filled with books or water bottles works as a dumbbell substitute.' },
        recReps: { excellent: '12회 (양쪽)', tired: '8회 (양쪽)', recovery: '6회 (양쪽)' },
        recSets: { excellent: '4', tired: '3', recovery: '2' },
        recRest: { excellent: '60초', tired: '90초', recovery: '90초' },
        recTime: { excellent: '8분', tired: '5분', recovery: '3분' },
        isHome: true, intensity: 'medium'
    }
};

const stretchingDatabase = [
    {
        target: 'Chest',
        name: { ko: '가슴 스트레칭', en: 'Chest Stretch' },
        image: 'https://images.unsplash.com/CjeHQ_A_6zI?auto=format&fit=crop&q=80&w=400',
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
        image: 'https://images.unsplash.com/VLpbB4YlNiw?auto=format&fit=crop&q=80&w=400',
        duration: { ko: '10회 반복', en: '10 repetitions' },
        instructions: {
            ko: '1. 손과 무릎을 바닥에 대는 네발기기 자세를 취합니다.\n2. 숨을 들이쉬며 허리를 아래로 처지게 하고 고개를 들어 올립니다. (소 자세)\n3. 숨을 내쉬며 등을 위로 동그랗게 말고 고개를 숙입니다. (고양이 자세)\n4. 천천히 10회 반복합니다.',
            en: '1. Start on all fours.\n2. Inhale: arch back down and lift head (Cow pose).\n3. Exhale: round back up and tuck chin (Cat pose).\n4. Repeat slowly 10 times.'
        }
    },
    {
        target: 'Cardio',
        name: { ko: '종아리 스트레칭', en: 'Calf Stretch' },
        image: 'https://images.unsplash.com/sVH7i5A4Wh8?auto=format&fit=crop&q=80&w=400',
        duration: { ko: '30초 × 2세트 (양쪽)', en: '30s × 2 sets (each side)' },
        instructions: {
            ko: '1. 벽 앞에 서서 양손을 벽에 댑니다.\n2. 한 발을 뒤로 길게 내딛고 발뒤꿈치를 바닥에 붙입니다.\n3. 앞 무릎을 굽히며 뒤쪽 다리의 종아리가 당기는 느낌을 만듭니다.\n4. 30초 유지 후 반대편도 진행합니다.',
            en: '1. Stand facing a wall, hands on wall.\n2. Step one foot back, keeping heel flat on floor.\n3. Bend front knee until you feel a stretch in the back calf.\n4. Hold 30 seconds, then switch sides.'
        }
    },
    {
        target: 'Arms',
        name: { ko: '삼두근 스트레칭', en: 'Triceps Stretch' },
        image: 'https://images.unsplash.com/Ly4RdHwt4fw?auto=format&fit=crop&q=80&w=400',
        duration: { ko: '20초 × 2세트 (양쪽)', en: '20s × 2 sets (each side)' },
        instructions: {
            ko: '1. 서거나 앉아서 오른팔을 머리 위로 들어 올립니다.\n2. 팔꿈치를 굽혀 손이 등 쪽으로 닿게 합니다.\n3. 왼손으로 오른쪽 팔꿈치를 잡아 살짝 당겨줍니다.\n4. 20초 유지 후 반대편도 진행합니다.',
            en: '1. Stand or sit and raise right arm overhead.\n2. Bend elbow so hand reaches behind your head.\n3. Use left hand to gently pull right elbow.\n4. Hold 20 seconds, then switch sides.'
        }
    },
    {
        target: 'Shoulders',
        name: { ko: '어깨 가로 스트레칭', en: 'Cross-Body Shoulder Stretch' },
        image: 'https://images.unsplash.com/IPl13IxUKRo?auto=format&fit=crop&q=80&w=400',
        duration: { ko: '20초 × 2세트 (양쪽)', en: '20s × 2 sets (each side)' },
        instructions: {
            ko: '1. 오른팔을 가슴 높이로 펴서 몸 앞쪽으로 뻗습니다.\n2. 왼손으로 오른팔 팔꿈치 부근을 잡습니다.\n3. 오른팔을 왼쪽으로 당겨 어깨 뒤쪽이 늘어나는 느낌을 만듭니다.\n4. 20초 유지 후 반대편도 진행합니다.',
            en: '1. Extend right arm across body at chest height.\n2. Hook left hand around right elbow.\n3. Pull right arm toward your body, feeling stretch in rear shoulder.\n4. Hold 20 seconds, then switch.'
        }
    },
    {
        target: 'Legs',
        name: { ko: '대퇴사두근(앞 허벅지) 스트레칭', en: 'Quad Stretch' },
        image: 'https://images.unsplash.com/HHXdPG_eTIQ?auto=format&fit=crop&q=80&w=400',
        duration: { ko: '30초 × 2세트 (양쪽)', en: '30s × 2 sets (each side)' },
        instructions: {
            ko: '1. 한 손으로 벽이나 의자를 잡아 균형을 유지합니다.\n2. 한쪽 무릎을 굽혀 발목을 엉덩이 쪽으로 당깁니다.\n3. 무릎을 모아 앞 허벅지가 당기는 느낌을 만듭니다.\n4. 30초 유지 후 반대편도 진행합니다.',
            en: '1. Hold a wall or chair for balance.\n2. Bend one knee pulling ankle toward buttocks.\n3. Keep knees together to feel the front thigh stretch.\n4. Hold 30 seconds, then switch.'
        }
    },
    {
        target: 'Back',
        name: { ko: '아이 자세 (휴식 스트레칭)', en: "Child's Pose" },
        image: 'https://images.unsplash.com/_PInKGPLPCA?auto=format&fit=crop&q=80&w=400',
        duration: { ko: '30~60초', en: '30-60 seconds' },
        instructions: {
            ko: '1. 무릎을 꿇고 엉덩이를 발뒤꿈치 위에 내립니다.\n2. 팔을 앞으로 뻗으며 상체를 바닥으로 내립니다.\n3. 이마를 바닥에 대고 온몸의 힘을 뺍니다.\n4. 깊은 복식 호흡과 함께 30~60초 휴식합니다.',
            en: '1. Kneel and lower hips to rest on your heels.\n2. Extend arms forward, lowering torso to floor.\n3. Rest forehead on floor and release all tension.\n4. Take deep breaths and hold for 30-60 seconds.'
        }
    },
    {
        target: 'Abs',
        name: { ko: '누운 비틀기 (척추 회전)', en: 'Supine Twist' },
        image: 'https://images.unsplash.com/KswNRngZ8fo?auto=format&fit=crop&q=80&w=400',
        duration: { ko: '30초 × 2세트 (양쪽)', en: '30s × 2 sets (each side)' },
        instructions: {
            ko: '1. 등을 대고 누워 한쪽 무릎을 가슴으로 당깁니다.\n2. 당긴 무릎을 반대편으로 넘겨 허리를 비틀어줍니다.\n3. 양쪽 어깨는 바닥에 붙인 채 유지합니다.\n4. 30초 유지 후 반대편도 진행합니다.',
            en: '1. Lie on back and draw one knee to chest.\n2. Drop that knee across body to twist the spine.\n3. Keep both shoulders flat on the floor.\n4. Hold 30 seconds, then switch.'
        }
    },
    {
        target: 'Cardio',
        name: { ko: '고관절 굴곡근 스트레칭', en: 'Hip Flexor Stretch' },
        image: 'https://images.unsplash.com/vggKEO1xD3w?auto=format&fit=crop&q=80&w=400',
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

/* =====================================================
   운동의 종류 카탈로그 데이터베이스 (전세계 운동 백과사전)
   category: 'arms' | 'chest' | 'back' | 'legs' | 'abs' | 'cardio'
   intensity: 'low' | 'medium' | 'high'
   ===================================================== */
const catalogDatabase = [

    /* ── 💪 팔 (Arms) ── */
    {
        id: 'bicep-curl',
        category: 'arms',
        ko: '바이셉 컬', en: 'Bicep Curl',
        image: 'https://images.unsplash.com/-2QAEbam0YE?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '이두근', en: 'Biceps' },
        intensity: 'medium',
        desc: {
            ko: '1. 덤벨을 양손에 들고 몸 옆에 팔을 늘어뜨립니다.\n2. 손바닥이 앞을 향하도록 합니다.\n3. 팔꿈치를 몸통에 고정한 채 덤벨을 어깨 높이까지 들어 올립니다.\n4. 이두근이 최대로 수축되는 위치에서 1초 정지합니다.\n5. 천천히 제어하며 시작 자세로 내립니다.',
            en: '1. Hold dumbbells at your sides with palms facing forward.\n2. Keep elbows pinned close to your torso.\n3. Curl the weights up to shoulder height.\n4. Pause for 1 second at peak contraction.\n5. Slowly lower back to starting position.'
        },
        caution: {
            ko: '팔꿈치가 앞뒤로 흔들리지 않도록 고정하세요. 반동을 사용하면 이두근 자극이 감소합니다.',
            en: 'Keep elbows stationary throughout. Using body momentum reduces bicep activation.'
        },
        tip: { ko: '초보자 팁: 덤벨 대신 500ml 물병으로 시작해도 됩니다. 천천히 내리는 동작(3초)이 근성장에 중요합니다.', en: 'Beginner tip: Water bottles work as starter weights. The slow lowering (3 sec) is key for muscle growth.' }
    },
    {
        id: 'hammer-curl',
        category: 'arms',
        ko: '해머 컬', en: 'Hammer Curl',
        image: 'https://images.unsplash.com/nR7RzE0OBI0?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '이두근·전완근', en: 'Biceps & Forearms' },
        intensity: 'medium',
        desc: {
            ko: '1. 덤벨을 세로로(엄지손가락이 위) 잡고 양 옆에 내립니다.\n2. 팔꿈치를 몸통에 붙여 고정합니다.\n3. 손목의 방향을 유지한 채 덤벨을 어깨 높이까지 올립니다.\n4. 정점에서 1초 수축 후 천천히 내립니다.\n5. 양쪽 동시 또는 번갈아 수행합니다.',
            en: '1. Hold dumbbells vertically (thumbs up) at your sides.\n2. Keep elbows pinned to torso.\n3. Curl without rotating the wrists.\n4. Pause 1 second at top then lower slowly.\n5. Perform simultaneously or alternating.'
        },
        caution: {
            ko: '손목을 비틀지 마세요. 바이셉 컬과 달리 손바닥이 내측을 향해야 전완근이 함께 자극됩니다.',
            en: 'Do not rotate wrists. The neutral grip (palms facing in) is what activates the forearms.'
        },
        tip: { ko: '초보자 팁: 바이셉 컬보다 손목 부담이 적어 부상 위험이 낮습니다. 처음 팔 운동으로 좋습니다.', en: 'Beginner tip: Less wrist stress than regular curls, making it a great first arm exercise.' }
    },
    {
        id: 'overhead-tricep-ext',
        category: 'arms',
        ko: '오버헤드 트라이셉 익스텐션', en: 'Overhead Tricep Extension',
        image: 'https://images.unsplash.com/j-iCTjS9ILg?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '삼두근', en: 'Triceps' },
        intensity: 'medium',
        desc: {
            ko: '1. 덤벨 하나를 양손으로 잡고 머리 위로 들어 올립니다.\n2. 팔꿈치를 귀 옆에 고정하고 팔꿈치를 90도로 굽힙니다.\n3. 삼두근의 힘으로 팔꿈치를 펴며 위로 밀어 올립니다.\n4. 팔이 완전히 펴지면 삼두근 수축을 느낍니다.\n5. 천천히 굽히며 시작 자세로 돌아옵니다.',
            en: '1. Hold one dumbbell with both hands overhead.\n2. Keep elbows close to ears, bend to 90 degrees.\n3. Extend elbows pushing the weight upward.\n4. Feel tricep contraction at full extension.\n5. Slowly lower back to start.'
        },
        caution: {
            ko: '팔꿈치가 바깥으로 벌어지지 않도록 귀 옆에 고정하세요. 허리가 과도하게 젖혀지지 않도록 복부에 힘을 줍니다.',
            en: 'Keep elbows pointing upward, not flaring out. Engage core to prevent lower back arch.'
        },
        tip: { ko: '초보자 팁: 가벼운 무게로 팔꿈치 위치를 먼저 익히세요. 양쪽 팔꿈치가 대칭이어야 합니다.', en: 'Beginner tip: Master elbow position with light weight. Both elbows must stay symmetrical.' }
    },
    {
        id: 'tricep-dip-cat',
        category: 'arms',
        ko: '트라이셉 딥스', en: 'Tricep Dips',
        image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '삼두근', en: 'Triceps' },
        intensity: 'medium',
        desc: {
            ko: '1. 의자나 벤치 가장자리에 손을 짚고 다리를 앞으로 뻗습니다.\n2. 엉덩이를 의자 앞으로 띄웁니다.\n3. 팔꿈치를 뒤쪽으로 굽히며 몸을 90도까지 내립니다.\n4. 삼두근의 힘으로 팔을 펴며 시작 자세로 돌아옵니다.\n5. 어깨는 항상 아래로 내린 상태를 유지합니다.',
            en: '1. Place hands on edge of chair with legs extended forward.\n2. Slide hips off the edge.\n3. Bend elbows backward lowering body to 90 degrees.\n4. Press back up using triceps.\n5. Keep shoulders down throughout.'
        },
        caution: {
            ko: '어깨가 귀 방향으로 올라가지 않게 하세요. 팔꿈치는 뒤로 향해야 하며 옆으로 벌어지면 어깨 부상 위험이 있습니다.',
            en: 'Shoulders should not rise toward ears. Elbows must point backward — flaring them out risks shoulder injury.'
        },
        tip: { ko: '초보자 팁: 무릎을 굽혀 발을 몸 가까이 당기면 무게가 줄어 난이도가 낮아집니다.', en: 'Beginner tip: Bend knees to bring feet closer and reduce the load.' }
    },
    {
        id: 'pull-up',
        category: 'arms',
        ko: '풀업 (친업)', en: 'Pull-up / Chin-up',
        image: 'https://images.unsplash.com/photo-1598971457999-ca4ef48a9a71?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '광배근·이두근', en: 'Lats & Biceps' },
        intensity: 'high',
        desc: {
            ko: '1. 철봉을 어깨너비보다 약간 넓게(풀업) 또는 좁게(친업) 잡습니다.\n2. 팔을 완전히 펴고 매달린 상태에서 시작합니다.\n3. 견갑골을 아래로 당기며 가슴이 바(bar)에 닿을 때까지 올라갑니다.\n4. 정점에서 1초 유지 후 천천히 내려옵니다.\n5. 팔을 완전히 펴는 동작으로 돌아옵니다.',
            en: '1. Grip the bar slightly wider (pull-up) or shoulder-width (chin-up).\n2. Start with arms fully extended hanging.\n3. Depress scapulae and pull until chest touches the bar.\n4. Hold at top for 1 second then lower slowly.\n5. Return to full arm extension.'
        },
        caution: {
            ko: '몸을 흔들어 반동을 이용하지 마세요. 어깨 부상을 예방하기 위해 내려올 때 천천히 제어해야 합니다.',
            en: 'Do not swing or use momentum. Control the descent slowly to prevent shoulder injury.'
        },
        tip: { ko: '초보자 팁: 밴드를 발에 걸어 보조받으며 시작하세요. 또는 네거티브 풀업(내려오는 동작만)부터 연습합니다.', en: 'Beginner tip: Use a resistance band for assistance, or practice only the lowering phase (negatives).' }
    },
    {
        id: 'concentration-curl',
        category: 'arms',
        ko: '컨센트레이션 컬', en: 'Concentration Curl',
        image: 'https://images.unsplash.com/FeIVyHICRqY?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '이두근 (피크)', en: 'Bicep Peak' },
        intensity: 'medium',
        desc: {
            ko: '1. 의자에 앉아 무릎을 벌리고 한쪽 팔꿈치를 허벅지 안쪽에 고정합니다.\n2. 덤벨을 바닥 쪽으로 늘어뜨립니다.\n3. 팔꿈치를 고정한 채 덤벨을 어깨 방향으로 올립니다.\n4. 최대로 수축된 상태에서 2초 유지합니다.\n5. 천천히 내리며 반복합니다.',
            en: '1. Sit on a bench, spread knees, and brace one elbow against inner thigh.\n2. Let the dumbbell hang toward the floor.\n3. Curl up with elbow fixed against thigh.\n4. Hold peak contraction for 2 seconds.\n5. Lower slowly and repeat.'
        },
        caution: {
            ko: '팔꿈치를 허벅지에서 떼지 마세요. 허벅지는 고정점 역할만 하며 무릎을 눌러서는 안 됩니다.',
            en: 'Do not lift elbow off the thigh. The thigh acts only as a pivot, not to push the weight.'
        },
        tip: { ko: '초보자 팁: 이두근 "피크"를 만드는 데 특화된 운동입니다. 무게보다 자세와 수축에 집중하세요.', en: 'Beginner tip: This is specifically for bicep peak. Focus on the squeeze, not the weight.' }
    },

    /* ── 🫁 가슴 (Chest) ── */
    {
        id: 'push-up-cat',
        category: 'chest',
        ko: '푸쉬업', en: 'Push-up',
        image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '가슴·삼두근', en: 'Chest & Triceps' },
        intensity: 'medium',
        desc: {
            ko: '1. 손을 어깨너비보다 약간 넓게 짚고 엎드립니다.\n2. 발끝으로 지지하며 머리부터 발까지 일직선을 만듭니다.\n3. 팔꿈치를 45도 방향으로 굽히며 가슴을 바닥에 가깝게 내립니다.\n4. 가슴과 삼두근의 힘으로 밀어 올려 시작 자세로 돌아옵니다.\n5. 복부에 힘을 주어 허리가 처지지 않도록 유지합니다.',
            en: '1. Place hands slightly wider than shoulder-width, face down.\n2. Support on toes forming a straight line from head to heel.\n3. Bend elbows at 45 degrees lowering chest toward floor.\n4. Push through chest and triceps to return.\n5. Engage core to prevent lower back sag.'
        },
        caution: {
            ko: '허리가 아래로 처지거나 엉덩이가 너무 높이 솟으면 코어 자극이 감소합니다. 몸 전체가 일직선이어야 합니다.',
            en: 'Sagging hips or raised glutes reduce core engagement. Maintain a straight body line throughout.'
        },
        tip: { ko: '초보자 팁: 무릎을 바닥에 대는 "무릎 푸쉬업"으로 시작하여 근력을 키운 뒤 일반 푸쉬업으로 전환하세요.', en: 'Beginner tip: Start with knee push-ups to build strength before progressing to full push-ups.' }
    },
    {
        id: 'incline-push-up',
        category: 'chest',
        ko: '인클라인 푸쉬업', en: 'Incline Push-up',
        image: 'https://images.unsplash.com/HZQhILEYJnE?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '하부 가슴·삼두근', en: 'Lower Chest & Triceps' },
        intensity: 'low',
        desc: {
            ko: '1. 테이블, 벤치 또는 벽에 손을 어깨너비로 짚습니다.\n2. 발을 뒤로 뻗어 몸이 대각선 일직선이 되도록 합니다.\n3. 팔꿈치를 굽히며 가슴을 지지대에 가깝게 내립니다.\n4. 가슴 근육으로 밀어 올려 팔을 펵니다.\n5. 지지대가 높을수록 난이도가 낮아집니다.',
            en: '1. Place hands on a table, bench or wall at shoulder width.\n2. Extend feet back forming a diagonal straight line.\n3. Bend elbows lowering chest toward the surface.\n4. Push through chest to extend arms.\n5. Higher surface = easier variation.'
        },
        caution: {
            ko: '손의 위치가 너무 좁으면 삼두근 위주가 됩니다. 가슴 자극을 위해 어깨너비 이상으로 손을 벌리세요.',
            en: 'Hands too close targets mainly triceps. Use shoulder-width or wider for chest activation.'
        },
        tip: { ko: '초보자 팁: 가장 쉬운 푸쉬업 변형입니다. 벽 → 테이블 → 무릎 → 일반 순서로 단계적으로 올라가세요.', en: 'Beginner tip: Easiest push-up variation. Progress: wall → table → knees → full.' }
    },
    {
        id: 'decline-push-up',
        category: 'chest',
        ko: '디클라인 푸쉬업', en: 'Decline Push-up',
        image: 'https://images.unsplash.com/CQfNt66ttZM?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '상부 가슴·어깨', en: 'Upper Chest & Shoulders' },
        intensity: 'high',
        desc: {
            ko: '1. 발을 의자나 박스 위에 올리고 손을 바닥에 짚습니다.\n2. 몸이 내리막 경사 일직선이 되도록 합니다.\n3. 팔꿈치를 굽히며 코를 바닥에 가깝게 내립니다.\n4. 가슴과 어깨 힘으로 밀어 올립니다.\n5. 발이 높을수록 상부 가슴·어깨 자극이 강해집니다.',
            en: '1. Elevate feet on a chair or box, place hands on floor.\n2. Body forms a downward incline in a straight line.\n3. Lower nose toward the floor bending elbows.\n4. Push up through chest and shoulders.\n5. Higher elevation increases upper chest and shoulder activation.'
        },
        caution: {
            ko: '머리가 충분히 피로 가지 않도록 혈압에 주의하세요. 어깨 부상이 있는 경우에는 피하세요.',
            en: 'Be cautious of head-down position if you have blood pressure concerns. Avoid with shoulder injuries.'
        },
        tip: { ko: '초보자 팁: 낮은 의자(15~30cm)부터 시작하세요. 높이가 낮을수록 일반 푸쉬업에 가깝습니다.', en: 'Beginner tip: Start with a low elevation (15-30cm). Lower height = closer to a standard push-up.' }
    },
    {
        id: 'diamond-push-up',
        category: 'chest',
        ko: '다이아몬드 푸쉬업', en: 'Diamond Push-up',
        image: 'https://images.unsplash.com/I7FsT6N94io?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '삼두근·가슴 중앙', en: 'Triceps & Inner Chest' },
        intensity: 'medium',
        desc: {
            ko: '1. 엎드려 양손을 모아 엄지와 검지로 다이아몬드(마름모) 형태를 만듭니다.\n2. 손을 가슴 아래에 위치시키고 몸을 일직선으로 만듭니다.\n3. 팔꿈치를 몸 옆으로 굽히며 가슴을 손 쪽으로 내립니다.\n4. 삼두근 힘으로 밀어 올립니다.\n5. 손 모양이 다이아몬드를 유지해야 합니다.',
            en: '1. Face down, form a diamond shape with thumbs and forefingers.\n2. Position hands below chest, body in a straight line.\n3. Bend elbows tucking them alongside body, lower chest.\n4. Press up using triceps.\n5. Maintain the diamond hand shape throughout.'
        },
        caution: {
            ko: '손목에 부담이 집중될 수 있습니다. 통증이 있으면 즉시 멈추세요. 팔꿈치가 옆으로 벌어지면 삼두근 자극이 감소합니다.',
            en: 'Can stress the wrists. Stop immediately if you feel pain. Flaring elbows reduces tricep activation.'
        },
        tip: { ko: '초보자 팁: 일반 푸쉬업보다 어렵습니다. 먼저 일반 푸쉬업 15회를 완수한 후 시도하세요.', en: 'Beginner tip: Harder than regular push-ups. Master 15 regular push-ups before attempting this.' }
    },
    {
        id: 'wide-push-up-cat',
        category: 'chest',
        ko: '와이드 푸쉬업', en: 'Wide Push-up',
        image: 'https://images.unsplash.com/3jAN9InapQI?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '가슴 외측', en: 'Outer Chest' },
        intensity: 'medium',
        desc: {
            ko: '1. 손을 어깨너비의 1.5~2배로 넓게 벌려 바닥에 짚습니다.\n2. 몸을 일직선으로 유지합니다.\n3. 팔꿈치를 옆으로 벌리며 가슴을 바닥에 가깝게 내립니다.\n4. 가슴 외측 근육의 힘으로 밀어 올립니다.\n5. 손이 넓을수록 가슴 자극이 증가하고 팔 자극이 감소합니다.',
            en: '1. Place hands 1.5-2x shoulder-width apart.\n2. Keep body in a straight line.\n3. Flare elbows out as you lower chest toward floor.\n4. Push up through outer chest.\n5. Wider hands = more chest, less triceps activation.'
        },
        caution: {
            ko: '손을 너무 넓게 벌리면 어깨 관절에 부담이 증가합니다. 어깨 통증이 있으면 폭을 줄이세요.',
            en: 'Hands too wide increases shoulder joint stress. Reduce width if you feel shoulder pain.'
        },
        tip: { ko: '초보자 팁: 일반 푸쉬업보다 범위가 작아 쉽게 느껴질 수 있지만 가슴 근육에 집중하는 것이 핵심입니다.', en: 'Beginner tip: Feels easier due to shorter range, but focus on the chest squeeze to make it effective.' }
    },
    {
        id: 'dumbbell-chest-fly',
        category: 'chest',
        ko: '덤벨 체스트 플라이', en: 'Dumbbell Chest Fly',
        image: 'https://images.unsplash.com/VJ2s0c20qCo?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '가슴 전체', en: 'Full Chest' },
        intensity: 'medium',
        desc: {
            ko: '1. 등을 대고 누워 덤벨을 각 손에 들고 가슴 위로 뻗습니다.\n2. 팔꿈치를 약간 굽힌 채 유지합니다.\n3. 팔을 양옆으로 호를 그리며 천천히 내립니다. (바닥 수평까지)\n4. 가슴이 충분히 펴지는 느낌을 유지합니다.\n5. 가슴 근육의 힘으로 팔을 다시 모아 시작 자세로 돌아옵니다.',
            en: '1. Lie on back, hold dumbbells above chest with arms extended.\n2. Keep a slight bend in elbows throughout.\n3. Slowly lower arms out in an arc to chest level.\n4. Feel a full chest stretch at the bottom.\n5. Bring arms back together using chest muscles.'
        },
        caution: {
            ko: '팔꿈치를 완전히 펴면 관절에 무리가 갑니다. 항상 약간 굽힌 상태를 유지하세요. 무게가 무거우면 어깨 부상 위험이 높습니다.',
            en: 'Fully locking elbows stresses joints. Always keep a slight bend. Heavy weight greatly increases shoulder injury risk.'
        },
        tip: { ko: '초보자 팁: 매우 가벼운 무게(1~2kg)로 시작하세요. 가슴이 충분히 늘어나는 스트레칭 느낌이 핵심입니다.', en: 'Beginner tip: Start very light (1-2kg). The key sensation is a deep chest stretch at the bottom.' }
    },

    /* ── 🔙 등 (Back) ── */
    {
        id: 'pull-up-back',
        category: 'back',
        ko: '풀업', en: 'Pull-up',
        image: 'https://images.unsplash.com/photo-1598971457999-ca4ef48a9a71?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '광배근', en: 'Latissimus Dorsi' },
        intensity: 'high',
        desc: {
            ko: '1. 철봉을 어깨너비보다 넓게 오버그립(손등 위)으로 잡습니다.\n2. 팔을 완전히 펴고 매달립니다.\n3. 견갑골을 아래로 당기며 팔꿈치를 옆구리 방향으로 끌어내립니다.\n4. 가슴이 바에 닿을 때까지 올라갑니다.\n5. 천천히 제어하며 팔을 완전히 펴는 자세로 내려옵니다.',
            en: '1. Grip bar wider than shoulder-width with overhand grip.\n2. Start with arms fully extended hanging.\n3. Depress scapulae and pull elbows down toward sides.\n4. Rise until chest touches bar.\n5. Lower slowly returning to full arm extension.'
        },
        caution: {
            ko: '내려올 때 반동을 쓰지 말고 천천히 내려오세요. 어깨 주변 관절에 무리가 없도록 웜업 후 수행하세요.',
            en: 'Lower yourself slowly without swinging. Always warm up shoulders before pull-ups.'
        },
        tip: { ko: '초보자 팁: 네거티브 풀업(점프로 올라가 천천히 내려오기)이나 밴드 보조부터 시작하세요.', en: 'Beginner tip: Start with jump-to-bar negatives (jump up, slowly lower) or band-assisted pull-ups.' }
    },
    {
        id: 'bent-over-row',
        category: 'back',
        ko: '벤트오버 로우', en: 'Bent Over Row',
        image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '등 전체·이두근', en: 'Full Back & Biceps' },
        intensity: 'high',
        desc: {
            ko: '1. 발을 어깨너비로 벌리고 덤벨(또는 바벨)을 양손에 잡습니다.\n2. 허리를 곧게 펴고 상체를 45~90도 앞으로 숙입니다.\n3. 팔꿈치를 몸 옆으로 당기며 덤벨을 배꼽 쪽으로 당깁니다.\n4. 등 근육이 최대로 수축되는 지점에서 1초 유지합니다.\n5. 천천히 내리며 반복합니다.',
            en: '1. Stand shoulder-width, hold dumbbells or barbell.\n2. Hinge forward 45-90 degrees keeping spine flat.\n3. Drive elbows back and up pulling weight toward navel.\n4. Hold peak back contraction for 1 second.\n5. Lower slowly and repeat.'
        },
        caution: {
            ko: '허리를 절대 둥글게 굽히지 마세요. 등이 평평하게 유지되어야 허리 부상을 예방합니다. 무릎을 살짝 굽혀 다리로 지지하세요.',
            en: 'Never round the lower back. A flat spine prevents back injury. Keep a slight knee bend for stability.'
        },
        tip: { ko: '초보자 팁: 처음에는 45도만 숙여 수행하세요. 등을 평평하게 유지하는 것이 무게보다 중요합니다.', en: 'Beginner tip: Start at 45 degree lean only. Keeping the back flat is more important than the weight used.' }
    },
    {
        id: 'superman-cat',
        category: 'back',
        ko: '슈퍼맨', en: 'Superman',
        image: 'https://images.unsplash.com/photo-1518611012118-2969c63d002e?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '척추기립근·둔근', en: 'Erector Spinae & Glutes' },
        intensity: 'low',
        desc: {
            ko: '1. 바닥에 엎드려 팔을 앞으로 뻗고 다리를 붙입니다.\n2. 등 근육과 둔근에 힘을 주며 팔과 다리를 동시에 들어 올립니다.\n3. 몸이 슈퍼맨 날기 자세처럼 됩니다.\n4. 2~3초 유지하며 등 근육의 수축을 느낍니다.\n5. 천천히 내리며 반복합니다.',
            en: '1. Lie face down, arms extended forward, legs together.\n2. Engage back and glutes lifting arms and legs simultaneously.\n3. Body forms a Superman flying position.\n4. Hold 2-3 seconds feeling back muscles contract.\n5. Lower slowly and repeat.'
        },
        caution: {
            ko: '목을 과도하게 뒤로 젖히지 마세요. 시선은 바닥을 향하고 경추는 척추와 일직선이어야 합니다.',
            en: 'Do not hyperextend the neck. Keep gaze toward floor and cervical spine aligned with the rest of spine.'
        },
        tip: { ko: '초보자 팁: 허리 통증이 있거나 등이 약한 분에게 이상적인 강화 운동입니다. 팔다리를 교차로 드는 것부터 시작하세요.', en: 'Beginner tip: Ideal for those with weak backs or back pain. Start by lifting opposite arm and leg alternately.' }
    },
    {
        id: 'lat-pulldown',
        category: 'back',
        ko: '랫 풀다운', en: 'Lat Pulldown',
        image: 'https://images.unsplash.com/oZhrfhCvbqY?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '광배근', en: 'Latissimus Dorsi' },
        intensity: 'medium',
        desc: {
            ko: '1. 케이블 머신의 바를 어깨너비보다 넓게 잡고 앉습니다.\n2. 가슴을 펴고 약간 뒤로 기울어진 자세를 취합니다.\n3. 팔꿈치를 아래로 당기며 바를 쇄골 앞쪽까지 내립니다.\n4. 광배근이 수축되는 것을 느낍니다.\n5. 천천히 팔을 펴며 시작 자세로 돌아옵니다.',
            en: '1. Grip lat bar wider than shoulder-width and sit down.\n2. Chest up with slight backward lean.\n3. Pull elbows down bringing bar to upper chest/collarbone.\n4. Feel lats contracting throughout.\n5. Slowly return to full arm extension.'
        },
        caution: {
            ko: '목 뒤로 당기는 변형은 경추에 매우 위험합니다. 항상 가슴 앞쪽으로 당기세요. 과도한 뒤로 기울기도 허리 부상의 원인입니다.',
            en: 'Never pull behind the neck — extremely dangerous for the cervical spine. Always pull to the front. Excessive lean also risks back injury.'
        },
        tip: { ko: '초보자 팁: 기계가 없다면 밴드로 대체 가능합니다. 밴드를 문 위에 고정하고 당기는 동작으로 광배근을 자극하세요.', en: 'Beginner tip: Can substitute with resistance bands anchored above head — great lat activation with no machine.' }
    },
    {
        id: 'seated-cable-row',
        category: 'back',
        ko: '시티드 케이블 로우', en: 'Seated Cable Row',
        image: 'https://images.unsplash.com/1RNQ11ZODJM?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '중부 등·광배근', en: 'Mid Back & Lats' },
        intensity: 'medium',
        desc: {
            ko: '1. 로우 케이블 머신에 앉아 발을 패드에 올리고 무릎을 약간 굽힙니다.\n2. 핸들을 잡고 등을 곧게 세웁니다.\n3. 팔꿈치를 뒤로 당기며 핸들을 배꼽 쪽으로 당깁니다.\n4. 견갑골을 모으는 느낌으로 등을 수축합니다.\n5. 팔을 천천히 펴며 등이 늘어나는 느낌을 유지합니다.',
            en: '1. Sit at low cable machine, feet on footplate, knees slightly bent.\n2. Hold handle with straight back.\n3. Pull elbows back bringing handle to navel.\n4. Squeeze shoulder blades together at peak.\n5. Slowly extend arms feeling the back stretch.'
        },
        caution: {
            ko: '당길 때 몸을 뒤로 과도하게 젖히지 마세요. 당기는 힘은 팔이 아닌 등 근육에서 나와야 합니다.',
            en: 'Avoid leaning excessively back when pulling. The pulling force must come from the back, not the arms.'
        },
        tip: { ko: '초보자 팁: 기계가 없다면 밴드를 기둥에 묶거나 문에 고정하여 동일한 동작을 수행할 수 있습니다.', en: 'Beginner tip: No machine? Tie a resistance band to a post or door and perform the same rowing motion.' }
    },
    {
        id: 'face-pull',
        category: 'back',
        ko: '페이스 풀', en: 'Face Pull',
        image: 'https://images.unsplash.com/7JWl_Ap0IG4?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '후면 삼각근·상부 등', en: 'Rear Delts & Upper Back' },
        intensity: 'medium',
        desc: {
            ko: '1. 케이블을 눈 높이 또는 머리 위로 설정하고 로프 핸들을 잡습니다.\n2. 한 발 뒤로 물러나 팔을 앞으로 뻗은 자세를 만듭니다.\n3. 팔꿈치를 어깨 높이로 유지하며 로프를 얼굴 방향으로 당깁니다.\n4. 로프 끝이 귀 옆에 올 때까지 당기고 어깨를 외회전합니다.\n5. 천천히 시작 자세로 돌아옵니다.',
            en: '1. Set cable at eye or above-head height, grab rope handle.\n2. Step back with arms extended.\n3. Keep elbows at shoulder height pulling rope toward face.\n4. Pull until rope ends are beside ears, externally rotating shoulders.\n5. Slowly return to start.'
        },
        caution: {
            ko: '팔꿈치가 어깨보다 아래로 내려가면 자극이 삼두근으로 이동합니다. 어깨 높이를 유지하는 것이 핵심입니다.',
            en: 'If elbows drop below shoulder level, the activation shifts to triceps. Maintaining shoulder height is key.'
        },
        tip: { ko: '초보자 팁: 밴드를 문 위에 고정하면 기계 없이도 수행 가능합니다. 어깨 건강에 탁월한 예방 운동입니다.', en: 'Beginner tip: A resistance band fixed to a door works well. Excellent for shoulder health and injury prevention.' }
    },

    /* ── 🦵 하체 (Legs) ── */
    {
        id: 'squat-cat',
        category: 'legs',
        ko: '스쿼트', en: 'Squat',
        image: 'https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '대퇴사두근·둔근', en: 'Quads & Glutes' },
        intensity: 'medium',
        desc: {
            ko: '1. 발을 어깨너비로 벌리고 발끝을 약간 바깥으로 향합니다.\n2. 가슴을 펴고 허리를 곧게 세웁니다.\n3. 무릎이 발끝 방향으로 향하도록 엉덩이를 뒤로 밀며 내려앉습니다.\n4. 허벅지가 바닥과 평행해질 때까지 내려갑니다.\n5. 발뒤꿈치로 지면을 밀며 힘차게 일어납니다.',
            en: '1. Stand shoulder-width apart, toes slightly outward.\n2. Chest up, spine neutral.\n3. Push hips back and down, knees tracking over toes.\n4. Descend until thighs are parallel to the floor.\n5. Drive through heels to stand up powerfully.'
        },
        caution: {
            ko: '무릎이 발 안쪽으로 모이는 "니 인 (knee in)" 현상은 무릎 부상의 주요 원인입니다. 항상 발끝 방향으로 무릎을 유지하세요.',
            en: 'Knee valgus (knees caving in) is a leading cause of knee injury. Always keep knees tracking over toes.'
        },
        tip: { ko: '초보자 팁: 의자에 앉았다 일어나는 동작으로 먼저 감각을 익히세요. 발뒤꿈치 아래에 책을 깔면 균형 잡기가 쉬워집니다.', en: 'Beginner tip: Practice sitting down to a chair and standing. A small heel elevation helps with balance initially.' }
    },
    {
        id: 'lunges-cat',
        category: 'legs',
        ko: '런지', en: 'Lunges',
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '대퇴사두근·둔근', en: 'Quads & Glutes' },
        intensity: 'medium',
        desc: {
            ko: '1. 등을 곧게 세우고 서서 양손을 허리에 올립니다.\n2. 한쪽 발을 앞으로 크게 내딛습니다.\n3. 뒤쪽 무릎이 거의 바닥에 닿을 때까지 몸을 내립니다.\n4. 앞발의 발뒤꿈치로 밀며 시작 자세로 돌아옵니다.\n5. 번갈아 반복합니다.',
            en: '1. Stand tall with hands on hips.\n2. Step one foot forward in a large stride.\n3. Lower until back knee is just above the floor.\n4. Drive through the front heel to return.\n5. Alternate legs.'
        },
        caution: {
            ko: '앞쪽 무릎이 발끝보다 앞으로 나가면 무릎 통증 원인이 됩니다. 상체가 앞으로 기울지 않도록 코어에 힘을 주세요.',
            en: 'Front knee passing over toes causes knee pain. Keep torso upright by engaging your core.'
        },
        tip: { ko: '초보자 팁: 균형이 어려우면 벽이나 의자를 잡고 연습하세요. 보폭은 처음에 작게 시작하고 점차 넓힙니다.', en: 'Beginner tip: Hold a wall or chair for balance. Start with a shorter stride and lengthen as you improve.' }
    },
    {
        id: 'deadlift-cat',
        category: 'legs',
        ko: '데드리프트', en: 'Deadlift',
        image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '햄스트링·둔근·등', en: 'Hamstrings, Glutes & Back' },
        intensity: 'high',
        desc: {
            ko: '1. 발을 어깨너비로 벌리고 바벨(또는 덤벨)을 발 앞에 놓습니다.\n2. 엉덩이를 뒤로 빼며 등을 평평하게 유지하고 무게를 잡습니다.\n3. 다리와 등을 동시에 펴며 무게를 들어 올립니다.\n4. 엉덩이를 앞으로 밀며 완전히 서는 자세를 만듭니다.\n5. 엉덩이를 뒤로 빼며 천천히 내려놓습니다.',
            en: '1. Stand shoulder-width with barbell/dumbbells in front of feet.\n2. Push hips back, keep spine flat, grip the weight.\n3. Extend hips and spine simultaneously to lift.\n4. Drive hips forward to full standing position.\n5. Push hips back to slowly lower the weight.'
        },
        caution: {
            ko: '허리를 둥글게 굽히는 것은 가장 위험합니다. 등이 평평하지 않으면 절대 무게를 올리지 마세요. 척추 부상 위험이 높습니다.',
            en: 'Rounding the lower back is the most dangerous mistake. Never increase weight unless you can maintain a perfectly flat back.'
        },
        tip: { ko: '초보자 팁: 가벼운 덤벨 또는 빈 바로 힙 힌지 동작을 완벽히 익힌 후 무게를 추가하세요. 자세가 무게보다 항상 우선입니다.', en: 'Beginner tip: Master the hip hinge with light weight or no weight before adding load. Form always beats weight.' }
    },
    {
        id: 'calf-raise',
        category: 'legs',
        ko: '카프 레이즈', en: 'Calf Raise',
        image: 'https://images.unsplash.com/snM3yEpvklU?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '종아리 (비복근·가자미근)', en: 'Calves (Gastrocnemius & Soleus)' },
        intensity: 'low',
        desc: {
            ko: '1. 계단 끝이나 바닥에 발 앞꿈치를 올리고 섭니다.\n2. 벽이나 난간을 가볍게 잡아 균형을 유지합니다.\n3. 발뒤꿈치를 최대한 높이 들어 올립니다.\n4. 정점에서 2초 유지하며 종아리 근육의 수축을 느낍니다.\n5. 천천히 발뒤꿈치를 내려 시작 자세로 돌아옵니다.',
            en: '1. Stand with balls of feet on a step edge or flat floor.\n2. Lightly hold a wall for balance.\n3. Rise as high as possible on the balls of your feet.\n4. Hold at peak for 2 seconds feeling the calf squeeze.\n5. Slowly lower heels back to start.'
        },
        caution: {
            ko: '발목을 갑자기 내리지 마세요. 아킬레스건에 과부하가 걸릴 수 있습니다. 계단에서 수행 시 추락에 주의하세요.',
            en: 'Avoid dropping heels abruptly — this strains the Achilles tendon. Be careful of slipping when using a step edge.'
        },
        tip: { ko: '초보자 팁: 종아리는 내성이 강해 고반복(15~30회)이 효과적입니다. 한 다리씩 수행하면 강도가 높아집니다.', en: 'Beginner tip: Calves respond well to high reps (15-30). Single-leg calf raises dramatically increase intensity.' }
    },
    {
        id: 'leg-press',
        category: 'legs',
        ko: '레그 프레스', en: 'Leg Press',
        image: 'https://images.unsplash.com/JNPvv1u8yRg?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '대퇴사두근·둔근·햄스트링', en: 'Quads, Glutes & Hamstrings' },
        intensity: 'medium',
        desc: {
            ko: '1. 레그 프레스 머신에 등과 엉덩이를 밀착하여 앉습니다.\n2. 발을 어깨너비로 플랫폼 중앙에 올립니다.\n3. 안전 잠금장치를 풀고 무릎을 90도까지 굽혀 발판을 내립니다.\n4. 발뒤꿈치로 플랫폼을 밀며 무릎이 완전히 펴지기 직전까지 밀어 올립니다.\n5. 천천히 내리며 반복합니다.',
            en: '1. Sit in leg press machine with back and hips flat against pad.\n2. Place feet shoulder-width on platform center.\n3. Release safety and lower platform bending knees to 90 degrees.\n4. Press through heels to nearly full extension (not locked).\n5. Lower slowly and repeat.'
        },
        caution: {
            ko: '무릎을 완전히 잠그면 관절에 과부하가 걸립니다. 항상 약간 굽힌 상태를 유지하세요. 허리가 시트에서 떨어지면 무게가 너무 무거운 것입니다.',
            en: 'Never fully lock knees — it overloads joints. Always maintain a slight bend. Lower back lifting off seat means too much weight.'
        },
        tip: { ko: '초보자 팁: 스쿼트가 어려운 분들에게 안전하고 효과적인 대안입니다. 발 위치를 높이면 햄스트링, 낮추면 대퇴사두근 자극이 커집니다.', en: 'Beginner tip: A safe squat alternative for beginners. High foot placement targets hamstrings, lower targets quads.' }
    },
    {
        id: 'hip-thrust-cat',
        category: 'legs',
        ko: '힙 스러스트', en: 'Hip Thrust',
        image: 'https://images.unsplash.com/Tq9Ln3gpiG4?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '둔근 (대둔근)', en: 'Glutes (Gluteus Maximus)' },
        intensity: 'medium',
        desc: {
            ko: '1. 벤치나 소파에 어깨를 기대고 무릎을 세워 앉습니다.\n2. 바벨이나 덤벨을 골반 위에 올립니다. (맨몸도 효과적)\n3. 둔근에 힘을 주며 골반을 위로 힘차게 밀어 올립니다.\n4. 어깨-골반-무릎이 일직선이 되면 2초 유지합니다.\n5. 천천히 내려 골반이 바닥에 닿기 직전 다시 밀어 올립니다.',
            en: '1. Lean upper back on bench or sofa, knees bent, feet flat.\n2. Place barbell or dumbbell across hips (bodyweight also effective).\n3. Squeeze glutes and drive hips explosively upward.\n4. Hold peak position 2 seconds when hips are fully extended.\n5. Lower slowly and thrust again before hips touch floor.'
        },
        caution: {
            ko: '허리를 과도하게 젖히면 척추 부상의 원인이 됩니다. 정점에서 코어를 수축하여 허리가 아닌 둔근의 힘으로 올리는 느낌이 나야 합니다.',
            en: 'Excessive lower back arch causes injury. At peak, engage your core so the thrust comes from glutes, not the lower back.'
        },
        tip: { ko: '초보자 팁: 둔근 단독 자극에 최고인 운동입니다. 맨몸으로 시작해도 충분히 효과적입니다. 정점에서 엉덩이를 꽉 쥐는 것이 핵심입니다.', en: 'Beginner tip: Best exercise for isolated glute activation. Bodyweight alone is very effective. Squeezing glutes hard at peak is the key.' }
    },

    /* ── ⭕ 복근 (Abs) ── */
    {
        id: 'plank-cat',
        category: 'abs',
        ko: '플랭크', en: 'Plank',
        image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '코어 전체', en: 'Full Core' },
        intensity: 'low',
        desc: {
            ko: '1. 팔꿈치를 어깨 바로 아래에 두고 엎드립니다.\n2. 발끝으로 지지하며 머리부터 발까지 일직선을 만듭니다.\n3. 복부와 둔근에 힘을 꽉 주어 자세를 유지합니다.\n4. 정상적으로 호흡하며 목표 시간을 버팁니다.\n5. 엉덩이가 올라가거나 내려가면 즉시 멈춥니다.',
            en: '1. Place forearms on floor, elbows under shoulders.\n2. Support on toes forming a straight line head to heel.\n3. Squeeze abs and glutes hard to hold position.\n4. Breathe normally and hold for target time.\n5. Stop immediately if hips rise or dip.'
        },
        caution: {
            ko: '엉덩이가 하늘로 솟거나 배가 아래로 처지면 운동 효과가 떨어지고 허리 부상 위험이 있습니다. 잠깐이라도 올바른 자세가 긴 시간의 나쁜 자세보다 낫습니다.',
            en: 'Raised hips or sagging belly reduce effectiveness and risk back injury. Short time with perfect form is better than long time with poor form.'
        },
        tip: { ko: '초보자 팁: 20초부터 시작해 매주 5초씩 늘려나가세요. 1분을 완벽한 자세로 버틸 수 있으면 사이드 플랭크로 도전하세요.', en: 'Beginner tip: Start with 20 seconds and add 5 seconds weekly. Once you hold 1 minute perfectly, progress to side planks.' }
    },
    {
        id: 'crunch-cat',
        category: 'abs',
        ko: '크런치', en: 'Crunch',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '복직근 (상부)', en: 'Upper Abs' },
        intensity: 'low',
        desc: {
            ko: '1. 등을 대고 누워 무릎을 세우고 발을 바닥에 댑니다.\n2. 손을 귀 옆에 살짝 대거나 가슴 위에 교차합니다.\n3. 복근의 힘으로만 어깨를 바닥에서 살짝 들어 올립니다.\n4. 목은 중립 자세를 유지하며 시선은 천장을 향합니다.\n5. 천천히 내리며 반복합니다.',
            en: '1. Lie on back, knees bent, feet flat.\n2. Hands lightly beside ears or crossed on chest.\n3. Use abs only to lift shoulder blades slightly off floor.\n4. Keep neck neutral, gaze toward ceiling.\n5. Lower slowly and repeat.'
        },
        caution: {
            ko: '목을 앞으로 당기거나 팔을 뒤통수에 받치고 밀어 올리지 마세요. 복근이 아닌 목 근육을 사용하게 되어 목 통증 원인이 됩니다.',
            en: 'Never pull the neck forward or use hands to push the head. This uses neck muscles instead of abs and causes neck pain.'
        },
        tip: { ko: '초보자 팁: 완전히 눕지 않아도 됩니다. 어깨만 살짝 들리는 작은 움직임이 완전한 윗몸 일으키기보다 복근에 더 효과적입니다.', en: 'Beginner tip: Full sit-up is unnecessary. A small shoulder lift is actually more effective for abs than full sit-ups.' }
    },
    {
        id: 'leg-raise-cat',
        category: 'abs',
        ko: '레그레이즈', en: 'Leg Raise',
        image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '하복부', en: 'Lower Abs' },
        intensity: 'medium',
        desc: {
            ko: '1. 등을 대고 누워 손을 엉덩이 아래에 받쳐 허리를 지지합니다.\n2. 다리를 붙인 채 천천히 90도까지 들어 올립니다.\n3. 잠깐 멈추고 허리가 바닥에서 뜨지 않게 유지합니다.\n4. 천천히 내리되 바닥에 닿기 직전에 다시 들어 올립니다.\n5. 이 구간을 유지하며 반복합니다.',
            en: '1. Lie on back, hands under hips for lower back support.\n2. Legs together, raise slowly to 90 degrees.\n3. Pause briefly, keeping lower back pressed to floor.\n4. Lower slowly, stop just before floor and raise again.\n5. Maintain this range and repeat.'
        },
        caution: {
            ko: '허리가 바닥에서 뜨면 복근이 아닌 허리 근육을 사용하는 것입니다. 이는 허리 통증의 원인이 됩니다. 무릎을 굽혀 수행하면 난이도가 낮아집니다.',
            en: 'If lower back lifts, you are using back muscles instead of abs, causing back pain. Bending knees reduces difficulty.'
        },
        tip: { ko: '초보자 팁: 무릎을 90도로 굽힌 채 들어 올리는 "니 레이즈"로 시작하세요. 하복부 발달에 가장 효과적인 운동 중 하나입니다.', en: 'Beginner tip: Start with knees bent at 90 degrees ("knee raise"). One of the most effective exercises for lower abs.' }
    },
    {
        id: 'bicycle-crunch',
        category: 'abs',
        ko: '바이시클 크런치', en: 'Bicycle Crunch',
        image: 'https://images.unsplash.com/oeXyYdiLHZY?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '복근·복사근', en: 'Abs & Obliques' },
        intensity: 'medium',
        desc: {
            ko: '1. 등을 대고 누워 손을 귀 옆에 대고 무릎을 들어 올립니다.\n2. 오른쪽 무릎을 가슴 쪽으로 당기며 왼쪽 팔꿈치를 오른 무릎 방향으로 틉니다.\n3. 동시에 왼쪽 다리는 앞으로 뻗습니다.\n4. 자전거를 타듯 반대편으로 바꿉니다.\n5. 리드미컬하게 번갈아 반복합니다.',
            en: '1. Lie on back, hands beside ears, knees up.\n2. Bring right knee toward chest while rotating left elbow toward it.\n3. Simultaneously extend left leg forward.\n4. Switch sides as if pedaling a bicycle.\n5. Alternate rhythmically.'
        },
        caution: {
            ko: '목을 과도하게 앞으로 당기지 마세요. 비틀기는 어깨가 주도해야 하며, 팔꿈치를 무릎에 닿게 하려다 목을 다칠 수 있습니다.',
            en: 'Do not yank the neck forward. The rotation should come from the shoulder. Forcing elbow to knee causes neck strain.'
        },
        tip: { ko: '초보자 팁: 빠르게 하기보다 천천히 비틀며 복사근이 수축되는 느낌에 집중하세요. 속도보다 자극이 중요합니다.', en: 'Beginner tip: Slow and deliberate rotation beats speed. Focus on feeling the oblique squeeze, not how fast you go.' }
    },
    {
        id: 'russian-twist',
        category: 'abs',
        ko: '러시안 트위스트', en: 'Russian Twist',
        image: 'https://images.unsplash.com/r3C6ghRxDxc?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '복사근', en: 'Obliques' },
        intensity: 'medium',
        desc: {
            ko: '1. 바닥에 앉아 무릎을 세우고 상체를 45도 뒤로 기울입니다.\n2. 발을 바닥에서 들거나 (고급) 바닥에 놓고 (초보) 시작합니다.\n3. 양손을 모아 (또는 무게 들고) 몸통을 오른쪽으로 비틀어 손이 바닥에 닿을 듯이 내립니다.\n4. 반대편으로 비틀며 반복합니다.\n5. 시선은 손 방향을 따라갑니다.',
            en: '1. Sit on floor, knees bent, lean torso back 45 degrees.\n2. Feet lifted (advanced) or on floor (beginner).\n3. Hands clasped (or holding weight), rotate torso right bringing hands toward the floor.\n4. Twist to opposite side.\n5. Eyes follow the hands.'
        },
        caution: {
            ko: '허리를 굽히지 말고 상체를 곧게 세운 채 비틀어야 합니다. 비틀기는 흉추(가슴 등뼈) 중심이어야 하며 허리만 비틀면 요통 원인이 됩니다.',
            en: 'Keep torso upright, do not collapse the spine. Rotation should come from the thoracic spine, not just the lower back.'
        },
        tip: { ko: '초보자 팁: 발을 바닥에 놓고 시작하세요. 무게 없이 손만 모아도 충분한 자극을 느낄 수 있습니다.', en: 'Beginner tip: Keep feet on the floor to start. Clasped hands without added weight provides plenty of stimulation.' }
    },
    {
        id: 'v-up',
        category: 'abs',
        ko: 'V업', en: 'V-Up',
        image: 'https://images.unsplash.com/OnC3a9XADzU?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '전체 복근', en: 'Full Abs' },
        intensity: 'high',
        desc: {
            ko: '1. 등을 대고 누워 팔을 머리 위로 쭉 뻗고 다리를 붙입니다.\n2. 동시에 팔과 다리를 위로 들어 올립니다.\n3. 손이 발에 닿도록 복근을 수축하며 V자를 만듭니다.\n4. 정점에서 1초 유지 후 천천히 내립니다.\n5. 바닥에 닿기 직전 다시 들어 올립니다.',
            en: '1. Lie flat, arms extended overhead, legs together.\n2. Simultaneously lift arms and legs upward.\n3. Crunch into a V-shape with hands reaching toward feet.\n4. Hold peak for 1 second then lower slowly.\n5. Stop just before floor and lift again.'
        },
        caution: {
            ko: '허리 통증이 있거나 코어 근력이 약하면 수행하지 마세요. 내려올 때 허리를 드리블처럼 쳐서는 안 됩니다. 코어를 항상 수축 상태로 유지합니다.',
            en: 'Avoid if you have back pain or weak core. Never let the lower back slam to the floor on descent. Keep core engaged throughout.'
        },
        tip: { ko: '초보자 팁: 한 번에 양쪽을 하기 어려우면 상체만 또는 하체만 올리는 것을 번갈아 연습하다가 합쳐나가세요.', en: 'Beginner tip: If full V-ups are too hard, alternate lifting only upper body then only lower body, then combine.' }
    },

    /* ── 🏃 유산소 (Cardio) ── */
    {
        id: 'running',
        category: 'cardio',
        ko: '달리기', en: 'Running',
        image: 'https://images.unsplash.com/mQVWb7kUoOE?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '전신 유산소', en: 'Full Body Cardio' },
        intensity: 'medium',
        desc: {
            ko: '1. 편안한 속도로 조깅부터 시작합니다. (말할 수 있는 속도)\n2. 발 앞꿈치부터 중간 부분으로 착지하여 무릎 충격을 줄입니다.\n3. 팔을 90도로 굽히고 앞뒤로 자연스럽게 흔들며 리듬을 유지합니다.\n4. 시선은 전방 10~15m를 향합니다.\n5. 처음에는 5~10분씩 시작해 점차 시간을 늘려갑니다.',
            en: '1. Begin with a comfortable jogging pace (conversational pace).\n2. Land on mid-foot to reduce knee impact.\n3. Swing arms at 90 degrees naturally for rhythm.\n4. Look 10-15m ahead.\n5. Start with 5-10 minutes and gradually increase duration.'
        },
        caution: {
            ko: '발뒤꿈치 충격 착지(힐 스트라이크)는 무릎과 관절에 부담을 줍니다. 무리하게 빠른 속도로 달리면 부상 위험이 높습니다. 런닝화를 착용하세요.',
            en: 'Heel striking puts stress on knees and joints. Pushing pace too hard too soon increases injury risk. Always wear proper running shoes.'
        },
        tip: { ko: '초보자 팁: 달리기-걷기 인터벌(1분 달리기, 2분 걷기)로 시작하세요. 30분 연속 달리기를 목표로 천천히 나아갑니다.', en: 'Beginner tip: Use run-walk intervals (1 min run, 2 min walk). Gradually build to 30 minutes of continuous running.' }
    },
    {
        id: 'cycling',
        category: 'cardio',
        ko: '자전거 타기', en: 'Cycling',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '하체·유산소', en: 'Legs & Cardio' },
        intensity: 'medium',
        desc: {
            ko: '1. 안장 높이를 페달이 가장 아래에 있을 때 무릎이 약간 굽히는 높이로 맞춥니다.\n2. 손을 핸들에 살짝 올리고 상체를 긴장 없이 유지합니다.\n3. 분당 60~90 RPM의 케이던스로 페달을 밟습니다.\n4. 일정한 속도와 저항을 유지하며 30분 이상 수행합니다.\n5. 실내 자전거는 동일한 효과를 날씨에 관계없이 제공합니다.',
            en: '1. Set saddle height so knee has a slight bend at lowest pedal point.\n2. Rest hands lightly on handlebars, keep upper body relaxed.\n3. Pedal at 60-90 RPM cadence.\n4. Maintain consistent pace and resistance for 30+ minutes.\n5. Stationary bikes provide the same effect regardless of weather.'
        },
        caution: {
            ko: '안장이 너무 낮으면 무릎 부상 원인이 됩니다. 안전을 위해 항상 헬멧을 착용하세요. 장시간 라이딩 후 안장 통증은 패드 자전거복으로 완화할 수 있습니다.',
            en: 'A saddle too low causes knee injury. Always wear a helmet for safety. Saddle soreness from long rides is reduced with padded cycling shorts.'
        },
        tip: { ko: '초보자 팁: 무릎 관절에 달리기보다 부담이 적어 관절 통증이 있는 분에게 이상적입니다. 실내 자전거로 시작하면 날씨 걱정 없이 운동할 수 있습니다.', en: 'Beginner tip: Much easier on knees than running, ideal for those with joint issues. Indoor cycling is a great all-weather start.' }
    },
    {
        id: 'swimming',
        category: 'cardio',
        ko: '수영', en: 'Swimming',
        image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '전신·유산소', en: 'Full Body Cardio' },
        intensity: 'medium',
        desc: {
            ko: '1. 자유형(크롤): 물 위에 엎드려 팔을 교차로 앞으로 뻗으며 나아갑니다.\n2. 다리는 무릎을 약간 굽혀 상하로 차며 추진력을 만듭니다.\n3. 3~4번 저을 때마다 옆으로 고개를 돌려 호흡합니다.\n4. 체력에 맞게 25m ~ 수 km를 목표로 수행합니다.\n5. 워밍업과 쿨다운 스트로크를 포함하세요.',
            en: '1. Freestyle: face down, alternating arm strokes pulling forward.\n2. Kick from hips with slight knee bend for propulsion.\n3. Rotate head to side to breathe every 3-4 strokes.\n4. Set a distance goal from 25m to several km based on fitness.\n5. Include warm-up and cool-down laps.'
        },
        caution: {
            ko: '수영 능력이 부족한 경우 반드시 얕은 레인에서 수행하거나 안전요원이 있는 수영장을 이용하세요. 이어플러그와 수경을 착용하면 부상을 예방할 수 있습니다.',
            en: 'Beginners must swim in shallow lanes or pools with a lifeguard. Ear plugs and goggles prevent discomfort and minor injuries.'
        },
        tip: { ko: '초보자 팁: 가장 부상 위험이 낮은 유산소 운동 중 하나입니다. 관절에 전혀 충격이 없어 재활 환자에게도 권장됩니다. 킥보드로 다리 동작부터 익히세요.', en: 'Beginner tip: One of the lowest injury-risk cardio exercises. Zero joint impact makes it ideal for rehab. Learn the kick with a kickboard first.' }
    },
    {
        id: 'burpee-cat',
        category: 'cardio',
        ko: '버피 테스트', en: 'Burpees',
        image: 'https://images.unsplash.com/photo-1599058917233-97f394156059?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '전신 유산소·근력', en: 'Full Body Cardio & Strength' },
        intensity: 'high',
        desc: {
            ko: '1. 차렷 자세에서 시작합니다.\n2. 무릎을 굽혀 손을 바닥에 짚습니다.\n3. 발을 뒤로 뻗어 푸쉬업 자세를 만듭니다.\n4. 발을 당겨와 일어서며 위로 점프합니다.\n5. 착지 즉시 다음 반복을 시작합니다. (1개 = 1~5단계 완료)',
            en: '1. Start standing upright.\n2. Squat down placing hands on floor.\n3. Jump or step feet back to push-up position.\n4. Bring feet forward, stand and jump overhead.\n5. Land and immediately begin next repetition. (1 rep = steps 1-5)'
        },
        caution: {
            ko: '착지 시 무릎을 부드럽게 굽혀 충격을 흡수하세요. 허리 통증이 있거나 고혈압인 경우 의사와 상담 후 수행하세요. 초보자는 점프 없이 수행합니다.',
            en: 'Land softly with bent knees to absorb impact. Consult a doctor if you have back pain or high blood pressure. Beginners skip the jump.'
        },
        tip: { ko: '초보자 팁: 점프 없이 천천히 각 단계를 수행하는 "노 점프 버피"로 시작하세요. 강도가 높아 짧게(5~8회) 시작해도 충분한 운동량입니다.', en: 'Beginner tip: Start with "no-jump burpees" walking through each step. Even 5-8 reps is a significant workout at first.' }
    },
    {
        id: 'rowing-machine',
        category: 'cardio',
        ko: '로잉 머신', en: 'Rowing Machine',
        image: 'https://images.unsplash.com/JsQHcAe0NGc?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '전신·유산소', en: 'Full Body Cardio' },
        intensity: 'medium',
        desc: {
            ko: '1. 발을 스트랩에 고정하고 무릎을 가슴 쪽으로 당겨 앉습니다. (캐치 자세)\n2. 다리로 밀며 몸통을 약간 뒤로 기울이며 핸들을 배꼽 쪽으로 당깁니다. (드라이브)\n3. 팔을 앞으로 펴며 상체를 앞으로 기울입니다. (피니시)\n4. 무릎을 굽히며 시작 자세로 돌아옵니다. (리커버리)\n5. 리듬감 있게 반복합니다.',
            en: '1. Strap feet in, knees pulled to chest — Catch position.\n2. Push with legs, lean torso slightly back, pull handle to navel — Drive.\n3. Extend arms and lean torso forward — Finish.\n4. Bend knees returning to start — Recovery.\n5. Repeat rhythmically.'
        },
        caution: {
            ko: '팔로만 당기면 등과 어깨 부상 위험이 있습니다. 다리 밀기 → 몸통 기울이기 → 팔 당기기의 순서를 지키는 것이 핵심입니다.',
            en: 'Pulling with only arms risks shoulder and back injury. The correct sequence — legs push → torso lean → arm pull — is essential.'
        },
        tip: { ko: '초보자 팁: 전신 근육의 86%를 사용하는 최고 효율 유산소 운동입니다. 처음에는 낮은 저항으로 순서를 익히는 데 집중하세요.', en: 'Beginner tip: Uses 86% of body muscles — one of the most efficient cardio tools. Start low resistance and focus only on the sequence.' }
    },
    {
        id: 'jump-rope-cat',
        category: 'cardio',
        ko: '줄넘기', en: 'Jump Rope',
        image: 'https://images.unsplash.com/photo-1434682881908-b43d0467b798?auto=format&fit=crop&q=80&w=400',
        primary: { ko: '전신 유산소·민첩성', en: 'Cardio & Agility' },
        intensity: 'medium',
        desc: {
            ko: '1. 줄의 길이를 맞춥니다. (줄 가운데를 밟았을 때 핸들이 겨드랑이에 오는 길이)\n2. 팔꿈치를 몸 가까이 붙이고 손목을 회전시켜 줄을 돌립니다.\n3. 발 앞꿈치로 가볍게 뛰어오릅니다. (2~5cm 높이)\n4. 무릎을 완전히 펴지 않고 약간 굽힌 채 유지합니다.\n5. 리드미컬하게 반복하며 점진적으로 속도를 높입니다.',
            en: '1. Size the rope correctly (when standing on center, handles reach armpits).\n2. Keep elbows close to body and rotate wrists to swing rope.\n3. Jump lightly on the balls of your feet only 2-5cm high.\n4. Keep a slight knee bend throughout.\n5. Find a rhythm and gradually increase speed.'
        },
        caution: {
            ko: '딱딱한 바닥(콘크리트)보다 쿠션이 있는 바닥에서 수행하세요. 발뒤꿈치로 착지하면 무릎과 발목에 무리가 가고 소음도 심합니다.',
            en: 'Jump on cushioned surface, not hard concrete. Heel landing damages knees and ankles and makes excessive noise.'
        },
        tip: { ko: '초보자 팁: 줄 없이 제자리에서 가볍게 뛰는 동작으로 리듬감을 먼저 익히세요. 10분 줄넘기는 30분 조깅에 맞먹는 칼로리 소모 효과가 있습니다.', en: 'Beginner tip: Practice the rhythm by hopping in place without a rope first. 10 minutes of jump rope burns as many calories as 30 minutes of jogging.' }
    }
];
