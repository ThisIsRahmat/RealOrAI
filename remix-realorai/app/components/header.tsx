import { useState } from 'react'

import { Dialog } from '@headlessui/react'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Company', href: '#' },
]

export default function He() {


  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-centre p-6 lg:px-8" aria-label="Global">
        <div className="flex flex-1">

   
        <a href="/" className="-m-1.5 p-1.5">
          <span className="sr-only">RealOrAI</span>
          <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
        </a>
     </div>
      </nav>

        <div className="fixed inset-0 z-10" />
      
     

  
    </header>
  )
}
