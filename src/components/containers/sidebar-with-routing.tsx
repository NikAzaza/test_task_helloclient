import {useState} from "react";
import {Sidebar, type SidebarItem} from "../../modules/sidebar";

export function SidebarWithRouting() {
  // const [sidebarOpened, setSidebarOpened] = useState(true);
  const [isMobileView, setIsMobileView] = useState(false);

  const pageClasses = isMobileView ? 'flex-col-reverse' : 'flex-row';

  const items: SidebarItem[] = [
    {key: '1', label: 'first', iconData: 'https://www.svgrepo.com/show/535115/alien.svg'},
    {key: '2', label: 'second', iconData: 'https://www.svgrepo.com/show/535116/address-card.svg', children: [
        {key: '2_1`', label: '2222-1'},
        {key: '2_2`', label: '2222-2'},
        {key: '2_3`', label: '2222-3'}
      ]},
    {key: '3', label: 'third', iconData: 'https://www.svgrepo.com/show/535118/accessibility.svg', children: [
        {key: '3_1`', label: '3333-1'},
        {key: '3_2`', label: '3333-2'},
        {key: '3_3`', label: '3333-3'}
      ]},
    {key: '4', label: 'fourth', iconData: 'https://www.svgrepo.com/show/535122/align-center-horizontal.svg'},
    {key: '5', label: 'fifth', iconData: 'https://www.svgrepo.com/show/535132/anchor.svg'},
  ];

  console.log('isMobile view:', isMobileView)

  return (
    <div className={`flex ${pageClasses} w-full h-full`}>
      <Sidebar
        items={items}
        titleLabel={'header'}
        // initiallyOpened={sidebarOpened}
        // onStateChange={(isOpened) => setSidebarOpened(isOpened)}
        onViewPortChange={(_, isMobileView) => setIsMobileView(isMobileView)}
      />
      <div>content</div>
    </div>
  );
}