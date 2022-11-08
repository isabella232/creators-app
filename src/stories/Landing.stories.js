import Page from '../components/AppElements/Landing';
import '../styles/global.css';

export default {
  title: 'AppElements/Landing',
  component: Page,
  parameters: {}
};

export const Desktop = (args) => <Page {...args} />