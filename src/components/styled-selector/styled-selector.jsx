import { Component } from "react";
import Select from "react-select";
import printedFontList from "../../printed-font-list";
import getGoogleFontList from "../../services/google-fonts.service";

class StyledSelector extends Component {
  constructor() {
    super();
    this.state = {
      newFont: null,
      googleFontNameList: [],
      fullList: [],
    };
  }

  getGoogleFontNameList = (googleList) => {
    return googleList.data.items.map((font) => ({
      label: font.family,
      isGoogleFont: true,
    }));
  };

  componentDidMount() {
    getGoogleFontList().then((result) => {
      this.setState({
        fullList: [
          {
            label: "Native Fonts",
            options: [
              { label: "serif" },
              { label: "sans-serif" },
              { label: "cursive" },
            ],
          },
          {
            label: "Standard Fonts",
            options: printedFontList,
          },
          {
            label: "Google Fonts",
            options: this.getGoogleFontNameList(result),
          },
        ],
      });
    });
  }

  getGoogleList() {
    return this.state.fullList;
  }

  fontStyles = {
    control: (styles) => ({
      ...styles,
      fontSize: "1.5rem",
      backgroundColor: "white",
      width: "20vw",
    }),
    option: (styles, { data }) => {
      return {
        ...styles,
        fontSize: "1.5rem",
        fontFamily: `${data.label}, sans-serif`,
        backgroundColor: "white",
        color: "black",
      };
    },
  };

  render() {
    return (
      <>
        <Select
          options={this.state.fullList}
          styles={this.fontStyles}
          placeholder={"Saisissez votre police..."}
          onChange={this.props.handleChangeParent}
        />
      </>
    );
  }
}

export default StyledSelector;
