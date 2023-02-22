import { useContext } from "react";
import { Context } from "../context";

export default () =>{
    const {darkMode, changeTheme} = useContext(Context);

    interface set {
        background: string,
        text: string
    }

    const light : set = {
        background: "#FFFFFF",
        text: "#0E0D0D"
    }
    const dark : set = {
        background: "#181717",
        text: "#FFFFFF"
    }
    
    return darkMode ? dark : light
}
