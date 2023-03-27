import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";

export default function NestedList() {
  const [openELectricMenu, setOpenElectricMenu] = React.useState(false);

  const handleClickElectric = () => {
    setOpenElectricMenu(!openELectricMenu);
  };

  const [openAcousticMenu, setOpenAcousticMenu] = React.useState(false);

  const handleClickAcoustic = () => {
    setOpenAcousticMenu(!openAcousticMenu);
  };

  const [openBassMenu, setOpenBassMenu] = React.useState(false);

  const handleClickBass = () => {
    setOpenBassMenu(!openBassMenu);
  };

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 720,
        bgcolor: "background.paper",
        minWidth: "80vw",
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          MENU
        </ListSubheader>
      }
    >
      {/* ELECTRIC MENU */}
      <ListItemButton sx={{ pl: 0 }} onClick={handleClickElectric}>
        <ListItemIcon></ListItemIcon>
        <ListItemText primary="ELECTRIC" />
        {openELectricMenu ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openELectricMenu} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 8 }}>
            <ListItemText primary="BY BODY STYLE" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 8 }}>
            <ListItemText primary="BY COLLECTION" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 8 }}>
            <ListItemText primary="SHOP AL ELECTRIC" />
          </ListItemButton>
        </List>
      </Collapse>

      {/* ACOUSTIC MENU */}
      <ListItemButton sx={{ pl: 0 }} onClick={handleClickAcoustic}>
        <ListItemIcon></ListItemIcon>
        <ListItemText primary="ACOUSTIC" />
        {openAcousticMenu ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openAcousticMenu} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 8 }}>
            <ListItemText primary="BY BODY STYLE" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 8 }}>
            <ListItemText primary="BY COLLECTION" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 8 }}>
            <ListItemText primary="SHOP AL ACOUSTIC" />
          </ListItemButton>
        </List>
      </Collapse>

      {/* BASS MENU */}
      <ListItemButton sx={{ pl: 0 }} onClick={handleClickBass}>
        <ListItemIcon></ListItemIcon>
        <ListItemText primary="BASS" />
        {openBassMenu ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openBassMenu} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 8 }}>
            <ListItemText primary="BY BODY STYLE" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 8 }}>
            <ListItemText primary="BY COLLECTION" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 8 }}>
            <ListItemText primary="SHOP AL BASS" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}
