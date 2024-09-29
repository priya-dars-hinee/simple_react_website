import React from "react";
import Layout from "../components/Layout/Layout";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import {
  Box,
  TableCell,
  TableContainer,
  TableRow,
  Table,
  TableHead,
  Typography,
  Paper,
  TableBody,
} from "@mui/material";
const Contact = () => {
  return (
    <Layout>
      <Box sx={{ my: 10, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
        <Typography variant="h4">Contact Foodiol Deel</Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident ea
          eaque assumenda iste sunt omnis itaque quod quam! Fugit iusto magnam
          perspiciatis modi veritatis recusandae vitae sed quibusdam quaerat
          nemo! Explicabo fugiat, id qui laborum, quia adipisci molestias,
          necessitatibus ratione commodi error ad neque cumque dolorem amet?
          Pariatur quaerat repellendus officiis qui veritatis doloribus dolore
          aliquam! Vel harum, eum blanditiis fugit assumenda officiis eius
          aliquam mollitia architecto beatae? Vel id consequuntur aperiam odit
          nisi, non recusandae saepe qui repellat quo ad molestias quas unde
          aliquam hic? Obcaecati, expedita animi debitis consequuntur repellat
          asperiores corrupti odio iure, repellendus unde aperiam id?
        </p>
      </Box>
      <Box sx={{mr:3,width:"600px",ml:10,"@media (max-wdith:600)":{
        width:"300px"
      }}}>
        <TableContainer component={Paper}>
          <Table aria-lable="contact table">
            <TableHead>
              <TableRow>
                <TableCell sx={{bgcolor:'black' ,color:"white"}}align="center">Contact Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} />
                1800 00 0000  (tollfree)
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <EmailOutlinedIcon sx={{ color: "skyblue", pt: 1 }} />
                  helpfoodio.com
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
            <CallOutlinedIcon sx={{color:"green" ,pt:1}}/> 0987654321
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
