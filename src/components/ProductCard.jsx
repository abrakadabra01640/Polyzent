import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProductCard = ({ product, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group h-full"
    >
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift group-hover:shadow-2xl transition-all duration-300 h-full border border-gray-100">
        {/* Header Section */}
        <div className="relative">
          {/* Image Container */}
          <div className="relative h-48 bg-gradient-to-br from-linen to-gray-100 overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 hidden items-center justify-center absolute inset-0">
              <div className="text-center text-gray-600">
                <div className="w-16 h-16 bg-harvest-gold/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-8 h-8 text-harvest-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-sm font-medium">{product.name}</p>
              </div>
            </div>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <span className="bg-dark-slate text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                {product.category}
              </span>
            </div>

            {/* Certifications Badge */}
            {product.certifications && product.certifications.length > 0 && (
              <div className="absolute top-4 right-4">
                <div className="bg-green-600 text-white px-2 py-1 rounded text-xs font-medium shadow-lg flex items-center">
                  <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Certified
                </div>
              </div>
            )}
          </div>

          {/* Product Header Info */}
          <div className="p-6 pb-4">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-heading font-bold text-dark-slate group-hover:text-harvest-gold transition-colors duration-300 leading-tight">
                {product.name}
              </h3>
              {product.price && (
                <div className="text-right">
                  <div className="text-lg font-bold text-harvest-gold">
                    {product.price}
                  </div>
                  {product.minOrder && (
                    <div className="text-xs text-gray-500">
                      MOQ: {product.minOrder}
                    </div>
                  )}
                </div>
              )}
            </div>
            
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              {product.description.length > 120 
                ? `${product.description.substring(0, 120)}...` 
                : product.description}
            </p>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="px-6 pb-4">
          <h4 className="text-sm font-semibold text-dark-slate mb-3 flex items-center">
            <svg className="w-4 h-4 mr-2 text-harvest-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            Technical Specifications
          </h4>
          <div className="grid grid-cols-1 gap-2">
            {product.specifications && Object.entries(product.specifications).slice(0, 3).map(([key, value]) => (
              <div key={key} className="flex justify-between items-center py-1 border-b border-gray-100 last:border-b-0">
                <span className="text-xs text-gray-600 capitalize font-medium">
                  {key.replace(/([A-Z])/g, ' $1').trim()}:
                </span>
                <span className="text-xs text-dark-slate font-semibold">
                  {Array.isArray(value) ? value[0] : value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="px-6 pb-4">
          <h4 className="text-sm font-semibold text-dark-slate mb-3 flex items-center">
            <svg className="w-4 h-4 mr-2 text-harvest-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            Key Features
          </h4>
          <div className="space-y-2">
            {product.features && product.features.slice(0, 3).map((feature, idx) => (
              <div key={idx} className="flex items-start">
                <svg className="w-3 h-3 text-harvest-gold mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-xs text-gray-700 leading-relaxed">
                  {feature.length > 45 ? `${feature.substring(0, 45)}...` : feature}
                </span>
              </div>
            ))}
            {product.features && product.features.length > 3 && (
              <div className="text-xs text-harvest-gold font-medium">
                +{product.features.length - 3} more features
              </div>
            )}
          </div>
        </div>

        {/* Applications */}
        <div className="px-6 pb-4">
          <h4 className="text-sm font-semibold text-dark-slate mb-3 flex items-center">
            <svg className="w-4 h-4 mr-2 text-harvest-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            Applications
          </h4>
          <div className="flex flex-wrap gap-1">
            {product.applications && product.applications.slice(0, 3).map((app, idx) => (
              <span
                key={idx}
                className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-medium border border-blue-200"
              >
                {app.length > 20 ? `${app.substring(0, 20)}...` : app}
              </span>
            ))}
          </div>
        </div>

        {/* Certifications */}
        {product.certifications && product.certifications.length > 0 && (
          <div className="px-6 pb-4">
            <h4 className="text-sm font-semibold text-dark-slate mb-2 flex items-center">
              <svg className="w-4 h-4 mr-2 text-harvest-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              Certifications
            </h4>
            <div className="flex flex-wrap gap-1">
              {product.certifications.slice(0, 2).map((cert, idx) => (
                <span
                  key={idx}
                  className="bg-green-50 text-green-700 px-2 py-1 rounded text-xs font-medium border border-green-200"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="p-6 pt-4 border-t border-gray-100 bg-gray-50/50">
          <div className="flex gap-3">
            <Link 
              to={`/products/${product.id}`}
              className="flex-1 bg-harvest-gold text-dark-slate px-4 py-2 rounded-lg font-medium text-sm text-center hover:bg-yellow-500 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              View Details
            </Link>
            <Link
              to="/contact"
              className="flex-1 bg-dark-slate text-white px-4 py-2 rounded-lg font-medium text-sm text-center hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Get Quote
            </Link>
          </div>
          
          <div className="flex items-center justify-center mt-3 text-xs text-gray-500">
            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Free samples available • Same-day quotes
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;