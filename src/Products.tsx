import "./App.css";
import ProductCard from "./ProductCard";

const productsInformation = [
  {
    id: 1,
    productName: "Dresses",
    productDescription: "This is a beautiful dress.",
    price: 15000,
    category: "Fashion",
    imageUrl: "https://www.lafemmefashion.com/sites/default/files/styles/dress_315x500/public/dresses_images/royal-blue-prom-dress-1-32278.jpg?itok=F_-oVx41"
  },
  {
    id: 2,
    productName: "Tops",
    productDescription: "This is a beautiful top.",
    price: 7500,
    category: "Fashion",
    imageUrl: "https://www.cartrollers.com/wp-content/uploads/2022/02/Stylish-Long-Sleeved-Sweat-Tops-For-Women-Size-14-e1644917311230.jpeg"
  },
  {
    id: 3,
    productName: "Pants",
    productDescription: "This is a beautiful pant.",
    price: 10000,
    category: "Fashion",
    imageUrl: "https://i5.walmartimages.com/seo/Tdoqot-Women-s-Cargo-Pants-with-Pockets-High-weight-Casual-Fashion-Straight-Leg-Pants-Brown-Size-M_ddc8caf8-677e-44c4-9498-7478a12b3681.13065f724ee61d2e9c1bc817ec520de0.jpeg"
  },
  {
    id: 4,
    productName: "Skirts",
    productDescription: "This is a beautiful skirt.",
    price: 8500,
    category: "Fashion",
    imageUrl: "https://www.refinery29.com/images/11491661.jpg?format=webp&width=720&height=864&quality=85&crop=5%3A6"
  },
  {
    id: 5,
    productName: "Jeans",
    productDescription: "This is a beautiful pair of jeans.",
    price: 18000,
    category: "Fashion",
    imageUrl: "https://images.unsplash.com/photo-1627140290942-7c8f9f56e870?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFtYm9yZ2hpbmklMjB1cnVzfGVufDB8fDB8fHww"
  },
  {
    id: 6,
    productName: "T-shirts",
    productDescription: "This is a beautiful T-shirt.",
    price: 3500,
    category: "Fashion",
    imageUrl: "https://images.unsplash.com/photo-1613061527119-56ad37b8a581?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFza2V0fGVufDB8fDB8fHww"
  },
  {
    id: 7,
    productName: "Blazers",
    productDescription: "This is a beautiful blazer.",
    price: 20000,
    category: "Fashion",
    imageUrl: "https://plus.unsplash.com/premium_photo-1664302318670-29dee41e85e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c29ja3N8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 8,
    productName: "Sweaters",
    productDescription: "This is a beautiful sweater.",
    price: 12000,
    category: "Fashion",
    imageUrl: "https://images.unsplash.com/photo-1575032617751-6ddec2089882?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJhZ3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 9,
    productName: "Shorts",
    productDescription: "This is a beautiful pair of shorts.",
    price: 6500,
    category: "Fashion",
    imageUrl: "https://images.unsplash.com/photo-1602351447937-745cb720612f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNha2V8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 10,
    productName: "Jackets",
    productDescription: "This is a beautiful jacket.",
    price: 25000,
    category: "Fashion",
    imageUrl: "https://images.unsplash.com/photo-1627140290942-7c8f9f56e870?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFtYm9yZ2hpbmklMjB1cnVzfGVufDB8fDB8fHww"
  },
  {
    id: 11,
    productName: "Coats",
    productDescription: "This is a beautiful coat.",
    price: 30000,
    category: "Fashion",
    imageUrl: "https://images.unsplash.com/photo-1613061527119-56ad37b8a581?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFza2V0fGVufDB8fDB8fHww"
  },
  {
    id: 12,
    productName: "Hoodies",
    productDescription: "This is a beautiful hoodie.",
    price: 15000,
    category: "Fashion",
    imageUrl: "https://plus.unsplash.com/premium_photo-1664302318670-29dee41e85e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c29ja3N8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 13,
    productName: "Cardigans",
    productDescription: "This is a beautiful cardigan.",
    price: 10000,
    category: "Fashion",
    imageUrl: "https://images.unsplash.com/photo-1575032617751-6ddec2089882?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJhZ3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 14,
    productName: "Jumpsuits",
    productDescription: "This is a beautiful jumpsuit.",
    price: 22000,
    category: "Fashion",
    imageUrl: "https://images.unsplash.com/photo-1602351447937-745cb720612f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNha2V8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 15,
    productName: "Rompers",
    productDescription: "This is a beautiful romper.",
    price: 14000,
    category: "Fashion",
    imageUrl: "https://images.unsplash.com/photo-1627140290942-7c8f9f56e870?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFtYm9yZ2hpbmklMjB1cnVzfGVufDB8fDB8fHww"
  },
  {
    id: 16,
    productName: "Bodysuits",
    productDescription: "This is a beautiful bodysuit.",
    price: 9500,
    category: "Fashion",
    imageUrl: "https://images.unsplash.com/photo-1613061527119-56ad37b8a581?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFza2V0fGVufDB8fDB8fHww"
  },
  {
    id: 17,
    productName: "Leggings",
    productDescription: "This is a beautiful pair of leggings.",
    price: 8500,
    category: "Fashion",
    imageUrl: "https://plus.unsplash.com/premium_photo-1664302318670-29dee41e85e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c29ja3N8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 18,
    productName: "Sneakers",
    productDescription: "This is a beautiful pair of sneakers.",
    price: 20000,
    category: "Fashion",
    imageUrl: "https://images.unsplash.com/photo-1575032617751-6ddec2089882?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJhZ3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 19,
    productName: "Boots",
    productDescription: "This is a beautiful pair of boots.",
    price: 30000,
    category: "Fashion",
    imageUrl: "https://images.unsplash.com/photo-1602351447937-745cb720612f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNha2V8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 20,
    productName: "Sandals",
    productDescription: "This is a beautiful pair of sandals.",
    price: 18000,
    category: "Fashion",
    imageUrl: "https://images.unsplash.com/photo-1613061527119-56ad37b8a581?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFza2V0fGVufDB8fDB8fHww"
  }
];

const Products = () => {
  return (
    <div className="product-grid">
      {productsInformation.map((product) => (
        <ProductCard
          key={product.id}
          productImage={product.imageUrl}
          productName={product.productName}
          productDescription={product.productDescription}
          productPrice={product.price}
          // productIsLiked={product.productIsLiked}
        />
      ))}
    </div>
  );
};

export default Products;