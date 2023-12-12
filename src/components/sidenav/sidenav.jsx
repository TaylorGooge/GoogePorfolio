import * as React from "react";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "@mui/material/Link";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function SideNav() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Avatar
        alt="Taylor Googe"
        src="/img/IMG_0597.jpg"
        sx={{ width: "25%", height: "25%" }}
      />
      <Typography variant="subtitle1">Taylor Googe</Typography>

      <Typography variant="subtitle2">Full Stack Developer</Typography>
      <div>
        <Link href="https://github.com/taylorgooge" target="_blank">
          <GitHubIcon />
        </Link>
        <Link href="https://www.linkedin.com/in/taylorgooge/" target="_blank">
          <LinkedInIcon />
        </Link>
      </div>
    </Box>
  );
}
export default SideNav;
