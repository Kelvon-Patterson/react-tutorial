import React from "react";
import ReactDom from "react-dom";
import "./index.css";

/* JSX Rules - return single element
 * div/ section / article or fragment
 * use camelCase for html attribute
 * className instead of class
 * close every element
 * formatting
 * The children prop is everything that we render in between the opening and closing tag of the component.
 */
const books = [
  {
    id: 1,
    img: "https://m.media-amazon.com/images/I/51aibR+lteL.jpg",
    title: "Dance of Kings and Thieves",
    author: "LJ Andrews",
  },

  {
    id: 2,
    img: "https://m.media-amazon.com/images/I/51mDSB+k7YL._SX327_BO1,204,203,200_.jpg",
    title: "Fairy Tale",
    author: "Stephen King",
  },

  {
    id: 3,
    img: "https://m.media-amazon.com/images/I/511BYDDBFOL._SX329_BO1,204,203,200_.jpg",
    title: "Verity",
    author: "Colleen Hoover",
  },
];

function BookList() {
  return (
    <section className={"bookList"}>
      {books.map((book) => {
        const { img, title, author } = book;
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

const Book = ({ img, title, author }) => {
  // Attribute Event Handler
  //onClick, onMouseOver
  //  console.log(props);
  // const { img, author, title } = props;
  const clickHandler = (e) => {
    console.log(e.target);
    console.log(e);
    alert("Hello World");
  };
  const complexExample = (author) => {
    console.log(author);
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(author);
      }}
    >
      <img src={img} alt="" />
      <h2
        onClick={() => {
          console.log(title);
        }}
      >
        {title}
      </h2>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        reference example
      </button>
      <button type={"button"} onClick={() => complexExample(author)}>
        {" "}
        More complex example
      </button>
    </article>
  );
};

// const Image = () => (
//   <img
//     src="https://m.media-amazon.com/images/I/41KY-NORo9L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
//     alt=""
//   />
// );

// const Title = () => <h2>48 Laws of Power</h2>;
// const Author = () => (
//   <h4 style={{ color: "#617d98", fontSize: "0.75rem", margin: "0.25rem" }}>
//     Robert Greene
//   </h4>
// );
// const Price = () => <h4>$11.99</h4>;

ReactDom.render(<BookList />, document.getElementById("root"));
