import React from "react";
import "../../src/views/css/login";
import picture1 from '../../src/views/img/img-13.png';

export default function Login() {
  return (
    <>
    <div>
        <img src={picture1} width='80%' alt="이미지" />
      <button type='submit'>Google을 이용하여 시작하기</button>
      <button type='submit'>회원가입</button>
      <p>계정이 이미 있으신가요?</p>
      </div>
    </>
  );
}
