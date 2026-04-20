// =====================================================
// 운동 SVG 일러스트 자동 생성기
// 운동명·카테고리에 맞는 커스텀 이미지를 SVG로 생성
// =====================================================

const EX_COLORS = {
  abs:       { c1: '#818cf8', c2: '#6366f1', dark: '#1e1b4b' },
  arms:      { c1: '#60a5fa', c2: '#3b82f6', dark: '#0c1a2e' },
  chest:     { c1: '#fb923c', c2: '#f97316', dark: '#1c0f02' },
  back:      { c1: '#34d399', c2: '#10b981', dark: '#022c22' },
  legs:      { c1: '#f472b6', c2: '#ec4899', dark: '#1a0a14' },
  cardio:    { c1: '#fbbf24', c2: '#f59e0b', dark: '#1c1400' },
  shoulders: { c1: '#a78bfa', c2: '#8b5cf6', dark: '#13002c' },
  stretch:   { c1: '#67e8f9', c2: '#06b6d4', dark: '#001c22' },
};

// ── 포즈별 SVG 스틱피겨 (400×260 좌표계) ──────────────────────
const POSES = {

  // 플랭크 / 푸쉬업 계열 (엎드려 수평)
  plank: (c) => `
    <circle cx="82"  cy="118" r="19" stroke="${c}" stroke-width="3" fill="none"/>
    <line x1="101" y1="126" x2="312" y2="138" stroke="${c}" stroke-width="3.5"/>
    <line x1="118" y1="130" x2="98"  y2="165" stroke="${c}" stroke-width="3"/>
    <line x1="98"  y1="165" x2="80"  y2="178" stroke="${c}" stroke-width="2.5"/>
    <line x1="145" y1="133" x2="130" y2="168" stroke="${c}" stroke-width="3"/>
    <line x1="130" y1="168" x2="112" y2="180" stroke="${c}" stroke-width="2.5"/>
    <line x1="288" y1="137" x2="300" y2="175" stroke="${c}" stroke-width="3"/>
    <line x1="300" y1="175" x2="314" y2="192" stroke="${c}" stroke-width="2.5"/>
    <line x1="308" y1="137" x2="322" y2="173" stroke="${c}" stroke-width="3"/>
    <line x1="322" y1="173" x2="338" y2="190" stroke="${c}" stroke-width="2.5"/>`,

  // 스쿼트 계열 (무릎 굽힘)
  squat: (c) => `
    <circle cx="200" cy="45"  r="21" stroke="${c}" stroke-width="3" fill="none"/>
    <line x1="200" y1="66"  x2="197" y2="128" stroke="${c}" stroke-width="3.5"/>
    <line x1="197" y1="93"  x2="157" y2="110" stroke="${c}" stroke-width="3"/>
    <line x1="157" y1="110" x2="148" y2="140" stroke="${c}" stroke-width="2.5"/>
    <line x1="197" y1="93"  x2="237" y2="110" stroke="${c}" stroke-width="3"/>
    <line x1="237" y1="110" x2="246" y2="140" stroke="${c}" stroke-width="2.5"/>
    <line x1="197" y1="128" x2="162" y2="170" stroke="${c}" stroke-width="3.5"/>
    <line x1="162" y1="170" x2="145" y2="218" stroke="${c}" stroke-width="3"/>
    <line x1="145" y1="218" x2="143" y2="238" stroke="${c}" stroke-width="2.5"/>
    <line x1="197" y1="128" x2="232" y2="170" stroke="${c}" stroke-width="3.5"/>
    <line x1="232" y1="170" x2="252" y2="218" stroke="${c}" stroke-width="3"/>
    <line x1="252" y1="218" x2="256" y2="238" stroke="${c}" stroke-width="2.5"/>`,

  // 런지 계열 (한 발 앞으로)
  lunge: (c) => `
    <circle cx="205" cy="44"  r="21" stroke="${c}" stroke-width="3" fill="none"/>
    <line x1="205" y1="65"  x2="202" y2="125" stroke="${c}" stroke-width="3.5"/>
    <line x1="202" y1="90"  x2="175" y2="108" stroke="${c}" stroke-width="3"/>
    <line x1="175" y1="108" x2="168" y2="138" stroke="${c}" stroke-width="2.5"/>
    <line x1="202" y1="90"  x2="230" y2="108" stroke="${c}" stroke-width="3"/>
    <line x1="230" y1="108" x2="238" y2="138" stroke="${c}" stroke-width="2.5"/>
    <line x1="202" y1="125" x2="248" y2="170" stroke="${c}" stroke-width="3.5"/>
    <line x1="248" y1="170" x2="285" y2="190" stroke="${c}" stroke-width="3"/>
    <line x1="285" y1="190" x2="288" y2="238" stroke="${c}" stroke-width="2.5"/>
    <line x1="202" y1="125" x2="168" y2="168" stroke="${c}" stroke-width="3.5"/>
    <line x1="168" y1="168" x2="158" y2="215" stroke="${c}" stroke-width="3"/>
    <line x1="158" y1="215" x2="150" y2="238" stroke="${c}" stroke-width="2.5"/>`,

  // 바이셉 컬 (팔 굽혀 덤벨 들기)
  curl: (c) => `
    <circle cx="200" cy="52"  r="21" stroke="${c}" stroke-width="3" fill="none"/>
    <line x1="200" y1="73"  x2="200" y2="138" stroke="${c}" stroke-width="3.5"/>
    <line x1="200" y1="96"  x2="158" y2="112" stroke="${c}" stroke-width="3"/>
    <line x1="158" y1="112" x2="152" y2="78"  stroke="${c}" stroke-width="3"/>
    <circle cx="152" cy="68"  r="10" stroke="${c}" stroke-width="2" fill="${c}" fill-opacity="0.35"/>
    <line x1="200" y1="96"  x2="242" y2="112" stroke="${c}" stroke-width="3"/>
    <line x1="242" y1="112" x2="248" y2="152" stroke="${c}" stroke-width="2.5"/>
    <line x1="200" y1="138" x2="180" y2="192" stroke="${c}" stroke-width="3.5"/>
    <line x1="180" y1="192" x2="172" y2="235" stroke="${c}" stroke-width="3"/>
    <line x1="200" y1="138" x2="220" y2="192" stroke="${c}" stroke-width="3.5"/>
    <line x1="220" y1="192" x2="228" y2="235" stroke="${c}" stroke-width="3"/>`,

  // 오버헤드 프레스 / 어깨 운동 (팔 위로)
  press: (c) => `
    <circle cx="200" cy="55"  r="21" stroke="${c}" stroke-width="3" fill="none"/>
    <line x1="200" y1="76"  x2="200" y2="142" stroke="${c}" stroke-width="3.5"/>
    <line x1="200" y1="98"  x2="152" y2="78"  stroke="${c}" stroke-width="3"/>
    <line x1="152" y1="78"  x2="145" y2="45"  stroke="${c}" stroke-width="3"/>
    <circle cx="145" cy="36"  r="9"  stroke="${c}" stroke-width="2" fill="${c}" fill-opacity="0.35"/>
    <line x1="200" y1="98"  x2="248" y2="78"  stroke="${c}" stroke-width="3"/>
    <line x1="248" y1="78"  x2="255" y2="45"  stroke="${c}" stroke-width="3"/>
    <circle cx="255" cy="36"  r="9"  stroke="${c}" stroke-width="2" fill="${c}" fill-opacity="0.35"/>
    <line x1="200" y1="142" x2="180" y2="196" stroke="${c}" stroke-width="3.5"/>
    <line x1="180" y1="196" x2="172" y2="236" stroke="${c}" stroke-width="3"/>
    <line x1="200" y1="142" x2="220" y2="196" stroke="${c}" stroke-width="3.5"/>
    <line x1="220" y1="196" x2="228" y2="236" stroke="${c}" stroke-width="3"/>`,

  // 크런치 / 복근 (누워서 상체 들기)
  crunch: (c) => `
    <line x1="40"  y1="208" x2="160" y2="200" stroke="${c}" stroke-width="3"/>
    <line x1="160" y1="200" x2="220" y2="172" stroke="${c}" stroke-width="3.5"/>
    <line x1="220" y1="172" x2="262" y2="206" stroke="${c}" stroke-width="3"/>
    <line x1="262" y1="206" x2="356" y2="210" stroke="${c}" stroke-width="3"/>
    <line x1="220" y1="172" x2="205" y2="132" stroke="${c}" stroke-width="3.5"/>
    <circle cx="195" cy="112" r="20" stroke="${c}" stroke-width="3" fill="none"/>
    <line x1="205" y1="132" x2="172" y2="150" stroke="${c}" stroke-width="3"/>
    <line x1="172" y1="150" x2="160" y2="178" stroke="${c}" stroke-width="2.5"/>
    <line x1="205" y1="132" x2="238" y2="150" stroke="${c}" stroke-width="3"/>
    <line x1="238" y1="150" x2="250" y2="178" stroke="${c}" stroke-width="2.5"/>`,

  // 브리지 / 힙 쓰러스트 (누워서 골반 올리기)
  bridge: (c) => `
    <line x1="40"  y1="205" x2="115" y2="205" stroke="${c}" stroke-width="3"/>
    <circle cx="100" cy="185" r="19" stroke="${c}" stroke-width="3" fill="none"/>
    <line x1="115" y1="205" x2="158" y2="158" stroke="${c}" stroke-width="3.5"/>
    <line x1="158" y1="158" x2="212" y2="128" stroke="${c}" stroke-width="3.5"/>
    <line x1="212" y1="128" x2="258" y2="158" stroke="${c}" stroke-width="3.5"/>
    <line x1="258" y1="158" x2="290" y2="205" stroke="${c}" stroke-width="3.5"/>
    <line x1="290" y1="205" x2="362" y2="205" stroke="${c}" stroke-width="3"/>
    <line x1="158" y1="158" x2="145" y2="192" stroke="${c}" stroke-width="3"/>
    <line x1="212" y1="128" x2="196" y2="108" stroke="${c}" stroke-width="3"/>
    <line x1="196" y1="108" x2="180" y2="95"  stroke="${c}" stroke-width="2.5"/>`,

  // 풀업 / 매달리기 (철봉에 매달려 올라가기)
  pullup: (c) => `
    <line x1="90"  y1="38"  x2="310" y2="38"  stroke="${c}" stroke-width="4.5"/>
    <rect x="85"   y="32"   width="16" height="12" rx="3" fill="${c}" opacity="0.6"/>
    <rect x="299"  y="32"   width="16" height="12" rx="3" fill="${c}" opacity="0.6"/>
    <circle cx="200" cy="92"  r="21" stroke="${c}" stroke-width="3" fill="none"/>
    <line x1="200" y1="113" x2="200" y2="178" stroke="${c}" stroke-width="3.5"/>
    <line x1="200" y1="128" x2="155" y2="90"  stroke="${c}" stroke-width="3"/>
    <line x1="155" y1="90"  x2="150" y2="46"  stroke="${c}" stroke-width="3"/>
    <line x1="200" y1="128" x2="245" y2="90"  stroke="${c}" stroke-width="3"/>
    <line x1="245" y1="90"  x2="250" y2="46"  stroke="${c}" stroke-width="3"/>
    <line x1="200" y1="178" x2="182" y2="225" stroke="${c}" stroke-width="3.5"/>
    <line x1="182" y1="225" x2="175" y2="248" stroke="${c}" stroke-width="3"/>
    <line x1="200" y1="178" x2="218" y2="225" stroke="${c}" stroke-width="3.5"/>
    <line x1="218" y1="225" x2="225" y2="248" stroke="${c}" stroke-width="3"/>`,

  // 로우 / 데드리프트 (앞으로 숙여 당기기)
  row: (c) => `
    <circle cx="165" cy="58"  r="21" stroke="${c}" stroke-width="3" fill="none"/>
    <line x1="165" y1="79"  x2="162" y2="148" stroke="${c}" stroke-width="3.5" transform="rotate(-28 165 79)"/>
    <line x1="152" y1="118" x2="108" y2="138" stroke="${c}" stroke-width="3"/>
    <line x1="108" y1="138" x2="95"  y2="172" stroke="${c}" stroke-width="2.5"/>
    <line x1="152" y1="118" x2="210" y2="105" stroke="${c}" stroke-width="3"/>
    <line x1="210" y1="105" x2="258" y2="122" stroke="${c}" stroke-width="3"/>
    <circle cx="269" cy="122" r="11" stroke="${c}" stroke-width="2.5" fill="${c}" fill-opacity="0.3"/>
    <line x1="148" y1="148" x2="135" y2="200" stroke="${c}" stroke-width="3.5"/>
    <line x1="135" y1="200" x2="133" y2="242" stroke="${c}" stroke-width="3"/>
    <line x1="165" y1="148" x2="195" y2="196" stroke="${c}" stroke-width="3.5"/>
    <line x1="195" y1="196" x2="200" y2="242" stroke="${c}" stroke-width="3"/>`,

  // 달리기 / 유산소 (한 발 들고 달리는 자세)
  running: (c) => `
    <circle cx="195" cy="44"  r="21" stroke="${c}" stroke-width="3" fill="none"/>
    <line x1="195" y1="65"  x2="190" y2="130" stroke="${c}" stroke-width="3.5" transform="rotate(-8 195 65)"/>
    <line x1="185" y1="95"  x2="143" y2="108" stroke="${c}" stroke-width="3"/>
    <line x1="143" y1="108" x2="128" y2="142" stroke="${c}" stroke-width="2.5"/>
    <line x1="192" y1="95"  x2="238" y2="78"  stroke="${c}" stroke-width="3"/>
    <line x1="238" y1="78"  x2="262" y2="108" stroke="${c}" stroke-width="2.5"/>
    <line x1="185" y1="130" x2="158" y2="178" stroke="${c}" stroke-width="3.5"/>
    <line x1="158" y1="178" x2="130" y2="212" stroke="${c}" stroke-width="3"/>
    <line x1="130" y1="212" x2="122" y2="242" stroke="${c}" stroke-width="2.5"/>
    <line x1="188" y1="130" x2="218" y2="172" stroke="${c}" stroke-width="3.5"/>
    <line x1="218" y1="172" x2="268" y2="160" stroke="${c}" stroke-width="3"/>`,

  // 서있는 기본 자세 (카프레이즈, 스탠딩 스트레칭 등)
  standing: (c) => `
    <circle cx="200" cy="50"  r="21" stroke="${c}" stroke-width="3" fill="none"/>
    <line x1="200" y1="71"  x2="200" y2="138" stroke="${c}" stroke-width="3.5"/>
    <line x1="200" y1="95"  x2="158" y2="118" stroke="${c}" stroke-width="3"/>
    <line x1="158" y1="118" x2="148" y2="152" stroke="${c}" stroke-width="2.5"/>
    <line x1="200" y1="95"  x2="242" y2="118" stroke="${c}" stroke-width="3"/>
    <line x1="242" y1="118" x2="252" y2="152" stroke="${c}" stroke-width="2.5"/>
    <line x1="200" y1="138" x2="182" y2="195" stroke="${c}" stroke-width="3.5"/>
    <line x1="182" y1="195" x2="175" y2="240" stroke="${c}" stroke-width="3"/>
    <line x1="200" y1="138" x2="218" y2="195" stroke="${c}" stroke-width="3.5"/>
    <line x1="218" y1="195" x2="225" y2="240" stroke="${c}" stroke-width="3"/>`,

  // 스트레칭 (팔 뻗기 / 상체 비틀기)
  stretch: (c) => `
    <circle cx="200" cy="52"  r="21" stroke="${c}" stroke-width="3" fill="none"/>
    <line x1="200" y1="73"  x2="200" y2="138" stroke="${c}" stroke-width="3.5"/>
    <line x1="200" y1="96"  x2="130" y2="88"  stroke="${c}" stroke-width="3"/>
    <line x1="130" y1="88"  x2="112" y2="108" stroke="${c}" stroke-width="2.5"/>
    <line x1="200" y1="96"  x2="270" y2="88"  stroke="${c}" stroke-width="3"/>
    <line x1="270" y1="88"  x2="288" y2="108" stroke="${c}" stroke-width="2.5"/>
    <line x1="200" y1="138" x2="180" y2="194" stroke="${c}" stroke-width="3.5"/>
    <line x1="180" y1="194" x2="172" y2="238" stroke="${c}" stroke-width="3"/>
    <line x1="200" y1="138" x2="220" y2="194" stroke="${c}" stroke-width="3.5"/>
    <line x1="220" y1="194" x2="228" y2="238" stroke="${c}" stroke-width="3"/>`,
};

// ── 운동 ID → 포즈 매핑 ────────────────────────────────────────
const EXERCISE_POSE_MAP = {
  // 복근
  'plank':'plank','side-plank':'plank','mountain-climber':'plank','bird-dog':'plank',
  'crunch':'crunch','leg-raise':'crunch','bicycle-crunch':'crunch','flutter-kick':'crunch',
  'russian-twist':'crunch','dead-bug':'crunch','v-sit':'crunch','reverse-crunch':'crunch',
  'v-up':'crunch','inchworm':'plank',
  'plank-cat':'plank','crunch-cat':'crunch','leg-raise-cat':'crunch',
  // 팔
  'dumbbell-curl':'curl','bicep-curl':'curl','hammer-curl':'curl','concentration-curl':'curl',
  'overhead-tricep':'press','overhead-tricep-ext':'press','lateral-raise':'press',
  'tricep-dip':'standing','tricep-dip-cat':'standing',
  'pull-up':'pullup','pull-up-back':'pullup','pull-up-cat':'pullup',
  'face-pull':'row','face-pull-cat':'row','dumbbell-row':'row',
  // 가슴
  'push-up':'plank','pike-push-up':'plank','diamond-push-up':'plank','incline-push-up':'plank',
  'push-up-cat':'plank','incline-push-up-cat':'plank','decline-push-up':'plank',
  'diamond-push-up-cat':'plank','wide-push-up-cat':'plank','dumbbell-chest-fly':'crunch',
  // 등
  'deadlift':'row','hip-hinge':'row','bent-over-row':'row','romanian-deadlift':'row',
  'superman':'plank','superman-cat':'plank',
  'lat-pulldown':'pullup','seated-cable-row':'row',
  // 하체
  'squat':'squat','wide-squat':'squat','goblet-squat':'squat','split-squat':'squat',
  'wall-sit':'squat','leg-press':'squat','squat-cat':'squat',
  'lunges':'lunge','reverse-lunge':'lunge','step-up':'lunge','lunges-cat':'lunge',
  'bridge':'bridge','hip-thrust':'bridge','single-leg-bridge':'bridge','hip-thrust-cat':'bridge',
  'glute-kickback':'plank','fire-hydrant':'plank',
  'calf-raise':'standing','deadlift-cat':'row',
  // 유산소
  'burpee':'plank','burpee-cat':'plank','bear-crawl':'plank',
  'jumping-jacks':'running','high-knees':'running','speed-step':'running',
  'running-in-place':'running','shadow-boxing':'running','running':'running',
  'jump-rope':'running','jump-rope-cat':'running',
  'squat-jump':'squat','jumping-lunge':'lunge',
  'skater-jump':'lunge','box-jump':'squat','star-jump':'running',
  'cycling':'squat','swimming':'plank','rowing-machine':'row',
  // 어깨
  'shoulder-press':'press',
};

// ── SVG 생성 함수 ────────────────────────────────────────────────
function generateExerciseSVG(exerciseKey, displayName, category) {
  const col = EX_COLORS[category] || EX_COLORS.cardio;
  const poseKey = EXERCISE_POSE_MAP[exerciseKey] || 'standing';
  const poseFn  = POSES[poseKey] || POSES.standing;
  const figureColor = col.c1;

  const catLabels = {
    abs:'복근', arms:'팔', chest:'가슴', back:'등',
    legs:'하체', cardio:'유산소', shoulders:'어깨', stretch:'스트레칭'
  };
  const catLabel = catLabels[category] || category;
  const shortName = (displayName || '').length > 12
    ? displayName.substring(0, 12) + '…'
    : (displayName || '');

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="260" viewBox="0 0 400 260">
  <defs>
    <linearGradient id="bg${poseKey}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%"   stop-color="${col.dark}"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <linearGradient id="ac${poseKey}" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="${col.c1}"/>
      <stop offset="100%" stop-color="${col.c2}"/>
    </linearGradient>
    <filter id="glow">
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>

  <!-- 배경 -->
  <rect width="400" height="260" fill="url(#bg${poseKey})"/>

  <!-- 카테고리 컬러 상단 바 -->
  <rect width="400" height="4" fill="url(#ac${poseKey})"/>

  <!-- 배경 원형 장식 -->
  <circle cx="340" cy="50"  r="80" fill="${col.c1}" opacity="0.04"/>
  <circle cx="60"  cy="210" r="60" fill="${col.c2}" opacity="0.05"/>
  <circle cx="200" cy="130" r="120" fill="${col.c1}" opacity="0.03"/>

  <!-- 격자 패턴 (미세) -->
  <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="${col.c1}" stroke-width="0.2" opacity="0.4"/>
  </pattern>
  <rect width="400" height="260" fill="url(#grid)"/>

  <!-- 스틱피겨 -->
  <g filter="url(#glow)" opacity="0.95">
    ${poseFn(figureColor)}
  </g>

  <!-- 하단 정보 영역 -->
  <rect x="0" y="220" width="400" height="40" fill="rgba(0,0,0,0.55)"/>

  <!-- 카테고리 태그 -->
  <rect x="10" y="228" width="${catLabel.length * 11 + 12}" height="22" rx="4"
        fill="${col.c1}" opacity="0.22"/>
  <text x="${10 + (catLabel.length * 11 + 12)/2}" y="243"
        font-family="'Noto Sans KR', sans-serif" font-size="11" font-weight="600"
        fill="${col.c1}" text-anchor="middle">${catLabel}</text>

  <!-- 운동 이름 -->
  <text x="200" y="244"
        font-family="'Noto Sans KR', sans-serif" font-size="15" font-weight="700"
        fill="white" text-anchor="middle" dominant-baseline="middle">${shortName}</text>
</svg>`;

  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

// ── img onerror 핸들러 ─────────────────────────────────────────
function onExerciseImgError(imgEl, exerciseKey, displayName, category) {
  imgEl.onerror = null; // 무한 루프 방지
  imgEl.src = generateExerciseSVG(exerciseKey, displayName, category);
  imgEl.style.objectFit = 'contain';
  imgEl.style.background = '#0f172a';
}

// ── 전역 노출 ──────────────────────────────────────────────────
window.generateExerciseSVG  = generateExerciseSVG;
window.onExerciseImgError   = onExerciseImgError;
