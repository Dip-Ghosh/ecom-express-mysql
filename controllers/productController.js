exports.renderProduct = (req, res) => {
  const products = [
    {
      name: 'Wireless Headphones',
      price: '39.99',
      oldPrice: '49.99',
      badge: 'Sale',
      rating: 5,
      reviews: 128,
      description: 'Premium noise-cancelling sound for all-day comfort.',
      image: 'https://placehold.co/400x320/E6F1FB/185FA5?text=Headphones',
    },
    {
      name: 'Smart Watch Pro',
      price: '99.99',
      badge: 'New',
      rating: 4,
      reviews: 84,
      description: 'Track fitness, sleep, and stay connected on the go.',
      image: 'https://placehold.co/400x320/EAF3DE/3B6D11?text=Smart+Watch',
    },
    {
      name: 'Running Sneakers',
      price: '79.99',
      badge: 'Hot',
      rating: 5,
      reviews: 210,
      description: 'Lightweight sole for speed and all-terrain grip.',
      image: 'https://placehold.co/400x320/FAEEDA/854F0B?text=Sneakers',
    },
    {
      name: 'Urban Backpack',
      price: '59.99',
      oldPrice: '69.99',
      badge: 'Sale',
      rating: 4,
      reviews: 57,
      description: 'Waterproof 30L bag with USB charging port.',
      image: 'https://placehold.co/400x320/FBEAF0/993556?text=Backpack',
    },
    {
      name: 'Mechanical Keyboard',
      price: '129.99',
      badge: 'New',
      rating: 5,
      reviews: 305,
      description: 'RGB backlit, tactile switches for fast typing.',
      image: 'https://placehold.co/400x320/EEEDFE/3C3489?text=Keyboard',
    },
    {
      name: 'Insulated Bottle',
      price: '24.99',
      badge: 'Hot',
      rating: 4,
      reviews: 92,
      description: 'Keeps drinks cold 24h, hot 12h. BPA-free steel.',
      image: 'https://placehold.co/400x320/E1F5EE/085041?text=Water+Bottle',
    },
  ];

  res.render('home', {
    title: 'Home',
    products: [],
  });
};
