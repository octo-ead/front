import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";
import Logo from "../../assets/images/octo-ead-2-coral.fw.png";

const useStyles = makeStyles({
  root: {
    display: "grid",
    "grid-template-columns": "1fr",
    backgroundColor: "#FF7F50",
    height: "100vh",
    justifyContent: "center",
    justifyItems: "center",
    alignContent: "center"
  },
  bigLogo: {
    width: 180,
    height: 180
  }
});

export const Home = () => {
  let className = useStyles();
  return (
    <>
      <Grid className={className.root}>
        <img alt="octo-ead" src={Logo} className={className.bigLogo} />
      </Grid>
    </>
  );
};
