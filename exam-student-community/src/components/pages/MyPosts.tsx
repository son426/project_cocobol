import TopBar from "../molecules/TopBar";
import PostsList from "../molecules/PostsList";
import { IconBackBtn, IconBar, IconMoreBtn } from "../molecules/atoms/icons";
import {
  BoardName,
  BoardOption,
  BoardOptions,
  TopBarBtns,
  TopBarContainer,
  TopBarMain,
  TopBarMenu,
  TopContainer,
  Wrapper,
} from "../molecules/atoms/styled";
import { Link } from "react-router-dom";
import SearchBar from "../molecules/SearchBar";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { getMyPosts, SERVER_URL } from "../../api";
import { BoardsObject } from "../molecules/atoms/sampleData";
import { useRecoilState } from "recoil";
import { loginState } from "../../store/atoms";
// import { getMyPost } from "../../api";

function MyPosts() {
  const [postsData, setPostsData] = useState<any | null>();
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);
  const navigate = useNavigate();

  useEffect(() => {
    const paintMyPosts = async () => {
      // const response = await getMyPosts();
      // setPostsData(response.data);

      const response = await axios({
        method: "get",
        url: `${SERVER_URL}/apis/posts/my`,
      });
      console.log("Response :", response);
      return response;
    };
    paintMyPosts();
  }, []);
  return (
    <Wrapper>
      <TopBar needSearch={true} needWrite={true} />
      <BoardOptions>
        {Object.keys(BoardsObject).map((key, index) => (
          <Link
            key={key}
            to="/posts"
            state={{
              boardId: parseInt(key),
              boardName: BoardsObject[key],
            }}
          >
            <BoardOption>{BoardsObject[key]}</BoardOption>
          </Link>
        ))}
      </BoardOptions>
      <BoardName>내가 쓴 글</BoardName>
      <PostsList id={undefined} name={undefined} postsData={postsData} />
    </Wrapper>
  );
}
export default MyPosts;
