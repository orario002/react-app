import React from "react";
import {Row} from "reactstrap";
import Banner from "../../../Component/Banner";
import Summary from "../../../Component/Summary";
import ImageText from "../../../Component/ImageText";
import Outcome from "../../../Component/Outcome";
import data from "../../../Data/AdobeData";

const prev = "/portfolio/design/nfs";
const next = "/portfolio/design/puma";

class Adobe extends React.Component {
    render() {
        return (
            <Row className="container">
                <h1>Adobe B2B</h1>
                <Banner title={data.banner.title} intro={data.banner.intro} img={data.banner.img}/>
                <button className="btn btn-primary"><a href={prev}>Previous</a></button>
                <button className="btn btn-primary"><a href={next}>Next</a></button>
                <Summary overview={data.summary.overview} time={data.summary.time} tools={data.summary.tools}
                         roles={data.summary.roles} teams={data.summary.teams}/>
                <ImageText imagePosition="left" src={data.process.src} alt={data.process.name} title={data.process.title} description={data.process.description}/>
                <ImageText imagePosition="right" src={data.interview.src} alt={data.interview.name} title={data.interview.title} description={data.interview.description}/>
                <ImageText imagePosition="left" src={data.user.src} alt={data.user.name} title={data.user.title} description={data.user.description}/>
                <ImageText imagePosition="right" src={data.flow.src} alt={data.flow.name} title={data.flow.title} description={data.flow.description}/>
                <ImageText imagePosition="left" src={data.wireframe.src} alt={data.wireframe.name} title={data.wireframe.title} description={data.wireframe.description}/>
                <ImageText imagePosition="right" src={data.annotation.src} alt={data.annotation.name} title={data.annotation.title} description={data.annotation.description}/>
                <ImageText imagePosition="left" src={data.theme.src} alt={data.theme.name} title={data.theme.title} description={data.theme.description}/>
                <Outcome title={data.outcome.title} description={data.outcome.description} deliveries={data.outcome.deliveries} lesson={data.outcome.lesson}/>

 </Row>
        );
    }
}


export default Adobe;