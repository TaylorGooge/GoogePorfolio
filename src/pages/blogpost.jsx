import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Nav from "../components/navigation/nav";
import SideNav from "../components/sidenav/sidenav";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import { blogPost } from "../api";

const paperStyle = {
  padding: 20,
  marginTop: 10,
  marginBottom: 10,
  height: 700,
  overflowY: "auto",
};

const BlogPost = () => {
  const { slug } = useParams();
  const [content, setContent] = useState(null);

  useEffect(() => {
    getPostContent();
  }, []);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  const getPostContent = async () => {
    let post = await blogPost(slug);
    setContent(post);
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
            {!content && <div>Error fetching this post please try again</div>}
            {content && (
              <Paper style={paperStyle}>
                <Paper
                  sx={{
                    position: "relative",
                    backgroundColor: "grey.800",
                    color: "#fff",
                    mb: 4,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundImage: `url(${content.featured_image})`,
                  }}
                >
                  {
                    <img
                      style={{ display: "none" }}
                      src={content.featured_image}
                      alt={content.featured_image_alt}
                    />
                  }
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      bottom: 0,
                      right: 0,
                      left: 0,
                      backgroundColor: "rgba(0,0,0,.3)",
                    }}
                  />
                  <Grid container>
                    <Grid item md={6}>
                      <Box
                        sx={{
                          position: "relative",
                          p: { xs: 3, md: 6 },
                          pr: { md: 0 },
                        }}
                      >
                        <Typography
                          component="h1"
                          variant="h3"
                          color="inherit"
                          gutterBottom
                        >
                          {content.title}
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Paper>

                <Grid
                  item
                  xs={12}
                  md={8}
                  sx={{
                    "& .markdown": {
                      py: 3,
                    },
                  }}
                >
                  <Typography variant="h2" gutterBottom>
                    {content.title}
                  </Typography>
                  <Divider />
                  <Typography variant="body1" gutterBottom>
                    <em>
                      {" "}
                      {formatDate(content.created)} by{" "}
                      {content.author.first_name} {content.author.last_name}
                    </em>
                  </Typography>

                  <div
                    className="blog-content"
                    dangerouslySetInnerHTML={{ __html: content.body }}
                  ></div>
                </Grid>
              </Paper>
            )}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default BlogPost;
