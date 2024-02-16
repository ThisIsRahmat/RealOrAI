

import ImageCard from '~/components/ui/imagecard'



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function GamePage() {
  

  return (
    <div className="bg-white h-screen">

    
      <main className="mx-auto px-4 pb-24 pt-14 sm:px-6 sm:pb-32 sm:pt-16 lg:max-w-7xl lg:px-8">

    <div>
          {/*  Image to Guess  */}
          <div className=" ">
           
              <ImageCard imgSrc='https://tailwindui.com/img/ecommerce-images/product-page-05-product-01.jpg'/>
            </div>
     
     



            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
              <button
                type="button"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                Real
              </button>
              <button
                type="button"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-50 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
              AI
              </button>
            </div>

      

       

           
         

    
        </div>
      </main>
    </div>
  )
}
