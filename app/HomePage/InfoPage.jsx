'use client'
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react'

function InfoPage({ showMenu, setShowMenu }) {


    const menuName = showMenu.currentMenu
    return (
        < Modal isOpen={showMenu} backdrop={'transprent'} onOpenChange={() => { setShowMenu(false) }
        } placement='auto' size='full' scrollBehavior='inside' className={`h-auto  text-white w-full overflow-x-hidden bg-[#ffcfa7]   ${{
            backdrop: "bg-black bg-opacity-100"
        }}`}>
            <ModalContent>
                {() => (
                    <>
                        <ModalHeader className="center-col gap-1   md:scroll-px-20 ">
                            {menuName}
                        </ModalHeader>
                        <ModalBody className='hidescroll  overflow-hidden    p-2'>

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
    )
}

export default InfoPage