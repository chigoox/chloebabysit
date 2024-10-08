'use client'
import { Button, Image, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react'
import React, { useState } from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

function NavBar() {
    const [showMenu, setShowMenu] = useState(false)
    const menuItem = ['About Us', 'Contact Us', 'Enroll', 'Locations']
    console.log(showMenu)
    return (
        <div>
            < Modal isOpen={showMenu} backdrop={'transprent'} onOpenChange={() => { setShowMenu(false) }
            } placement='auto' scrollBehavior='inside' className={`h-auto  text-white w-auto overflow-x-hidden md:px-20 lg:px-40 xl:px-32 py-4 bg-[#ffcfa7]   ${{
                backdrop: "bg-black bg-opacity-100"
            }}`}>
                <ModalContent>
                    {() => (
                        <>
                            <ModalHeader className="center-col gap-1   md:scroll-px-20 ">
                                Chloe's Nanny Services
                            </ModalHeader>
                            <ModalBody className='hidescroll  overflow-hidden    p-2'>
                                <ResponsiveMasonry
                                    className={'w-full  overflow-hidden'}
                                    columnsCountBreakPoints={{ 300: 2, 500: 2, 700: 2, }}
                                >
                                    <Masonry gutter="10px">
                                        <div className=' m-auto fadeInZoom'>
                                            <Button className='h-40 w-20 p-0 shadow'>
                                                <Image className='w-full h-40 object-cover' src='https://images.unsplash.com/photo-1592106680408-e7e63efbc7ba?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' />
                                            </Button>
                                            <p className='font-light text-sm text-center text-black'>{menuItem[0]}</p>
                                        </div>
                                        <div className=' m-auto'>
                                            <Button className='h-20 w-20 p-0 shadow m-auto'>
                                                <Image className='w-20 h-20  object-cover' src='https://plus.unsplash.com/premium_photo-1689620817504-2f77cbddf142?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' />

                                            </Button>
                                            <p className='font-light text-sm text-center text-black'>{menuItem[1]}</p>

                                        </div>
                                        <div className=' m-auto'>
                                            <Button className='h-20 w-20 p-0 m-auto shadow'>
                                                <Image className='w-20 h-20  object-cover' src='https://www.kindercare.com/-/media/kindercare/images/personalization/kclchomepagepersonalizationimagehs.jpg?h=800&w=1200&la=en&hash=AD1E88ADE8FD9DD27945CC7E372A0FAF' alt='' />

                                            </Button>
                                            <p className='font-light text-sm text-center text-black'>{menuItem[2]}</p>

                                        </div>
                                        <div className=' m-auto'>
                                            <Button className='h-40 w-20 p-0 shadow  m-auto'>
                                                <Image className='w-full h-40 object-cover' src='https://images.unsplash.com/photo-1519709042477-8de6eaf1fdc5?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' />

                                            </Button>
                                            <p className='font-light text-sm text-center text-black'>{menuItem[3]}</p>

                                        </div>
                                    </Masonry>
                                </ResponsiveMasonry>

                            </ModalBody>
                            <ModalFooter>
                                <Button className='w-full' onPress={() => { setShowMenu(false) }} color="danger" variant="light">
                                    Close
                                </Button>

                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal >
            <Button onPress={() => { setShowMenu(true) }} className='h-20 w-16 rounded-t-full min-w-0 bg-[#f26d5c] p-0 fixed bottom-1 right-[40%] z-50'></Button>
        </div>
    )
}

export default NavBar
