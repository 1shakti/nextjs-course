import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FavouritesPage from "./pages/Favourites";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import Layout from "./component/layouts/Layout";
import MainNavigation from "./component/layouts/MainNavigation";

const  App = () => {
  return (
      <Router>
      <MainNavigation />
      <Layout>
        <Routes>
          <Route exact path="/" element={<AllMeetupsPage />} />
          <Route path="/new-meetup" element={<NewMeetupPage />} />
          <Route path="/favourites" element={<FavouritesPage />} />
        </Routes>
        </Layout>
      </Router>
  );
}

export default App;
