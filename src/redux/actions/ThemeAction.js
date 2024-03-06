export const toggleTheme = (theme) => {
    return {
        type: "TOGGLE_THEME",
        payload: !theme,
    }
}