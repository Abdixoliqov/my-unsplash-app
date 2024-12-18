import { createContext, useEffect, useReducer } from "react";

export const GlobalContext = createContext();

// const dataFromLocalStorage = () => {
//   return (
//     JSON.parse(localStorage.getItem("my-splash-data")) || {
//       likedImages: [],
//       downloadImages: [],
//       downloadCheck: false,
//     }
//   );
// };

const changeState = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOGIN":
      return {
        ...state,
        user: payload,
      };
    case 'AUTH_READY':
      return {
        ...state,
        authReady: true,

      }
    case "LOGOUT":
      return {
        ...state,
        user: null,
      };
    case "LIKE":
      return {
        ...state,
        likedImages: [...state.likedImages, payload],
      };
    case "UNLIKE":
      return {
        ...state,
        likedImages: state.likedImages.filter((image) => image.id !== payload),
      };
    case "DOWNLOAD":
      return {
        ...state,
        downloadCheck: true,
        downloadImages: [...state.downloadImages, payload],
      };

    case "REDOWNLOAD":
      return {
        ...state,
        downloadCheck: false,
        downloadImages: state.downloadImages.filter(
          (image) => image.id !== payload,
        ),
      };
    default:
      return state;
  }
};

export function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(changeState, {
    user: null,
    likedImages: [],
    downloadImages: [],
    downloadCheck: false,
    authReady: false,
  });

  useEffect(() => {
    localStorage.setItem("my-splash-data", JSON.stringify(state));
  }, [state]);

  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}
