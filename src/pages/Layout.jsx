import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import TopBar from "./TopBar";
import BottomNav from "./BottomNav";

export default function Layout(props) {
  return (
    <div className="site-wrapper clearfix">
      <div className="site-overlay"></div>
      {/* Header Mobile */}
      <div className="header-mobile clearfix" id="header-mobile">
        <div className="header-mobile__logo">
          <a href="index.html">
            <img
              src="soccer-dark/assets/images/soccer/logo.png"
              srcSet="soccer-dark/assets/images/soccer/logo_2x.png 2x"
              alt="Kutumba"
              className="header-mobile__logo-img"
            />
          </a>
        </div>
        <div className="header-mobile__inner">
          <a id="header-mobile__toggle" className="burger-menu-icon">
            <span className="burger-menu-icon__line" />
          </a>{" "}
          <span
            className="header-mobile__search-icon fas"
            id="header-mobile__search-icon"
          />
        </div>
      </div>
      {/* Header Desktop */}
      <header className="header header--layout-1">
        {/* Header Top Bar */}
        <div className="header__top-bar clearfix">
          <div className="container">
            <div className="header__top-bar-inner">
              {/* Account Navigation */}
              <ul className="nav-account">
                <li className="nav-account__item">
                  <a
                    href="https://myaccount.kutumbafc.com/"
                    data-toggle="modal"
                    data-target="#modal-login-register-tabs"
                  >
                    My Account
                  </a>
                </li>
                <li className="nav-account__item nav-account__item--wishlist">
                  <a href="soccer-dark/_soccer_shop-wishlist.html">
                    Wishlist <span className="highlight">8</span>
                  </a>
                </li>
                <li
                  className="nav-account__item nav-account__item--logout"
                  id="login-button"
                >
                  <a href="https://accounts.kutumbafc.com/">Login</a>
                </li>
                <li
                  className="nav-account__item nav-account__item--logout"
                  id="logout-button"
                >
                  <a href="https://accounts.kutumbafc.com/">Logout</a>
                </li>
              </ul>
              {/* Account Navigation / End */}
            </div>
          </div>
        </div>
        {/* Header Top Bar / End */}
        {/* Header Secondary */}
        <div className="header__secondary">
          <div className="container">
            {/* Header Search Form */}
            <div className="header-search-form">
              <form action="#" id="mobile-search-form" className="search-form">
                <input
                  type="text"
                  className="form-control header-mobile__search-control"
                  defaultValue
                  placeholder="Enter your search here..."
                />{" "}
                <button type="submit" className="header-mobile__search-submit">
                  <i className="fas fa-search" />
                </button>
              </form>
            </div>
            {/* Header Search Form / End */}
            <ul className="info-block info-block--header">
              <li className="info-block__item info-block__item--contact-primary">
                <svg role="img" className="df-icon df-icon--whistle">
                  <use xlinkHref="soccer-dark/assets/images/icons-soccer.svg#whistle" />
                </svg>
                <h6 className="info-block__heading">Join Our Team!</h6>
                <a
                  className="info-block__link"
                  href="mailto:tryouts@Kutumba.com"
                >
                  tryouts@Kutumba.com
                </a>
              </li>
              <li className="info-block__item info-block__item--contact-secondary">
                <svg role="img" className="df-icon df-icon--soccer-ball">
                  <use xlinkHref="soccer-dark/assets/images/icons-soccer.svg#soccer-ball" />
                </svg>
                <h6 className="info-block__heading">Contact Us</h6>
                <a className="info-block__link" href="mailto:info@Kutumba.com">
                  info@Kutumba.com
                </a>
              </li>
              <li className="info-block__item info-block__item--shopping-cart js-info-block__item--onhover">
                <a href="#" className="info-block__link-wrapper">
                  <div className="df-icon-stack df-icon-stack--bag">
                    <svg role="img" className="df-icon df-icon--bag">
                      <use xlinkHref="soccer-dark/assets/images/icons-basket.svg#bag" />
                    </svg>{" "}
                    <svg role="img" className="df-icon df-icon--bag-handle">
                      <use xlinkHref="soccer-dark/assets/images/icons-basket.svg#bag-handle" />
                    </svg>
                  </div>
                  <h6 className="info-block__heading">Your Bag (8 items)</h6>
                  <span className="info-block__cart-sum">$256,30</span>
                </a>
                {/* Dropdown Shopping Cart */}
                <ul className="header-cart">
                  <li className="header-cart__item">
                    <figure className="header-cart__product-thumb">
                      <a href="soccer-dark/_soccer_shop-product.html">
                        <img
                          src="soccer-dark/assets/images/soccer/samples/_soccer_cart-sm-1.jpg"
                          alt
                        />
                      </a>
                    </figure>
                    <div className="header-cart__inner">
                      <span className="header-cart__product-cat">Sneakers</span>
                      <h5 className="header-cart__product-name">
                        <a href="soccer-dark/_soccer_shop-product.html">
                          Sundown Sneaker
                        </a>
                      </h5>
                      <div className="header-cart__product-ratings">
                        <i className="fas fa-star" />{" "}
                        <i className="fas fa-star" />{" "}
                        <i className="fas fa-star" />{" "}
                        <i className="fas fa-star" />{" "}
                        <i className="fas fa-star empty" />
                      </div>
                      <div className="header-cart__product-sum">
                        <span className="header-cart__product-price">
                          $28.00
                        </span>{" "}
                        x <span className="header-cart__product-count">2</span>
                      </div>
                      <div className="fas fa-times header-cart__close" />
                    </div>
                  </li>
                  <li className="header-cart__item">
                    <figure className="header-cart__product-thumb">
                      <a href="soccer-dark/_soccer_shop-product.html">
                        <img
                          src="soccer-dark/assets/images/soccer/samples/_soccer_cart-sm-4.jpg"
                          alt
                        />
                      </a>
                    </figure>
                    <div className="header-cart__inner">
                      <span className="header-cart__product-cat">Sneakers</span>
                      <h5 className="header-cart__product-name">
                        <a href="soccer-dark/_soccer_shop-product.html">
                          Atlantik Sneaker
                        </a>
                      </h5>
                      <div className="header-cart__product-ratings">
                        <i className="fas fa-star" />{" "}
                        <i className="fas fa-star" />{" "}
                        <i className="fas fa-star" />{" "}
                        <i className="fas fa-star" />{" "}
                        <i className="fas fa-star" />
                      </div>
                      <div className="header-cart__product-sum">
                        <span className="header-cart__product-price">
                          $30.00
                        </span>{" "}
                        x <span className="header-cart__product-count">4</span>
                      </div>
                      <div className="fas fa-times header-cart__close" />
                    </div>
                  </li>
                  <li className="header-cart__item">
                    <figure className="header-cart__product-thumb">
                      <a href="soccer-dark/_soccer_shop-product.html">
                        <img
                          src="soccer-dark/assets/images/soccer/samples/_soccer_cart-sm-2.jpg"
                          alt
                        />
                      </a>
                    </figure>
                    <div className="header-cart__inner">
                      <span className="header-cart__product-cat">Sneakers</span>
                      <h5 className="header-cart__product-name">
                        <a href="soccer-dark/_soccer_shop-product.html">
                          Aquarium Sneaker
                        </a>
                      </h5>
                      <div className="header-cart__product-ratings">
                        <i className="fas fa-star" />{" "}
                        <i className="fas fa-star" />{" "}
                        <i className="fas fa-star" />{" "}
                        <i className="fas fa-star empty" />{" "}
                        <i className="fas fa-star empty" />
                      </div>
                      <div className="header-cart__product-sum">
                        <span className="header-cart__product-price">
                          $28.00
                        </span>{" "}
                        x <span className="header-cart__product-count">1</span>
                      </div>
                      <div className="fas fa-times header-cart__close" />
                    </div>
                  </li>
                  <li className="header-cart__item header-cart__item--subtotal">
                    <span className="header-cart__subtotal">Cart Subtotal</span>{" "}
                    <span className="header-cart__subtotal-sum">$282.00</span>
                  </li>
                  <li className="header-cart__item header-cart__item--action">
                    <a
                      href="soccer-dark/_soccer_shop-cart.html"
                      className="btn btn-default btn-block"
                    >
                      Go to Cart
                    </a>{" "}
                    <a
                      href="soccer-dark/_soccer_shop-checkout.html"
                      className="btn btn-primary-inverse btn-block"
                    >
                      Checkout
                    </a>
                  </li>
                </ul>
                {/* Dropdown Shopping Cart / End */}
              </li>
            </ul>
          </div>
        </div>
        {/* Header Secondary / End */}
        {/* Header Primary */}
        <div className="header__primary">
          <div className="container">
            <div className="header__primary-inner">
              {/* Header Logo */}
              <div className="header-logo">
                <a href="index.html">
                  <img
                    src="soccer-dark/assets/images/soccer/logo.png"
                    srcSet="soccer-dark/assets/images/soccer/logo_2x.png 2x"
                    alt="Kutumba"
                    className="header-logo__img"
                  />
                </a>
              </div>
              {/* Header Logo / End */}
              {/* Main Navigation */}
              <nav className="main-nav clearfix">
                <ul className="main-nav__list">
                  <li>
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li>
                    <Link to={"/players"}>Players</Link>
                  </li>
                  <li>
                    <Link to={"/fixtures"}>Fixtures</Link>
                  </li>
                  <li className="has-children">
                    <span className="main-nav__toggle" />
                    <a href="_soccer_shop-grid.html">Shop</a>
                    <ul className="main-nav__sub">
                      <li className>
                        <a href="_soccer_shop-grid.html">Shop - Grid</a>
                      </li>
                      <li className>
                        <a href="_soccer_shop-list.html">Shop - List</a>
                      </li>
                      <li className>
                        <a href="_soccer_shop-product.html">Single Product</a>
                      </li>
                      <li className>
                        <a href="_soccer_shop-cart.html">Shopping Cart</a>
                      </li>
                      <li className>
                        <a href="_soccer_shop-checkout.html">Checkout</a>
                      </li>
                      <li className>
                        <a href="_soccer_shop-wishlist.html">Wishlist</a>
                      </li>
                      <li className>
                        <a href="_soccer_shop-login.html">Login</a>
                      </li>
                      <li className>
                        <a href="_soccer_shop-account.html">Account</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to={"/newsroom"}>Newsroom</Link>
                  </li>
                  <li>
                    <Link to={"/gallery"}>Gallery</Link>
                  </li>
                  <li>
                    <a href="https://blog.kutumbafc.com/" target="top">
                      Blog
                    </a>
                  </li>
                </ul>
                {/* Social Links */}
                <ul className="social-links social-links--inline social-links--main-nav">
                  <li className="social-links__item">
                    <a
                      href="https://facebook.com/kutumbafc"
                      className="social-links__link"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="Facebook"
                      target="top"
                    >
                      <i className="fab fa-facebook" />
                    </a>
                  </li>
                  <li className="social-links__item">
                    <a
                      href="https://twitter.com/KuTumbaFC"
                      className="social-links__link"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="Twitter"
                      target="top"
                    >
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li className="social-links__item">
                    <a
                      href="https://www.instagram.com/kutumbafc/"
                      className="social-links__link"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="Instagram"
                      target="top"
                    >
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                </ul>
                {/* Social Links / End */}
              </nav>
              {/* Main Navigation / End */}
            </div>
          </div>
        </div>
        {/* Header Primary / End */}
      </header>
      {/* Header / End */}

      {props.children}

      <footer id="footer" className="footer">
        {/* Footer Widgets */}
        <div className="footer-widgets">
          <div className="footer-widgets__inner">
            <div className="container">
              <div className="row">
                <div className="col-sm-6 col-lg-6">
                  {/* Footer Logo */}
                  <div className="footer-logo footer-logo--has-txt">
                    <a href="index.html">
                      <img
                        src="soccer-dark/assets/images/soccer/logo-footer.png"
                        srcSet="soccer-dark/assets/images/soccer/logo-footer_2x.png 2x"
                        alt="Kutumba FC"
                        className="footer-logo__img"
                      />
                      <div className="footer-logo__heading">
                        <h5 className="footer-logo__txt">Kutumba FC</h5>
                        <span className="footer-logo__tagline">
                          Elric Bros School
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="widget-contact-info__desc">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur cing elit, sed do
                      eiusmod tempor incididunt uten labore et dolore magna
                      aliqua. Ut enim ad minim veniam.
                    </p>
                  </div>
                  {/* Footer Logo / End */}
                </div>
              </div>
            </div>
          </div>
          {/* Sponsors */}
          <div className="container">
            <div className="sponsors">
              <h6 className="sponsors-title">Our Sponsors:</h6>
              <ul className="sponsors-logos">
                <li className="sponsors__item">
                  <a href="#" target="_blank">
                    <img
                      src="soccer-dark/assets/images/soccer/sponsor-visa.png"
                      alt
                    />
                  </a>
                </li>
                <li className="sponsors__item">
                  <a href="#" target="_blank">
                    <img
                      src="soccer-dark/assets/images/soccer/sponsor-discover.png"
                      alt
                    />
                  </a>
                </li>
                <li className="sponsors__item">
                  <a href="#" target="_blank">
                    <img
                      src="soccer-dark/assets/images/soccer/sponsor-paypal.png"
                      alt
                    />
                  </a>
                </li>
                <li className="sponsors__item">
                  <a href="#" target="_blank">
                    <img
                      src="soccer-dark/assets/images/soccer/sponsor-skrill.png"
                      alt
                    />
                  </a>
                </li>
                <li className="sponsors__item">
                  <a href="#" target="_blank">
                    <img
                      src="soccer-dark/assets/images/soccer/sponsor-westernunion.png"
                      alt
                    />
                  </a>
                </li>
                <li className="sponsors__item">
                  <a href="#" target="_blank">
                    <img
                      src="soccer-dark/assets/images/soccer/sponsor-payoneer.png"
                      alt
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Sponsors / End */}
        </div>
        {/* Footer Widgets / End */}
        {/* Footer Secondary */}
        <div className="footer-secondary">
          <div className="container">
            <div className="footer-secondary__inner">
              <div className="row">
                <div className="col-md-4">
                  <div className="footer-copyright">
                    <a href="index.html">Kutumba FC</a> &copy; 2020 &nbsp; | &nbsp; <a href="https://mixspace.xyz" target="top">MixSpace Internet Services</a>
                  </div>
                </div>
                <div className="col-md-8">
                  <ul className="footer-nav footer-nav--right footer-nav--condensed footer-nav--sm">
                    <li className="footer-nav__item">
                      <a href="index.html">Home</a>
                    </li>
                    <li className="footer-nav__item">
                      <a href="soccer-dark/_soccer_features-shortcodes.html">
                        Features
                      </a>
                    </li>
                    <li className="footer-nav__item">
                      <a href="index.html">Statistics</a>
                    </li>
                    <li className="footer-nav__item">
                      <a href="index.html">The Team</a>
                    </li>
                    <li className="footer-nav__item">
                      <a href="index.html">News</a>
                    </li>
                    <li className="footer-nav__item">
                      <a href="index.html">Shop</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Secondary / End */}
      </footer>
      {/* Footer / End */}
    </div>
  );
}
