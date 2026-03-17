<template>
  <section id="gallery" class="gallery noise-overlay">
    <div class="container">
      <div class="gallery-header reveal">
        <span class="section-label">Our Work</span>
        <h2 class="section-title" style="color: var(--cream);">Studio Gallery</h2>
        <p class="section-subtitle" style="color: rgba(250,247,242,0.55);">
          Every client leaves glowing — here's the proof
        </p>
      </div>

      <div class="gallery-grid">
        <div
          v-for="(img, i) in images"
          :key="i"
          :class="['gallery-item', `gallery-item--${img.span}`, 'reveal', 'reveal--scale', `reveal-d${(i % 4) + 1}`]"
        >
          <img :src="img.src" :alt="img.alt" loading="lazy" />
          <div class="gallery-hover">
            <span class="hover-tag">{{ img.tag }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
useScrollReveal();

interface GalleryImage {
  src: string;
  alt: string;
  tag: string;
  span: string;
}

const images: GalleryImage[] = [
  {
    src: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=800&q=80',
    alt: 'Hair styling session',
    tag: 'Hair',
    span: 'wide',
  },
  {
    src: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=600&q=80',
    alt: 'Hair coloring',
    tag: 'Balayage',
    span: 'normal',
  },
  {
    src: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=600&q=80',
    alt: 'Spa treatment',
    tag: 'Spa',
    span: 'normal',
  },
  {
    src: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80',
    alt: 'Beautiful result',
    tag: 'Styling',
    span: 'normal',
  },
  {
    src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80',
    alt: 'Salon atmosphere',
    tag: 'Our Space',
    span: 'wide',
  },
  {
    src: 'https://images.unsplash.com/photo-1457972729786-0411a3b2b626?auto=format&fit=crop&w=600&q=80',
    alt: 'Nail art detail',
    tag: 'Nails',
    span: 'normal',
  },
];
</script>

<style scoped>
.gallery {
  position: relative;
  padding: 100px 0;
  background: var(--dark-warm);
}

.gallery-header {
  margin-bottom: 3.5rem;
}

.gallery-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

.gallery-item {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  cursor: pointer;
}

.gallery-item img {
  width: 100%;
  height: 280px;
  object-fit: cover;
  transition: transform 0.8s var(--ease);
}

.gallery-item:hover img {
  transform: scale(1.06);
}

.gallery-hover {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 40%, rgba(26, 23, 21, 0.7) 100%);
  display: flex;
  align-items: flex-end;
  padding: 24px;
  opacity: 0;
  transition: opacity 0.4s var(--ease);
}

.gallery-item:hover .gallery-hover {
  opacity: 1;
}

.hover-tag {
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  font-size: 0.8rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--cream);
  padding: 6px 16px;
  border: 1px solid rgba(250, 247, 242, 0.3);
  border-radius: 100px;
}

@media (min-width: 640px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .gallery-item--wide {
    grid-column: span 2;
  }

  .gallery-item--wide img {
    height: 340px;
  }

  .gallery-item img {
    height: 300px;
  }
}

@media (min-width: 1024px) {
  .gallery-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  .gallery-item--wide {
    grid-column: span 2;
  }

  .gallery-item--wide img {
    height: 380px;
  }

  .gallery-item img {
    height: 320px;
  }
}
</style>
