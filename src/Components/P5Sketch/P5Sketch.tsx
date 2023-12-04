import { useEffect, useRef } from "react"
import p5 from "p5"

interface P5SketchProps {
	sketch: (p: p5) => void
	id?: string
	className?: string
	p5flex?: boolean
}

const P5Sketch = ({ sketch, id, className, p5flex = false }: P5SketchProps) => {
	const p5Ref = useRef<HTMLDivElement>(null)
	const sketchInitialized = useRef(false)

	useEffect(() => {
		if (!sketchInitialized.current) {
			sketchInitialized.current = true
			p5flex ? new p5(sketch) : new p5(sketch, p5Ref.current!)
		}
	})

	return <div {...{ id, className }} ref={p5flex ? undefined : p5Ref}></div>
}

export default P5Sketch
