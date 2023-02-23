import {
  Writer,
  Details,
  Content,
  ContentInfo,
  User,
  UserInfo,
  ContentBtn,
  ContentBtns,
  Content_Title,
  Content_Content,
  PostMainContentsWrapper,
  PostMoreBtn,
  UpdateDeleteBox,
} from "./atoms/styled";
import { samplePost } from "./atoms/sampleData";
import {
  IconLike,
  IconUser,
  IconCopy,
  IconCopied,
  IconLiked,
  IconMoreBtn,
} from "./atoms/icons";
import { useState, useEffect } from "react";
import { getLikes, ILikeResponse, pushLikes, timeCalculator } from "../../api";
import { useRecoilState, useRecoilValue } from "recoil";
import { loginState, postOptionState, userId } from "../../store/atoms";
import { replaceUrlsWithHyperlinks } from "../../functions";
import { AxiosResponse } from "axios";
import Loading from "./Loading";

interface IPostProp {
  post?: any | null;
  handleDelete: any;
  handleEdit: any;
}

function PostMainContents({ post, handleDelete, handleEdit }: IPostProp) {
  const [likeClicked, setLikeClicked] = useState(false as boolean | undefined);
  const [scrapClicked, setScrapClicked] = useState(false);
  const [likeNum, setLikeNum] = useState(0 as number | undefined);
  const loginUserId = useRecoilValue(userId);
  const loginCheck = useRecoilValue(loginState);
  const [postId, setPostId] = useState(0 as number);

  const [isOptions, setIsOptions] = useRecoilState(postOptionState);
  const onOptions = () => {
    setIsOptions((current) => !current);
  };

  const onLike = async () => {
    const response: AxiosResponse<ILikeResponse> | undefined = await pushLikes(
      postId
    );
    console.log("onLike response :", response);
    if (response?.data?.message === "login fail") {
      alert("로그인해야함");
      return;
    }

    if (likeClicked) {
      setLikeNum((current: any) => current - 1);
    } else {
      setLikeNum((current: any) => current + 1);
    }

    setLikeClicked(response?.data?.doesUserLike);

    console.log("onLike response : ", response);
    console.log(
      "onLike response.data.doesUserLike : ",
      response?.data?.doesUserLike
    );
  };

  const onCopy = () => {
    setScrapClicked((current) => !current);
  };

  useEffect(() => {
    console.log("PostMainContents post :", post);
    if (post) {
      setLikeNum(post.like_num);
      setPostId(post.id);
    }

    const getLikesNum = async () => {
      const response: AxiosResponse<ILikeResponse> | undefined = await getLikes(
        post.id as number
      );

      if (response?.data?.success) {
        console.log("getLikesNum response : ", response);
        setLikeNum(response?.data?.likesCount);
        setLikeClicked(response?.data?.doesUserLike);
      }
    };
    getLikesNum();
  }, []);

  return likeNum !== undefined ? (
    <PostMainContentsWrapper>
      <User height="5vh">
        <IconUser className="userIcon" />
        <UserInfo>
          <Writer>{post?.user_name}</Writer>
          <Details>{timeCalculator(post?.c_date)}</Details>
        </UserInfo>
        {loginCheck && post.user_id == loginUserId && (
          <UpdateDeleteBox>
            <button onClick={handleEdit}>수정</button>
            <button onClick={handleDelete}>삭제</button>
          </UpdateDeleteBox>
        )}
        <PostMoreBtn>
          <IconMoreBtn onClick={onOptions} />
        </PostMoreBtn>
      </User>
      <Content>
        <Content_Title
          dangerouslySetInnerHTML={{
            __html: replaceUrlsWithHyperlinks(post?.title),
          }}
        ></Content_Title>
        <Content_Content
          dangerouslySetInnerHTML={{
            __html: replaceUrlsWithHyperlinks(post?.content),
          }}
        ></Content_Content>
      </Content>
      <ContentInfo>
        <ContentBtns>
          <ContentBtn onClick={onLike}>
            {likeClicked ? (
              <IconLiked className="icon" style={{ color: "red" }} />
            ) : (
              <IconLike className="icon" />
            )}
            <span>{`${likeNum}`}</span>
          </ContentBtn>
          {/* <ContentBtn onClick={onCopy}>
            {scrapClicked ? (
              <IconCopied className="icon" style={{ color: "green" }} />
            ) : (
              <IconCopy className="icon" />
            )}
            <span>스크랩</span>
          </ContentBtn> */}
        </ContentBtns>
      </ContentInfo>
    </PostMainContentsWrapper>
  ) : (
    <Loading />
  );
}

export default PostMainContents;
