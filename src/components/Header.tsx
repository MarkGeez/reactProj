import {Button} from './Button'

export function Header(){
  return (
  <header className="flex items-center justify-between">
    <div className="flex flex-col gap-1 ">
      <h1 className="text-3xl font-bold">habit tracker</h1>
      <span className="text-zinc-500 text-sm ">1 / 1 done today</span>
    </div>
    <div className="flex flex-col gap-1 items-end">
      <span>April 6 - 12</span>
      <div className="flex items-center gap-3">
        <Button>prev</Button>
        <Button>next</Button>
      </div>
      </div>                         
  </header>
  )
}