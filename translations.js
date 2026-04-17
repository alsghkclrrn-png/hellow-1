const translations = {
    ko: {
        'nav-logo': 'AI 운동 코치',
        'nav-coach': 'AI 코치',
        'nav-home': '홈',
        'back-home': '홈으로 돌아가기',
        'home-menu-title': '더 많은 기능 탐색하기',
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

        'mbti-type-ISTJ': {
            name: '현실주의자 (ISTJ)', emoji: '📋',
            summary: 'ISTJ는 철저한 책임감과 실용적 사고방식을 가진 신뢰의 상징입니다. 약속과 규칙을 중시하며, 한 번 시작한 일은 반드시 완수하는 끈기를 지녔습니다. 현실에 기반한 판단력으로 꼼꼼하게 계획을 세우고 체계적으로 실행합니다.',
            strengths: ['강한 의지력과 일관성으로 장기 목표를 꾸준히 달성', '세밀한 계획 수립 및 루틴 유지 능력이 탁월', '신뢰감과 책임감으로 주변의 신임을 받음', '데이터와 수치에 기반해 운동 기록을 체계적으로 관리'],
            challenges: ['변화에 적응하는 데 시간이 걸려 새로운 운동 시도에 소극적일 수 있음', '완벽주의적 성향으로 계획이 틀어졌을 때 동기가 저하될 수 있음', '타인의 페이스를 강요받는 그룹 환경에서 스트레스를 받기 쉬움'],
            motivation: '구체적인 목표 수치와 명확한 진행 기록이 동기 부여의 핵심입니다. 주간 운동 체크리스트와 월별 성과 그래프가 ISTJ에게 강력한 지속 동력이 됩니다.',
            fitness: 'ISTJ에게는 예측 가능하고 체계적인 운동 루틴이 가장 잘 맞습니다. 프로그레시브 오버로드를 적용한 근력 트레이닝, 정해진 시간에 하는 달리기나 수영이 이상적입니다. 운동 일지를 꼼꼼히 기록하면 성취감이 극대화됩니다.',
            cogFunctions: { dominant: 'Si (내향 감각) — 과거 경험을 토대로 신뢰할 수 있는 루틴을 구축', auxiliary: 'Te (외향 사고) — 목표 지향적 행동과 효율적 실행력', tertiary: 'Fi (내향 감정) — 깊은 내면 가치관이 행동의 원동력', inferior: 'Ne (외향 직관) — 새로운 가능성 수용이 성장 과제' }
        },
        'mbti-type-ISFJ': {
            name: '수호자 (ISFJ)', emoji: '🛡️',
            summary: 'ISFJ는 온화함과 헌신으로 주변 사람들을 세심하게 돌보는 따뜻한 성격입니다. 조용하고 겸손하지만 내면에는 강한 책임감과 의리를 품고 있습니다. 안정적인 환경과 신뢰할 수 있는 관계를 소중히 여기며 꾸준함을 발휘합니다.',
            strengths: ['높은 관찰력으로 타인의 필요를 먼저 파악하고 지원', '변함없는 성실함과 꾸준한 노력으로 장기 루틴 유지', '실용적이고 세심한 준비성으로 부상 없이 안전하게 운동', '공감 능력이 뛰어나 파트너 운동에서 시너지 극대화'],
            challenges: ['과도한 배려 성향으로 자신의 필요보다 타인을 우선시함', '변화를 불편하게 느껴 새로운 운동 방식 도입이 더딜 수 있음', '거절하지 못해 과훈련(오버트레이닝)에 빠질 위험이 있음'],
            motivation: '가까운 사람과 함께하는 운동이나 명확한 건강 목표(가족을 위한 건강 등)가 깊은 동기가 됩니다. 작은 성취를 꾸준히 기록하면 지속력이 높아집니다.',
            fitness: '규칙적이고 안정적인 운동 루틴이 ISFJ에게 가장 적합합니다. 필라테스, 요가, 걷기 명상, 수영처럼 몸과 마음을 함께 돌보는 운동을 추천합니다. 소규모 운동 모임에서 지속 동기를 얻기 좋습니다.',
            cogFunctions: { dominant: 'Si (내향 감각) — 익숙하고 안전한 방식으로 신체를 관리', auxiliary: 'Fe (외향 감정) — 타인과의 조화와 공감에서 에너지 충전', tertiary: 'Ti (내향 사고) — 운동 원리를 내면에서 조용히 분석', inferior: 'Ne (외향 직관) — 예측 불가한 변화가 스트레스 요인' }
        },
        'mbti-type-INFJ': {
            name: '옹호자 (INFJ)', emoji: '🔮',
            summary: 'INFJ는 깊은 통찰력과 강한 이상주의를 가진 희귀한 성격 유형입니다. 겉으로는 조용하지만 내면에는 세상을 더 나은 곳으로 만들겠다는 뜨거운 열정이 있습니다. 직관과 감정이 조화를 이루어 타인의 감정을 깊이 이해하고 진정성 있게 행동합니다.',
            strengths: ['깊은 자기성찰로 운동의 목적과 의미를 명확히 설정', '직관적 통찰로 자신의 신체 변화와 피로 신호를 민감하게 감지', '가치관 중심의 강한 내적 동기로 포기하지 않는 끈기 발휘', '장기적 비전 수립 능력으로 체계적인 변화 계획 수립'],
            challenges: ['완벽주의와 이상주의로 인해 현실과의 괴리에서 번아웃 발생', '타인의 기대에 지나치게 민감하여 집단 운동에서 압박감을 느낄 수 있음', '내향적 에너지 관리가 필요해 과훈련 후 회복 시간이 길어질 수 있음'],
            motivation: '개인적 성장과 내적 변화라는 의미 있는 목표가 INFJ를 움직입니다. 운동을 통해 얻는 마음의 평화와 자기 실현이 지속적인 동력이 됩니다.',
            fitness: '요가, 명상 걷기, 태극권처럼 몸과 마음을 통합하는 마인드-바디 운동이 최적입니다. 혼자만의 조용한 공간에서 하는 운동이 에너지를 회복시킵니다. 자연 속 달리기나 수영도 깊은 집중력을 발휘할 수 있어 이상적입니다.',
            cogFunctions: { dominant: 'Ni (내향 직관) — 장기적 신체 변화와 목표를 깊이 통찰', auxiliary: 'Fe (외향 감정) — 주변 사람들의 건강과 행복에 영감을 받음', tertiary: 'Ti (내향 사고) — 운동 과학적 원리를 내면에서 체계화', inferior: 'Se (외향 감각) — 현재 순간에 몰입하는 것이 성장 과제' }
        },
        'mbti-type-INTJ': {
            name: '전략가 (INTJ)', emoji: '♟️',
            summary: 'INTJ는 독립적이고 분석적인 사고로 무장한 전략가입니다. 장기적 목표를 세우고 이를 달성하기 위한 효율적 시스템을 설계하는 데 탁월합니다. 높은 기준을 스스로에게 적용하며, 끊임없이 지식과 역량을 향상시키려는 의지가 강합니다.',
            strengths: ['목표 설정과 장기 계획 수립에서 탁월한 전략적 사고', '독립적으로 자기 주도 훈련을 설계하고 실행하는 능력', '과학적 근거 기반으로 가장 효율적인 운동 방법을 탐구', '높은 집중력으로 목표 달성에 방해되는 요소를 제거'],
            challenges: ['지나친 완벽주의로 시작 단계에서 과도한 계획에 집착할 수 있음', '사회적 운동 환경(그룹 운동)에서 비효율을 느껴 동기가 저하될 수 있음', '단기 즐거움보다 결과에 집착해 번아웃이 올 수 있음'],
            motivation: '명확한 데이터 기반 목표와 최적화된 트레이닝 시스템이 INTJ를 움직입니다. 스스로 설계한 프로그램의 효과를 수치로 확인할 때 가장 큰 성취감을 느낍니다.',
            fitness: '과학적으로 설계된 근력 트레이닝 프로그램(5x5, PPL 등)이 INTJ에게 잘 맞습니다. 심박수 모니터, 운동 앱 등 데이터 기반 도구를 활용하면 시너지가 납니다. 자유로운 1인 훈련 환경을 선호합니다.',
            cogFunctions: { dominant: 'Ni (내향 직관) — 운동 목표와 신체 변화를 장기적으로 설계', auxiliary: 'Te (외향 사고) — 효율적 시스템 구축과 목표 지향 실행', tertiary: 'Fi (내향 감정) — 개인적 가치관이 훈련 방향을 결정', inferior: 'Se (외향 감각) — 현재 신체 감각에 집중하는 것이 성장 과제' }
        },
        'mbti-type-ISTP': {
            name: '장인 (ISTP)', emoji: '🔧',
            summary: 'ISTP는 냉철한 관찰력과 뛰어난 기술적 직관을 가진 실용주의자입니다. 말보다 행동으로 문제를 해결하며, 위기 상황에서도 침착하게 최선의 방법을 찾아냅니다. 자유롭고 독립적인 환경에서 최고의 퍼포먼스를 발휘합니다.',
            strengths: ['뛰어난 신체 감각과 반응속도로 기술 습득이 빠름', '위기 상황에서 침착하게 대처하는 뛰어난 상황 판단력', '효율을 추구하여 불필요한 동작을 최소화하는 깔끔한 기술', '도구와 장비 활용 능력이 뛰어나 기술적 스포츠에서 두각'],
            challenges: ['장기적 루틴 유지보다 즉흥적 행동을 선호해 꾸준함이 부족할 수 있음', '감정 표현이 적어 그룹 운동에서 동료와 깊은 유대를 형성하기 어려울 수 있음', '위험을 즐기는 성향으로 부상 리스크가 높은 활동에 끌릴 수 있음'],
            motivation: '새로운 기술 습득과 신체 도전이 ISTP를 움직입니다. 자신의 기술이 향상되는 것을 직접 느낄 때, 그리고 자율적으로 훈련을 선택할 수 있을 때 최고의 동기를 발휘합니다.',
            fitness: '격투기, 클라이밍, 바이크, 서핑처럼 기술과 신체를 동시에 요구하는 스포츠가 이상적입니다. 혼자 하는 웨이트 트레이닝도 집중력 있게 즐깁니다. 단, 지루한 루틴보다 변화 있는 트레이닝 구성이 필요합니다.',
            cogFunctions: { dominant: 'Ti (내향 사고) — 신체 역학과 동작 원리를 내면에서 분석', auxiliary: 'Se (외향 감각) — 현재 순간의 신체 감각에 완전히 몰입', tertiary: 'Ni (내향 직관) — 장기적 훈련 방향을 직관적으로 감지', inferior: 'Fe (외향 감정) — 타인과의 정서적 연결이 성장 과제' }
        },
        'mbti-type-ISFP': {
            name: '모험가 (ISFP)', emoji: '🎨',
            summary: 'ISFP는 예술적 감수성과 자유로운 영혼을 가진 온화한 성격입니다. 현재 이 순간의 아름다움과 즐거움을 소중히 여기며, 자신만의 독특한 방식으로 세상을 표현합니다. 겸손하지만 강한 가치관을 내면에 품고 있습니다.',
            strengths: ['현재 순간에 몰입하여 운동의 즐거움 자체를 충분히 경험', '신체 감각이 예민해 자신의 컨디션 변화를 빠르게 인지', '유연하고 창의적인 사고로 자신만의 독특한 운동 스타일 개발', '조용한 열정과 내적 가치관으로 자신에게 진정한 운동을 꾸준히 지속'],
            challenges: ['즉흥적인 성향으로 장기 계획보다 기분에 따라 운동 빈도가 불규칙해질 수 있음', '비판에 민감하여 피드백을 받는 환경에서 위축될 수 있음', '목표보다 과정을 중시하여 구체적인 성과 측정에 소홀할 수 있음'],
            motivation: '운동 자체의 즐거움과 자유로운 자기 표현이 ISFP의 핵심 동기입니다. 강요보다 선택, 결과보다 과정을 즐길 수 있는 환경에서 최고의 몰입을 보여줍니다.',
            fitness: '댄스, 줌바, 요가, 아크로바틱, 자전거처럼 자유롭고 표현적인 신체 활동이 잘 맞습니다. 자연 속 하이킹이나 서핑도 ISFP의 감각적 성향과 어울립니다. 엄격한 규칙보다 즐거움 중심의 운동 환경을 만드세요.',
            cogFunctions: { dominant: 'Fi (내향 감정) — 깊은 개인 가치관이 운동 선택의 기준', auxiliary: 'Se (외향 감각) — 현재 신체 감각과 환경을 생생하게 즐김', tertiary: 'Ni (내향 직관) — 장기적 신체 변화를 직관적으로 감지', inferior: 'Te (외향 사고) — 체계적 목표 설정과 실행이 성장 과제' }
        },
        'mbti-type-INFP': {
            name: '중재자 (INFP)', emoji: '🌿',
            summary: 'INFP는 깊은 감수성과 이상주의적 가치관을 지닌 따뜻한 영혼입니다. 내면의 풍부한 세계를 소중히 여기며, 진정성 있는 삶을 추구합니다. 타인의 고통에 깊이 공감하고 세상을 더 나은 곳으로 만들고자 하는 진심 어린 소망을 품고 있습니다.',
            strengths: ['깊은 자기성찰로 운동의 개인적 의미와 목적을 명확히 설정', '창의적 상상력으로 나만의 독특한 운동 루틴과 방식을 개발', '가치와 연결된 목표는 장기간 흔들리지 않는 내적 동기 유지', '감정과 신체 신호에 민감하여 무리 없이 자신을 돌볼 수 있음'],
            challenges: ['이상적 목표와 현실의 괴리에서 좌절감을 느껴 중도 포기할 수 있음', '비판적 환경에 민감하여 경쟁적 운동 문화에서 의욕이 저하될 수 있음', '즉흥적인 감정 기복이 운동 빈도를 불규칙하게 만들 수 있음'],
            motivation: '개인적 성장, 내면의 평화, 또는 소중한 가치(건강한 삶, 자기 사랑 등)와 연결된 목표가 INFP를 지속적으로 움직입니다.',
            fitness: '나만의 속도로 즐기는 개인 운동이 가장 잘 맞습니다. 요가, 조깅, 자전거, 글쓰기와 결합한 운동 일기 등이 INFP의 감수성과 어울립니다. 경쟁보다 자기 성장에 집중하는 환경을 만드세요.',
            cogFunctions: { dominant: 'Fi (내향 감정) — 깊은 가치관과 감정이 운동 동기의 원천', auxiliary: 'Ne (외향 직관) — 다양한 운동 가능성과 새로운 시도를 탐색', tertiary: 'Si (내향 감각) — 익숙한 루틴에서 안정감과 편안함을 찾음', inferior: 'Te (외향 사고) — 체계적 목표 관리와 실행력이 성장 과제' }
        },
        'mbti-type-INTP': {
            name: '논리술사 (INTP)', emoji: '🧩',
            summary: 'INTP는 지칠 줄 모르는 지적 호기심과 분석적 사고의 소유자입니다. 복잡한 개념을 논리적으로 분해하고, 아무도 생각하지 못한 독창적 해결책을 찾는 데 탁월합니다. 독립적이고 내향적이지만 지적 자극을 받을 때 무한한 열정을 발산합니다.',
            strengths: ['운동 과학 원리를 깊이 이해하여 최적의 훈련 방법을 스스로 설계', '논리적 사고로 부상 원인과 개선점을 객관적으로 분석', '지적 자극이 있는 복잡한 기술 습득에 빠른 이해력 발휘', '독립적 훈련 환경에서 깊은 집중력과 몰입 상태 달성'],
            challenges: ['과도한 분석과 계획으로 실제 실행이 늦어지는 분석 마비 현상', '일상적 루틴에 쉽게 지루함을 느껴 꾸준한 운동 유지에 어려움', '감정적 동기 부여보다 논리적 근거를 요구해 즉흥적 운동 참여가 어려움'],
            motivation: '운동의 과학적 원리를 이해하고 검증하는 과정 자체가 INTP에게 동기입니다. 새로운 이론을 직접 실험하고 데이터를 분석하는 방식으로 접근하면 지속력이 높아집니다.',
            fitness: '운동 생리학 기반의 트레이닝 프로그램 설계, 바이오해킹, HRV 모니터링 등 과학적 접근이 어울립니다. 체스나 전략 게임과 유사하게 운동 변수를 실험하는 방식으로 즐기면 지루함을 극복할 수 있습니다.',
            cogFunctions: { dominant: 'Ti (내향 사고) — 운동 원리를 논리적으로 분석하고 내면 시스템화', auxiliary: 'Ne (외향 직관) — 새로운 훈련 방법과 가능성을 끊임없이 탐색', tertiary: 'Si (내향 감각) — 과거 훈련 경험에서 패턴과 규칙을 도출', inferior: 'Fe (외향 감정) — 타인과의 정서적 연결과 그룹 활동이 성장 과제' }
        },
        'mbti-type-ESTP': {
            name: '사업가 (ESTP)', emoji: '⚡',
            summary: 'ESTP는 넘치는 에너지와 대담한 행동력을 가진 모험가입니다. 현재 이 순간을 최대로 즐기며, 즉각적인 행동으로 문제를 해결합니다. 사교적이고 카리스마가 넘치며, 위험과 스릴이 있는 상황에서 진정한 활력을 발휘합니다.',
            strengths: ['뛰어난 신체 반응속도와 순발력으로 운동 기술을 빠르게 체득', '압박 상황에서도 흔들리지 않는 강한 정신력과 승부욕', '현재에 완전히 집중하는 능력으로 운동 중 최고 퍼포먼스 발휘', '다양한 스포츠를 두루 즐기는 넓은 운동 적응력'],
            challenges: ['장기적 체계보다 즉흥적 행동을 선호해 일관된 훈련 계획이 흐트러질 수 있음', '위험 감수 성향으로 무리한 도전에서 부상 위험이 높음', '지루한 루틴을 견디지 못해 기본기 향상보다 새로운 자극을 쫓는 경향'],
            motivation: '경쟁, 즉각적 피드백, 스릴이 ESTP의 핵심 동기입니다. 승부가 있는 경기나 단체 스포츠, 도전적인 퍼포먼스 목표가 최고의 동기 부여 수단입니다.',
            fitness: '팀 스포츠(농구, 축구, 격투기), 익스트림 스포츠(클라이밍, 파쿠르), HIIT 훈련이 ESTP에게 이상적입니다. 경쟁적 환경과 즉각적 결과 피드백이 있는 운동을 선택하세요.',
            cogFunctions: { dominant: 'Se (외향 감각) — 현재 신체 환경과 감각에 완전히 몰입', auxiliary: 'Ti (내향 사고) — 상황을 냉철히 분석하고 즉각적 전략 수립', tertiary: 'Fe (외향 감정) — 그룹 에너지와 사회적 자극에서 활력을 얻음', inferior: 'Ni (내향 직관) — 장기적 결과를 예측하는 것이 성장 과제' }
        },
        'mbti-type-ESFP': {
            name: '연예인 (ESFP)', emoji: '🎉',
            summary: 'ESFP는 삶의 모든 순간을 축제로 만드는 활기찬 자유영혼입니다. 사람들과 어울리고 즐거움을 나누는 것에서 무한한 에너지를 얻습니다. 즉흥적이고 감각적이며, 현재의 기쁨을 최대로 누리는 낙천적인 성격입니다.',
            strengths: ['높은 사교성으로 그룹 운동에서 분위기를 활기차게 이끔', '현재 순간에 완전히 몰입하여 운동의 즐거움을 극대화', '유연한 적응력으로 다양한 운동 환경과 장소에 빠르게 적응', '타인의 감정을 민감하게 읽어 함께하는 운동 시너지 극대화'],
            challenges: ['즉흥적 성향으로 장기 트레이닝 계획보다 그날 기분에 따른 운동이 많아질 수 있음', '지루하거나 반복적인 루틴 훈련에서 집중력이 빠르게 저하됨', '비판적 피드백에 감정적으로 반응하여 코칭 환경이 힘들 수 있음'],
            motivation: '재미, 사람, 즉각적인 긍정 반응이 ESFP를 움직입니다. 친구와 함께하는 운동, 음악이 있는 활기찬 환경, 즉각적인 칭찬과 격려가 최고의 동기 부여 수단입니다.',
            fitness: '그룹 댄스 피트니스(줌바, 에어로빅), 팀 스포츠, 소셜 러닝 클럽이 이상적입니다. 사람들과 에너지를 나누는 환경에서 ESFP는 빛을 발합니다. 음악이 있는 밝고 활기찬 운동 공간을 찾으세요.',
            cogFunctions: { dominant: 'Se (외향 감각) — 현재 순간의 감각적 경험을 최대로 즐김', auxiliary: 'Fi (내향 감정) — 개인 가치관이 운동 방향과 태도를 결정', tertiary: 'Te (외향 사고) — 효율적 목표 달성을 위한 구조화 능력', inferior: 'Ni (내향 직관) — 장기적 건강 계획 수립이 성장 과제' }
        },
        'mbti-type-ENFP': {
            name: '활동가 (ENFP)', emoji: '🌟',
            summary: 'ENFP는 열정과 창의성이 넘치는 자유로운 영혼입니다. 새로운 가능성을 끊임없이 탐색하며, 자신의 에너지로 주변 사람들에게 영감을 줍니다. 인간관계를 깊이 소중히 여기며, 의미 있는 연결 속에서 진정한 활력을 얻습니다.',
            strengths: ['넘치는 열정과 상상력으로 창의적인 운동 프로그램을 스스로 고안', '사람들에게 운동 참여를 독려하는 자연스러운 동기 부여 능력', '다양한 운동을 빠르게 습득하는 높은 학습 적응력', '긍정적 에너지로 그룹 운동 분위기를 밝고 즐겁게 만듦'],
            challenges: ['새로운 것에 빠르게 흥미를 느끼지만 한 운동을 깊이 파고드는 지속력이 부족', '과도한 열정으로 시작은 화려하지만 루틴화 단계에서 흥미를 잃을 수 있음', '타인의 승인에 민감하여 그룹 환경에서 자신의 페이스를 잃을 수 있음'],
            motivation: '의미 있는 목표, 새로운 경험, 그리고 함께하는 사람들이 ENFP의 핵심 동기입니다. 운동에 스토리와 개인적 의미를 부여할 때 장기 지속력이 극대화됩니다.',
            fitness: '다양한 운동을 조합한 크로스트레이닝, 모험적 야외 활동(하이킹, 카약), 그룹 피트니스 클래스가 이상적입니다. 같은 운동을 반복하기보다 새로운 도전을 꾸준히 추가하는 방식으로 흥미를 유지하세요.',
            cogFunctions: { dominant: 'Ne (외향 직관) — 운동에서 새로운 가능성과 아이디어를 끊임없이 탐색', auxiliary: 'Fi (내향 감정) — 개인적 가치와 연결된 운동 목표에서 깊은 동기 획득', tertiary: 'Te (외향 사고) — 효율적 훈련 시스템 구축 능력이 시간과 함께 발전', inferior: 'Si (내향 감각) — 일관된 루틴 유지와 신체 감각 인식이 성장 과제' }
        },
        'mbti-type-ENTP': {
            name: '변론가 (ENTP)', emoji: '💡',
            summary: 'ENTP는 지적 도전과 토론을 즐기는 혁신가입니다. 기존의 틀을 깨고 새로운 방식으로 문제를 해결하는 데 탁월한 능력을 발휘합니다. 호기심이 왕성하고 빠른 사고력을 가지며, 다양한 아이디어를 연결하는 창의적 통합 능력이 뛰어납니다.',
            strengths: ['기존 훈련 방식에 의문을 품고 더 효율적인 방법을 독창적으로 개발', '빠른 학습 능력으로 새로운 운동 기술과 전략을 신속하게 습득', '토론과 분석을 통해 운동 과학적 지식을 빠르게 심화', '다양한 시도를 통해 자신에게 최적화된 맞춤형 트레이닝 발견'],
            challenges: ['하나의 루틴에 쉽게 지루함을 느껴 일관된 훈련 유지가 어려울 수 있음', '시작은 열정적이지만 흥미가 사라지면 중도 포기 경향', '타인의 방식을 비판적으로 분석하다가 협업 환경에서 갈등 발생 가능'],
            motivation: '지적 자극, 새로운 도전, 그리고 기존 한계를 깨는 경험이 ENTP를 움직입니다. 운동을 실험으로 접근하고 새로운 변수를 계속 도입할 때 가장 높은 참여도를 보입니다.',
            fitness: '새로운 스포츠 탐험, 크로스핏, 복합 운동 시스템, 바이오해킹 등 끊임없이 변화하는 트레이닝이 어울립니다. 운동 과학 팟캐스트나 강의와 병행하면 지적 동기와 신체 훈련을 동시에 만족시킬 수 있습니다.',
            cogFunctions: { dominant: 'Ne (외향 직관) — 운동의 새로운 패턴과 가능성을 폭넓게 탐색', auxiliary: 'Ti (내향 사고) — 운동 원리와 전략을 논리적으로 분석하고 내면화', tertiary: 'Fe (외향 감정) — 그룹 에너지와 운동 커뮤니티에서 활력을 얻음', inferior: 'Si (내향 감각) — 일관된 루틴과 신체 감각 유지가 성장 과제' }
        },
        'mbti-type-ESTJ': {
            name: '경영자 (ESTJ)', emoji: '📊',
            summary: 'ESTJ는 타고난 리더십과 강한 실행력을 가진 조직의 핵심입니다. 규칙과 체계를 중시하며, 명확한 기준 아래 효율적으로 목표를 달성합니다. 책임감이 강하고 결단력이 있으며, 어떤 환경에서도 질서와 안정을 만들어냅니다.',
            strengths: ['명확한 목표 설정과 강력한 실행력으로 운동 계획을 차질 없이 이행', '높은 리더십으로 그룹 운동에서 팀을 이끌고 동기를 부여', '체계적인 훈련 일정 관리와 진행 상황 모니터링에 탁월', '강한 책임감으로 약속한 운동 일정을 거의 이탈하지 않음'],
            challenges: ['지나치게 결과 중심적인 사고로 과정의 즐거움을 놓칠 수 있음', '유연성 부족으로 계획이 변경될 때 과도한 스트레스를 받음', '타인의 운동 방식을 통제하려는 성향이 협업 시 갈등을 유발할 수 있음'],
            motivation: '명확한 목표, 체계적 일정, 그리고 측정 가능한 성과가 ESTJ를 움직입니다. 사회적 책임감(팀 목표, 코치 역할 등)이 더해지면 지속력이 극대화됩니다.',
            fitness: '체계적으로 설계된 근력 트레이닝 프로그램, 달리기 대회 참가, 팀 스포츠 리더 역할이 이상적입니다. 운동 앱으로 일정과 성과를 철저히 관리하면 ESTJ의 성향과 완벽히 맞습니다.',
            cogFunctions: { dominant: 'Te (외향 사고) — 효율적 시스템과 목표 달성을 위한 강력한 실행력', auxiliary: 'Si (내향 감각) — 검증된 루틴과 과거 경험을 기반으로 안정적 훈련', tertiary: 'Ne (외향 직관) — 새로운 운동 트렌드와 가능성을 탐색하는 유연성', inferior: 'Fi (내향 감정) — 자신의 감정과 내면 가치를 돌아보는 것이 성장 과제' }
        },
        'mbti-type-ESFJ': {
            name: '집정관 (ESFJ)', emoji: '🤝',
            summary: 'ESFJ는 따뜻한 마음과 뛰어난 사교성으로 주변 사람들을 하나로 모으는 사회의 접착제입니다. 타인의 필요에 민감하게 반응하며, 모두가 편안함을 느낄 수 있는 환경을 만드는 데 탁월합니다. 책임감이 강하고 협력을 즐기는 진정한 팀플레이어입니다.',
            strengths: ['뛰어난 사교성으로 운동 커뮤니티와 그룹에서 응집력을 높임', '타인의 건강과 목표에 진심으로 관심을 가지며 서로 격려', '협동과 팀워크가 필요한 운동에서 최고의 시너지 발휘', '꾸준한 성실함으로 그룹 운동 약속을 거의 빠지지 않음'],
            challenges: ['타인의 기대에 부응하려는 과부하로 자신의 한계를 무시하고 과훈련할 수 있음', '비판을 지나치게 개인적으로 받아들여 동기가 크게 저하될 수 있음', '혼자 하는 운동에서는 외로움을 느껴 지속 동기가 낮아질 수 있음'],
            motivation: '소속감, 사회적 유대, 그리고 타인을 도움으로써 얻는 보람이 ESFJ의 핵심 동기입니다. 함께하는 사람들의 격려와 인정이 있을 때 최고의 퍼포먼스를 냅니다.',
            fitness: '팀 스포츠(배구, 농구, 소셜 테니스), 그룹 피트니스 클래스, 러닝 클럽, 운동 스터디 그룹이 이상적입니다. 사람들과 함께 땀 흘리고 서로를 응원하는 환경에서 ESFJ는 무한한 활력을 얻습니다.',
            cogFunctions: { dominant: 'Fe (외향 감정) — 타인과의 조화와 집단 에너지에서 운동 동기 획득', auxiliary: 'Si (내향 감각) — 검증된 루틴과 익숙한 방식으로 안정적 훈련 유지', tertiary: 'Ne (외향 직관) — 새로운 그룹 활동과 운동 이벤트를 탐색', inferior: 'Ti (내향 사고) — 감정과 분리한 객관적 훈련 분석이 성장 과제' }
        },
        'mbti-type-ENFJ': {
            name: '주인공 (ENFJ)', emoji: '🌈',
            summary: 'ENFJ는 카리스마와 깊은 공감 능력으로 타인에게 긍정적 영향을 미치는 타고난 리더입니다. 사람들의 잠재력을 발견하고 이끄는 데 특별한 재능이 있으며, 집단의 성장을 자신의 성공처럼 기뻐합니다. 따뜻하면서도 단호한 결단력을 함께 지닌 드문 유형입니다.',
            strengths: ['강력한 공감 능력으로 운동 파트너와 깊은 신뢰 관계 형성', '타인의 동기를 끌어내는 자연스러운 코칭 능력', '집단의 에너지를 긍정적으로 이끄는 리더십으로 팀 운동 극대화', '장기적 비전과 목표 설정으로 흔들리지 않는 꾸준한 훈련 지속'],
            challenges: ['타인을 위한 헌신이 지나쳐 자신의 몸 상태 신호를 무시할 위험', '비판에 지나치게 민감하여 부정적 피드백에 크게 흔들릴 수 있음', '주변 사람들의 기대를 짊어지다 번아웃에 빠질 위험'],
            motivation: '타인에게 긍정적 영향을 미치는 목표(건강 롤모델, 코치, 운동 멘토)가 ENFJ의 강력한 동기입니다. 혼자의 성장보다 함께 성장하는 과정에서 진정한 보람을 느낍니다.',
            fitness: '그룹 운동 리더, 퍼스널 트레이닝, 달리기 페이스메이커처럼 타인을 이끄는 역할이 이상적입니다. 팀 스포츠, 피트니스 커뮤니티 활동에서 자신의 에너지를 최대로 발산할 수 있습니다.',
            cogFunctions: { dominant: 'Fe (외향 감정) — 타인의 성장과 집단 조화에서 운동 동기와 에너지를 얻음', auxiliary: 'Ni (내향 직관) — 장기적 신체 목표와 건강 비전을 깊이 통찰', tertiary: 'Se (외향 감각) — 현재 신체 감각과 환경을 직접 즐기는 균형', inferior: 'Ti (내향 사고) — 감정과 독립된 객관적 자기 분석이 성장 과제' }
        },
        'mbti-type-ENTJ': {
            name: '통솔자 (ENTJ)', emoji: '👑',
            summary: 'ENTJ는 강인한 의지와 전략적 사고로 목표를 향해 거침없이 나아가는 지도자입니다. 비효율을 참지 못하며 최단 경로로 최고의 결과를 이끌어냅니다. 대담하고 카리스마가 넘치며, 어떤 도전도 성장의 기회로 전환하는 불굴의 추진력을 지녔습니다.',
            strengths: ['강력한 목표 지향성으로 높은 훈련 강도를 장기간 유지', '전략적 사고로 최단 시간에 최대 결과를 내는 훈련 시스템 설계', '역경과 실패를 연료로 삼아 더 강해지는 회복탄력성', '리더십으로 훈련 파트너와 그룹에 최고의 동기 부여'],
            challenges: ['지나친 결과 집착으로 신체 회복 신호를 무시하고 부상 위험 증가', '완벽주의적 기준이 너무 높아 시작 단계에서 압도당할 수 있음', '타인의 페이스를 인정하지 못해 협동 운동 환경에서 갈등 발생 가능'],
            motivation: '최고를 향한 도전과 측정 가능한 목표 달성이 ENTJ의 핵심 동기입니다. 경쟁, 기록 경신, 이전 한계를 넘는 순간에서 진정한 성취감을 얻습니다.',
            fitness: '고강도 근력 트레이닝, 경쟁적 스포츠, 마라톤이나 철인 3종 등 극한의 도전이 어울립니다. 명확한 수치 목표(1RM 기록, 완주 시간 등)와 데이터 기반 트래킹이 ENTJ의 동기를 극대화합니다.',
            cogFunctions: { dominant: 'Te (외향 사고) — 목표 달성을 위한 효율적 시스템 구축과 강력한 실행', auxiliary: 'Ni (내향 직관) — 장기적 전략과 신체 발전 비전을 깊이 통찰', tertiary: 'Se (외향 감각) — 현재 신체 한계에 직접 도전하며 감각적 경험', inferior: 'Fi (내향 감정) — 내면 감정과 타인의 감정을 존중하는 것이 성장 과제' }
        },

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
        'back-home': 'Back to Home',
        'home-menu-title': 'Explore More Features',
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
        image: 'https://images.unsplash.com/2OgqFKHwF5Q?auto=format&fit=crop&q=80&w=400',
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
        image: 'https://images.unsplash.com/nhMgPIqFHFs?auto=format&fit=crop&q=80&w=400',
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
        image: 'https://images.unsplash.com/r7j7aB47YyM?auto=format&fit=crop&q=80&w=400',
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
        image: 'https://images.unsplash.com/uCiyJr8n5bs?auto=format&fit=crop&q=80&w=400',
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
        image: 'https://images.unsplash.com/d5Q4aBfZclM?auto=format&fit=crop&q=80&w=400',
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
        image: 'https://images.unsplash.com/9Hiysp7jcmQ?auto=format&fit=crop&q=80&w=400',
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
        image: 'https://images.unsplash.com/0HlI76m4jxU?auto=format&fit=crop&q=80&w=400',
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
        image: 'https://images.unsplash.com/MBGv9XkJhuc?auto=format&fit=crop&q=80&w=400',
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
        image: 'https://images.unsplash.com/X4nry_Phyqs?auto=format&fit=crop&q=80&w=400',
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
        image: 'https://images.unsplash.com/8QIkNwjcnck?auto=format&fit=crop&q=80&w=400',
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
        image: 'https://images.unsplash.com/E_y9X4kNzxs?auto=format&fit=crop&q=80&w=400',
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
        image: 'https://images.unsplash.com/W5CQl2gGCGc?auto=format&fit=crop&q=80&w=400',
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
        image: 'https://images.unsplash.com/IYLLF511aOY?auto=format&fit=crop&q=80&w=400',
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
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=400',
        calories: 320, protein: 30, carbs: 15, fat: 12, fiber: 5, sodium: 320,
        ingredients: {
            ko: '• 닭가슴살 100g\n• 양상추 3장\n• 방울토마토 10개\n• 오이 1/2개\n• 파프리카 1/4개\n• 올리브오일 1큰술\n• 레몬즙 1큰술\n• 소금·후추 약간',
            en: '• 100g Chicken breast\n• 3 Lettuce leaves\n• 10 Cherry tomatoes\n• 1/2 Cucumber\n• 1/4 Bell pepper\n• 1 tbsp Olive oil\n• 1 tbsp Lemon juice\n• Salt & pepper to taste'
        },
        recipe: {
            ko: '⏱ 준비 5분 | 조리 15분 | 🔪 냄비, 칼, 도마, 포크 2개\n\n① 닭가슴살 삶기\n냄비에 물 500ml를 붓고 센 불로 끓입니다. 물이 팔팔 끓으면 닭가슴살을 통째로 넣고 중간 불로 낮춰 뚜껑을 반만 덮어 15분간 삶습니다.\n💡 익었는지 확인법: 젓가락으로 가장 두꺼운 부분을 찔러서 나오는 육즙이 투명하면 완성, 분홍색이면 3분 더 삶아주세요.\n\n② 닭가슴살 찢기\n삶은 닭가슴살을 접시에 꺼내 5분간 식힙니다. 너무 뜨거우면 손이 다치므로 꼭 식혀주세요. 고기 결대로 포크 2개로 잡아당겨 가늘게 찢습니다.\n💡 초보자 팁: 뜨거울 때 찢는 것이 식었을 때보다 훨씬 쉽습니다. 뜨거우면 장갑을 끼고 작업하세요.\n\n③ 채소 씻고 준비하기\n모든 채소를 흐르는 찬물에 30초간 씻습니다. 양상추는 손으로 한 입 크기로 뜯고, 방울토마토는 반으로 자르고, 오이는 0.5cm 두께의 반달 모양으로, 파프리카는 가늘게 채 썹니다.\n💡 채소 물기 제거: 채소에 물기가 있으면 드레싱이 묽어집니다. 키친타월로 살짝 눌러 물기를 빼주세요.\n\n④ 드레싱 만들기\n작은 컵이나 그릇에 올리브오일 1큰술 + 레몬즙 1큰술 (레몬이 없으면 식초 1/2큰술) + 소금 1/4 작은술 + 후추 약간을 넣고 포크나 숟가락으로 30초간 빠르게 저어 섞습니다.\n\n⑤ 샐러드 완성하기\n큰 그릇에 양상추를 깔고 나머지 채소를 색깔별로 보기 좋게 올립니다. 찢은 닭가슴살을 가운데 올리고 드레싱을 골고루 뿌립니다. 먹기 직전에 전체를 버무려서 바로 드세요.\n✅ 드레싱은 먹기 직전에 뿌려야 채소가 눅눅해지지 않습니다.',
            en: '⏱ Prep 5 min | Cook 15 min | 🔪 Pot, knife, cutting board, 2 forks\n\n① Boil the chicken\nFill a pot with 500ml water and bring to a full boil over high heat. Add the whole chicken breast, reduce to medium heat, and cook with the lid half-on for 15 minutes.\n💡 Doneness check: Pierce the thickest part with a chopstick — clear juices = done, pink juices = cook 3 more minutes.\n\n② Shred the chicken\nRemove chicken onto a plate and cool for 5 minutes (important — too hot will burn your hands). Using 2 forks, pull the meat apart along the grain into thin strips.\n💡 Beginner tip: Shredding while still warm is much easier than after it cools. Use kitchen gloves if needed.\n\n③ Wash and prep the vegetables\nRinse all vegetables under cold running water for 30 seconds. Tear lettuce into bite-size pieces, halve cherry tomatoes, slice cucumber into 0.5cm half-moons, and julienne the bell pepper.\n💡 Pat vegetables dry with paper towels — excess water will dilute the dressing.\n\n④ Make the dressing\nIn a small cup, combine 1 tbsp olive oil + 1 tbsp lemon juice (or 1/2 tbsp vinegar) + 1/4 tsp salt + pepper. Whisk vigorously with a fork for 30 seconds until combined.\n\n⑤ Assemble the salad\nLayer lettuce in a large bowl, arrange vegetables by color, and pile shredded chicken in the center. Drizzle dressing evenly over everything. Toss just before eating and serve immediately.\n✅ Always dress right before eating — pre-dressed salad gets soggy.'
        },
        vitamins: { ko: '비타민 A · 비타민 C · 비타민 B6 · 칼륨 · 철분', en: 'Vitamin A · Vitamin C · Vitamin B6 · Potassium · Iron' }
    },
    {
        time: 'lunch', goal: 'weight-loss',
        name: { ko: '두부 된장국 + 현미밥', en: 'Tofu Doenjang Soup + Brown Rice' },
        image: 'https://images.pexels.com/photos/15881377/pexels-photo-15881377.jpeg?auto=compress&cs=tinysrgb&w=400',
        calories: 420, protein: 22, carbs: 58, fat: 9, fiber: 7, sodium: 580,
        ingredients: {
            ko: '• 두부 150g (찌개용)\n• 된장 1.5큰술\n• 다시마 육수 또는 물 400ml\n• 애호박 1/4개\n• 대파 1/3대\n• 청양고추 1개 (매운맛 조절)\n• 마늘 1쪽 (다진 것)\n• 현미밥 100g',
            en: '• 150g Firm tofu\n• 1.5 tbsp Doenjang (fermented soybean paste)\n• 400ml Dashi stock or water\n• 1/4 Zucchini\n• 1/3 Green onion\n• 1 Chili pepper (adjust for spice)\n• 1 clove Garlic (minced)\n• 100g Cooked brown rice'
        },
        recipe: {
            ko: '⏱ 준비 8분 | 조리 12분 | 🔪 냄비, 칼, 도마\n\n① 재료 모두 썰기\n두부를 1.5cm 정사각형으로 깍둑썰기 합니다 (너무 작으면 부서지니 주의). 애호박은 반 잘라 0.5cm 두께로 반달 모양, 대파는 45도 어슷썰기, 청양고추는 얇게 송송 썹니다.\n💡 두부 팁: 마트에서 찌개용 두부를 구입하면 단단해서 잘 부서지지 않습니다.\n\n② 육수 만들기\n냄비에 물 400ml를 붓고 센 불로 끓입니다. 물이 끓는 동안 작은 그릇에 된장 1.5큰술을 퍼서 찬물 2큰술과 미리 풀어두면 덩어리 없이 잘 녹습니다.\n\n③ 된장 풀기\n물이 끓으면 미리 풀어둔 된장물을 냄비에 붓고 숟가락으로 5초간 잘 저어줍니다. 된장이 완전히 녹아야 국물이 탁하지 않고 맛있습니다.\n\n④ 채소와 두부 순서대로 넣기\n중간 불로 줄이고 다진 마늘을 먼저 넣습니다. 1분 후 애호박을 넣고, 2분 후 두부를 조심스럽게 넣습니다. 두부는 절대 세게 젓지 말고 냄비를 살살 흔들어주세요.\n⚠️ 두부를 넣은 후 너무 세게 저으면 다 부서집니다!\n\n⑤ 마무리 간 맞추기\n대파와 청양고추를 넣고 1분간 끓입니다. 불 끄기 전 숟가락으로 국물을 맛봅니다. 싱거우면 된장을 1/2큰술 더, 짜면 물 2~3큰술을 추가합니다.\n\n⑥ 현미밥과 함께 완성\n현미밥을 공기에 담고 된장국은 국그릇에 담아 함께 냅니다. 밥 한 숟가락 + 국 한 숟가락 교대로 먹으면 소화도 잘 되고 포만감도 높아집니다.\n✅ 완성 기준: 두부가 깨지지 않고 애호박이 부드럽게 씹히면 완성!',
            en: '⏱ Prep 8 min | Cook 12 min | 🔪 Pot, knife, cutting board\n\n① Cut all ingredients\nCut tofu into 1.5cm cubes (too small = they fall apart). Slice zucchini in half lengthwise then cut into 0.5cm half-moons. Cut green onion diagonally at 45°, and thinly slice the chili.\n💡 Tofu tip: "Firm tofu" (찌개용) from the store holds its shape much better in soups.\n\n② Prepare the broth\nPour 400ml water into a pot and bring to a boil over high heat. While waiting, pre-dissolve 1.5 tbsp doenjang in 2 tbsp cold water in a small cup — this prevents lumps.\n\n③ Dissolve the doenjang\nOnce water boils, pour in the pre-dissolved doenjang liquid and stir for 5 seconds. Fully dissolved doenjang makes a clearer, better-tasting broth.\n\n④ Add ingredients in order\nReduce to medium heat and add minced garlic first. After 1 minute, add zucchini. After 2 more minutes, carefully lower in tofu cubes. Gently shake the pot instead of stirring.\n⚠️ Stirring hard after adding tofu will break it into pieces!\n\n⑤ Final seasoning check\nAdd green onion and chili, simmer 1 minute. Before turning off heat, taste the broth. Too bland? Add 1/2 tbsp more doenjang. Too salty? Add 2–3 tbsp water.\n\n⑥ Serve with brown rice\nScoop rice into a bowl and ladle soup into a separate soup bowl. Alternate spoonfuls of rice and soup — this aids digestion and keeps you fuller longer.\n✅ Done when: tofu is intact and zucchini is tender but not mushy.'
        },
        vitamins: { ko: '비타민 K · 비타민 B12 · 칼슘 · 마그네슘 · 아연 · 유산균', en: 'Vitamin K · Vitamin B12 · Calcium · Magnesium · Zinc · Probiotics' }
    },
    {
        time: 'dinner', goal: 'weight-loss',
        name: { ko: '연어 & 아스파라거스 구이', en: 'Pan-Grilled Salmon & Asparagus' },
        image: 'https://images.pexels.com/photos/842142/pexels-photo-842142.jpeg?auto=compress&cs=tinysrgb&w=400',
        calories: 380, protein: 35, carbs: 8, fat: 22, fiber: 3, sodium: 280,
        ingredients: {
            ko: '• 연어 필렛 150g\n• 아스파라거스 8줄기\n• 레몬 1/2개\n• 마늘 2쪽\n• 올리브오일 2작은술\n• 소금 1/4 작은술\n• 후추 약간\n• 딜(허브) 약간 (없으면 생략 가능)',
            en: '• 150g Salmon fillet\n• 8 Asparagus spears\n• 1/2 Lemon\n• 2 Garlic cloves\n• 2 tsp Olive oil\n• 1/4 tsp Salt\n• Pinch of pepper\n• Fresh dill (optional)'
        },
        recipe: {
            ko: '⏱ 준비 5분 | 조리 12분 | 🔪 프라이팬, 키친타월, 칼, 집게\n\n① 연어 물기 제거 (가장 중요한 첫 단계!)\n연어를 포장에서 꺼내 키친타월 2~3장을 덮어 위에서 꾹 눌러 물기를 완전히 제거합니다. 앞면, 뒷면 모두 닦아주세요.\n⚠️ 물기 제거를 안 하면 팬에서 기름이 튀고, 겉이 바삭하게 되지 않습니다!\n\n② 아스파라거스 손질하기\n아스파라거스 밑동을 손으로 꺾어보면 자연스럽게 딱딱한 부분과 부드러운 부분이 구분됩니다. 꺾이는 지점에서 잘라 버립니다. 마늘은 편으로 얇게 썹니다.\n💡 아스파라거스 두께 확인: 손가락보다 얇은 것이 더 부드럽고 맛있습니다.\n\n③ 연어 밑간하기\n연어 양면에 소금 1/4 작은술과 후추를 골고루 뿌립니다. 5분간 그대로 두어 간이 배게 합니다. 이 시간 동안 팬을 달굽니다.\n\n④ 아스파라거스 먼저 굽기\n팬을 중강불로 2분간 달군 후 올리브오일 1작은술을 두릅니다. 아스파라거스를 넣고 집게로 굴려가며 2~3분간 노릇하게 굽습니다. 소금 한 꼬집 뿌리고 접시에 옮겨두세요.\n\n⑤ 연어 굽기 (껍질면 먼저!)\n같은 팬에 올리브오일 1작은술을 더 두르고 마늘 편을 30초 볶아 향을 냅니다. 연어를 껍질이 아래로 가도록 넣고, 건드리지 말고 4분 굽습니다. 껍질이 바삭하고 가장자리가 하얗게 변하면 뒤집어 3분 더 굽습니다.\n💡 연어 굽기 시간: 두께 2cm 기준 앞4분 + 뒤3분. 두꺼우면 1분씩 추가하세요.\n\n⑥ 완성 및 서빙\n접시에 아스파라거스를 깔고 연어를 올립니다. 레몬 1/2개를 손으로 꽉 짜서 즙을 전체에 뿌리면 완성!\n✅ 연어 중앙을 포크로 가르면 안이 살짝 반투명한 핑크색이면 딱 맞게 익은 것입니다.',
            en: '① Prep the ingredients\nPat the salmon dry with paper towels completely (this ensures a crispy crust). Snap off the tough woody ends of the asparagus. Thinly slice the garlic.\n\n② Season the salmon\nSprinkle salt and pepper evenly on both sides of the salmon. Let it rest for 5 minutes to absorb the seasoning.\n\n③ Grill the asparagus first\nHeat the pan over medium-high heat and add 1 tsp olive oil. Add asparagus and cook for 2–3 minutes, rolling occasionally until lightly browned. Season with a pinch of salt and set aside.\n\n④ Cook the salmon\nAdd remaining 1 tsp olive oil to the same pan and sauté garlic slices until fragrant. Place salmon skin-side down and cook on medium heat for 4 minutes. Flip and cook 3 more minutes until cooked through. (Don\'t overcook — salmon dries out quickly)\n\n⑤ Plate and serve\nArrange asparagus on a plate and place salmon on top. Squeeze fresh lemon juice over everything and garnish with dill if available. Add an extra squeeze of lemon right before eating for extra brightness.'
        },
        vitamins: { ko: '비타민 D · 비타민 B12 · 오메가-3 · 셀레늄 · 칼륨 · 비타민 E', en: 'Vitamin D · Vitamin B12 · Omega-3 · Selenium · Potassium · Vitamin E' }
    },
    // 근육 증가 (muscle-gain)
    {
        time: 'breakfast', goal: 'muscle-gain',
        name: { ko: '오트밀 + 달걀 프라이 3개', en: 'Oatmeal + 3 Fried Eggs' },
        image: 'https://images.pexels.com/photos/4220141/pexels-photo-4220141.jpeg?auto=compress&cs=tinysrgb&w=400',
        calories: 580, protein: 38, carbs: 62, fat: 20, fiber: 8, sodium: 310,
        ingredients: {
            ko: '• 롤드 오트 (오트밀) 80g\n• 달걀 3개\n• 우유 200ml (또는 두유)\n• 바나나 1개\n• 꿀 1작은술\n• 계피 가루 약간 (선택)\n• 조리용 오일 1작은술\n• 소금 1/4 작은술',
            en: '• 80g Rolled oats\n• 3 Eggs\n• 200ml Milk (or soy milk)\n• 1 Banana\n• 1 tsp Honey\n• Pinch of cinnamon (optional)\n• 1 tsp Cooking oil\n• 1/4 tsp Salt'
        },
        recipe: {
            ko: '⏱ 준비 2분 | 조리 8분 | 🔪 작은 냄비, 프라이팬, 나무주걱\n\n① 오트밀 준비하기\n작은 냄비에 우유 200ml를 붓고 중간 불로 올립니다. 우유를 끓이는 동안 오트밀 80g을 계량해 두세요. 우유가 끓으면 거품이 넘치니 불을 약간 낮추세요!\n⚠️ 우유를 고온에서 끓이면 냄비 바닥에 달라붙고 넘칩니다. 항상 중간 불을 유지하세요.\n\n② 오트밀 끓이기\n우유 가장자리에 작은 거품이 오르기 시작하면 오트밀을 한꺼번에 넣습니다. 나무 주걱으로 바닥을 긁으며 계속 저으면서 3~5분간 끓입니다. 숟가락으로 떠서 천천히 흘러내리면 완성입니다. 불을 끄고 소금 한 꼬집 + 꿀 1작은술을 넣어 섞습니다.\n💡 농도 조절: 너무 걸쭉하면 우유 2~3큰술 추가, 너무 묽으면 1분 더 끓이세요.\n\n③ 달걀 프라이 만들기\n프라이팬을 중간 불로 1~2분 달구고 오일 1작은술을 두릅니다. 달걀을 작은 컵에 먼저 깨서 담은 뒤 팬에 미끄러뜨리듯 넣습니다 (이렇게 하면 노른자가 터지지 않음). 뚜껑을 덮지 않고 흰자가 하얗게 굳을 때까지 2~3분 기다립니다.\n💡 반숙 선호: 흰자가 80% 익었을 때 뚜껑을 덮고 30초 더 -> 흰자 완전히 익고 노른자는 반숙 완성.\n\n④ 바나나 슬라이스하기\n바나나 껍질을 벗기고 1cm 두께로 동그랗게 썰어 준비합니다.\n\n⑤ 플레이팅 및 완성\n넓은 그릇에 오트밀을 담고 바나나 슬라이스를 위에 올립니다. 계피 가루가 있으면 살짝 뿌려 향을 더합니다. 달걀 프라이는 옆 접시에 담거나 오트밀 옆에 함께 담습니다.\n\n⑥ 식사 타이밍 팁\n운동 전 30~45분에 먹으면 최적의 효과입니다. 오트밀의 복합 탄수화물 → 운동 에너지 공급, 달걀 단백질 → 근육 합성 지원.\n✅ 3개의 달걀 = 단백질 18g으로 아침 단백질 목표의 절반을 달성!',
            en: '① Cook the oatmeal\nPour 200ml milk into a small pot over medium heat. When milk is warm (steam starting to rise), add 80g oats and stir constantly with a wooden spoon for 3–5 minutes until thickened. Remove from heat and stir in a pinch of salt and honey.\n\n② Fry the eggs\nHeat a non-stick pan over medium heat and add oil. Crack each egg carefully into the pan one at a time. Cook until whites are fully set (about 2–3 minutes). For over-easy, cover with a lid for 30 more seconds.\n\n③ Slice the banana\nPeel the banana and slice into rounds.\n\n④ Plate everything\nSpoon oatmeal into a wide bowl, top with banana slices, and dust with cinnamon if using. Serve fried eggs on the side or next to the oatmeal.\n\n⑤ Timing tip\nFor pre-workout fuel, eat 30–45 minutes before training. The complex carbs in oats provide sustained energy while egg protein supports muscle building.'
        },
        vitamins: { ko: '비타민 B2 · 비타민 D · 콜린 · 마그네슘 · 인 · 아연', en: 'Vitamin B2 · Vitamin D · Choline · Magnesium · Phosphorus · Zinc' }
    },
    {
        time: 'lunch', goal: 'muscle-gain',
        name: { ko: '소고기 브로콜리 볶음 + 흰밥', en: 'Beef & Broccoli Stir-fry + White Rice' },
        image: 'https://images.pexels.com/photos/2313686/pexels-photo-2313686.jpeg?auto=compress&cs=tinysrgb&w=400',
        calories: 650, protein: 45, carbs: 70, fat: 18, fiber: 6, sodium: 620,
        ingredients: {
            ko: '• 소고기 (불고기용 또는 등심) 200g\n• 브로콜리 150g (약 1/2 송이)\n• 마늘 3쪽\n• 간장 2큰술\n• 굴소스 1큰술\n• 참기름 1작은술\n• 설탕 1작은술\n• 식용유 1큰술\n• 흰밥 200g (공기 1그릇)',
            en: '• 200g Beef (sliced thin — ribeye or sirloin)\n• 150g Broccoli (about 1/2 head)\n• 3 Garlic cloves\n• 2 tbsp Soy sauce\n• 1 tbsp Oyster sauce\n• 1 tsp Sesame oil\n• 1 tsp Sugar\n• 1 tbsp Cooking oil\n• 200g Cooked white rice'
        },
        recipe: {
            ko: '⏱ 준비 10분 (재우는 시간 포함) | 조리 10분 | 🔪 프라이팬, 냄비, 칼, 도마\n\n① 소고기 밑간하기 (먼저 시작!)\n소고기를 그릇에 담고 간장 1큰술 + 설탕 1작은술 + 참기름 1작은술을 넣습니다. 손으로 3분간 주물러서 양념이 고기에 잘 배게 합니다. 그대로 10분간 재워둡니다.\n💡 냉장고에서 갓 꺼낸 소고기는 미리 꺼내 10분간 실온에 두면 훨씬 부드럽게 익습니다.\n\n② 브로콜리 손질 및 데치기\n브로콜리를 한 입 크기 (약 3cm) 로 잘라 분리합니다. 냄비에 물 1L + 소금 1작은술을 넣고 센 불로 끓입니다. 물이 끓으면 브로콜리를 넣고 정확히 1분간 데칩니다. 바로 꺼내 찬물에 30초간 담가 색을 고정합니다.\n⚠️ 1분 이상 데치면 흐물흐물해지고 영양소가 파괴됩니다. 타이머를 반드시 사용하세요!\n\n③ 팬 준비 및 마늘 볶기\n팬을 강불로 2분간 달굽니다 (연기가 살짝 올라올 정도). 식용유 1큰술을 두르고 다진 마늘을 넣어 30초간 황금색이 날 때까지 빠르게 볶습니다.\n⚠️ 마늘이 갈색으로 변하면 쓴맛이 나니 타이밍을 잘 보세요.\n\n④ 소고기 볶기\n재워둔 소고기를 팬 전체에 펼쳐 넣습니다. 30초간 건드리지 않고 기다렸다가 뒤집습니다. 강불에서 총 2분간 볶아 겉면이 갈색이 되게 합니다. 고기가 뭉치면 젓가락으로 하나씩 분리해가며 볶으세요.\n\n⑤ 브로콜리 합치고 소스 입히기\n데친 브로콜리를 팬에 넣고 굴소스 1큰술 + 간장 1큰술을 추가합니다. 강불로 1~2분간 전체를 뒤적이며 소스가 고루 배도록 볶습니다. 불을 끄고 참기름 1작은술을 뿌립니다.\n\n⑥ 완성 및 플레이팅\n밥 공기에 흰밥을 소복이 담고 볶음을 밥 위에 올립니다. 취향에 따라 깨소금을 뿌려도 좋습니다.\n✅ 소고기가 질기다면 다음엔 불고기용 얇은 고기를 사용하거나, 밑간 시간을 20분으로 늘려보세요.',
            en: '① Marinate the beef\nMix beef with 1 tbsp soy sauce + 1 tsp sugar + 1 tsp sesame oil. Massage by hand and marinate for 10 minutes. This step tenderizes the meat.\n\n② Blanch the broccoli\nBoil water with 1 tsp salt. Cut broccoli into florets and blanch for 1 minute. (Don\'t go longer or it gets mushy!) Immediately transfer to cold water to stop cooking.\n\n③ Sauté the garlic\nHeat pan over high heat, add cooking oil. Fry minced garlic for 30 seconds until golden. (Watch carefully — don\'t let it burn!)\n\n④ Cook the beef\nSpread marinated beef in the pan and stir-fry on high heat for 2 minutes until browned. Break up any clumps with chopsticks or a spatula.\n\n⑤ Add the broccoli\nAdd blanched broccoli to the pan. Pour in 1 tbsp oyster sauce + remaining 1 tbsp soy sauce. Toss everything over high heat for 1–2 minutes until sauce coats evenly. Turn off heat and drizzle sesame oil.\n\n⑥ Serve with rice\nScoop rice into a bowl and spoon the stir-fry on top.'
        },
        vitamins: { ko: '비타민 C · 비타민 K · 철분 · 아연 · 비타민 B12 · 셀레늄', en: 'Vitamin C · Vitamin K · Iron · Zinc · Vitamin B12 · Selenium' }
    },
    {
        time: 'dinner', goal: 'muscle-gain',
        name: { ko: '닭가슴살 토마토 파스타', en: 'Chicken Breast Tomato Pasta' },
        image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&q=80&w=400',
        calories: 620, protein: 48, carbs: 65, fat: 14, fiber: 5, sodium: 540,
        ingredients: {
            ko: '• 닭가슴살 200g\n• 스파게티 면 80g\n• 토마토 파스타 소스 150ml (병 제품 사용 가능)\n• 양파 1/4개\n• 마늘 2쪽\n• 올리브오일 1큰술\n• 소금 1/2 작은술\n• 후추 약간\n• 파마산 치즈 가루 10g\n• 바질 잎 (없으면 생략)',
            en: '• 200g Chicken breast\n• 80g Spaghetti\n• 150ml Tomato pasta sauce (jar sauce works great)\n• 1/4 Onion\n• 2 Garlic cloves\n• 1 tbsp Olive oil\n• 1/2 tsp Salt\n• Pepper to taste\n• 10g Parmesan cheese\n• Fresh basil (optional)'
        },
        recipe: {
            ko: '⏱ 준비 5분 | 조리 20분 | 🔪 큰 냄비, 프라이팬, 칼, 도마, 집게\n\n① 닭가슴살 밑간 및 준비\n닭가슴살 양면에 소금 1/4작은술, 후추를 고루 뿌립니다. 두께가 2cm 이상이면 비닐봉지에 넣고 손으로 눌러 1.5cm 정도로 납작하게 만들면 고르게 익습니다.\n\n② 파스타 물 올리기 (닭고기 굽는 동안 동시에!)\n큰 냄비에 물 1.5L + 소금 1큰술을 넣고 센 불로 끓입니다. 물 끓는 데 8~10분 걸리니 닭고기 굽기와 동시에 시작하세요.\n💡 파스타 물에 소금을 꼭 넣어야 면에 간이 배어 맛있어집니다.\n\n③ 닭가슴살 굽기\n프라이팬에 올리브오일 1/2큰술을 두르고 중강불로 1~2분 달굽니다. 닭가슴살을 넣고 건드리지 말고 5~6분 굽습니다. 바닥이 황금색으로 변하면 뒤집어 다시 5~6분 더 굽습니다. 칼로 가장 두꺼운 부분을 살짝 잘라보아 분홍색이 없으면 완성!\n⚠️ 익지 않은 닭고기는 식중독 위험이 있습니다. 반드시 속까지 완전히 익혀주세요.\n\n④ 닭고기 슬라이스하기\n구운 닭가슴살을 접시에 꺼내 3분간 쉬게 합니다 (이 휴지 시간이 육즙을 보존함). 결 방향과 직각으로 1cm 두께로 슬라이스합니다.\n\n⑤ 파스타 삶기\n끓는 소금물에 스파게티를 넣고 포장지 시간보다 1분 덜 삶습니다 (보통 8~9분). 면을 건지기 전에 컵으로 파스타 물 한 컵을 꼭 떠두세요!\n\n⑥ 소스 만들기\n닭고기 구운 팬에 올리브오일 1/2큰술을 더 두르고 다진 양파와 마늘을 중간 불에서 2분 볶습니다. 토마토소스를 붓고 2분 끓입니다. 소스가 너무 진하면 파스타 물 2~3큰술로 농도를 맞춥니다.\n\n⑦ 면과 소스 합치고 완성\n건진 파스타를 소스 팬에 넣고 센 불에서 집게로 1분간 뒤적여 소스가 면에 배게 합니다. 접시에 담고 닭가슴살 슬라이스를 올린 뒤 파마산 치즈 가루를 뿌려 완성!\n✅ 파스타가 소스를 잘 흡수했는지 확인: 면 하나를 먹어보아 간이 배어 있으면 완성.',
            en: '① Boil the pasta\nFill a large pot with water, add 1 tbsp salt, and bring to a boil on high heat. Add spaghetti and cook 1 minute less than package directions (usually 8–9 min). Before draining, save 1 cup of pasta water — it\'s great for adjusting sauce thickness.\n\n② Cook the chicken\nSeason chicken with salt and pepper. Heat 1/2 tbsp olive oil in a skillet over medium-high heat. Cook chicken 5–6 minutes per side until internal temp reaches 75°C or no pink remains when sliced at the thickest part. Rest for 3 minutes, then slice thinly.\n\n③ Make the sauce\nIn the same pan, add remaining 1/2 tbsp olive oil. Sauté diced onion and garlic on medium heat for 2 minutes. Pour in tomato sauce and simmer 2 minutes. Add 2–3 tbsp pasta water if sauce gets too thick.\n\n④ Combine pasta and sauce\nAdd drained pasta to the sauce pan and toss over high heat for 1 minute so the sauce coats every strand.\n\n⑤ Plate and finish\nDish pasta onto a plate, layer sliced chicken on top, sprinkle Parmesan cheese, and garnish with basil if available.'
        },
        vitamins: { ko: '비타민 B3 · 비타민 B6 · 비타민 C · 인 · 칼륨 · 리코펜', en: 'Vitamin B3 · Vitamin B6 · Vitamin C · Phosphorus · Potassium · Lycopene' }
    },
    // 건강 관리 (general-fitness)
    {
        time: 'breakfast', goal: 'general-fitness',
        name: { ko: '요거트 그래놀라 볼', en: 'Yogurt Granola Bowl' },
        image: 'https://images.pexels.com/photos/8892364/pexels-photo-8892364.jpeg?auto=compress&cs=tinysrgb&w=400',
        calories: 380, protein: 18, carbs: 52, fat: 10, fiber: 6, sodium: 120,
        ingredients: {
            ko: '• 그릭요거트 200g (플레인, 무가당)\n• 그래놀라 40g\n• 블루베리 50g (냉동 사용 가능)\n• 딸기 3~4개\n• 꿀 1작은술\n• 치아씨드 1작은술 (선택)\n• 아몬드 10개 (선택)',
            en: '• 200g Plain Greek yogurt (unsweetened)\n• 40g Granola\n• 50g Blueberries (frozen works fine)\n• 3–4 Strawberries\n• 1 tsp Honey\n• 1 tsp Chia seeds (optional)\n• 10 Almonds (optional)'
        },
        recipe: {
            ko: '⏱ 조리 없음 | 준비 5분 | 🔪 그릇, 숟가락만 있으면 됩니다!\n\n① 재료 냉장고에서 꺼내기\n그릭요거트, 블루베리, 딸기, 그래놀라를 냉장고에서 꺼냅니다. 그릇도 미리 냉동실에 5분 넣어두면 요거트가 더 오래 차갑게 유지됩니다.\n💡 냉동 블루베리를 사용할 경우: 전날 밤 냉장고로 옮겨 해동시켜 두거나, 전자레인지에 30초 해동 후 사용하세요.\n\n② 과일 씻기\n블루베리를 체에 담아 흐르는 찬물로 30초간 씻고 물기를 뺍니다. 딸기는 꼭지를 따고 씻어서 반으로 자릅니다.\n\n③ 요거트 담기\n그릭요거트를 숟가락으로 퍼서 그릇에 200g 담습니다 (밥숟가락 약 8~10 스쿱). 숟가락 뒷면으로 표면을 부드럽게 고릅니다.\n💡 그릭요거트가 너무 굳어 있으면 꿀 1작은술을 먼저 섞어서 부드럽게 만드세요.\n\n④ 그래놀라 배치하기 (순서가 중요!)\n그래놀라를 요거트 한쪽 가장자리에 몰아서 담습니다. 전체에 뿌리면 금방 눅눅해지므로 한쪽에 쌓아두는 것이 포인트입니다.\n\n⑤ 과일 올리기\n딸기와 블루베리를 그래놀라 반대편에 색깔이 보이도록 예쁘게 올립니다.\n\n⑥ 마무리 토핑\n치아씨드 1작은술을 전체에 골고루 뿌리고, 아몬드를 적당히 올립니다. 마지막으로 꿀을 숟가락에 담아 가늘게 S자로 드리즐합니다.\n✅ 먹는 요령: 요거트 + 그래놀라 + 과일을 한 숟가락에 함께 떠서 먹으면 식감과 맛이 완벽하게 어우러집니다!',
            en: '① Prep the fruit\nRinse blueberries and drain. Remove strawberry stems, wash, and cut in half. For frozen blueberries, transfer to the fridge the night before to thaw overnight.\n\n② Spoon the yogurt\nScoop 200g cold Greek yogurt into a wide bowl. Use the back of a spoon to gently level the surface. (A chilled bowl keeps everything fresher)\n\n③ Add the toppings\nPile granola on one side of the yogurt (don\'t scatter it — it stays crunchier in a cluster). Arrange blueberries and strawberries on the other side.\n\n④ Finishing touches\nSprinkle chia seeds evenly, place almonds, then drizzle honey in a thin stream over everything.\n\n⑤ Eat immediately\nFor the best crunch, eat right away before the granola softens. Busy morning tip: prep yogurt + fruit the night before and add granola just before eating.'
        },
        vitamins: { ko: '비타민 C · 비타민 K · 칼슘 · 프로바이오틱스 · 안토시아닌 · 비타민 B12', en: 'Vitamin C · Vitamin K · Calcium · Probiotics · Anthocyanins · Vitamin B12' }
    },
    {
        time: 'lunch', goal: 'general-fitness',
        name: { ko: '아보카도 토스트 + 수란', en: 'Avocado Toast + Poached Egg' },
        image: 'https://images.pexels.com/photos/4062617/pexels-photo-4062617.jpeg?auto=compress&cs=tinysrgb&w=400',
        calories: 460, protein: 20, carbs: 38, fat: 26, fiber: 9, sodium: 360,
        ingredients: {
            ko: '• 통밀빵 2장\n• 잘 익은 아보카도 1개\n• 달걀 2개\n• 레몬 또는 라임 1/4개\n• 식초 1큰술 (수란용)\n• 소금 1/4 작은술\n• 후추 약간\n• 칠리 플레이크 약간 (선택)\n• 참깨 약간 (선택)',
            en: '• 2 slices Whole wheat bread\n• 1 ripe Avocado\n• 2 Eggs\n• 1/4 Lemon or lime\n• 1 tbsp Vinegar (for poaching)\n• 1/4 tsp Salt\n• Pepper to taste\n• Chili flakes (optional)\n• Sesame seeds (optional)'
        },
        recipe: {
            ko: '⏱ 준비 3분 | 조리 8분 | 🔪 작은 냄비, 포크, 숟가락, 칼\n\n① 아보카도 익힘 확인 (구매 전 체크!)\n아보카도를 엄지손가락으로 살짝 누르세요. 살짝 들어가면 딱 맞게 익은 것, 너무 물렁물렁하면 과숙, 딱딱하면 덜 익은 것입니다. 덜 익은 것은 실온에서 1~2일 더 두세요.\n💡 빠른 숙성법: 바나나와 함께 봉지에 넣어두면 하루 만에 익습니다.\n\n② 아보카도 손질하기\n아보카도를 길게 세로로 한 바퀴 칼집 냅니다. 양손으로 잡고 반대 방향으로 돌려 쪼갭니다. 씨는 칼로 꽂아 돌려 빼거나 숟가락으로 떠냅니다.\n⚠️ 씨 제거 시 칼 사용 주의: 초보자는 숟가락으로 떠내는 방법이 더 안전합니다.\n\n③ 아보카도 으깨기\n숟가락으로 과육을 그릇에 파냅니다. 포크로 원하는 질감까지 으깹니다 (완전히 부드럽게 or 약간 덩어리 있게 - 취향 선택). 레몬즙 1작은술 + 소금 1/4작은술 + 후추를 넣고 잘 섞습니다.\n💡 레몬즙은 아보카도가 갈변하는 것도 막아줍니다.\n\n④ 수란 준비하기 (동시에 빵 굽기 시작!)\n작은 냄비에 물 400ml + 식초 1큰술을 넣고 끓입니다. 물 끓는 동안 토스터에 빵을 넣어 굽습니다. 달걀을 작은 컵이나 소스 그릇에 미리 깨서 담아둡니다.\n\n⑤ 수란 만들기 (핵심!)\n물이 끓으면 중간 불로 줄여 작은 거품이 올라오는 상태를 유지합니다. 숟가락으로 물을 빙글빙글 저어 소용돌이를 만듭니다. 컵에 담긴 달걀을 소용돌이 중심에 아주 천천히 미끄러뜨립니다. 3분간 건드리지 않고 기다립니다.\n⚠️ 뚜껑을 덮거나 젓지 마세요. 흰자가 노른자를 자연스럽게 감싸도록 두세요.\n\n⑥ 완성 및 서빙\n구운 토스트 위에 아보카도 스프레드를 두껍게 펴 바릅니다. 수란을 구멍 숟가락으로 건져 키친타월에 5초 얹어 물기를 빼고, 아보카도 위에 올립니다. 칠리 플레이크와 참깨를 뿌려 완성!\n✅ 수란 성공 확인: 포크로 살짝 눌렀을 때 노른자가 출렁이면 반숙 성공!',
            en: '① Check avocado ripeness\nGently press the avocado — it should yield slightly to pressure. If too hard, leave at room temperature for 1–2 more days.\n\n② Mash the avocado\nSlice avocado lengthwise and twist to separate halves. Remove pit and scoop flesh into a bowl. Mash with a fork to your preferred texture (a little chunky is fine). Mix in lemon juice + salt + pepper.\n\n③ Toast the bread\nToast whole wheat bread in a toaster. No toaster? Toast in a dry pan on medium heat for 1–2 minutes per side.\n\n④ Poach the eggs (key step!)\nBring 400ml water + 1 tbsp vinegar to a boil in a small saucepan. Reduce to a gentle simmer (small bubbles). Stir the water in a circular motion to create a vortex. Crack an egg into a small cup first, then slowly slide it into the center of the vortex. Wait 3–4 minutes without touching — whites will set while yolk stays runny.\n\n⑤ Assemble and serve\nSpread avocado generously over the toast. Lift poached eggs with a slotted spoon, briefly rest on paper towels to remove excess water, then place on top. Sprinkle chili flakes and sesame seeds to finish.'
        },
        vitamins: { ko: '비타민 E · 비타민 K · 엽산 · 건강한 지방 · 칼륨 · 콜린', en: 'Vitamin E · Vitamin K · Folate · Healthy fats · Potassium · Choline' }
    },
    {
        time: 'dinner', goal: 'general-fitness',
        name: { ko: '고등어구이 + 나물반찬', en: 'Grilled Mackerel + Namul Sides' },
        image: 'https://images.pexels.com/photos/8352799/pexels-photo-8352799.jpeg?auto=compress&cs=tinysrgb&w=400',
        calories: 490, protein: 36, carbs: 42, fat: 18, fiber: 8, sodium: 480,
        ingredients: {
            ko: '• 고등어 1마리 (또는 토막 2조각)\n• 소금 1/2 작은술\n• 청주 또는 맛술 1큰술\n• 시금치 150g\n• 콩나물 100g\n• 참기름 1작은술\n• 다진 마늘 1/2 작은술\n• 간장 1작은술\n• 깨소금 약간\n• 현미밥 150g',
            en: '• 1 Mackerel (or 2 fillets)\n• 1/2 tsp Salt\n• 1 tbsp Rice wine or mirin\n• 150g Spinach\n• 100g Bean sprouts\n• 1 tsp Sesame oil\n• 1/2 tsp Minced garlic\n• 1 tsp Soy sauce\n• Sesame seeds to taste\n• 150g Cooked brown rice'
        },
        recipe: {
            ko: '⏱ 준비 10분 | 조리 20분 | 🔪 프라이팬, 냄비 2개, 키친타월, 칼, 도마\n\n① 고등어 손질하기\n고등어를 흐르는 찬물에 씻은 뒤 키친타월로 앞뒤 물기를 완전히 닦습니다 (물기가 남으면 기름이 튀고 껍질이 안 바삭해집니다). 칼로 앞뒤에 대각선 칼집을 2~3군데 냅니다. 청주(또는 맛술)를 앞뒤에 고루 바르고 5분간 두어 비린내를 없앤 뒤, 소금을 골고루 뿌립니다.\n💡 초보자 팁: 고등어 토막 제품을 사면 손질이 이미 되어 있어 훨씬 편합니다. 마트에서 "고등어 순살" 또는 "고등어 토막"을 찾으세요.\n⚠️ 칼집을 내지 않으면 굽는 중 껍질이 터지거나 뒤틀릴 수 있습니다. 반드시 칼집을 내세요.\n\n② 고등어 굽기\n프라이팬에 식용유를 키친타월로 얇게 펴 바르고 중강불로 2분간 달굽니다. 고등어를 껍질 면이 아래로 가도록 올리고 5분간 절대 건드리지 않습니다.\n5분 후 껍질이 노릇하고 바삭해지면, 뒤집개를 껍질 아래로 조심스럽게 밀어 넣어 뒤집습니다. 중간 불로 줄이고 3~4분 더 굽습니다.\n💡 뚜껑을 살짝 비스듬히 덮으면 속까지 빠르게 익고 기름 튀는 것도 줄어듭니다.\n✅ 익었는지 확인: 젓가락으로 두꺼운 부분을 살짝 눌러보아 힘없이 쑥 들어가면 완성!\n\n③ 시금치 나물 만들기\n냄비에 물을 넉넉히 끓입니다. 물이 팔팔 끓으면 시금치를 넣고 30초~1분간 데칩니다. 시금치가 선명한 초록색으로 변하면 바로 건져냅니다.\n찬물(또는 얼음물)에 즉시 담가 10초간 식힙니다. 양손으로 꼭 짜서 물기를 완전히 제거합니다.\n참기름 1/2 작은술 + 다진 마늘 1/4 작은술 + 소금 약간을 넣고 조물조물 무칩니다.\n⚠️ 1분 이상 데치면 물렁해지고 색도 누래집니다. 30초~1분이 핵심!\n\n④ 콩나물 나물 만들기\n냄비에 콩나물을 담고 물 3큰술을 넣습니다. 뚜껑을 단단히 덮고 중간 불로 5분간 찝니다.\n⚠️ 찌는 동안 절대 뚜껑을 열지 마세요! 열면 비린내가 심하게 납니다. 타이머를 맞춰두세요.\n5분 후 불을 끄고 그대로 2분간 뜸을 들입니다. 그릇에 옮겨 식힌 뒤 간장 1작은술 + 참기름 1/2 작은술 + 다진 마늘 1/4 작은술을 넣고 무칩니다.\n💡 콩나물이 너무 많이 익어 물렁해졌다면 찬물에 헹궈 물기를 짜면 식감이 살아납니다.\n\n⑤ 완성 및 플레이팅\n현미밥을 그릇 한쪽에 담습니다. 고등어구이를 중앙에, 시금치 나물과 콩나물 나물을 각각 옆에 보기 좋게 배치합니다. 나물 위에 깨소금을 솔솔 뿌리면 완성!\n✅ 이것이 완벽한 한국식 균형 식단입니다 — 탄수화물(밥) + 단백질·오메가3(고등어) + 비타민·미네랄(나물). 밥, 나물, 생선을 번갈아 먹으면 가장 맛있습니다.',
            en: '① Prep the mackerel\nRinse mackerel under cold water and pat completely dry with paper towels. Score 2–3 diagonal cuts on each side (this helps salt penetrate and reduces fishy odor). Brush with rice wine and let sit 5 minutes, then sprinkle salt evenly.\n\n② Grill the mackerel\nHeat a lightly oiled pan over medium-high heat. Place mackerel skin-side down and cook undisturbed for 5 minutes until the skin is golden and crispy. Carefully flip and cook 3–4 more minutes. (A loose lid placed on top helps cook the inside faster)\n\n③ Make spinach namul\nBoil water and blanch spinach for 30–60 seconds until bright green. Transfer immediately to cold water, then squeeze out all the water with your hands. Season with 1/2 tsp sesame oil + 1/4 tsp minced garlic + pinch of salt and mix well.\n\n④ Make bean sprout namul\nPlace bean sprouts in a pot with 3 tbsp water. Cover tightly and steam on medium heat for 5 minutes. (Do NOT open the lid — it causes a beany smell!) Once cooled, season with 1 tsp soy sauce + 1/2 tsp sesame oil + 1/4 tsp garlic.\n\n⑤ Plate and serve\nServe brown rice in a bowl alongside the grilled mackerel and the two namul sides arranged neatly. Sprinkle sesame seeds over the namul. Eating rice, namul, and fish together provides a perfectly balanced Korean meal.'
        },
        vitamins: { ko: '비타민 D · 비타민 B12 · 오메가-3 · 칼슘 · 비타민 K · 철분', en: 'Vitamin D · Vitamin B12 · Omega-3 · Calcium · Vitamin K · Iron' }
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
