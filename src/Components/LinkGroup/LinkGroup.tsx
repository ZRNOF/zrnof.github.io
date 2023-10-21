import LinkButton from "./LinkButton"
import "./LinkGroup.css"

interface linkItem {
	name: string
	link: string
}

interface LinkGroupProps {
	linkItems: linkItem[]
}

const LinkGroup = ({ linkItems }: LinkGroupProps) => {
	return (
		<div className="link-group fade-in">
			{linkItems.map((linkItem, index) => {
				return (
					<LinkButton key={index} link={linkItem.link}>
						{linkItem.name}
					</LinkButton>
				)
			})}
		</div>
	)
}

export default LinkGroup
