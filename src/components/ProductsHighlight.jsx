import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import BubbleWrap from '../Assets/BubbleWrap.avif';
import ShrinkWrap from '../Assets/ShrinkWrap.jpg';
import JumboBag from '../Assets/jumboproduct.png';
import hdpe from '../Assets/hdpe.jpg'

const ProductsHighlight = () => {
  const products = [
    {
      id: 1,
      name: 'Stretch Film Wrap',
      description: 'High-quality shrink films for secure packaging and product protection.',
      image: ShrinkWrap,
      link: '/products/stretch-film'
    },
    {
      id: 2,
      name: 'Bubble Wrap',
      description: 'Superior cushioning protection for fragile items during shipping & transits.',
      image: BubbleWrap,
      link: '/products/bubble-wrap'
    },
    {
      id: 3,
      name: 'Jumbo Bags',
      description: 'Heavy-duty FIBC bags designed to ensure efficient bulk material management and logistics.',
      image: JumboBag,
      link: '/products/jumbo-bags'
    },
    {
  id: 4,
  name: 'HDPE Bags',
  description: 'Durable and versatile HDPE bags suitable for industrial and commercial packaging needs.',
  image: hdpe,
  link: '/products/hdpe-bags'
}

  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-amber-500 rounded-full mr-2 animate-pulse"></span>
            Our Products
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            Premium{' '}
            <span className="bg-gradient-to-r from-amber-600 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Packaging Solutions
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of packaging solutions designed for various industries and applications
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Link to={product.link}>
                <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-slate-100 group-hover:border-amber-300/50">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-6">
                      <h3 className="text-xl font-bold text-amber-600 group-hover:text-orange-600 transition-colors duration-300 leading-tight">
                        {product.name}
                      </h3>
                      {product.price && (
                        <div className="text-right">
                          <div className="text-sm text-slate-600 mb-1">
                            Starting from
                          </div>
                          <div className="text-lg font-bold text-amber-600">
                            {product.price}
                          </div>
                          {product.minOrder && (
                            <div className="text-xs text-slate-500 mt-1">
                              MOQ: {product.minOrder}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {product.description}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center text-amber-600 font-medium text-sm group-hover:text-slate-900 transition-colors duration-300">
                      <span>Learn More</span>
                      <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-amber-500/10 rounded-3xl blur-xl"></div>
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-slate-100">
              <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
                <div className="text-center md:text-left">
                  <h3 className="text-lg font-bold text-slate-900 mb-1">Need Something Specific?</h3>
                  <p className="text-slate-600 text-sm">Explore our complete product catalog</p>
                </div>
                <a href="/products" target="_self" rel="noopener noreferrer">
  <button className="px-8 py-4 bg-gradient-to-r from-slate-900 to-slate-700 text-white font-semibold rounded-xl hover:from-slate-800 hover:to-slate-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center">
    View All Products
    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  </button>
</a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsHighlight;