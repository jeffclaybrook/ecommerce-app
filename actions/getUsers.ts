import db from "@/libs/db"

export default async function getUsers() {
 try {
  const users = db?.user.findMany()
  return users
 } catch (error: any) {
  throw new Error(error)
 }
}