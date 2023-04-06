import React from "react";
import { useDispatch } from "react-redux";
import ProductCard from "../components/ProductCard";
import { useGetProductsQuery } from "../features/api/apiSlice";
import { toggle, toggleBrands } from "../features/filter/filterSlice";

const Home = () => {
	

	// const activeClass = "text-white  bg-indigo-500 border-white";

	const dispatch = useDispatch();
	// useEffect(() => {
	// 	fetch("http://localhost:5000/products")
	// 		.then((res) => res.json())
	// 		.then((data) => setProducts(data.data));

		
	// }, []);
	// console.log(products);

  const {data, isLoading, isSuccess, isError, error} = useGetProductsQuery();

  const products = data?.data;
//   console.log(products);

  if(isLoading){
    return <p>Loading...</p>
  }

  if(isError){
	return <p>Something went wrong..</p>
  }


	return (
		<div>
			<div className="justify-center items-center flex gap-3">
				<button
					className={`border px-3 py-2 rounded-full font-semibold `}
					onClick={() => dispatch(toggle())}
				>
					In stock
				</button>
				<button
					className={`border px-3 py-2 rounded-full font-semibold`}
					onClick={() => dispatch(toggleBrands("amd"))}
				>
					AMD
				</button>
				<button
					className={`border px-3 py-2 rounded-full font-semibold`}
					onClick={() => dispatch(toggleBrands("intel"))}
				>
					Intel
				</button>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
				{products?.map((product) => (
					<ProductCard key={product._id} product={product} />
				))}
				{/* {content} */}
			</div>
		</div>
	);
};

export default Home;
