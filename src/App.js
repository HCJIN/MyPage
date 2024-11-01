import { useEffect, useState } from 'react';
import './App.css';
import './reset.css';
import { Route, Routes } from 'react-router-dom';

function App() {

  //현재 페이지 상태 
  const [page, setPage] = useState(0);

  //스크롤 이벤트 핸들러
  const handleScroll = (event) => {
    if (event.deltaY > 0) {
      //스크롤을 아래로 내렸을 때
      setPage((prevPage) => Math.min(prevPage + 1, 1))//페이지 최대값 설정
    } else {
      //스크롤을 위로 올렸을 때
      setPage((prevPage) => Math.max(prevPage -1, 0));//페이지 최소값 설정
    }
  }

  //컴포넌트가 마운트될 때 스크롤 이벤트 리스너 등록
  useEffect(()=>{
    window.addEventListener('wheel', handleScroll);
    return () => {
      window.removeEventListener('wheel',handleScroll);
    }
  },[])
  
  return (
    <div className="App">
      {/* 페이지에 따라 보여줄 콘텐츠 */}
      <div className={`Mainpage ${page === 0 ? 'active' : ''}`}>
        <div className='main-box'>
          <div className='main-box-left'>
            <p>CHANJIN</p>
            <p>HWANG</p>
          </div>
          <div className='main-box-right'>
            <p>MyPage</p>
          </div>
        </div>
        {/* 스크롤 박스 */}
        <div className='scroll-box'>
          <div className="mouse-icon">
            <div className="mouse-wheel"></div>
          </div>
          <p className="scroll-hint">Scroll down</p>
        </div>
      </div>

      {/* 두 번째 페이지 콘텐츠 */}
      <div className={`SecondPage ${page === 1 ? 'active' : ''}`}>
        <h2>Welcome to the Second Page</h2>
        <p>This is the second page content.</p>
      </div>

      <Routes>
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;
