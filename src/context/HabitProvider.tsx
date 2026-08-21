import { createContext, type ReactNode } from "react";

//can access any value stated on all of the components in the app tsx because of wrappping around
type Context= {
    name : string
}
//etiher null for the value of HabitContext or any value of the COntext>
const HabitContext= createContext <null | Context>(null)

type HabitProviderProps= {
    children : ReactNode
}

export function HabitProvider({children}: HabitProviderProps){
    return <HabitContext value={{name:"kyle"}}>{children}</HabitContext>
}