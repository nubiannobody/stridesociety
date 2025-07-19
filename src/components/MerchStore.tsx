import React from 'react';
import { ShoppingCart, Star, Heart } from 'lucide-react';

const products = [
  {
    name: "Stride Society Logo Tee",
    price: "$24.99",
    images: {
      Black: "/images/stridesocietyMerch/t-shirt.png",
      White: "/images/stridesocietyMerch/whitet-shirt.png"
    },
    description: "Premium cotton t-shirt with our signature logo",
    rating: 4.8,
    reviews: 142,
    colors: ["Black", "White"]
  },
  {
    name: "Performance Walking Hat",
    price: "$19.99",
    images: {
      Black: "/images/stridesocietyMerch/hat.png",
      White: "/images/stridesocietyMerch/whitehat.png"
    },
    description: "Moisture-wicking cap perfect for sunny walks",
    rating: 4.9,
    reviews: 89,
    colors: ["Black", "White"]
  },
  {
    name: "Insulated Water Bottle",
    price: "$29.99",
    images: {
      Black: "/images/stridesocietyMerch/waterbottle.png",
      White: "/images/stridesocietyMerch/whitewaterbottle.png"
    },
    description: "24oz stainless steel bottle with club logo",
    rating: 4.7,
    reviews: 203,
    colors: ["Black", "White"]
  },
  {
    name: "Canvas Tote Bag",
    price: "$16.99",
    images: {
      Black: "/images/stridesocietyMerch/totebag.png",
      White: "/images/stridesocietyMerch/whitetotebag.png"
    },
    description: "Sturdy canvas bag for carrying walking essentials",
    rating: 4.6,
    reviews: 156,
    colors: ["Black", "White"]
  },
  {
    name: "Socks",
    price: "$9.99",
    images: {
      Black: "/images/stridesocietyMerch/socks.png",
      White: "/images/stridesocietyMerch/whitesocks.png"
    },
    description: "Track your walks and progress with this custom journal",
    rating: 4.8,
    reviews: 78,
    colors: ["Black", "White"]
  },
  {
    name: "Lightweight Hoodie",
    price: "$39.99",
    images: {
      Black: "/images/stridesocietyMerch/hoodie.png",
      White: "/images/stridesocietyMerch/whitehoodie.png"
    },
    description: "Comfortable hoodie for cooler walking days",
    rating: 4.9,
    reviews: 124,
    colors: ["Black", "White"]
  }
];

const ProductCard = ({ product }) => {
  const [selectedColor, setSelectedColor] = React.useState(product.colors[0]);

  return (
    <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative group">
      <img
  src={product.images[selectedColor]}
  alt={`${product.name} - ${selectedColor}`}
  className="w-full h-84 object-contain p-4"
/>
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200">
            <Heart className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-black mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-3">{product.description}</p>

        <div className="flex items-center mb-3">
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
          <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
          <span className="text-sm text-gray-500 ml-2">({product.reviews} reviews)</span>
        </div>

        <div className="mb-4">
          <p className="text-sm text-gray-600 mb-2">Available Colors:</p>
          <div className="flex space-x-2">
            {product.colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`w-8 h-8 rounded-full border-2 ${
                  color === 'Black' ? 'bg-black' : 'bg-white'
                } ${selectedColor === color ? 'ring-2 ring-black' : ''}`}
                title={color}
              ></button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-black">{product.price}</span>
          <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 flex items-center">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const MerchStore: React.FC = () => {
  return (
    <section id="store" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Merch Store</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Show your Stride Society pride with our collection of high-quality, minimalist gear. All proceeds support our community programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>

        <div className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-black mb-4">Member Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-black mb-2">Free Shipping</h4>
              <p className="text-gray-600">On orders over $50 for club members</p>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-2">Member Discount</h4>
              <p className="text-gray-600">15% off all merchandise</p>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-2">Quality Guarantee</h4>
              <p className="text-gray-600">30-day return policy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MerchStore;
