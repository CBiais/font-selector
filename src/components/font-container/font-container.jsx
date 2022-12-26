import { Component } from "react";
import MoreFontInput from "../more-fonts/more-font-input";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import BgColorBox from "../bg-color-box/bg-color-box";
import printedFontList from '../../printed-font-list';
import StyledSelector from "../styled-selector/styled-selector";

class FontContainer extends Component {
    constructor() {
        super();
        this.state = {
            chosenFont: "Arial",
            chosenFont2: null,
            textColor: "#000000",
            backgroundColor: "#FFFFFF",
        }
    }

    addFontImport = (font) => {
        if (font.provenance === "Google fonts") {
            let url = "https://fonts.googleapis.com/css?family=";
            url += font.name.replace(" ", "+");
            let link = document.createElement('link')
            link.href = url;
            link.rel = "stylesheet";
            link.type =  "text/css";
            document.head.appendChild(link);
        };
    }

    handleFontInputChange = (value) => {
        this.setState({
            chosenFont: null,
            chosenFont2: value.name
        });
        this.addFontImport(value)
    }
  
    updateColors = (bgColor, textColor) => {
        this.setState({'textColor': textColor, 'backgroundColor': bgColor});
    };
    
    render() {
        return (
            <>
                <h1>Font Selector 2.0</h1>

                <h2>Choisissez parmi une liste de polices :</h2>
                <Select
                    value={this.state.chosenFont || "Arial"}
                    label="Font"
                    onChange={font => this.setState({ chosenFont: font.target?.value })}>
                { 
                    printedFontList.length > 0 &&
                    printedFontList.map((fontOptions, index) => 
                    <MenuItem key={index} value={fontOptions.label} style={{fontFamily:`'${fontOptions.label}'`}}>
                        {fontOptions.label}
                    </MenuItem>
                    )
                }
                </Select>

                <h2>Ou saisissez directement le nom de votre police :</h2>
                <MoreFontInput async handleChangeParent={this.handleFontInputChange}/>

                <h2>Test d'un nouveau selecteur :</h2>
                <StyledSelector/>

                <h2>Choisir une couleur de fond :</h2>

                <BgColorBox updateColors={this.updateColors} />
                <p style={{
                    fontFamily: (
                        this.state.chosenFont ||
                        this.state.chosenFont2
                    ),
                    color: this.state.textColor,
                    backgroundColor: this.state.backgroundColor
                }}>
                    font color : {this.state.textColor} <br/>
                    bg color : {this.state.backgroundColor} <br/>
                    
                    Lorem ipsum doloaur sit amet, consectetur adipiscing elit. Fusce malesuada sit amet orci at elementum. Morbi odio odio, eleifend
                    sit amet enim luctus, volutpat lobortis diam. Ut luctus, ex vel posuere cursus, tellus libero rutrum felis, ac facilisis lorem
                    massa quis ante. Suspendisse semper, libero vitae efficitur tincidunt, eros nisi euismod lacus, ac auctor ante augue eget nisi.
                    Duis eros justo, semper nec dolor ac, semper commodo mi. Fusce hendrerit elit eu elit dapibus dignissim. Pellentesque lobortis
                    suscipit risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt eros eget risus pharetra, ac varius
                    ante aliquet. Fusce convallis libero porta mi fringilla rutrum. Cras sed fermentum velit.
                </p>
            </>
        );
    }
}

export default FontContainer;