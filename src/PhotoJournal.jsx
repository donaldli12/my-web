import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, Pause, Play, Volume2, VolumeX, X } from "lucide-react";

export function PhotoFrame({ photo, language, copy, onOpen, className = "", eager = false }) {
  return (
    <figure className={`me-photo ${className}`}>
      <button type="button" className="me-photo-button" onClick={onOpen} aria-label={`${copy.openPhoto}: ${photo.caption[language]}`}>
        <img src={photo.src} alt={photo.caption[language]} loading={eager ? "eager" : "lazy"} decoding="async" style={{ objectPosition: photo.position }} width="1200" height="1600" />
        <span className="me-photo-expand" aria-hidden="true"><Expand size={17} /></span>
      </button>
      <figcaption>{photo.caption[language]}</figcaption>
    </figure>
  );
}

export function PhotoLightbox({ photos, index, setIndex, language, copy }) {
  const dialogRef = useRef(null);
  const open = index !== null;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  const move = (direction) => setIndex((current) => (current + direction + photos.length) % photos.length);
  const photo = open ? photos[index] : null;

  return (
    <dialog ref={dialogRef} className="me-lightbox" aria-label={copy.galleryTitle} onCancel={() => setIndex(null)} onClose={() => setIndex(null)} onClick={(event) => { if (event.target === event.currentTarget) setIndex(null); }} onKeyDown={(event) => {
      if (event.key === "ArrowLeft") { event.preventDefault(); move(-1); }
      if (event.key === "ArrowRight") { event.preventDefault(); move(1); }
    }}>
      <button className="me-lightbox-close" type="button" aria-label={copy.closePhoto} onClick={() => setIndex(null)} autoFocus><X size={24} /></button>
      {photo && (
        <div className="me-lightbox-content">
          <img src={photo.src} alt={photo.caption[language]} />
          <div className="me-lightbox-footer">
            <button type="button" aria-label={copy.previousPhoto} onClick={() => move(-1)}><ChevronLeft size={22} /></button>
            <p>{photo.caption[language]} <span>{index + 1} / {photos.length}</span></p>
            <button type="button" aria-label={copy.nextPhoto} onClick={() => move(1)}><ChevronRight size={22} /></button>
          </div>
        </div>
      )}
    </dialog>
  );
}

export function GolfFilm({ media, copy }) {
  const videoRef = useRef(null);
  const userPaused = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !userPaused.current && !reducedMotion.matches) video.play().catch(() => {});
      else video.pause();
    }, { threshold: 0.25 });
    observer.observe(video);
    return () => { observer.disconnect(); video.pause(); };
  }, []);

  const togglePlayback = () => {
    const video = videoRef.current;
    userPaused.current = !video.paused;
    if (video.paused) video.play().catch(() => {});
    else video.pause();
  };

  return (
    <div className="me-golf-film">
      <video ref={videoRef} src={media.golfVideo} poster={media.golfPoster} muted={muted} loop playsInline preload="metadata" aria-label={copy.filmNote} onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} />
      <div className="me-film-controls">
        <button type="button" aria-label={muted ? copy.unmute : copy.mute} onClick={() => setMuted((current) => !current)}>{muted ? <VolumeX size={19} /> : <Volume2 size={19} />}</button>
        <button type="button" aria-label={playing ? copy.pause : copy.play} onClick={togglePlayback}>{playing ? <Pause size={19} /> : <Play size={19} />}</button>
      </div>
    </div>
  );
}
