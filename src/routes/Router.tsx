import Layout from "@/components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import Auth from "@/pages/Auth";
import Information from "@/pages/Information";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/information" element={<Information />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
