import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Typography, Box } from "@mui/material";
const Footer = () => {
  return (
    <>
      <Box
        sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white", p: 3 }}

      >
       <Box sx={{my:3, "  & svg":{
        fontSize:"60px",
        cursor:"pointer",
        mr:2
       },
       "& svg:hover":{
        color:"goldenrod",
        transform:"translateX(5px)",
        transition:"all 400ms",
       }
       }}>
        <InstagramIcon/>
<YouTubeIcon/>
<EmailIcon/>
<TwitterIcon/>
        </Box> 
        <Typography
          variant="h5"
          sx={{
            "@media (max-wdith:600px)": {
              fontSize: "1rem",
            },
          }}
        >
          All Rights Reserved &copy; PriyAdarsh
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
