<template>
  <svg
    @click="$emit('click')"
    class="w-16 h-16 cursor-pointer bottom-4 absolute hover:scale-110 transition"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <circle cx="12" cy="12" r="10" stroke="#33742a" stroke-width="1.5"></circle>
      <path
        d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15"
        stroke="#33742a"
        stroke-width="1.5"
        stroke-linecap="round"
      ></path>
    </g>
  </svg>
</template>

<script lang="ts" setup>
defineEmits(['click']);
</script>
