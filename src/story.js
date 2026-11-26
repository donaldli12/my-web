const chapters = [
  {
    id: "zhengzhou",
    subtitle: "Where it all began.",
    title: { zh: "郑州", en: "Zhengzhou", es: "Zhengzhou" },
    paragraphs: {
      zh: [
        "我出生在郑州，大部分童年和少年时代都在这里度过。",
        "那时候的世界很小，生活也很简单。对于未来，我有很多想象，却没有什么具体的答案。"
      ],
      en: [
        "I was born in Zhengzhou, where I spent most of my childhood and teenage years.",
        "The world felt small then, and life was simple. I had plenty of ideas about the future, but very few concrete answers."
      ],
      es: [
        "Nací en Zhengzhou, donde pasé la mayor parte de mi infancia y adolescencia.",
        "Entonces el mundo parecía pequeño y la vida era sencilla. Imaginaba muchas cosas sobre el futuro, pero tenía pocas respuestas concretas."
      ]
    }
  },
  {
    id: "saint-bede",
    institution: "saint-bede",
    subtitle: "My first time away.",
    title: { zh: "芝加哥", en: "Chicago", es: "Chicago" },
    paragraphs: {
      zh: [
        "高二那年，我第一次离开熟悉的环境，独自来到美国，在 Saint Bede Academy 度过了一年。",
        "我在那里认识了一些对我影响很深的人。不同的文化、生活方式和思考方式，让我开始重新审视很多曾经习以为常的事情。",
        "现在回想起来，那一年是我人生中很重要的一段时间。"
      ],
      en: [
        "During my junior year of high school, I left familiar surroundings for the first time and moved to the United States on my own. I spent a year at Saint Bede Academy.",
        "I met people there who had a lasting influence on me. Different cultures, ways of living, and ways of thinking made me reconsider things I had always taken for granted.",
        "Looking back, that year was an important part of my life."
      ],
      es: [
        "En mi penúltimo año de instituto dejé por primera vez mi entorno familiar y viajé solo a Estados Unidos. Pasé un año en Saint Bede Academy.",
        "Allí conocí a personas que me marcaron profundamente. Otras culturas, formas de vivir y maneras de pensar me hicieron replantearme muchas cosas que siempre había dado por sentadas.",
        "Hoy, al mirar atrás, sé que aquel año fue una etapa importante de mi vida."
      ]
    }
  },
  {
    id: "london",
    institution: "kcl",
    subtitle: "A different direction.",
    title: { zh: "伦敦", en: "London", es: "Londres" },
    paragraphs: {
      zh: [
        "高中毕业后，我去了伦敦国王学院。",
        "我喜欢伦敦，也喜欢在那里生活过的日子，但慢慢发现，英国似乎并不是我想长期待下去的地方。",
        "于是，我决定回到美国。",
        "没有什么特别复杂的原因，只是想换一种生活，看看还有什么别的可能。"
      ],
      en: [
        "After high school, I went to King's College London.",
        "I loved London and the time I spent there, but gradually realized that the UK wasn't where I wanted to stay long term.",
        "So I decided to return to the United States.",
        "There wasn't a complicated reason. I just wanted to try a different life and see what other possibilities were out there."
      ],
      es: [
        "Después del instituto fui a King's College London.",
        "Me gustaba Londres y disfruté de mi vida allí, pero poco a poco comprendí que el Reino Unido no era donde quería quedarme a largo plazo.",
        "Así que decidí volver a Estados Unidos.",
        "No hubo un motivo especialmente complicado. Solo quería probar otra forma de vivir y descubrir qué otras posibilidades existían."
      ]
    }
  },
  {
    id: "pittsburgh",
    institution: "pitt",
    subtitle: "Back in the United States.",
    title: { zh: "匹兹堡", en: "Pittsburgh", es: "Pittsburgh" },
    paragraphs: {
      zh: ["回到美国后，我在匹兹堡大学继续了大学生活。"],
      en: ["Back in the United States, I continued my studies at the University of Pittsburgh."],
      es: ["De vuelta en Estados Unidos, continué mis estudios en la Universidad de Pittsburgh."]
    }
  },
  {
    id: "new-york",
    institution: "nyu",
    accent: "purple",
    subtitle: "Places, people, and everything in between.",
    title: { zh: "纽约", en: "New York", es: "Nueva York" },
    paragraphs: {
      zh: [
        "之后，我来到纽约大学。",
        "这几年里，我认识了很多朋友。我们有过无数次漫无边际的聊天，也一起经历了很多现在想起来依然觉得有趣的事情。",
        "相比于学到了什么，我更在意的是，这些经历让我成为了一个怎样的人。",
        "纽约也是一座很特别的城市。直到现在，我依然会怀念在那里生活的日子，以及那些曾经觉得再普通不过的日常。"
      ],
      en: [
        "I later moved to New York to attend New York University.",
        "I made many friends along the way. We had countless conversations that wandered in every direction, and shared experiences that still make me smile when I think about them.",
        "More than what I learned, I care about the person those experiences helped me become.",
        "New York is a special city, too. Even now, I miss living there, and the everyday moments that once felt so ordinary."
      ],
      es: [
        "Después fui a la Universidad de Nueva York.",
        "Durante esos años hice muchos amigos. Compartimos innumerables conversaciones sin rumbo y experiencias que todavía me hacen sonreír al recordarlas.",
        "Más que lo que aprendí, me importa la persona en la que me convirtieron esas experiencias.",
        "Nueva York también es una ciudad especial. Aún echo de menos vivir allí y aquellos momentos cotidianos que entonces parecían tan normales."
      ]
    }
  },
  {
    id: "shanghai-beijing",
    subtitle: "What I'm building now.",
    title: { zh: "上海 & 北京", en: "Shanghai & Beijing", es: "Shanghái y Pekín" },
    paragraphs: {
      zh: [
        "大学毕业后，我回到中国，先后在上海和北京实习，开始真正参与 AI 产品的构建。",
        "我很喜欢现在所做的事情。",
        "人工智能让我着迷的地方，在于很多我们曾经只能想象的事情，正在逐渐成为现实。",
        "我享受思考一个产品为什么存在、它应该如何运作，以及它能为人们带来什么的过程。",
        "能够在这样一个时间节点参与其中，是一件很有意思的事。"
      ],
      en: [
        "After college, I returned to China and took internships in Shanghai and Beijing, where I began taking part in building AI products.",
        "I really enjoy what I'm doing now.",
        "What fascinates me about AI is that so many things we could once only imagine are gradually becoming real.",
        "I enjoy thinking about why a product exists, how it should work, and what it can bring to people's lives.",
        "It's an exciting time to be part of that process."
      ],
      es: [
        "Después de la universidad volví a China e hice prácticas en Shanghái y Pekín, donde empecé a participar en la creación de productos de IA.",
        "Disfruto mucho de lo que hago ahora.",
        "Lo que me fascina de la inteligencia artificial es que muchas cosas que antes solo podíamos imaginar se están haciendo realidad poco a poco.",
        "Me gusta pensar por qué existe un producto, cómo debería funcionar y qué puede aportar a la vida de las personas.",
        "Participar en ese proceso en un momento como este es algo muy interesante."
      ]
    }
  },
  {
    id: "los-angeles",
    institution: "usc",
    subtitle: "What's next.",
    title: { zh: "洛杉矶", en: "Los Angeles", es: "Los Ángeles" },
    paragraphs: {
      zh: [
        "下一站是南加州大学。",
        "一个新的城市，一段新的生活。",
        "至于之后会发生什么，我也不知道。",
        "但我很期待。"
      ],
      en: [
        "The next stop is the University of Southern California.",
        "A new city. A new chapter of life.",
        "As for what happens after that, I don't know yet.",
        "But I'm looking forward to it."
      ],
      es: [
        "La próxima parada es la Universidad del Sur de California.",
        "Una nueva ciudad. Una nueva etapa.",
        "Todavía no sé qué vendrá después.",
        "Pero tengo muchas ganas de descubrirlo."
      ]
    }
  }
];

const copy = {
  zh: {
    title: "Hi, I'm Donald.",
    eyebrow: "关于我",
    intro: [
      "我喜欢思考，也喜欢观察这个世界。",
      "从十几岁开始，我就对很多事情充满好奇。关于人，关于科技，关于我们所生活的世界，也关于未来会是什么样子。",
      "过去这些年，我在不同的城市生活，认识了很多有意思的人，也做过一些当时并不知道是否正确的决定。",
      "这是关于我的一些故事。"
    ],
    chaptersLabel: "沿途的故事",
    chaptersTitle: "一些城市，一些故事。",
    chaptersNavigation: "浏览经历章节",
    beyondTitle: "Beyond Work",
    beyondWork: [
      "工作之外，我喜欢打高尔夫，也喜欢在不同的地方走走看看。",
      "高尔夫对我而言，是一种能够暂时远离其他事情、专注于当下的方式。",
      "有时候，我也喜欢什么都不做，和朋友聊聊天，或者独自想一些没有标准答案的问题。"
    ],
    closing: [
      "这些就是目前为止的我。",
      "还有很多地方没去过，很多事情没做过，也有很多想法等待实现。"
    ]
  },
  en: {
    title: "Hi, I'm Donald.",
    eyebrow: "A little about me",
    intro: [
      "I like thinking, and I like observing the world around me.",
      "Since my teenage years, I've been curious about many things. About people, technology, the world we live in, and what the future might look like.",
      "Over the years, I've lived in different cities, met interesting people, and made decisions I wasn't sure were right at the time.",
      "These are a few of my stories."
    ],
    chaptersLabel: "Along the way",
    chaptersTitle: "A few places. A few chapters.",
    chaptersNavigation: "Browse life chapters",
    beyondTitle: "Beyond Work",
    beyondWork: [
      "Outside of work, I enjoy playing golf and exploring different places.",
      "For me, golf is a way to step away from everything else for a while and focus on the present.",
      "Sometimes, I also enjoy doing nothing at all: talking with friends, or sitting with questions that don't have a single right answer."
    ],
    closing: [
      "That's who I am, so far.",
      "There are still places I haven't been, things I haven't done, and ideas waiting to become real."
    ]
  },
  es: {
    title: "Hi, I'm Donald.",
    eyebrow: "Un poco sobre mí",
    intro: [
      "Me gusta pensar y observar el mundo que me rodea.",
      "Desde la adolescencia siento curiosidad por muchas cosas. Por las personas, la tecnología, el mundo en el que vivimos y cómo será el futuro.",
      "Estos años he vivido en distintas ciudades, conocido a personas interesantes y tomado decisiones sin saber si eran las correctas.",
      "Estas son algunas de mis historias."
    ],
    chaptersLabel: "Por el camino",
    chaptersTitle: "Lugares y capítulos de una vida.",
    chaptersNavigation: "Explorar etapas de mi vida",
    beyondTitle: "Beyond Work",
    beyondWork: [
      "Fuera del trabajo me gusta jugar al golf y conocer lugares diferentes.",
      "Para mí, el golf es una forma de alejarme un rato de todo lo demás y concentrarme en el presente.",
      "A veces también disfruto de no hacer nada: conversar con amigos o pensar a solas en preguntas que no tienen una única respuesta."
    ],
    closing: [
      "Así soy, por ahora.",
      "Todavía quedan lugares por conocer, cosas por hacer e ideas por convertir en realidad."
    ]
  }
};

export const personalStory = Object.fromEntries(
  Object.entries(copy).map(([language, content]) => [language, {
    ...content,
    signature: "Still curious. Still figuring things out.",
    chapters: chapters.map((chapter, index) => ({
      id: chapter.id,
      accent: chapter.accent,
      institution: chapter.institution,
      number: String(index + 1).padStart(2, "0"),
      title: chapter.title[language],
      subtitle: chapter.subtitle,
      paragraphs: chapter.paragraphs[language]
    }))
  }])
);
