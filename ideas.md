# Ideias de Design para Portfólio de Reinaldo

## Design Escolhido: Minimalismo Profissional com Acentos Azuis

### Design Movement
**Minimalismo Corporativo Moderno** - Inspirado em design systems de empresas tech de alta qualidade (Apple, Stripe, Vercel). Foco em clareza, hierarquia visual e espaço em branco estratégico.

### Core Principles
1. **Clareza Radical**: Cada elemento tem propósito claro. Sem decoração desnecessária.
2. **Hierarquia Visual Forte**: Tipografia, espaçamento e cor guiam o olhar do usuário através da narrativa profissional.
3. **Confiança através da Simplicidade**: Design limpo comunica competência e profissionalismo.
4. **Acessibilidade como Padrão**: Contraste adequado, navegação intuitiva, responsividade perfeita.

### Color Philosophy
- **Branco Primário** (`#FFFFFF` / `oklch(1 0 0)`): Fundo limpo, respira confiança e modernidade.
- **Azul Profundo** (`#1E40AF` / `oklch(0.45 0.2 260)`): Cor primária, representa confiabilidade, tecnologia e profissionalismo.
- **Azul Claro** (`#3B82F6` / `oklch(0.6 0.2 260)`): Acentos secundários, links, hover states.
- **Cinza Neutro** (`#6B7280` / `oklch(0.55 0.02 260)`): Texto secundário, subtítulos.
- **Cinza Muito Claro** (`#F3F4F6` / `oklch(0.97 0.001 286)`): Fundos de seções, cards.

**Intenção Emocional**: Profissionalismo, confiança, inovação tecnológica. A paleta azul-branca é universalmente reconhecida como símbolo de tecnologia e competência.

### Layout Paradigm
- **Hero Section**: Assimétrico com imagem gerada (background digital) à direita, texto à esquerda. Cria movimento visual sem ser caótico.
- **Seções de Conteúdo**: Alternância entre layouts full-width e grid assimétrico (2/3 + 1/3).
- **Cards de Projeto**: Grid responsivo com sombras sutis, não bordas pesadas.
- **Timeline de Experiência**: Vertical, com destaque visual para posição atual.
- **Navegação**: Fixa no topo, minimalista, com logo/nome à esquerda.

### Signature Elements
1. **Linhas Decorativas Sutis**: Separadores horizontais em azul claro, não bordas pesadas.
2. **Ícones Lucide-React**: Simples, consistentes, em azul primário.
3. **Sombras Suaves**: `shadow-sm` e `shadow-md` para profundidade, nunca pesado.

### Interaction Philosophy
- **Hover States**: Transições suaves (200-300ms), mudança de cor ou elevação sutil.
- **Scroll Animations**: Fade-in e slide-up ao entrar na viewport, não excessivo.
- **Botões**: Primário em azul, secundário em cinza, com feedback visual claro.
- **Links**: Azul claro com underline ao hover, nunca invisível.

### Animation Guidelines
- **Transições**: `transition-all duration-300 ease-out` para mudanças de estado.
- **Scroll Reveals**: `opacity-0 translate-y-4` → `opacity-100 translate-y-0` ao entrar na viewport.
- **Hover Elevation**: `hover:shadow-lg hover:-translate-y-1` para cards.
- **Subtle Pulse**: Ícones de destaque podem ter `animate-pulse` muito suave.
- **Evitar**: Animações muito rápidas, muitos efeitos simultâneos, movimento desnecessário.

### Typography System
- **Display Font**: `Poppins` (bold, 700+) para títulos principais e seções.
- **Body Font**: `Inter` (400-600) para corpo, descrições, listas.
- **Hierarchy**:
  - H1: `Poppins 3.5rem (56px) 700` - Nome/Título principal
  - H2: `Poppins 2rem (32px) 700` - Títulos de seção
  - H3: `Poppins 1.25rem (20px) 600` - Subtítulos
  - Body: `Inter 1rem (16px) 400` - Texto padrão
  - Small: `Inter 0.875rem (14px) 500` - Labels, badges

**Reasoning**: Poppins é moderna, legível, com personalidade. Inter é a fonte de corpo mais confiável para leitura longa. A combinação é profissional mas não genérica.
