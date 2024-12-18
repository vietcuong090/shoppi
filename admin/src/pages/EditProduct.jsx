import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { backend_url } from '../App';

const EditProduct = ({ token }) => {
  const { id } = useParams(); // Lấy ID từ URL
  const [product, setProduct] = useState({ name: '', price: '', description: '' });

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`${backend_url}/api/product/single/${id}`, product, { headers: { token } });
      if (response.data.success) {
        setProduct(response.data.product); // Giả sử response chứa thông tin sản phẩm
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Cập nhật sản phẩm ở đây
    try {
      const response = await axios.put(`${backend_url}/api/product/edit/${id}`, product, { headers: { token } });
      if (response.data.success) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);
  return (
    <div>
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type='text' name='name' required />
        </div>
        <div>
          <label>Price:</label>
          <input type='number' name='price' required />
        </div>
        <div>
          <label>Description:</label>
          <textarea name='description' required />
        </div>
        <button type='submit'>Update Product</button>
      </form>
    </div>
  );
};

export default EditProduct;
