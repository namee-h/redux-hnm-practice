import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faBagShopping,
  faBars,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const Navbar = ({ authenticate, setAuthenticate }) => {
  const navList = ["지속가능성", "고객서비스", "뉴스레터", "°°°"];
  const menuList = ["Women", "Men", "Baby", "Kids", "Home", "Sale"];
  const navigate = useNavigate();
  const goToLogin = () => {
    if (authenticate === false) {
      navigate("/login");
    } else if (authenticate === true) {
      setAuthenticate(false);
      navigate("/login");
    }
  };
  const goToHome = () => {
    navigate("/");
  };
  const search = (e) => {
    if (e.key === "Enter") {
      let keyword = e.target.value;
      navigate(`/?q=${keyword}`);
    }
  };

  return (
    <div>
      <div>
        <div className="navbar-area">
          <div className="side-menu">
            <FontAwesomeIcon icon={faBars} />
            <div className="side-list">
              <ul className="">
                {menuList.map((menu) => (
                  <li>{menu}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="nav-list">
            {navList.map((item) => (
              <li>{item}</li>
            ))}
          </div>

          <div className="login-button">
            <FontAwesomeIcon icon={faUser} />
            <div onClick={goToLogin}>
              {authenticate === false ? "로그인" : "로그아웃"}
            </div>
            <FontAwesomeIcon icon={faHeart} />
            <div>즐겨찾기</div>
            <FontAwesomeIcon icon={faBagShopping} />
            <div>쇼핑백 (0)</div>
          </div>
        </div>
      </div>

      <div className="logo-img-section">
        <img
          onClick={goToHome}
          width={100}
          src="https://blog.kakaocdn.net/dn/Yt80C/btqDeJAYUBo/JQbTuukRladq2AUOeqgiEK/img.jpg"
        />
      </div>

      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>

        <div className="search-box">
          <div>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
          <input type="text" placeholder="제품검색" onKeyDown={search} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
