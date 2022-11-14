import Page from './index';
import { getUser } from 'hooks/user'

export default {
  title: 'AppElements/Home/index',
  component: Page,
  parameters: {}
};

const user = getUser()

export const Desktop = (args) => <Page {...args} user={user} />