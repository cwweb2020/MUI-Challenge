import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useContext } from "react";
import { Doughnut } from "react-chartjs-2";
import { AppContext } from "../../context/AppProvider";
import empty_wallet from "../../assets/empty_wallet.png";
import { Box, Typography } from "@mui/material";
import { countCardTypes } from "../../helpers/cards.helper";

ChartJS.register(ArcElement, Tooltip, Legend);
const options = {
  plugins: {
    legend: {
      labels: {
        font: {
          size: 16,
        },
        usePointStyle: true,
        className: "vertical-padding",
      },
    },
  },
};

const PieChart = () => {
  const { cards } = useContext(AppContext);

  const data = {
    datasets: [
      {
        label: "Tarjetas",
        data: countCardTypes(cards),
        backgroundColor: ["#9C27B0", "#008CFF", "#D37908"],
        borderColor: ["#9C27B0", "#008CFF", "#D37908"],
        borderWidth: 1,
      },
    ],
    labels: ["Visa", "MasterCard", "Otro"],
  };

  const totalCards = !cards.length
    ? 0
    : countCardTypes(cards).reduce((acc, currVal) => (acc += currVal), 0);

  if (!cards.length) {
    return (
      <div>
        <img width={"400px"} src={empty_wallet} alt="empty_wallet" />
        <p style={{ textAlign: "center" }}>No cards registered yet !</p>
      </div>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { sm: "column", xs: "column", md: "row" },
        my: 10,
        justifyContent: { md: "space-around" },
        alignItems: { sm: "center", xs: "center" },
        width: "100%",
      }}
    >
      <Box width={"400px"}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Doughnut data={data} options={options} />
        </div>
      </Box>
      {cards.length && (
        <Box>
          <Typography variant="h3" textAlign={"center"}>
            Total Cards
          </Typography>
          <Typography variant="h1" textAlign={"center"} color={"purple"}>
            {totalCards}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default PieChart;
