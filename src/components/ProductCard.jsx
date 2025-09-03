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
              <span className="bg-slate-900 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                {product.category}
              </span>
            </div>

            
          </div>

          {/* Product Header Info */}
          <div className="p-6 pb-4">
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
          </div>
        </div>

        
        

        

        {/* Action Buttons */}
        <div className="p-6 pt-4 border-t border-gray-100 bg-gray-50/50">
          <div className="flex gap-3">
            <Link 
              to={`/products/${product.id}`}
              className="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-lg font-medium text-sm text-center hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              View Details
            </Link>
    
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;