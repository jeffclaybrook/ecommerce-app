import db from "@/libs/db"

export interface IParams {
 productId?: string
}

export default async function getProductById(params: IParams) {
 try {
  const { productId } = params

  const product = await db.product.findUnique({
   where: {
    id: productId
   },
   include: {
    reviews: {
     include: {
      user: true
     },
     orderBy: {
      createdDate: "desc"
     }
    }
   }
  })

  if (!product) {
   return null
  }

  return product
 } catch (error: any) {
  throw new Error(error)
 }
}