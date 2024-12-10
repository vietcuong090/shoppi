import React, { useContext, useEffect, useState } from 'react';
import Title from '../components/Title';
import { ShopContext } from '../context/ShopContext';
import Item from '../components/Item';
import ShowSearch from '../components/ShowSearch';

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext); // Dữ liệu sản phẩm từ Context
  const [category, setCategory] = useState([]); // Lọc theo danh mục
  const [subCategory, setSubCategory] = useState([]); // Lọc theo loại sản phẩm
  const [sortType, setSortType] = useState('relevant'); // Loại sắp xếp
  const [filteredProducts, setFilteredProducts] = useState([]); // Danh sách sản phẩm sau khi lọc

  // Hàm toggle để thêm/xóa giá trị từ mảng trạng thái
  const toggleFilter = (value, setState) => {
    setState((prev) => (prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]));
  };

  // Hàm áp dụng bộ lọc
  const applyFilters = () => {
    let filtered = [...products];

    if (search && showSearch) {
      filtered = filtered.filter((product) => product.name.toLowerCase().includes(search.toLowerCase()));
    }

    // Lọc theo danh mục
    if (category.length) {
      filtered = filtered.filter((product) => category.includes(product.category));
    }

    // Lọc theo loại sản phẩm
    if (subCategory.length) {
      filtered = filtered.filter((product) => subCategory.includes(product.subCategory));
    }

    return filtered;
  };

  // Hàm sắp xếp sản phẩm
  const applySorting = (productsList) => {
    switch (sortType) {
      case 'low':
        return productsList.sort((a, b) => a.price - b.price);
      case 'high':
        return productsList.sort((a, b) => b.price - a.price);
      default:
        return productsList; // Mặc định (không sắp xếp)
    }
  };

  // Áp dụng bộ lọc và sắp xếp mỗi khi có thay đổi
  useEffect(() => {
    const filtered = applyFilters();
    const sorted = applySorting(filtered);
    setFilteredProducts(sorted);
  }, [category, subCategory, sortType, products, search, showSearch]);

  return (
    <section className='max-padd-container'>
      <div className='flex flex-col sm:flex-row gap-8 mt-8 xl:mt-6 h-auto'>
        {/* Phần bộ lọc */}
        <div className='min-w-60 bg-white p-4 rounded-2xl sticky top-0 self-start'>
          {/* Bộ lọc danh mục */}
          <ShowSearch />
          {/* Category fitler */}
          <div className='bg-primary ring-1 ring-slate-900/5 pl-5 py-3 mt-6 rounded-xl'>
            <h5 className='h-5 mb-4'>Categories</h5>
            <div className='flex flex-col gap-2 text-sm font-light'>
              {['Men', 'Women', 'Kids'].map((cat) => (
                <label key={cat} className='flex gap-2 medium-14 text-gray-30'>
                  <input
                    type='checkbox'
                    value={cat}
                    onChange={(e) => toggleFilter(e.target.value, setCategory)}
                    className='w-3'
                  />
                  {cat}
                </label>
              ))}
            </div>
          </div>

          {/* Bộ lọc loại sản phẩm */}
          <div className='bg-primary ring-1 ring-slate-900/5 pl-5 py-3 mt-6 rounded-xl'>
            <h5 className='h-5 mb-4'>Types</h5>
            <div className='flex flex-col gap-2 text-sm font-light'>
              {['Topwear', 'Bottomwear', 'Winterwear'].map((subCat) => (
                <label key={subCat} className='flex gap-2 medium-14 text-gray-30'>
                  <input
                    type='checkbox'
                    value={subCat}
                    onChange={(e) => toggleFilter(e.target.value, setSubCategory)}
                    className='w-3'
                  />
                  {subCat}
                </label>
              ))}
            </div>
          </div>

          {/* Sắp xếp sản phẩm */}
          <select
            className='medium-14 h-8 w-full border-slate-900/5 bg-primary text-gray-30 rounded-lg px-2 outline-none mt-6'
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value='relevant'>Sort by: Relevant</option>
            <option value='low'>Sort by: Low</option>
            <option value='high'>Sort by: High</option>
          </select>
        </div>

        {/* Phần danh sách sản phẩm */}
        <div className='bg-white rounded-2xl w-full'>
          <Title title='Our Collection' />
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 gap-y-6'>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => <Item product={product} key={product._id} />)
            ) : (
              <p className='capitalize text-center text-gray-400'>No products found for selected filter.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;
//3-24-29
