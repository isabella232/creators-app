import { Banner as Type } from "types"

// NOTE: This is the generic form of the repeatable pattern
// TODO: Template out the creation of a factory.
const factory = (type?: Partial<Type>): Type => {
    return { url: "https://some.url"}
}

export default factory