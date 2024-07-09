'use client'
import CategoriesProducts from "../categoriesproducts";
import SearchChange from "./searchChange";
import useProductsContainerLogic from "./useChange";

const SearchBar = () => {
    const { showCategories, handleSearch, handleClearSearch } = useProductsContainerLogic();

    return (
        <div>
            <div className='flex justify-center items-center xl:mt-6'>
                <SearchChange onSearch={handleSearch} onClearSearch={handleClearSearch} />
            </div>
            <div className='xl:mb-80'>
                {showCategories && <CategoriesProducts />}
            </div>
        </div>
    )
}
export default SearchBar;
