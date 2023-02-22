import styled from "styled-components";

export const Wrapper = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const BoardOptions = styled.div`
  max-width: 100vw;
  overflow-x: scroll;
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
  &::-webkit-scrollbar {
    display: none;
  }
  background-color: ${({ theme }) => theme.accentColor};
  height: 30px;
  display: flex;
  justify-content: baseline;
  gap: 5%;
  align-items: center;
  padding-left: 5%;
  z-index: 999;
`;

export const BoardOption = styled.p`
  white-space: nowrap;
  pointer-events: auto;
  color: ${({ theme }) => theme.whiteColor};
  font-size: 0.8rem;
  cursor: pointer;
`;

// ------------Login / Mypage------------

export const LoginForm = styled.form`
  margin: 0 auto;
  margin-top: 7vh;
  padding: 50px;
  label {
    display: inline-block;
    margin-bottom: 10px;
    margin-top: 20px;
  }
  input {
    width: 100%;
    padding: 12px 20px;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid ${(props) => props.theme.grayColor};
    border-radius: 4px;
  }
  button {
    margin-top: 20px;
    display: block;
    width: 100%;
    height: 60px;
    background-color: ${(props) => props.theme.whiteColor};
    color: ${(props) => props.theme.accentColor};
    /* padding: 14px 20px; */
    font-size: 20px;
    font-weight: 600;
    border: 1px solid ${(props) => props.theme.accentColor};
    border-radius: 15px;
    cursor: pointer;
  }
  button:hover {
    background-color: ${(props) => props.theme.accentColor};
    color: ${(props) => props.theme.whiteColor};
  }
  .errorMessage {
    display: inline-block;
    margin-top: 5px;
    margin-bottom: 20px;
    color: red;
    font-size: 15px;
    font-weight: 600;
  }
  .signUpBox {
    display: flex;
    padding: 20px 10px;
    justify-content: space-around;
    gap: 10px;
    font-weight: 600;
    color: ${(props) => props.theme.grayColor};
    font-size: 13px;
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    max-width: 600px;
  }
  @media ${({ theme }) => theme.device.desktop} {
    width: 600px;
  }
`;

export const KakaoLoginButton = styled.img`
  width: 100%;
  height: 80px;
  cursor: pointer;
`;

// ------------TopBar------------

export const TopBarContainer = styled.div`
  /* position: fixed;
  top: 0; */
  width: 100%;
  z-index: 999;
`;

export const TopContainer = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.accentColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 7vh;
  padding: 25px 5%;
`;

export const TopBarMenu = styled.div`
  background-color: ${(props) => props.theme.accentColor};
  color: ${(props) => props.theme.whiteColor};
  display: flex;
  align-items: center;
  .iconBar {
    font-size: 27px;
    padding: 5px 5px;
    cursor: pointer;
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 33%;
    justify-content: baseline;
    font-weight: 600;
    padding-left: 5%;
    .backButton {
      font-size: 27px;
      padding: 5px 5px;
      cursor: pointer;
    }
  }
  @media ${({ theme }) => theme.device.desktop} {
    justify-content: end;
    position: absolute;
    right: 5%;
  }
`;

export const TopBarMain = styled.div`
  background-color: ${(props) => props.theme.accentColor};
  color: ${(props) => props.theme.whiteColor};
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1em;
  cursor: pointer;
  @media ${({ theme }) => theme.device.mobile} {
    width: 33%;
  }
`;

export const TopBarBtns = styled.div`
  color: ${(props) => props.theme.whiteColor};
  font-weight: 600;
  display: flex;
  cursor: pointer;
  a {
    cursor: pointer;
    padding: 5px;
    font-size: 0.0001em;
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 33%;
    justify-content: flex-end;
    align-items: center;
  }
  @media ${({ theme }) => theme.device.desktop} {
    margin-right: 10%;
  }
`;

// ------------SearchBar------------
export interface SearchProps {
  placeholder: string;
}

export const SearchForm = styled.form`
  @media ${({ theme }) => theme.device.mobile} {
    position: relative;
    background-color: ${(props) => props.theme.accentColor};
    width: 100%;
    height: 8vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media ${({ theme }) => theme.device.desktop} {
    position: absolute;
    top: 8px;
    left: 20%;
    width: 50%;
  }
`;

export const SearchBox = styled.div`
  position: relative;
  background-color: white;
  height: 60%;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${({ theme }) => theme.device.mobile} {
    width: 88%;
  }
  @media ${({ theme }) => theme.device.desktop} {
    width: 100%;
  }
`;

export const SearchSelection = styled.select`
  height: 100%;
  padding: 3px;
  border-radius: 5px 0px 0px 5px;
  font-size: 12px;
  border: none;
  color: ${(props) => props.theme.accentColor};
  :focus {
    border: none;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
  :active {
    border: none;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  /* placeholder: ${(props) => props.placeholder}; */
  padding: 10px;
  border-radius: 0px 5px 5px 0px;
  border: none;
`;

export const Searchbutton = styled.button`
  position: absolute;
  right: 3%;
  font-size: 20px;
  font-weight: 600;
  background-color: transparent;
  border: none;
  color: ${(props) => props.theme.grayColor};
  display: flex;
  align-items: center;
  cursor: pointer;
  :hover {
    color: ${(props) => props.theme.accentColor};
  }
`;

// ------------DropBox------------

export const DropdownBox = styled.div`
  position: absolute;
  width: 100%;
  ul {
    z-index: 10;
    background-color: ${({ theme }) => theme.whiteColor};
    width: 99.5%;
    margin: auto;
    padding: 30px;
    padding-top: 40px;
  }
  @keyframes slide-fade-in-dropdown-animation {
    0% {
      transform: translateY(0%);
      opacity: 0;
      pointer-events: none;
    }
    100% {
      opacity: 1;
      transform: translateY(16px);
    }
  }
  @keyframes slide-fade-out-dropdown-animation {
    0% {
      transform: translateY(16px);
    }
    100% {
      transform: translateY(13px);
      opacity: 0;
      pointer-events: none;
    }
  }
  .slide-fade-in-dropdown {
    animation: slide-fade-in-dropdown-animation 0.4s ease;
    animation-fill-mode: forwards;
    /* box-shadow: 0px 0px 10px ${(props) => props.theme.grayColor}; */
  }
  .slide-fade-out-dropdown {
    animation: slide-fade-out-dropdown-animation 0.4s ease;
    animation-fill-mode: forwards;
  }
  .title {
    width: 95%;
    max-width: 700px;
    font-size: 20px;
    font-weight: 600;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    gap: 10px;
    margin: 0 auto;
  }
  @media ${({ theme }) => theme.device.mobile} {
    top: 8%;
  }
  @media ${({ theme }) => theme.device.desktop} {
    top: 8%;
  }
`;

export const Menu = styled.li`
  width: 95%;
  max-width: 700px;
  box-shadow: 0px 0px 10px ${(props) => props.theme.grayColor};
  border: none;
  border-radius: 10px;
  padding: 15px;
  margin: 20px auto;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 10px ${(props) => props.theme.accentColor};
    transform: translateY(-2px);
    color: ${(props) => props.theme.accentColor};
  }
`;

// ------------Loading------------

export const LoadingBox = styled.div`
  height: 100%;
  width: 100%;
  z-index: 999;
  position: absolute;
  top: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  transform: translateY(-50%);
  span {
    font-size: 30px;
    color: ${(props) => props.theme.accentColor};
    font-weight: 600;
  }
  img {
    width: 100px;
    height: 100px;
  }
`;

// ------------Boards------------

export const BoardsList = styled.ul`
  padding: 10px;
  z-index: 10;
  margin-top: 15vh;

  padding-bottom: 10vh;

  &::-webkit-scrollbar {
    display: none;
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    height: 85vh;
  }
  @media ${({ theme }) => theme.device.desktop} {
    display: grid;
    width: 100%;
    min-height: 50vh;
    grid-template-columns: 1fr 1fr 1fr;
    place-items: center;
    gap: 3%;
  }
`;

export const Board = styled.div`
  width: 100%;
  box-shadow: 0px 0px 10px ${(props) => props.theme.grayColor};
  font-size: 20px;
  padding: 20px 0px;
  margin-bottom: 20px;
  a {
    width: 100%;
    height: 100%;
  }
  .title_row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;
    margin-bottom: 20px;
    .title {
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .total_num {
      font-size: 12px;
      font-weight: 600;
      color: ${(props) => props.theme.grayColor};
    }
  }
  @media ${({ theme }) => theme.device.mobile} {
  }
  @media ${({ theme }) => theme.device.desktop} {
    height: 250px;
    max-width: 400px;
    a {
      width: 100%;
      height: 100%;
    }
  }
`;

export const BoardPost = styled.li`
  border-bottom: 1px solid black;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  font-size: 15px;
  font-weight: 600;
  @media ${({ theme }) => theme.device.mobile} {
  }
  @media ${({ theme }) => theme.device.desktop} {
  }
`;

// ------------Posts & PostsLists------------

export const BoardName = styled.div`
  @media ${({ theme }) => theme.device.mobile} {
    color: ${({ theme }) => theme.accentColor};
    margin: 5% auto;
    font-size: 25px;
    font-weight: 600;
    padding-left: 20px;
  }
  @media ${({ theme }) => theme.device.desktop} {
    color: ${({ theme }) => theme.accentColor};
    margin: 2% auto;

    width: 80%;
    font-size: 35px;
    font-weight: 600;
  }
`;

export const PostsContainer = styled.ul`
  &::-webkit-scrollbar {
    display: none;
  }
  @media ${({ theme }) => theme.device.mobile} {
    margin-top: 20px;
    width: 100%;
    height: 85vh;
    list-style: none;
  }
  @media ${({ theme }) => theme.device.desktop} {
    margin: 20px auto;
    width: 80%;
    height: 85vh;
    list-style: none;
    border-top: 3px solid ${({ theme }) => theme.accentColor};
  }
`;

export const Post = styled.li`
  @media ${({ theme }) => theme.device.mobile} {
    a {
      padding: 5px 3px;
      color: ${(props) => props.theme.blackColor};
      border-top: 1px solid #aaa;
      border-bottom: 1px solid #aaa;
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: center;
      transition: color 0.2s ease-in;
    }
    &:hover {
      a {
        color: ${(props) => props.theme.accentColor};
      }
    }
  }
  @media ${({ theme }) => theme.device.desktop} {
    a {
      padding: 15px 10px;
      color: ${(props) => props.theme.blackColor};
      border-top: 1px solid #aaa;
      border-bottom: 1px solid #aaa;
      display: flex;
      align-items: center;
      justify-content: space-between;
      transition: color 0.2s ease-in;
    }
    &:hover {
      a {
        color: ${(props) => props.theme.accentColor};
      }
    }
  }
`;

export const PostTitle = styled.h3`
  @media ${({ theme }) => theme.device.mobile} {
    padding: 3px 0px;
    display: block;
    width: 100%;
    font-weight: bold;
    font-size: 18px;
  }
  @media ${({ theme }) => theme.device.desktop} {
    padding: 3px 0px;
    display: block;
    width: 50%;
    font-weight: bold;
    font-size: 20px;
  }
`;

export const PostInfo = styled.div`
  @media ${({ theme }) => theme.device.mobile} {
    display: flex;
    justify-content: start;
    gap: 10px;
    align-items: center;
    width: 100%;
    padding: 3px 0px;
    font-size: 13px;
    font-weight: 600;
    color: ${(props) => props.theme.grayColor};
  }
  @media ${({ theme }) => theme.device.desktop} {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    align-items: center;
    width: 50%;
    padding: 3px 0px;
    font-size: 15px;
    font-weight: 600;
    color: ${(props) => props.theme.grayColor};
  }
`;

// ------------Post------------

// PostMainContents
export const PostMain = styled.div`
  height: calc(var(--vh, 1vh) * 100);
  &::-webkit-scrollbar {
    display: none;
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    margin-top: 1vh;
    height: 85vh;
    padding: 10px;
  }
  @media ${({ theme }) => theme.device.desktop} {
    width: 80%;
    height: 85vh;
    margin: 3vh auto;

    display: flex;
    flex-direction: column;
  }
`;

export const PostMenuBar = styled.ul`
  z-index: 120;
  position: absolute;
  top: 70vh;
  width: 100%;
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f7f7f7;
  box-shadow: 0px 0px 10px ${(props) => props.theme.grayColor};
`;

export const PostMenuBtn = styled.li`
  width: 80%;
  height: 6vh;
  box-shadow: 0px 0px 10px ${(props) => props.theme.grayColor};
  margin: 10px;
  border: none;
  border-radius: 10px;
  padding: 15px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 10px ${(props) => props.theme.accentColor};
    transform: translateY(-2px);
    color: ${(props) => props.theme.accentColor};
  }
`;
// PostMainContents

export const PostMainContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export interface UserProps {
  height: string;
}

export const UpdateDeleteBox = styled.div`
  position: absolute;
  right: 8%;
  display: flex;
  button {
    font-size: 15px;
    font-weight: 600;
    background-color: transparent;
    color: ${({ theme }) => theme.accentColor};
    border: none;
    cursor: pointer;
  }
`;

export const PostMoreBtn = styled.div`
  position: absolute;
  right: 0;
  color: ${(props) => props.theme.accentColor};
  font-size: 20px;
  font-weight: 600;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  cursor: pointer;
  a {
    cursor: pointer;
    padding: 5px;
    font-size: 0.0001em;
  }
  @media ${({ theme }) => theme.device.mobile} {
  }
  @media ${({ theme }) => theme.device.desktop} {
  }
`;

export const User = styled.div<UserProps>`
  position: relative;
  @media ${({ theme }) => theme.device.mobile} {
    display: flex;
    justify-content: start;
    align-items: center;
    height: ${(props) => props.height};
    width: 100%;
    .userIcon {
      width: 50px;
      font-size: 30px;
    }
  }
  @media ${({ theme }) => theme.device.desktop} {
    display: flex;
    justify-content: start;
    align-items: center;
    height: ${(props) => props.height};
    width: 100%;
    .userIcon {
      width: 70px;
      font-size: 40px;
    }
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3px;
  @media ${({ theme }) => theme.device.desktop} {
    font-size: 22px;
  }
`;

export const Writer = styled.h3`
  font-size: 20px;
  @media ${({ theme }) => theme.device.desktop} {
    font-size: 25px;
  }
`;

export const Details = styled.p`
  color: #aaa;
  font-weight: 600;
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 12px;
  }
  @media ${({ theme }) => theme.device.desktop} {
    font-size: 15px;
  }
`;

export const Content = styled.div`
  @media ${({ theme }) => theme.device.mobile} {
    min-height: 25vh;
    padding: 20px 10px;
  }
  @media ${({ theme }) => theme.device.desktop} {
    min-height: 25vh;
    padding: 20px 10px;
  }
`;
export const Content_Title = styled.pre`
  white-space: pre-wrap;
  word-break: break-all;

  @media ${({ theme }) => theme.device.mobile} {
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 25px;
  }
  @media ${({ theme }) => theme.device.desktop} {
    margin: 30px 0;
    font-weight: bold;
    font-size: 35px;
  }
`;

export const Content_Content = styled.pre`
  line-height: 1.35;
  white-space: pre-wrap;
  word-break: break-all;

  @media ${({ theme }) => theme.device.mobile} {
    margin-bottom: 20px;
    font-size: 20px;
  }
  @media ${({ theme }) => theme.device.desktop} {
    margin: 20px 0;
    font-size: 20px;
  }
`;

export const ContentInfo = styled.div`
  @media ${({ theme }) => theme.device.mobile} {
    font-weight: lighter;
    font-size: 10px;
    color: #aaa;
  }
  @media ${({ theme }) => theme.device.desktop} {
    font-weight: lighter;
    color: #aaa;
  }
`;

export const ContentBtns = styled.div`
  @media ${({ theme }) => theme.device.mobile} {
    margin: 10px 0px;
    height: 5vh;
    display: flex;
    justify-content: start;
    gap: 1vw;
  }
  @media ${({ theme }) => theme.device.desktop} {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
`;

export const ContentBtn = styled.div`
  display: flex;
  color: black;
  align-items: center;
  cursor: pointer;
  @media ${({ theme }) => theme.device.mobile} {
    height: 100%;
    span {
      font-size: 12px;
      font-weight: bold;
    }
    .icon {
      width: 50%;
      height: 100%;
      cursor: pointer;
    }
  }
  @media ${({ theme }) => theme.device.desktop} {
    width: 9%;
    .icon {
      width: 50%;
      height: 80%;
      cursor: pointer;
    }
    span {
      display: inline-block;
      width: 50%;
      font-size: 12px;
      font-weight: bold;
    }
  }
`;

// Comments

export const CommentsList = styled.ul`
  @media ${({ theme }) => theme.device.mobile} {
    margin: 10px 0;
    list-style: none;
  }
  @media ${({ theme }) => theme.device.desktop} {
    margin: 15px 0;
    list-style: none;
  }
`;

export const Comment = styled.li`
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid #aaa;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CommenterBox = styled.div`
  display: flex;
  justify-content: start;
  height: 3vh;
  align-items: center;
  gap: 5px;
  .iconUser {
    font-size: 20px;
  }
`;

export const CommenterName = styled.p`
  font-size: 15px;
  font-weight: bold;
`;

export const CommentTime = styled.p`
  font-weight: bold;
  color: ${(props) => props.theme.grayColor};
  text-align: center;
  margin-left: 5px;
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 12px;
  }
  @media ${({ theme }) => theme.device.desktop} {
    font-size: 15px;
  }
`;

export const CommentContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;

  @media ${({ theme }) => theme.device.mobile} {
    p {
      font-size: 15px;
    }
  }
  @media ${({ theme }) => theme.device.desktop} {
    p {
      font-size: 18px;
    }
  }
`;

export const CommentButtons = styled.div`
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 20px;
    cursor: pointer;
  }
  @media ${({ theme }) => theme.device.desktop} {
    font-size: 25px;
    cursor: pointer;
    margin-right: 4%;
  }
`;

// CommentsForm
export const CommentForm = styled.form`
  position: relative;
  button {
    position: absolute;
    top: 3px;
    right: 0.5%;
  }
`;

export const CommentInput = styled.input`
  display: block;
  border: 1px solid black;
  border-radius: 20px;
  padding: 20px;
  resize: none;
  width: 100%;
  height: 50px;
`;
export const CommentInputBox = styled.div`
  padding: 20px 10px;
`;

export const CommentButton = styled.button`
  height: 100%;
  width: 10%;
  font-size: 30px;
  color: ${(props) => props.theme.accentColor};
  background-color: transparent;
  border: none;
  cursor: pointer;
  @media ${({ theme }) => theme.device.mobile} {
  }
  @media ${({ theme }) => theme.device.desktop} {
  }
`;

// ------------Write------------
interface WriteFormProps {
  height: string;
}
export const WriteForm = styled.form<WriteFormProps>`
  @media ${({ theme }) => theme.device.mobile} {
    position: absolute;
    top: 7vh;
    height: ${(props) => props.height};
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  @media ${({ theme }) => theme.device.desktop} {
    margin: 15vh auto;
    width: 50%;
    height: 85vh;
  }
`;

export const WriteSelectorContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 7%;
  width: 100%;
  @media ${({ theme }) => theme.device.mobile} {
  }
  @media ${({ theme }) => theme.device.desktop} {
  }
`;

export const WriteSelector = styled.select`
  display: block;
  width: 60%;
  height: 60%;
  border-radius: 5px;
  border: 1px solid #aaa;
  @media ${({ theme }) => theme.device.mobile} {
  }
  @media ${({ theme }) => theme.device.desktop} {
  }
`;

export const TitleInput = styled.input`
  margin-top: 20px;
  padding: 10px 20px;
  display: block;
  height: 7%;
  width: 100%;
  font-size: 25px;
  border: none;
  border-bottom: 1px solid #aaa;
  @media ${({ theme }) => theme.device.mobile} {
    &:focus {
      outline: none;
    }
  }
  @media ${({ theme }) => theme.device.desktop} {
  }
`;

export const ContentInput = styled.textarea`
  padding: 10px;
  font-size: 18px;
  display: block;
  width: 100%;
  height: 50%;
  border: none;
  resize: none;
  line-height: 1.7rem;
  &:focus {
    outline: none;
  }
  @media ${({ theme }) => theme.device.mobile} {
  }
  @media ${({ theme }) => theme.device.desktop} {
  }
`;

export const ErrorMessage = styled.span`
  display: block;
  margin-top: 5px;
  margin-bottom: 5px;
  color: red;
  font-size: 15px;
  font-weight: 600;
  width: 90%;
  padding: 0px 20px;
  @media ${({ theme }) => theme.device.mobile} {
  }
  @media ${({ theme }) => theme.device.desktop} {
  }
`;

export const WriteSubmitContainer = styled.div`
  height: 15%;
  display: flex;
  justify-content: center;
  @media ${({ theme }) => theme.device.mobile} {
  }
  @media ${({ theme }) => theme.device.desktop} {
  }
`;
export const Submit = styled.button`
  background: ${(props) => props.theme.accentColor};
  color: white;
  height: 60%;
  width: 80%;
  border: none;
  font-size: 30px;
  cursor: pointer;
  @media ${({ theme }) => theme.device.mobile} {
    background: ${(props) => props.theme.accentColor};
    color: white;
    height: 60%;
    width: 80%;
    border: none;
    font-size: 30px;
    cursor: pointer;
  }
  @media ${({ theme }) => theme.device.desktop} {
  }
`;

// ------------Register------------

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
  padding: 5px;
  margin-bottom: 100px;
  h1 {
    font-size: 20px;
  }
  /* button {
    background-color: #fff;
    border: none;
    cursor: pointer;
    font-size: 15px;
    &:hover {
      color: ${(props) => props.theme.accentColor};
    } */
  @media ${({ theme }) => theme.device.mobile} {
  }
  @media ${({ theme }) => theme.device.desktop} {
  }
`;

export const RegisterForm = styled.form`
  margin: 0 auto;
  width: 80%;
  min-width: 375px;
`;

export const RegisterButton = styled.button`
  background-color: gray;
  color: white;
  border: none;
  /* width: 100%; */
  width: 100%;
  font-size: 20px;
  padding: 5px;
  &.active {
    background-color: #5928e5;
    cursor: pointer;
  }
  margin: 0 auto;
  @media ${({ theme }) => theme.device.mobile} {
  }
  @media ${({ theme }) => theme.device.desktop} {
  }
`;

export const GenderCheckBtn = styled.button`
  color: black;
  width: 100px;
  height: 100px;
  border-radius: 10px;
  border: none;
  &:hover {
    background-color: #5928e5;
    color: white;
    cursor: pointer;
  }
  &.on {
    background-color: #5928e5;
    color: white;
  }
  @media ${({ theme }) => theme.device.mobile} {
  }
  @media ${({ theme }) => theme.device.desktop} {
  }
`;

export const InputBox = styled.div<InputBoxProps>`
  padding: 10px;
  input {
    margin-top: 10px;
    width: ${(props) => (props.short ? "70%" : "100%")};
    padding: 7px;

    &:focus {
      border-color: #5928e5;
      outline: none;
    }
  }
  label {
    color: gray;
    font-weight: 700;
  }
  @media ${({ theme }) => theme.device.mobile} {
  }
  @media ${({ theme }) => theme.device.desktop} {
  }
`;

interface InputBoxProps {
  short?: boolean;
}

export const RegisterBackBtn = styled.button`
  background-color: white;
  color: #5928e5;
  border: #5928e5 1px solid;
  border-radius: 5px;
  cursor: pointer;
  font-size: 17px;
`;

export const RegisterContainer = styled.div`
  max-width: 800px;
  height: 100vh;
  margin: 0 auto;
  border: 1px #5928e5 solid;
  padding: 10px;
`;

// ------------Divide------------
// ------------Divide------------

export const ProfilePic = styled.div`
  @media ${({ theme }) => theme.device.mobile} {
    height: 6vh;
    width: 6vh;
    background: blue;
    margin-right: 10px;
  }
  @media ${({ theme }) => theme.device.desktop} {
  }
`;

export const ContentButtons = styled.div`
  @media ${({ theme }) => theme.device.mobile} {
  }
  @media ${({ theme }) => theme.device.desktop} {
  }
`;

export const MainContents = styled.div`
  @media ${({ theme }) => theme.device.mobile} {
    min-height: 30vh;
    padding: 5%;
    width: 100%;
    margin: 10px auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 2px solid #aaa;
  }
  @media ${({ theme }) => theme.device.desktop} {
  }
`;

export const FindPwBox = styled.div`
  margin: 0 auto;
  margin-top: 7vh;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  gap: 5vh;
  p {
    font-size: 1.5rem;
  }
  span {
    cursor: pointer;
    text-decoration: underline;
    font-weight: 600;
    color: ${({ theme }) => theme.grayColor};
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    max-width: 600px;
  }
  @media ${({ theme }) => theme.device.desktop} {
    width: 600px;
  }
`;

// ------------Footer------------

export const FooterContainer = styled.div`
  font-size: 0.8em;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  padding: 15px;
  gap: 5px;
  p {
    font-weight: 700;
  }
  a {
    font-weight: 200;
    text-decoration: underline;
  }
  @media ${({ theme }) => theme.device.mobile} {
  }

  @media ${({ theme }) => theme.device.desktop} {
  }
`;

// ------------Timer------------

export interface ITimerProps {
  isActive: boolean;
}

export const Timer_container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: Arial, sans-serif;
  gap: 5vh;
`;

export const Timer_time_container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Timer_time = styled.div`
  font-size: 72px;
  color: #333;
  text-shadow: 1px 1px #ddd;
`;

export const Timer_label = styled.div`
  font-size: 18px;
  color: #555;
  margin-top: 20px;
  text-shadow: 1px 1px #ddd;
`;

export const Timer_buttons = styled.div`
  display: flex;
  gap: 10px;
`;

export const Timer_button = styled.button<ITimerProps>`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.accentColor};
  color: ${(props) => (props.isActive ? "white" : "white")};
  pointer-events: ${(props) => (props.isActive ? "pointer" : "none")};
  background-color: ${(props) =>
    props.isActive ? props.theme.accentColor : props.theme.grayColor};
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  :hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);
  }
  :active {
    transform: translateY(2px);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
`;

export const Timer_user = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  .title {
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

export const Timer_guide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  gap: 10px;
`;

// ------------My Profile------------

export const ProfileContainer = styled.div`
  @media ${({ theme }) => theme.device.mobile} {
    margin-top: 15vh;
  }
  @media ${({ theme }) => theme.device.desktop} {
    margin-top: 7vh;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: #f2f2f2;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1); */
  border-radius: 10px;
  padding: 50px;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const ProfilePhoto = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  border: 5px solid #fff;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
`;

export const Name = styled.h1`
  font-size: 36px;
  color: #333;
  margin-top: 10px;
  margin-bottom: 30px;
`;

export const Bio = styled.div`
  font-size: 18px;
  color: #333;
  margin-top: 10px;
  width: 100%;
  text-align: left;
`;

export const Email = styled.div`
  font-size: 18px;
  color: #333;
  margin-top: 10px;
  width: 100%;
  text-align: left;
`;
export const Gender = styled.div`
  font-size: 18px;
  color: #333;
  margin-top: 10px;
  width: 100%;
  text-align: left;
`;
export const Age = styled.div`
  font-size: 18px;
  color: #333;
  margin-top: 10px;
  width: 100%;
  text-align: left;
`;

export const SmallButton = styled.button`
  margin-top: 20px;
  display: flex;
  text-align: center;
  justify-content: center;
  padding: 1rem 1.5rem;
  background-color: ${(props) => props.theme.accentColor};
  color: ${(props) => props.theme.whiteColor};
  font-size: 1rem;
  border: 1px solid ${(props) => props.theme.accentColor};
  border-radius: 0.5rem;
  cursor: pointer;
  :hover {
    background-color: ${(props) => props.theme.whiteColor};
    color: ${(props) => props.theme.accentColor};
  }
`;
