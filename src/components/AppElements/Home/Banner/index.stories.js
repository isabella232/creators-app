import Page from './index';

// TODO: Make this generic so we juse use paths instead of hard coded strings.

export default {
  title: 'AppElements/Home/Banner',
  component: Page,
  parameters: {}
};

export const Desktop = (args) => <Page {...args} channels={[]} />