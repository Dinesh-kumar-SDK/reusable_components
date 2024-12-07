import PropTypes from "prop-types";
import IconOne from "../../src/assets/icon-one.webp"
import IconTwo from "../../src/assets/icon-two.webp"
const Offer = ({ icon, title, description, link, linkText }) => {
    return (
        <div style={{ border: "1px solid", padding: "4px", margin: "4px" }}>
            <img src={IconMap[icon]} style={{ objectFit: "contain" }} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={link}>{linkText}</a>
        </div>
    );
};
const IconMap = {
    1: IconOne,
    2: IconTwo,
}

Offer.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string,
    linkText: PropTypes.string,
}
const offers = [
    {
        icon: "1",
        title: "Self Paced Courses",
        description: "Learn & Upskill via Online Courses",
        link: "/offers",
        linkText: "Take a look",
    },
    {
        icon: "2",
        title: "LIVE Classes",
        description: "Live Classes offering Guaranteed Job Placement Support",
        link: "/offers",
        linkText: "Take a look",
    },
    {
        icon: "2",
        title: "Full Stack Development",
        description: "Learn Javascript, HTML, CSS & more",
        link: "/features",
        linkText: "Know More",
    }]

const Main = () => {
    return <div style={{ display: "flex", flexWrap: "wrap" }}>
        {offers.map((o) => (
            <Offer
                key={o.title}
                icon={o.icon}
                title={o.title}
                description={o.description}
                link={o.link}
                linkText={o.linkText} />
        ))}</div>
}
export default Main;