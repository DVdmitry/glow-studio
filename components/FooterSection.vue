<template>
  <footer class="footer noise-overlay">
    <div class="container">
      <!-- Top: CTA Strip -->
      <div class="footer-cta reveal">
        <h2 class="cta-title">Ready to <em>Glow</em>?</h2>
        <a href="#booking" class="cta-btn">Book Your Visit</a>
      </div>

      <div class="footer-divider" />

      <!-- Main Footer Grid -->
      <div class="footer-grid">
        <div class="footer-brand reveal reveal-d1">
          <span class="footer-logo">Glow Studio</span>
          <p class="footer-tagline">
            Premium beauty treatments, crafted with passion since 2018.
          </p>
          <div class="footer-social">
            <a href="#" aria-label="Instagram" class="social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href="#" aria-label="Facebook" class="social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="#" aria-label="WhatsApp" class="social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </a>
          </div>
        </div>

        <div class="footer-col reveal reveal-d2">
          <h4 class="col-title">Quick Links</h4>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#team">Our Team</a>
          <a href="#reviews">Reviews</a>
          <a href="#booking">Book Now</a>
        </div>

        <div class="footer-col reveal reveal-d3">
          <h4 class="col-title">Contact</h4>
          <p>ul. Świętojańska 120</p>
          <p>81-388 Gdynia, Poland</p>
          <a href="tel:+48587654321">+48 58 765 4321</a>
          <a href="mailto:hello@glowstudio.pl">hello@glowstudio.pl</a>
        </div>

        <div class="footer-col reveal reveal-d4">
          <h4 class="col-title">Hours</h4>
          <div class="hours-row">
            <span>Tue – Fri</span>
            <span>10:00 – 20:00</span>
          </div>
          <div class="hours-row">
            <span>Saturday</span>
            <span>10:00 – 18:00</span>
          </div>
          <div class="hours-row">
            <span>Sun – Mon</span>
            <span class="closed">Closed</span>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; 2026 Glow Studio. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
useScrollReveal();
</script>

<style scoped>
.footer {
  position: relative;
  background: var(--dark-warm);
  color: rgba(250, 247, 242, 0.65);
  padding: 0 0 32px;
}

/* CTA Strip */
.footer-cta {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 80px 0;
  text-align: center;
}

.cta-title {
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  color: var(--cream);
  font-weight: 300;
}

.cta-title em {
  font-weight: 600;
  font-style: italic;
  color: var(--rose);
}

.cta-btn {
  display: inline-block;
  padding: 16px 44px;
  background: var(--rose);
  color: var(--white);
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  font-size: 0.95rem;
  border-radius: 100px;
  letter-spacing: 0.5px;
  transition: all var(--transition);
  box-shadow: 0 4px 24px rgba(183, 110, 121, 0.35);
}

.cta-btn:hover {
  background: var(--rose-hover);
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(183, 110, 121, 0.4);
}

.footer-divider {
  height: 1px;
  background: rgba(250, 247, 242, 0.07);
}

/* Grid */
.footer-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 36px;
  padding: 56px 0;
}

.footer-brand {
  max-width: 280px;
}

.footer-logo {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-weight: 600;
  font-style: italic;
  font-size: 1.6rem;
  color: var(--cream);
  display: block;
  margin-bottom: 12px;
}

.footer-tagline {
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 20px;
}

.footer-social {
  display: flex;
  gap: 12px;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgba(250, 247, 242, 0.12);
  color: rgba(250, 247, 242, 0.5);
  transition: all var(--transition);
}

.social-link:hover {
  color: var(--rose);
  border-color: var(--rose);
  background: rgba(183, 110, 121, 0.08);
}

/* Columns */
.footer-col {
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 0.9rem;
}

.col-title {
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  font-size: 0.78rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--cream);
  margin-bottom: 4px;
}

.footer-col a {
  transition: color var(--transition);
}

.footer-col a:hover {
  color: var(--rose);
}

/* Hours */
.hours-row {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  max-width: 220px;
}

.closed {
  color: var(--rose);
}

/* Bottom */
.footer-bottom {
  padding-top: 32px;
  border-top: 1px solid rgba(250, 247, 242, 0.07);
  text-align: center;
  font-size: 0.8rem;
  color: rgba(250, 247, 242, 0.3);
}

@media (min-width: 768px) {
  .footer-cta {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }

  .footer-grid {
    grid-template-columns: 1.5fr 1fr 1fr 1fr;
    gap: 48px;
    padding: 64px 0;
  }
}
</style>
