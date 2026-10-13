# 🎨 Agência Fontes - Site

Mini agência familiar focada no pequeno empreendedor local.

## 📋 Resumo do Projeto

- **Stack:** Astro 4 + TypeScript
- **Estilo:** Tech, profissional, predominantemente escuro
- **Cor Principal:** Menta #7ECECA
- **Tipografia:** Space Grotesk (títulos) + Inter (corpo) + JetBrains Mono (detalhe)
- **Responsivo:** Mobile-first (360, 768, 1280px)
- **Deploy:** GitHub Pages

---

## 🎨 Paleta de Cores Proposta

### Cor Principal: MENTA #7ECECA

```
Base:       #7ECECA (Menta pura)
Light:      #A8E0E0 (Claro)
Lighter:    #C5EAEA (Mais claro)
Lightest:   #DFFAFA (Muito claro)
Dark:       #5BA8A8 (Escuro)
Darker:     #3D8888 (Mais escuro)
Darkest:    #1A5C5C (Muito escuro)
```

**Uso:** Menta SEMPRE como acento sobre fundo escuro. NUNCA como texto sobre claro.

### Fundos: Azul-esverdeado Escuro

```
Darkest:    #0D1F21 (Primário)
Dark:       #162D32 (Secundário)
Medium:     #1F3A3D (Terciário)
Light:      #F8FAFB (Seções claras: comparativo, FAQ)
```

### Textos

```
Primary:    #FFFFFF (Branco)
Secondary:  #D1D5DB (Cinza claro)
Tertiary:   #9CA3AF (Cinza médio)
Inverse:    #1F2937 (Sobre fundos claros)
```

### Semânticas

```
Success:    #10B981 (Verde)
Error:      #EF4444 (Vermelho)
Warning:    #F59E0B (Amarelo)
Info:       #3B82F6 (Azul)
```

---

## 📝 Conteúdo que Falta Preencher

Em `src/data/content.ts`, procure por `[PREENCHER]`:

- [ ] Slogan
- [ ] WhatsApp
- [ ] Email
- [ ] Instagram
- [ ] CNPJ
- [ ] Nomes dos primos
- [ ] Preços dos planos
- [ ] Prazo de entrega
- [ ] Quantidade de posts/mês
- [ ] Respostas do FAQ (propriedade, cancelamento, hospedagem)

---

## 🚀 Como Rodar Localmente

```bash
npm install
npm run dev      # Dev server em http://localhost:3000
npm run build    # Build para produção
npm run preview  # Preview do build
```

## 🌐 Deploy (GitHub Pages)

O site é automaticamente deployado para GitHub Pages a cada push em `main`:

**URL:** https://arthurfontes189.github.io/agencia-fontes-site/

**Como funciona:**
1. Faça commit e push para `main`
2. GitHub Actions executa automaticamente (workflow `.github/workflows/deploy.yml`)
3. Build é gerado em `dist/`
4. Deploy acontece em ~2-3 minutos
5. Site atualizado online

**Acompanhar deploy:**
- Vá para: https://github.com/ArthurFontes189/agencia-fontes-site/actions
- Veja o workflow `Deploy to GitHub Pages` rodando

---

## 📁 Estrutura

```
src/
├── pages/
│   ├── index.astro       (Home - todas as seções)
│   ├── privacidade.astro (Política de privacidade)
│   └── 404.astro         (Página não encontrada)
├── components/           (Componentes reutilizáveis)
├── layouts/              (Layouts base)
├── data/
│   ├── colors.ts         (Paleta de cores)
│   └── content.ts        (Conteúdo e textos)
└── styles/
    └── globals.css       (Estilos globais)
```

---

## ✅ Checklist de Desenvolvimento

- [ ] Etapa 1: Setup + Paleta visual (Aprovação)
- [ ] Etapa 2: Header + Hero
- [ ] Etapa 3: Marquee + 3 Diferenciais
- [ ] Etapa 4: Serviços (Bento grids)
- [ ] Etapa 5: Para quem + Como funciona
- [ ] Etapa 6: Comparativo + Planos
- [ ] Etapa 7: Quem somos + FAQ
- [ ] Etapa 8: Contato (Form em etapas)
- [ ] Etapa 9: Footer + Privacidade
- [ ] Etapa 10: Animações + Responsividade
- [ ] Etapa 11: Build final + Performance

---

## 📊 Requisitos de Qualidade

- [ ] <120KB JS gzip na home
- [ ] Validado em 360, 768, 1280px
- [ ] HTML semântico (um h1, labels, alt, etc)
- [ ] WebP/AVIF com lazy loading
- [ ] Fontes display=swap
- [ ] prefers-reduced-motion ativado
- [ ] Sem fake depoimentos/métricas
- [ ] Funcionando sem JavaScript

---

## 📞 Contato (Future)

- WhatsApp: [PREENCHER]
- Email: [PREENCHER]
- Instagram: [PREENCHER]

---

## 📄 Licença

Propriedade da Agência Fontes © 2025
