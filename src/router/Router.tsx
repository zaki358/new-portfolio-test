import { FC, memo } from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "../components/pages/Home";
import { Self } from "../components/pages/Self";
import { Skill } from "../components/pages/Skill";
import { Achievement } from "../components/pages/Achievement";
import { Contact } from "../components/pages/Contact";
import { HeaderLayout } from "../components/templates/HeaderLayout";

export const Router: FC = memo(() => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <HeaderLayout>
            <Home />
          </HeaderLayout>
        }
      />
      <Route path="/self" element={<Self />} />
      <Route path="/skill" element={<Skill />} />
      <Route
        path="/achievement"
        element={
          <HeaderLayout>
            <Achievement />
          </HeaderLayout>
        }
      />
      <Route
        path="/contact"
        element={
          <HeaderLayout>
            <Contact />
          </HeaderLayout>
        }
      />
    </Routes>
  );
});
