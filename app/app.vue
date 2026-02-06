<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
/* 1. Reset e Fundo Global */
body {
  background-color: #f2e4d3; /* A cor creme do café */
  color: #3a2216;           /* Marrom escuro para o texto */
  margin: 0;                /* Removido o margin de 40px para não quebrar o layout */
  padding: 0;
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
}

/* 2. Ajuste PrimeVue para Gran Café Brasil */
/* Removendo o fundo preto e bordas pesadas */
.p-card {
  background: #ffffff !important; /* Cards brancos para destacar no fundo creme */
  color: #3a2216 !important;
  border: 1px solid rgba(58, 34, 22, 0.08); /* Borda marrom bem sutil */
  border-radius: 1.5rem !important; /* Bordas arredondadas modernas */
  box-shadow: 0 10px 30px -15px rgba(58, 34, 22, 0.1) !important;
}

/* 3. Transparência para o DataView */
.p-dataview .p-dataview-content {
  background: transparent !important;
}

/* 4. Estilização da Barra de Rolagem (Scrollbar) */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #f2e4d3;
}
::-webkit-scrollbar-thumb {
  background: #A67C52;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #3a2216;
}
</style>