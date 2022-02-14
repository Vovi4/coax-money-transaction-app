import React from "react";

import ResetPassword from "./ResetPassword";

import "../assets/components/settings.css";

const Settings = () => {
  return (
    <div className="settings-wrp">
      <h1>Settings page</h1>
      <ResetPassword />
    </div>
  )
}

export default Settings;