import { Footer, Header } from '@puzzellia/shared'
import React from 'react'

type Props = {
    children: any
}

export const Layout = (props: Props) => {
    return (
        <div className='bg-white text-black'>
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}