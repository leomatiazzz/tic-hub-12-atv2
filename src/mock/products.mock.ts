import { Product } from '@/model/product.model'
import { Shipment } from '@/enum/shipment.enum'
import { game, gameConsole, headset } from '@/mock/categories.mock'

const ps5: Product = new Product(
  '1',
  'Console PlayStation 5 Slim, Edição Digital',
  3_999.9,
  gameConsole,
  Shipment.AMAZON,
  'https://m.media-amazon.com/images/I/51SM5xU-M1L.jpg',
  'Armazenamento: 1 TB SSD. Resolução: até 4K 120fps com suporte a Ray Tracing',
  0.09,
)

const godOfWar: Product = new Product(
  '2',
  'God of War Ragnarök Standard Edition (Físico)',
  249.9,
  game,
  Shipment.AMAZON,
  'https://m.media-amazon.com/images/I/8136lnf0n2L.jpg',
  'Plataforma: PlayStation 5. Edição: Standard Edition. Formato: Físico.',
   0,
)

const eldenRing: Product = new Product(
  '3',
  'Elden Ring Standard Edition (Físico)',
  299.9,
  game,
  Shipment.FREE,
  'https://http2.mlstatic.com/D_Q_NP_774973-MLA99586538384_122025-O.webp',
  'Plataforma: PlayStation 5. Edição: Standard Edition. Formato: Físico.',
  0.05,
)

const finalFantasyViiRemake: Product = new Product(
  '4',
  'Final Fantasy VII Remake Standard Edition (Físico)',
  199.9,
  game,
  Shipment.FREE,
  'https://http2.mlstatic.com/D_Q_NP_2X_896295-CBT97221338878_112025-P.webp',
  'Plataforma: PlayStation 5. Edição: Standard Edition. Formato: Físico.',
  0,
)

const headsetSonyPulse: Product = new Product(
  '5',
  'Headset sem fio Gamer Sony Pulse Elite, Bluetooth, PS5, Branco - CFI-ZWH2L',
  879.9,
  headset,
  Shipment.AMAZON,
  'https://images9.kabum.com.br/produtos/fotos/536999/headset-sem-fio-gamer-sony-pulse-elite-bluetooth-ps5-branco-cfi-zdd1ax_1710866295_gg.jpg',
  'Drivers planares com áudio 3D. PlayStation Link, Bluetooth 5.0. Microfone com IA. Bateria de 30h com recarga rápida.',
  0.07,
)

export const productsMock = [ps5, godOfWar, eldenRing, finalFantasyViiRemake, headsetSonyPulse]
