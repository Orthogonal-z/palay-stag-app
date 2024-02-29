


export const handleShowLimitedStrings = (text, textLength, substringLength) => {
    if (text.length > textLength) {
        return text.substring(0, substringLength) + '...';
    } else {
        return text;
    }
};