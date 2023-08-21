/* eslint-disable react/prop-types */
import {
  Typography,
  Paper,
  Box,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import Swal from "sweetalert2";
import useCard from "../../hooks/useCard";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const CreditCardFrontal = ({
  formik,
  focused,
  side = "front",
  view,
  handleDeleteCard,
}) => {
  const {
    cardSides,
    anchorEl,
    handleCloseShowSettings,
    handleShowSettings,
    chooseCardLogo,
  } = useCard();

  return (
    <Box position={"relative"}>
      <Paper
        elevation={24}
        sx={{
          width: "420px",
          height: "250px",
          overflow: "hidden",
          background: formik.values.bg,
          position: "relative",
        }}
      >
        {view && (
          <Box
            display={"flex"}
            justifyContent={"flex-end"}
            position={"absolute"}
            right={"0px"}
          >
            <Box position={"relative"}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-card"
                aria-haspopup="true"
                sx={{ position: "relative" }}
                onClick={handleShowSettings}
                color="inherit"
              >
                <SettingsIcon color="disabled" />
              </IconButton>
            </Box>
            <Menu
              id="menu-card"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorEl)}
              onClose={handleCloseShowSettings}
            >
              <MenuItem
                onClick={() => {
                  handleCloseShowSettings();
                  Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!",
                  }).then((result) => {
                    if (result.isConfirmed) {
                      handleDeleteCard(formik.values);
                      Swal.fire(
                        "Deleted!",
                        "Your file has been deleted.",
                        "success"
                      );
                    }
                  });
                }}
              >
                {/* <LogoutIcon sx={{ mx: 1 }} /> */}
                <DeleteForeverIcon color="error" />
                <Typography>Delete Card</Typography>
              </MenuItem>
            </Menu>
          </Box>
        )}
        {side === cardSides.back && (
          <BackSide formik={formik} focused={focused} />
        )}

        {side === cardSides.front && (
          <Box p={2} width={"100%"} height={"100%"}>
            <Typography
              textTransform={"uppercase"}
              sx={{
                mb: 4,
                width: "fit-content",
                px: 1,
                border: focused === 1 ? "1.5px solid #9C27B0" : "",
              }}
              variant="h5"
            >
              {formik.values.card_name || "Card Name"}
            </Typography>
            <Typography
              sx={{
                width: "fit-content",
                px: 1,
                border: focused === 2 ? "1.5px solid #9C27B0" : "",
                letterSpacing: "2px",
              }}
              variant="h4"
            >
              {formik.values.card_number.replace(/(\d{4})(?=\d)/g, "$1 ") ||
                "xxxx xxxx xxxx xxxx"}
            </Typography>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Box my={2} pr={1}>
                <Typography
                  variant="body2"
                  textTransform={"uppercase"}
                  sx={{ m: 0 }}
                >
                  Valid
                </Typography>
                <Typography
                  variant="body2"
                  textTransform={"uppercase"}
                  sx={{ m: 0, lineHeight: 0.7 }}
                >
                  thru
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    px: 1,
                    border: focused === 3 ? "1.5px solid #9C27B0" : "",
                  }}
                  variant="h5"
                >
                  {formik.values.exp_date.replace(/(\d{2})(\d{2})/, "$1/$2") ||
                    "mm/yy"}
                </Typography>
              </Box>
            </Box>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              pr={4}
              alignItems={"center"}
            >
              <Typography
                sx={{
                  px: 1,
                  border: focused === 4 ? "1.5px solid #9C27B0" : "",
                }}
                variant="h5"
              >
                {formik.values.card_holder || "Card Holder"}
              </Typography>
              <Box>
                <img
                  width={"70px"}
                  src={chooseCardLogo(formik.values.card_number[0])}
                />
              </Box>
            </Box>
          </Box>
        )}
      </Paper>
    </Box>
  );
};

export default CreditCardFrontal;

const BackSide = ({ focused, formik }) => {
  return (
    <>
      <Box sx={{ width: "100%", background: "#000", height: "50px", my: 2 }} />
      <Box
        sx={{ background: "#BEBEBE" }}
        width={"100%"}
        mr={"70px"}
        py={1}
        display={"flex"}
        justifyContent={"end"}
      >
        <Typography
          textAlign={"center"}
          sx={{
            px: 4,
            mr: 2,
            width: "fit-content",
            border: focused === 5 ? "1.5px solid #9C27B0" : "",
          }}
          variant="h6"
        >
          CVV / {formik.values.cvv || "XXX"}
        </Typography>
      </Box>
    </>
  );
};
