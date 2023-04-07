import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import axios from "axios";

const firebaseConfig = {
  apiKey: "AIzaSyDnp6jW7hYQCE6n7Xg27zO_gDigwhEk0kM",
  authDomain: "luxeharmony-project.firebaseapp.com",
  projectId: "luxeharmony-project",
  storageBucket: "luxeharmony-project.appspot.com",
  messagingSenderId: "563588698265",
  appId: "1:563588698265:web:0381ead5bdaf09d78fe808",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  return signInWithPopup(auth, provider)
    .then((result) => {
      const email = result.user.email;
      const password = result.user.uid;
      const userId = result.user.uid;
      const name = result.user.displayName;

      const response = axios({
        url: `${process.env.REACT_APP_API_URL}/users/google-login`,
        data: { name, email, userId, password },
        method: "post",
      });
      return response;
    })
    .catch((error) => console.log(error));
};

// export const signInWithGoogle = () => {
//   return signInWithPopup(auth, provider)
//     .then((result) => {
//       return result; // Se retorna el objeto `result`
//     })
//     .catch((error) => console.log(error));
// };
