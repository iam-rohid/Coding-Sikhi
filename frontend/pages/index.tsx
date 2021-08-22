import React, { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import StrapiImage from "../components/StrapiImage";
import { fetchAPI } from "../lib/api";
import { BlogInterface } from "../models/blog";

const HomePage = () => {
  const [data, setData] = useState<BlogInterface[]>([]);
  useEffect(() => {
    fetchAPI("/blogs").then((res) => {
      setData(res as BlogInterface[]);
    });
    return () => {};
  }, []);
  return (
    <div className="container py-8">
      <div className="grid grid-cols-3 gap-10">
        {data && data.map((blog) => <BlogCard blog={blog} key={blog.id} />)}
      </div>
    </div>
  );
};

export default HomePage;
