import {
  Box,
  Card,
  Grid,
  TextField,
  Typography,
  InputAdornment,
  Button,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import "../App.css";

const Feed = () => {
  const [query, setQuery] = useState("");
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(`http://localhost:8080/posts/${query}`);
      setPost(response.data);
    };
    const fetchInitialPosts = async () => {
      const response = await axios.get(`http://localhost:8080/allposts`);
      console.log(response);
      setPost(response.data);
    };
    if (query.length === 0) fetchInitialPosts();
    if (query.length > 2) fetchPosts();
  }, [query]);

  return (
    <div style={{ backgroundColor: "white", height: "100vh", padding: "2%" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Button
              sx={{
                margin: "1% 2%",
                color: "white",
                borderColor: "violet",
                backgroundColor: "violet",
                '&:hover': { backgroundColor: "darkviolet" }
              }}
              variant="outlined"
            >
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                Home
              </Link>
            </Button>
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              placeholder="Search..."
              sx={{ width: "75%", margin: "1% 0" }}
              onChange={(e) => setQuery(e.target.value)}
            />
          </Box>
        </Grid>
        {post &&
          post.map((p) => (
            <Grid key={p.id} item xs={12} md={6} lg={4}>
              <Card sx={{ padding: "3%", margin: "1%", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
                <Typography
                  variant="h5"
                  sx={{ fontSize: "1.5rem", fontWeight: "600", color: "violet" }}
                >
                  {p.profile}
                </Typography>
                <Typography sx={{ color: "#585858", marginTop: "1%" }} variant="body1">
                  Description: {p.desc}
                </Typography>
                <Typography sx={{ marginTop: "1%" }} variant="h6">
                  Years of Experience: {p.exp} years
                </Typography>
                <Typography sx={{ marginTop: "1%" }} variant="body1">
                  Skills:
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "0.5rem" }}>
                  {p.techs.map((s, i) => (
                    <Typography
                      key={i}
                      variant="body2"
                      sx={{ backgroundColor: "lightgray", padding: "0.5rem", borderRadius: "4px" }}
                    >
                      {s}
                    </Typography>
                  ))}
                </Box>
              </Card>
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default Feed;