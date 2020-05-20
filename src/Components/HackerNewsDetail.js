import React from 'react';

const HackerNewsDetail = (props) => {
  if(!props.article){
      return null;
  }

// const moreDetails = [];
//   function revealDropdown() {
//     console.log("rendered")
//     moreDetails.push(<h6>It works!!!</h6>);
//   }
  console.log(props.article);
  return (
      <div>
          <p> TEXT Words Things! </p>
          <h1>{props.article.title}</h1>
          <h2>{props.article.author}</h2>
          {/* {moreDetails} */}
      </div>
  );
}

export default HackerNewsDetail;