import {prisma} from '../../../lib/prisma'

export default async function handle(req: any, res: any) {
  const {id} = req.query

  const service = await prisma.service.findFirst({
    where: {
      id: parseInt(id)
    }
  })

  if(service === null){
    res.status(404).json(`There was no data with an id of: ${id}`)
  } else {
  res.status(200).json(service)
  }
}
