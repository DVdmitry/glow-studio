<template>
  <section id="reviews" class="testimonials">
    <div class="container">
      <div class="testimonials-layout">
        <div class="testimonials-left reveal reveal--left">
          <span class="section-label">Testimonials</span>
          <h2 class="section-title">Loved by<br /><em>Our Clients</em></h2>
          <p class="section-subtitle">
            Real stories from women who trust us with their beauty
          </p>
          <div class="google-badge">
            <div class="badge-stars">
              <span v-for="n in 5" :key="n" class="star">&#9733;</span>
            </div>
            <span class="badge-text">4.9 on Google · 200+ reviews</span>
          </div>
        </div>

        <div class="testimonials-right">
          <div
            v-for="(review, i) in reviews"
            :key="review.name"
            :class="['review-card', 'reveal', 'reveal--right', `reveal-d${i + 2}`]"
          >
            <div class="review-header">
              <img :src="review.avatar" :alt="review.name" class="review-avatar" loading="lazy" />
              <div>
                <span class="review-name">{{ review.name }}</span>
                <div class="review-stars">
                  <span v-for="n in review.stars" :key="n" class="star">&#9733;</span>
                </div>
              </div>
            </div>
            <p class="review-text">&ldquo;{{ review.text }}&rdquo;</p>
            <span class="review-service">{{ review.service }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
useScrollReveal();

interface Review {
  name: string;
  text: string;
  stars: number;
  service: string;
  avatar: string;
}

const reviews: Review[] = [
  {
    name: 'Magdalena K.',
    text: 'The balayage Karolina did is absolutely stunning. Best salon in Tricity — I recommend it to all my friends!',
    stars: 5,
    service: 'Balayage',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80',
  },
  {
    name: 'Joanna M.',
    text: 'I come here every month for gel manicure. Always perfect, always on time. The atmosphere is so relaxing.',
    stars: 5,
    service: 'Gel Manicure',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80',
  },
  {
    name: 'Aleksandra W.',
    text: 'Had my bridal package here — hair, makeup, nails. Everything was flawless. My wedding day was perfect.',
    stars: 5,
    service: 'Bridal Package',
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=100&q=80',
  },
];
</script>

<style scoped>
.testimonials {
  padding: 100px 0;
  background: var(--white);
}

.testimonials-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
  align-items: start;
}

.testimonials-left em {
  font-style: italic;
  color: var(--rose);
}

.google-badge {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  margin-top: 2rem;
  padding: 12px 20px;
  background: var(--cream);
  border-radius: 100px;
  border: 1px solid var(--border);
}

.badge-stars {
  display: flex;
  gap: 2px;
}

.badge-stars .star {
  color: var(--gold);
  font-size: 1rem;
}

.badge-text {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--text-light);
}

.testimonials-right {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.review-card {
  background: var(--cream);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  padding: 28px;
  transition: transform var(--transition), box-shadow var(--transition);
}

.review-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-lg);
}

.review-header {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 16px;
}

.review-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--border);
}

.review-name {
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  font-size: 0.95rem;
  color: var(--charcoal);
  display: block;
  margin-bottom: 2px;
}

.review-stars {
  display: flex;
  gap: 1px;
}

.review-stars .star {
  color: var(--gold);
  font-size: 0.85rem;
}

.review-text {
  font-size: 0.95rem;
  color: var(--text-light);
  line-height: 1.7;
  font-style: italic;
  margin-bottom: 12px;
}

.review-service {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--rose);
  padding: 4px 12px;
  background: var(--rose-light);
  border-radius: 100px;
}

@media (min-width: 768px) {
  .testimonials-layout {
    grid-template-columns: 1fr 1.2fr;
    gap: 64px;
  }

  .testimonials-left {
    position: sticky;
    top: 120px;
  }
}
</style>
