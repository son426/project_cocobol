import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { loginState, postOptionState, user } from "../../store/atoms";
import {
  authCheck,
  writeComment,
  getPost,
  deletePost,
  getLikes,
} from "../../api";
import { useForm } from "react-hook-form";
import { IconSend } from "../molecules/atoms/icons";
import PostMainContents from "../molecules/PostMainContents";
import Comments from "../molecules/Comments";
import {
  BoardOption,
  BoardOptions,
  PostMain,
  PostMoreBtn,
  Wrapper,
} from "../molecules/atoms/styled";
import {
  CommentForm,
  CommentInput,
  CommentButton,
} from "../molecules/atoms/styled";
import Loading from "../molecules/Loading";
import SearchBar from "../molecules/SearchBar";
import {
  TopBarContainer,
  TopContainer,
  TopBarMenu,
  TopBarMain,
  TopBarBtns,
  PostMenuBar,
  PostMenuBtn,
} from "../molecules/atoms/styled";
import { IconBackBtn, IconMoreBtn } from "../molecules/atoms/icons";
import TopBar from "../molecules/TopBar";
import PostModal from "../molecules/PostModal";
import { BoardsObject, samplePost } from "../molecules/atoms/sampleData";

interface IForm {
  comment: string;
}

export interface IPost {
  c_date: string | null;
  d_date: string | null;
  m_date: string | null;
  click_num: number;
  comment_num: number;
  content: string;
  is_user_hid: boolean;
  id: number;
  like: number;
  num: number;
  title: string;
  user_name: string;
}

export interface IComment {
  user_name: string;
  content: string;
  c_date: string;
}
interface IPostState {
  state: {
    postId: number;
    boardName: string;
  } | null;
}

export interface IPostData {
  post_detail: IPost;
  post_comments: IComment[];
}

function Post() {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);
  const [isLoading, setIsLoading] = useState(true);
  const [userName, setUserName] = useRecoilState(user);
  const { register, handleSubmit, reset } = useForm<IForm>();
  const [postData, setPostData] = useState<IPostData | null>();
  const { state } = useLocation() as IPostState;
  const postId = state?.postId;
  const boardName = state?.boardName;
  const navigate = useNavigate();
  const params = useParams();
  const [isModalOpen, setIsModalOpen] = useRecoilState(postOptionState);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleDelete = () => {
    if (window.confirm("글을 삭제하시겠습니까?")) {
      // 삭제 처리
      deletePost(postId);
      alert("해당 글을 삭제합니다."); //
      // 페이지 이동
      navigate(-1);
    } else {
      // doing nothing
    }
  };

  const handleEdit = () => {
    // 수정 페이지로 이동
    navigate(`/posts/${postId}/fix`, { state: { data: postData } });
  };
  function onSubmit(data: IForm) {
    reset();

    writeComment(data.comment, `${postData?.post_detail.id}`);
    window.location.reload();
  }

  useEffect(() => {
    const checkUserAuth = async () => {
      const authData = await authCheck();
      const authStatus = authData["isAuthenticated"];
      const authName = authData["username"];
      setIsLoggedIn(authStatus);
      setUserName(authName);
      setIsLoading(false);
    };
    const paintPost = async () => {
      if (postId) {
        const post = await getPost(postId);
        setPostData(post as unknown as IPostData | null);
        console.log("post :", post);
      }
    };

    if (state === null) {
      navigate("/");
      console.log("navigate to mainpage (state===null)");
    } else {
      checkUserAuth();
      paintPost();
    }
  }, []);

  return postData ? (
    <Wrapper>
      <TopBar needWrite={true} needSearch={true} />
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
      {/* ----------Top Bar---------- */}
      <PostMain>
        <PostMainContents
          post={postData?.post_detail}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />

        <Comments comments={postData?.post_comments} />
        <CommentForm onSubmit={handleSubmit(onSubmit)}>
          <CommentInput
            {...register("comment", {
              required: "댓글을 입력해주세요",
            })}
            type="comment"
            name="comment"
            placeholder={
              isLoggedIn
                ? "댓글을 입력해주세요"
                : " 댓글을 쓰시려면 로그인해주세요"
            }
          />
          {isLoggedIn ? (
            <CommentButton type="submit">
              <IconSend />
            </CommentButton>
          ) : (
            <CommentButton
              type="button"
              onClick={() => {
                alert("댓글을 작성하기 위해서는 로그인해주세요");
                window.location.href = "/login";
              }}
            >
              <IconSend />
            </CommentButton>
          )}
        </CommentForm>
      </PostMain>
      {/* ----------Post Main---------- */}
      <PostModal isOpen={isModalOpen} onClose={toggleModal} />
    </Wrapper>
  ) : (
    <Loading />
  );
}

export default Post;
