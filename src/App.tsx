import { Button } from "./components/Button"
import { HabitForm } from "./components/HabitForm"
import { Header } from "./components/Header"
import { HabitList, type Habit } from "./components/HabitList"
import { useState } from "react"
import { isSameDay } from "date-fns"

export default function App(){
  const [habits, setHabits]= useState<Habit[]>([])

  function addHabit(name : string){
    setHabits(curr => [...curr, {id : crypto.randomUUID(), name, completions:[]
    }])
  }
  
  function deleteHabit(id : string){
    setHabits(curr => curr.filter(h => h.id !== id))
  }

  function toggleHabit(id : string, date : Date){
    //use {} 
    setHabits(curr => 
      //h is habit
      curr.map(h => {
        if(h.id !== id) return h

        //have i done the task or not
        const alreadyDone = h.completions.some(c => isSameDay(c, date))
        //remove item from array based on the completion below
        const completions = alreadyDone 
        ? h.completions.filter(c => !isSameDay(c,date)) //remove it
        : [...h.completions,date] //add it

        return  {...h, completions}
      
      })
   )
  }

  return(
    <div className="max-2xl mx-auto p-4 flex flex-col gap-4">
      HabitProvider
      <Header></Header>
      <HabitForm addHabit={addHabit}/>
      <HabitList toggleHabit={toggleHabit} deleteHabit={deleteHabit} habits={habits}/>
    </div>
  )
}

