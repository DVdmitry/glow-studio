<template>
  <section class="hero noise-overlay">
    <div class="hero-bg">
      <img
        src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1920&q=80"
        alt="Glow Studio salon interior"
        class="hero-img"
      />
    </div>
    <div class="hero-overlay" />

    <div class="container hero-content">
      <span class="hero-label anim-in anim-d1">Premium Beauty Salon</span>
      <h1 class="hero-title anim-in anim-d2">
        Your Beauty,<br />
        <em>Our Passion</em>
      </h1>
      <p class="hero-subtitle anim-in anim-d3">
        Curated treatments for hair, skin and soul — in the heart of Gdynia
      </p>
      <div class="hero-actions anim-in anim-d4">
        <a href="#booking" class="hero-btn">Book Your Visit</a>
        <a href="#services" class="hero-btn-ghost">View Services</a>
      </div>
      <div class="hero-trust anim-in anim-d5">
        <div class="trust-item">
          <span class="trust-num">4.9</span>
          <span class="trust-label">Google Rating</span>
        </div>
        <div class="trust-divider" />
        <div class="trust-item">
          <span class="trust-num">8+</span>
          <span class="trust-label">Years Experience</span>
        </div>
        <div class="trust-divider" />
        <div class="trust-item">
          <span class="trust-num">2k+</span>
          <span class="trust-label">Happy Clients</span>
        </div>
      </div>
    </div>

    <div class="hero-scroll anim-in anim-d6">
      <div class="scroll-line" />
      <span class="scroll-text">Scroll</span>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 30%;
  transform: scale(1.05);
  animation: heroZoom 20s var(--ease) forwards;
}

@keyframes heroZoom {
  from { transform: scale(1.12); }
  to { transform: scale(1.0); }
}

.hero-overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  background:
    linear-gradient(
      180deg,
      rgba(26, 23, 21, 0.5) 0%,
      rgba(26, 23, 21, 0.3) 40%,
      rgba(26, 23, 21, 0.6) 80%,
      rgba(26, 23, 21, 0.85) 100%
    );
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 120px 20px 80px;
  color: var(--white);
}

.hero-label {
  display: inline-block;
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  font-size: 0.7rem;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 1.5rem;
  padding: 8px 20px;
  border: 1px solid rgba(201, 169, 110, 0.3);
  border-radius: 100px;
}

.hero-title {
  font-size: clamp(2.8rem, 7vw, 5.5rem);
  color: var(--white);
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
  font-weight: 300;
}

.hero-title em {
  font-weight: 600;
  font-style: italic;
}

.hero-subtitle {
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: rgba(255, 255, 255, 0.7);
  max-width: 460px;
  margin: 0 auto 2.5rem;
  line-height: 1.7;
}

.hero-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 3rem;
}

.hero-btn {
  display: inline-block;
  padding: 16px 40px;
  background: var(--rose);
  color: var(--white);
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  font-size: 0.9rem;
  border-radius: 100px;
  letter-spacing: 0.5px;
  transition: all var(--transition);
  box-shadow: 0 4px 24px var(--rose-glow);
}

.hero-btn:hover {
  background: var(--rose-hover);
  transform: translateY(-2px);
  box-shadow: 0 8px 32px var(--rose-glow);
}

.hero-btn-ghost {
  display: inline-block;
  padding: 16px 40px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: var(--white);
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-size: 0.9rem;
  border-radius: 100px;
  letter-spacing: 0.5px;
  transition: all var(--transition);
}

.hero-btn-ghost:hover {
  border-color: rgba(255, 255, 255, 0.5);
  background: rgba(255, 255, 255, 0.08);
}

/* Trust Stats */
.hero-trust {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
}

.trust-item {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.trust-num {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-weight: 700;
  font-size: 1.6rem;
  color: var(--white);
}

.trust-label {
  font-size: 0.7rem;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.45);
}

.trust-divider {
  width: 1px;
  height: 36px;
  background: rgba(255, 255, 255, 0.15);
}

/* Scroll Indicator */
.hero-scroll {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.scroll-line {
  width: 1px;
  height: 48px;
  position: relative;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.1);
}

.scroll-line::after {
  content: '';
  position: absolute;
  top: -100%;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--gold);
  animation: scrollDrop 2s var(--ease) infinite;
}

@keyframes scrollDrop {
  0% { top: -100%; }
  50% { top: 100%; }
  100% { top: 100%; }
}

.scroll-text {
  font-size: 0.65rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.35);
}

/* Entry Animations */
.anim-in {
  opacity: 0;
  transform: translate3d(0, 30px, 0);
  animation: heroEnter 1s var(--ease-out) forwards;
}

.anim-d1 { animation-delay: 0.2s; }
.anim-d2 { animation-delay: 0.4s; }
.anim-d3 { animation-delay: 0.6s; }
.anim-d4 { animation-delay: 0.8s; }
.anim-d5 { animation-delay: 1.0s; }
.anim-d6 { animation-delay: 1.3s; }

@keyframes heroEnter {
  from {
    opacity: 0;
    transform: translate3d(0, 30px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

@media (max-width: 480px) {
  .hero-trust {
    gap: 16px;
  }

  .trust-num {
    font-size: 1.3rem;
  }

  .trust-label {
    font-size: 0.6rem;
  }
}
</style>
