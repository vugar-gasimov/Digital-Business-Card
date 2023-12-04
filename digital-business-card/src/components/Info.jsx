import Img from "../images/photo.jpg";
import Symbols from "../assets/Symbols";
const Info = () => {
  return (
    <div className="info--container">
      <img
        className="info--img"
        src={Img}
        alt="My photo"
        width={317}
        height={317}
      />
      <h1 className="info--title">Vugar Gasimov</h1>
      <p className="info--text">Frontend Developer</p>
      <p className="info--subtext">vuqar5qasimov@gmail.com</p>
      <div className="info--button-container">
        <Symbols />
        <a className="info--button" href="mailto:vuqar5qasimov@gmail.com">
          <svg className="icon" width={16} height={16}>
            <use xlinkHref="#icon-Mail" />
          </svg>
          Email
        </a>
        <a
          className="info--button-one"
          href="www.linkedin.com/in/vugar5gasimov

"
        >
          <svg className="icon" width={16} height={16}>
            <use xlinkHref="#icon-linkedin" />
          </svg>
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Info;
