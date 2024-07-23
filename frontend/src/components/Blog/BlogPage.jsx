// src/components/BlogPage.js
import React, { useState } from 'react';
import './BlogPage.css';
import image1 from '../../images/blog1.png';
import image2 from '../../images/blog2.png';
import image3 from '../../images/blog3.png';
import image4 from '../../images/blog4.png';

const BlogPage = () => {
  const blogs = [
    { image: image1, title: 'Why people need parties' },
    { image: image2, title: '7 tips for managing time effectively' },
    { image: image3, title: '7 tips for managing time effectively' },
    { image: image4, title: 'Our 2024 successful event' },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 2;

  // Calculate the indexes for the current page
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="blog-page">
      <header className="blog-page-header">
        <h1>Our Blogs</h1>
      </header>
      <div className="blog-list">
        {currentBlogs.map((blog, index) => (
          <div key={index} className="blog">
            <img src={blog.image} alt={blog.title} />
            <h3>{blog.title}</h3>
            <a href="#">Read More</a>
          </div>
        ))}
      </div>
      <div className="pagination">
        <a onClick={() => paginate(currentPage - 1)} href="#">❮</a>
        {[...Array(Math.ceil(blogs.length / blogsPerPage)).keys()].map(number => (
          <a key={number + 1} onClick={() => paginate(number + 1)} href="#">
            {number + 1}
          </a>
        ))}
        <a onClick={() => paginate(currentPage + 1)} href="#">❯</a>
      </div>
    </div>
  );
};

export default BlogPage;
