import '../src/styles/global.css';
import * as nextImage from "next/image"
import { themes } from '@storybook/theming';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  darkMode: {
    // Override the default dark theme
    dark: { ...themes.dark},
    // Override the default light theme
    light: { ...themes.normal},
    classTarget: 'html'

  }
};

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => {
    return <img {...props} />;
  },
});
