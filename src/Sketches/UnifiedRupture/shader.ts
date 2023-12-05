/**
 * Author: Zaron Chen
 * LICENSE: Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported
 * See the full text of the license here:
 * https://creativecommons.org/licenses/by-nc-sa/3.0/
 */

// noprotect

import * as Shadox from "shadox"

export const frag = `#version 300 es
	precision mediump float;

	uniform vec2 iResolution;
	uniform vec2 iMouse;
	uniform float iTime;

	${Shadox.displace}
	${Shadox.snoise3D}
	${Shadox.snoise3DImage}
	${Shadox.gradient}
	${Shadox.zcPalette(5)}
	${Shadox.extend}
	${Shadox.smooth}

	in vec2 vTexCoord;
	out vec4 fragColor;
	void main() {
		vec2 uv = vTexCoord;
		vec2 mouse = iMouse.xy/iResolution.xy;
		mouse = min(max(vec2(0.), mouse), vec2(1.));

		uv-=0.5;
		uv.x *= iResolution.x/iResolution.y;

		vec2 muv = smoo3(mirror(uv, 1.));

		float scal = 2.;
		float gain = mouse.y*100.;
		float ofst = .5;
		float expo = mouse.x*2.5;
		vec3  move = vec3(0., 0., iTime*0.0025);
		vec4 dimg = snoise3DImage(1.*uv, scal, gain, ofst, expo, move);

		float wei = 0.1;
		vec2 duv = smoo3(displace(muv, dimg.rg, ofst, wei));

		vec2 puv = smoo3(conical(duv, vec2(.5), 5., iTime*0.001));

		vec4 colors[] = vec4[](
			vec4(0.0, 0.0, 0.0, 1.0),
			vec4(0.8, 0.5, 0.0, 1.0),
			vec4(1.0, 1.0, 1.0, 1.0),
			vec4(0.3, 0.6, 0.7, 1.0),
			vec4(0.0, 0.0, 0.0, 1.0)
		);
		float positions[] = float[](
			0.0,
			0.25,
			0.5,
			0.75,
			1.0
		);
		vec4 color = smoo3(palette(puv.x, colors, positions));

		fragColor = smoo3(color);
	}
`

export const vert = `#version 300 es

	in vec3 aPosition;
	in vec2 aTexCoord;

	out vec2 vTexCoord;

	void main() {
		vTexCoord = aTexCoord;
		gl_Position = vec4(aPosition.xy*2.-1., aPosition.z, 1.);
	}
`
