import React, { useEffect, useState } from 'react'
import { ChevronUpIcon } from '@heroicons/react/solid'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  // Show button when page is scorlled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
  }, [])

  return (
    isVisible && (
      <div
        className="cursor-pointer default-transition fixed bottom-2 lg:bottom-8 right-2 lg:right-8 bg-bkg-4 flex items-center justify-center h-10 rounded-full w-10 hover:bg-fgd-4"
        onClick={scrollToTop}
      >
        <ChevronUpIcon className="h-6 w-6 text-primary-light" />
      </div>
    )
  )
}
