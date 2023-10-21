import "./LinkButton.css"

interface LinkButtonProps {
	children: string
	link: string
}

const LinkButton = ({ children, link }: LinkButtonProps) => {
	return (
		<a href={link} className="link-button" target="_blank">
			{children}
		</a>
	)
}

export default LinkButton
