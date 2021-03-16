import Image from "../../images/pic.PNG";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import { ExternalLink } from "react-external-link";
import YouTubeIcon from "@material-ui/icons/YouTube";


export default function Card({ item, index }) {
	const Styles = {
		link:{
			color:"inherit"
		}
	}
	return (
		<div className='pr' id={index % 2 === 0 && "pr-left"}>
			<img src={item?.imgURL} alt='err' />

			<div className='pr-data'>
				<div className='pr-title' id={index % 2 === 0 && "pr-title-left"}>
					{item.featured && <p>Featured Project</p>}
					<p>{item.title}</p>
				</div>
				<div className='pr-desc' id={index % 2 === 0 && "pr-desc-left"}>
					<p>{item.desc}</p>
				</div>
				<div className='pr-tags' id={index % 2 === 0 && "pr-tags-left"}>
					{item.tech?.map((tag, index) => (
						<span key={index}>{tag}</span>
					))}
				</div>
				<div className='pr-links' id={index % 2 === 0 && "pr-links-left"}>
					<span>
						<ExternalLink style={Styles.link} href={item.git_link} ><GitHubIcon /></ExternalLink>
					</span>
					<span>
						<ExternalLink style={Styles.link} href={item.demo_link} ><OpenInNewIcon /></ExternalLink>
					</span>
					{item.yt_link?.length > 0 && <span>
						<ExternalLink style={Styles.link} href={item.yt_link} ><YouTubeIcon /></ExternalLink>
					</span>}
				</div>
			</div>
		</div>
	);
}
