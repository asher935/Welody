'use client'

export default function Pricing() {
    return (
        <section className="bg-light-primary-back dark:bg-dark-primary-back scroll-mt-8 w-full" id="pricing">
            <div className='max-w-6xl mx-auto px-4 md:px-6 py-24'>
            <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Designed for musicians like you</h2>
                    <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">Whether you're learning your first chords or a seasoned pro looking for new inspiration, Welody is your global music community.</p>
                </div>
                <div className="max-w-sm mx-auto md:max-w-none grid md:grid-cols-4 md:-mx-6 text-sm text-light-active dark:text-dark-active" x-data="{ isAnnual: true }">

                    <section className="md:contents [&>div:first-child]:pt-10 [&>div:first-child]:rounded-t-2xl [&>div:last-child]:pb-10 [&>div:last-child]:rounded-b-2xl">
                        <div className="relative bg-light-primary-back dark:bg-dark-primary-back px-6 flex flex-col justify-end">
                            <div className="pb-5 md:border-b border-slate-200 dark:border-slate-700">
                                <div className="max-md:text-center">
                                    <div className="inline-flex items-center whitespace-nowrap">
                                        <div className="text-sm text-slate-500 mr-2 md:max-lg:sr-only">Monthly</div>
                                        <div className="relative">
                                            <input type="checkbox" id="toggle" className="peer sr-only" x-model="isAnnual" />
                                            <label htmlFor="toggle" className="relative flex h-6 w-11 cursor-pointer items-center rounded-full bg-light-inactive px-0.5 outline-slate-400 transition-colors before:h-5 before:w-5 before:rounded-full before:bg-light-secondary-back before:shadow-sm before:transition-transform before:duration-150 peer-checked:bg-light-accent-blue peer-checked:before:translate-x-full peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-light-border peer-checked:peer-focus-visible:outline-indigo-500">
                                                <span className="sr-only">Pay Yearly</span>
                                            </label>
                                        </div>
                                        <div className="text-sm text-slate-500 ml-2">Yearly <span className="text-light-success-500">(-20%)</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end max-md:hidden md:order-1" aria-hidden="true">
                            <div className="py-2 text-slate-900 font-medium mt-4">Platform</div>
                        </div>
                        <div className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end max-md:hidden md:order-2" aria-hidden="true">
                            <div className="py-2 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">Account Access</div>
                        </div>
                        <div className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end max-md:hidden md:order-3" aria-hidden="true">
                            <div className="py-2 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">Custom Domains</div>
                        </div>
                        <div className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end max-md:hidden md:order-4" aria-hidden="true">
                            <div className="py-2 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">Receipts Forward</div>
                        </div>
                        <div className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end max-md:hidden md:order-5" aria-hidden="true">
                            <div className="py-2 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">Supplier Management</div>
                        </div>
                        <div className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end max-md:hidden md:order-6" aria-hidden="true">
                            <div className="py-2 text-slate-900 font-medium mt-4">Features</div>
                        </div>
                        <div className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end max-md:hidden md:order-7" aria-hidden="true">
                            <div className="py-2 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">Generate Public URLs</div>
                        </div>
                        <div className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end max-md:hidden md:order-8" aria-hidden="true">
                            <div className="py-2 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">API Integrations</div>
                        </div>
                        <div className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end max-md:hidden md:order-9" aria-hidden="true">
                            <div className="py-2 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">Extra Add-ons</div>
                        </div>
                        <div className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end max-md:hidden md:order-10" aria-hidden="true">
                            <div className="py-2 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">Admin Roles</div>
                        </div>
                        <div className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end max-md:hidden md:order-11" aria-hidden="true">
                            <div className="py-2 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">Admin Roles</div>
                        </div>
                        <div className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end max-md:hidden md:order-12" aria-hidden="true">
                            <div className="py-2 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">Enterprise Add-ons</div>
                        </div>
                        <div className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end max-md:hidden md:order-[13]" aria-hidden="true">
                            <div className="py-2 text-slate-900 font-medium mt-4">Support</div>
                        </div>
                        <div className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end max-md:hidden md:order-[14]" aria-hidden="true">
                            <div className="py-2 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">Custom Connection</div>
                        </div>
                    </section>


                    <section className="md:contents [&>div:first-child]:pt-10 [&>div:first-child]:rounded-t-2xl [&>div:last-child]:pb-10 [&>div:last-child]:rounded-b-2xl">
                        <div className="relative bg-white dark:bg-slate-900 px-6 flex flex-col justify-end">
                            <div className="grow mb-5">
                                <div className="font-semibold text-slate-900 dark:text-slate-200 mb-0.5">Soloist</div>
                                <div className="mb-1">
                                    <span className="text-xl font-medium text-slate-900 dark:text-slate-200">$</span><span className="text-3xl font-bold text-slate-900 dark:text-slate-200" x-text="isAnnual ? '29' : '35'">29</span><span className="text-slate-500 font-medium">/mo</span>
                                </div>
                                <div className="text-sm text-slate-500">Unlimited placeholder texts.</div>
                            </div>
                            <div className="pb-4 border-b border-slate-200 dark:border-slate-700">
                                <a className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-light-accent-blue dark:bg-dark-accent-blue px-2.5 py-1.5 text-sm font-medium text-light-accent-text dark:text-dark-accent-text shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 group" href="#0">
                                    Get Started <span className="tracking-normal text-indigo-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                                </a>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-1">
                            <div className="py-2 text-slate-900 dark:text-slate-200 font-medium mt-4 md:sr-only">Platform</div>
                        </div>
                        <div className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-2">
                            <div className="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
                                <svg className="shrink-0 fill-light-success mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                                </svg>
                                <span>400 <span className="md:sr-only">Account Access</span></span>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-3">
                            <div className="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
                                <svg className="shrink-0 fill-light-success mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                                </svg>
                                <span>4 <span className="md:sr-only">Custom Domains</span></span>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-4">
                            <div className="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
                                <svg className="shrink-0 fill-light-success mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                                </svg>
                                <span>Unlimited <span className="md:sr-only">Receipts Forward</span></span>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-5">
                            <div className="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
                                <svg className="shrink-0 fill-light-success mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                                </svg>
                                <span>1 <span className="md:sr-only">Supplier Management</span></span>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-6">
                            <div className="py-2 text-slate-900 dark:text-slate-200 font-medium mt-4 md:sr-only">Features</div>
                        </div>
                        <div className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-7">
                            <div className="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
                                <svg className="shrink-0 fill-light-success mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                                </svg>
                                <span><span className="md:sr-only">Generate Public URLs</span></span>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-8">
                            <div className="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
                                <svg className="shrink-0 fill-light-success mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                                </svg>
                                <span><span className="md:sr-only">API Integrations</span></span>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-9">
                            <div className="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
                                <svg className="shrink-0 fill-light-success mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                                </svg>
                                <span><span className="md:sr-only">Extra Add-ons</span></span>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-10">
                            <div className="flex items-center border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 max-md:sr-only">
                                <span><span className="md:sr-only">Admin Roles</span></span>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-11">
                            <div className="flex items-center border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 max-md:sr-only">
                                <span><span className="md:sr-only">Admin Roles</span></span>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-12">
                            <div className="flex items-center border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 max-md:sr-only">
                                <span><span className="md:sr-only">Enterprise Add-ons</span></span>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-[13]">
                            <div className="py-2 text-slate-900 font-medium mt-4 sr-only">Support</div>
                        </div>
                        <div className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-[14]">
                            <div className="flex items-center border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 max-md:sr-only">
                                <span><span className="md:sr-only">Custom Connection</span></span>
                            </div>
                        </div>
                    </section>

                    <section className="md:contents [&>div:first-child]:pt-10 [&>div:first-child]:rounded-t-2xl [&>div:last-child]:pb-10 [&>div:last-child]:rounded-b-2xl">
                        <div className="relative bg-light-secondary-back dark:bg-dark-secondary-back px-6 flex flex-col justify-end">
                            <div className="absolute top-0 right-0 mr-6 -mt-4">
                                <div className="inline-flex items-center text-xs font-semibold py-1.5 px-3 bg-light-success text-light-accent-text rounded-full shadow-sm shadow-slate-950/5">Most Popular</div>
                            </div>
                            <div className="grow mb-5">
                                <div className="font-semibold text-light-active dark:text-dark-active mb-0.5">Perform</div>
                                <div className="mb-1">
                                    <span className="text-xl font-medium text-light-active dark:text-dark-active">$</span><span className="text-3xl font-bold text-light-active dark:text-dark-active" x-text="isAnnual ? '49' : '54'">49</span><span className="text-light-active dark:text-dark-active font-medium">/mo</span>
                                </div>
                                <div className="text-sm text-light-active dark:text-dark-active">Unlimited placeholder texts.</div>
                            </div>
                            <div className="pb-4 border-b border-slate-200 dark:border-slate-700">
                                <a className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-light-accent-blue dark:bg-dark-accent-blue px-2.5 py-1.5 text-sm font-medium text-light-accent-text dark:text-dark-accent-text shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 group" href="#0">
                                    Get Started <span className="tracking-normal text-indigo-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                                </a>
                            </div>
                        </div>
                        <div className="bg-light-secondary-back dark:bg-dark-secondary-back px-6 flex flex-col justify-end md:order-1">
                            <div className="py-2 text-light-active dark:text-dark-active font-medium mt-4 md:sr-only">Platform</div>
                        </div>
                        <div className="bg-light-secondary-back dark:bg-dark-secondary-back px-6 flex flex-col justify-end md:order-2">
                            <div className="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-light-active dark:text-dark-active">
                                <svg className="shrink-0 fill-light-success mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                                </svg>
                                <span>800 <span className="md:sr-only">Account Access</span></span>
                            </div>
                        </div>
                        <div className="bg-light-secondary-back dark:bg-dark-secondary-back px-6 flex flex-col justify-end md:order-3">
                            <div className="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-light-active dark:text-dark-active">
                                <svg className="shrink-0 fill-light-success mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                                </svg>
                                <span>10 <span className="md:sr-only">Custom Domains</span></span>
                            </div>
                        </div>
                        <div className="bg-light-secondary-back dark:bg-dark-secondary-back px-6 flex flex-col justify-end md:order-4">
                            <div className="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-light-active dark:text-dark-active">
                                <svg className="shrink-0 fill-light-success mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                                </svg>
                                <span>Unlimited <span className="md:sr-only">Receipts Forward</span></span>
                            </div>
                        </div>
                        <div className="bg-light-secondary-back dark:bg-dark-secondary-back px-6 flex flex-col justify-end md:order-5">
                            <div className="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-light-active dark:text-dark-active">
                                <svg className="shrink-0 fill-light-success mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                                </svg>
                                <span>10 <span className="md:sr-only">Supplier Management</span></span>
                            </div>
                        </div>
                        <div className="bg-light-secondary-back dark:bg-dark-secondary-back px-6 flex flex-col justify-end md:order-6">
                            <div className="py-2 text-light-active dark:text-dark-active font-medium mt-4 md:sr-only">Features</div>
                        </div>
                        <div className="bg-light-secondary-back dark:bg-dark-secondary-back px-6 flex flex-col justify-end md:order-7">
                            <div className="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-light-active dark:text-dark-active">
                                <svg className="shrink-0 fill-light-success mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                                </svg>
                                <span><span className="md:sr-only">Generate Public URLs</span></span>
                            </div>
                        </div>
                        <div className="bg-light-secondary-back dark:bg-dark-secondary-back px-6 flex flex-col justify-end md:order-8">
                            <div className="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-light-active dark:text-dark-active">
                                <svg className="shrink-0 fill-light-success mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                                </svg>
                                <span><span className="md:sr-only">API Integrations</span></span>
                            </div>
                        </div>
                        <div className="bg-light-secondary-back dark:bg-dark-secondary-back px-6 flex flex-col justify-end md:order-9">
                            <div className="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-light-active dark:text-dark-active">
                                <svg className="shrink-0 fill-light-success mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                                </svg>
                                <span><span className="md:sr-only">Extra Add-ons</span></span>
                            </div>
                        </div>
                        <div className="bg-light-secondary-back dark:bg-dark-secondary-back px-6 flex flex-col justify-end md:order-10">
                            <div className="flex items-center border-b border-slate-200 dark:border-slate-700 py-2 text-light-active dark:text-dark-active max-md:sr-only">
                                <span><span className="md:sr-only">Admin Roles</span></span>
                            </div>
                        </div>
                        <div className="bg-light-secondary-back dark:bg-dark-secondary-back px-6 flex flex-col justify-end md:order-11">
                            <div className="flex items-center border-b border-slate-200 dark:border-slate-700 py-2 text-light-active dark:text-dark-active max-md:sr-only">
                                <span><span className="md:sr-only">Admin Roles</span></span>
                            </div>
                        </div>
                        <div className="bg-light-secondary-back dark:bg-dark-secondary-back px-6 flex flex-col justify-end md:order-12">
                            <div className="flex items-center border-b border-slate-200 dark:border-slate-700 py-2 text-light-active dark:text-dark-active max-md:sr-only">
                                <span><span className="md:sr-only">Enterprise Add-ons</span></span>
                            </div>
                        </div>
                        <div className="bg-light-secondary-back dark:bg-dark-secondary-back px-6 flex flex-col justify-end md:order-[13]">
                            <div className="py-2 text-light-active dark:text-dark-active font-medium mt-4 sr-only">Support</div>
                        </div>
                        <div className="bg-light-secondary-back dark:bg-dark-secondary-back px-6 flex flex-col justify-end md:order-[14]">
                            <div className="flex items-center border-b border-slate-200 dark:border-slate-700 py-2 text-light-active dark:text-dark-active max-md:sr-only">
                                <span><span className="md:sr-only">Custom Connection</span></span>
                            </div>
                        </div>
                    </section>

                    <section className="md:contents [&>div:first-child]:pt-10 [&>div:first-child]:rounded-t-2xl [&>div:last-child]:pb-10 [&>div:last-child]:rounded-b-2xl">
                        <div className="relative bg-white dark:bg-slate-900 px-6 flex flex-col justify-end">
                            <div className="grow mb-5">
                                <div className="font-semibold text-slate-900 dark:text-slate-200 mb-0.5">Enterprise</div>
                                <div className="mb-1">
                                    <span className="text-xl font-medium text-slate-900 dark:text-slate-200">$</span><span className="text-3xl font-bold text-slate-900 dark:text-slate-200" x-text="isAnnual ? '79' : '85'">79</span><span className="text-slate-500 font-medium">/mo</span>
                                </div>
                                <div className="text-sm text-slate-500">Unlimited placeholder texts.</div>
                            </div>
                            <div className="pb-4 border-b border-slate-200 dark:border-slate-700">
                                <a className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-light-accent-blue dark:bg-dark-accent-blue px-2.5 py-1.5 text-sm font-medium text-light-accent-text dark:text-dark-accent-text shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 group" href="#0">
                                    Get Started <span className="tracking-normal text-indigo-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                                </a>
                            </div>
                        </div>
                        <div className="bg-light-primary-back dark:bg-dark-primary-back px-6 flex flex-col justify-end md:order-1">
                            <div className="py-2 text-slate-900 dark:text-slate-200 font-medium mt-4 md:sr-only">Platform</div>
                        </div>
                        <div className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-2">
                            <div className="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
                                <svg className="shrink-0 fill-light-success mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                                </svg>
                                <span>Unlimited <span className="md:sr-only">Account Access</span></span>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-3">
                            <div className="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
                                <svg className="shrink-0 fill-light-success mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                                </svg>
                                <span>Unlimited <span className="md:sr-only">Custom Domains</span></span>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-4">
                            <div className="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
                                <svg className="shrink-0 fill-light-success mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                                </svg>
                                <span>Unlimited <span className="md:sr-only">Receipts Forward</span></span>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-5">
                            <div className="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
                                <svg className="shrink-0 fill-light-success mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                                </svg>
                                <span>Unlimited <span className="md:sr-only">Supplier Management</span></span>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-6">
                            <div className="py-2 text-slate-900 dark:text-slate-200 font-medium mt-4 md:sr-only">Features</div>
                        </div>
                        <div className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-7">
                            <div className="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
                                <svg className="shrink-0 fill-light-success mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                                </svg>
                                <span><span className="md:sr-only">Generate Public URLs</span></span>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-8">
                            <div className="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
                                <svg className="shrink-0 fill-light-success mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                                </svg>
                                <span><span className="md:sr-only">API Integrations</span></span>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-9">
                            <div className="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
                                <svg className="shrink-0 fill-light-success mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                                </svg>
                                <span><span className="md:sr-only">Extra Add-ons</span></span>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-10">
                            <div className="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
                                <svg className="shrink-0 fill-light-success mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                                </svg>
                                <span><span className="md:sr-only">Admin Roles</span></span>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-11">
                            <div className="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
                                <svg className="shrink-0 fill-light-success mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                                </svg>
                                <span><span className="md:sr-only">Admin Roles</span></span>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-12">
                            <div className="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
                                <svg className="shrink-0 fill-light-success mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                                </svg>
                                <span><span className="md:sr-only">Enterprise Add-ons</span></span>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-[13]">
                            <div className="py-2 text-slate-900 dark:text-slate-200 font-medium mt-4 md:sr-only">Support</div>
                        </div>
                        <div className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-[14]">
                            <div className="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
                                <svg className="shrink-0 fill-light-success mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                                </svg>
                                <span><span className="md:sr-only">Custom Connection</span></span>
                            </div>
                        </div>
                    </section>

                </div>
            </div>


        </section>
    )

}