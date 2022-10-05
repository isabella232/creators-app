import Image from "next/image";
import chart from 'public/images/CHART.svg'
import { Card, Section } from "@components/PageElements"
import Channels from "@components/Channels";
import Banner from "@components/Banner";
import AccountServices from "@components/AccountServices";
import Insights from "@components/Insights";

export default function Home() {
  return (
    <>
      <AccountServices />
      <Insights />
      <Banner/>
      <Channels/>
    </>
  )
}
