import React from "react";

import { useGlobalContext } from "./context";

const Stories = () => {
  const { isLoading, hits, removeStory } = useGlobalContext();
  if (isLoading) return <div className="loading"></div>;
  return (
    <section className="stories">
      {hits.map((item) => {
        const { title, url, objectID, num_comments, points, author } = item;
        return (
          <article className="story" key={objectID}>
            <h4 className="title">{title}</h4>
            <p className="info">
              {points} points by <span className=""> {author} | </span>
              {num_comments}{" "}
            </p>
            <a
              href={url}
              target="_blank"
              className="read-link"
              rel="noopener noreferrer"
            >
              read more
            </a>
            <button
              className="remove-btn"
              onClick={() => removeStory(objectID)}
            >
              remove
            </button>
          </article>
        );
      })}
    </section>
  );
};

export default Stories;
