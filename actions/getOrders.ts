import db from "@/libs/db"

export default async function getOrders() {
 try {
  const orders = await db.order.findMany({
   include: {
    user: true
   },
   orderBy: {
    createDate: "desc"
   }
  })

  return orders
 } catch (error: any) {
  throw new Error(error)
 }
}