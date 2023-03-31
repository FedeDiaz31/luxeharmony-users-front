import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({ product }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          className="tab"
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="BODY" {...a11yProps(0)} />
          <Tab label="NECK" {...a11yProps(1)} />
          <Tab label="HARDWARE" {...a11yProps(2)} />
          <Tab label="ELECTRONICS" {...a11yProps(3)} />

          <Tab label="MISCELLANEOUS" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className="grid grid-cols-2  tablet:grid-cols-4  ">
          <div>
            <div className="font-semibold ">Body Style </div>
            {product.detail.bodyStyle}
          </div>
          <div>
            <div className="font-semibold ">Body Shape </div>
            <div>{product.detail.bodyShape}</div>
          </div>
          <div className="mt-4 tablet:mt-0">
            <div className="font-semibold ">Body Material </div>
            <div>{product.detail.bodyMaterial}</div>
          </div>
          <div className="mt-4 tablet:mt-0">
            <div className="font-semibold ">Body Finish </div>
            <div>{product.detail.bodyFinish}</div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="grid grid-cols-2 tablet:grid-cols-3 pb-4">
          <div>
            <div className="font-semibold ">Profile </div>
            {product.detail.profile}
          </div>
          <div>
            <div className="font-semibold ">Fingerboard Radius </div>
            <div>{product.detail.fingerboardRadius}</div>
          </div>
          <div>
            <div className="font-semibold ">Nut Material </div>
            <div>{product.detail.nutMaterial}</div>
          </div>
        </div>{" "}
        <div className="grid grid-cols-2 tablet:grid-cols-3 pb-4 ">
          <div>
            <div className="font-semibold ">Scale Length </div>
            <div>628.65 mm / 24.75 in</div>
          </div>
          <div>
            <div className="font-semibold ">Fret Count </div>
            <div>{product.detail.fretCount}</div>
          </div>
          <div>
            <div className="font-semibold ">Nut Width </div>
            <div>{product.detail.nutWidth}</div>
          </div>
        </div>{" "}
        <div className="grid grid-cols-2 pb-4 tablet:grid-cols-3 ">
          <div>
            <div className="font-semibold ">fingerboard Material </div>
            {product.detail.fingerBoardMaterial}
          </div>
          <div>
            <div className="font-semibold ">Frets </div>
            <div>{product.detail.frets}</div>
          </div>
          <div>
            <div className="font-semibold ">End Of Board Width </div>
            <div>{product.detail.endOfBoardWidth}</div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className="grid grid-cols-2 pb-4 tablet:grid-cols-4">
          <div className="mb-4">
            <div className="font-semibold ">Finish</div>
            {product.detail.finish}
          </div>
          <div className="mb-4">
            <div className="font-semibold ">Pickguard </div>
            <div className="w-[80%]">{product.detail.pickguard}</div>
          </div>
          <div>
            <div className="font-semibold ">Control Knobs </div>
            <div>{product.detail.controlKnobs}</div>
          </div>
          <div>
            <div className="font-semibold ">Bridge </div>
            <div>{product.detail.bridge}</div>
          </div>
        </div>{" "}
        <div className="grid grid-cols-2 pb-4 tablet:grid-cols-4 ">
          <div>
            <div className="font-semibold ">Truss Rod </div>
            {product.detail.trussRod}
          </div>
          <div className="mb-4">
            <div className="font-semibold ">Strap Buttons </div>
            <div>{product.detail.strapButtons}</div>
          </div>
          <div>
            <div className="font-semibold ">Tunning Machines </div>
            <div>{product.detail.tunningMachines}</div>
          </div>
          <div>
            <div className="font-semibold ">Truss Rod Cover</div>
            <div>{product.detail.trussRodCover}</div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div className="columns-2 tablet:columns-3 grid grid-cols-3 mb-4">
          <div>
            <div className="font-semibold ">Bridge Pickup</div>
            {product.detail.bridgePickup}
          </div>
          <div>
            <div className="font-semibold ">Controls</div>
            <div>{product.detail.controls}</div>
          </div>
          <div>
            <div className="font-semibold ">Output Jack </div>
            <div>{product.detail.outputJack}"</div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <div className="columns-2 tablet:columns-3 grid grid-cols-3 mb-4">
          <div>
            <div className="font-semibold ">String Gauge</div>
            {product.detail.stringGauge}
          </div>
          <div>
            <div className="font-semibold ">Case</div>
            <div>{product.detail.case}</div>
          </div>
          <div>
            <div className="font-semibold ">Accessories </div>
            <div>{product.detail.accessories}</div>
          </div>
        </div>
      </TabPanel>
    </Box>
  );
}
