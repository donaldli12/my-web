import React from "react";

export default function LifeStory({ story }) {
  const goToChapter = (id) => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const chapter = document.getElementById(`me-chapter-${id}`);
    chapter?.scrollIntoView({ behavior: reduceMotion ? "instant" : "smooth", block: "start" });
    chapter?.focus({ preventScroll: true });
  };

  return (
    <section className="me-story" aria-labelledby="me-story-heading">
      <header className="me-story-heading">
        <p className="me-eyebrow">{story.chaptersLabel}</p>
        <h2 id="me-story-heading">{story.chaptersTitle}</h2>
      </header>
      <div className="me-story-layout">
        <nav className="me-story-index" aria-label={story.chaptersNavigation}>
          {story.chapters.map((chapter) => (
            <button type="button" key={chapter.id} className={chapter.accent === "purple" ? "is-purple" : undefined} aria-controls={`me-chapter-${chapter.id}`} onClick={() => goToChapter(chapter.id)}>
              <span>{chapter.number}</span>{chapter.title}
            </button>
          ))}
        </nav>
        <div className="me-story-chapters">
          {story.chapters.map((chapter) => (
            <article className={`me-story-chapter${chapter.accent === "purple" ? " is-purple" : ""}`} id={`me-chapter-${chapter.id}`} key={chapter.id} tabIndex={-1} aria-labelledby={`me-chapter-title-${chapter.id}`}>
              <header>
                <h3 id={`me-chapter-title-${chapter.id}`} className="display-font"><span>{chapter.number} — </span>{chapter.title}</h3>
                <p className="me-chapter-subtitle display-font">{chapter.subtitle}</p>
              </header>
              <div className="me-chapter-text">
                {chapter.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
