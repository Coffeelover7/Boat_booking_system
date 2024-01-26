import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1 className="logo">kola</h1>
          <p>Choose your favourite destination</p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-sqaure"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-sqaure"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-sqaure"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-behance-sqaure"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Links</h4>
          <a href="/">Home</a>
          <a href="/">Packages</a>
          <a href="/">About us</a>
          <a href="/">Contact us</a>
          <a href="/">Members Area</a>
        </div>
        <div>
          <h4>Community</h4>
          <a href="/">Github</a>
          <a href="/">Issues</a>
          <a href="/">Project</a>
          <a href="/">Twitter</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="/">Support</a>
          <a href="/">Troubleshouting</a>
          <a href="/">License</a>
          <a href="/">Contact Us</a>
        </div>
        <div>
          <h4>Others</h4>
          <a href="/">Terms of Services</a>
          <a href="/">Privacy Policy</a>
          <a href="/">License</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
