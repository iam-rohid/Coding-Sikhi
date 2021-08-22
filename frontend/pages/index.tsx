import React, { useEffect, useState } from "react";
import StrapiImage from "../components/StrapiImage";
import { fetchAPI } from "../lib/api";

const Index = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchAPI("/blogs").then((res) => {
      setData(res);
      console.log(res);
    });
    return () => {};
  }, []);
  return (
    <ul>
      {data &&
        data.map((blog) => (
          <li key={blog.id}>
            <StrapiImage
              img={blog.cover_image}
              format="small"
              className="w-80 h-40 overflow-hidden object-cover"
            />
            <h1>{blog.title}</h1>
            <p>{blog.exerpt}</p>
          </li>
        ))}
    </ul>
  );
};

export default Index;
