import React from 'react'

type Props = {
    numbers: any[];
    total: number;
    digit: number;
    shows: boolean
}

export const MathSVG = (props: Props) => {

    let nums = props.numbers
    let digs = props.digit

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400">
            <g style={{ width: '100%', display: 'grid', alignItems: 'flex-start', gap: '2px', padding: '1rem', justifyContent: 'center' }}
                transform={`translate(${digs * 45},${digs * 15} )`}>
                {nums?.map((item, index) => (
                    <g transform={`translate(0, ${index * 42})`} key={index}>
                        {index < nums?.length - 1 ? (
                            <text x="0" y="0" xmlSpace="preserve" style={{ letterSpacing: '10px', textAnchor: 'end', fontSize: '2rem' }}>{item}</text>
                        ) : (
                            <text x="0" y="0" xmlSpace="preserve" style={{ letterSpacing: '10px', textAnchor: 'end', fontSize: '2rem' }}>
                                +{item}
                            </text>
                        )}
                    </g>
                ))}
                <line x1={-38 * props.digit} y1={(nums?.length * 38)} x2={props.digit} y2={(nums?.length * 38)} style={{ stroke: 'gray', strokeWidth: 2 }} />
                {!props.shows && (
                    <text xmlSpace="preserve" x="0" y={nums?.length * 40 + 30} style={{ letterSpacing: '10px', textAnchor: 'end', fontSize: '2rem' }}>
                        ={props.total}
                    </text>
                )}
            </g>
        </svg>
    )
}