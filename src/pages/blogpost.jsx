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
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

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
                  <ImageList
                    sx={{ width: 500, height: 450 }}
                    cols={cols}
                    rowHeight={164}
                  >

                 
                    {birdrImages && birdrImages.map((item, index) => (
                      <ImageListItem key={index}>
                        <img
                          srcSet={`${item.src}?w=240&h=164&fit=crop&auto=format&dpr=2 2x`}
                          src={`${item.src}?w=164&h=164&fit=crop&auto=format`}
                          alt={item.alt}
                          loading="lazy"
                        />
                      </ImageListItem>
                    ))}
                  </ImageList>
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
