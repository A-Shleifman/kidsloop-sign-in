module.exports = {
  purge: ['src/**/*.js', 'src/**/*.jsx', 'src/**/*.ts', 'src/**/*.tsx', 'public/**/*.html'],
  theme: {
    extend: {
      borderRadius: {
        large: '12px',
      },
      colors: {
        black: '#000',
        blue: '#1161cb',
        navy: '#0c256d',
      },
    },
  },
  variants: {},
  plugins: [],
};
