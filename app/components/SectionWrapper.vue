<template>
  <section class="w-full">
    <div class="border-b border-[#3a2216]/10 pb-5 mb-3">
      <div class="flex justify-between items-baseline">
        <h2 class="text-3xl md:text-4xl font-serif text-[#3a2216] font-bold m-0 _uppercase tracking-tight">
          {{ title }}
        </h2>

        <div class="hidden md:block">
          <slot name="side"></slot>
        </div>
      </div>

      <p v-if="subtitle" class="text-[#A67C52] font-medium _uppercase tracking-widest text-sm mt-2">
        {{ subtitle }}
      </p>
    </div>

    <div class="w-full">
      <slot />
    </div>

    <div v-if="showFooterLine" class="border-b border-[#3a2216]/10 pt-10"></div>
  </section>
</template>

<script setup>
// Garanta que as props estão definidas aqui
defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: "" },
  showFooterLine: { type: Boolean, default: false }
});
</script>