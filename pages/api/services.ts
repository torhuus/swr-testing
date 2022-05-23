import {prisma} from '../../lib/prisma'

export default async function handle(req: any, res: any) {

  if(req.method === "POST"){
    const services = await prisma.service.create({
      data: {
        title: req.body
      }
    })
    return res.status(200).json(services)
  }

  if(req.method === "GET") {
  const services = await prisma.service.findMany()
  res.status(200).json(services)
  }
}
