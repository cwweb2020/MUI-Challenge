import { Box } from "@mui/material";
import empty_wallet from "../../assets/empty_wallet.png";

const Empty = ({ text }) => {
  return (
    <Box
      mx="auto"
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      mt={12}
    >
      <img width={"400px"} src={empty_wallet} alt="empty_wallet" />
      <p style={{ textAlign: "center" }}>{text}</p>
    </Box>
  );
};

export default Empty;
