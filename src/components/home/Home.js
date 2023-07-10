// import "./Home.css";
import Sidebar from "../sidebar/Sidebar";
import Timeline from "../timeline/Timeline";
import Widgets from "../widget/Widgets";

function Home({isAuth}) {
  return (
    <div>
      <Sidebar />
      <Timeline isAuth={isAuth}/>
      <Widgets />
    </div>
  );
}

export default Home;
