
type Props = {
    canvasRef: any
}
export const MazeSVG = (props: Props) => {

    return <div ref={props.canvasRef}></div>;
};