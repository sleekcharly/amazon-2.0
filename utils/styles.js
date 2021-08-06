import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  navbar: {
    backgroundColor: "#203040",
    "& a": {
      color: "#ffffff",
      marginLeft: 10
    }
  },

  grow: {
    flexGrow: 1
  },

  main: {
    minHeight: "80vh"
  },

  footer: {
    marginTop: 10,
    textAlign: "center"
  },

  brand: {
    fontWeight: "bold",
    fontSize: "1.5rem"
  },

  section: {
    marginTop: 10
  },

  form: {
    maxWidth: 800,
    margin: "0 auto"
  },

  navbarButton: {
    color: "#ffffff",
    textTransform: "initial"
  }
});

export default useStyles;
