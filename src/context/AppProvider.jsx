/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const AppContext = createContext("");

const AppProvider = ({ children }) => {

  const navigate = useNavigate()

  const [sidebar, setSideBar] = useState(false);
  const [user, setUser] = useState(localStorage.getItem("user") || null);
  const toggleSideBar = () => setSideBar(!sidebar);
  const [cards, setCards] = useState(
    JSON.parse(localStorage.getItem("cards")) || []
  );
  const handleDeleteCard = (card) => {
    setCards(cards.filter((a) => a.id !== card.id));
    localStorage.setItem("cards",JSON.stringify(cards.filter((a) => a.id !== card.id)))
  }

  const handleAddCard = (card) => {
    localStorage.setItem("cards", JSON.stringify([...cards, card]));
    setCards([...cards, card]);
    Swal.fire(
      'Excelent!',
      'Card added successfully!',
      'success'
    )
    navigate('/my-cards')
  };

  const login = (user) => {
    localStorage.setItem("user", user);
    setUser(user);
  };
  const logout = () => {
    localStorage.clear();
    setUser(null);
    setCards([])
  };

  return (
    <AppContext.Provider
      value={{
        sidebar,
        user,
        cards,
        toggleSideBar,
        handleDeleteCard,
        handleAddCard,
        login,
        logout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
