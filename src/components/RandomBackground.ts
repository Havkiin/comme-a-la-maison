function setRandomBackgroundColor () {
    const randomColor = `hsl(${Math.random() * 360} 66% 66%)`;
    document.documentElement.style.setProperty('--bg-color', randomColor);
};

export default setRandomBackgroundColor;