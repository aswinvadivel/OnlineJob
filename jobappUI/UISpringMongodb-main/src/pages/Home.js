import React from "react";
import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "../App.css";

const Home = () => {
  return (
    <div style={{ backgroundColor: "white", height: "100vh" }}>
      <Typography
        sx={{ margin: "5%", color: "white", backgroundColor: "violet", padding: "1%", borderRadius: "8px" }}
        variant="h2"
        align="center"
      >
        Get Hired or Hire people for free!
      </Typography>
      <div>
        <ul className="ul">
          <li>
            <Button
              sx={{
                margin: "2% 3%",
                color: "white",
                borderColor: "violet",
                backgroundColor: "violet",
                '&:hover': { backgroundColor: "darkviolet" }
              }}
              variant="outlined"
            >
              <Link
                to="/employer/dashboard"
                style={{ textDecoration: "none", color: "white" }}
              >
                Hire talent
              </Link>
            </Button>
          </li>
          <li>
            <Button
              sx={{
                margin: "2% 3%",
                color: "white",
                borderColor: "violet",
                backgroundColor: "violet",
                '&:hover': { backgroundColor: "darkviolet" }
              }}
              variant="outlined"
            >
              <Link
                to="/employee/feed"
                style={{ textDecoration: "none", color: "white" }}
              >
                Get Job Now
              </Link>
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
