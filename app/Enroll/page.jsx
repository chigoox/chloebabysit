'use client'
import { Input, Textarea, Button, Grid, Spacer, Container, Text, Card, Image } from '@nextui-org/react';

export default function SignUpForm() {
    return (
        <main className='h-screen'>
            <div className='h-full relative'>
                <h1 className='font-bold text-center top-12 absolute z-20  w-full'>
                    Chloe's Baby sitting services
                </h1>
                <Image className='rounded-t-none h-screen w-screen object-cover' src={'https://images.unsplash.com/photo-1561567131-f7d83083aee0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} alt='cute baby' />
            </div>
            <Card
                xs
                className='md:w-1/3 m-auto p-4 relative md:absolute bottom-40 md:right-12 z-30 bg-opacity-75'
            >

                <form className='flex flex-col gap-4 '>

                    <Input
                        label="Full Name"
                        placeholder="Enter your full name"
                        required
                    />


                    <Input
                        type="email"
                        label="Email Address"
                        placeholder="Enter your email"
                        required
                    />

                    <Input
                        type="tel"
                        label="Phone Number"
                        placeholder="Enter your phone number"
                        required
                    />


                    <Input
                        label="Availability"
                        placeholder="e.g., Weekends, Weekdays, Specific times"
                    />

                    <Textarea
                        label="Additional Comments"
                        placeholder="Let us know any other details..."
                        rows={4}
                    />

                    <Button className='w-full' type="submit" >
                        Submit
                    </Button>

                </form>
            </Card>
        </main>
    );
}