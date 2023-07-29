import React from 'react'

type Props = {
    title: string;
    onClick: any;
    type: any;
    style: string;
}

export const Button = (props: Props) => {
    return (
        <button className={`${props.style} py-2 px-4 bg-pink-600`} type={props.type}
            onClick={props.onClick}
        >
            {props.title}
        </button>
    )
}