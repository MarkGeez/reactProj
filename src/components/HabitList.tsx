import {Button} from "./Button"
import { eachDayOfInterval, endOfWeek, format, isFuture, startOfWeek } from "date-fns"

export type Habit= {id : string; name: string}

type HabitListProps = { 
    habits: Habit[],
    deleteHabit: (id:string) => void
}
export function HabitList({habits, deleteHabit} : HabitListProps){
    if (habits.length === 0){
        return<h1>NULL</h1>
    }
    return ( 
            <div className="flex flex-col gap-3"> 
            {habits.map(habit =>(
            <HabitItem deleteHabit={deleteHabit} key={habit.id} habit={habit} />))}
            </div>
    )
}
type HabitItemProps = {
    habit : Habit
    deleteHabit : (id:string) => void
}

function HabitItem({habit, deleteHabit} : HabitItemProps){
    const visibleDate = eachDayOfInterval({
        start: startOfWeek(new Date(), { weekStartsOn: 1}), 
    end: endOfWeek(new Date(), { weekStartsOn: 1})})
    return(<div className="rounded-xl  bg-zinc-800 p-4 flex flex-col  gap-3">
        <div className="flex items-center justify-between">
        <div className="flex gap-3 items-center">
            <span className="text-white font-medium">{habit.name}</span>
                        <span className="text-sm text-amber-400">{habit.name}</span>
        </div>
        <Button onClick={() => deleteHabit(habit.id)} variant="ghost-destructive">Delete</Button>
        </div>
        <div className="flex gap-2">{visibleDate.map(date => (<Button className="flex flex-1 flex-col" key={date.toDateString()} disabled={isFuture(date)}>
            <span className="font-medium">{format(date,'EEE')}</span>
            <span className="font-small">{format(date,'d')}</span>
            
            </Button>))}</div>
    </div>)
}