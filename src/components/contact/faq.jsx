import React from 'react';
import { CircleHelp } from 'lucide-react'

export default function Faq() {
    return (
        <div>
            <section class="bg-white">
                <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <h2 class="mb-8 text-4xl tracking-tight font-extrabold">Frequently asked questions</h2>
                    <div class="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
                        <div>
                            <div class="mb-10">
                                <h3 class="flex items-center mb-4 text-lg font-medium ">
                                    <CircleHelp className='w-5 h-5 text-[#FB9733] mr-2' />
                                    What are the requirements to rent a car?
                                </h3>
                                <p class="text-gray-500 dark:text-gray-400">
                                    To rent a car, you must have a valid driver's license, be at least [minimum age] years old, and provide a credit/debit card for payment.
                                    International renters may need a passport and an International Driving Permit (IDP).
                                </p>
                            </div>
                            <div class="mb-10">
                                <h3 class="flex items-center mb-4 text-lg font-medium ">
                                    <CircleHelp className='w-5 h-5 text-[#FB9733] mr-2' />
                                    What is your fuel policy?
                                </h3>
                                <p class="text-gray-500 dark:text-gray-400">
                                    ur fuel policy is [Full-to-Full/Pre-purchase]. You will receive the car with a full tank, and we ask that you return it full.
                                    If the tank is not full upon return, a refueling fee will apply.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div class="mb-10">
                                <h3 class="flex items-center mb-4 text-lg font-medium ">
                                    <CircleHelp className='w-5 h-5 text-[#FB9733] mr-2' />
                                    Can I modify or cancel my reservation?
                                </h3>
                                <p class="text-gray-500 dark:text-gray-400">
                                    Yes, you can modify or cancel your reservation online up to [time period] before the scheduled pickup. Cancellation fees may apply depending
                                    on the terms of your booking.
                                </p>
                            </div>
                            <div class="mb-10">
                                <h3 class="flex items-center mb-4 text-lg font-medium ">
                                    <CircleHelp className='w-5 h-5 text-[#FB9733] mr-2' />
                                    Is insurance included in the rental price?
                                </h3>
                                <p class="text-gray-500 dark:text-gray-400">
                                    Our rental prices typically include basic insurance coverage. However, we offer additional protection options such as collision damage waivers
                                    and theft protection for extra peace of mind.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}