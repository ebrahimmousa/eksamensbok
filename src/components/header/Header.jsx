import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ColorModeContext } from "../../theme";
import {
  IconButton,
  useTheme,
  Container,
  Stack,
  InputBase,
  Button,
} from "@mui/material";
import {
  DarkModeOutlined,
  LightModeOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

// const SearchContainer = styled("div")(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   border: `1px solid ${theme.palette.primary.main}`,
//   borderRadius: theme.shape.borderRadius,
//   marginLeft: theme.spacing(2),
// }));

// const SearchInput = styled(InputBase)(({ theme }) => ({
//   marginLeft: theme.spacing(1),
//   flex: 1,
// }));

const Header = () => {
  const colorMode = useContext(ColorModeContext);
  // const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const theme = useTheme();
  // const [searchedProducts, setSearchedProducts] = useState([]);

  // const handleSearch = async () => {
  //   try {
  //     const result = await fetch(
  //       `http://localhost:1337/api/products?populate=*&filters[productName][$regex]=${searchTerm}`
  //     );

  //     if (!result.ok) {
  //       console.error("Bad Request:", result.statusText);
  //       return;
  //     }

  //     const data = await result.json();

  //     if (data && data.data) {
  //       const filteredProducts = data.data.filter((product) =>
  //         product.attributes.productName
  //           .toLowerCase()
  //           .includes(searchTerm.toLowerCase())
  //       );

  //       console.log("Filtered Products:", filteredProducts);

  //       if (filteredProducts.length > 0) {
  //         setSearchedProducts(filteredProducts);
  //       } else {
  //         console.log("Inga resultat hittades.");
  //         setSearchedProducts([]);
  //       }
  //     } else {
  //       console.error("No data received from the API.");
  //       setSearchedProducts([]);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //     setSearchedProducts([]);
  //   }
  // };

  // const handleKeyPress = (event) => {
  //   if (event.key === "Enter") {
  //     handleSearch();
  //   }
  // };

  return (
    <Container sx={{ my: 3, display: "flex", justifyContent: "space-between" }}>
      {/* <Stack direction={"row"} alignItems={"center"}>
        <SearchContainer>
          <SearchInput
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <Button variant="contained" color="primary" onClick={handleSearch}>
            Search
          </Button>
        </SearchContainer>
      </Stack> */}
      <div>
        Light/Night Mode
        {theme.palette.mode === "light" ? (
          <IconButton
            onClick={() => {
              localStorage.setItem(
                "mode",
                theme.palette.mode === "dark" ? "light" : "dark"
              );
              colorMode.toggleColorMode();
            }}
            color="inherit"
          >
            <LightModeOutlined />
          </IconButton>
        ) : (
          <IconButton
            onClick={() => {
              localStorage.setItem(
                "mode",
                theme.palette.mode === "dark" ? "light" : "dark"
              );
              colorMode.toggleColorMode();
            }}
            color="inherit"
          >
            <DarkModeOutlined />
          </IconButton>
        )}
      </div>
    </Container>
  );
};

export default Header;
