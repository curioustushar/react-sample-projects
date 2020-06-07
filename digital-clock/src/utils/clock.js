import moment from 'moment'

const ALL_DATE_FORMATS = ['HH:mm:ss', 'LT', 'LTS', 'L', 'l', 'LL'];

function randDarkColor() {
    const lum = -0.25;
    let hex = String('#' + Math.random().toString(16).slice(2, 8).toUpperCase()).replace(/[^0-9a-f]/gi, '');
    if (hex.length < 6) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    let rgb = "#",
        c, i;
    for (i = 0; i < 3; i++) {
        c = parseInt(hex.substr(i * 2, 2), 16);
        c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
        rgb += ("00" + c).substr(c.length);
    }
    return rgb;
}

const getDateFormat = (i) => ALL_DATE_FORMATS[i] || ALL_DATE_FORMATS[0];
const getRandomColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16);
const getRandomDarkColor = () => randDarkColor();
const getRandomClockFormat = (i) => moment().format(getDateFormat(i));


const clock = {
  getRandomColor,
  getRandomDarkColor,
  getRandomClockFormat,
  maxFormats: ALL_DATE_FORMATS.length,
};

export default clock;