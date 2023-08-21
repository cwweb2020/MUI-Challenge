import { useContext, useState } from "react";
import logo_visa from "../assets/visa.svg";
import logo_master_card from "../assets/mastercard.svg";
import { useFormik } from "formik";
import { v4 as uuidv4 } from "uuid";
import useColors from "../hooks/useColors";
import { AppContext } from "../context/AppProvider";
import { CardSchema } from "../validations/card.validation";

const useCard = () => {
  const { randomGradient } = useColors();
  const { handleAddCard } = useContext(AppContext);

  const [focused, setFocused] = useState(null);
  const handleFocusField = (number) => setFocused(number);

  const formik = useFormik({
    initialValues: {
      id: uuidv4(),
      card_name: "",
      card_number: "",
      exp_date: "",
      card_holder: "",
      cvv: "",
      bg: randomGradient,
    },
    validationSchema: CardSchema,
    validateOnBlur: true,
    onSubmit: (values) => {
      handleAddCard(values);
    },
  });

  const cardSides = {
    front: "front",
    back: "back",
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const handleShowSettings = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseShowSettings = () => {
    setAnchorEl(null);
  };

  const chooseCardLogo = (string) => {
    switch (string) {
      case "4":
        return logo_visa;
      case "5":
        return logo_master_card;

      default:
        return null;
    }
  };

  return {
    formik,
    focused,
    anchorEl,
    cardSides,
    handleShowSettings,
    handleCloseShowSettings,
    chooseCardLogo,
    handleFocusField,
  };
};

export default useCard;
