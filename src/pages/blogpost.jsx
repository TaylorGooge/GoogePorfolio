import React from "react";
import Nav from "../components/navigation/nav";
import SideNav from "../components/sidenav/sidenav";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { birdrpost, birdrImages, birdrLinks } from "../blog/birdrpost.js";
import saaspost from "../blog/sasspost.js";
import {birdrapipost, birdrapiLinks} from "../blog/birdrapipost.js";
import MarkdownWrapper from "../components/markdown/markdownwrapper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

const paperStyle = {
  padding: 20,
  marginTop: 10,
  marginBottom: 10,
  height: 700,
  overflowY: "auto",
};




const BlogPost = ({ type }) => {
  let cols;

  if (type===  "birdr") {
    cols = Math.ceil(birdrImages.length / 3) ;
  
  } 

  
  return (
    <>
      <Nav />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Paper style={paperStyle}>
              <SideNav />
            </Paper>
          </Grid>
          <Grid item xs={8}>
            <Paper style={paperStyle}>
             
              {type === "birdr" && (
                <>
                  {birdrImages && 
                    <Carousel>
                      {birdrImages.map((img, index) => (
                      <Carousel.Item key={index}>
                        <Image alt={img.alt} src={img.src}/>
                        <Carousel.Caption>
                          <h3>{img.alt}</h3>
                   
                        </Carousel.Caption>
                      </Carousel.Item>
                      ))}
                    </Carousel>
                 
                  
                  }
                  {birdrLinks && 
                    <List style={{ display: 'flex', flexDirection: 'row', padding: 0 }}>
                      {birdrLinks.map((item, index) => (
                        <ListItem disablePadding key={index}>
                          <ListItemButton component="a" href={item.link}>
                            <ListItemText primary={item.name} />
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </List>
                  }
                 
                  <MarkdownWrapper>{birdrpost} </MarkdownWrapper>
                </>
              )}
              {type === "saas" && (
                <MarkdownWrapper>{saaspost} </MarkdownWrapper>
              )}
              {type === "birdrapi" && (
                <>
                 
                  {birdrapiLinks && 
                    <List style={{ display: 'flex', flexDirection: 'row', padding: 0 }}>
                      {birdrapiLinks.map((item, index) => (
                        <ListItem disablePadding key={index}>
                          <ListItemButton component="a" href={item.link}>
                            <ListItemText primary={item.name} />
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </List>
                  }

                  <MarkdownWrapper>{birdrapipost} </MarkdownWrapper>
                </>
              )}
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default BlogPost;
