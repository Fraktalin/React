import React from "react";

export class PostItem extends React.Component {
  render() {
    let data = this.props;
    return (
      <div id={data.id} className="block">
        <h3 className="block-title">{data.title}</h3>
        <div id={"body" + data.id}>{data.body}</div>
        <div className="button-wrap">
          <button
            onClick={() => {
              document.getElementById("body" + data.id).textContent = prompt(
                "Change text",
                data.body
              );
            }}
          >
            Edit
          </button>
          <button onClick={() => data.delete(data.id)}>Delete</button>
        </div>
      </div>
    );
  }
}

export default PostItem;
