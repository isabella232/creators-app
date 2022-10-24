import Image from "next/image";
import chart from 'public/images/CHART.svg'
import { Card, Section } from "@components/PageElements"

export default function Insights() {
    return (
        <Card header="Insights">
            <p className="text-text-secondary text-text-default">
                <div className="flex justify-center">
                    <Image src={chart} />
                </div>
            </p>
        </Card>
    )
}
