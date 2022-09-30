import {
    DropArea,
    Draggable,
    StyledDraggable,
    StyledDropCanvas,
} from './DraggableComponent'
import './App.css'
import styled from 'styled-components'

const StyledApp = styled.div`
    display: flex;
`

const App = () => {
    const itemDroppedToCanvas = (item: string) => {
        console.log(`inside the canvas`)
        console.log(item)
    }
    const draggedOverCanvas = (item: string) => {
        console.log(`${item} was dragged over the canvas`)
    }

    return (
        <StyledApp>
            <h3>React.ts drag and drop</h3>

            <Draggable sign="Joe DiMaggio">
                <div className="ball green-ball" />
            </Draggable>

            <StyledDraggable sign="Styled, yo"></StyledDraggable>

            <DropArea
                onDrop={(item: string) =>
                    console.log(`inside the mini drop ${item}`)
                }
            >
                <div className="box" />
            </DropArea>

            <StyledDropCanvas
                onDrop={itemDroppedToCanvas}
                onDragOver={draggedOverCanvas}
            />
        </StyledApp>
    )
}

export default App
