import I18n from 'react-native-i18n';

var tr = require('./tr.json');
var en = require('./en.json');

I18n.fallbacks = true;
I18n.translations = { tr, en };

export default I18n;