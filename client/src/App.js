import React, { Component } from "react";
import logo from "./logo.svg";
// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Pages Import
import LandingPage from "./Pages/LandingPage";
import LandingPagev2 from "./Pages/LandingPagev2/LandingPagev2";
// import Desktop6MixpanelGenerateTextToVideoPage from "./Pages/Desktop6MixpanelGenerateTextToVideo";

// import { Prebuild_LandingPage } from "./Pages/Components/Prebuild_LandingPage/Prebuild_LandingPage";
import ExtractData from "./Pages/Onboard/ExtractData";
import Signup from "./Pages/Auth/Signup";
import ChatInterface from "./Dashboard/ChatInterface";
import ChatInterface_v2 from "./Dashboard/ChatInterface_v2";

import Dashboard from "./Dashboardv2/Pages/Dashboard";
import Dashboardv3 from "./Pages/Dashboardv3/Dashboardv3";
import Dashboardv4 from "Pages/Dashboardv4";
import BlogPage2 from "./Pages/BlogPage/BlogPage";
// import Logout from "./Pages/Auth/Logout";
import PaymentSuccess from "./Pages/Auth/PaymentSuccess";
import Pricing from "./Pages/Pricing";
import NewPricing from "Pages/NewPricing";

// End Pages Imports
// Components Import
import WrapperComponent from "./Pages/WrapperComponent";
// import SelectPage from "./Pages/Onboard/SelectPage";
// End Components Imports

// ContextAPI
import DataState from "./ContextAPI/DataContext";
// import ExtractData from "./Pages/Onboard/ExtractData";
// import ChatInterface from "./Pages/Onboard/ChatInterface";
// import Success from "./Pages/Auth/Success";
// ContentAPI End
import PageNotFount from "Pages/PageNotFound";

import GetDomain from "Pages/Components/GetDomain";
class App extends Component {
  render() {
    return (
      <>
        <GetDomain />
        <DataState>
          <BrowserRouter>
            <Routes>
              <Route path="/">
                <Route index element={<Dashboardv4 />} />

                <Route path="/success" element={<PaymentSuccess />} />
                {/* <Route
                  path="/dashboard"
                  element={
                    <WrapperComponent>
                      <Dashboardv4 />
                    </WrapperComponent>
                  }
                /> */}

                {/* <Route
                  path="/extract-data"
                  element={
                    <WrapperComponent>
                      <ExtractData />
                    </WrapperComponent>
                  }
                /> */}

                <Route path="dashboard/blogpage" element={<BlogPage2 />} />

                {/* <Route
                  path="/pricing"
                  element={
                  
                      <NewPricing />
                  
                  }
                /> */}
                <Route path="/page-not-found" element={<PageNotFount />} />
                <Route path="*" element={<PageNotFount />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </DataState>
      </>
    );
  }
}

export default App;
