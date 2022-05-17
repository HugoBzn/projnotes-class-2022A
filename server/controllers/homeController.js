// La URL es la GET de la raíz
// URL: Get /
const index = (req, res) => {
  // Calculando emojie
  const emojieDataset = [
    '💻',
    '👨‍💻',
    '🎈',
    '🎄',
    '🦺',
    '🚵‍♀️',
    '🎁',
    '🚆',
    '🌐',
    '♥',
  ];
  const emojie =
    emojieDataset[Math.floor(Math.random() * emojieDataset.length)];

  // View-Models
  const viewModel = {
    title: 'Index Controller Working!!!',
    author: 'HugoBzn',
    emojie,
  };
  res.render('home/indexView', viewModel);
};

// URL: Get /about
const about = (req, res) => {
  res.render('home/aboutView', {
    name: 'Student Hugo Bazán',
    email: 'hugobazan14@hotmail.com',
    url: 'https://github.com/HugoBzn',
    description:
      'Aplicacion que te permite registrar ideas de proyectos. PWPCII-2022A',
    version: '0.0 alpha',
  });
};

export default {
  // Action Methods
  index,
  about,
};
