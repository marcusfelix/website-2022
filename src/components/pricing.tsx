import { Check, Minus, Play, Plus } from "phosphor-react";

import { useState } from "react";

type Props = {
  title: string,
  expanded?: boolean,
  selected?: string
}

export default function Pricing(props: Props){
  const [mode, setMode] = useState("monthly")
  const [selected, setSelected] = useState(props.selected ?? "deploy")
  const [expanded, setExpanded] = useState(props.expanded ?? true)

  return <div className="overflow-x-auto lg:overflow-y-hidden">
    <input name="product" type="hidden" value={selected}/>
    <div className="container mx-auto px-4 min-w-[1080px]">
      <div className="flex flex-col items-stretch shrink-0">
        <div className="flex flex-row gap-12">
          <div className="flex flex-auto w-64 flex-col gap-4">
            <h2 className="font-semibold text-4xl">{props.title}</h2>
            <p className="text-xl text-gray-400">You can change between plans any time to scale up and down your development needs</p>
            <div className="relative bg-gray-200 rounded-lg flex text-lg cursor-pointer border-4" onClick={() => setMode(mode == "monthly" ? "yearly" : "monthly")}>
              <div className={`absolute h-10 bg-white rounded-md transition-all ${(mode == "monthly" ? 'left-0 right-1/2' : 'right-0 left-1/2')}`}></div>
              <div className={`flex-1 flex items-center justify-center h-10 relative ${(mode == "monthly" ? 'text-black' : 'text-gray-400')}`}>Monthly</div>
              <div className={`flex-1 flex items-center justify-center h-10 relative ${(mode == "yearly" ? 'text-black' : 'text-gray-400')}`}>Yearly</div>
            </div>
          </div>
          <div className="flex flex-auto w-40 flex-col items-start gap-4 py-2 cursor-pointer" onClick={() => setSelected("deploy")}>
            <div className={`text-2xl font-semibold ${!props.selected || selected == 'deploy' ? 'bg-cyan-200 text-cyan-700' : 'bg-gray-200 text-gray-400'} px-4 py-2 rounded-xl`}>Deploy</div>
            <div className="flex items-end">
              <big className={`text-6xl font-bold ${!props.selected || selected == 'deploy' ? 'text-black' : 'text-gray-400'}`}>99</big>
              <small className="text-xl p-1 text-gray-400 font-semibold tracking-tight">/month</small>
            </div>
            <p className="text-lg text-gray-500">All you need to deploy and maintain a web app</p>
          </div>
          <div className="flex flex-auto w-40 flex-col items-start gap-4 py-2 cursor-pointer" onClick={() => setSelected("customize")}>
            <div  className={`text-2xl font-semibold ${!props.selected || selected == 'customize' ? 'bg-green-200 text-green-700' : 'bg-gray-200 text-gray-400'} px-4 py-2 rounded-xl`}>Customize</div>
            <div className="flex items-end">
              <big className={`text-6xl font-bold ${!props.selected || selected == 'customize' ? 'text-black' : 'text-gray-400'}`}>299</big>
              <small className="text-xl p-1 text-gray-400 font-semibold tracking-tight">/month</small>
            </div>
            <p className="text-lg text-gray-500">Your own custom mobile app into app stores</p>
          </div>
          <div className="flex flex-auto w-40 flex-col items-start gap-4 py-2 cursor-pointer" onClick={() => setSelected("studio")}>
            <div  className={`text-2xl font-semibold ${!props.selected || selected == 'studio' ? 'bg-purple-200 text-purple-700' : 'bg-gray-200 text-gray-400'} px-4 py-2 rounded-xl`}>Studio</div>
            <div className="flex items-end">
              <big className={`text-6xl font-bold ${!props.selected || selected == 'studio' ? 'text-black' : 'text-gray-400'}`}>1299</big>
              <small className="text-xl p-1 text-gray-400 font-semibold tracking-tight">/month</small>
            </div>
            <p className="text-lg text-gray-500">Full custom product development service to bring your unique idea to life</p>
          </div>
        </div>
        <div className={`relative transition-all overflow-hidden ${expanded ? 'h-[728px]' : 'h-40'}`}>
          <div className={`absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-white ${expanded ? 'hidden' : 'block'}`}></div>
          <div className="border-b-[1px] h-14 flex items-center text-lg gap-12 text-gray-400">
            <div className="flex-auto w-64 flex flex-col gap-4">
              <div className="">Hosting service ¹</div>
            </div>
            <div className="flex-auto w-40 flex items-center justify-center"><Check size={24}/></div>
            <div className="flex-auto w-40 flex items-center justify-center"><Check size={24}/></div>
            <div className="flex-auto w-40 flex items-center justify-center"><Check size={24}/></div>
          </div>
          <div className="border-b-[1px] h-14 flex items-center text-lg  gap-12 text-gray-400">
            <div className="flex-auto w-64 flex flex-col gap-4">
              <div className="">Content management ³</div>
            </div>
            <div className="flex-auto w-40 flex items-center justify-center"><Check size={24}/></div>
            <div className="flex-auto w-40 flex items-center justify-center"><Check size={24}/></div>
            <div className="flex-auto w-40 flex items-center justify-center"><Check size={24}/></div>
          </div>
          <div className="border-b-[1px] h-14 flex items-center text-lg  gap-12 text-gray-400">
            <div className="flex-auto w-64 flex flex-col gap-4">
              <div className="">Bugfix</div>
            </div>
            <div className="flex-auto w-40 flex items-center justify-center"><Check size={24}/></div>
            <div className="flex-auto w-40 flex items-center justify-center"><Check size={24}/></div>
            <div className="flex-auto w-40 flex items-center justify-center"><Check size={24}/></div>
          </div>
          <div className="border-b-[1px] h-14 flex items-center text-lg gap-12 text-gray-400">
            <div className="flex-auto w-64 flex flex-col gap-4">
              <div className="">Support</div>
            </div>
            <div className="flex-auto w-40 flex items-center justify-center"><Check size={24}/></div>
            <div className="flex-auto w-40 flex items-center justify-center"><Check size={24}/></div>
            <div className="flex-auto w-40 flex items-center justify-center"><Check size={24}/></div>
          </div>
          <div className="border-b-[1px] h-14 flex items-center text-lg gap-12 text-gray-400">
            <div className="flex-auto w-64 flex flex-col gap-4">
              <div className="">Appstore & Play Store publishing ⁴</div>
            </div>
            <div className="flex-auto w-40 flex items-center justify-center"></div>
            <div className="flex-auto w-40 flex items-center justify-center"><Check size={24}/></div>
            <div className="flex-auto w-40 flex items-center justify-center"><Check size={24}/></div>
          </div>
          
          <div className="border-b-[1px] h-14 flex items-center text-lg gap-12 text-gray-400">
            <div className="flex-auto w-64 flex flex-col gap-4">
              <div className="">Development time</div>
            </div>
            <div className="flex-auto w-40 flex items-center justify-center"></div>
            <div className="flex-auto w-40 flex items-center justify-center">5 hours</div>
            <div className="flex-auto w-40 flex items-center justify-center">Unlimited ⁶</div>
          </div>
          <div className="border-b-[1px] h-14 flex items-center text-lg gap-12 text-gray-400">
            <div className="flex-auto w-64 flex flex-col gap-4">
              <div className="">Branding</div>
            </div>
            <div className="flex-auto w-40 flex items-center justify-center"></div>
            <div className="flex-auto w-40 flex items-center justify-center"></div>
            <div className="flex-auto w-40 flex items-center justify-center"><Check size={24}/></div>
          </div>
          <div className="border-b-[1px] h-14 flex items-center text-lg gap-12 text-gray-400">
            <div className="flex-auto w-64 flex flex-col gap-4">
              <div className="">Prototyping ⁵</div>
            </div>
            <div className="flex-auto w-40 flex items-center justify-center"></div>
            <div className="flex-auto w-40 flex items-center justify-center"><Check size={24}/></div>
            <div className="flex-auto w-40 flex items-center justify-center"><Check size={24}/></div>
          </div>
          <div className="border-b-[1px] h-14 flex items-center text-lg gap-12 text-gray-400">
            <div className="flex-auto w-64 flex flex-col gap-4">
              <div className="">Landing pages</div>
            </div>
            <div className="flex-auto w-40 flex items-center justify-center"></div>
            <div className="flex-auto w-40 flex items-center justify-center"></div>
            <div className="flex-auto w-40 flex items-center justify-center"><Check size={24}/></div>
          </div>
          <div className="border-b-[1px] h-14 flex items-center text-lg gap-12 text-gray-400">
            <div className="flex-auto w-64 flex flex-col gap-4">
              <div className="">API integration</div>
            </div>
            <div className="flex-auto w-40 flex items-center justify-center"></div>
            <div className="flex-auto w-40 flex items-center justify-center"></div>
            <div className="flex-auto w-40 flex items-center justify-center"><Check size={24}/></div>
          </div>
        </div>
        {props.expanded !== undefined ? <div className="py-4 flex items-center justify-center">
          <button type="button" className="px-6 py-2 text-lg font-semibold text-gray-600 rounded-full" onClick={() => setExpanded(!expanded)}>{expanded ? <Minus size={28} /> : <Plus size={28} />}</button>
        </div> : null}
      </div>
    </div>
  </div>
}