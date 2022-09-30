import { useDraggable, useDropArea } from './dndHelpers'
import styled from 'styled-components'

export const Draggable = ({ className, sign, children }: any) => {
    const draggableAbility = useDraggable(sign)
    return (
        <div {...draggableAbility} className={className}>
            {children}
        </div>
    )
}

export const DropArea = ({ className, onDrop, onDragOver, children }: any) => {
    const boxAbility = useDropArea(onDrop, onDragOver)
    return (
        <div {...boxAbility} className={className}>
            {children}
        </div>
    )
}

export const StyledDraggable = styled(Draggable)`
    flex: 1;
    padding: 0;
    margin: 0;
    background: yellow;
    width: 42px;
    height: 42px;
`

export const StyledDropCanvas = styled(DropArea)`
    width: 100vw;
    height: 100vh;
    background: aliceblue;
    top: 0;
    left: 0;
    position: absolute;
    padding: 0;
    margin: 0;
    z-index: -1;
`
