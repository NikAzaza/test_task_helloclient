import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {HeroUIProvider} from '@heroui/react'
import './index.css'
import {RouterProvider} from "react-router";
import {ROUTER_2} from "./components/containers/sidebar-with-routing/constant/routes/routes.constant.ts";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeroUIProvider>
      <RouterProvider router={ROUTER_2}></RouterProvider>
    </HeroUIProvider>
  </StrictMode>,
)
