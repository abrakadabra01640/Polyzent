import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getProductById } from '../data/products';
import CTAButton from '../components/CTAButton';

const ProductDetail = () => {
  const { productId } = useParams();
  const product = getProductById(productId);

  if (!product) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold text-dark-slate mb-4">
            Product Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The product you're looking for doesn't exist.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center px-6 py-3 bg-harvest-gold text-dark-slate font-medium rounded-lg hover:bg-yellow-500 transition-colors"
          >
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Breadcrumb */}
      <section className="bg-linen py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-600 hover:text-harvest-gold">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/products" className="text-gray-600 hover:text-harvest-gold">Products</Link>
            <span className="text-gray-400">/</span>
            <span className="text-dark-slate font-medium">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Product Header */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-linen to-gray-100 rounded-2xl flex items-center justify-center overflow-hidden">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-center">
                    <div className="w-32 h-32 bg-harvest-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-16 h-16 text-harvest-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-500">Product Image</p>
                  </div>
                )}
              </div>
              
              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="bg-harvest-gold text-dark-slate px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                  {product.category}
                </span>
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-dark-slate mb-4">
                {product.name}
              </h1>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {product.description}
              </p>

              {/* Key Features */}
              <div className="mb-8">
                <h3 className="text-xl font-heading font-semibold text-dark-slate mb-4">
                  Key Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.features.slice(0, 6).map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <svg className="w-5 h-5 text-harvest-gold mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton size="lg" href="/contact">
                  Send Inquiry
                </CTAButton>
                <CTAButton variant="secondary" size="lg" href="tel:+1234567890">
                  Call Now
                </CTAButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Information */}
      <section className="py-20 bg-linen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-heading font-semibold text-dark-slate mb-6">
                Benefits
              </h3>
              <ul className="space-y-3">
                {product.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-harvest-gold mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Specifications */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-heading font-semibold text-dark-slate mb-6">
                Specifications
              </h3>
              <div className="space-y-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="border-b border-gray-200 pb-3 last:border-b-0">
                    <dt className="text-sm font-medium text-gray-600 capitalize mb-1">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </dt>
                    <dd className="text-gray-900">
                      {Array.isArray(value) ? value.join(', ') : value}
                    </dd>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Applications */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-heading font-semibold text-dark-slate mb-6">
                Applications
              </h3>
              <ul className="space-y-3">
                {product.applications.map((application, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-harvest-gold mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{application}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-slate text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Interested in {product.name}?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get in touch with our experts to discuss your requirements and receive 
              a customized quote for your packaging needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton size="lg" href="/contact">
                Request Quote
              </CTAButton>
              <CTAButton variant="outline" size="lg" href="/products">
                View More Products
              </CTAButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;