import Image from "next/image";
import chart from 'public/images/CHART.svg'
import { Card } from "components/PageElements"

export default function Insights() {
    return (
        <Card heading="Insights">
            <div className="flex justify-center">
                <Image src={chart} />
            </div>
        </Card>
    )
}
