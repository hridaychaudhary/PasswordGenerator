import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    // Define an asynchronous function to fetch data
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost/api-test/wp-json/wp/v2/posts`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []); // Empty dependency array ensures this runs once on mount
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  // console.log(data);

  return (
    <>
      <section className="bg-gray-700">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <h1 className="text-white text-center">Blogs</h1>
        </div>
        <div className="grid grid-rows-4 grid-flow-col gap-4">
          {data &&
            data.map((post) => {
              return (
                <div
                  key={post.title.rendered}
                  className="block rounded-lg bg-gray-950 shadow-secondary-1 dark:bg-surface-dark w-80 grid grid-rows-4 grid-flow-col gap-4"
                >
                  <Link to="/">
                    <img
                      className="rounded-t-lg"
                      src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                      alt=""
                    />
                  </Link>
                  <div className="p-6 text-surface dark:text-white">
                    <h5 className="mb-2 text-xl font-medium leading-tight">
                      {post.title.rendered}
                    </h5>
                    <p className="mb-4 text-base">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <Link
                      to={"/"}
                      className="button inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                      data-twe-ripple-init
                      data-twe-ripple-color="light"
                    >
                      Button
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    </>
  );
};

export default Blog;
