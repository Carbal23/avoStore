module.exports = {
  async rewrites() {
    return [
      {
        source: "/avocado/:path*",
        destination: "/products/:path*",
      },
    ];
  },
  images: {
    // Desactiva la optimización de imágenes durante la exportación
    unoptimized: true,
  },
 
};
