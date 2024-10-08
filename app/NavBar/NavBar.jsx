'use client'
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react'
import React, { useState } from 'react'

function NavBar() {
    const [showMenu, setShowMenu] = useState(true)
    return (
        <div>
            < Modal isOpen={showMenu} backdrop={'blur'} onOpenChange={() => { setShowMenu(false) }
            } placement='auto' scrollBehavior='inside' className={`h-auto min-w-full text-white w-auto overflow-x-hidden md:px-20 lg:px-40 xl:px-32 py-4 bg-black-800   ${{
                backdrop: "bg-black bg-opacity-100"
            }}`}>
                <ModalContent>
                    {() => (
                        <>
                            <ModalHeader className="center-col gap-1   md:scroll-px-20 lg:px-40">

                            </ModalHeader>
                            <ModalBody className='hidescroll overflow-hidden overflow-y-scroll   p-0'>



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
            <Button className='h-20 w-16 rounded-t-full min-w-0 bg-[#f26d5c] p-0 fixed bottom-2 right-[40%] '></Button>
        </div>
    )
}

export default NavBar
