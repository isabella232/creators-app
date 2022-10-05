import { Card, Section, Divider } from "@components/PageElements"

export default function Account() {
    return (
        <Card header='Account Settings'>
            <Section header="Contact Information"/>
            <Divider />
            <Section header="Two-factor Authentication" />
            <Section header="Authenticator App" />
            <Section header="Hardware security keys" />
            <Divider />
            <Section header="Delete Account" />
        </Card>
    )
}

