# 📋 Guia do Projeto

## 📁 Arquivos de Configuração

- `package.json` - Scripts e dependências
- `next.config.ts` - Configuração do Next.js
- `tsconfig.json` - Configurações TypeScript e aliases (permite imports como `@/lib/types`)
- `tailwind.config.ts` e `postcss.config.mjs` - Configuração do Tailwind/PostCSS
- `README.md` - Documentação principal
## 🗂️ Estrutura do Código (`src/`)

### Principais Diretórios

- `app/` - Rotas e páginas (Next.js App Router)
  - `page.tsx` - Página inicial
  - `products/[id]/` - Páginas de produtos
  - `layout.tsx` - Layout principal
  - `globals.css` - Estilos globais

- `components/` - Componentes reutilizáveis
  - `ui/` - Componentes base (buttons, cards, etc)
  - `layout/` - Header, Footer e outros layouts
  
- `lib/` - Utilitários e dados
  - `products.ts` - Mock de produtos
  - `types.ts` - Tipos TypeScript
  - `utils.ts` - Funções utilitárias
## 💻 Desenvolvimento

### Trabalhando com Produtos

O arquivo `products.ts` exporta um array de produtos (tipo `Product`) usado como mock do catálogo.

#### Exemplo de Uso:
```tsx
import { products } from "@/lib/products";

export function ProductList() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {products.map(p => (
        <article key={p.id} className="p-4 border rounded">
          <img src={p.images[0]} alt={p.name} className="w-full h-40 object-cover" />
          <h3 className="mt-2 font-semibold">{p.name}</h3>
          <p className="text-sm text-gray-600">R$ {p.price}</p>
        </article>
      ))}
    </div>
  );
}
```

### Estilização com Tailwind

- Classes utilitárias do Tailwind para estilização
- Configuração em `tailwind.config.ts`
- Estilos globais em `src/app/globals.css`

## 🚀 Scripts Disponíveis

### Desenvolvimento
```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

### Produção
```bash
# Criar build de produção
npm run build

# Iniciar servidor de produção
npm run start
```

## 🔍 Dicas Rápidas

1. **Navegação pelo Código**
   - Veja rotas em `src/app`
   - Explore componentes em `src/components/ui`
   - Dados de exemplo em `src/lib/products.ts`

2. **Tipos Importantes**
   - Interface `Product` em `src/lib/types.ts`
   - Array `products` em `src/lib/products.ts`

## ✏️ Anotações Pessoais

### ToDo
- [ ] Tarefa 1
- [ ] Tarefa 2

### Ideias
- Ideia 1
- Ideia 2

### Observações
- Observação 1
- Observação 2