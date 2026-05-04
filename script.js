const SITE = {
  herName: "Soumaya",
  yourName: "Taha",
  birthdayDate: "May 5, 2026",
};

// Add more books here. Put new PDF files in assets/books/ and update file.
const BOOKS = [
  {
    title: "A book",
    file: "assets/books/A book(2).pdf",
    description: "A small piece of my heart in pages, made for the girl who makes ordinary days feel gentle.",
    coverImage: "",
    coverColors: ["#d95b84", "#9285c7"],
    coverNote: "For Soumaya",
  },
  {
    title: "To the angel that you merely are",
    file: "assets/books/To the angel that you merely are(2).pdf",
    description: "A softer letter in book form, written for the way you are loved and seen.",
    coverImage: "",
    coverColors: ["#c79a45", "#9f2f55"],
    coverNote: "From Taha",
  },
  {
    title: "ديوان سومية",
    file: "assets/books/ديوان_سومية.pdf",
    description: "الديوان العربي لسومية، محفوظ هنا كجزء خاص من مكتبتها الصغيرة.",
    coverImage: "",
    coverColors: ["#4d315e", "#c79a45"],
    coverNote: "قصائد لسومية",
    direction: "rtl",
  },
];

// Add photos here. Put image files in assets/gallery/ and set image to the path.
// The gallery keeps personal no-face photos plus the drawing Taha made for her.
const GALLERY_ITEMS = [
  {
    title: "The drawing I made for you",
    category: "Favorite moments",
    image: "assets/gallery/drawing-for-her.jpeg",
    caption: "I drew her while trying my best out of pure love. It was not about perfection; it was about making something with my own hands for her, and she loved it.",
    symbol: "Art",
    colors: ["#d95b84", "#ded7ff"],
    imagePosition: "center 26%",
  },
  {
    title: "Rabat seashore",
    category: "Favorite moments",
    image: "assets/gallery/rabat-seashore-feet.jpeg",
    caption: "Both our feet beside the Rabat seashore, a quiet proof that we were there together, close to the water and close to each other.",
    symbol: "01",
    colors: ["#d8eee7", "#c79a45"],
    imagePosition: "center 52%",
  },
  {
    title: "Oum Azza river",
    category: "Special days",
    image: "assets/gallery/oum-azza-river.jpeg",
    caption: "The river at Oum Azza from the day we went there together, green hills, soft sky, and a memory that feels peaceful without needing faces.",
    symbol: "OA",
    colors: ["#d8eee7", "#9285c7"],
    imagePosition: "center 52%",
  },
  {
    title: "Lock screen vow",
    category: "Cute screenshots",
    image: "assets/gallery/lock-her.jpeg",
    caption: "One lock screen carrying a promise, the kind of small daily thing that quietly says this love matters.",
    symbol: "Msg",
    colors: ["#ffd9e4", "#d95b84"],
    imagePosition: "center 88%",
  },
  {
    title: "The other half",
    category: "Cute screenshots",
    image: "assets/gallery/lock-me.jpeg",
    caption: "The matching half of the promise, two screens quietly holding the same feeling from different hands.",
    symbol: "05",
    colors: ["#ded7ff", "#c79a45"],
    imagePosition: "center 86%",
  },
  {
    title: "Sunset ride",
    category: "Favorite moments",
    image: "assets/gallery/pic1.jpeg",
    caption: "Feet up in the car with the sunset ahead, one of those ordinary views that becomes romantic because it belonged to us.",
    symbol: "Fav",
    colors: ["#9f2f55", "#d8eee7"],
    imagePosition: "center 68%",
  },
];

// Add more songs here. Put new MP3 files in assets/audio/ and update file.
const TRACKS = [
  {
    title: "Apocalypse",
    artist: "Cigarettes After Sex",
    file: "assets/audio/apocalypse.mp3",
  },
  {
    title: "My Love Mine All Mine",
    artist: "Mitski",
    file: "assets/audio/mitski-my-love-mine-all-mine.mp3",
  },
];

// Add or edit quiz questions here.
const QUIZ_QUESTIONS = [
  {
    question: "Where did our first hello become the start of everything, baby?",
    options: ["Ibn Khaldoun tram station near Arribat Center", "A cinema in Casablanca", "A cafe in Agdal"],
    answer: 0,
    note: "Yes, 7biba. A normal tram station became the beginning of us.",
  },
  {
    question: "Where did we both play badly but make it perfect anyway?",
    options: ["Mega Mall bowling", "A tennis court", "A cooking class"],
    answer: 0,
    note: "Exactly, honey. We were bad at bowling, but good at being us.",
  },
  {
    question: "Which tiny first-date moment still feels like an almost-kiss?",
    options: ["The Google Maps almost-kiss", "Buying matching rings", "Missing the tram twice"],
    answer: 0,
    note: "That close little Google Maps moment, baby. Soft, nervous, unforgettable.",
  },
  {
    question: "What sentence brought the sun back after our first real argument?",
    options: ["We're not made for fights", "Let's never talk again", "Bowling fixes everything"],
    answer: 0,
    note: "Yes, 7biba. That sentence belongs in our softest little museum.",
  },
  {
    question: "Which movie did we scream and laugh through together?",
    options: ["Final Destination", "Titanic", "La La Land"],
    answer: 0,
    note: "Correct, honey. Fear plus laughter somehow became a date memory.",
  },
  {
    question: "Which football rivalry became part of our private teasing?",
    options: ["Barcelona and Real Madrid", "PSG and Marseille", "Arsenal and Chelsea"],
    answer: 0,
    note: "Yes, baby. Barcelona versus Real Madrid, with way too many smug looks.",
  },
  {
    question: "How much do I love you?",
    options: ["Beyond any measurement and beyond infinity", "Only on birthdays", "A normal amount"],
    answer: 0,
    note: "Exactly, 7biba. Beyond any measurement, beyond infinity, and still growing.",
  },
  {
    question: "What is my favorite meal?",
    options: ["You", "Pizza", "Tacos"],
    answer: 0,
    note: "Correct, honey. You first, pizza second. This is simply the truth.",
  },
  {
    question: "What kind of day with you would still feel perfect to me?",
    options: ["A simple day with hugs, walks, jokes, and you", "A day where we barely talk", "A day spent arguing about nothing"],
    answer: 0,
    note: "Yes, baby. It does not need to be flashy. It just needs you.",
  },
];

// Add more memory-card pairs here. Replace labels with image paths later if preferred.
const MEMORY_PAIRS = ["S", "T", "05", "Love", "Song", "Book"];

// Add more wheel messages, promises, or date ideas here.
const WHEEL_MESSAGES = [
  "A date where we choose dessert first.",
  "A promise: I will keep learning how to love you softer.",
  "A little note hidden somewhere for you to find.",
  "A slow walk, no rush, just us.",
  "A song sent at the exact moment I miss you.",
  "A future plan we write together.",
];

// Add more open-when letters here.
const OPEN_WHEN_LETTERS = [
  {
    title: "you miss me",
    message: "Close your eyes for ten seconds and imagine my hand finding yours. I am with you in every quiet place your heart looks for me.",
  },
  {
    title: "you need a smile",
    message: "You have a way of making the world feel less sharp. I hope this little note returns even a tiny piece of that softness to you.",
  },
  {
    title: "you want to remember us",
    message: "Remember that we are built from small things too: jokes, patience, songs, books, and all the times we chose each other again.",
  },
  {
    title: "it is your birthday",
    message: "Happy birthday, baby. I hope today feels gentle, celebrated, and full of the love you give so naturally.",
  },
];

// Add more surprise-button compliments here.
const SURPRISE_MESSAGES = [
  "You are my favorite person to think about.",
  "Your softness changes the temperature of my whole day.",
  "I love the way your existence makes ordinary things matter.",
  "You are beautiful in the calmest, most unforgettable way.",
  "Being loved by you feels like being trusted by the sky.",
  "I choose you in the loud days and the quiet ones.",
];

// Add book-derived memories here. These are text memories, separate from pictures.
const BOOK_MEMORIES = [
  {
    source: "A book",
    title: "April 3, 2025",
    text: "The story begins at the Ibn Khaldoun tram station near Arribat Center: nervous, simple, and somehow already meaningful.",
  },
  {
    source: "A book",
    title: "Bowling at Mega Mall",
    text: "The first date did not need perfection. You both played badly, laughed anyway, and made the awkwardness feel beautiful.",
  },
  {
    source: "A book",
    title: "The Google Maps almost-kiss",
    text: "When she leaned close while you checked the way home, time slowed down. It became one of those tiny moments that stays like a photograph.",
  },
  {
    source: "A book",
    title: "The quiet after drop-off",
    text: "After dates, especially around 8 p.m., the seat beside you still felt warm and the silence made it clear how much she already meant.",
  },
  {
    source: "A book",
    title: "We're not made for fights",
    text: "After the first real argument, repair mattered more than pride. Her forgiveness brought the light back, and the phrase became a soft promise.",
  },
  {
    source: "A book",
    title: "Dates that did not need to be flashy",
    text: "Bowling, Final Destination, Marina, Assabah, Harhoura, exam rides to la fac: the books keep saying the same thing, any day with her becomes enough.",
  },
  {
    source: "A book",
    title: "The private humor",
    text: "The jokes, reels, football teasing, Barcelona versus Real Madrid, and shared looks became part of the private language only the two of you fully understand.",
  },
  {
    source: "A book",
    title: "Music started sounding like her",
    text: "The first book turns music into memory: softer songs, emotional melodies, and the feeling that every track somehow points back to honey.",
  },
  {
    source: "To the angel that you merely are",
    title: "Peace became a person",
    text: "The second book returns again and again to one feeling: her love calms the noise, slows the breath, and makes home feel possible.",
  },
  {
    source: "To the angel that you merely are",
    title: "Love as growth",
    text: "Her presence becomes motivation: working out harder, studying with more discipline, speaking more gently, and becoming a man shaped by love.",
  },
  {
    source: "Both books",
    title: "A future with details",
    text: "Small wedding, joyful honeymoon, a cozy home in Rabat, four children, two cats, New York, Chicago, morning coffees, grocery runs, and birthdays side by side.",
  },
  {
    source: "Both books",
    title: "The reason for more books",
    text: "The books exist because short messages were not enough. They turn love into something 7biba can hold, revisit, and keep.",
  },
];

// Add timeline memories here.
const TIMELINE = [
  {
    date: "April 3, 2025",
    title: "The day we met",
    text: "Ibn Khaldoun tram station, near Arribat Center. A normal place became the first page of us.",
    extra: "From there came the walk, Mega Mall, bowling, and the strange feeling that something had already begun.",
  },
  {
    date: "First date",
    title: "Our first date",
    text: "Awkward, funny, soft, and unforgettable. The first day already carried little signs of home.",
    extra: "The Google Maps moment became one of the book's most vivid memories.",
  },
  {
    date: "Early days",
    title: "Falling in love",
    text: "The feeling became clearest in the quiet after leaving her: the empty seat, the drive home, the sudden missing.",
    extra: "The first book describes love becoming truth, not just excitement.",
  },
  {
    date: "First repair",
    title: "Not made for fights",
    text: "A hard moment became a gentle lesson: apology as action, forgiveness as sunlight, and love as choosing softness again.",
    extra: "This keeps the honest spirit of the 200 days page but makes it birthday-gentle.",
  },
  {
    date: "Our dates",
    title: "Simple days, full heart",
    text: "Bowling, cinema, Marina, corniche walks, exam rides, hugs, and shared jokes became the real gallery of the relationship.",
    extra: "The photos live above; the feeling lives here.",
  },
  {
    date: "May 5, 2026",
    title: "Her birthday",
    text: "Today is for baby: her smile, her heart, her softness, and the life she keeps becoming.",
    extra: "This is the birthday chapter: complete, soft, and made so she can feel chosen from the first section to the last.",
  },
  {
    date: "Next",
    title: "Future dreams",
    text: "A small wedding, a honeymoon full of stories, a calm home, children, cats, travel, and everyday love.",
    extra: "Both books imagine forever less as a grand performance and more as presence: mornings, jokes, birthdays, and home.",
  },
];

const qs = (selector, scope = document) => scope.querySelector(selector);
const qsa = (selector, scope = document) => [...scope.querySelectorAll(selector)];

let quizIndex = 0;
let quizScore = 0;
let selectedTrack = 0;
let wheelRotation = 0;
let surpriseIndex = 0;
let memoryMoves = 0;
let firstMemoryCard = null;
let lockMemoryBoard = false;

document.addEventListener("DOMContentLoaded", () => {
  renderBooks();
  renderGallery();
  renderBookMemories();
  renderQuiz();
  renderMemoryGame();
  renderLetters();
  renderTimeline();
  renderTracks();
  initTypewriter();
  initRevealObserver();
  initAmbientPieces();
  bindStaticEvents();
});

function bindStaticEvents() {
  qs("#resetMemory").addEventListener("click", renderMemoryGame);
  qs("#spinWheel").addEventListener("click", spinWheel);
  qs("#surpriseButton").addEventListener("click", revealSurprise);
  qs("#playSelected").addEventListener("click", playSelectedTrack);
  qs("#lightboxClose").addEventListener("click", closeLightbox);
  qs("#letterClose").addEventListener("click", closeLetterModal);

  qs("#lightbox").addEventListener("click", (event) => {
    if (event.target.id === "lightbox") closeLightbox();
  });

  qs("#letterModal").addEventListener("click", (event) => {
    if (event.target.id === "letterModal") closeLetterModal();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeLightbox();
      closeLetterModal();
    }
  });
}

function renderBooks() {
  const grid = qs("#booksGrid");
  grid.innerHTML = BOOKS.map((book) => {
    const [a, b] = book.coverColors;
    const direction = book.direction || "ltr";
    const cover = book.coverImage
      ? `<img src="${book.coverImage}" alt="${book.title} cover" loading="lazy">`
      : `<div class="book-cover-text"><strong>${book.title}</strong><span>${book.coverNote}</span></div>`;

    return `
      <article class="book-card reveal" dir="${direction}">
        <div class="book-cover" style="--cover-a:${a};--cover-b:${b};">
          ${cover}
        </div>
        <div class="book-info">
          <div>
            <h3>${book.title}</h3>
            <p>${book.description}</p>
          </div>
          <div class="book-actions">
            <a class="button primary" href="${book.file}" target="_blank" rel="noopener">Read</a>
            <a class="button" href="${book.file}" download>Download</a>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function renderGallery(activeCategory = "All") {
  const filters = qs("#galleryFilters");
  const grid = qs("#galleryGrid");
  const categories = ["All", ...new Set(GALLERY_ITEMS.map((item) => item.category))];
  const visibleItems = activeCategory === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  filters.innerHTML = categories.map((category) => `
    <button class="chip ${category === activeCategory ? "active" : ""}" type="button" data-category="${category}">
      ${category}
    </button>
  `).join("");

  qsa(".chip", filters).forEach((button) => {
    button.addEventListener("click", () => renderGallery(button.dataset.category));
  });

  grid.innerHTML = visibleItems.map((item, index) => {
    const [a, b] = item.colors;
    const imageFit = item.imageFit || "cover";
    const imagePosition = item.imagePosition || "center center";
    const visual = item.image
      ? `<img src="${item.image}" alt="${item.title}" loading="lazy">`
      : `<span class="placeholder-symbol">${item.symbol}</span>`;

    return `
      <article class="gallery-card reveal" tabindex="0" role="button" data-gallery-index="${GALLERY_ITEMS.indexOf(item)}" style="--gallery-a:${a};--gallery-b:${b};--image-fit:${imageFit};--image-position:${imagePosition};">
        <div class="gallery-visual">${visual}</div>
        <div class="gallery-body">
          <h3>${item.title}</h3>
          <p>${item.caption}</p>
        </div>
      </article>
    `;
  }).join("");

  qsa(".gallery-card", grid).forEach((card) => {
    const open = () => openLightbox(Number(card.dataset.galleryIndex));
    card.addEventListener("click", open);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        open();
      }
    });
  });

  initRevealObserver();
}

function openLightbox(index) {
  const item = GALLERY_ITEMS[index];
  const lightbox = qs("#lightbox");
  const content = qs("#lightboxContent");
  const [a, b] = item.colors;
  const visual = item.image
    ? `<img class="lightbox-image" src="${item.image}" alt="${item.title}">`
    : `<div class="lightbox-placeholder" style="--gallery-a:${a};--gallery-b:${b};"><span class="placeholder-symbol">${item.symbol}</span></div>`;

  content.innerHTML = `
    ${visual}
    <div class="lightbox-caption">
      <h3>${item.title}</h3>
      <p>${item.caption}</p>
    </div>
  `;
  lightbox.hidden = false;
  document.body.classList.add("lightbox-open");
}

function closeLightbox() {
  qs("#lightbox").hidden = true;
  document.body.classList.remove("lightbox-open");
}

function renderBookMemories() {
  const grid = qs("#bookMemories");
  grid.innerHTML = BOOK_MEMORIES.map((memory, index) => `
    <article class="memory-note-card reveal">
      <span class="memory-number">${String(index + 1).padStart(2, "0")}</span>
      <p class="memory-source">${memory.source}</p>
      <h3>${memory.title}</h3>
      <p>${memory.text}</p>
    </article>
  `).join("");
}

function renderQuiz() {
  const area = qs("#quizArea");

  if (quizIndex >= QUIZ_QUESTIONS.length) {
    area.innerHTML = `
      <div class="quiz-reward">
        <p class="quiz-question">You finished the quiz, 7biba.</p>
        <p class="quiz-feedback">Score: ${quizScore}/${QUIZ_QUESTIONS.length}. Reward unlocked: hugs and kisses from Taha.</p>
        <div class="reward-box" id="rewardBox">
          <span>${QUIZ_QUESTIONS.length} questions answered</span>
          <strong>${QUIZ_QUESTIONS.length} hugs + ${QUIZ_QUESTIONS.length} kisses</strong>
          <small>One for every memory you remembered, baby.</small>
        </div>
        <div class="reward-actions">
          <button class="button primary full" type="button" id="claimQuizReward">Claim hugs and kisses</button>
          <button class="button full" type="button" id="restartQuiz">Restart quiz</button>
        </div>
      </div>
    `;
    qs("#claimQuizReward").addEventListener("click", (event) => {
      qs("#rewardBox").innerHTML = `
        <span>Delivered to honey</span>
        <strong>Hug hug hug. Kiss kiss kiss.</strong>
        <small>And extra kisses because Taha does not believe in strict limits.</small>
      `;
      const rect = event.currentTarget.getBoundingClientRect();
      createBurst(rect.left + rect.width / 2, rect.top + rect.height / 2, 18);
    });
    qs("#restartQuiz").addEventListener("click", () => {
      quizIndex = 0;
      quizScore = 0;
      renderQuiz();
    });
    return;
  }

  const current = QUIZ_QUESTIONS[quizIndex];
  area.innerHTML = `
    <p class="quiz-question">${current.question}</p>
    <div class="quiz-options">
      ${current.options.map((option, index) => `
        <button class="quiz-option" type="button" data-answer="${index}">${option}</button>
      `).join("")}
    </div>
    <p class="quiz-feedback" id="quizFeedback"></p>
    <div class="quiz-progress">
      <span>Question ${quizIndex + 1} of ${QUIZ_QUESTIONS.length}</span>
      <span>${quizScore} right</span>
    </div>
  `;

  qsa(".quiz-option", area).forEach((button) => {
    button.addEventListener("click", () => chooseQuizAnswer(button, current));
  });
}

function chooseQuizAnswer(button, question) {
  const answer = Number(button.dataset.answer);
  const buttons = qsa(".quiz-option", qs("#quizArea"));
  buttons.forEach((item) => {
    item.disabled = true;
    item.classList.toggle("correct", Number(item.dataset.answer) === question.answer);
  });

  if (answer === question.answer) {
    quizScore += 1;
    button.classList.add("correct");
  } else {
    button.classList.add("wrong");
  }

  qs("#quizFeedback").textContent = question.note;
  setTimeout(() => {
    quizIndex += 1;
    renderQuiz();
  }, 1050);
}

function renderMemoryGame() {
  const board = qs("#memoryBoard");
  const moves = qs("#memoryMoves");
  const doubled = shuffle([...MEMORY_PAIRS, ...MEMORY_PAIRS]);
  memoryMoves = 0;
  firstMemoryCard = null;
  lockMemoryBoard = false;
  moves.textContent = "0 moves";

  board.innerHTML = doubled.map((symbol, index) => `
    <button class="memory-card-btn" type="button" data-symbol="${symbol}" aria-label="Memory card ${index + 1}">
      <span class="memory-card-inner">
        <span class="memory-face memory-front">?</span>
        <span class="memory-face memory-back">${symbol}</span>
      </span>
    </button>
  `).join("");

  qsa(".memory-card-btn", board).forEach((card) => {
    card.addEventListener("click", () => flipMemoryCard(card));
  });
}

function flipMemoryCard(card) {
  if (lockMemoryBoard || card.classList.contains("flipped") || card.classList.contains("matched")) return;

  card.classList.add("flipped");

  if (!firstMemoryCard) {
    firstMemoryCard = card;
    return;
  }

  memoryMoves += 1;
  qs("#memoryMoves").textContent = `${memoryMoves} ${memoryMoves === 1 ? "move" : "moves"}`;

  const matched = firstMemoryCard.dataset.symbol === card.dataset.symbol;
  if (matched) {
    firstMemoryCard.classList.add("matched");
    card.classList.add("matched");
    firstMemoryCard = null;
    if (qsa(".memory-card-btn.matched").length === MEMORY_PAIRS.length * 2) {
      createBurst(window.innerWidth / 2, window.innerHeight / 2, 18);
    }
    return;
  }

  lockMemoryBoard = true;
  setTimeout(() => {
    firstMemoryCard.classList.remove("flipped");
    card.classList.remove("flipped");
    firstMemoryCard = null;
    lockMemoryBoard = false;
  }, 680);
}

function spinWheel() {
  const wheel = qs("#loveWheel");
  const result = qs("#wheelResult");
  const message = WHEEL_MESSAGES[Math.floor(Math.random() * WHEEL_MESSAGES.length)];
  wheelRotation += 720 + Math.floor(Math.random() * 360);
  wheel.style.setProperty("--spin-angle", `${wheelRotation}deg`);
  result.textContent = "Spinning...";
  setTimeout(() => {
    result.textContent = message;
    createBurst(window.innerWidth / 2, window.innerHeight * 0.45, 10);
  }, 1850);
}

function renderLetters() {
  const list = qs("#lettersList");
  list.innerHTML = OPEN_WHEN_LETTERS.map((letter, index) => `
    <button class="letter-button" type="button" data-letter="${index}">
      Open when ${letter.title}
    </button>
  `).join("");

  qsa(".letter-button", list).forEach((button) => {
    button.addEventListener("click", () => openLetterModal(Number(button.dataset.letter)));
  });
}

function openLetterModal(index) {
  const letter = OPEN_WHEN_LETTERS[index];
  qs("#letterModalTitle").textContent = letter.title;
  qs("#letterModalText").textContent = letter.message;
  qs("#letterModal").hidden = false;
  document.body.classList.add("lightbox-open");
}

function closeLetterModal() {
  qs("#letterModal").hidden = true;
  document.body.classList.remove("lightbox-open");
}

function revealSurprise(event) {
  const message = SURPRISE_MESSAGES[surpriseIndex % SURPRISE_MESSAGES.length];
  surpriseIndex += 1;
  qs("#surpriseMessage").textContent = message;
  qs("#surpriseCount").textContent = `${surpriseIndex} ${surpriseIndex === 1 ? "note" : "notes"} opened`;

  const rect = event.currentTarget.getBoundingClientRect();
  createBurst(rect.left + rect.width / 2, rect.top + rect.height / 2, 12);
}

function renderTimeline() {
  const timeline = qs("#timeline");
  timeline.innerHTML = TIMELINE.map((item, index) => `
    <article class="timeline-item reveal" tabindex="0" role="button" aria-expanded="false">
      <div class="timeline-dot">${index + 1}</div>
      <div class="timeline-copy">
        <p class="timeline-date">${item.date}</p>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
        <div class="timeline-extra">
          <div><p>${item.extra}</p></div>
        </div>
      </div>
    </article>
  `).join("");

  qsa(".timeline-item", timeline).forEach((item) => {
    const toggle = () => {
      const active = item.classList.toggle("active");
      item.setAttribute("aria-expanded", String(active));
    };
    item.addEventListener("click", toggle);
    item.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggle();
      }
    });
  });
}

function renderTracks() {
  const list = qs("#trackList");
  const audio = qs("#audioPlayer");
  list.innerHTML = TRACKS.map((track, index) => `
    <button class="track-button ${index === selectedTrack ? "active" : ""}" type="button" data-track="${index}">
      ${track.artist} - ${track.title}
    </button>
  `).join("");

  qsa(".track-button", list).forEach((button) => {
    button.addEventListener("click", () => {
      selectedTrack = Number(button.dataset.track);
      updateSelectedTrack(false);
    });
  });

  audio.addEventListener("play", () => {
    qs("#nowPlaying").textContent = `${TRACKS[selectedTrack].artist} - ${TRACKS[selectedTrack].title}`;
  });

  updateSelectedTrack(false);
}

function updateSelectedTrack(shouldPlay) {
  const track = TRACKS[selectedTrack];
  const audio = qs("#audioPlayer");
  qsa(".track-button").forEach((button) => {
    button.classList.toggle("active", Number(button.dataset.track) === selectedTrack);
  });
  qs("#nowPlaying").textContent = `${track.artist} - ${track.title}`;

  if (!audio.src.endsWith(track.file)) {
    audio.src = track.file;
  }

  if (shouldPlay) {
    audio.play().catch(() => {
      qs("#nowPlaying").textContent = "Press play on the audio player to start the song.";
    });
  }
}

function playSelectedTrack() {
  updateSelectedTrack(true);
}

function initTypewriter() {
  const target = qs("[data-typewriter]");
  if (!target) return;
  const fullText = target.textContent.trim();
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reducedMotion) return;

  target.textContent = "";
  let index = 0;
  const write = () => {
    target.textContent = fullText.slice(0, index);
    index += 1;
    if (index <= fullText.length) {
      setTimeout(write, 22);
    }
  };
  setTimeout(write, 360);
}

function initRevealObserver() {
  const reveals = qsa(".reveal:not(.is-visible)");
  if (!reveals.length) return;

  if (!("IntersectionObserver" in window)) {
    reveals.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16 });

  reveals.forEach((item) => observer.observe(item));
}

function initAmbientPieces() {
  const field = qs("#ambientField");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!field || reducedMotion) return;

  const pieces = ["♥", "✦", "♡", "·"];
  const colors = ["#d95b84", "#c79a45", "#9285c7", "#9f2f55"];

  field.innerHTML = Array.from({ length: 26 }, () => {
    const piece = pieces[Math.floor(Math.random() * pieces.length)];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const size = 0.7 + Math.random() * 1.15;
    const x = Math.random() * 100;
    const drift = -30 + Math.random() * 60;
    const duration = 12 + Math.random() * 13;
    const delay = Math.random() * -20;
    return `<span class="float-piece" style="--x:${x}%;--drift:${drift}px;--duration:${duration}s;--delay:${delay}s;--size:${size}rem;--color:${color};">${piece}</span>`;
  }).join("");
}

function createBurst(x, y, count) {
  for (let i = 0; i < count; i += 1) {
    const heart = document.createElement("span");
    heart.className = "burst-heart";
    heart.textContent = "♥";
    heart.style.setProperty("--x", `${x}px`);
    heart.style.setProperty("--y", `${y}px`);
    heart.style.setProperty("--dx", `${-70 + Math.random() * 140}px`);
    heart.style.setProperty("--dy", `${-90 + Math.random() * 50}px`);
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 900);
  }
}

function shuffle(items) {
  return items
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}
