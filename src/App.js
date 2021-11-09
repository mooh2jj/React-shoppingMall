/* eslint-disable */

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import House from './components/House'

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']); 
  // 왜 굳이 state 데이터를 쓰느가?
  // state는 변경되면 HTML이 자동으로 재런더링되기 때문
  // 그냥 변수면 새로고침해야 됨!

  let [따봉, 따봉변경] = useState(0);
  // state 변경함수로 변경해야 재랜더링이 된다!

  let posts = "강남 고기 맛집";

  const [modal, setModal] = useState(false)

  function f1(){
    return 100;
  }

  const house = [
    {
      title: '여자코트 추천',
      year: '2021.01'
    },
    {
      title: '강남 우동 맛집',
      year: '2021.02'
    },
    {
      title: '파이썬 독학',
      year: '2021.03'
    }
  ]

  const renderHouse = house.map(h => {
    return (
      <div>
        <House house={h} key={h.title}/>
        <hr />
      </div>
    )
  })

  let [글자, 글자변경] = useState();

  function btnF(){
    // var newChar = 글제목 // 권장사항 아님! 복사가 x 값 공유임! 복사본 만들어서 수정
    var newChar = [...글제목];  // spread 연산자 state는 직접 건들지 x => deep copy하라!    
    newChar[0] = '여자 코트 추천';
    글제목변경(newChar);
  }
  // state 는 그냥 변경이 안된다! 변경함수로 변경해야 한다!
  return (
    <div className="App">
        <div className="black-nav">
          <div className={ posts }>개발 Blog</div>
          <button onClick={btnF}>버튼</button>
          <div style={{ color:'blue', fontSize : '30px' }}>개발 Blog</div>
        </div>
        <div className="list">
          <h4>{ 글제목[0] } <span onClick={ ()=>{ 따봉변경(따봉++)}}>😢</span> {따봉} </h4>  
          <h4>2021.01 발행</h4>
          <hr/>
        </div>
        <div className="list">
          <h4>{ 글제목[1] }</h4>
          <h4>2021.02 발행</h4>
          <hr/>
        </div>
        <div className="list">
          <h4>{ 글제목[2] }</h4>
          <h4>2021.03 발행</h4>
          <hr/>
        </div>
        <button onClick={() => { setModal(!modal)}}>open</button>
        {
          modal === true ? <Modal /> : null
        }
        
    </div>
  );
}

function Modal(){
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
