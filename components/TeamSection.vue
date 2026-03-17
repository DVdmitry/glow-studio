<template>
  <section id="team" class="team">
    <div class="container">
      <div class="team-header reveal">
        <span class="section-label">Meet the Artists</span>
        <h2 class="section-title">Our Team</h2>
        <p class="section-subtitle">
          Passionate professionals who make the magic happen
        </p>
      </div>

      <div class="team-grid">
        <div
          v-for="(member, i) in team"
          :key="member.name"
          :class="['team-card', 'reveal', `reveal-d${i + 1}`]"
        >
          <div class="team-photo">
            <img :src="member.photo" :alt="member.name" loading="lazy" />
            <div class="team-photo-accent" />
          </div>
          <div class="team-info">
            <h3 class="team-name">{{ member.name }}</h3>
            <span class="team-role">{{ member.role }}</span>
            <p class="team-exp">{{ member.experience }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
useScrollReveal();

interface TeamMember {
  name: string;
  role: string;
  experience: string;
  photo: string;
}

const team: TeamMember[] = [
  {
    name: 'Marta',
    role: 'Hair Colorist & Stylist',
    experience: '12 years of experience',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Karolina',
    role: 'Nail Artist',
    experience: '8 years of experience',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Ewa',
    role: 'Skin Care Specialist',
    experience: '10 years of experience',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Natalia',
    role: 'Lash & Brow Expert',
    experience: '6 years of experience',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
  },
];
</script>

<style scoped>
.team {
  padding: 100px 0;
  background: var(--cream);
}

.team-header {
  margin-bottom: 3.5rem;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.team-card {
  text-align: center;
}

.team-photo {
  position: relative;
  margin-bottom: 20px;
  border-radius: var(--radius-xl);
  overflow: hidden;
  aspect-ratio: 3 / 4;
}

.team-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s var(--ease);
}

.team-card:hover .team-photo img {
  transform: scale(1.04);
}

.team-photo-accent {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 60%, rgba(26, 23, 21, 0.3) 100%);
  pointer-events: none;
}

.team-name {
  font-size: 1.4rem;
  margin-bottom: 4px;
  color: var(--charcoal);
}

.team-role {
  display: block;
  font-size: 0.88rem;
  color: var(--rose);
  font-weight: 500;
  margin-bottom: 4px;
}

.team-exp {
  font-size: 0.8rem;
  color: var(--text-muted);
}

@media (min-width: 768px) {
  .team-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;
  }
}
</style>
