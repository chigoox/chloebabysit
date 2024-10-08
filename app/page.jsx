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
        <div>
          {[1, 2, 3, 4].map((item) => {
            return (
              <Button >{item}</Button>
            )
          })}
        </div>
      </main>

    </div>
  );
}
