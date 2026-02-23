import { useContext } from "react";
import { Context } from "../context";

function Color() {
    const {darkMode} = useContext(Context);

    interface ColorSet {
        background: string,
        text: string
    }

    const light : ColorSet = {
        background: "#FFFFFF",
        text: "#0E0D0D"
    }
    const dark : ColorSet = {
        background: "#181717",
        text: "#FFFFFF"
    }
    
    return darkMode ? dark : light
}

export default Color;
