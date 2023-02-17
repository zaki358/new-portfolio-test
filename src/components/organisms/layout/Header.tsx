import React, { FC, memo, useCallback } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { defaultFont } from "../../../foundations/mixin";

export const Header: FC = memo(() => {
  const navigete = useNavigate();

  const onClickHome = useCallback(() => navigete("/"), [navigete]);
  const onClickAchievement = useCallback(
    () => navigete("/achievement"),
    [navigete]
  );
  const onClickContact = useCallback(() => navigete("/contact"), [navigete]);
  return (
    <div>
      <SNavigation className="list">
        <SList
          onClick={() => {
            onClickHome();
          }}
        >
          ホーム
        </SList>
        <SList onClick={onClickAchievement}>制作実績</SList>
        <SList onClick={onClickContact}>お問い合わせ</SList>
      </SNavigation>
      <Outlet />
    </div>
  );
});

const SNavigation = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SList = styled.li`
  margin: 0 10px 0 10px;
  cursor: pointer;
  ${defaultFont};
`;
