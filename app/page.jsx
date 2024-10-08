import { Button, Image } from '@nextui-org/react';
export default function Home() {
  return (
    <div className="bg-[#fdf6c0]  min-h-screen w-screen  pb-20  sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-4">
        <div className='relative w-full h-[36.5rem] overflow-hidden'>
          <div className="absolute h-full bg-black rounded-b-xl bg-opacity-25 w-full z-20 center-col text-white">
            <h1 className='text-3xl text-center   font-bold'>Top-notch care for your little ones</h1>
            <p className='text-[#e6e6e6] text-center drop-shadow-sm shadow-black'>Experianced and dependable babysitters & nannies</p>
          </div>
          <Image className='w-full h-full rounded-t-none object-cover' src='https://images.unsplash.com/photo-1570545917537-873e36d4f64a?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' />
        </div>
        <div className='grid grid-cols-3 w-96 gap-2 p-2'>
          {['How to enroll', 'Health & Safety', 'More than a babysitter',].map((item, index) => {
            const imgs = [
              'https://www.kindercare.com/-/media/kindercare/features/personalization/kclc_homepage_personalization_tile_enroll.jpg?h=800&w=800&la=en&hash=35A6FD9CFA26C41A3BF032524954BDE4',
              'https://www.kindercare.com/-/media/kindercare/features/personalization/kclchomepagepersonalizationtilehs.jpg?h=800&w=800&la=en&hash=1CD5F8359117E0955CEB817C836058DF',
              'https://www.kindercare.com/-/media/kindercare/features/personalization/kclc_homepage_personalization_tile_morethandaycare.jpg?h=800&w=800&la=en&hash=81D83D3016EBF6230C5A0DA72FD371FD'
            ]
            return (
              <Button draggable={true} className='h-32 p-0 md:h-64 col-span-1 text-center' key={item}>
                <h1 className='text-center w-fit text-wrap absolute z-20 bottom-2 text-white font-bold'>{item}</h1>
                <Image className='h-32 w-full' src={imgs[index]} alt='' />
              </Button>
            )
          })}
        </div>
      </main>

    </div>
  );
}
