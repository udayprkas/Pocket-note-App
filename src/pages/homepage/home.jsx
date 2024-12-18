import { useContext } from "react";
import UpdateNote from "../../components/UpdateNote/UpdateNote";
import MainPage from "../../components/mainPage/mainPage";
import UserContext from "../../components/Context/UserContext";

const Home = () => {
    const { currentgroup } = useContext(UserContext);
  return <>{currentgroup ? <UpdateNote /> : <MainPage />}</>;
};

export default Home;
