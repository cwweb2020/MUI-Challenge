import { useState } from "react";

const useAppBar = () => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => setMenu(!menu);
  const handleClose = () => setMenu(false);
  return {
    menu,
    handleMenu,
    handleClose
  };
};

export default useAppBar;
