import AdminLayout from "../../layouts/adminLayout"

export default function Home() { 
  return <div></div>
}

Home.getLayout = (page) => <AdminLayout title="Admin Home">{page}</AdminLayout>
