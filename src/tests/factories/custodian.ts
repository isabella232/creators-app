import { Custodian } from "types"

const custodianFactory = (custodian?: Partial<Custodian>): Custodian => {
    return { provider: "uphold"}
}

export default custodianFactory