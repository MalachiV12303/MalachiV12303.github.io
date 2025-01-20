'use client'
import React, { useEffect } from 'react';
import { Spinner, Switch } from '@nextui-org/react';
import { useTheme } from 'next-themes';

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme()
  const [isSelected, setIsSelected] = React.useState(theme==='lighter'?true:false)
  const [mounted, setMounted] = React.useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])
  if (!mounted) {
    return <Spinner />
  }
  return (
    <Switch
      isSelected={isSelected}
      classNames={{
        base: "",
        label: "",
        wrapper: "bg-transparent border-1 border-foreground group-data-[selected=true]:bg-transparent",
        thumb: "bg-transparent border-1 border-foreground",
        startContent: "text-foreground",
        endContent: "text-foreground",
      }}
      onValueChange={(e) => {
        setIsSelected(e)
        setTheme(isSelected ? 'darker' : 'lighter')
      }}
      size="md"
      startContent={
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
        </svg>
      }
      endContent={
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
        </svg>
      }
    />
  )
}