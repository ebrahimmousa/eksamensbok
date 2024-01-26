import {
  Box,
  Container,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import Forward30OutlinedIcon from "@mui/icons-material/Forward30Outlined";

const CardSection = () => {
  const theme = useTheme();
  return (
    <Container
      sx={{
        position: "relative",
        zIndex: 1,
        mt: 0,
        borderRadius: "30px",
        overflow: "hidden",
        bgcolor: theme.palette.mode === "dark" ? "#white" : "#black",
      }}
    >
      <Stack
        divider={
          useMediaQuery("(min-width:600px)") ? (
            <Divider orientation="vertical" flexItem />
          ) : null
        }
        sx={{ flexWrap: "wrap" }}
        direction={"row"}
        alignItems={"center"}
      >
        {/* CHANGE TEXT VIKTIG!!! */}

        <MyBox
          icon={<AccountBalanceOutlinedIcon fontSize="large" />}
          title={"Payment"}
          subTitle={"Secure Payment"}
        />
        <MyBox
          icon={<LocalShippingOutlinedIcon fontSize="large" />}
          title={"Shipping"}
          subTitle={"Free Shipping"}
        />
        <MyBox
          icon={<Forward30OutlinedIcon fontSize="large" />}
          title={"Return"}
          subTitle={"30 Days Free Return"}
        />
      </Stack>
    </Container>
  );
};

export default CardSection;

// eslint-disable-next-line react/prop-types
const MyBox = ({ icon, title, subTitle }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: 250,
        display: "flex",
        flexGrow: 1,
        alignItems: "center",
        gap: 3,

        py: 1.6,
        justifyContent: useMediaQuery("(min-width:600px)") ? "center" : "left",
      }}
    >
      {icon}

      <Box>
        <Typography variant="body1">{title}</Typography>
        <Typography
          sx={{ fontWeight: 300, color: theme.palette.text.secondary }}
          variant="body1"
        >
          {subTitle}
        </Typography>
      </Box>
    </Box>
  );
};
