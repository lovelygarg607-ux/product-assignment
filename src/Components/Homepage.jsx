import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import ProductCard from "../Components/ProductCard";
import ProductTable from "../Components/ProductTable";
import Searchbar from "../Components/Searchbar";
import Pagination from "../Components/Pagination"
import "./../Styles/home.css"

function Home() {
  const { products } = useOutletContext();
  const [view, setView] = useState("grid");
  const [searchquery, setsearchquery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 2;

  const navigate = useNavigate();


  const filterproducts = products.filter((item) =>
    item.name.toLowerCase().includes(searchquery.toLowerCase())
  );


  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const currentProducts = filterproducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <>
      <Searchbar onSearch={setsearchquery} />

      <div className="view-buttons">
        <button
          className={view === "grid" ? "active" : ""}
          onClick={() => setView("grid")}
        >
          Card View
        </button>

        <button
          className={view === "list" ? "active" : ""}
          onClick={() => setView("list")}
        >
          List View
        </button>
      </div>


      {view === "grid" ? (
        <div className="product-grid">
          {currentProducts.map((item) => (
            <ProductCard
              key={item.id}
              product={item}
              onEdit={() => navigate(`/editproduct/${item.id}`)}
            />
          ))}
        </div>
      ) : (
        <ProductTable
          products={currentProducts}
          onEdit={(id) => navigate(`/editproduct/${id}`)}
        />
      )}


      <Pagination
        totalProducts={filterproducts.length}
        productsPerPage={productsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}

export default Home;


