/**
 * Author: Zaron Chen
 * LICENSE: Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported
 * See the full text of the license here:
 * https://creativecommons.org/licenses/by-nc-sa/3.0/
 */

import p5 from "p5"
import { mountFlex } from "p5.flex"
import { vert, frag } from "./shader"
import "./UnifiedRupture.css"

mountFlex(p5)

const UnifiedRupture = (p: p5) => {
	let theShader: p5.Shader
	let Buffer: p5.Framebuffer
	const parent = document.getElementById(
		"unified-rupture-container"
	) as HTMLDivElement

	p.setup = () => {
		p.createCanvas(600, 600, p.WEBGL)
		p.pixelDensity(2)
		Buffer = p.createFramebuffer({ format: p.FLOAT })
		theShader = p.createShader(vert, frag)
		p.noStroke()
		p.imageMode(p.CENTER)
		p.flex({
			container: { parent },
			canvas: { fit: p.COVER },
			stylePage: false,
		})
	}

	p.draw = () => {
		Buffer.draw(() => {
			p.shader(theShader)
			theShader.setUniform("iResolution", [p.width, p.height])
			theShader.setUniform("iMouse", [p.mouseX, p.mouseY])
			theShader.setUniform("iTime", p.frameCount)
			p.rect(0, 0, p.width, p.height)
		})
		p.image(Buffer, 0, 0)
	}
}

export default UnifiedRupture
