<template>
  <header :class="['nav', { 'nav--scrolled': scrolled }]">
    <div class="container nav-inner">
      <a href="#" class="nav-logo">Glow Studio</a>

      <nav class="nav-links" :class="{ 'nav-links--open': menuOpen }">
        <a href="#services" @click="menuOpen = false">Services</a>
        <a href="#gallery" @click="menuOpen = false">Gallery</a>
        <a href="#team" @click="menuOpen = false">Team</a>
        <a href="#reviews" @click="menuOpen = false">Reviews</a>
        <a href="#booking" class="nav-cta" @click="menuOpen = false">Book Now</a>
      </nav>

      <button
        class="nav-burger"
        :class="{ 'nav-burger--open': menuOpen }"
        @click="menuOpen = !menuOpen"
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const scrolled = ref(false);
const menuOpen = ref(false);

function handleScroll() {
  scrolled.value = window.scrollY > 80;
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 20px 0;
  transition: all 0.4s var(--ease);
}

.nav--scrolled {
  padding: 12px 0;
  background: rgba(250, 247, 242, 0.92);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 1px 0 rgba(44, 44, 44, 0.06);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-logo {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-weight: 600;
  font-style: italic;
  font-size: 1.6rem;
  color: var(--white);
  transition: color var(--transition);
  z-index: 10;
}

.nav--scrolled .nav-logo {
  color: var(--charcoal);
}

.nav-links {
  display: none;
  align-items: center;
  gap: 36px;
}

.nav-links a {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.88rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
  letter-spacing: 0.5px;
  transition: color var(--transition);
  position: relative;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 1.5px;
  background: var(--rose);
  transition: width var(--transition);
}

.nav-links a:hover::after {
  width: 100%;
}

.nav--scrolled .nav-links a {
  color: var(--text-light);
}

.nav--scrolled .nav-links a:hover {
  color: var(--charcoal);
}

.nav-links .nav-cta {
  padding: 10px 28px;
  background: var(--rose);
  color: var(--white) !important;
  border-radius: 100px;
  font-weight: 700;
  letter-spacing: 0.5px;
  transition: background var(--transition), transform var(--transition);
}

.nav-links .nav-cta::after {
  display: none;
}

.nav-links .nav-cta:hover {
  background: var(--rose-hover);
  transform: translateY(-1px);
}

/* Burger */
.nav-burger {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 28px;
  height: 28px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 10;
  padding: 0;
}

.nav-burger span {
  display: block;
  width: 100%;
  height: 2px;
  background: var(--white);
  border-radius: 2px;
  transition: all 0.3s var(--ease);
}

.nav--scrolled .nav-burger span {
  background: var(--charcoal);
}

.nav-burger--open span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.nav-burger--open span:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}

.nav-burger--open span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* Mobile menu */
.nav-links--open {
  display: flex;
  flex-direction: column;
  position: fixed;
  inset: 0;
  background: var(--dark-warm);
  justify-content: center;
  align-items: center;
  gap: 32px;
  z-index: 5;
}

.nav-links--open a {
  font-size: 1.4rem;
  color: rgba(255, 255, 255, 0.85) !important;
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-weight: 500;
  letter-spacing: 1px;
}

.nav-links--open .nav-cta {
  font-size: 1rem !important;
  font-family: 'DM Sans', sans-serif !important;
  margin-top: 12px;
}

@media (min-width: 768px) {
  .nav-links {
    display: flex;
  }

  .nav-burger {
    display: none;
  }
}
</style>
