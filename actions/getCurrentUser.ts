import { getServerSession } from "next-auth"
import { authOptions } from "@/pages/api/auth/[...nextauth]"
import db from "@/libs/db"

export async function getSession() {
 return await getServerSession(authOptions)
}

export default async function getCurrentUser() {
 try {
  const session = await getSession()

  if (!session?.user?.email) {
   return null
  }

  const currentUser = await db?.user.findUnique({
   where: {
    email: session?.user?.email
   },
   include: {
    orders: true
   }
  })

  if (!currentUser) {
   return null
  }

  return {
   ...currentUser,
   createdAt: currentUser.createdAt.toISOString(),
   updateAt: currentUser.updateAt.toISOString(),
   emailVerified: currentUser.emailVerified?.toISOString() || null
  }
 } catch (error: any) {
  console.log(error)
  return null
 }
}