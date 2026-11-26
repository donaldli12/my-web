import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowLeft,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Database,
  GraduationCap,
  Globe2,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Palette,
  Phone,
  WandSparkles,
  X
} from "lucide-react";
import { profileContent } from "./content";
import { GolfFilm, PhotoFrame, PhotoLightbox } from "./PhotoJournal";
import LifeStory from "./LifeStory";
import "./styles.css";

const navDelays = [100, 170, 240];
const skillIcons = [Code2, Database, Palette, WandSparkles, BriefcaseBusiness];
const languageOptions = [
  { key: "en", label: "English" },
  { key: "zh", label: "中文" },
  { key: "es", label: "Español" }
];

function languageLabel(language) {
  return languageOptions.find((option) => option.key === language)?.label ?? "English";
}

function animationDelay(ms) {
  return { animationDelay: `${ms}ms` };
}

function LiquidButton({ children, className = "", style, ...props }) {
  return (
    <button
      className={`liquid-glass interactive-frame inline-flex shrink-0 items-center justify-center gap-2 text-base text-black transition-transform duration-300 ease-out hover:scale-[1.04] active:scale-[0.98] ${className}`}
      style={style}
      {...props}
    >
      <span className="relative z-10 inline-flex items-center justify-center gap-2">{children}</span>
    </button>
  );
}

function LiquidLink({ children, className = "", style, ...props }) {
  return (
    <a
      className={`liquid-glass interactive-frame inline-flex shrink-0 items-center justify-center gap-2 text-base text-black transition-transform duration-300 ease-out hover:scale-[1.04] active:scale-[0.98] ${className}`}
      style={style}
      {...props}
    >
      <span className="relative z-10 inline-flex items-center justify-center gap-2">{children}</span>
    </a>
  );
}

function ResumePicker({ language, className = "", style, compact = false }) {
  const [open, setOpen] = useState(false);
  const labels = profileContent.labels[language];

  return (
    <div className={`relative inline-flex ${className}`} style={style}>
      <LiquidButton
        className={`${compact ? "rounded-lg px-3 py-3" : "rounded-full px-4 py-2 md:px-6"} font-medium md:text-[15px]`}
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((current) => !current)}
      >
        {labels.statement}
        <ArrowUpRight size={16} strokeWidth={1.8} />
      </LiquidButton>

      <div
        className="resume-menu interactive-frame absolute right-0 top-[calc(100%+10px)] z-50 w-48 rounded-2xl border border-white/12 bg-white/80 p-2 text-left shadow-2xl transition-all duration-300"
        style={{
          opacity: open ? 1 : 0,
          transform: open ? "translateY(0)" : "translateY(-8px)",
          pointerEvents: open ? "auto" : "none"
        }}
      >
        <a
          className="interactive-soft block rounded-xl px-3 py-2 text-sm text-black transition-colors hover:bg-black/5"
          href={profileContent.resumes.english}
          target="_blank"
          rel="noreferrer"
        >
          {labels.englishResume}
        </a>
        <a
          className="interactive-soft block rounded-xl px-3 py-2 text-sm text-black transition-colors hover:bg-black/5"
          href={profileContent.resumes.chinese}
          target="_blank"
          rel="noreferrer"
        >
          {labels.chineseResume}
        </a>
      </div>
    </div>
  );
}

function ContactPanel({ language, open, onClose }) {
  const labels = profileContent.labels[language];
  const items = [
    { icon: Mail, label: "email", value: profileContent.contact.email },
    { icon: Phone, label: "phone", value: profileContent.contact.phone },
    { icon: Instagram, label: "ins", value: profileContent.contact.instagram }
  ];

  return (
    <div
      className="fixed inset-0 z-[80] flex items-start justify-center px-4 pt-24 transition-all duration-300"
      style={{
        opacity: open ? 1 : 0,
        pointerEvents: open ? "auto" : "none"
      }}
      aria-hidden={!open}
    >
      <button
        className="absolute inset-0 cursor-default bg-white/45"
        aria-label="Close contact"
        onClick={onClose}
        type="button"
      />
      <section
        className="contact-panel animate-fade-rise relative w-full max-w-md rounded-[28px] bg-white/90 p-5 text-black shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-label={labels.contactDetails}
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-3xl font-normal">{labels.contactDetails}</h2>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition-transform hover:scale-[1.03]"
            onClick={onClose}
            type="button"
            aria-label="Close contact"
          >
            <X size={18} strokeWidth={1.8} />
          </button>
        </div>
        <div className="space-y-3">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div className="flex items-center gap-3 rounded-2xl bg-black/[0.04] px-4 py-3" key={item.label}>
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black text-white">
                  <Icon size={17} strokeWidth={1.8} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-black/45">{item.label}</p>
                  <p className="mt-1 text-sm font-medium text-black sm:text-base">{item.value}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

function LocationPanel({ language, open, onClose }) {
  const labels = profileContent.labels[language];

  return (
    <div
      className="fixed inset-0 z-[75] flex items-start justify-center px-4 pt-24 transition-all duration-300"
      style={{
        opacity: open ? 1 : 0,
        pointerEvents: open ? "auto" : "none"
      }}
      aria-hidden={!open}
    >
      <button
        className="absolute inset-0 cursor-default bg-white/35"
        aria-label="Close location"
        onClick={onClose}
        type="button"
      />
      <section
        className="location-panel interactive-frame animate-fade-rise relative w-full max-w-lg rounded-[28px] bg-white/90 p-5 text-center text-black shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-label={labels.locationDetails}
      >
        <span className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
          <MapPin size={20} strokeWidth={1.8} />
        </span>
        <h2 className="text-3xl font-normal">{labels.locationDetails}</h2>
        <p className="mt-4 text-base font-medium leading-7 text-black/70">{profileContent.location}</p>
      </section>
    </div>
  );
}

function LanguagePicker({ language, setLanguage, className = "", style }) {
  const [open, setOpen] = useState(false);

  function selectLanguage(nextLanguage) {
    setLanguage(nextLanguage);
    setOpen(false);
  }

  return (
    <div className={`relative inline-flex ${className}`} style={style}>
      <LiquidButton
        className="h-10 rounded-full px-4 font-medium md:text-[15px]"
        aria-label="Choose language"
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((current) => !current)}
        type="button"
      >
        <Globe2 size={16} strokeWidth={1.8} />
        {languageLabel(language)}
      </LiquidButton>

      <div
        className="language-menu interactive-frame absolute right-0 top-[calc(100%+10px)] z-50 w-40 rounded-2xl bg-white/90 p-2 text-left shadow-2xl transition-all duration-300"
        role="menu"
        style={{
          opacity: open ? 1 : 0,
          transform: open ? "translateY(0)" : "translateY(-8px)",
          pointerEvents: open ? "auto" : "none"
        }}
      >
        {languageOptions.map((option) => (
          <button
            className={`interactive-soft flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm font-medium transition-colors hover:bg-black/5 ${
              option.key === language ? "text-black" : "text-black/58"
            }`}
            key={option.key}
            onClick={() => selectLanguage(option.key)}
            role="menuitem"
            type="button"
          >
            {option.label}
            {option.key === language ? <span className="h-1.5 w-1.5 rounded-full bg-black" /> : null}
          </button>
        ))}
      </div>
    </div>
  );
}

function Navbar({ language, setLanguage, route, setRoute, onContact, onLocation }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const labels = profileContent.labels[language];

  function navigate(nextRoute) {
    setRoute(nextRoute);
    window.location.hash = nextRoute === "home" ? "" : nextRoute;
    setMenuOpen(false);
  }

  function handleContact() {
    setMenuOpen(false);
    onContact();
  }

  function handleLocation() {
    setMenuOpen(false);
    onLocation();
  }

  return (
    <header className="relative z-50 px-4 py-4 text-black sm:px-6 md:px-8 md:py-6">
      <nav className="mx-auto flex max-w-7xl items-center justify-between">
        <button
          className="display-font animate-fade-rise flex h-8 items-center text-xl font-normal tracking-tight transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:text-black/60 md:h-10 md:text-2xl"
          style={animationDelay(0)}
          aria-label={`${profileContent.brand[language]} home`}
          onClick={() => navigate("home")}
        >
          {profileContent.brand[language]}
        </button>

        <div className="hidden items-center gap-3 md:flex">
          <ResumePicker language={language} className="animate-fade-rise" style={animationDelay(90)} />
          {profileContent.navItems.map((item, index) => {
            if (item.action === "me") {
              return (
                <LiquidButton
                  key={item.key}
                  className={`animate-fade-rise rounded-full px-4 py-2 font-medium md:px-6 md:text-[15px] ${
                    route === "me" ? "text-black" : "text-black/86"
                  }`}
                  style={animationDelay(navDelays[index])}
                  onClick={() => navigate("me")}
                >
                  {labels.me}
                </LiquidButton>
              );
            }

            if (item.action === "projects") {
              return (
                <LiquidButton
                  key={item.key}
                  className={`animate-fade-rise rounded-full px-4 py-2 font-medium md:px-6 md:text-[15px] ${
                    route === "projects" ? "text-black" : "text-black/86"
                  }`}
                  style={animationDelay(navDelays[index])}
                  onClick={() => navigate("projects")}
                >
                  {labels.projects}
                </LiquidButton>
              );
            }

            return (
              <LiquidButton
                key={item.key}
                className="animate-fade-rise rounded-full px-4 py-2 font-medium text-black/86 md:px-6 md:text-[15px]"
                style={animationDelay(navDelays[index])}
                onClick={handleLocation}
              >
                {labels.location}
              </LiquidButton>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <LanguagePicker
            language={language}
            setLanguage={setLanguage}
            className="animate-fade-rise"
            style={animationDelay(300)}
          />

          <LiquidButton
            className="animate-fade-rise relative h-10 w-10 rounded-full md:hidden"
            style={animationDelay(350)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Menu
              size={20}
              className={`absolute transition-all duration-500 ease-out ${
                menuOpen ? "rotate-180 scale-50 opacity-0" : "rotate-0 scale-100 opacity-100"
              }`}
            />
            <X
              size={20}
              className={`absolute transition-all duration-500 ease-out ${
                menuOpen ? "rotate-0 scale-100 opacity-100" : "-rotate-180 scale-50 opacity-0"
              }`}
            />
          </LiquidButton>
        </div>
      </nav>

      <MobileMenu
        open={menuOpen}
        route={route}
        navigate={navigate}
        language={language}
        onLocation={handleLocation}
      />
    </header>
  );
}

function MobileMenu({ open, route, navigate, language, onLocation }) {
  const labels = profileContent.labels[language];

  return (
    <div
      className="absolute left-0 right-0 top-[72px] z-40 border-y border-white/10 bg-white/80 px-4 py-5 shadow-2xl transition-all duration-500 ease-out sm:px-6 md:hidden"
      style={{
        opacity: open ? 1 : 0,
        pointerEvents: open ? "auto" : "none",
        transform: open ? "translateY(0)" : "translateY(-1rem)"
      }}
    >
      <div className="mx-auto flex max-w-3xl flex-col">
        <div
          className="rounded-lg px-3 py-3 transition-all duration-500 ease-out"
          style={{
            opacity: open ? 1 : 0,
            transform: open ? "translateX(0)" : "translateX(-1.25rem)"
          }}
        >
          <p className="mb-3 text-xs uppercase tracking-[0.22em] text-black/45">{labels.statement}</p>
          <div className="flex flex-wrap gap-2">
            <LiquidLink
              className="rounded-full px-4 py-2"
              href={profileContent.resumes.english}
              target="_blank"
              rel="noreferrer"
            >
              {labels.englishResume}
            </LiquidLink>
            <LiquidLink
              className="rounded-full px-4 py-2"
              href={profileContent.resumes.chinese}
              target="_blank"
              rel="noreferrer"
            >
              {labels.chineseResume}
            </LiquidLink>
          </div>
        </div>

        <button
          className={`rounded-lg px-3 py-3 text-left text-sm font-medium transition-all duration-500 ease-out hover:bg-black/5 ${
            route === "me" ? "text-black" : "text-black/78"
          }`}
          style={{
            opacity: open ? 1 : 0,
            transform: open ? "translateX(0)" : "translateX(-1.25rem)",
            transitionDelay: "50ms"
          }}
          onClick={() => navigate("me")}
        >
          {labels.me}
        </button>

        <button
          className={`rounded-lg px-3 py-3 text-left text-sm font-medium transition-all duration-500 ease-out hover:bg-black/5 ${
            route === "projects" ? "text-black" : "text-black/78"
          }`}
          style={{
            opacity: open ? 1 : 0,
            transform: open ? "translateX(0)" : "translateX(-1.25rem)",
            transitionDelay: "100ms"
          }}
          onClick={() => navigate("projects")}
        >
          {labels.projects}
        </button>

        <button
          className="rounded-lg px-3 py-3 text-left text-sm font-medium text-black/78 transition-all duration-500 ease-out hover:bg-black/5"
          style={{
            opacity: open ? 1 : 0,
            transform: open ? "translateX(0)" : "translateX(-1.25rem)",
            transitionDelay: "150ms"
          }}
          onClick={onLocation}
          type="button"
        >
          {labels.location}
        </button>
      </div>
    </div>
  );
}

function Schools({ language }) {
  return (
    <div
      className="animate-fade-rise mb-7 flex flex-wrap items-center justify-center gap-2 text-[11px] text-black sm:gap-3 sm:text-xs md:mb-9"
      style={animationDelay(300)}
    >
      {profileContent.schools.map((school) => (
        <span
          className="liquid-glass interactive-frame inline-flex items-center gap-2 rounded-full px-3 py-1.5 font-medium text-black/90"
          key={school.shortName}
        >
          <span className="school-logo-frame">
            <img src={school.logoSrc} alt={`${school.shortName} logo`} />
          </span>
          <span>
            {school.name[language]} · {school.program[language]}
          </span>
        </span>
      ))}
    </div>
  );
}

function SkillGrid({ language }) {
  return (
    <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-2">
      {profileContent.skills[language].map((skill, index) => {
        const Icon = skillIcons[index];

        return (
          <div
            className="liquid-glass interactive-frame animate-fade-rise inline-flex items-center gap-2 rounded-full px-3 py-2 text-center sm:px-4"
            key={skill}
            style={animationDelay(720 + index * 70)}
          >
            <Icon size={16} className="text-black" strokeWidth={1.8} />
            <p className="text-sm font-medium leading-snug text-black/88">{skill}</p>
          </div>
        );
      })}
    </div>
  );
}

function HomePage({ language, onContact }) {
  const copy = profileContent.hero[language];
  const labels = profileContent.labels[language];
  const page = profileContent.projectsPage[language];

  return (
    <main className="route-surface relative z-10 text-black">
      <section
        className="home-hero relative flex min-h-[calc(100dvh-72px)] flex-col items-center justify-center px-5 pb-32 pt-8 text-center sm:px-6 sm:pb-36 md:min-h-[calc(100dvh-88px)]"
        style={{ perspective: "1200px" }}
      >
        <div className="hero-forward mx-auto max-w-5xl">
          <h1
            className="animate-fade-rise mx-auto max-w-5xl text-[2.65rem] font-normal leading-[0.95] sm:text-6xl md:text-7xl lg:text-8xl"
            style={{ ...animationDelay(180), letterSpacing: 0 }}
          >
            {copy.title}
          </h1>

          <div
            className="display-font animate-fade-rise mx-auto mt-6 max-w-2xl text-base font-semibold italic leading-relaxed text-black sm:mt-7 sm:text-xl"
            style={animationDelay(320)}
          >
            <p>{copy.statement}</p>
            {copy.intro ? <p className="mt-2">{copy.intro}</p> : null}
          </div>
        </div>

        <button
          className="interactive-dark animate-fade-rise absolute bottom-8 inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-black px-10 py-3.5 text-sm font-medium text-white transition-transform duration-300 hover:scale-[1.04] sm:bottom-12 sm:px-14 sm:py-5 sm:text-base"
          style={animationDelay(560)}
          onClick={onContact}
          type="button"
        >
          <Mail size={18} strokeWidth={1.8} />
          {labels.contactMe}
        </button>
      </section>

      <section className="home-projects-section px-4 py-10 sm:px-6 md:px-8 md:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 text-center md:mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/42">
              {labels.selectedProjects}
            </p>
            <h2 className="mx-auto mt-3 max-w-4xl text-3xl font-normal leading-[1.04] sm:text-5xl md:text-6xl">
              {page.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-black/58 sm:text-base">
              {page.intro}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {profileContent.projects.map((project, index) => (
              <a
                className="project-card home-project-card liquid-glass group flex min-h-full flex-col rounded-[24px] p-3 sm:p-4"
                href={project.url}
                key={project.url}
                rel="noreferrer"
                target="_blank"
                style={animationDelay(120 + index * 90)}
              >
                <ProjectMedia project={project} title={project.title[language]} />
                <div className="flex flex-1 flex-col justify-between p-2 sm:p-3">
                  <div>
                    <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-black/42">
                      {project.eyebrow[language]}
                    </p>
                    <div className="mt-3 flex items-center justify-between gap-3">
                      <h3 className="display-font text-2xl font-normal leading-tight sm:text-3xl">{project.title[language]}</h3>
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                        <ArrowUpRight size={17} strokeWidth={1.8} />
                      </span>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-black/58">{project.description[language]}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function ProjectMedia({ project, title }) {
  if (project.coverImage) {
    return (
      <img
        className="project-media-image"
        src={project.coverImage}
        alt={`${title} project cover`}
        width={960}
        height={540}
        loading="lazy"
      />
    );
  }

  if (!project.demoVideo) {
    return (
      <div className="project-media-placeholder">
        <WandSparkles size={24} strokeWidth={1.8} />
      </div>
    );
  }

  return (
    <video
      className="project-media-video"
      src={project.demoVideo}
      poster={project.posterImage}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      onCanPlay={(event) => {
        event.currentTarget.play().catch(() => {});
      }}
      aria-label={`${title} demo video`}
    />
  );
}

function MePage({ language, setRoute }) {
  const labels = profileContent.labels[language];
  const about = profileContent.about[language];
  const copy = profileContent.mePage[language];
  const media = profileContent.personalMedia;
  const [photoIndex, setPhotoIndex] = useState(null);
  const [photoGallery, setPhotoGallery] = useState(media.photos);
  const heroPhotos = [media.photos[0], media.photos[6]];
  const beyondPhotos = [media.photos[2], media.photos[5]];
  const openPhotos = (photos, index) => {
    setPhotoGallery(photos);
    setPhotoIndex(index);
  };

  return (
    <main className="route-surface me-page relative z-10 text-black">
        <button
          className="me-back inline-flex items-center gap-2 text-sm font-medium text-black/70 transition-colors hover:text-black"
          type="button"
          onClick={() => {
            setRoute("home");
            window.location.hash = "";
          }}
        >
          <ArrowLeft size={17} strokeWidth={1.8} />
          {labels.backHome}
        </button>

        <section className="me-intro" aria-labelledby="me-heading">
          <div className="me-intro-copy">
            <p className="me-eyebrow">{about.eyebrow}</p>
            <h1 id="me-heading">{about.title}</h1>
            <div className="me-intro-text">
              {about.intro.map((paragraph, index) => <p key={paragraph} className={index === 0 ? "me-intro-lead" : ""}>{paragraph}</p>)}
            </div>
          </div>
          <div className="me-collage">
            <PhotoFrame photo={heroPhotos[0]} language={language} copy={copy} onOpen={() => openPhotos(heroPhotos, 0)} className="me-photo-main" eager />
            <PhotoFrame photo={heroPhotos[1]} language={language} copy={copy} onOpen={() => openPhotos(heroPhotos, 1)} className="me-photo-coast" eager />
            <p className="me-collage-note display-font">{copy.note}</p>
          </div>
        </section>

        <LifeStory story={about} galleries={media.chapterGalleries} language={language} copy={copy} onOpenPhotos={openPhotos} />

        <section className="me-golf" aria-labelledby="me-golf-heading">
          <div className="me-golf-copy">
            <p className="me-eyebrow">{copy.filmEyebrow}</p>
            <h2 id="me-golf-heading">{about.beyondTitle}</h2>
            <div className="me-golf-text">
              {about.beyondWork.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <div className="me-golf-photos" role="group" aria-label={about.beyondTitle}>
              {beyondPhotos.map((photo, index) => (
                <PhotoFrame key={photo.src} photo={photo} language={language} copy={copy} onOpen={() => openPhotos(beyondPhotos, index)} />
              ))}
            </div>
            <div className="me-golf-rule" />
            <p className="me-film-note">{copy.filmNote}</p>
          </div>
          <GolfFilm media={media} copy={copy} />
        </section>

          <div className="me-facts">
            <section>
              <div className="me-fact-heading">
                <GraduationCap size={18} strokeWidth={1.8} />
                <h2 className="text-3xl font-normal">{labels.schools}</h2>
              </div>
              <Schools language={language} />
            </section>

            <section>
              <div className="me-fact-heading">
                <WandSparkles size={18} strokeWidth={1.8} />
                <h2 className="text-3xl font-normal">{labels.skills}</h2>
              </div>
              <SkillGrid language={language} />
            </section>
          </div>
      <footer className="me-story-closing">
        {about.closing.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        <p className="me-story-signature display-font"><strong>{about.signature}</strong></p>
      </footer>
      <PhotoLightbox photos={photoGallery} index={photoIndex} setIndex={setPhotoIndex} language={language} copy={copy} />
    </main>
  );
}

function ProjectsPage({ language, setRoute }) {
  const labels = profileContent.labels[language];
  const page = profileContent.projectsPage[language];

  return (
    <main className="route-surface relative z-10 flex flex-1 flex-col justify-start px-4 py-8 text-black sm:px-6 md:px-12 md:py-10">
      <section className="w-full">
        <button
          className="animate-fade-rise mb-5 inline-flex items-center gap-2 text-sm font-medium text-black/70 transition-colors hover:text-black"
          style={animationDelay(160)}
          onClick={() => {
            setRoute("home");
            window.location.hash = "";
          }}
        >
          <ArrowLeft size={17} strokeWidth={1.8} />
          {labels.backHome}
        </button>

        <div className="grid gap-8 xl:grid-cols-[minmax(280px,0.46fr)_minmax(0,1fr)]">
          <div>
            <p
              className="animate-fade-rise mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-black/55"
              style={animationDelay(240)}
            >
              {labels.selectedProjects}
            </p>
            <h1
              className="animate-fade-rise max-w-3xl text-3xl font-normal leading-[1.04] sm:text-5xl md:text-6xl"
              style={animationDelay(320)}
            >
              {page.title}
            </h1>
            <p
              className="animate-fade-rise mt-5 max-w-2xl text-sm leading-7 text-black/62 sm:text-base md:leading-8"
              style={animationDelay(400)}
            >
              {page.intro}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
            {profileContent.projects.map((project, index) => (
              <a
                className="project-card liquid-glass animate-fade-rise group grid gap-4 rounded-[28px] p-4 xl:grid-cols-[minmax(280px,0.85fr)_minmax(0,1fr)]"
                href={project.url}
                key={project.url}
                rel="noreferrer"
                target="_blank"
                style={animationDelay(520 + index * 130)}
              >
                <ProjectMedia project={project} title={project.title[language]} />

                <div className="flex min-w-0 flex-col justify-between p-1">
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/45">
                          {project.eyebrow[language]}
                        </p>
                        <h2 className="mt-3 text-2xl font-normal leading-tight text-black sm:text-3xl">
                          {project.title[language]}
                        </h2>
                      </div>
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                        <ArrowUpRight size={19} strokeWidth={1.8} />
                      </span>
                    </div>
                    <p className="mt-5 text-sm leading-7 text-black/62 sm:text-base">
                      {project.description[language]}
                    </p>
                  </div>
                  <p className="mt-5 truncate text-xs text-black/42">{project.url}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function Background({ route }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    video.play().catch(() => {});

    return () => {
      video.pause();
    };
  }, []);

  return (
    <>
      <video
        ref={videoRef}
        className={`hero-background-video fixed z-0 w-full object-cover ${route !== "home" ? "is-soft-focus" : ""}`}
        src={profileContent.videoUrl}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onCanPlay={(event) => {
          event.currentTarget.play().catch(() => {});
        }}
      />
      <div className={`video-tone ${route !== "home" ? "is-soft-focus" : ""}`} />
    </>
  );
}

function App() {
  const [route, setRoute] = useState(() => {
    if (window.location.hash === "#projects") return "projects";
    if (window.location.hash === "#me") return "me";
    return "home";
  });
  const [language, setLanguage] = useState("en");
  const [contactOpen, setContactOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);

  useEffect(() => {
    function handleHashChange() {
      if (window.location.hash === "#projects") {
        setRoute("projects");
      } else if (window.location.hash === "#me") {
        setRoute("me");
      } else {
        setRoute("home");
      }
    }

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div className={`app-shell relative flex h-dvh min-h-dvh overflow-x-hidden overflow-y-auto bg-white lang-${language}`}>
      <Background route={route} />

      <div className="relative z-10 flex min-h-full w-full flex-col">
        <Navbar
          language={language}
          setLanguage={setLanguage}
          route={route}
          setRoute={setRoute}
          onContact={() => setContactOpen(true)}
          onLocation={() => setLocationOpen(true)}
        />
        {route === "projects" ? (
          <ProjectsPage language={language} setRoute={setRoute} />
        ) : route === "me" ? (
          <MePage language={language} setRoute={setRoute} />
        ) : (
          <HomePage language={language} onContact={() => setContactOpen(true)} />
        )}
      </div>

      <ContactPanel language={language} open={contactOpen} onClose={() => setContactOpen(false)} />
      <LocationPanel language={language} open={locationOpen} onClose={() => setLocationOpen(false)} />
    </div>
  );
}

const rootElement = document.getElementById("root");

if (!window.__donaldPortfolioRoot) {
  window.__donaldPortfolioRoot = createRoot(rootElement);
}

window.__donaldPortfolioRoot.render(<App />);
