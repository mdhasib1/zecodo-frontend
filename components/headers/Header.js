import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Col, Container, Input, Media, Row } from "reactstrap";
import Resemble from "resemblejs";
import cart from "../../public/assets/images/icon/cart-1.png";
import user from "../../public/assets/images/icon/user-1.png";
import Cart from "../containers/Cart";
import CartContainer from "../containers/CartContainer";
import LogoImage from "./common/logo";
import SearchOverlay from "./common/search-overlay";
import SideBar from "./common/sidebar";

const Header = ({
  logoName,
  headerClass,
  direction,
}) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [inputImage, setInputImage] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  // Add your image database here
  const imageDatabase = [
    {
      id: 1,
      src: "path/to/image1.jpg",
    },
    {
      id: 2,
      src: "path/to/image2.jpg",
    },
    // Add more images as needed
  ];

  const searchImage = async (image) => {
    setIsLoading(true);
    setSearchResults([]);

    const reader = new FileReader();
    reader.onload = async (e) => {
      const url = e.target.result;

      const compareImages = async (inputImage, dbImage) => {
        return new Promise((resolve) => {
          Resemble(inputImage)
            .compareTo(dbImage)
            .onComplete((data) => {
              resolve(data);
            });
        });
      };

      const results = [];
      for (const dbImage of imageDatabase) {
        const data = await compareImages(url, dbImage.src);
        if (data.misMatchPercentage <= 10) {
          results.push({
            ...dbImage,
            misMatchPercentage: data.misMatchPercentage,
          });
        }
      }
      results.sort((a, b) => a.misMatchPercentage - b.misMatchPercentage);
      setSearchResults(results);
      setIsLoading(false);
    };
    reader.readAsDataURL(image);
  };

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setInputImage(file);
    await searchImage(file);
  };

  useEffect(() => {
    setTimeout(function () {
      document.querySelectorAll(".loader-wrapper").style = "display:none";
    }, 2000);

    if (router.asPath !== "/layouts/Christmas")
      window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    let number =
      window.pageXOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (number >= 300) {
      if (window.innerWidth < 581)
        document.getElementById("sticky").classList.remove("fixed");
      else document.getElementById("sticky").classList.add("fixed");
    } else document.getElementById("sticky").classList.remove("fixed");
  };

  const openNav = () => {
    var openmyslide = document.getElementById("mySidenav");
    if (openmyslide) {
      openmyslide.classList.add("open-side");
    }
  };
  const openSearch = () => {
    document.getElementById("search-overlay").style.display = "block";
  };

  // eslint-disable-next-line
  const load = () => {
    setIsLoading(true);
    fetch().then(() => {
      // deal with data fetched
      setIsLoading(false);
    });
  };

  const firebaseLogout = () => {
    localStorage.setItem("user", false);
    router.push("/page/account/login-auth");
  };

  return (
    <div>
      <header id="sticky" className={`sticky ${headerClass}`}>
        <div className="mobile-fix-option"></div>

        <Container>
          <Row>
            <Col>
              <div className="main-menu">
                <div className="menu-left">
                  <div className="navbar">
                    <a href={null} onClick={openNav}>
                      <div className="bar-style">
                        <i
                          className="fa fa-bars sidebar-bar"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </a>
                    {/*SideBar Navigation Component*/}
                    <SideBar />
                  </div>
                  <div className="brand-logo" style={{ width: "120px" }}>
                    <LogoImage logo={logoName} />
                  </div>
                </div>
                <div className="menu-right pull-right">
                  <div>
                    <form className="form_search" role="textbox">
                      <div className="search-wrapper">
                        <Input
                          id="query search-autocomplete"
                          type="search"
                          placeholder="Find the best for your pet..."
                          className="nav-search nav-search-field"
                          aria-expanded="true"
                        />
                        <label
                          htmlFor="image-upload"
                          className="custom-image-upload"
                        >
                      <i class="fa fa-cloud-upload" aria-hidden="true"></i>

                        </label>
                        <Input
                          id="image-upload"
                          type="file"
                          style={{ display: "none" }}
                          accept="image/*"
                          onChange={handleImageChange}
                        />
                      </div>
                    </form>
                  </div>
                </div>
                <div className="menu-right pull-right">
                  {/*Top Navigation Bar Component*/}

                  <div>
                    <div className="icon-nav">
                      <ul>
                        <li className="onhover-dropdown mobile-account">
                          <div>
                            <Media
                              src={user.src}
                              className="img-fluid"
                              alt=""
                              style={{
                                position: "relative",
                                width: "28px",
                                marginTop: "-67px",
                              }}
                            />
                          </div>
                          <ul
                            className="onhover-show-div"
                            style={{ marginTop: "-50px" }}
                          >
                            <li>
                              <Link href={`/page/account/login`}>
                                <a>Login</a>
                              </Link>
                            </li>
                            <li>
                              <Link href={`/page/account/register`}>
                                <a>Register</a>
                              </Link>
                            </li>
                            <li onClick={() => firebaseLogout()}>
                              <a>Logout</a>
                            </li>
                          </ul>
                        </li>
                        {/* <li className="onhover-div mobile-search">
                          <div>
                            <Media
                              src={search.src}
                              onClick={openSearch}
                              className="img-fluid"
                              alt=""
                            />
                            <i
                              className="fa fa-search"
                              onClick={openSearch}
                            ></i>
                          </div>
                        </li> */}
                        {/*Header Cart Component */}
                        {direction === undefined ? (
                          // <></>
                          <CartContainer layout={direction} icon={cart.src} />
                        ) : (
                          <Cart layout={direction} icon={cart.src} />
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </header>

      <SearchOverlay />
    </div>
  );
};

export default Header;
