import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import Header2 from "./Header2";
import Footer from "./Footer";

import "./CSS/Dashboard.css";

const Dashboard = () => {
  const [inputtext, setinputtext] = useState({
    Name: "",
    Email: "",
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const userFirstname = localStorage.getItem('firstname');
  return (
    <>
      {/* section 1 */}
      <Header2 multiNavigate={false} />
     
      <section className="dashboard-component">
        <div className="dash-upper">
          <h1>Welcome back, <span class="text-orange">{userFirstname}</span></h1>
          <p>Hope you are having a good day! <a href="mailto:support@vimerse.com">support@vimerse.com</a> Contact us at for any help!</p>
        </div>
      </section>

      <Footer />
    </>
  );
};
export default Dashboard;
