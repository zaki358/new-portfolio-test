import { FC, memo } from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "../components/pages/Home";
import { Introduction } from "../components/pages/Introduction";
import { Skill } from "../components/pages/Skill";
import { Achievements } from "../components/pages/Achievements";
import { Contact } from "../components/pages/Contact";
import { HeaderLayout } from "../components/templates/HeaderLayout";

export const Router: FC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<HeaderLayout />}>
        <Route index element={<Home />} />
        <Route path="/achievement" element={<Achievements />} />
        <Route path="/contact" element={<Contact /> }/>
      </Route>
    </Routes>
  );
});
