import { useEffect, useRef } from "react"
import p5 from "p5"
import "./P5Sketch.css"

interface P5SketchProps {
	sketch: (p: p5) => void
}

const P5Sketch = ({ sketch }: P5SketchProps) => {
	const p5Ref = useRef<HTMLDivElement>(null)
	const sketchInitialized = useRef(false)

	useEffect(() => {
		if (!sketchInitialized.current) {
			sketchInitialized.current = true
			new p5(sketch, p5Ref.current!)
		}
	})

	return <div className="p5-container" ref={p5Ref}></div>
}

export default P5Sketch
