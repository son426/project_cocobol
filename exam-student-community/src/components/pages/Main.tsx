import TopBar from "../molecules/TopBar";
import Boards from "../molecules/Boards";
import Loading from "../molecules/Loading";
import { authCheck, getBoards, logout, SERVER_URL } from "../../api";
import { useRecoilState } from "recoil";
import { loginState, user } from "../../store/atoms";
import { sampleBoards } from "../molecules/atoms/sampleData";
import React, { useState, useEffect } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}
const Main = () => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);
  const [userName, setUserName] = useRecoilState(user);
  const [isLoading, setIsLoading] = useState(true);
  const [boardsData, setBoardsData] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const onClickLogOut = () => {
    setIsLoggedIn(false);
    logout();
  };

  useEffect(() => {
    const checkUserAuth = async () => {
      const authData = await authCheck();
      const authStatus = authData["isAuthenticated"];
      const authName = authData["username"];

      setIsLoggedIn(authStatus);
      setUserName(authName);
      setIsLoading(false);
    };

    const paintBoards = async () => {
      const boardsData = await getBoards();
      setBoardsData(boardsData);
    };
    checkUserAuth();
    paintBoards();
  }, []);

  return !isLoading ? (
    <>
      <TopBar needWrite={true} needSearch={true} />
      <Boards data={boardsData} />
    </>
  ) : (
    <Loading />
  );
};

export default Main;
