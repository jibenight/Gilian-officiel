let config;

if (process.env.NODE_ENV === 'development') {
  config = {
    BASE_URL: 'http://localhost:3000',
  };
} else if (process.env.NODE_ENV === 'production') {
  config = {
    BASE_URL: 'https://gilian-officiel.com',
  };
} else {
  // Par défaut pour d'autres environnements (test, etc.)
  config = {
    BASE_URL: 'http://localhost:3000',
  };
}

export default config;
