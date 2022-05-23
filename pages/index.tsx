import type { NextPage } from 'next'
import { useState } from 'react'
import { mutate } from 'swr'
import { useServices } from '../hooks/serviceHooks'
import fetcher from '../lib/fetcher'

const Home: NextPage = () => {
const services = useServices()
const [serviceName, setServiceName] = useState("")

  if(services.isLoading){return (<>"Loading.."</>)} 
  if(services.isError) {return (<>"Failed to fetch data" {JSON.stringify(services.isError)}</>)} 


// Runs onclick of adding new service
const mutateService = async () => {
  const res = await fetcher('/api/services', {
      method: 'POST',
      body: serviceName
    })
  mutate('/api/services')
}

  return (
  <div className=''>
  <ul>
  {services.data.map((service:any) => (
  <li key={service.id}>{service.title}</li>
  ))}
  </ul>
  <div style={{background: 'rebeccapurple', padding: '24px'}}>
  <input type="text" name="serviceName" id="serviceName" placeholder="New service name" onChange={(e) => setServiceName(e.target.value)}/>
  <button onClick={() => mutateService()}>Add new service</button>
  </div>
  </div>
  )
}

export default Home
