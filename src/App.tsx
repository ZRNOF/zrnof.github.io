import LinkGroup from "./Components/LinkGroup/LinkGroup"
import myLinks from "./myLinks"
import Welcome from "./Sketches/Welcome"

function App() {
	return (
		<>
			<LinkGroup linkItems={myLinks} />
			<Welcome />
		</>
	)
}

export default App
