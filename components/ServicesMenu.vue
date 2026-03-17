<template>
  <section id="services" class="services">
    <div class="container">
      <div class="services-header reveal">
        <span class="section-label">What We Do</span>
        <h2 class="section-title">Our Treatments</h2>
        <p class="section-subtitle">
          Every visit is a ritual — crafted with precision, delivered with care
        </p>
      </div>

      <div class="services-grid">
        <a
          v-for="(service, i) in services"
          :key="service.title"
          href="#booking"
          :class="['service-card', 'reveal', 'reveal--scale', `reveal-d${i + 1}`]"
        >
          <div class="card-image">
            <img :src="service.image" :alt="service.title" loading="lazy" />
            <div class="card-overlay" />
          </div>
          <div class="card-body">
            <h3 class="card-title">{{ service.title }}</h3>
            <p class="card-desc">{{ service.desc }}</p>
            <div class="card-footer">
              <span class="card-price">from €{{ service.price }}</span>
              <span class="card-arrow">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </span>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
useScrollReveal();

interface ServiceItem {
  title: string;
  desc: string;
  price: number;
  image: string;
}

const services: ServiceItem[] = [
  {
    title: 'Hair',
    desc: 'Cuts, Coloring, Balayage, Keratin & Styling',
    price: 25,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Nails',
    desc: 'Classic & Gel Manicure, Nail Art, Pedicure',
    price: 25,
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Face',
    desc: 'Facials, HydraFacial, Brow & Lash Treatments',
    price: 20,
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Body',
    desc: 'Relaxation Massage, Body Wraps, Waxing',
    price: 25,
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Lashes',
    desc: 'Extensions, Refills, Volume Lashes',
    price: 45,
    image: 'https://images.unsplash.com/photo-1583001931096-959e9a1a6223?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Bridal',
    desc: 'Complete Bridal Packages & Group Bookings',
    price: 150,
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80',
  },
];
</script>

<style scoped>
.services {
  padding: 100px 0;
  background: var(--white);
}

.services-header {
  margin-bottom: 3.5rem;
}

.services-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

.service-card {
  display: block;
  border-radius: var(--radius-xl);
  overflow: hidden;
  background: var(--cream);
  transition: transform 0.5s var(--ease), box-shadow 0.5s var(--ease);
  cursor: pointer;
}

.service-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-xl);
}

.card-image {
  position: relative;
  height: 220px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s var(--ease);
}

.service-card:hover .card-image img {
  transform: scale(1.08);
}

.card-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 50%, rgba(26, 23, 21, 0.15) 100%);
  transition: opacity var(--transition);
}

.service-card:hover .card-overlay {
  opacity: 0.6;
}

.card-body {
  padding: 24px;
}

.card-title {
  font-size: 1.5rem;
  margin-bottom: 6px;
  color: var(--charcoal);
}

.card-desc {
  font-size: 0.9rem;
  color: var(--text-light);
  line-height: 1.6;
  margin-bottom: 16px;
}

.card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card-price {
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  color: var(--rose);
  font-size: 0.95rem;
}

.card-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--rose-light);
  color: var(--rose);
  transition: all var(--transition);
}

.service-card:hover .card-arrow {
  background: var(--rose);
  color: var(--white);
  transform: translate(2px, -2px);
}

@media (min-width: 640px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
}

@media (min-width: 1024px) {
  .services-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
  }

  .card-image {
    height: 240px;
  }
}
</style>
