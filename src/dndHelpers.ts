import * as React from 'react'

type DragEvent = React.DragEventHandler<HTMLElement>

type onDropCallback = (key: string) => void
type onDragOverCallback = (key: string) => void
type Draggability = Partial<React.HTMLAttributes<HTMLElement>>

export const useDropArea = (
    onDropCallback: onDropCallback,
    onDragOverCallback: onDragOverCallback = () => {}
): Draggability => {
    const onDrop: DragEvent = ({ dataTransfer }): void => {
        const sign = dataTransfer?.getData('sign')
        if (sign) {
            onDropCallback(sign)
        }
    }

    const onDragOver: DragEvent = (event): void => {
        // event.preventDefault()
        const sign = event.dataTransfer?.getData('sign')
        console.log(`on drag over: ${sign}`)
        if (sign) {
            onDragOverCallback(sign)
        }
    }

    return { onDragOver, onDrop }
}

export const useDraggable = (sign: string): Draggability => ({
    draggable: true,
    onDragStart: ({ dataTransfer }) => {
        dataTransfer?.setData('sign', sign)
    },
})
