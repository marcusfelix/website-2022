import { AppWindow, ArrowSquareOut, Mouse } from "phosphor-react"

import { useState } from "react"

type Props = {
  url: string,
  mobile: boolean | null
}

export default function Demo(props: Props){
  const [enable, setEnabled] = useState(false)

  return <div className="flex flex-col gap-2">
    <div className="h-[845px] w-full flex items-center justify-center bg-gray-100">
      <iframe src={props.url} className={"h-full w-full " + (props.mobile ? "max-w-sm " : "") + (enable ? "pointer-events-auto" : "pointer-events-none")}></iframe>
    </div>
    <div className="flex gap-6 justify-center p-4">
      {props.mobile ? null : <AppWindow size={28}/>}
      <Mouse size={28} className={enable ? "text-black cursor-pointer" : "text-gray-300 cursor-pointer"} onClick={() => setEnabled(!enable)}/>
      <a href={props.url} target="_blank"><ArrowSquareOut size={28}/></a>
    </div>
  </div>
}