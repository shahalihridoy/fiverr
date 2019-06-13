import React from "react";
import {
  Card,
  FormControlLabel,
  Checkbox,
  TextField,
  Divider,
  Button
} from "@material-ui/core";
import CustomSlider from "../components/Slider";

const Demo = () => {
  return (
    <div>
      <Card className="demo mt-24" elevation={3}>
        <div className="demo__header">
          <p className="m-0 text-primary">NEW CASE</p>
          <h3 className="m-0">Status and Notifications</h3>
        </div>

        <div className="mt-24">
          <p className="m-0 pb-">Notify</p>
          <div className="flex flex-middle flex-space-between">
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="Checkbox"
            />
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="Checkbox"
            />
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="Checkbox"
            />
          </div>
        </div>
        <div className="mt-24">
          <p className="m-0 pb-8">Urgency</p>
          <CustomSlider />
        </div>
        <div className="mt-24 pt-16">
          <p className="m-0 pb-8">Other details</p>
          <TextField
            variant="outlined"
            multiline
            rows={3}
            className="w-100"
            placeholder="Incurred charges were not discussed yet"
          />
        </div>
        <div className="mt-16">
          <Divider />
        </div>
        <div className="mt-16 flex flex-end">
          <Button
            className="capitalize"
            variant="contained"
            size="large"
            color="primary"
          >
            submit case
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Demo;
