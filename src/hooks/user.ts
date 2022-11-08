import { useState } from "react";
import { User, Channel, Custodian } from "types";

interface HookOutput {
    user: User | undefined,
    error: object,
    setUser: Function,
    isLoadingUser: boolean
}

// TODO: Add actual jsonschema validation here. I want this to work at runtime.
// The fetch function should be a stand alone stubable HTTP request that gets called
// within a hook.

const getUser = (): User => {
    // This is just a standin for an actual HTTP request
    const custodian: Custodian = { "provider": "uphold" }
    const channels: Channel[] = [{ channel_identifier: "twitter@derp#something" }]
    
    const user: User = {
        first_name: "Demo",
        last_name: "User",
        email: "demo@user.com",
        channels,
        custodian
    }

    return user
}

export default function useUser(): HookOutput {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<User | undefined>(undefined);

    if (!user) {
        setLoading(true)
        setUser(getUser())
        setLoading(false)
    }

    return {
        user, error: {}, setUser, isLoadingUser: loading
    }
}