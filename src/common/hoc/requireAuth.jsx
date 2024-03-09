import React from "react";
import Layout from "../Layout/Layout";

const requireAuth = (Component) => {
  function AuthHoc(props) {
    const  isAuthenticated = true
    
    return (
      isAuthenticated && (
        <Layout>
          <Component {...props}  />
        </Layout>
      )
    );
  }
  return <AuthHoc />;
};

export default requireAuth;
