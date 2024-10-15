'use client'
import InfoPage from '@/app/HomePage/InfoPage';
import ThanksForEnroll from '@/app/HomePage/ThanksForEnroll';
import { Button, Image } from '@nextui-org/react';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';


export default function Home() {
  const [showMenu, setShowMenu] = useState(false)
  const enrolled = useSearchParams().get('enrolled')
  return (
    <div className="bg-white  min-h-screen w-screen overflow-hidden pb-10  sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <ThanksForEnroll opened={enrolled == 'true'} />
      <main className="flex flex-col">
        <div className='relative w-full h-[36.5rem] overflow-hidden'>
          <div className="absolute h-full bg-black rounded-b-xl bg-opacity-25 w-full z-20 center-col text-white">
            <h1 className='text-3xl text-center   font-bold'>Top-notch care for your little ones</h1>
            <p className='text-[#e6e6e6] text-center drop-shadow-sm shadow-black'>Experienced and dependable babysitters & nannies</p>
          </div>
          <Image className='w-full h-full rounded-t-none object-cover' src='https://images.unsplash.com/photo-1570545917537-873e36d4f64a?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' />
        </div>
        <InfoPage showMenu={showMenu} setShowMenu={setShowMenu} />
        <div className='grid  grid-cols-3 w-96 md:w-full  gap-2 p-2 items-center justify-center'>
          {['How to enroll', 'Health & Safety', 'More than a babysitter',].map((item, index) => {
            const imgs = [
              'https://www.kindercare.com/-/media/kindercare/features/personalization/kclc_homepage_personalization_tile_enroll.jpg?h=800&w=800&la=en&hash=35A6FD9CFA26C41A3BF032524954BDE4',
              'https://www.kindercare.com/-/media/kindercare/features/personalization/kclchomepagepersonalizationtilehs.jpg?h=800&w=800&la=en&hash=1CD5F8359117E0955CEB817C836058DF',
              'https://www.kindercare.com/-/media/kindercare/features/personalization/kclc_homepage_personalization_tile_morethandaycare.jpg?h=800&w=800&la=en&hash=81D83D3016EBF6230C5A0DA72FD371FD'
            ]
            return (
              <Button onPress={() => { setShowMenu({ currentMenu: item }) }} className='h-32 p-0 md:h-32 md:w-32 col-span-1 m-auto text-center' key={item}>
                <h1 className='text-center w-fit text-wrap absolute z-20 bottom-2 text-white font-bold'>{item}</h1>
                <Image className='h-32 w-full' src={imgs[index]} alt='' />
              </Button>
            )
          })}
        </div>
        <div className=' h-auto md:h-auto flex flex-col md:flex-row trans'>
          <div className='bg-[#e6eeb7] flex-shrink-0 h-96 p-4 justify-center   md:w-1/2  flex flex-col '>
            <div className="bg-white rounded-2xl p-4 h-full">
              <h3 className='text-black text-2xl'>Health and Safety</h3>
              <h2 className='mb-4 text-orange-600 font-bold text-4xl md:text-4xl'>Keeping your child safe is our top priority.</h2>
              <h5 className='text-gray-600 text-lg'>From the time you drop off to the moment you return, we’ll keep them safe, sound, and smiling.</h5>
            </div>
          </div>

          <div className='md:w-1/2 h-96 flex  overflow-hidden bg-[#ffd2af]'>
            <Image className='h-full w-full object-cover' src='https://www.kindercare.com/-/media/kindercare/images/personalization/kclc_homepage_personalization_image_morethandaycare.jpg?h=800&w=1200&la=en&hash=60AA673220CF3A5251988AF34920CAC2' alt='baby smiling' />
          </div>
        </div>

        <div className=' relative md:h-auto rounded-none flex flex-col md:flex-row trans'>

          <Image className='rounded-none rounded-t-none h-[29rem] md:h-full w-full object-cover' src='https://plus.unsplash.com/premium_photo-1663126735125-5b2358492ab8?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='baby smiling' />

          <div className=" h-auto w-full  p-4 min-h-96">
            <h3 className='text-black text-xl font-bold'>More Than Just a Babysitter</h3>
            <h2 className='mb-2 text-black font-bold text-3xl md:text-4xl'>Trust us to be your partner in providing a nurturing environment.</h2>
            <h5 className='text-black w-[80%] '> Our dedicated team goes beyond basic supervision, offering engaging activities that promote learning and creativity. We prioritize the safety, growth, and well-being of every child, ensuring peace of mind for parents. </h5>
          </div>

        </div>
      </main>

    </div>
  );
}
