import { Box, TextField } from "@mui/material";
import { useState } from "react";
import searchRoutes from "./SearchRoutes";
import { useNavigate } from "react-router-dom";

function SearchComponent() {
  const [search, setSearch] = useState("");
  const [filteredCategories, setFilteredCategories] = useState(searchRoutes);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setSearch(event.target.value);

    const filtered = searchRoutes.filter((route) =>
      route.label.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredCategories(filtered);
  };

  return (
    <>
      <Box sx={{ position: "relative", width: "1100px" }}>
        <TextField
          placeholder="What are you looking for?"
          fullWidth
          variant="outlined"
          size="small"
          onChange={handleChange}
          value={search}
        />
        {search.trim() && (
          <Box
            sx={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              backgroundColor: "white",
              border: "1px solid #ddd",
              zIndex: 10,
              maxHeight: "200px",
              overflowY: "auto",
            }}
          >
            {filteredCategories.length > 0 ? (
              filteredCategories.map((route) => (
                <Box
                  key={route.path}
                  sx={{
                    padding: "10px",
                    cursor: "pointer",
                    "&:hover": { backgroundColor: "#f0f0f0" },
                  }}
                  onClick={() => navigate(route.path)}
                >
                  {route.label}
                </Box>
              ))
            ) : (
              <Box
                sx={{
                  padding: "10px",
                  color: "#888",
                }}
              >
                No Results Found
              </Box>
            )}
          </Box>
        )}
      </Box>
    </>
  );
}
export default SearchComponent;
