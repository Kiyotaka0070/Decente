// ==========================================
// 1. DATOS DE LAS FOTOS (24 FUERA + 3 JARDÍN)
// ==========================================
const act1Photos = [
  { src: "img/snoopy2.jpg", text: "Un detalle simple para alguien que ilumina cualquier día con solo aparecer." },
  { src: "img/1.jpg", text: "Tú mandaste esto diciendo 'salí decente'... y yo como? si saliste bien bonita." },
  { src: "img/2.jpg", text: "Me dijiste que no te convencía esta foto, pero en verdad saliste bonita." },
  { src: "img/3.jpg", text: "Esta eres tú asi no más, y te ves bien bonita." },
  { src: "img/4.jpg", text: "Decías que estabas aburrida, pero cada mensaje tuyo o con escucharte me alegra el dia por completo." },
  { src: "img/5.jpg", text: "Me encanta cuando mandas fotos así, tan natural y auténtica." },
  { src: "img/6.jpg", text: "¿De verdad dudas de ti misma? Si tienes una presencia increíble." },
  { src: "img/7.jpg", text: "Simplemente tú, brillando sin siquiera intentarlo." }
];

const act2Photos = [
  { src: "img/8.jpg", text: "Esa risa cuando te ríes... esa me encanta." },
  { src: "img/9.jpg", text: "En esta foto se te ve bien chevere, das una vibra que es imposible ignorarla." },
  { src: "img/10.jpg", text: "La prueba de que por más peros que te pongas, sales bonita." },
  { src: "img/11.jpg", text: "Me quedo viendo esta foto y sigo sin entender cómo puedes dudar si sales muy bien." },
  { src: "img/12.jpg", text: "Tienes una mirada bien bonita, se te nota." },
  { src: "img/13.jpg", text: "Aquí te ves super bien, aunque tú solita te buscas peros." },
  { src: "img/14.jpg", text: "Guarda esta foto para los días en que te levantes con mala cara." },
  { src: "img/15.jpg", text: "Cada cosita tuya tiene algo que me gusta y agrada." }
];

const act3Photos = [
  { src: "img/16.jpg", text: "“No necesitas filtro  ni arreglarte tanto para destacar.”" },
  { src: "img/17.jpg", text: "“De todo lo que veo en el dia, tú siempre vas primero.”" },
  { src: "img/18.jpg", text: "“Ojalá pudieras verte un ratito como yo te veo, para que me des la razon.”" },
  { src: "img/19.jpg", text: "“Te ves bien en todas tus versiones, hasta en las que dices no.”" }
];

const ninezPhotos = [
  { flower: "🌼 MARGARITA", src: "img/nino1.jpg", text: "Desde pequeña ya tenías esa carita y esa mirada tierna que llama la atención de cualquiera." },
  { flower: "🌹 ROSA SILVESTRE", src: "img/nino2.jpg", text: "La vida te sonrie, el universo esta de tu lado, todo lo que te propongas se cumplira." },
  { flower: "🌸 CEREZO EN FLOR", src: "img/nino3.jpg", text: "Esa misma sonrisa de niña, no ha cambiado nada, sigue igual de genial." }
];

const stageNames = {
  "view-acto1": "SALA 01 · ACTO I",
  "view-minigame": "RETO INTERMEDIO",
  "view-acto2": "SALA 02 · ACTO II",
  "view-acto3": "SALA 03 · ACTO III",
  "view-jardin": "JARDÍN SECRETO",
  "view-quiz": "TEST FINAL",
  "view-carta": "CARTA FINAL"
};

const letters = ["A", "B", "C", "D"];

// ==========================================
// 2. BIENVENIDA, CONFETI Y LLUVIA CÓSMICA
// ==========================================
const welcomeOverlay = document.getElementById("welcomeOverlay");
const enterBtn = document.getElementById("enterBtn");
const stagePill = document.getElementById("stage-pill");
const meteorRain = document.getElementById("meteor-rain");

let rainTimers = [];
let starAnimId = null;

function openWelcome() {
  welcomeOverlay.classList.remove("hidden-overlay");
}

enterBtn.addEventListener("click", () => {
  welcomeOverlay.classList.add("hidden-overlay");
  lanzarConfetti();
  goToView("view-acto1");
  toggleMusic(true);
});

function lanzarConfetti() {
  const confetti = document.getElementById("confetti");
  const emojis = ["✨", "💜", "⭐", "💫", "🌸"];
  for (let i = 0; i < 24; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti-piece";
    piece.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.fontSize = (16 + Math.random() * 12) + "px";
    piece.style.animationDelay = (Math.random() * 0.6) + "s";
    confetti.appendChild(piece);
    setTimeout(() => piece.remove(), 3200);
  }
}

function stopCosmicRain() {
  rainTimers.forEach(id => clearInterval(id));
  rainTimers = [];
}

function startCosmicRain() {
  stopCosmicRain();
  if (!meteorRain || document.hidden) return;
  const glyphs = ["✦", "✧", "⋆", "✦", "✧"];

  const sparkTimer = setInterval(() => {
    if (document.hidden) return;
    const spark = document.createElement("span");
    spark.className = "rain-spark";
    spark.textContent = glyphs[Math.floor(Math.random() * glyphs.length)];
    spark.style.left = (Math.random() * 100) + "vw";
    spark.style.fontSize = (10 + Math.random() * 10) + "px";
    const duration = 5 + Math.random() * 4.5;
    spark.style.animationDuration = duration + "s";
    meteorRain.appendChild(spark);
    setTimeout(() => spark.remove(), duration * 1000 + 200);
  }, 300);

  const meteorTimer = setInterval(() => {
    if (document.hidden) return;
    const meteor = document.createElement("div");
    meteor.className = "meteor-streak";
    meteor.style.top = (Math.random() * 52) + "vh";
    meteor.style.left = (25 + Math.random() * 70) + "vw";
    meteorRain.appendChild(meteor);
    setTimeout(() => meteor.remove(), 1000);
  }, 1500);

  const cometTimer = setInterval(() => {
    if (document.hidden) return;
    const comet = document.createElement("div");
    comet.className = "comet-streak";
    comet.style.top = (4 + Math.random() * 38) + "vh";
    comet.style.left = (45 + Math.random() * 50) + "vw";
    meteorRain.appendChild(comet);
    setTimeout(() => comet.remove(), 1800);
  }, 3800);

  rainTimers.push(sparkTimer, meteorTimer, cometTimer);
}

const canvas = document.getElementById("spaceCanvas");
const ctx = canvas.getContext("2d");
let stars = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  stars = [];
  const count = Math.min(260, Math.floor((canvas.width * canvas.height) / 3200));
  for (let i = 0; i < count; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.7,
      alpha: Math.random(),
      speed: 0.004 + Math.random() * 0.012
    });
  }
}

function drawStars() {
  if (!document.hidden) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(star => {
      star.alpha += star.speed;
      if (star.alpha > 1 || star.alpha < 0) star.speed = -star.speed;
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 230, 255, ${Math.abs(star.alpha)})`;
      ctx.shadowBlur = 8;
      ctx.shadowColor = "#ffb9dd";
      ctx.fill();
    });
  }
  starAnimId = requestAnimationFrame(drawStars);
}

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    stopCosmicRain();
  } else {
    startCosmicRain();
  }
});

window.addEventListener("resize", resizeCanvas);
resizeCanvas();
drawStars();
startCosmicRain();

const particleSymbols = ["✨", "💜", "⭐", "💫"];
let lastX = 0;
let lastY = 0;

window.addEventListener("mousemove", (e) => {
  if (Math.abs(e.clientX - lastX) > 35 || Math.abs(e.clientY - lastY) > 35) {
    lastX = e.clientX;
    lastY = e.clientY;
    const p = document.createElement("div");
    p.className = "cursor-particle";
    p.textContent = particleSymbols[Math.floor(Math.random() * particleSymbols.length)];
    p.style.left = e.clientX + "px";
    p.style.top = e.clientY + "px";
    document.body.appendChild(p);
    setTimeout(() => p.remove(), 800);
  }
});

// ==========================================
// 3. NAVEGACIÓN ENTRE VISTAS
// ==========================================
let act2Loaded = false;
let act3Loaded = false;

function goToView(viewId) {
  document.querySelectorAll(".view").forEach(v => v.classList.add("hidden"));
  document.getElementById(viewId).classList.remove("hidden");
  if (stagePill && stageNames[viewId]) {
    stagePill.textContent = stageNames[viewId];
  }
  window.scrollTo({ top: 0, behavior: "instant" });

  if (viewId === "view-acto1") {
    updateCarousel("next", false);
  } else if (viewId === "view-acto2" && !act2Loaded) {
    renderAct2();
    act2Loaded = true;
  } else if (viewId === "view-acto3" && !act3Loaded) {
    renderAct3();
    act3Loaded = true;
  } else if (viewId === "view-quiz") {
    initQuiz();
  }
}

window.addEventListener("DOMContentLoaded", () => {
  buildCarouselDots();
  updateCarousel("next", false);
});

// ==========================================
// 4. CARRUSEL (ACTO I) + SWIPE + TECLADO
// ==========================================
let currentIndex = 0;
const frameCard = document.getElementById("act1-frame-card");
const carouselImg = document.getElementById("carousel-img");
const carouselCounter = document.getElementById("carousel-counter");
const carouselText = document.getElementById("carousel-text");
const carouselDots = document.getElementById("carousel-dots");

function buildCarouselDots() {
  if (!carouselDots) return;
  carouselDots.innerHTML = "";
  act1Photos.forEach((_, idx) => {
    const dot = document.createElement("span");
    dot.className = "carousel-dot" + (idx === 0 ? " active" : "");
    carouselDots.appendChild(dot);
  });
}

function updateCarousel(direction = "next", animate = true) {
  const item = act1Photos[currentIndex];
  const num = String(currentIndex + 1).padStart(2, "0");
  const total = String(act1Photos.length).padStart(2, "0");

  carouselImg.src = item.src;
  carouselCounter.textContent = `${num} / ${total}`;
  carouselText.textContent = item.text;

  if (carouselDots) {
    [...carouselDots.children].forEach((dot, idx) => {
      dot.classList.toggle("active", idx === currentIndex);
    });
  }

  if (animate) {
    carouselImg.classList.remove("slide-in-next", "slide-in-prev");
    carouselText.classList.remove("caption-fade");
    frameCard?.classList.remove("pulse-glow");

    void carouselImg.offsetWidth;

    carouselImg.classList.add(direction === "prev" ? "slide-in-prev" : "slide-in-next");
    carouselText.classList.add("caption-fade");
    frameCard?.classList.add("pulse-glow");

    setTimeout(() => {
      frameCard?.classList.remove("pulse-glow");
    }, 450);
  }
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % act1Photos.length;
  updateCarousel("next", true);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + act1Photos.length) % act1Photos.length;
  updateCarousel("prev", true);
}

document.getElementById("prev-btn").addEventListener("click", prevSlide);
document.getElementById("next-btn").addEventListener("click", nextSlide);

let touchStartX = 0;
frameCard?.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].clientX;
}, { passive: true });

frameCard?.addEventListener("touchend", (e) => {
  const diffX = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(diffX) > 45) {
    if (diffX < 0) nextSlide();
    else prevSlide();
  }
}, { passive: true });

document.addEventListener("keydown", (e) => {
  if (!photoModal.classList.contains("hidden") && e.key === "Escape") {
    photoModal.classList.add("hidden");
    return;
  }
  const act1Visible = !document.getElementById("view-acto1").classList.contains("hidden");
  if (act1Visible) {
    if (e.key === "ArrowRight") nextSlide();
    else if (e.key === "ArrowLeft") prevSlide();
  }
});

// ==========================================
// 5. MINIJUEGOS ENTRE SECCIONES
// ==========================================
function makeChoiceButton(letter, label, onClick) {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "choice-btn";
  btn.innerHTML = `<span class="choice-letter">${letter}</span><span>${label}</span>`;
  btn.addEventListener("click", onClick);
  return btn;
}

function openMiniGame(stage) {
  document.querySelectorAll(".view").forEach(v => v.classList.add("hidden"));
  document.getElementById("view-minigame").classList.remove("hidden");
  if (stagePill) stagePill.textContent = stageNames["view-minigame"];
  window.scrollTo({ top: 0, behavior: "instant" });

  const titleEl = document.getElementById("mg-title");
  const instructionEl = document.getElementById("mg-instruction");
  const questionEl = document.getElementById("mg-question");
  const optionsEl = document.getElementById("mg-options");
  const feedbackEl = document.getElementById("mg-feedback");

  feedbackEl.textContent = "";
  optionsEl.innerHTML = "";

  const backBtn = document.createElement("button");
  backBtn.className = "ghost-btn";
  backBtn.type = "button";
  backBtn.style.marginTop = "14px";
  backBtn.textContent = "← Volver";
  backBtn.onclick = () => {
    if (stage === 1) goToView("view-acto1");
    else if (stage === 2) goToView("view-acto2");
    else if (stage === 3) goToView("view-jardin");
  };

  let answers = [];

  if (stage === 1) {
    titleEl.textContent = "Reto del Acto I";
    instructionEl.textContent = "Responde para desbloquear la siguiente galería:";
    questionEl.textContent = "¿Qué pasa cuando dices que saliste 'decente' en una foto?";
    answers = [
      { text: "Es verdad", correct: false, msg: "❌ Por ahí no va: sabes perfectamente que sales genial." },
      { text: "Exageras muchísimo y sales increíble", correct: true, nextView: "view-acto2" },
      { text: "No pasa nada", correct: false, msg: "❌ Intenta de nuevo: ¡claro que causa efecto!" }
    ];
  } else if (stage === 2) {
    titleEl.textContent = "Reto del Acto II";
    instructionEl.textContent = "Responde para desbloquear la evidencia final:";
    questionEl.textContent = "¿Cuál es el veredicto oficial sobre tus fotos?";
    answers = [
      { text: "Necesitan más filtros", correct: false, msg: "❌ Cero filtros: al natural te ves genial." },
      { text: "Son puras casualidades bonitas", correct: false, msg: "❌ Casi, pero hay una respuesta más certera." },
      { text: "Eres sumamente fotogénica aunque lo niegues", correct: true, nextView: "view-acto3" }
    ];
  } else if (stage === 3) {
    titleEl.textContent = "Reto del Jardín";
    instructionEl.textContent = "Última prueba antes del test:";
    questionEl.textContent = "¿Qué tan probable es que aceptes lo mucho que vales?";
    answers = [
      { text: "Imposible", correct: false, msg: "❌ No te cierres así: hazle caso a las pruebas." },
      { text: "Bastante probable si me lo repiten seguido", correct: true, nextView: "view-quiz" },
      { text: "Nunca lo sabré", correct: false, msg: "❌ Claro que lo vas a ver reflejado aquí." }
    ];
  }

  answers.forEach((ans, idx) => {
    const btn = makeChoiceButton(letters[idx] || "•", ans.text, () => {
      if (ans.correct) {
        feedbackEl.textContent = "¡Correcto! Avanzando ✨";
        setTimeout(() => goToView(ans.nextView), 850);
      } else {
        feedbackEl.textContent = ans.msg;
      }
    });
    optionsEl.appendChild(btn);
  });

  optionsEl.appendChild(backBtn);
}

// ==========================================
// 6. CUADRÍCULA PRINCIPAL (ACTO II) + MODAL
// ==========================================
const photoModal = document.getElementById("photo-modal");
const modalImg = document.getElementById("modal-img");
const modalCaption = document.getElementById("modal-caption");
const notesCounter = document.getElementById("notes-counter");
const readNotesSet = new Set();

function renderAct2() {
  const galleryGrid = document.getElementById("gallery-grid");
  act2Photos.forEach((photo, idx) => {
    const div = document.createElement("div");
    div.className = "photo-tile";
    div.innerHTML = `<img src="${photo.src}" alt="" loading="lazy"><div class="tile-overlay">Tocar para leer ♡</div>`;
    div.addEventListener("click", () => {
      modalImg.style.opacity = "0.4";
      modalImg.src = photo.src;
      modalImg.onload = () => { modalImg.style.opacity = "1"; };
      modalCaption.textContent = photo.text;
      photoModal.classList.remove("hidden");
      if (!readNotesSet.has(idx)) {
        readNotesSet.add(idx);
        div.classList.add("visited");
        if (notesCounter) {
          notesCounter.textContent = `Notas leídas: ${readNotesSet.size} / ${act2Photos.length}`;
        }
      }
    });
    galleryGrid.appendChild(div);
  });
}

document.getElementById("close-modal").addEventListener("click", () => {
  photoModal.classList.add("hidden");
});
document.getElementById("modal-backdrop").addEventListener("click", () => {
  photoModal.classList.add("hidden");
});

// ==========================================
// 7. SHOWCASE Y VEREDICTO MEJORADO (SIN CÁMARA)
// ==========================================
let finishedDoubts = false;

function renderAct3() {
  const finalShowcase = document.getElementById("final-showcase");
  if (finalShowcase.children.length === 0) {
    act3Photos.forEach((photo, index) => {
      const card = document.createElement("div");
      card.className = "showcase-row";
      card.id = `showcase-photo-${index}`;
      card.innerHTML = `<img src="${photo.src}" alt="" loading="lazy"><p class="showcase-quote">${photo.text}</p>`;
      finalShowcase.appendChild(card);
    });
  }
}

let doubtClicks = 0;
const doubtBtn = document.getElementById("doubt-btn");
const doubtStage = document.getElementById("doubt-stage");
const doubtMessage = document.getElementById("doubt-message");
const doubtMedia = document.getElementById("doubt-media");
const secretPhoto = document.getElementById("secret-photo");
const doubtMeter = document.getElementById("doubt-meter");
const doubtProgressFill = document.getElementById("doubt-progress-fill");
const verdictTags = document.getElementById("verdict-tags");
const reactionRow = document.getElementById("reaction-row");
const reactionReply = document.getElementById("reaction-reply");
const verdictButtons = document.getElementById("verdict-buttons");

function updateDoubtMeter(step) {
  const percentages = [0, 35, 65, 90, 100];
  const pct = percentages[Math.min(step, percentages.length - 1)];
  if (doubtMeter) doubtMeter.textContent = `Nivel de duda: ${pct}%`;
  if (doubtProgressFill) doubtProgressFill.style.width = `${pct}%`;
}

function chooseVerdictReaction(mode) {
  document.querySelectorAll(".reaction-btn").forEach(btn => btn.classList.remove("active"));
  reactionReply.classList.remove("hidden");
  if (mode === "convencida") {
    document.querySelectorAll(".reaction-btn")[0]?.classList.add("active");
    reactionReply.textContent = "Algo es algo, Jazmín. Las pruebas hablan solas.";
  } else {
    document.querySelectorAll(".reaction-btn")[1]?.classList.add("active");
    reactionReply.textContent = "Clásico de ti... pero igual se nota que sí te lo piensas.";
  }
}

doubtBtn.addEventListener("click", () => {
  doubtClicks++;
  updateDoubtMeter(doubtClicks);
  doubtStage.classList.remove("hidden");
  doubtMedia.classList.add("hidden");
  secretPhoto.classList.add("hidden");

  if (doubtClicks === 1) {
    doubtMessage.textContent = "¿Segura que vas a seguir discutiendo con los hechos?";
    doubtBtn.textContent = "Sigo dudando...";
  } else if (doubtClicks === 2) {
    doubtMessage.textContent = "Si otra persona se pusiera los mismos peros que tú le dirias que exagera.";
    doubtBtn.textContent = "Hmm, tal vez, pero...";
  } else if (doubtClicks === 3) {
    doubtMessage.textContent = "Mira esta foto y dime si no sales bonita:";
    secretPhoto.src = "img/secreta.jpg";
    doubtMedia.classList.remove("hidden");
    secretPhoto.classList.remove("hidden");
    doubtBtn.textContent = "Aún necesito más pruebas";
  } else if (doubtClicks >= 4 && !finishedDoubts) {
    finishedDoubts = true;
    doubtMessage.textContent = "Veo que te cuesta creérmelo...pues tendré que decírtelo en persona.";
    verdictTags.classList.remove("hidden");
    reactionRow.classList.remove("hidden");
    doubtBtn.classList.add("hidden");

    if (!document.getElementById("verdict-continue-btn")) {
      const nextStepBtn = document.createElement("button");
      nextStepBtn.id = "verdict-continue-btn";
      nextStepBtn.className = "primary-btn full-width";
      nextStepBtn.type = "button";
      nextStepBtn.style.marginTop = "12px";
      nextStepBtn.textContent = "Continuar →";
      nextStepBtn.onclick = () => goToView("view-jardin");
      verdictButtons.appendChild(nextStepBtn);
    }
  }
});

// ==========================================
// 8. JARDÍN DE FLORES (3 FOTOS)
// ==========================================
function openPlantPhoto(index) {
  const box = document.getElementById("plant-reveal-box");
  const tag = document.getElementById("plant-reveal-tag");
  const img = document.getElementById("plant-reveal-img");
  const text = document.getElementById("plant-reveal-text");
  const photoData = ninezPhotos[index];

  if (tag) tag.textContent = `✦ ${photoData.flower}`;
  img.style.opacity = "0.4";
  img.src = photoData.src;
  img.onload = () => { img.style.opacity = "1"; };
  text.textContent = photoData.text;
  box.classList.remove("hidden");
}

// ==========================================
// 9. TEST DE COMPLICIDAD (2 PREGUNTAS RENOVADAS)
// ==========================================
const quizData = [
  {
    q: "Cuando mandas una foto diciendo 'salí decente', ¿qué estás haciendo en realidad?",
    options: [
      "Restarte mérito sin darte cuenta",
      "Decir la pura verdad",
      "Pedir que te digan lo contrario"
    ]
  },
  {
    q: "Después de ver todo este recorrido, ¿qué te toca hacer?",
    options: [
      "Creer un poquito más en lo que ves",
      "Seguir poniéndote peros gratis",
      "Aceptar que exagerabas con tus dudas"
    ]
  }
];

let currentQuizIndex = 0;

function initQuiz() {
  currentQuizIndex = 0;
  loadQuizQuestion();
}

function loadQuizQuestion() {
  const qData = quizData[currentQuizIndex];
  const progressEl = document.getElementById("quiz-progress");
  const questionEl = document.getElementById("quiz-question");
  const optionsEl = document.getElementById("quiz-options");

  if (progressEl) {
    progressEl.textContent = `PREGUNTA ${currentQuizIndex + 1} / ${quizData.length}`;
  }
  questionEl.textContent = qData.q;
  optionsEl.innerHTML = "";

  qData.options.forEach((opt, idx) => {
    const btn = makeChoiceButton(letters[idx] || "•", opt, () => {
      currentQuizIndex++;
      if (currentQuizIndex < quizData.length) {
        loadQuizQuestion();
      } else {
        goToView("view-carta");
        playSpecialSong();
      }
    });
    optionsEl.appendChild(btn);
  });
}

// ==========================================
// 10. MÚSICA DE FONDO Y CIERRE
// ==========================================
const bgMusic = document.getElementById("bg-music");
const finalMusic = document.getElementById("final-music");
const musicBtn = document.getElementById("musicBtn");
const musicBtnText = document.getElementById("musicBtnText");
let isPlaying = false;
let onFinalSong = false;

bgMusic.volume = 0.35;
finalMusic.volume = 0.5;

function toggleMusic(forcePlay = false) {
  const activeTrack = onFinalSong ? finalMusic : bgMusic;
  if (forcePlay || !isPlaying) {
    activeTrack.play().then(() => {
      isPlaying = true;
      musicBtn.classList.add("playing");
      musicBtnText.textContent = "Música: ON";
    }).catch(() => {});
  } else {
    bgMusic.pause();
    finalMusic.pause();
    isPlaying = false;
    musicBtn.classList.remove("playing");
    musicBtnText.textContent = "Música: OFF";
  }
}

musicBtn.addEventListener("click", () => toggleMusic(false));

function playSpecialSong() {
  if (onFinalSong) return;
  onFinalSong = true;
  if (!isPlaying) return;

  const fadeAudio = setInterval(() => {
    if (bgMusic.volume > 0.05) {
      bgMusic.volume = Math.max(0, bgMusic.volume - 0.05);
    } else {
      bgMusic.pause();
      clearInterval(fadeAudio);
      finalMusic.play().catch(() => {});
    }
  }, 180);
}