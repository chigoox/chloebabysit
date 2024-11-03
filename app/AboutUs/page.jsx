import { Card, Image, Link } from '@nextui-org/react'
import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai';

function page() {
    const whyChloes = [
        "Rigorous 3-part vetting process",
        "Federal level background checks",
        "Verbal employment references",
        "Time saving searches",
        "A dedicated placement coordinator throughout your search",
        "Quality over quantity – bespoke matching",
        "Tips and resource offerings throughout your search",
        "Expert guidance before, during & after placement",
        "Industry experts with current market knowledge",
        "Guidance in defining work agreements to incentivize for longevity",
        "Payroll assistance with our trusted partners",
        "Replacement protection"
    ];
    return (
        <div className=' w-full h-full center-col  overflow-x-scroll hidescroll'>
            <div className="flex md:flex-row flex-col items-center justify-center">
                <Image className='w-96 h-96 md:h-64 md:w-64 flex-shrink-0  m-auto object-cover' src='https://www.kindercare.com/-/media/kindercare/images/how-to-enroll/kclc_enrollment-landing-page_homepage-tile_final-contentblock1-600x690.png?h=690&w=600&la=en&hash=16E166BDCFF85E24BCE28D58CCA84747' alt='monkey' />
                <h1 className='font-bold text-3xl md:w-1/2 lg:w-64 text-center md:text-left'>Making the lives of busy parents easier.</h1>
            </div>
            <Card className='mt-10 bg-[#e6eeb7] w-[80%] rounded-none m-auto'>
                <div className='p-4'>
                    <Image src='https://www.kindercare.com/-/media/kindercare/images/how-to-enroll/kclc_enrollment-landing-page_homepage-tile_final-feature10;-100x200.png?h=200&w=100&la=en&hash=5DE6DB4A3DE011CEC941DB6173D30186' alt='number1' />
                    <h1 className='mt-4 md:w-96 m-auto'>
                        As a dedicated childcare agency,
                        our full attention and singular
                        focus is on providing the bespoke
                        childcare your family needs,
                        from part-time and temporary nannies
                        to full-time live-in support, with providers
                        specialized in learning & development, newborn care, and beyond.
                    </h1>

                    <div className="center mt-4 md:text-xl gap-1">
                        <h1 className='flex-shrink-0'>We can also reach out to you, click</h1>
                        <Link className='font-bold' href='/Enroll'>here</Link>
                        <h1 className='flex-shrink-0'>to enroll</h1>
                    </div>

                </div>
            </Card>

            <div className=' m-auto md:p-40'>
                <Image className='w-full h-96 object-cover' src='https://www.kindercare.com/-/media/kindercare/pages/enrollment-page/enrollment-lp_asset-enrollingiseasyas123.png?h=624&w=724&la=en&hash=195240EB6355257A99FDC6114882051D' alt='bear?' />
            </div>

            <div className='p-20'>
                <h1 className='text-3xl font-bold mb-4 text-center'>
                    We don’t believe parents should have to choose between what’s easy and what's best.
                </h1>

                <p className='text-center'>
                    We serve families with the highest standards for their children’s care – often seeking
                    caregivers with higher education, specialty training, and second languages, but always
                    seeking flexibility, adaptability, and commitment.
                </p>
            </div>


            <Image className='w-[85%] object-cover rounded-none m-auto relative' src='https://nanniesbynoa.com/wp-content/uploads/2022/07/Why-NbN-on-About-Page.jpg' alt='baby' ></Image>
            <div className='bg-[#e6eeb7] w-full border relative bottom-20 '>
                <h1 className='text-3xl mt-40 text-center p-4 md:p-0'>The benefits of working with our agency:</h1>
                <div className="center-col">
                    <div className='grid grid-cols-2 md:w-[80%] my-2 '>
                        {whyChloes.map(I => (<div key={I} className='flex gap-2 items-center w-64 h-20 p-2 m-auto'>
                            <AiOutlineArrowRight />
                            <h1 className='w-[90%]'>{I}</h1>
                        </div>))}

                    </div>
                </div>
            </div>

            <div className='px-8 center-col mb-20'>
                <h1 className='font-bold text-3xl'>Get the family support you need today.</h1>
                <p className='text-lg mt-4 md:w-1/3 m-auto'>We prioritize finding a match that best
                    compliments your family’s values, dynamic,
                    and unique care requirements. We facilitate
                    strong partnerships with solid, rewarding, and
                    lasting success for those who offer a genuine
                    desire to support your family and household.</p>
            </div>


        </div>
    )
}

export default page