import { useContext } from "react";
import { Box, Container } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Virtual } from "swiper/modules";
import CreditCard from "../components/CreditCard/CreditCard";
import { AppContext } from "../context/AppProvider";
import Empty from "../components/Empty/Empty";

const MyCards = () => {
  const { cards, handleDeleteCard } = useContext(AppContext);

  if (!cards.length) {
    return <Empty text={"You dont have any registred Card !"} />;
  }

  return (
    <Container>
      <Box
        height={"90vh"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Swiper
          effect={"coverflow"}
          style={{ padding: "30px 20px" }}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
          }}
          pagination={true}
          modules={[Virtual, EffectCoverflow, Pagination]}
        >
          {cards.map((card, index) => (
            <SwiperSlide
              key={index}
              style={{ width: "420px", height: "250px" }}
            >
              <CreditCard
                formik={{ values: { ...card} }}
                handleDeleteCard={handleDeleteCard}
                view
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Container>
  );
};

export default MyCards;
