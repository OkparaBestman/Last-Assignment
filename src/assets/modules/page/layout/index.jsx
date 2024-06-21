import React from "react";
import ApplicationHeader from "../components/header";

function ApplicationLayout({ children }) {
  return (
    <div className="application_layout">
      <div className="header">
        <ApplicationHeader />
      </div>
      <div className="content">{children}</div>
    </div>
  );
}

export default ApplicationLayout;
