export const products = [
  {
    id: 'stretch-film',
    name: 'Stretch Film',
    category: 'Pallet Wrapping',
    description: 'Industrial-grade stretch films engineered for superior load containment and pallet stability. Our multi-layer co-extruded films deliver exceptional puncture resistance and cling properties.',
    image: '/images/products/stretch-film.jpg',
    price: ' $0.85/kg',
    minOrder: '500 kg',
    features: [
      'Superior puncture resistance for secure load containment',
      '99.9% load stability ensures safe transportation',
      'Exceptional 500% stretch capability for cost efficiency',
      'UV stabilized for outdoor storage applications'
    ],
    benefits: [
      'Reduces product damage by 95%',
      'Cuts packaging time by 40%',
      'Weather and moisture protection',
      'Tamper-evident security',
      'Reduces labor costs',
      'Environmentally friendly options'
    ],
    specifications: {
      thickness: '12-30 microns',
      width: '100-500mm',
      length: '300-1500 meters',
      coreSize: '76mm (3")',
      stretchRatio: 'Up to 300%',
      tensileStrength: '≥25 N/mm²',
      applications: ['Pallet wrapping', 'Cargo securing', 'Bundling applications']
    },
    applications: [
      'Warehouse and distribution centers',
      'Manufacturing facilities',
      'Food and beverage industry',
      'Pharmaceutical logistics',
      'Construction materials',
      'Agricultural products',
      'Export packaging'
    ],
    certifications: ['ISO 9001:2015', 'FDA Approved', 'EU Food Contact']
  },
  {
    id: 'liner-bags',
    name: 'Liner Bags',
    category: 'Industrial Liners',
    description: 'Heavy-duty polyethylene liner bags designed for bulk container protection. Engineered to withstand industrial environments while maintaining product integrity.',
    image: '/images/products/liner-bags.jpg',
    price: ' $2.50/piece',
    minOrder: '1000 pieces',
    features: [
      'High-density polyethylene construction',
      'Seamless bottom welding',
      'Anti-static properties available',
      'Food-grade materials',
      'Custom sizing and thickness',
      'Tear and puncture resistant',
      'Chemical compatibility tested',
      'UV stabilized options'
    ],
    benefits: [
      'Protects bulk materials from contamination',
      'Extends product shelf life',
      'Reduces cleaning and maintenance',
      'Cost-effective bulk packaging',
      'Easy installation and removal',
      'Moisture barrier protection'
    ],
    specifications: {
      thickness: '100-300 microns',
      sizes: '36" x 48" to 60" x 96"',
      material: 'LDPE/HDPE',
      colors: 'Clear, blue, black',
      capacity: '500-2000 liters',
      temperature: '-20°C to +80°C',
      applications: ['Drum liners', 'Container liners', 'Bulk storage']
    },
    applications: [
      'Chemical and pharmaceutical industries',
      'Food processing facilities',
      'Agricultural storage',
      'Mining and minerals',
      'Waste management',
      'Liquid storage and transport'
    ],
    certifications: ['FDA Approved', 'EU 10/2011', 'ISO 9001:2015']
  },
  {
    id: 'jumbo-bags',
    name: 'Jumbo Bags (FIBC)',
    category: 'Bulk Packaging',
    description: 'Premium flexible intermediate bulk containers (FIBC) manufactured with virgin polypropylene fabric. Designed for safe handling of bulk materials up to 2000kg capacity.',
    image: '/images/products/jumbo-bags.jpg',
    price: ' $8.50/piece',
    minOrder: '100 pieces',
    features: [
      'Virgin polypropylene woven fabric',
      'Safety factor 5:1 or 6:1',
      'Type A, B, C, D antistatic options',
      'Food-grade inner liners available',
      'Custom printing and branding',
      'Multiple lifting loop configurations',
      'Discharge spout options',
      'UN certification available'
    ],
    benefits: [
      'Reduces handling costs by 60%',
      'Space-efficient storage',
      'Reusable and recyclable',
      'Weather resistant construction',
      'Forklift and crane compatible',
      'Reduces product contamination'
    ],
    specifications: {
      capacity: '500-2000 kg',
      fabric: '140-220 GSM PP',
      dimensions: '90x90x110cm (standard)',
      safetyFactor: '5:1 or 6:1',
      loops: '4 corner loops or cross corner',
      coating: 'Uncoated or PE coated',
      applications: ['Bulk solids', 'Granular materials', 'Powders']
    },
    applications: [
      'Agricultural products (grains, seeds)',
      'Chemical powders and granules',
      'Construction materials (sand, cement)',
      'Food ingredients (sugar, flour)',
      'Mining industry (ores, minerals)',
      'Recycling materials',
      'Pharmaceutical bulk materials'
    ],
    certifications: ['ISO 9001:2015', 'UN 13H3/Y', 'BRC Packaging', 'AIB Food Safety']
  },
  {
    id: 'bubble-wrap',
    name: 'Bubble Wrap',
    category: 'Protective Packaging',
    description: 'Multi-layer bubble cushioning films providing superior shock absorption and protection. Available in various bubble sizes and barrier properties for diverse applications.',
    image: '/images/products/bubble-wrap.jpg',
    price: ' $1.20/m²',
    minOrder: '500 m²',
    features: [
      'Co-extruded barrier films',
      'Multiple bubble sizes (6mm-20mm)',
      'Anti-static variants available',
      'Perforated rolls for easy handling',
      'Recyclable materials',
      'Temperature resistant',
      'Self-sealing properties',
      'Custom widths available'
    ],
    benefits: [
      'Reduces damage claims by 90%',
      'Lightweight yet protective',
      'Excellent insulation properties',
      'Easy to handle and apply',
      'Cost-effective protection',
      'Reusable material'
    ],
    specifications: {
      bubbleSize: '6mm, 10mm, 15mm, 20mm',
      thickness: '60-150 GSM',
      width: '300-1500mm',
      length: '50-500 meters',
      material: 'LDPE/HDPE',
      temperature: '-40°C to +80°C',
      applications: ['Fragile protection', 'Void filling', 'Insulation']
    },
    applications: [
      'E-commerce and shipping',
      'Electronics and appliances',
      'Glassware and ceramics',
      'Automotive parts',
      'Furniture and artwork',
      'Medical devices',
      'Moving and storage'
    ],
    certifications: ['ISO 9001:2015', 'Recyclable Grade 4', 'Anti-Static ANSI/ESD']
  },
  {
    id: 'hdpe-bags',
    name: 'HDPE Bags',
    category: 'Flexible Packaging',
    description: 'High-density polyethylene bags offering exceptional strength and chemical resistance. Manufactured using blown film technology for consistent quality and performance.',
    image: '/images/products/hdpe-bags.jpg',
    price: '$0.15/piece',
    minOrder: '10,000 pieces',
    features: [
      'High-density polyethylene construction',
      'Superior tensile strength',
      'Chemical and moisture resistant',
      'Food-grade compliance',
      'Custom printing up to 8 colors',
      'Various closure options',
      'Gusseted and flat bag styles',
      'Biodegradable options available'
    ],
    benefits: [
      'Extended product shelf life',
      'Cost-effective packaging solution',
      'Excellent barrier properties',
      'Lightweight yet durable',
      'Versatile application range',
      'Brand enhancement opportunities'
    ],
    specifications: {
      thickness: '25-200 microns',
      sizes: '4" x 6" to 24" x 36"',
      colors: 'Natural, white, colored',
      printing: 'Flexographic up to 8 colors',
      sealType: 'Heat seal, zipper, drawstring',
      temperature: '-40°C to +120°C',
      applications: ['Food packaging', 'Industrial storage', 'Retail applications']
    },
    applications: [
      'Food and beverage packaging',
      'Pharmaceutical products',
      'Industrial chemicals',
      'Retail and shopping bags',
      'Agricultural products',
      'Textile packaging',
      'Hardware and components'
    ],
    certifications: ['FDA 21 CFR 177.1520', 'EU 10/2011', 'ISO 9001:2015', 'BRC Packaging']
  },
  {
    id: 'paper-bags',
    name: 'Paper Bags',
    category: 'Eco-Friendly Packaging',
    description: 'Sustainable kraft paper bags manufactured from recycled and virgin materials. Offering excellent printability and strength for retail and industrial applications.',
    image: '/images/products/paper-bags.jpg',
    price: '$0.25/piece',
    minOrder: '5,000 pieces',
    features: [
      'Virgin and recycled kraft paper',
      'Water-based inks and adhesives',
      'Multiple handle options',
      'Grease and moisture resistant coatings',
      'Custom printing and branding',
      'Reinforced bottom construction',
      'Biodegradable and compostable',
      'FSC certified materials'
    ],
    benefits: [
      '100% recyclable and biodegradable',
      'Enhanced brand visibility',
      'Consumer preference for eco-friendly',
      'Strong load-bearing capacity',
      'Cost-effective marketing tool',
      'Regulatory compliance ready'
    ],
    specifications: {
      material: 'Kraft paper 70-300 GSM',
      sizes: '6" x 9" to 18" x 24"',
      handles: 'Twisted, flat, rope, die-cut',
      printing: 'Flexo, offset, digital',
      coating: 'PE, PLA, or barrier coatings',
      capacity: '2-25 kg load bearing',
      applications: ['Retail bags', 'Food service', 'Gift packaging']
    },
    applications: [
      'Retail and shopping centers',
      'Food service and restaurants',
      'Grocery and supermarkets',
      'Gift and promotional packaging',
      'Pharmaceutical packaging',
      'Industrial component packaging',
      'Event and conference materials'
    ],
    certifications: ['FSC Certified', 'PEFC Chain of Custody', 'Compostable ASTM D6400', 'FDA Food Contact']
  },
  {
    id: 'pp-strip-roll',
    name: 'PP Strip Roll',
    category: 'Strapping Materials',
    description: 'High-tensile polypropylene strapping rolls designed for heavy-duty bundling and securing applications. Manufactured with advanced polymer technology for maximum strength.',
    image: '/images/products/pp-strip-roll.jpg',
    price: ' $1.80/kg',
    minOrder: '200 kg',
    features: [
      'High-grade polypropylene resin',
      'Superior tensile strength',
      'Excellent elongation properties',
      'UV stabilized for outdoor use',
      'Embossed surface for better grip',
      'Split resistance technology',
      'Various widths and thicknesses',
      'Machine and manual application'
    ],
    benefits: [
      'Reduces packaging costs by 30%',
      'Superior load retention',
      'Weather and chemical resistant',
      'Easy to handle and apply',
      'Recyclable material',
      'Consistent quality performance'
    ],
    specifications: {
      width: '9-32mm',
      thickness: '0.5-1.2mm',
      tensileStrength: '≥140 N/mm²',
      elongation: '12-18%',
      coreSize: '200mm (8")',
      length: '1000-3000 meters',
      applications: ['Bundling', 'Palletizing', 'Carton sealing']
    },
    applications: [
      'Logistics and shipping',
      'Manufacturing bundling',
      'Construction materials',
      'Paper and printing industry',
      'Textile and garment packaging',
      'Agricultural product bundling',
      'Export packaging and containers'
    ],
    certifications: ['ISO 9001:2015', 'RoHS Compliant', 'Recyclable Grade 5']
  }
];

export const getProductById = (id) => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category) => {
  return products.filter(product => product.category === category);
};