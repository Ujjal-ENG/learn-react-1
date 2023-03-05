import React from "react";

const InlineCss = () => {
  let curDate = new Date();
  curDate = curDate.getHours();
  const cssStyle = {};
  let greeting = "";
  if (curDate >= 1 && curDate < 12) {
    greeting = "Good Moring";
    cssStyle.color = "green";
  } else if (curDate >= 12 && curDate < 19) {
    greeting = "Good Afternoon";
    cssStyle.color = "yellow";
  } else {
    greeting = "Good Night";
    cssStyle.color = "black";
  }

  return (
    <>
      <h1>
        Hello Sir, <span style={cssStyle}>{greeting}</span> {curDate}
      </h1>
    </>
  );
};

export default InlineCss;
