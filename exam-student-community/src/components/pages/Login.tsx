import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {
  BoardOption,
  BoardOptions,
  LoginForm,
  Wrapper,
} from "../molecules/atoms/styled";
import { useNavigate } from "react-router-dom";
import TopBar from "../molecules/TopBar";
import Dropdown from "../molecules/Dropdown";
import { loginCheck } from "../../api";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { loginState, user, userId } from "../../store/atoms";
import KakaoLogin from "../molecules/KakaoLogin";
import { BoardsObject } from "../molecules/atoms/sampleData";

interface IForm {
  id: string;
  password: string;
}

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);
  const [loginUserId, setLoginUserId] = useRecoilState(userId);
  const [userName, setUserName] = useRecoilState(user);

  async function onSubmit(data: IForm) {
    const response = await loginCheck(data.id, data.password);
    if (response.data.message === "id error") {
      alert("존재하지 않는 아이디입니다.");
      return false;
    } else if (response.data.message === "password error") {
      alert("비밀번호가 틀렸습니다.");
      return false;
    } else {
      setIsLoggedIn(true);
      setLoginUserId(data.id); // 코드 합칠때 주의
      setUserName(response.data.user.name);
      navigate("/");
    }
  }

  return (
    <>
      <TopBar needWrite={false} needSearch={false} />
      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        <label>아이디</label>
        <input
          {...register("id", {
            required: "아이디를 입력해주세요",
          })}
          name="id"
          type="id"
        />
        <span className="errorMessage">{errors?.id?.message}</span>

        <br />
        <label>비밀번호</label>
        <input
          {...register("password", {
            required: "비밀번호를 입력해주세요",
          })}
          type="password"
          name="password"
        />
        <span className="errorMessage">{errors?.password?.message}</span>
        <br />
        <button type="submit">로그인</button>
        <div className="signUpBox">
          <Link
            onClick={() => {
              alert("아직 안됨 ㅈㅅㅈㅅ");
            }}
            to="/login"
          >
            아이디 찾기
          </Link>
          <Link to="/findpassword">비밀번호 찾기</Link>
          <Link to="/register1">회원가입</Link>
        </div>
      </LoginForm>
    </>
  );
}

export default Login;
