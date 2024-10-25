'use client'
import ThanksForEnroll from '@/app/HomePage/ThanksForEnroll';
import { Button, Image } from '@nextui-org/react';
import { useSearchParams } from 'next/navigation';
import { Suspense, useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

function CheckEnroll() {
  const enrolled = useSearchParams().get('enrolled')

  return <ThanksForEnroll opened={enrolled == 'true'} />

}
export default function Home() {
  //const [showMenu, setShowMenu] = useState(false)

  return (
    <div className="bg-white  min-h-screen w-screen overflow-hidden pb-10  font-[family-name:var(--font-geist-sans)]">
      <Suspense>
        <CheckEnroll />
      </Suspense>
      <main className="flex flex-col ">
        <div className='relative w-full  h-[36.5rem] overflow-hidden'>
          <div className="absolute h-full bg-black rounded-b-xl bg-opacity-25 w-full z-20 center-col text-white">
            <h1 className='text-3xl text-center   font-bold'>Top-notch care for your little ones</h1>
            <p className='text-[#e6e6e6] text-center drop-shadow-sm shadow-black'>Experienced and dependable babysitters & nannies</p>
          </div>
          <Image className='w-screen h-full trans bottom-0 md:bottom-40 lg:bottom-72 xl:bottom-[30rem] rounded-t-none object-cover' src='https://images.unsplash.com/photo-1570545917537-873e36d4f64a?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' />
        </div>

        <div className="mt-20 center-col p-2">
          <h1 className="text-3xl md:text-4xl text-center">Your children are your whole world.</h1>
          <h1 className="text-center my-5 w-[85%]  m-auto text-xl">A great nanny acts as an extension of you in your absence, supporting your values and preferences, and aligning with your parenting style and philosophies to provide a secure, safe, and united home.</h1>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 ">
            <Button className='m-auto rounded-none p-6 text-xl  bg-[#f26d5c]'>Find Your Nanny</Button>
            <Button className='bg-opacity-0 rounded-none text-xl'>Find Your Family <AiOutlineArrowRight /></Button>
          </div>
        </div>

        <div className=' h-auto flex flex-col lg:flex-row-reverse items-center justify-center  xl:p-40 trans'>

          <div className=' h-48 md:h-full border w-full flex  overflow-hidden  md:overflow-visible relative'>
            <Image className='md:h-[30rem] w-screen md:w-[60rem]   relative bottom-20 md:bottom-0 md:top-0 xl:right-[15rem] rounded-none object-cover' src='https://www.kindercare.com/-/media/kindercare/images/personalization/kclc_homepage_personalization_image_morethandaycare.jpg?h=800&w=1200&la=en&hash=60AA673220CF3A5251988AF34920CAC2' alt='baby smiling' />
          </div>

          <div className='bg-[#e6eeb7] flex-shrink-0 h-auto md:h-[45rem] p-4 justify-center l:w-[80%]  lg:w-[55%]  flex flex-col '>
            <div className=" h-full md:w-1/2 flex-col flex p-4 mt-12 md:m-auto lg:m-0">
              <h3 className='text-black text-2xl'>We don't want to be everything to everyone - we want to be everything to those who seek a higher standard of in-home childcare.</h3>
              <h2 className='my-4'>This is the most important hire you will make—ever! You need a team with the experience, knowledge, and insight to source those who not only excel but truly belong in the childcare field. We believe nanny placement is its own essential entity in the home staffing industry and therefore deserves our full and singular attention.</h2>
              <h5 className='text-gray-600 text-lg'>From the time you drop off to the moment you return, we’ll keep them safe, sound, and smiling.</h5>
            </div>
            <Button className='w-fit bg-[#abbc4e] rounded-none p-8'>Why Nannies by Chloes?</Button>
          </div>



        </div>

        <div className=' relative md:h-auto rounded-none lg:p-20 flex flex-col md:flex-row trans'>

          <Image className='rounded-full rounded-t-none  h-[29rem] md:h-full w-full object-cover' src='https://plus.unsplash.com/premium_photo-1663126735125-5b2358492ab8?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='baby smiling' />
          <div className='grid lg:gap-8 md:gap-6 lg:grid-cols-2 grid-cols-1 p-4'>
            <div className='center-col gap-3'>
              <h1 className='text-5xl text-center font-bold'>01</h1>
              <h1 className='text-3xl text-center'>Let’s start at the very beginning.</h1>
              <h1>Complete our simple form to begin the process and we’ll schedule a complimentary call to talk about your family’s needs.</h1>
            </div>

            <div className='center-col gap-3'>
              <h1 className='text-5xl text-center font-bold'>02</h1>
              <h1 className='text-3xl text-center'>We make your list & check it twice.</h1>
              <h1>If we’re the right fit, we’ll take a deep dive on a consultation call. Tell us your wish list, and we’ll do the rest</h1>
            </div>

            <div className='center-col gap-3'>
              <h1 className='text-5xl text-center font-bold'>03</h1>
              <h1 className='text-3xl text-center'>Say yes to the very best.</h1>
              <h1>We’ll connect you with not only the savviest and most dedicated care providers, but the best of the best!</h1>
            </div>

            <div className='center-col gap-3'>
              <h1 className='text-5xl text-center font-bold'>04</h1>
              <h1 className='text-3xl text-center'>Interviewed, trialed, ready to hire?</h1>
              <h1>We’ll help you define an offer & work agreement that sets up a strong foundation and incentivizes longevity and transparency.</h1>
            </div>

          </div>

        </div>

        <Image className='rounded-full rounded-b-none lg:w-1/2  h-[29rem] md:h-full w-full object-cover' src='https://plus.unsplash.com/premium_photo-1701984401462-f1c709ce722e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='baby smiling' />

        <div className=" h-auto w-full lg:w-[30rem] lg:m-auto  p-4 min-h-96 bg-[#e6eeb7] rounded-b-full  ">
          <h3 className='text-black text-xl font-bold'>More Than Just a Babysitter</h3>
          <h2 className='mb-2 text-black font-bold text-3xl md:text-4xl'>Trust us to be your partner in providing a nurturing environment.</h2>
          <h5 className='text-black text-center'> Our dedicated team goes beyond basic supervision, offering engaging activities that promote learning and creativity. We prioritize the safety, growth, and well-being of every child, ensuring peace of mind for parents. </h5>
        </div>

      </main>

    </div>
  );
}
