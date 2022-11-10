import Page from './index';

export default {
  title: 'AppElements/Home/Channels',
  component: Page,
  parameters: {}
};

export const Desktop = (args) => <Page {...args} channels={[]} />