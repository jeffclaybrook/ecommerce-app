import { FC } from "react"

interface NullDataProps {
 title: string
}

const NullData: FC<NullDataProps> = ({ title }) => {
 return (
  <div className="w-full h-[50vh] flex items-center justify-center text-xl md:text-2xl">
   <p className="font-medium">{title}</p>
  </div>
 )
}

export default NullData