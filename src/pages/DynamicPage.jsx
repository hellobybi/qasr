import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { IoMdArrowBack } from "react-icons/io";

// import Isnot from "./Isnot";

const DynamicPage = () => {
  const params = useParams();
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const [iserror, setIserror] = useState(false);
  const [msg, setMsg] = useState("");

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://7cd802e6f0811275.mokky.dev/qasr/${params.id}`
      );
      setData(response.data);
    } catch (e) {
      setMsg(e.response.data.message);
      setIserror(true);
    }
  };

  useEffect(() => {
    getData();
  }, [params.id]);

  return (
    <div className="flex justify-center items-center mt-8 pb-8">
        {iserror ? (
        <div>
          {/* <Isnot /> */}
          hello
        </div>
      ) : (
        <div className="flex flex-col gap-5 justify-center"> 
            <button className="bg-orange-400 flex justify-center text-[20px] items-center gap-3 w-[250px] rounded-lg font-semibold p-2 text-white" onClick={()=>navigate(-1)}>
            <IoMdArrowBack className="text-[34px] font-semibold" />
               <span>orqaga qaytish</span></button>
            <img className="w-[400px] rounded-xl shadow-lg shadow-gray-400" src={data.img} alt="" />
            <div className="mt-4">
              <h1 className="text-gray-700 font-semibold text-[28px]">{data.title}</h1>
              <p className="p-1 rounded-xl border-orange-400 border-[3px] text-orange-500 text-[24px]  font-semibold w-[200px] text-center">{data.price} сум</p>
            </div>
        </div>
      )};
    </div>
  );
};

export default DynamicPage;
