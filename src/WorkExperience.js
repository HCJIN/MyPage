import React from 'react'

const WorkExperience = () => {
  return (
    <div>
      <div className='education-div'>
        <div className='education-left'>
          <p>WorkExperience</p>
        </div>
        <div className='education-right'>
          <div className='education-title'>
            <h4>울산넷</h4>
            <p>2019.01 - 2019.06</p>
          </div>
          <p className='education-text' style={{ fontFamily: 'GowunDodum-Regular, sans-serif' }}>
            처음에는 컴퓨터에 관심이 많아 CCTV 설치, 네트워크 설치, 하드웨어 조립 및 수리를 하는 일을 하게 되었습니다. 이 때의 경험으로 컴퓨터에 대한 하드웨어적인 지식을 쌓게 되었습니다.
          </p>
        </div>
      </div>
      <div className='education-div' id='bottom-education'>
        <div className='education-left'>
          <p></p>
        </div>
        <div className='education-right' >
          <div className='education-title'>
            <h4>엘리미디어</h4>
            <p>2019.07 - 2024.05</p>
          </div>
          <p className='education-text' style={{ fontFamily: 'GowunDodum-Regular, sans-serif' }}>
            광고회사를 다니면서 버스 외부 광고 유지보수를 하거나 엘리베이터 모니터에 플랫폼을 통하여 셋톱박스로 동영상, 이미지, HTML등을 쏴주는 작업을 하게 되었습니다. 그 과정에서 기본적인 HTML, CSS, Javascript에 대해서 독학하게 되었고 이 계기로 개발자에 대한 꿈을 키우게 되었습니다.
          </p>
        </div>
      </div>
    </div>
  )
}

export default WorkExperience