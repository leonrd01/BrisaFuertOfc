import type { Product } from "@/lib/types";

export const products: Product[] = [
  {
    id: "seda-raw-classic",
    name: "Seda Zomo Alfafa",
    price: 5,
    category: "Sedas",
    images: ["/imagens/Seda_Zomo_Alfafa.jpeg", "/imagens/Seda_Zomo02.webp"],
    aiHint: "rolling paper",
    description:
      "A Seda Zomo Alfafa Slim é feita de alfafa 100% natural, oferecendo uma queima limpa e lenta, perfeita para quem busca uma alternativa sustentável. Sua cor verde única e composição sem aditivos garantem uma experiência pura, preservando o sabor original das ervas. Com formato slim, essa seda é ideal para uma queimadura uniforme e prolongada, elevando suas sessões com um toque ecológico. ",
    specifications: {
      Tamanho: "King Size",
      Material: "Alfafa",
      "Folhas por livreto": "32",
    },
    reviews: [
      { rating: 5, text: "Melhor seda que já usei!", author: "João S." },
    ],
  },
  {
    id: "bong-de-vidro-ice",
    name: "Bong de Vidro",
    price: 25,
    category: "Acessórios",
    images: ["/imagens/Bong.jpeg"],
    aiHint: "glass bong",
    description:
      "O Micro Bong Sadhu é a escolha ideal para quem busca uma experiência pura e discreta, onde quer que esteja. Feito de Vidro Borossilicato – Material de alta pureza, resistente ao calor e durável.",
    specifications: {
      Altura: "8,3 cm",
      Material: "Vidro Borossilicato",
      "Espessura do vidro": "5mm",
    },
    reviews: [
      { rating: 5, text: "Muito bom, gela bem a fumaça.", author: "Maria C." },
    ],
  },
  {
    id: "isqueiro-clipper-metal",
    name: "Maçarico CHAMA WUJI",
    price: 35.9,
    category: "Isqueiros",
    images: ["/imagens/Macarico_ChamaWuji.jpeg"],
    aiHint: "metal lighter",
    description: " Isqueiro Maçarico de Metal Quebra Vento",
    specifications: {
      Modelo: "Clipper Metal",
      Material: "Metal",
      Recarregável: "Sim",
    },
    reviews: [{ rating: 4, text: "Bonito e funcional.", author: "Pedro A." }],
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
    id: "tesoura-trimmer",
    name: "Seda_OCB_p",
    price: 5,
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
