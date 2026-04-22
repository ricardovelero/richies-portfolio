declare module 'react-vertical-timeline-component' {
  import type { CSSProperties, ReactElement, ReactNode } from 'react';

  type VerticalTimelineProps = {
    animate?: boolean;
    children?: ReactNode;
    className?: string;
    layout?: '1-column' | '1-column-left' | '1-column-right' | '2-columns';
    lineColor?: string;
  };

  type VerticalTimelineElementProps = {
    children?: ReactNode;
    className?: string;
    contentArrowStyle?: CSSProperties;
    contentStyle?: CSSProperties;
    date?: ReactNode;
    dateClassName?: string;
    icon?: ReactNode;
    iconClassName?: string;
    iconOnClick?: () => void;
    iconStyle?: CSSProperties;
    id?: string;
    intersectionObserverProps?: IntersectionObserverInit;
    position?: 'left' | 'right';
    style?: CSSProperties;
    textClassName?: string;
    visible?: boolean;
  };

  export function VerticalTimeline(
    props: VerticalTimelineProps,
  ): ReactElement;

  export function VerticalTimelineElement(
    props: VerticalTimelineElementProps,
  ): ReactElement;
}
