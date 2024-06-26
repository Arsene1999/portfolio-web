import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { TimelineSectionTitle, TimelineSectionWrapper } from "./styles";
import TimeInfo from "./time-info/TimeInfo";
import { timeLineResources } from "../../../resources/time-line/TimeLineResources";

const TimelineSection = () => {
  return (
    <TimelineSectionWrapper id="experience">
      <TimelineSectionTitle>Experiência</TimelineSectionTitle>
      <VerticalTimeline>
        {timeLineResources.map((t) => (
          <TimeInfo
            date={t.date}
            title={t.title}
            subTitle={t.subTitle}
            infoText={t.infoText}
          />
        ))}
      </VerticalTimeline>
    </TimelineSectionWrapper>
  );
};

export default TimelineSection;
