import React from "react";
import Nav from "../components/navigation/nav";
import SideNav from "../components/sidenav/sidenav";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";

import Button from "@mui/material/Button";

const paperStyle = {
  padding: 20,
  marginTop: 10,
  marginBottom: 10,
  height: 700,
  overflowY: "auto",
};

const projectList = [
  {
    projectName: "Birdr",
    projectImage: "/img/birdr_proj.png",
    projectDescription:
      "Birdr, a novice-friendly birdwatching app born from a passion for nature. Revolutionizing the field, it eliminates barriers, making birding accessible to all without prior expertise, marking a new chapter in nature exploration",
    projectLink: "/projects/birdr",
  },
  {
    projectName: "EmpowerEdu",
    projectImage: "/img/reactDefault.jpg",
    projectDescription:
      "SaaS platform for early childhood education, streamlining scholarship fund distribution. This dynamic solution automates application processes, ensuring efficient approvals and revisions, catering to both individual users and educational sites",
    projectLink: "/projects/saasproject",
  },
];

const Projects = ({}) => {
  const [expanded, setExpanded] = React.useState(false);

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
                {projectList.map((p, index) => (
                  <Grid item xs={6} key={index}>
                    <Card sx={{ maxWidth: 345 }}>
                      <CardHeader title={p.projectName} />
                      <CardMedia
                        component="img"
                        height="194"
                        image={p.projectImage}
                        alt={p.projectName}
                      />
                      <CardContent>
                        <Typography variant="body2" color="text.secondary">
                          {p.projectDescription}
                        </Typography>
                      </CardContent>
                      <CardActions disableSpacing>
                        <Button size="small" href={p.projectLink}>
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
