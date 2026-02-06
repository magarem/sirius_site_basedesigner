export default function useAsset() {
  const route = useRoute()

  /**
   * Resolve o caminho do asset injetando o prefixo da API 
   * e o parâmetro de preview se necessário.
   * @param path O caminho relativo (ex: '_home/hero/hero.jpg')
   */
  const asset = (path: string) => {
    if (!path) return ''
    
    // 1. Remove barra inicial se existir para evitar barra dupla //
    const cleanPath = path.startsWith('/') ? path.slice(1) : path
    
    // 2. Verifica se a página atual está em modo preview
    const isPreview = route.query.preview === 'true'
    
    // 3. Monta a URL para o seu Asset Handler
    // O prefixo /assets/ aciona o server/api/assets/[...path].ts
    let url = `/assets/${cleanPath}`
    
    if (isPreview) {
      url += '?preview=true'
    }
    
    return url
  }

  return {
    asset
  }
}