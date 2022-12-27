import { Component } from "react";
import BgColorBox from "../bg-color-box/bg-color-box";
import StyledSelector from "../styled-selector/styled-selector";

class FontContainer extends Component {
  constructor() {
    super();
    this.state = {
      chosenFont: "",
      textColor: "#000000",
      backgroundColor: "#FFFFFF",
    };
  }

  addFontImport = (font) => {
    if (font.isGoogleFont) {
      let url = "https://fonts.googleapis.com/css?family=";
      url += font.label.replaceAll(" ", "+");
      let link = document.createElement("link");
      link.href = url;
      link.rel = "stylesheet";
      link.type = "text/css";
      const linkExists = document.querySelector(
        `link[href="${link.href}"][rel="${link.rel}"]`
      );

      if (!linkExists || linkExists.length === 0) {
        document.head.appendChild(link);
      }
    }
  };

  handleFontInputChange = (newValue) => {
    this.setState({
      chosenFont: newValue.label,
    });
    this.addFontImport(newValue);
  };

  updateColors = (bgColor, textColor) => {
    this.setState({ textColor: textColor, backgroundColor: bgColor });
  };

  render() {
    return (
      <>
        <h1>Font Selector 3.0</h1>

        <h2>Choose or type your font below</h2>
        <StyledSelector handleChangeParent={this.handleFontInputChange} />

        <h2>Choose a background color</h2>

        <BgColorBox updateColors={this.updateColors} />
        <p
          style={{
            fontFamily: this.state.chosenFont,
            color: this.state.textColor,
            backgroundColor: this.state.backgroundColor,
          }}
        >
          Lorem ipsum doloaur sit amet, consectetur adipiscing elit. Fusce
          malesuada sit amet orci at elementum. Morbi odio odio, eleifend sit
          amet enim luctus, volutpat lobortis diam. Ut luctus, ex vel posuere
          cursus, tellus libero rutrum felis, ac facilisis lorem massa quis
          ante. Suspendisse semper, libero vitae efficitur tincidunt, eros nisi
          euismod lacus, ac auctor ante augue eget nisi. Duis eros justo, semper
          nec dolor ac, semper commodo mi. Fusce hendrerit elit eu elit dapibus
          dignissim. Pellentesque lobortis suscipit risus. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Praesent tincidunt eros eget risus
          pharetra, ac varius ante aliquet. Fusce convallis libero porta mi
          fringilla rutrum. Cras sed fermentum velit.
        </p>
      </>
    );
  }
}

export default FontContainer;
