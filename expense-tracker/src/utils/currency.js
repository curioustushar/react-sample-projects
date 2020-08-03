import currencyMap from './currencyMap.json';
const lang =
  window.navigator.userLanguage || window.navigator.language || 'en-IN';

const getCountryCode = () => {
  let components = lang.split('_');
  if (components.length === 2) {
    return components.pop();
  }
  components = lang.split('-');
  if (components.length === 2) {
    return components.pop();
  }
  return lang;
};

const currency = currencyMap[getCountryCode()];
const foramatter = new Intl.NumberFormat(lang, {
  style: 'currency',
  currency,
});

const formatNumber = (number) => foramatter.format(number);

export default formatNumber;
