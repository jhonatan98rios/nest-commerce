export class CreateProductDTO {
  slug: string
  name: string
  description: string
  images:  { src: string, alt: string, title: string }[]
  price: number
  category: string
  createdAt: string
  updatedAt: string
}

/* 
const example = {
  "slug": "rx560-jnasoda6s1da6s",
  "name": "RX560",
  "description": "Placa de vídeo de entrada ideal para MOBA's e jogos competitívos",
  "images": [{ 
    "src": "https://img.terabyteshop.com.br/produto/g/placa-de-video-biostar-radeon-rx-560-4gb-gddr5-va5615rf41-tbmra-bs2_98498.jpg", 
    "alt": "Placa de vídeo RX560", 
    "title": "RX560"
  }, {
    "src": "https://www.gigabyte.com/FileUpload/Global/KeyFeature/694/img/product/68.png", 
    "alt": "Placa de vídeo RX560 desmontada", 
    "title": "RX560 desmontada"
  }],
  "price": 600,
  "category": "pc gamer, placa de vídeo, eletrônicos",
  "createdAt": "1668556478106",
  "updatedAt": "1668556899837"
}
*/