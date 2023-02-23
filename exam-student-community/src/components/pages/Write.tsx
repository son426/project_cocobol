import { useState, useEffect, useRef } from "react";
import TopBar from "../molecules/TopBar";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import Select from "react-select";

import {
  ErrorMessage,
  WriteForm,
  WriteSelectorContainer,
  WriteSubmitContainer,
} from "../molecules/atoms/styled";
import { getBoards, writePost } from "../../api";
import { authCheck } from "../../api";
import {
  WriteSelector,
  TitleInput,
  ContentInput,
  Submit,
} from "../molecules/atoms/styled";
import { PostsList, BoardsObject } from "../molecules/atoms/sampleData";
import { loginState, user } from "../../store/atoms";
import Loading from "../molecules/Loading";
import { keyframes } from "styled-components";
interface IWriteForm {
  PostTitle: string;
  PostContent: string;
}

interface IWriteState {
  state: { id: number };
}
function Write() {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);
  const [userName, setUserName] = useRecoilState(user);
  const [isLoading, setIsLoading] = useState(true);
  const [writeState, setWriteState] = useState<{ id: number }>();
  const { state } = useLocation() as IWriteState;
  const navigate = useNavigate();

  let authStatus: boolean;
  let authName: string;

  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);

  //resize
  window.addEventListener("resize", () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    console.log("vh :", vh);
  });

  useEffect(() => {
    authCheck()
      .then((data) => {
        authStatus = data["isAuthenticated"];
        authName = data["username"];
        setIsLoggedIn(authStatus);
        setUserName(authName);
        setIsLoading(false);
      })
      .then(() => {
        if (authStatus) {
          setWriteState(state);
        } else {
          alert("로그인하셔야 글쓰기를 할 수 있습니다.");
          navigate("/login");
        }
      });

    // const checkUserAuth = async () => {
    //   const authData = await authCheck();
    //   const authStatus = authData["isAuthenticated"];
    //   const authName = authData["username"];
    //   setIsLoggedIn(authStatus);
    //   setUserName(authName);
    //   setIsLoading(false);

    //   if (authStatus) {
    //     setWriteState(state);
    //     console.log("!!");
    //   } else {
    //     alert("로그인하셔야 글쓰기를 할 수 있습니다.");
    //     navigate("/login");
    //   }
    // };

    // checkUserAuth();
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    watch,
  } = useForm<IWriteForm>();

  const [boardId, setBoardId] = useState<any>();
  const onSelect = (e: any) => {
    setBoardId(e.value);
  };

  function onSubmit(data: IWriteForm) {
    if (boardId === undefined) {
      alert("게시판을 선택해주세요");
      return false;
    }
    if (boardId === "5") {
      alert("공부시간 인증은, 직접 작성이 불가능합니다.");
      return navigate("/timer");
    }
    const write = async () => {
      await writePost(userName, boardId, data.PostTitle, data.PostContent);
    };
    write();
    navigate(`/posts/${boardId}`);
  }

  //selector
  let options = Object.keys(BoardsObject).map((item, index) => {
    return { value: item, label: BoardsObject[item] };
  });
  const customStyles = {
    option: (defaultStyles: any, state: any) => ({
      ...defaultStyles,
      color: state.isSelected ? "white" : "#5928E5",
      backgroundColor: state.isSelected ? "#5928E5" : "white",
    }),

    control: (defaultStyles: any) => ({
      ...defaultStyles,
      backgroundColor: "white",
      padding: "10px",
      border: "1px solid #eee",
      boxShadow: "none",
    }),
    singleValue: (defaultStyles: any) => ({ ...defaultStyles, color: "#111" }),
  };

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <TopBar needWrite={false} needSearch={false} />
      <WriteForm
        onSubmit={handleSubmit(onSubmit)}
        height={`calc(55vh - ${window.innerHeight - window.outerHeight}px)`}
      >
        <Select
          options={options}
          onChange={onSelect}
          placeholder={"게시판을 선택하십시오."}
          styles={customStyles}
        />
        <TitleInput
          placeholder="제목"
          {...register("PostTitle", {
            required: "제목을 입력하세요",
            maxLength: {
              value: 22000,
              message: "글자수가 너무 많습니다.",
            },
          })}
        />
        {errors ? (
          <ErrorMessage>{errors?.PostTitle?.message}</ErrorMessage>
        ) : null}
        <ContentInput
          placeholder="내용을 입력하세요."
          {...register("PostContent", {
            required: "내용을 입력하세요",
            maxLength: {
              value: 22000,
              message: "글자수가 너무 많습니다.",
            },
          })}
        />
        {errors ? (
          <ErrorMessage>{errors?.PostContent?.message}</ErrorMessage>
        ) : null}
        <WriteSubmitContainer>
          <Submit>작성 완료</Submit>
        </WriteSubmitContainer>
      </WriteForm>
    </>
  );
}

export default Write;
