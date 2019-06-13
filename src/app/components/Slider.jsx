import React from "react";
import Slider from "@material-ui/lab/Slider";
import { withStyles } from "@material-ui/core";
import { fade } from "@material-ui/core/styles";

const StyledSlider = withStyles({
  thumb: {
    height: 16,
    width: 16,
    backgroundColor: "#fff",
    border: "2px solid"
  },
  track: {
    height: 2,
    border: "2px solid",
    borderRadius: 4
  }
})(Slider);

const CustomSlider = () => {
  let [value, setValue] = React.useState(2);

  const handleChange = (event, value) => {
    setValue(value);
  };

  return (
    <div className="relative">
      <div className="flex flex-middle flex-space-between">
        <samll className="pointer" onClick={() => handleChange(null, 0)}>
          Mellow
        </samll>
        <samll
          className="pointer"
          onClick={() => handleChange(null, 1)}
          style={{ marginLeft: "-18px" }}
        >
          Low
        </samll>
        <samll className="pointer" onClick={() => handleChange(null, 2)}>
          Medium
        </samll>
        <samll
          className="pointer"
          onClick={() => handleChange(null, 3)}
          style={{ marginRight: "-14px" }}
        >
          High
        </samll>
        <samll className="pointer" onClick={() => handleChange(null, 4)}>
          Critical
        </samll>
      </div>
      <div className="flex flex-space-between">
        <small style={{ paddingBottom: "8px", fontSize: "8px" }}>|</small>
        <small style={{ paddingBottom: "8px", fontSize: "8px" }}>|</small>
        <small style={{ paddingBottom: "8px", fontSize: "8px" }}>|</small>
        <small style={{ paddingBottom: "8px", fontSize: "8px" }}>|</small>
        <small style={{ paddingBottom: "8px", fontSize: "8px" }}>|</small>
      </div>
      <StyledSlider
        component="div"
        value={value}
        min={0}
        max={4}
        step={1}
        onChange={handleChange}
      />
    </div>
  );
};

export default CustomSlider;
