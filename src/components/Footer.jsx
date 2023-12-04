import Symbols from "../assets/Symbols";

const Footer = () => {
  return (
    <div className="footer--container">
      <Symbols />
      <a className="footer--button" href="https://twitter.com/VuqarQasim46049">
        <svg className="icon" width={25} height={25}>
          <use xlinkHref="#icon-Twitter" />
        </svg>
      </a>
      <a
        className="footer--button"
        href="https://www.facebook.com/profile.php?id=100006303706598"
      >
        <svg className="icon" width={25} height={25}>
          <use xlinkHref="#icon-Facebook" />
        </svg>
      </a>
      <a
        className="footer--button"
        href="https://instagram.com/_vugargasimov_?igshid=MmVlMjlkMTBhMg=="
      >
        <svg className="icon" width={25} height={25}>
          <use xlinkHref="#icon-Instagram" />
        </svg>
      </a>
      <a className="footer--button" href="https://github.com/vugar-gasimov">
        <svg className="icon" width={25} height={25}>
          <use xlinkHref="#icon-GitHub" />
        </svg>
      </a>
    </div>
  );
};

export default Footer;
