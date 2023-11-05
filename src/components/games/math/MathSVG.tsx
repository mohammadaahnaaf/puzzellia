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
    console.log(props.total)

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="500" height="500">
            <g style={{ width: '100%', display: 'grid', alignItems: 'right', gap: '2px', padding: '1rem', justifyContent: 'end' }}
                transform={`translate(${digs * 45}, ${8 * 8} )`}>
                {nums?.map((item, index) => (
                    <g transform={`translate(${400 - digs * 50}, ${index * 42})`} key={index}>
                        {index < nums?.length - 1 ? (
                            <text x="0" y="0" xmlSpace="preserve" style={{ letterSpacing: '10px', textAnchor: 'end', fontSize: '2rem' }}>{item}</text>
                        ) : (
                            <text x="0" y="0" xmlSpace="preserve" style={{ letterSpacing: '10px', textAnchor: 'end', fontSize: '2rem' }}>
                                +{item}
                            </text>
                        )}
                    </g>
                ))}
                <line x2={-digs * 35} y1={(nums?.length * 38)} x1={400 - digs * 50} y2={(nums?.length * 38)} style={{ stroke: 'gray', strokeWidth: 2 }} />
                {!props.shows && (
                    <text xmlSpace="preserve" x={400 - digs * 50} y={nums?.length * 40 + 30} style={{ letterSpacing: '10px', textAnchor: 'end', fontSize: '2rem' }}>
                        ={props.total}
                    </text>
                )}
            </g>
        </svg>
    )
}