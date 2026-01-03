import laptop from "./../../images/images (13).jpeg"
import Phone from "./../../images/images (14).jpeg"
import Shoes from "./../../images/images (15).jpeg"
import Watch from "./../../images/3287KL01_2.webp"



const productsData = [
  {
    id: 1,
    name: "Laptop",
    price: 55000,
    image: laptop,
    category: "Electronics",
    stock: 10,
    description: "High performance laptop"
  },
  {
    id: 2,
    name: "Mobile",
    price: 25000,
    image: Phone,
    category: "Electronics",
    stock: 15,
    description: "Latest smartphone"
  },
  {
    id: 3,
    name: "Shoes",
    price: 3000,
    image: Shoes,
    category: "Leather",
    stock: 20,
    description: "Brandes shoes"
  },
  {
    id: 4,
    name: "Watch",
    price: 4500,
    image: Watch,
    category: "Electronics",
    stock: 25,
    description: "Branded Watch"
  }
];

export default productsData;

