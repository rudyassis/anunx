import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import MenuIcon from '@material-ui/icons/Menu'
import { Box, AppBar, Toolbar, Typography, IconButton, Button} from "@material-ui/core"


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles()

  return (
    <>
      <AppBar>
        <Toolbar>
          <IconButton edge='start' className={classes.menuButton} color='inherit'>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </>
  )
}