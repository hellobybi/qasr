import { Link } from "react-router-dom";
import { useContext } from "react";
// import { useState } from "react";
import { useState } from "react";
import { ProductContext } from "../context/ProductContext";


//

const Products = () => {
  const { items } = useContext(ProductContext);
  
  const [Clicked, setClicked] = useState(false);

  const [add, setAdd] = useState(false);
  const handleToggle = (data) => {
    setAdd(!add);
    // handleToggle.some((item) => item.id === data.id);
  };
  return (
    <ul className="grid grid-cols-3 max-w-[1400px] mx-auto   gap-3 p-3 mt-5">
      
        {items.map((item) => (
          <li
            className=" mb-5 list-none  shadow-xl shadow-[#8987857d] border-1    p-4 rounded-[10px] "
            key={item.id}
          >
            <Link className=" flex flex-col justify-between items-center" to={`/products/${item.id}`}>
              <img className=" h-[250px] w-[100%]  rounded-[10px] block" src={item.img} alt="" />
              <div className="pt-5 w-full flex flex-col gap-2">
                <h1 className="font-semibold text-gray-700 text-[17px]">{item.title}</h1>
                <span className=" text-center text-[18px]  font-semibold bg-[#FD9140] text-white w-[100%] px-2 py-[3px] rounded-md">{item.price} сум</span>
              </div>
            </Link>
            
          </li>
        ))}
    </ul>
  );
};

export default Products;
