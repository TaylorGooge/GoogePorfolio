import * as React from "react";
import Nav from "../components/navigation/nav";
import SideNav from "../components/sidenav/sidenav";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const paperStyle = {
  padding: 20,
  marginTop: 10,
  marginBottom: 10,
  height: 500,
  overflowY: "auto",
};

const typographyStyle = {
  fontSize: "16px",
  fontFamily: "Arial, sans-serif",
  fontWeight: "normal",
  marginTop: "20px",
};

function Home() {
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
              <Typography variant="body1" style={typographyStyle} component="p">
                Cultivating innovative solutions is ingrained in my DNA. I
                spearheaded a pioneering Software as a Service (SaaS) solution
                tailored for agencies distributing scholarship funds in early
                childhood education. This groundbreaking platform simplifies
                user and site account creation, hosting a dynamic application
                brimming with adaptable logic. Its core? To automate and
                expedite the labyrinthine application process, ensuring seamless
                approvals, revisions, and rejections.
              </Typography>
              <Typography variant="body1" style={typographyStyle} component="p">
                Beyond the realms of education, I ventured into uncharted
                territories of technology and nature. Fuelled by a zoologist's
                insight and a passion for birding, I engineered an intuitive
                bird watching application. Designed for novices, it democratizes
                birding, eliminating the need for scientific acumen or
                established protocols.
              </Typography>
              <Typography variant="body1" style={typographyStyle} component="p">
                As I set my sights on roles within medium to large SaaS
                enterprises, I bring a zeal for crafting code that's both
                extensible and efficient. My prowess spans front-end to
                back-end, complemented by a robust background in testing
                frameworks. I strive for continuous growth and collaboration,
                where each project becomes a milestone in an evolving journey.
              </Typography>
              <Typography variant="body1" style={typographyStyle} component="p">
                Off the screen, you'll find me exploring diverse interests—from
                strolls with my canine companion to navigating the realms of
                Baldur's Gate 3. Gourmet dining and nurturing green spaces also
                captivate my attention, offering a balanced perspective that
                enriches my approach to development.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
export default Home;
