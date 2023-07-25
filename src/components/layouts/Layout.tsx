import { Footer, Header } from '@puzzellia/shared'
import React from 'react'

type Props = {
    children: any
}

export const Layout = (props: Props) => {
    return (
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}