import "p5"

declare module "p5" {
	interface p5InstanceExtensions {
		createFramebuffer(options?: object | undefined): p5.Framebuffer
	}
}
