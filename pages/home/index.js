
const Card = ({ children }) => {
  return (
    <div className='mt-6 md:mt-0'>
      <div className='shadow overflow-hidden sm:rounded-md'>
        <div className='px-6 bg-white space-y-6 sm:p-6'>{children}</div>
      </div>
    </div>
  )
}

const Balance = ({ balance = "0.00" }) => {
  return (
    <div>
      <div className='text-lg font-medium uppercase'>Balance</div>
      <div className='flex items-center'>
        <div className='pr-3 text-5xl mb-2 font-normal'>{balance}</div>
        <div className='text-small'>BAT</div>
      </div>
      <div className='font-medium text-xs'>Next Deposit Date: TBD</div>
    </div>
  )
}

const Custodian = ({ balance = "0.00" }) => {
  return (
    <div>
      <div>
        <div className='text-lg font-bold'>Account for BAT Payment</div>
        <div className='font-light text-s'>Connect a Custodial Account to receive contributions and other payments.</div>
        <div className='flex flex-col items-start'></div>
        <button>Gemini</button>
        <button>Uphold</button>
        <button>Bitflyer</button>
      </div>
    </div>
  )
}

export default function Home({ referrals = true }) {
  const colClass = referrals ? 'md:grid-cols-2' : 'md:grid-cols-3'
  const className = `md:grid ${colClass} md:gap-3`
  return (
    <div>
      <div className={className}>
        <Card><Balance /></Card>
        <Card><Custodian /></Card>
        {referrals && <Card>Referrals</Card>}
      </div>
      <div className='mt-10 md:grid md:grid-cols-1 md:gap-3'>
        <Card>Channel</Card>
        <Card>Channel</Card>
      </div>
    </div>
  )
}
