import { configure, setAddon, addDecorator } from '@storybook/react';
import infoAddon, { withInfo } from '@storybook/addon-info';
import { setOptions } from '@storybook/addon-options';
import { setIntlConfig, withIntl } from 'storybook-addon-intl';
import { addLocaleData } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import deLocaleData from 'react-intl/locale-data/de';

addLocaleData(enLocaleData);
addLocaleData(deLocaleData);

// Provide your messages
const messages = {
  en: {
    'button.label': 'Click me!',
    'title1': 'title one',
    'title2': 'title two',
    'placeholder1': 'placeholder one',
    'placeholder2': 'placeholder two',
  },
  de: {
    'button.label': '点击我',
    'title1': '标题 1',
    'title2': '标题 2',
    'placeholder1': '占位符 1',
    'placeholder2': '占位符 2',
  },
};

const getMessages = locale => messages[locale];

// Set intl configuration
setIntlConfig({
  locales: ['en', 'de'],
  defaultLocale: 'en',
  getMessages,
});

addDecorator(withInfo); 
addDecorator(withIntl);

setOptions({
  name: '@wealthfx/components',
  // url: 'https://bitbucket.global.standardchartered.com/projects/WTFX/repos/wealthfx-components-lib-js',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: false,
  sortStoriesByKind: true,
});

setAddon(infoAddon);

function loadStories() {
  require('./stories/form-controls.js');
}

configure(loadStories, module);
