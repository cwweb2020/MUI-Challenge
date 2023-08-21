import { Box, Container, Typography } from "@mui/material";
import PieChart from "../components/Pie/PieChart";

const Dashboard = () => {
  return (
    <Container>
      <Box
        flexDirection={"column"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        width={"100%"}
      >
        <Typography my={4} textAlign={"center"} variant="h3">
          Registered Cards
        </Typography>
        <PieChart />
      </Box>
    </Container>
  );
};

export default Dashboard;
