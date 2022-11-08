import { Card, Section, Divider } from "components/PageElements"
import { TextField } from "components/FormElements"

export default function AccountSettings() {
    return (
        <Card heading='Account Settings'>
            <Section heading="Contact Information" className="flex flex-col">
                <TextField id="name" label="Name" />
                <TextField id="emal" label="Email" />
            </Section>

            <Divider />
            <Section heading="Two-factor Authentication" />
            <Section heading="Authenticator App" />
            <Section heading="Hardware security keys" />
            <Divider />
            <Section heading="Delete Account" />
        </Card>
    )
}