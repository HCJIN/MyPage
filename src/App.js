import { useEffect, useState } from 'react';
import './App.css';
import './reset.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import introImg from '../src/imgs/90593154.jpg';
import Education from './Education';
import Introduction from './Introduction';
import WorkExperience from './WorkExperience';
import Skill from './Skill';

function App() {
  const navigate = useNavigate();

  // 현재 페이지 상태 
  const [page, setPage] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);

  // 스크롤 이벤트 핸들러
  const handleScroll = (event) => {
    if (event.deltaY > 0) {
      // 스크롤을 아래로 내렸을 때
      setPage((prevPage) => Math.min(prevPage + 1, 1)); // 페이지 최대값 설정
      setFadeIn(false); // 컴포넌트가 사라지는 애니메이션
    } else {
      // 스크롤을 위로 올렸을 때
      setPage((prevPage) => Math.max(prevPage - 1, 0)); // 페이지 최소값 설정
      setFadeIn(false); // 컴포넌트가 사라지는 애니메이션
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', handleScroll);
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (page === 1) {
      setTimeout(() => setFadeIn(true), 1500); // 0.5초 후에 애니메이션 시작
    }
  }, [page]);

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
      <div className={`SecondPage ${page === 1 ? 'active' : ''} ${fadeIn ? 'fade-in-active' : 'fade-in'}`}>
        <div className='header'>
          <div className='header-in-box'>
            <h2>HWANG CHANJIN</h2>
            <div className='menu-div'>
              <ul className='menu-ul'>
                <li onClick={() => { navigate('/introduction'); }}>introduction</li>
                <li onClick={() => { navigate('/education'); }}>education</li>
                <li onClick={()=>{ navigate('/workExperience')}}>work experience</li>
                <li>skill</li>
                <li>project</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 페이지가 1일 때만 Routes 렌더링 */}
      {page === 1 && (
        <Routes>
          <Route path='/introduction' element={<Introduction />} />
          <Route path='/education' element={<Education />} />
          <Route path='/workExperience' element={<WorkExperience/>}/>
          <Route path='/skill' element={<Skill />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
