import React from 'react'
import introImg from '../src/imgs/90593154.jpg';

const Introduction = () => {
  return (
    <div className='intro-box'>
      <div className='intro-text'>
        <p style={{ fontFamily: 'GowunDodum-Regular, sans-serif' }}>introduction</p><br/>
        <h1 style={{ fontFamily: 'GowunDodum-Regular, sans-serif' }}>황 찬 진</h1><br/>
        <p style={{ fontFamily: 'GowunDodum-Regular, sans-serif' }}>안녕하세요, 개발자 황찬진입니다.<br/><br/>
          저는 업무를 하며 HTML, CSS, JavaScript를 독학하면서 혼자서 모든 과정을 만들어야 했었는데 <br/>한 편으로는 힘들기도 하였지만 직장 생활 중 처음으로 마주한 웹 개발 분야는 단순히 코드를 배우는 것을 넘어, <br/>내가 만든 코드가 화면을 변화시키고, 사용자 경험을 개선하는 것에서 오는 큰 성취감을 느끼게 했습니다. <br/>그 경험은 단순한 흥미를 넘어서 개발자로서의 길을 걷게 한 중요한 전환점이 되었습니다.<br/>

          개발자는 역량도 중요하지만 책임을 가지고 끈기있게 마무리 짓는것도 중요하다고 생각합니다. <br/>저는 ‘믿고 맡길 수 있는 개발자’로 인정받게 성장 할 것입니다.
        </p>
      </div>
      <div className='intro-img'>
        <img src={introImg}></img>
      </div>
    </div>
    )
}

export default Introduction