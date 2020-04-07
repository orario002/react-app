import React from "react";
import {Row} from "reactstrap";
import Banner from "../../../Component/Banner";
import Summary from "../../../Component/Summary";
import ImageText from "../../../Component/ImageText";
import Outcome from "../../../Component/Outcome";
import data from "../../../Data/AdobeData";

class Adobe extends React.Component {
    render() {
        return (
            <Row className="container">
                <h1>Adobe B2B</h1>
                <Banner title={data.banner.title} intro={data.banner.intro} img={data.banner.img}/>
                <button className="btn btn-primary"><a href="/portfolio/design/nfs">Previous</a></button>
                <button className="btn btn-primary"><a href="/portfolio/design/puma">Next</a></button>
                <Summary overview={data.summary.overview} time={data.summary.time} tools={data.summary.tools}
                         roles={data.summary.roles} teams={data.summary.teams}/>
                <ImageText imagePosition="left" src={data.process.src} alt={data.process.name} title={data.process.title} description={data.process.description}/>
                <ImageText imagePosition="right" src={data.discovery.src} alt={data.discovery.name} title={data.discovery.title} description={data.discovery.description}/>
                <ImageText imagePosition="left" src={data.research.src} alt={data.research.name} title={data.research.title} description={data.research.description}/>
                <ImageText imagePosition="right" src={data.empathy.src} alt={data.empathy.name} title={data.empathy.title} description={data.empathy.description}/>
                <ImageText imagePosition="left" src={data.journey.src} alt={data.journey.name} title={data.journey.title} description={data.journey.description}/>
                <ImageText imagePosition="right" src={data.style.src} alt={data.style.name} title={data.style.title} description={data.style.description}/>
                <ImageText imagePosition="left" src={data.component.src} alt={data.component.name} title={data.component.title} description={data.component.description}/>
                <Outcome title={data.outcome.title} description={data.outcome.description} deliveries={data.outcome.deliveries} lesson={data.outcome.lesson}/>

 </Row>
        );
    }
}


export default Adobe;