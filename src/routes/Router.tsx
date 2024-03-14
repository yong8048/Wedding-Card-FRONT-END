import Layout from "@/components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import Servey from "@/pages/Servey";
import Auth from "@/pages/Auth";
import Select from "@/pages/Select";
import Information from "@/pages/Information";
import Preview from "@/pages/Preview";
import Search from "@/pages/Search";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/servey" element={<Servey />} />
          <Route path="/select" element={<Select />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/preview" element={<Preview />} />
          <Route path="/information" element={<Information />} />
          <Route path="/search" element={<Search />}>
            <Route path="/search/:word" element={<Search />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
