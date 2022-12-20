import './App.scss';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import printedFontList from './printed-font-list';
import { useState } from 'react';
import googleResult from './google-result';
import MoreFontInput from './components/more-fonts/more-font-input';
// import getGoogleFontList from './services/google-fonts.service';
import FontContainer from './components/font-container/font-container';

function App() {
  
  // const googleFontNameList = [];
  // const fontNameList = printedFontList;
  function getGoogleFontNameList() {
    return googleResult.items.map(font => font.family);
    // if (googleFontNameList.length > 0) return;

    // getGoogleFontList().then((googleFontList) => {
    //   googleFontNameList.push(...googleFontList.data.items.map(font => { return {"name": font.family, "provenance": "Google Fonts"}}));
    //   fontNameList.push(...googleFontNameList);
    // }) ;
  }
  const googleFontNameList = getGoogleFontNameList();

  // console.log("printed", printedFontList);
  const [chosenFont, setChosenFont] = useState("Arial");
  const [chosenFont2, setChosenFont2] = useState(null);

  const addFontImport = (font) => {
    if (font.provenance === "Native fonts") return;
    let url = "https://fonts.googleapis.com/css?family=";
    url += font.replace(" ", "+");
    url.concat(":400");
    let link = document.createElement('link')
    link.href = url;
    link.rel = "stylesheet";
    link.type =  "text/css";
    document.head.appendChild(link);
  }

  function handleFontInputChange(value) {
    setChosenFont(null);
    addFontImport(value)
    setChosenFont2(value);
  }

  return (
    <div className="App">
      <header className="App-header">

      <FontContainer/>

        <p>Saisissez le nom de votre police :</p>

        <MoreFontInput fontList={googleFontNameList} handleChangeParent={handleFontInputChange}></MoreFontInput>

        <p>Ou choisissez parmi une liste de polices :</p>
        <Select
          value={chosenFont || "Arial"}
          label="Font"
          onChange={(font) => setChosenFont(font.target?.value)}
        >
          { 
            printedFontList.length > 0 &&
              printedFontList.map((fontOptions, index) => 
                  <MenuItem key={index} value={fontOptions.name} style={{fontFamily:`'${fontOptions.name}'`}}>
                {fontOptions.name}
                  </MenuItem>
              )
          }

        </Select>
        <p style={{fontFamily: (chosenFont || chosenFont2)}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada sit amet orci at elementum. Morbi odio odio, eleifend sit amet enim luctus, volutpat lobortis diam. Ut luctus, ex vel posuere cursus, tellus libero rutrum felis, ac facilisis lorem massa quis ante. Suspendisse semper, libero vitae efficitur tincidunt, eros nisi euismod lacus, ac auctor ante augue eget nisi. Duis eros justo, semper nec dolor ac, semper commodo mi. Fusce hendrerit elit eu elit dapibus dignissim. Pellentesque lobortis suscipit risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt eros eget risus pharetra, ac varius ante aliquet. Fusce convallis libero porta mi fringilla rutrum. Cras sed fermentum velit.</p>
      </header>
    </div>
  );
}

export default App;
