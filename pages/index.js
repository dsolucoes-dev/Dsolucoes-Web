import React from "react";
import Footer from "../components/Footer";

import { Landing } from "../components/Landing";
import Main from "../components/Main";

export default function Home() {
  return (
    <div className="page-home ">
      <div className="content lg:mx-20">
        <Landing />
        <Main />
      </div>
     <Footer />
    </div>
  );
}
