import { Card, Section, Divider } from "@components/PageElements"
import { TextField } from "@components/FormElements"

export default function Account() {
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

