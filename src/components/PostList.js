import React from "react";
import ButtonDelete from "./ButtonDelete";

function PostList({ posts }) {
  return (
    <div class="list-group">
      {posts.map((todo) => (
        <a
          key={todo.id}
          href="/"
          class="list-group-item list-group-item-action flex-column align-items-start "
        >
          <div class="d-flex w-100 justify-content-between">
            <h4 class="mb-1">{todo.title}</h4>
            <small>
              <ButtonDelete posts={posts} />
            </small>
          </div>
          <p class="mb-1">{todo.body}</p>
        </a>
      ))}
    </div>
  );
}
export default PostList;
