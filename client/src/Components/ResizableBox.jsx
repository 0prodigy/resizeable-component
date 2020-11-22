import { Resizable } from "re-resizable";
import React, { useEffect, useState } from "react";

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#fff",
  borderRadius: 10,
  marginRight: 10,
  boxShadow: "0px 0px 5px rgb(195 201 202) ",
};
function ResizableBox({ initWidth = 300, initHeight = 200, children }) {
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(200);

  useEffect(() => {
    setHeight(initHeight);
    setWidth(initWidth);
  }, [initWidth, initHeight]);

  return (
    <div>
      <Resizable
        style={style}
        size={{ width, height }}
        onResizeStop={(e, direction, ref, d) => {
          setWidth(width + d.width);
          setHeight(height + d.height);
        }}
      >
        {children}
      </Resizable>
    </div>
  );
}

export default ResizableBox;
