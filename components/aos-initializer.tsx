'use client'

import { useEffect } from 'react'
import AOS from 'aos'

export function AOSInitializer() {
  useEffect(() => {
    AOS.init({
      duration: 400,
      offset: 50,
      once: true,
      easing: 'ease-out',
    })
  }, [])

  return null
}
