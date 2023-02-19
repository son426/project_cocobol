import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const loginState = atom({
  key: "loginState",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const user = atom({
  key: "user",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const userId = atom({
  key: "userId",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

// kuk329 : 회원가입 관련
export const registerName = atom({
  // username
  key: "username",
  default: "",
});

export const registerId = atom({
  // registerId
  key: "registerId",
  default: "",
});
export const registerPd = atom({
  // password
  key: "password",
  default: "",
});
// export const registerPhone = atom({
//   // phone
//   key: "phone",
//   default: "",
// });
export const registerEmail = atom({
  // email
  key: "email",
  default: "",
});
export const registerGender = atom({
  // gender
  key: "gender",
  default: "",
});

export const registerTime = atom({
  // time
  key: "time",
  default: "",
});

export const postsState = atom({
  key: "posts",
  default: [],
});

export const searchModeState = atom({
  key: "mode",
  default: 1,
  effects_UNSTABLE: [persistAtom],
});

export const postOptionState = atom({
  key: "option",
  default: false,
});

export const PostSelectBoardId = atom({
  key: "PostSelectBoardId",
  default: "",
});

export const restrict = atom({
  key: "restrict",
  default: true,
});

export const atom_place = atom({
  key: "place",
  default: "",
});
