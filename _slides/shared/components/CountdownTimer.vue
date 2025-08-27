<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  minutes: { type: Number, default: 5 },
  seconds: { type: Number, default: 0 },
  autoStart: { type: Boolean, default: false },
  color: { type: String, default: 'black' }, // configurable text color
})

const initialTotal = props.minutes * 60 + props.seconds

const remaining = ref(initialTotal)
const state = ref('idle') 
// possible states: "idle", "running", "paused", "finished"
let intervalId = null

const timeString = computed(() => {
  const m = Math.floor(remaining.value / 60)
  const s = remaining.value % 60
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
})

const flashing = computed(() => remaining.value <= 10 && remaining.value > 0)
const finished = computed(() => state.value === 'finished')

function tick() {
  if (remaining.value > 0) {
    remaining.value -= 1
  }
  if (remaining.value === 0) {
    stop()
    state.value = 'finished'
  }
}

function start() {
  if (state.value === 'idle' || state.value === 'paused') {
    state.value = 'running'
    intervalId = setInterval(tick, 1000)
  }
}

function pause() {
  if (state.value === 'running') {
    clearInterval(intervalId)
    intervalId = null
    state.value = 'paused'
  }
}

function stop() {
  if (intervalId) {
    clearInterval(intervalId)
    intervalId = null
  }
}

function restart() {
  stop()
  remaining.value = initialTotal
  state.value = 'idle'
  if (props.autoStart) {
    start()
  }
}

onMounted(() => {
  if (props.autoStart) {
    start()
  }
})

onUnmounted(stop)
</script>

<template>
  <div class="timer">
    <div
      class="display"
      :class="{ flashing, finished }"
      :style="{ color: !finished ? props.color : undefined }"
    >
      {{ timeString }}
    </div>

    <div class="buttons">
      <!-- Idle: Start -->
      <button v-if="state === 'idle'" @click="start">▶ Start</button>

      <!-- Running: Pause -->
      <button v-else-if="state === 'running'" @click="pause">⏸ Pause</button>

      <!-- Paused: Resume + Reset -->
      <template v-else-if="state === 'paused'">
        <button @click="start">▶ Resume</button>
        <button class="reset" @click="restart">⏮ Reset</button>
      </template>

      <!-- Finished: Restart -->
      <button v-else-if="state === 'finished'" @click="restart">🔄 Restart</button>
    </div>
  </div>
</template>


<style scoped>
.timer {
  text-align: center;
  font-family: monospace;
}

.display {
  font-size: 6rem;
  margin-bottom: 1rem;
  transition: color 0.3s, background 0.3s;
}

/* ⏰ Low time warning: gently pulsing text color */
.display.flashing {
  animation: pulse-color 1.5s infinite;
}

/* ⏰ Finished: smoothly pulsing background + text contrast */
.display.finished {
  animation: final-pulse 1.5s infinite;
}

/* --- Smooth animations --- */

/* Pulse red tint at end */
@keyframes pulse-color {
  0%   { color: inherit; }
  50%  { color: red; }
  100% { color: inherit; }
}

/* Smooth background + text fade for finished state */
@keyframes final-pulse {
  0%   { background: white;  color: black; }
  50%  { background: red;    color: white; }
  100% { background:white;   color: black; }
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 0.6rem; /* slightly tighter gap */
}

/* 🎨 Compact modern button styles */
button {
  font-size: 0.75rem;             /* was 1.1rem */
  padding: 0.2rem 0.4rem;      /* was 0.6rem 1.2rem */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  background: #3498db; /* blue */
  color: white;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2); /* slightly lighter shadow */
  transition: background 0.2s, transform 0.1s;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

button:hover {
  background: #2980b9;
}

button:active {
  transform: scale(0.96);
}

/* Reset/Destructive style */
button.reset {
  background: #e74c3c;
}
button.reset:hover {
  background: #c0392b;
}
</style>