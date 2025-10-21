export interface INavItem {
  name: string;
  link: string;
  icon: IconProp;
}

export interface IExperienceItem {
  designation: string;
  company: string;
  startDate: string;
  endDate?: string;
  isCurrentJob: boolean;
  location: string;
  shortDescription?: string;
  description: string[];
}
export type IServiceItem = {
  id: number | string;
  title: string;
  icon?: IconDefinition;
  shortDescription: string;
  description: string;
  icons: string[];
};
export interface ISocialLinkItem {
  url: string;
  icon: IconDefinition | string;
  text: string;
  name?: string;
}
export interface CoreComponentsProps {
  children: ReactNode;
  classNames?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  id?: string;
  elementRef?: RefObject<HTMLDivElement>;
}
export interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export interface BulletedTextProps {
  children: ReactNode;
  classNames?: string;
  iconSize?: string | number;
  bulletColor?: string;
}
