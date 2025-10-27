import {PageTitleView} from "../../view/page-title-view.tsx";
import {Outlet} from "react-router";

export function ActionsPage() {

  return (
    <div className='flex flex-row'>
      <section className='flex flex-col'>
        actions menu:
        <ol>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ol>
      </section>

      <div>
        <Outlet />
      </div>
    </div>
  );
}
