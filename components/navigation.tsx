import { cn } from "@/lib/utils"
import { mainNavigationAtom } from "@/states/atoms/mainComponentAtom";
import { useRecoilState } from "recoil";

interface NavigationItem {
  name: string;
  href: string;
  disabled: boolean;
}
const navigationItems : NavigationItem[] = [
  { name: "Timeline", href:'', disabled: true},
  { name: "Notifications", href: "" , disabled: true},
  { name: "Explore", href: "", disabled: true },
]

export function Navigation() {
  const [mainComponent,setMainComponent] = useRecoilState(mainNavigationAtom)
  return (
    <nav className="flex flex-col gap-2 p-4">
      <a
          key="Training Session"
          onClick={()=>setMainComponent("Training Session")}
          href="#"
          className={cn(
            "flex items-center gap-2 rounded-lg px-3 py-2 text-lg transition-colors",
            "hover:bg-accent hover:text-[#8661C1]",
            "focus:bg-accent focus:text-[#8661C1] focus:outline-none"
          )}
        >
          Training Session
        </a>
      {navigationItems.map((item) => (
        <a
        key={item.name}
        onClick={item.disabled ? undefined : () => setMainComponent(item.name)}
        href={item.disabled ? undefined : item.href}
        className={cn(
          "flex items-center gap-2 rounded-lg px-3 py-2 text-lg transition-colors",
          item.disabled 
            ? "cursor-not-allowed opacity-50"  // Add disabled styles
            : "hover:bg-accent hover:text-[#8661C1] focus:bg-accent focus:text-[#8661C1] focus:outline-none"
        )}
      >
        {item.name}
      </a>      
      ))}
      
    </nav>
  )
}