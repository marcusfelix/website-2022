import { ArrowRight, Check, Circle, CircleDashed, Copy } from "phosphor-react";

import { useState } from "react";

type Props = {
  slug: string
}

export default function Checkout(props: Props){
  const [selected, setSelected] = useState("deploy")

  return <div className="flex flex-col gap-2">
    <div className="flex flex-col border-2 rounded-xl">
      <div className={`h-14 flex px-4 gap-4 items-center cursor-pointer ${selected === "deploy" ? '' : 'text-gray-400'}`} onClick={() => setSelected("deploy")}>
        {selected == "deploy" ? <Circle size={28}/> : <CircleDashed size={28}/>}
        <span className="flex-1 text-xl">Deploy</span>
        <big className="font-bold text-2xl">199/m</big>
      </div>
      <ul className={`flex flex-col gap-2 px-14 text-gray-400 transition-all overflow-hidden ${selected === "deploy" ? 'max-h-[360px] pb-4' : 'max-h-0'}`}>
        <li className="flex items-center gap-2"><Check size={20}/> Firebase Hosting ¹</li>
        <li className="flex items-center gap-2"><Check size={20}/> Customization ²</li>
        <li className="flex items-center gap-2"><Check size={20}/> Content management</li>
        <li className="flex items-center gap-2"><Check size={20}/> Binaries</li>
        <li className="flex items-center gap-2"><Check size={20}/> Support</li>
        <li className="flex items-center gap-2"><Check size={20}/> Bugfix</li>
      </ul>
      <hr className="border-t-2"/>
      <div className={`h-14 flex px-4 gap-4 items-center cursor-pointer ${selected === "extend" ? '' : 'text-gray-400'}`} onClick={() => setSelected("extend")}>
        {selected == "extend" ? <Circle size={28}/> : <CircleDashed size={28}/>}
        <span className="flex-1 text-xl">Extend</span>
        <big className="font-bold text-2xl">399/m</big>
      </div>
      <ul className={`flex flex-col gap-2 px-14 text-gray-400 transition-all overflow-hidden ${selected === "extend" ? 'max-h-[360px] pb-4' : 'max-h-0'}`}>
        <li className="flex items-center gap-2"><Check size={20}/> All Deploy services</li>
        <li className="flex items-center gap-2"><Check size={20}/> Appstore & Play Store publishing ⁴</li>
        <li className="flex items-center gap-2"><Check size={20}/> Custom views ⁵</li>
      </ul>
      <hr className="border-t-2"/>
      <div className={`h-14 flex px-4 gap-4 items-center cursor-pointer ${selected === "studio" ? '' : 'text-gray-400'}`} onClick={() => setSelected("studio")}>
        {selected == "studio" ? <Circle size={28}/> : <CircleDashed size={28}/>}
        <span className="flex-1 text-xl">Studio</span>
        <big className="font-bold text-2xl">1399/m</big>
      </div>
      <ul className={`flex flex-col gap-2 px-14 text-gray-400 transition-all overflow-hidden ${selected === "studio" ? 'max-h-[420px] pb-4' : 'max-h-0'}`}>
        <li className="flex items-center gap-2"><Check size={20}/> All Deploy and Extend services</li>
        <li className="flex items-center gap-2"><Check size={20}/> Branding</li>
        <li className="flex items-center gap-2"><Check size={20}/> UI design</li>
        <li className="flex items-center gap-2"><Check size={20}/> Custom backend</li>
        <li className="flex items-center gap-2"><Check size={20}/> Landing pages</li>
      </ul>
    </div>
    <a href={"/deploy/" + props.slug} className="bg-white text-black mt-4 px-6 py-4 flex items-center gap-4 rounded-xl text-xl">
      <Copy size={30} />
      <span className="flex-1 pt-[2px]">Clone with Github</span>
      <ArrowRight size={30} />
    </a>
  </div>
}