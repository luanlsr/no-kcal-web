'use client'

import NavbarComponent from '@/components/Navbar';
import store from '@/redux/store'
import { NextUIProvider } from '@nextui-org/react'
import { Provider } from 'react-redux';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Provider store={store}>
        <NavbarComponent />
        <NextUIProvider>
          {children}
        </NextUIProvider>
      </Provider>
    </>
  )
}
