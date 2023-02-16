import React, { FC, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

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
      <button
        onClick={(e) => {
          onClickHome();
          console.log(e);
        }}
      >
        ホーム
      </button>
      <button onClick={onClickAchievement}>制作実績</button>
      <button onClick={onClickContact}>お問い合わせ</button>
    </div>
  );
});
