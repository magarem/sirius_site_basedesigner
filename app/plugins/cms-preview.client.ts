// plugins/cms-preview.client.ts
export default defineNuxtPlugin(() => {
  const router = useRouter()

  // Sempre que a rota mudar, avisa o pai (Admin)
  router.afterEach((to) => {
    // Verifica se está dentro de um iframe
    if (window.self !== window.top) {
      window.parent.postMessage({
        type: 'SIRIUS_NAV_UPDATE',
        path: to.path
      }, '*') // '*' permite qualquer origem (ou coloque a URL do seu admin para segurança extra)
    }
  })
})