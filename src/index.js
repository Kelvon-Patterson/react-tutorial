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
const firstBook = {
  img: "https://m.media-amazon.com/images/I/41KY-NORo9L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
  title: "48 Laws of Power",
  author: "Robert Greene",
};

const secondBook = {
  img: "https://m.media-amazon.com/images/I/51mDSB+k7YL._SX327_BO1,204,203,200_.jpg",
  title: "Fairy Tale",
  author: "Stephen King",
};

function BookList() {
  return (
    <section className={"bookList"}>
      <Book //Component
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        {/*ChildProp>>>*/}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
          aliquid aperiam cupiditate debitis distinctio, earum eligendi enim,
          illo inventore laborum magnam magni maxime nobis non quasi quia, saepe
          tempore velit!
        </p>
        {/*<<<Child Prop*/}
      </Book>

      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = ({ img, author, title, children }) => {
  //  console.log(props);
  // const { img, author, title } = props;
  return (
    <article className={"book"}>
      <img src={img} title={firstBook.title} alt={""} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {children}
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
