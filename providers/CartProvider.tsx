"use client"

import { ReactNode, FC } from "react"
import { CartContextProvider } from "@/hooks/useCart"

interface CartProviderProps {
 children: ReactNode
}

const CartProvider: FC<CartProviderProps> = ({ children }) => {
 return <CartContextProvider>{children}</CartContextProvider>
}

export default CartProvider