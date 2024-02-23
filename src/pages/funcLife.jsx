import React, { useEffect } from "react";
import Header from "../components/header/header";

function FuncLife() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("after mount");
  });

  useEffect(() => {
    console.log("props or state changed");
  });

  useEffect(() => {
    return () => {
      console.log("unmount");
    };
  });

  return (
    <div>
      <Header />
      <Typography.Title level={3}>{count}</Typography.Title>
      <Button type="primary" onClick={() => setCount(count + 1)} plus></Button>
    </div>
  );
}

export default FuncLife;
