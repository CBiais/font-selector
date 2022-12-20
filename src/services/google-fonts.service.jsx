import axios from 'axios';

const getGoogleFontList = async () => {
    return axios.get("https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyCKgFJoErKjJP9uw6vmuI2abTaG_mTDsyY")
}

export default getGoogleFontList;