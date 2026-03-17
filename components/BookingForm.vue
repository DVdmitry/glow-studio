<template>
  <section id="booking" class="booking">
    <div class="container">
      <div class="booking-layout">
        <!-- Left: Atmospheric Image -->
        <div class="booking-visual reveal reveal--left">
          <img
            src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=800&q=80"
            alt="Glow Studio atmosphere"
            class="booking-img"
          />
          <div class="booking-img-overlay" />
          <div class="booking-img-text">
            <span class="img-tagline">Your glow awaits</span>
            <div class="img-contact">
              <p>Or call us directly</p>
              <a href="tel:+48587654321" class="img-phone">+48 58 765 4321</a>
            </div>
          </div>
        </div>

        <!-- Right: Form -->
        <div class="booking-form-wrap reveal reveal--right reveal-d2">
          <span class="section-label">Appointment</span>
          <h2 class="section-title">Book Your Visit</h2>
          <p class="section-subtitle" style="margin-bottom: 2rem;">
            Pick a service and we'll take care of the rest
          </p>

          <form class="form" @submit.prevent>
            <div class="form-row">
              <div class="field">
                <label for="fullName">Your Name</label>
                <input id="fullName" name="fullName" type="text" placeholder="Anna Nowak" />
              </div>
              <div class="field">
                <label for="phone">Phone</label>
                <input id="phone" name="phone" type="tel" placeholder="+48 500 123 456" />
              </div>
            </div>

            <div class="form-row">
              <div class="field">
                <label for="serviceCategory">Service</label>
                <select id="serviceCategory" name="serviceCategory" v-model="selectedCategory">
                  <option value="" disabled>Choose service...</option>
                  <option v-for="cat in categories" :key="cat" :value="cat">
                    {{ cat }}
                  </option>
                </select>
              </div>
              <div class="field">
                <label for="specificService">Treatment</label>
                <select
                  id="specificService"
                  name="specificService"
                  v-model="selectedService"
                  :disabled="!selectedCategory"
                >
                  <option value="" disabled>
                    {{ selectedCategory ? 'Choose treatment...' : 'Select service first' }}
                  </option>
                  <option v-for="svc in availableServices" :key="svc" :value="svc">
                    {{ svc }}
                  </option>
                </select>
              </div>
            </div>

            <div class="form-row">
              <div class="field">
                <label for="preferredDate">Date</label>
                <input id="preferredDate" name="preferredDate" type="date" />
              </div>
              <div class="field">
                <label for="preferredTime">Time</label>
                <select id="preferredTime" name="preferredTime">
                  <option value="" disabled selected>Choose time...</option>
                  <option v-for="t in timeSlots" :key="t" :value="t">{{ t }}</option>
                </select>
              </div>
            </div>

            <div class="field">
              <label for="notes">Notes <span class="optional">(optional)</span></label>
              <textarea
                id="notes"
                name="notes"
                rows="3"
                placeholder="Allergies, preferences, special requests..."
              />
            </div>

            <button type="submit" class="btn-submit">
              <span>Confirm Booking</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

useScrollReveal();

const servicesByCategory: Record<string, string[]> = {
  'Hair': ['Haircut & Blow-dry', 'Hair Coloring', 'Highlights / Balayage', 'Keratin Treatment', 'Styling / Updo'],
  'Nails': ['Classic Manicure', 'Gel Manicure', 'Nail Art', 'Classic Pedicure', 'Spa Pedicure'],
  'Face': ['Classic Facial', 'HydraFacial', 'Brow Shaping & Tinting', 'Lash Lift & Tint'],
  'Body': ['Relaxation Massage (60 min)', 'Deep Tissue Massage (60 min)', 'Body Wrap & Scrub', 'Waxing'],
  'Lashes': ['Eyelash Extensions (full set)', 'Lash Refill', 'Volume Lashes'],
  'Bridal': ['Bridal Package', 'Trial Session', 'Group Booking (3+ people)'],
};

const categories = Object.keys(servicesByCategory);
const timeSlots = ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'];

const selectedCategory = ref('');
const selectedService = ref('');

const availableServices = computed(() => {
  if (!selectedCategory.value) return [];
  selectedService.value = '';
  return servicesByCategory[selectedCategory.value] || [];
});
</script>

<style scoped>
.booking {
  padding: 100px 0;
  background: var(--cream);
}

.booking-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  align-items: start;
}

/* Visual Side */
.booking-visual {
  position: relative;
  border-radius: var(--radius-xl);
  overflow: hidden;
  min-height: 300px;
}

.booking-img {
  width: 100%;
  height: 100%;
  min-height: 300px;
  object-fit: cover;
}

.booking-img-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 30%, rgba(26, 23, 21, 0.75) 100%);
}

.booking-img-text {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 32px;
  color: var(--cream);
}

.img-tagline {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 2rem;
  font-weight: 300;
  font-style: italic;
  display: block;
  margin-bottom: 16px;
}

.img-contact p {
  font-size: 0.82rem;
  color: rgba(250, 247, 242, 0.5);
  margin-bottom: 4px;
}

.img-phone {
  font-family: 'DM Sans', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--gold);
  transition: color var(--transition);
}

.img-phone:hover {
  color: var(--cream);
}

/* Form Side */
.booking-form-wrap {
  background: var(--white);
  border-radius: var(--radius-xl);
  padding: 36px 28px;
  box-shadow: var(--shadow);
}

.form {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.field label {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--charcoal);
}

.optional {
  font-weight: 400;
  color: var(--text-muted);
}

.field input,
.field select,
.field textarea {
  padding: 13px 16px;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  font-size: 0.92rem;
  font-family: 'DM Sans', sans-serif;
  color: var(--charcoal);
  background: var(--cream);
  transition: border-color var(--transition), box-shadow var(--transition);
  -webkit-appearance: none;
}

.field input:focus,
.field select:focus,
.field textarea:focus {
  outline: none;
  border-color: var(--rose);
  box-shadow: 0 0 0 4px var(--rose-light);
  background: var(--white);
}

.field input::placeholder,
.field textarea::placeholder {
  color: var(--text-muted);
}

.field select:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.field textarea {
  resize: vertical;
}

.btn-submit {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px 36px;
  background: var(--rose);
  color: var(--white);
  border: none;
  border-radius: 100px;
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  font-size: 0.95rem;
  cursor: pointer;
  letter-spacing: 0.5px;
  transition: all var(--transition);
  box-shadow: 0 4px 20px var(--rose-glow);
  margin-top: 8px;
}

.btn-submit:hover {
  background: var(--rose-hover);
  transform: translateY(-2px);
  box-shadow: 0 8px 28px var(--rose-glow);
}

.btn-submit svg {
  transition: transform var(--transition);
}

.btn-submit:hover svg {
  transform: translateX(4px);
}

@media (min-width: 768px) {
  .booking-layout {
    grid-template-columns: 1fr 1.1fr;
    gap: 40px;
  }

  .booking-visual {
    min-height: 100%;
    position: sticky;
    top: 100px;
  }

  .booking-img {
    min-height: 600px;
  }

  .booking-form-wrap {
    padding: 48px 40px;
  }

  .form-row {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
