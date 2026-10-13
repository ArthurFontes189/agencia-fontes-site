/**
 * PALETA DE CORES - AGÊNCIA FONTES
 *
 * Cor Principal: Menta #7ECECA
 * Variações: Claras (luz) e Escuras (sombra)
 * Fundos: Azul-esverdeado escuro
 * Menta apenas como ACENTO sobre fundos escuros, NUNCA texto sobre claro
 */

export const colors = {
  // MENTA - Cor Principal
  mint: {
    base: '#7ECECA',      // Principal
    light: '#A8E0E0',     // Claro (+20%)
    lighter: '#C5EAEA',   // Mais claro (+35%)
    lightest: '#DFFAFA',  // Muito claro (+50%)
    dark: '#5BA8A8',      // Escuro (-20%)
    darker: '#3D8888',    // Mais escuro (-40%)
    darkest: '#1A5C5C',   // Muito escuro (-65%)
  },

  // FUNDOS - Azul-esverdeado escuro
  bg: {
    darkest: '#0D1F21',   // Fundo primário (muito escuro)
    dark: '#162D32',      // Fundo secundário
    medium: '#1F3A3D',    // Fundo terciário
    light: '#F8FAFB',     // Seção clara (comparativo, FAQ)
  },

  // NEUTROS
  text: {
    primary: '#FFFFFF',   // Texto principal (branco)
    secondary: '#D1D5DB', // Texto secundário (cinza claro)
    tertiary: '#9CA3AF',  // Texto terciário (cinza médio)
    inverse: '#1F2937',   // Texto sobre fundos claros
  },

  // SEMÂNTICAS
  semantic: {
    success: '#10B981',   // Verde sucesso
    error: '#EF4444',     // Vermelho erro
    warning: '#F59E0B',   // Amarelo aviso
    info: '#3B82F6',      // Azul info
  },

  // BORDES E EFEITOS
  border: {
    light: 'rgba(255, 255, 255, 0.1)',
    medium: 'rgba(255, 255, 255, 0.2)',
    strong: 'rgba(255, 255, 255, 0.3)',
  },
};

/**
 * CSS VARIABLES (aplicar em :root)
 * Copie isto para seu globals.css
 */
export const cssVariables = `
:root {
  --color-mint: ${colors.mint.base};
  --color-mint-light: ${colors.mint.light};
  --color-mint-lighter: ${colors.mint.lighter};
  --color-mint-dark: ${colors.mint.dark};
  --color-mint-darker: ${colors.mint.darker};

  --color-bg-darkest: ${colors.bg.darkest};
  --color-bg-dark: ${colors.bg.dark};
  --color-bg-medium: ${colors.bg.medium};
  --color-bg-light: ${colors.bg.light};

  --color-text: ${colors.text.primary};
  --color-text-secondary: ${colors.text.secondary};
  --color-text-tertiary: ${colors.text.tertiary};
  --color-text-inverse: ${colors.text.inverse};

  --color-success: ${colors.semantic.success};
  --color-error: ${colors.semantic.error};
  --color-warning: ${colors.semantic.warning};
  --color-info: ${colors.semantic.info};

  --border-light: ${colors.border.light};
  --border-medium: ${colors.border.medium};
  --border-strong: ${colors.border.strong};
}
`;
