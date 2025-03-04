import "./App.css";
import { Routes, Route } from "react-router";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import ProductDetail from "./page/ProductDetail";
import Navbar from "./component/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import PrivateRoute from "./route/PrivateRoute";
/*router setting -> routes,route setting */

// 1. 전체상품페이지, 로그인페이지, 상품상세페이지
// 1-1. 상단 네비게이션바 만들기 (fontawsome)
// 2. 전체 상품페이지에서는 전체상품을 볼수있다 (json-server)
      /*  npm install json-server@0.17.0
          npx json-server --watch db.json --port 5000 */
// 2-2 component product card 만들기
      /*npm install react-bootstrap bootstrap@5.1.3 */
// 3. 로그인버튼을 누르면 로그인 페이지가 나온다
// 3. 상품디테일을 눌렀으나 로그인이 안되있을경우에는 로그인페이지가 먼저 나온다
      /*Private Route 를 사용해 authenticate 값을 props로 받아 true일 경우 productDetail page: false일 경우 Navigate로 redirect 이용해 login page로! */
// 4. 로그인이 되어있을 경우 상품디테일페이지를 볼수 있다.
      /*usePrams 사용해 id 값 가져오기*/
// 5. 로그아웃 버튼을 누르면 로그아웃이 된다.
// 5. 로그아웃이 되면 상품디테일 페이지를 볼수 없다. 다시 로그인페이지가 보인다
// 6. 로그인을 하면 로그아웃이 보이고 로그아웃을하면 로그인이 보인다.
// 7. 상품을 검색할 수 있다.
      /*useSearchPrams 사용하여 검색기능 만들기 */
function App() {
  const [authenticate, setAuthenticate] = useState(false);
  useEffect(() => {
    console.log("authenticate", authenticate);
  }, [authenticate]);
  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
        <Route
          path="/product/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        />
      </Routes>
    </div>
  );
}

export default App;
