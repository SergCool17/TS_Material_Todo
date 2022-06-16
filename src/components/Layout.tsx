import React from "react";

import { withStyles } from "@material-ui/core";

const styles = {
  root: {
    backgroundColor: "#f5f5f5",
    width: "620px",
    margin: "auto"
  },
  container: {
    padding: "20px"
  }
};

const Layout: React.FC = ({ children, classes }) => {
  return (
    <div className={classes.root}>
      <main className={classes.container}>{children}</main>
    </div>
  );
};

export default withStyles(styles)(Layout);
