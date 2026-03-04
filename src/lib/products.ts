import type { Product } from "@/lib/types";

export const products: Product[] = [
  {
    id: "seda-raw-classic",
    name: "Seda Raw Classic King Size",
    price: 3.5,
    category: "Sedas",
    images: ["./imagens/Seda_Raw_classic.webp"],
    aiHint: "rolling paper",
    description:
      "A seda Raw Classic é feita de fibras naturais não refinadas, com uma coloração marrom clara e translúcida. A marca d'água CrissCross previne a combustão desigual.",
    specifications: {
      Tamanho: "King Size (110mm x 44mm)",
      Material: "Fibras naturais não refinadas",
      "Folhas por livreto": "32",
    },
    reviews: [{ rating: 5, text: "Melhor seda que já usei!", author: "João S." }],
  },
  {
    id: "bong-de-vidro-ice",
    name: "Bong de Vidro com Suporte para Gelo",
    price: 129.9,
    category: "Bongs",
    images: [
      "https://picsum.photos/seed/bong-ice-1/600/600",
      "https://picsum.photos/seed/bong-ice-2/600/600",
      "https://picsum.photos/seed/bong-ice-3/600/600",
    ],
    aiHint: "glass bong",
    description:
      "Bong de vidro borossilicato de alta resistência. Possui suporte para gelo, proporcionando uma fumaça mais resfriada e suave. Fácil de limpar e manusear.",
    specifications: {
      Altura: "30cm",
      Material: "Vidro Borossilicato",
      "Espessura do vidro": "5mm",
    },
    reviews: [
      { rating: 5, text: "Muito bom, gela bem a fumaça.", author: "Maria C." },
    ],
  },
  {
    id: "dichavador-metal-polen",
    name: "Dichavador de Metal com Coletor de Pólen",
    price: 45.0,
    category: "Dichavadores",
    images: [
      "https://picsum.photos/seed/grinder-1/600/600",
      "https://picsum.photos/seed/grinder-2/600/600",
    ],
    aiHint: "herb grinder",
    description:
      "Dichavador de metal de 4 partes com tela para coleta de pólen. Dentes afiados para uma moagem perfeita e fechamento magnético para segurança.",
    specifications: {
      Diâmetro: "50mm",
      Material: "Liga de Zinco",
      Partes: "4",
    },
    reviews: [],
  },
  {
    id: "isqueiro-clipper-metal",
    name: "Isqueiro Clipper de Metal Recarregável",
    price: 35.9,
    category: "Isqueiros",
    images: ["https://picsum.photos/seed/lighter-1/600/600"],
    aiHint: "metal lighter",
    description:
      "Isqueiro da marca Clipper em versão de metal, recarregável com gás butano. Acompanha estojo de metal. Chama ajustável e pilão integrado.",
    specifications: {
      Modelo: "Clipper Metal",
      Material: "Metal",
      Recarregável: "Sim",
    },
    reviews: [
      { rating: 4, text: "Bonito e funcional.", author: "Pedro A." },
    ],
  },
  {
    id: "piteira-vidro-longa",
    name: "Piteira de Vidro Longa (7mm)",
    price: 12.0,
    category: "Piteiras",
    images: ["https://picsum.photos/seed/glass-tip-1/600/600"],
    aiHint: "glass tip",
    description:
      "Piteira de vidro reutilizável e fácil de limpar. Resfria a fumaça e evita o contato direto dos lábios com o papel. Bocal achatado para melhor fluxo.",
    specifications: {
      Comprimento: "5cm",
      Diâmetro: "7mm",
      Material: "Vidro",
    },
    reviews: [],
  },
  {
    id: "cinzeiro-silicone",
    name: "Cinzeiro de Silicone Flexível",
    price: 25.0,
    category: "Cinzeiros",
    images: ["https://picsum.photos/seed/ashtray-1/600/600"],
    aiHint: "silicone ashtray",
    description:
      "Cinzeiro de silicone que não quebra. Ideal para uso interno e externo. Vários compartimentos para apoiar seu cigarro. Fácil de lavar.",
    specifications: {
      Material: "Silicone",
      Diâmetro: "8.5cm",
      Cor: "Preto",
    },
    reviews: [],
  },
  {
    id: "kit-iniciante",
    name: "Kit Iniciante Arcana",
    price: 89.9,
    category: "Kits",
    images: ["https://picsum.photos/seed/kit-1/600/600"],
    aiHint: "smoking kit",
    description:
      "O kit perfeito para quem está começando. Inclui uma seda, um dichavador básico, um isqueiro e um case para transporte.",
    specifications: {
      Conteúdo:
        "1x Seda King Size, 1x Dichavador de Plástico, 1x Isqueiro, 1x Case",
    },
    reviews: [],
  },
  {
    id: "tesoura-trimmer",
    name: "Tesoura de Poda (Trimmer)",
    price: 29.9,
    category: "Acessórios",
    images: ["https://picsum.photos/seed/trimmer-1/600/600"],
    aiHint: "trimming scissors",
    description:
      "Tesoura de ponta fina, ideal para poda e manicure de plantas. Lâminas de aço inoxidável e mola para facilitar o uso contínuo.",
    specifications: {
      Material: "Aço Inoxidável",
      Comprimento: "16cm",
    },
    reviews: [],
  },
];
