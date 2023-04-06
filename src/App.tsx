import { useState } from "react";
import AuthLayout from "./layouts/AuthLayout";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
      <AuthLayout>
        <Dashboard />
      </AuthLayout>
    </div>
  );
}

export default App;
