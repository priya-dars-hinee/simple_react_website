import React from "react";
import Layout from "../components/Layout/Layout";
import { Typography, Box } from "@mui/material";

const About = () => {
  return (
    <div>
      <Layout>
        <Box
          sx={{
            my: 15,
            textAlign: "center",
            p: 2,
            "& h4": {
              fontWeight: "bold",
              my: 2,
              fontSize: "2rem",
            },
            "& p": {
              textAlign: "justify",
            },
            "@media (max-width:600px)":{
              mt:0,
              "& h4":{
                fontSize:"1.5rem"
              }
            }
          }}
        >
          <Typography variant="h4">Welcome to Foodiol Deel</Typography>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
            provident nam ut! Repellendus, laboriosam mollitia rerum eveniet
            maxime commodi tenetur quaerat accusamus praesentium tempora
            similique ut. Numquam iusto odit impedit?
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            perferendis reprehenderit ipsum rerum adipisci ipsam, sit et nemo
            tempora alias porro accusantium molestias sequi odio cupiditate
            minima quibusdam at perspiciatis beatae voluptates quis pariatur
            quisquam explicabo praesentium. Libero impedit distinctio, possimus
            earum veniam quia fuga eligendi consequatur delectus, modi vitae
            quisquam placeat saepe voluptatem nobis non corrupti ab aperiam
            assumenda, magni fugiat voluptate officia fugit. Amet, aperiam? In
            eum dolor illo ad dolorum reiciendis natus expedita, atque
            blanditiis accusamus debitis? Harum, numquam obcaecati accusantium
            velit atque impedit! Officiis aspernatur, hic molestias sit
            consequatur cupiditate at consectetur odit fugiat iste inventore.
          </p>
        </Box>
      </Layout>
    </div>
  );
};

export default About;
