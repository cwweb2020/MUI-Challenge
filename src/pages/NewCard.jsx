import { Box, Container } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import CreditCard from "../components/CreditCard/CreditCard";
import CreditCardForm from "../components/CreditCard/Form";
import { EffectFlip, Virtual } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import useCard from "../hooks/useCard";

const NewCard = () => {
  const { formik, focused, handleFocusField } = useCard();

  return (
    <Container
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { sm: "column", xs: "column" },
          width: "100%",
          justifyContent: { md: "space-around" },
          mt: 6,
        }}
      >
        <Swiper
          effect={"flip"}
          style={{ width: "420px", position: "relative" }}
          modules={[Virtual, EffectFlip]}
          wrapperTag="div"
          setWrapperSize="420px"
        >
          <SwiperSlide>
            <CreditCard formik={formik} focused={focused} />
          </SwiperSlide>
          <SwiperSlide>
            <CreditCard side="back" formik={formik} focused={focused} />
          </SwiperSlide>
          <CreditCardForm formik={formik} handleFocusField={handleFocusField} />
        </Swiper>
      </Box>
    </Container>
  );
};

export default NewCard;
