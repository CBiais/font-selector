import { useState } from 'react';
import Color from '../color/Color';

export default function BgColorBox({updateColors}) {
    const [backgroundHex, setBackgroundHex] = useState("000000");
    
    const backgroundColor = new Color(backgroundHex);
    const { textColor } = backgroundColor;

    const chooseFontColor = (bgColor) => {
        setBackgroundHex(bgColor.slice(1));
        updateColors(bgColor, '#' + textColor);
    }

    return (
        <>
            <input type="color" value={"#" + backgroundHex} onChange={e => chooseFontColor(e.target.value)}/>
        </>
    );
}
