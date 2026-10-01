/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#18304F',
        marca: '#1B87AB',
        teal: '#4E9898',
        dourado: '#C2A05A',
        claro: '#A8C8D8',
        nevoa: '#F2F6F8',
        apoio: '#5A7183',
        // Tom escurecido do azul da marca, só para TEXTO e fundo de botão com
        // texto branco: o #1B87AB sobre branco dá 4,1:1 e não atinge o mínimo
        // de 4,5:1. O #1B87AB continua sendo a cor da marca em ícones,
        // detalhes e no botão flutuante.
        'marca-texto': '#146B88',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: { base: '17px' },
    },
  },
  plugins: [],
}
