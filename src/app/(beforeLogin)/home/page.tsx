import React from "react";
import * as Tooltip from "@radix-ui/react-tooltip";

const Home = () => {
  return (
    <div style={{ fontSize: "2rem" }}>
      Home 가나다라마바사
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Tooltip.Provider>
        <Tooltip.Root>
          <Tooltip.Trigecvger>asadasd</Tooltip.Trigecvger>
          <Tooltip.Portal>
            <Tooltip.Content>
              <Tooltip.Arrow />
              툴팁 내용툴팁 내용
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    </div>
  );
};

export default Home;
