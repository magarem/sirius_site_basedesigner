<script setup>
import { computed } from 'vue' // Garanta o import
import { useRoute } from 'vue-router'

const route = useRoute()
const isPreview = computed(() => route.query.preview === 'true')

const settingsPath = computed(() => {
  return isPreview.value ? 'content/settings.toml' : 'data/settings.json'
})

const { data: pageData } = await useFetch('/api/readfile', {
    params: { path: settingsPath.value },
    lazy: true,
    server: false,
    watch: [settingsPath]
})

// ESSA É A CHAVE: Criamos um atalho seguro para os dados
const footerData = computed(() => {
  if (!pageData.value) return null
  
  // Se vier do readfile, geralmente os dados estão em .data
  // Mas se o arquivo já tem uma chave 'data' dentro, vira .data.data
  return pageData.value.data?.footer || pageData.value.footer
})

const socialIcons = {
  facebook: "fab fa-facebook-f",
  instagram: "fab fa-instagram",
  youtube: "fab fa-youtube",
};

const getSocialIcon = (key) => socialIcons[key] || "fas fa-link";
</script>

<template>
  <footer class="site-footer" v-if="footerData">
    <div class="content-container">
      <div class="footer-grid">
        
        <div class="footer-col">
          <h3 class="footer-title">{{ footerData.box1?.title }}</h3>
          <ul class="footer-links">
            <li v-for="link in footerData.box1?.links" :key="link.label">
              <NuxtLink :to="link.target">{{ link.label }}</NuxtLink>
            </li>
          </ul>
        </div>

        <div class="footer-col">
          <h3 class="footer-title">{{ footerData.box2?.title }}</h3>
          <ul class="footer-links">
            <li v-for="link in footerData.box2?.links" :key="link.label">
              <NuxtLink :to="link.target">{{ link.label }}</NuxtLink>
            </li>
          </ul>
        </div>

        <div class="footer-col">
          <h3 class="footer-title">{{ footerData.box3?.title }}</h3>
          <ul class="footer-links">
            <li v-for="link in footerData.box3?.links" :key="link.label">
              <NuxtLink :to="link.target">{{ link.label }}</NuxtLink>
            </li>
          </ul>
        </div>

        <div class="footer-col">
          <h3 class="footer-title">{{ footerData.box4?.title }}</h3>
          <p class="support-text">{{ footerData.box4?.body }}</p>
          
          <div class="contact-info">
            <a v-if="footerData.box4?.email" :href="`mailto:${footerData.box4.email}`" class="contact-item">
              <i class="far fa-envelope"></i> {{ footerData.box4.email }}
            </a>
            <a v-if="footerData.box4?.televendas" :href="`tel:${footerData.box4.televendas.replace(/\s/g, '')}`" class="contact-item">
              <i class="fas fa-phone-alt"></i> {{ footerData.box4.televendas }}
            </a>
          </div>

          <div class="social-icons-wrapper">
            <a
              v-for="(url, network) in footerData.social"
              :key="network"
              :href="url"
              target="_blank"
              class="social-icon"
              :class="network"
            >
              <i :class="getSocialIcon(network)"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright-bar">
    <div class="content-container">
      <div class="flex flex-col md:flex-row justify-between items-center gap-4">
        
        <p class="opacity-80">
          &copy; 2026 Grao Café Brasil - Todos os direitos reservados.
        </p>

        <div class="flex items-center gap-2 group">
          <span class="opacity-60 text-[10px] uppercase tracking-widest">Produzido por</span>
          <a 
            href="https://magaweb.com.br" 
            target="_blank" 
            class="font-bold text-[#A67C52] hover:text-white transition-colors duration-300 flex items-center gap-1"
          >
            Magaweb <span class="font-light text-[#f2e4d3]/50 text-xs">| tecnologia e marketing</span>
          </a>
        </div>

      </div>
    </div>
  </div>
  </footer>
</template>

<style scoped>
/* Ajuste para o fundo escuro do site */
.site-footer {
  background-color: #18181a; 
  color: #a0a0a0;
  padding-top: 4rem;
  font-family: 'Inter', sans-serif;
  width: 100%;
  border-top: 1px solid #333;
}

.content-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem;
  padding-bottom: 3rem;
}

.footer-title {
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  letter-spacing: 1px;
}

/* Listas de Links */
.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.8rem;
}

.footer-links a {
  color: #a0a0a0;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #A67C52; /* Cor bronze do café */
}

/* Suporte e Contato */
.support-text {
  font-size: 0.9rem;
  margin-bottom: 1.2rem;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 1.5rem;
}

.contact-item {
  color: #fff;
  text-decoration: none;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: opacity 0.3s;
}

.contact-item i {
  color: #A67C52;
}

.contact-item:hover {
  opacity: 0.8;
}

/* Social Icons */
.social-icons-wrapper {
  display: flex;
  gap: 12px;
}

.social-icon {
  width: 36px;
  height: 36px;
  background: #2c241f;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: #fff;
  font-size: 0.9rem;
  transition: all 0.3s;
}

.social-icon:hover {
  background-color: #A67C52;
  transform: translateY(-3px);
}

.copyright-bar {
  background-color: #111112;
  padding: 1.5rem 0;
  text-align: center;
  border-top: 1px solid #222;
  font-size: 0.8rem;
}

/* Responsividade */
@media (max-width: 992px) {
  .footer-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 600px) {
  .footer-grid { 
    grid-template-columns: 1fr;
    text-align: center;
  }
  .contact-info { align-items: center; }
  .social-icons-wrapper { justify-content: center; }
}

/* Ajuste no CSS para a barra final */
.copyright-bar {
  background-color: #2c241f; /* Um marrom ligeiramente diferente para destacar */
  color: #f2e4d3;
  padding: 1.5rem 0;
  border-top: 1px solid rgba(166, 124, 82, 0.2);
  font-size: 0.8rem;
}

.content-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Efeito sutil na sua assinatura */
.copyright-bar a:hover {
  text-decoration: none;
}
</style>