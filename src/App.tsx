import LinkGroup from "./Components/LinkGroup/LinkGroup"
import myLinks from "./myLinks"
import P5Sketch from "./Components/P5Sketch"
import Welcome from "./Sketches/Welcome"

function App() {
	return (
		<>
			<P5Sketch sketch={Welcome} id="welcome-container" p5flex />
			<LinkGroup linkItems={myLinks} />
		</>
	)
}

export default App
