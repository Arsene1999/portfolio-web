import { FC } from "react";
import { ITimeInfo } from "./interfaces";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { BsPersonWorkspace } from "react-icons/bs";

const TimeInfo: FC<ITimeInfo> = ({
  date,
  title,
  subTitle,
  infoText,
  contentStyle = {
    background: "var(--white)",
    color: "var(--black)",
    border: "2px solid var(--dark-green)",
  },
  contentArrowStyle = { borderRight: "7px solid  var(--dark-green)" },
  iconStyle = { background: "var(--dark-green)", color: "#fff" },
}) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={contentStyle}
      contentArrowStyle={contentArrowStyle}
      date={date}
      iconStyle={iconStyle}
      icon={<BsPersonWorkspace />}
    >
      <h3 className="vertical-timeline-element-title">{title}</h3>
      <h4 className="vertical-timeline-element-subtitle">{subTitle}</h4>
      <p>{infoText}</p>
    </VerticalTimelineElement>
  );
};

export default TimeInfo;
