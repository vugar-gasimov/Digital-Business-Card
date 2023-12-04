import Symbols from "../assets/Symbols";

const Footer = () => {
  return (
    <div className="footer--container">
      <Symbols />
      <a className="footer--button" href="">
        <svg className="icon" width={25} height={25}>
          <use xlinkHref="#icon-Twitter" />
        </svg>
      </a>
      <a className="footer--button" href="">
        <svg className="icon" width={25} height={25}>
          <use xlinkHref="#icon-Facebook" />
        </svg>
      </a>
      <a className="footer--button" href="">
        <svg className="icon" width={25} height={25}>
          <use xlinkHref="#icon-Instagram" />
        </svg>
      </a>
      <a className="footer--button" href="">
        <svg className="icon" width={25} height={25}>
          <use xlinkHref="#icon-GitHub" />
        </svg>
      </a>
    </div>
  );
};

export default Footer;
