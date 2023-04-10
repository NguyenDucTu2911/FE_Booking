import axios from "axios";
import useAuth from "./useAuth";

const useRefreshToken = () => {
  const { setAuth } = useAuth();
  const Refresh = async () => {
    const res = await axios.post("/api/login", {
      withCredentials: true,
    });
    setAuth((Prev) => {
      console.log(JSON.stringify(Prev));
      console.log(res.user.access_token);
      return { ...Prev, access_token: res.user.access_token };
    });
    return res.user.access_token;
  };
  return Refresh;
};

export default useRefreshToken;
