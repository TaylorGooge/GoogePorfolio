import React, { useEffect, useState } from "react";
import Nav from "../components/navigation/nav";
import SideNav from "../components/sidenav/sidenav";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { blogList } from "../api";

const paperStyle = {
  padding: 20,
  marginTop: 10,
  marginBottom: 10,
  height: 700,
  overflowY: "auto",
};



const Projects = ({}) => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
  
    let posts = await blogList("portfolio");
   
    setProjects(posts);
  };

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
              <Grid container spacing={4}>
                {projects.map((p, index) => (
                  <Grid item xs={6} key={index}>
                    <Card sx={{ maxWidth: 345 }}>
                      <CardMedia
                        component="img"
                        height="194"
                        image={p.featured_image}
                        alt={p.title}
                      />
                      <CardContent>
                        <Typography variant="h5" color="text.secondary">
                          {p.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {p.summary}
                        </Typography>
                      </CardContent>
                      <CardActions disableSpacing>
                        <Button size="small" href={`projects/${p.slug}`}>
                          Learn More
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Projects;
