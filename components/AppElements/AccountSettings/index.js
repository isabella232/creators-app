import { Card, Section, Divider } from "@pageElements"
import { TextField } from "@formElements"

export default function AccountSettings() {
    return (
        <Card header='Account Settings'>
            <Section header="Contact Information" className="flex flex-col">
                <TextField id="name" label="Name" />
                <TextField id="emal" label="Email" />
            </Section>

            <Divider />
            <Section header="Two-factor Authentication" />
            <Section header="Authenticator App" />
            <Section header="Hardware security keys" />
            <Divider />
            <Section header="Delete Account" />
        </Card>
    )
}

