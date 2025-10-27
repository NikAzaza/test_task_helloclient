import {SidebarWithRouting} from "../../../sidebar-with-routing.tsx";
import {SidebarWithMockData} from "../../../../sidebar-with-mock-data/sidebar-with-mock-data.tsx";
import {useState} from "react";
import './root-page.css';

export function RootPage() {
  const [isRouter, setIsRouter] = useState<boolean>(false)

  return (
      <div className='flex flex-col h-full'>
        <div className='flex mb-4'>
          <label htmlFor="mode" className='flex'>
            <p className='pr-2'>Use sidebar with router?</p>
            <input
                id='mode'
                type="checkbox"
                checked={isRouter}
                onChange={(e) => setIsRouter(e.target.checked)}
            />
            <p className='pl-2'>{isRouter ? 'Router' : 'Mock data'} component is selected</p>
          </label>
        </div>
        {
          isRouter
            ? <SidebarWithRouting/>
            : <SidebarWithMockData/>
        }
      </div>
)
  ;
}
