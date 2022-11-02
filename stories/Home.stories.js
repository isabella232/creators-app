import Page from '../components/AppElements/Signup';
import '../styles/global.css';

export default {
  title: 'AppElements/Signup',
  component: Page,
  parameters: {}
};

export const Desktop = (args) => <Page {...args} />