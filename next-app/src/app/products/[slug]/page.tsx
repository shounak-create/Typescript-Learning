import { setTimeout } from "node:timers/promises";

export default function Blog({ children }: { children: React.ReactNode }){
    return(
        <div>
            {setTimeout(()=><div>hello</div>,[1000])}
      {children}
        </div>
    )
}