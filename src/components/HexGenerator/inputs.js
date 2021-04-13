const inputs = [
  {
    about: "width",
    text: "Width (px) :",
    type: "number",
    name: "width",
    placeholder: "width",
    value: "{state.width}",
  },
  {
    about: "Hex_color",
    text: "Hexagon color",
    type: "color",
    name: "color",
    placeholder: "",
    value: "{state.color}",
  },
  {
    about: "border",
    text: "Border",
    type: "checkbox",
    name: "border",
    placeholder: "",
    value: "",
  },
  {
    about: "border",
    text: "Border (px) :",
    type: "number",
    name: "border_width",
    placeholder: "border width",
    value: "{state.border_width}",
  },
  {
    about: "border",
    text: "Border color",
    type: "color",
    name: "border_color",
    placeholder: "",
    value: "{state.border_color}",
  },
  {
    about: "shadow",
    text: "Shadow",
    type: "checkbox",
    name: "shadow",
    placeholder: "",
    value: "",
  },
  {
    about: "shadow",
    text: "Shift right",
    type: "range",
    name: "shadow_right",
    placeholder: "",
    value: "{state.shadow_right}",
    min: "-100",
    max: "100",
    step: "1"
  },
  {
    about: "shadow",
    text: "Shift down",
    type: "range",
    name: "shadow_down",
    placeholder: "",
    value: "{state.shadow_down",
    min: "-100",
    max: "100",
    step: "1"
  },
  {
    about: "shadow",
    text: "Blur",
    type: "range",
    name: "shadow_blur",
    placeholder: "",
    value: "{state.shadow.blur}",
    min: "0",
    max: "50",
    step: "1"
  },
  {
    about: "shadow",
    text: "Opacity",
    type: "range",
    name: "shadow_opacity",
    placeholder: "",
    value: "{state.shadow_opacity",
    min: "0",
    max: "1",
    step: "0.1"
  },
  {
    about: "shadow",
    text: "Color",
    type: "color",
    name: "shadow_color",
    placeholder: "",
    value: "{state.shadow_color}",
  }
];

export default inputs;
