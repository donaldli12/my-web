import { personalStory } from "./story";

const assetPath = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

export const profileContent = {
  brand: {
    en: "Donald Li",
    zh: "李政琨",
    es: "Donald Li"
  },
  email: "donaldlizhengkun@outlook.com",
  contact: {
    email: "donaldlizhengkun@outlook.com",
    phone: "+86 15838133788",
    instagram: "donaldli1"
  },
  location: "Based in Shanghai/Los Angeles · Available for work",
  resumes: {
    english: assetPath("/resume-en.pdf"),
    chinese: assetPath("/resume.pdf")
  },
  videoUrl: assetPath("/demos/hero-bg.mp4"),
  navItems: [
    { key: "me", action: "me" },
    { key: "projects", action: "projects" },
    { key: "location", action: "location" }
  ],
  labels: {
    en: {
      statement: "Statement",
      me: "Me",
      projects: "Projects",
      contact: "Contact",
      location: "Location",
      englishResume: "English Resume",
      chineseResume: "中文简历",
      contactMe: "Contact me",
      backHome: "Back home",
      selectedProjects: "Selected Projects",
      contactDetails: "Contact",
      locationDetails: "Location",
      schools: "Schools",
      skills: "Skills"
    },
    zh: {
      statement: "个人陈述",
      me: "我",
      projects: "项目",
      contact: "联系",
      location: "位置",
      englishResume: "英文简历",
      chineseResume: "中文简历",
      contactMe: "联系我",
      backHome: "返回主页",
      selectedProjects: "精选项目",
      contactDetails: "联系方式",
      locationDetails: "位置",
      schools: "学校",
      skills: "技能"
    },
    es: {
      statement: "Declaración",
      me: "Yo",
      projects: "Proyectos",
      contact: "Contacto",
      location: "Ubicación",
      englishResume: "CV en inglés",
      chineseResume: "中文简历",
      contactMe: "Contáctame",
      backHome: "Volver",
      selectedProjects: "Proyectos",
      contactDetails: "Contacto",
      locationDetails: "Ubicación",
      schools: "Escuelas",
      skills: "Habilidades"
    }
  },
  hero: {
    en: {
      eyebrow: "AI Product Strategy / Software Engineering / Creative Systems",
      title: "Welcome to my world",
      statement:
        "I make complex things feel simple — but never dumb. Strategy, data, design, AI — I don't really live in one box.",
      intro: ""
    },
    zh: {
      eyebrow: "AI 产品策略 / 软件工程 / 创意系统",
      title: "欢迎来到我的世界",
      statement:
        "我擅长把复杂的事，讲得简单——却从不肤浅。",
      intro: "策略、数据、设计、AI……我从不愿被框在某一个领域里"
    },
    es: {
      eyebrow: "Estrategia de producto IA / Ingeniería / Sistemas creativos",
      title: "Bienvenido a mi mundo",
      statement:
        "Hago que lo complejo se sienta simple, pero nunca superficial.",
      intro: "Estrategia, datos, diseño, IA... no vivo dentro de una sola caja."
    }
  },
  about: personalStory,
  personalMedia: {
    golfVideo: assetPath("/me/golf.mp4"),
    golfPoster: assetPath("/me/golf-poster.jpg"),
    chapterGalleries: {
      "saint-bede": {
        photos: [
          { src: assetPath("/me/chapters/chicago-dinner.jpg"), position: "50% 50%", caption: { zh: "餐桌旁的时光", en: "Around the table", es: "Alrededor de la mesa" } },
          { src: assetPath("/me/chapters/chicago-football.jpg"), position: "50% 50%", caption: { zh: "橄榄球 · 52 号", en: "Football · No. 52", es: "Fútbol americano · N.º 52" } },
          { src: assetPath("/me/chapters/chicago-basketball.jpg"), position: "50% 50%", caption: { zh: "篮球 · 15 号", en: "Basketball · No. 15", es: "Baloncesto · N.º 15" } }
        ]
      },
      london: {
        photos: [
          { src: assetPath("/me/chapters/london-canary-wharf.jpg"), position: "50% 50%", caption: { zh: "Canary Wharf", en: "Canary Wharf", es: "Canary Wharf" } }
        ]
      },
      "new-york": {
        title: { zh: "毕业典礼", en: "Graduation", es: "Graduación" },
        photos: [
          { src: assetPath("/me/chapters/nyu-ceremony.jpg"), position: "50% 50%", caption: { zh: "NYU 毕业典礼", en: "NYU graduation ceremony", es: "Ceremonia de graduación de NYU" } },
          { src: assetPath("/me/graduation.jpg"), position: "57% 44%", caption: { zh: "喷泉前的毕业照", en: "Graduation by the fountain", es: "Graduación junto a la fuente" } },
          { src: assetPath("/me/nyu.jpg"), position: "50% 42%", caption: { zh: "NYU 校园旁的毕业照", en: "A graduation portrait at NYU", es: "Un retrato de graduación en NYU" } },
          { src: assetPath("/me/classroom.jpg"), position: "50% 44%", caption: { zh: "教室里的毕业照", en: "Graduation in the classroom", es: "Graduación en el aula" } }
        ]
      }
    },
    heroPhotos: [
      { src: assetPath("/me/coast.jpg"), position: "62% 45%", caption: { en: "Chasing the last light", zh: "追着日落的光", es: "La última luz del día" } }
    ],
    beyondPhotos: [
      { src: assetPath("/me/cafe.jpg"), position: "50% 48%", caption: { en: "A slow afternoon", zh: "慢下来的午后", es: "Una tarde sin prisa" } },
      { src: assetPath("/me/museum.jpg"), position: "50% 50%", caption: { en: "A different perspective", zh: "换个视角", es: "Otra perspectiva" } },
      { src: assetPath("/me/details.jpg"), position: "50% 50%", caption: { en: "It's in the details", zh: "细节里的自己", es: "Está en los detalles" } },
      { src: assetPath("/me/beyond-work/sydney.jpg"), position: "50% 50%", caption: { en: "An evening in Sydney", zh: "悉尼的傍晚", es: "Una tarde en Sídney" } },
      { src: assetPath("/me/beyond-work/hardware.jpg"), position: "50% 62%", caption: { en: "5080!", zh: "5080!", es: "5080!" } },
      { src: assetPath("/me/beyond-work/concert.jpg"), position: "50% 50%", caption: { en: "Wunna by Gunna", zh: "Wunna by Gunna", es: "Wunna by Gunna" } }
    ]
  },
  mePage: {
    en: { eyebrow: "A little more me", note: "Shot on Highway 5", filmEyebrow: "Away from the screen", filmTitle: "A different kind of focus.", filmNote: "A moment on the course", galleryEyebrow: "Life, in a few frames", galleryTitle: "Collected along the way.", galleryHint: "Tap a photograph to take a closer look.", openPhoto: "View photo", closePhoto: "Close photo", previousPhoto: "Previous photo", nextPhoto: "Next photo", pause: "Pause video", play: "Play video", mute: "Mute video", unmute: "Turn sound on" },
    zh: { eyebrow: "工作之外的我", note: "Shot on Highway 5", filmEyebrow: "暂时离开屏幕", filmTitle: "专注，也有另一种模样。", filmNote: "球场上的一个瞬间", galleryEyebrow: "生活的几个切片", galleryTitle: "一路走来，收集片刻。", galleryHint: "点开照片，看看画面里的细节。", openPhoto: "查看照片", closePhoto: "关闭照片", previousPhoto: "上一张照片", nextPhoto: "下一张照片", pause: "暂停视频", play: "播放视频", mute: "关闭声音", unmute: "开启声音" },
    es: { eyebrow: "Un poco más de mí", note: "Shot on Highway 5", filmEyebrow: "Lejos de la pantalla", filmTitle: "Otra forma de concentrarse.", filmNote: "Un momento en el campo", galleryEyebrow: "La vida en unas imágenes", galleryTitle: "Momentos del camino.", galleryHint: "Toca una foto para verla de cerca.", openPhoto: "Ver foto", closePhoto: "Cerrar foto", previousPhoto: "Foto anterior", nextPhoto: "Foto siguiente", pause: "Pausar video", play: "Reproducir video", mute: "Silenciar video", unmute: "Activar sonido" }
  },
  skills: {
    en: [
      "SDE coding",
      "Data platform",
      "Front-end design",
      "Deliverable AIGC content",
      "UI/UX design"
    ],
    zh: ["软件工程开发", "数据中台", "前端设计", "可交付级 AIGC 内容", "UI/UX 设计"],
    es: ["Desarrollo SDE", "Plataforma de datos", "Diseño front-end", "AIGC entregable", "Diseño UI/UX"]
  },
  schools: [
    {
      shortName: "NYU",
      name: {
        en: "New York University",
        zh: "纽约大学",
        es: "New York University"
      },
      program: {
        en: "Data Science & Business Analytics",
        zh: "数据科学与商业分析",
        es: "Ciencia de datos y analítica de negocio"
      },
      logoSrc: assetPath("/logos/nyu.webp")
    },
    {
      shortName: "USC",
      name: {
        en: "University of Southern California",
        zh: "南加州大学",
        es: "University of Southern California"
      },
      program: {
        en: "Integrated Design, Business & Technology",
        zh: "整合设计、商业与技术",
        es: "Diseño integrado, negocio y tecnología"
      },
      logoSrc: assetPath("/logos/usc.png")
    }
  ],
  projectsPage: {
    en: {
      title: "Projects that turn imagination into operating leverage.",
      intro:
        "A few things I have built, shaped, or helped reframe: agent workspaces, AI canvas workflows, and fashion tools that turn personal ideas into visual reality."
    },
    zh: {
      title: "把想法变成系统，把灵感变成可用的产品。",
      intro:
        "这里放的是我做过、重构过或参与塑造过的项目：Agent 工作空间、AI 画布工作流，以及帮助用户把风格想法变成现实的时尚 AI 工具。"
    },
    es: {
      title: "Proyectos que convierten imaginación en sistemas reales.",
      intro:
        "Una selección de proyectos que he construido, replanteado o ayudado a dar forma: workspaces de agentes, canvas de IA y herramientas de moda con IA."
    }
  },
  projects: [
    {
      title: {
        en: "JoyAI",
        zh: "JoyAI",
        es: "JoyAI"
      },
      eyebrow: {
        en: "All-in-one AIGC creative studio",
        zh: "万能 AIGC 创意工坊",
        es: "Estudio creativo de IA generativa"
      },
      url: "https://joyai.com/",
      demoVideo: assetPath("/demos/joyai.mp4"),
      posterImage: assetPath("/projects/joyai.png"),
      description: {
        en: "An all-in-one AIGC creative platform bringing AI image generation, video creation, a creative canvas, and intelligent chat into one workflow — turning ideas into visual stories.",
        zh: "集 AI 绘画、图片生成、视频创作、创意画布与智能对话于一体的一站式 AIGC 创作平台，让灵感在同一个工作流中变成图像、视频与创意内容。",
        es: "Una plataforma creativa de IA generativa que reúne generación de imágenes, creación de video, un lienzo creativo y chat inteligente para convertir ideas en historias visuales."
      }
    },
    {
      title: {
        en: "Matrix",
        zh: "Matrix",
        es: "Matrix"
      },
      eyebrow: {
        en: "Agent-to-agent workspace",
        zh: "Agent to Agent 工作空间",
        es: "Workspace agent-to-agent"
      },
      url: "https://matrix.build/",
      demoVideo: assetPath("/demos/matrix-marketplace.mp4"),
      description: {
        en: "An agent-to-agent workspace concept rebuilt around a new commercial model: every person can spin up an AI-native company, coordinate specialized agents, and move from idea to operating structure.",
        zh: "这是一个 Agent to Agent 工作空间。我重构了它之后的商业模式：每个人都可以开一家属于自己的 AI 原生公司，调度不同专长的 Agent，把想法推进成可以运转的组织结构。",
        es: "Un concepto de workspace agent-to-agent reconstruido alrededor de un nuevo modelo comercial: cada persona puede crear una empresa nativa de IA, coordinar agentes especializados y convertir ideas en estructura operativa."
      }
    },
    {
      title: {
        en: "Flowith",
        zh: "Flowith",
        es: "Flowith"
      },
      eyebrow: {
        en: "AI canvas for deliverable work",
        zh: "可交付级 AI 画布",
        es: "Canvas de IA para trabajo entregable"
      },
      url: "https://flowith.io/home/",
      demoVideo: assetPath("/demos/flowith-1080p.mp4"),
      description: {
        en: "An integrated AI canvas for creators and software builders, helping users combine research, generation, coding, and iteration into deliverable-grade outcomes inside one spatial workflow.",
        zh: "这是一个 AI 画布。无论是创作者还是程序编码者，都可以在集成式画布里完成研究、生成、编码和迭代，最终产出可交付级的结果。",
        es: "Un canvas integrado de IA para creadores y builders de software, ayudando a combinar investigación, generación, código e iteración en resultados listos para entregar."
      }
    },
    {
      title: {
        en: "Viba",
        zh: "Viba",
        es: "Viba"
      },
      eyebrow: {
        en: "AI fashion try-on tool",
        zh: "时尚 AI 试穿工具",
        es: "Herramienta de moda con IA"
      },
      url: "https://www.instagram.com/viba_me/",
      demoVideo: assetPath("/demos/viba.mov"),
      description: {
        en: "A fashion AI tool that turns ideas into reality: try on styles from across the world, explore new identities, and find the version of yourself that feels most alive.",
        zh: "这是一个时尚 AI 工具，让你的想法变成现实：帮你试穿这个世界上所有的风格，探索不同的自己，找到真正属于你的那一面。",
        es: "Una herramienta de moda con IA que convierte ideas en realidad: prueba estilos de todo el mundo, explora nuevas identidades y encuentra la versión de ti que se siente más viva."
      }
    }
  ]
};
