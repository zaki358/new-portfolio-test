import React, { FC, memo, useContext } from "react";
import { UserContext } from "../../providers/UseProvider";

export const Contact: FC = memo(() => {
  const context = useContext(UserContext);
  console.log(context.contextNama);
  return (
    <>
      <div>Contact</div>
    </>
  );
});

console.log("関数コンポーネントの後");
