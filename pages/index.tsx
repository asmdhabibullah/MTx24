export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
        <div className="mx-auto max-w-md">
          <div className="divide-y divide-gray-300/50">
            <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
              <p>Wekcome to "MTx24"!</p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <svg className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="11" />
                    <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                  </svg>
                  <p className="ml-4">
                    Project "Micro Techs" main goal
                    <code className="text-sm font-bold text-gray-900"> is to create a SASS App that will support our customer 365x24</code>
                  </p>
                </li>
                <li className="flex items-center">
                  <svg className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="11" />
                    <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                  </svg>
                  <p className="ml-4">
                    The applications is under construction, we will be back soon.
                    <code className="text-sm font-bold text-gray-900">@All, Thanks for your patient!</code>
                  </p>
                </li>
              </ul>
            </div>
            <div className="pt-8 text-base font-semibold leading-7">
              <p className="text-gray-900">If you are intarested to know the updated situations of this application then please subscribe</p>
              <div className="pointer-events focus:pointer-events-auto">
                <input type="text" placeholder="Subscribe" />
              </div>
              <input type="submit" className="text-sky-500 hover:text-sky-600" /><span>&rarr;</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
