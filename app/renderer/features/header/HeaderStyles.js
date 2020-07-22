import { headerHeight } from "../../styles/constants"
import {colors} from "../../styles/palette"

export const HeaderWrap = {
    height: headerHeight,
    maxHeight: headerHeight,
    
    flexDirection: "row",
    flexGrow: "1",

    borderBottom: "solid " + colors.outline + " 1px",

    backgroundColor: colors.background,

    listStyleType: "none",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif"    
}

export const HeaderItem = {
    padding: "8px 16px",
    border: "solid " + colors.outline,
    borderWidth: "0"
}

export const HeaderSidebar = {
    width: "300px",
    boxSizing: "border-box"

}

export const HeaderMenuSubText = {
    lineHeight: "normal",
    color: colors.subtext
}

export const HeaderMenuMainText = {
    lineHeight: "normal",
    color: "black",
    marginLeft: "6px"
}