import { useState } from 'react';

const useProductsContainerLogic = () => {
    const [showCategories, setShowCategories] = useState(true);

    const handleSearch = () => {
        setShowCategories(false);
    };

    const handleClearSearch = () => {
        setShowCategories(true);
    };

    return {
        showCategories,
        handleSearch,
        handleClearSearch,
    };
};

export default useProductsContainerLogic;
