import p5 from "p5"
import { createNoise4D } from "simplex-noise"
import P5Sketch from "../../Components/P5Sketch"

const Welcome = () => {
	const sketch = (p: p5) => {
		const simplexNoiseSeed = p.random()
		const noise4D = createNoise4D(() => simplexNoiseSeed)
		const speed = 0.01
		const radius = 180
		const amount = 200
		const weiRange = 120
		const circleSize = 10
		const isCurve = true
		const isShowCircle = true

		p.setup = () => {
			p.createCanvas(p.windowWidth, p.windowHeight)
			p.pixelDensity(2)
			p.stroke(255)
			p.noFill()
		}

		p.draw = () => {
			const t = p.frameCount * speed
			p.background(0)
			const noiseWeight = p.map(p.mouseX, 0, p.width, -weiRange, weiRange, true)
			const angle = p.map(p.mouseY, 0, p.height, -p.PI, p.PI, true)
			p.translate(p.width / 2, p.height / 2)
			p.rotate(angle)
			drawNobo(radius, noiseWeight, amount, circleSize, t)
		}

		const drawNobo = (
			radius: number,
			noiseWeight: number,
			amount: number,
			circleSize: number,
			t: number
		) => {
			p.push()
			p.beginShape()
			for (
				let i = 0;
				i < (p.TWO_PI / amount) * (amount + 3);
				i += p.TWO_PI / amount
			) {
				const x = p.cos(i) * radius
				const y = p.sin(i) * radius
				const nx = noise4D(x + 100, y + 200, p.cos(t), p.sin(t)) * noiseWeight
				const ny = noise4D(x + 300, y + 400, p.cos(t), p.sin(t)) * noiseWeight
				if (isCurve) p.curveVertex(x + nx, y + ny)
				else p.vertex(x + nx, y + ny)
				if (isShowCircle) p.circle(x + nx, y + ny, circleSize)
			}
			p.endShape()
			p.pop()
		}
	}
	return <P5Sketch sketch={sketch} />
}

export default Welcome
