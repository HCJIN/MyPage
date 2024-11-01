import React from 'react'

const Education = () => {
  return (
    <div>
      <div className='education-div'>
        <div className='education-left'>
          <p>education</p>
        </div>
        <div className='education-right'>
          <div className='education-title'>
            <h4>패스트 캠퍼스</h4>
            <p>2022 - 2023</p>
          </div>
          <p className='education-text' style={{ fontFamily: 'GowunDodum-Regular, sans-serif' }}>
            처음으로 웹개발에 흥미를 가지고 독학을 하게 되었는데 HTML, CSS, Javascript, React에 대해서 학습하였습니다. <br/> 업무에 적용을 시키면서 웹개발에 대한 기초를 쌓게되었습니다.
          </p>
        </div>
      </div>
      <div className='education-div' id='bottom-education'>
        <div className='education-left'>
          <p></p>
        </div>
        <div className='education-right' >
          <div className='education-title'>
            <h4>그린컴퓨터 아카데미</h4>
            <p>2024.05 - 2024.11</p>
          </div>
          <p className='education-text' style={{ fontFamily: 'GowunDodum-Regular, sans-serif' }}>
            웹 개발 분야에 대한 열정으로 KDT 6개월 과정에 참여하게 되었습니다. <br/>이 과정에서 기존 지식을 바탕으로 Java, Spring, MySQL을 학습하며 <br/>프론트엔드와 백엔드에 대한 전문성을 키울 수 있었습니다. 또한,팀 프로젝트를 통해 개발 협업과 소통 능력을 더욱 향상시킬 수 있는 소중한 경험을 쌓았습니다.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Education