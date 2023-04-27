import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import Detail from "./pages/detail";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [account, setAccount] = useState("");
  //모든곳에 쓰이므로 여기서 플옵스 내린다 아니면 개별 곳곳에서 계속 유즈스테이트 해야하므로
  return (
    <BrowserRouter>
      <div className="bg-red-100">
        <Header account={account} setAccount={setAccount} />
        <Routes>
          <Route path="/" element={<Main account={account} />} />
          <Route path="/:tokenId" element={<Detail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
