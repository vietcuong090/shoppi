import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { FaStar, FaStarHalfStroke, FaTruckFast } from 'react-icons/fa6';
import { FaHeart } from 'react-icons/fa';
import { TbShoppingBagPlus } from 'react-icons/tb';
import Footer from '../components/Footer';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [product, setProduct] = useState(null);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  const fetchProductData = () => {
    const selectdProduct = products.find((item) => item._id === productId);
    if (selectdProduct) {
      setProduct(selectdProduct);
      setImage(selectdProduct.image[0]);
    }
  };

  useEffect(() => {
    if (products.length > 0) {
      fetchProductData();
    }
  }, [productId, products]);

  if (!product) {
    return <div>...Loading</div>;
  }
  return (
    <section>
      <div className='max-padd-container mt-8 xl:mt-6'>
        <div className='max-padd-container flex gap-12 flex-col xl:flex-row bg-white py-16 rounded-2xl'>
          {/* Thư viện ảnh */}
          <div className='flex flex-1 gap-x-2 xl:flex-1'>
            <div className='flexCenter flex-col gap-[7px] flex-wrap mb-10'>
              {product.image.map((item, i) => (
                <img
                  key={i}
                  src={item}
                  alt={`product-image-${i}`}
                  className='max-h-[89px] rounded-lg cursor-pointer'
                  onClick={() => setImage(item)}
                />
              ))}
            </div>
            <div className='max-h-[377px] w-auto flex'>
              <img src={image} alt='selected-product' className='rounded-xl bg-white' />
            </div>
          </div>
          {/* Thông tin sản phẩm */}
          <div className='flex-[1.5] rounded-2xl px-7'>
            <h3 className='h3 !my-2.5'>{product.name}</h3>
            {/* Giá và đánh giá */}
            <div className='flex items-baseline gap-x-5'>
              <h3 className='h3'>
                {currency}
                {product.price}
              </h3>
              <div className='flex items-center gap-x-2 text-secondary mb-2'>
                <div className='flex gap-x-2 text-secondary text-xl'>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfStroke />
                </div>
                <span>(122)</span>
              </div>
            </div>
            <p>{product.description}</p>
            <div className='flex flex-col gap-4 my-4 mb-5'>
              <div className='flex gap-2'>
                {[...product.sizes]
                  .sort((a, b) => {
                    const order = ['S', 'M', 'L', 'XL', 'XXL'];
                    return order.indexOf(a) - order.indexOf(b);
                  })
                  .map((item, i) => (
                    <button
                      onClick={() => setSize(item)}
                      key={i}
                      className={`${
                        item === size ? 'bg-tertiary text-white' : 'border-slate-900/5'
                      } border-[1.5px] border-tertiary h-8 w-10 bg-primary rounded-md`}
                    >
                      {item}
                    </button>
                  ))}
              </div>
            </div>
            <div className='flex items-center gap-x-4'>
              <button
                onClick={() => addToCart(product._id, size)}
                className='btn-dark w-1/2 flexCenter gap-x-2 capitalize'
              >
                Add to cart <TbShoppingBagPlus />
              </button>
              <button className='btn-light'>
                <FaHeart />
              </button>
            </div>
            <div className='flex items-center gap-x-2 mt-2'>
              <FaTruckFast className='text-lg' />
              <span className='medium-14'>Free Delivery on oders over 500$</span>
            </div>
            <hr className='my-4 w-2/3' />
            <div className='mt-2 flex flex-col gap-1'>
              <p>Authenticy You Trust</p>
              <p>Enjoy Cash on Delivery for Your Conventionce</p>
              <p>Easy Returns and Exchanges Within 7 Days</p>
            </div>
          </div>
        </div>
        <RelatedProducts category={product.category} subCategory={product.subCategory} />
      </div>
      <Footer />
    </section>
  );
};

export default Product;
