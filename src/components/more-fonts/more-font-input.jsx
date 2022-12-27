import { Component } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import getGoogleFontList from "../../services/google-fonts.service";
import printedFontList from "../../printed-font-list";

class MoreFontInput extends Component {
  constructor() {
    super();
    this.state = {
      newFont: null,
      googleFontNameList: [],
      fullList: [],
    };
  }

  componentDidMount() {
    getGoogleFontList().then((result) => {
      this.setState({
        fullList: printedFontList.concat(this.getGoogleFontNameList(result)),
      });
    });
  }

  getGoogleFontNameList = (googleList) => {
    return googleList.data.items.map((font) => ({
      name: font.family,
      provenance: "Google fonts",
    }));
  };

  handleChange = (event, newValue) => {
    this.setState({ newFont: newValue });
    this.props.handleChangeParent(newValue);
  };

  render() {
    return (
      <Autocomplete
        disablePortal
        id="more-font-input"
        value={this.state.newFont}
        options={this.state.fullList}
        getOptionLabel={(option) => option.name}
        sx={{ width: 300 }}
        onChange={this.handleChange}
        renderInput={(params) => <TextField {...params} label="Font" />}
      />
    );
  }
}

export default MoreFontInput;
