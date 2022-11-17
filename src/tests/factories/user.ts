import { User } from "types"
import { faker } from '@faker-js/faker';
import custodianFactory from "./custodian";
import channelFactory from "./channel";

const userFactory =  (user?: Partial<User>): User => {
    return { first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), channels: [channelFactory()], custodian: custodianFactory() }
}

export default userFactory