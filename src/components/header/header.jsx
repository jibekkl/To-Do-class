import React from "react";

function Header() {
  return (
    <Flex justify="space-around">
      <Link to="/">logo</Link>
      <Flex gap={20}>
        <Link to="/">home</Link>
        <Link to="/profile">profile</Link>
      </Flex>
    </Flex>
  );
}

export default Header;
