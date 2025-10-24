type SidebarHeaderViewProps = {
  title: string;
  titleContainerClasses: string;
  titleClasses: string;
};

export function SidebarHeaderView({
  title,
  titleContainerClasses,
  titleClasses,
}: SidebarHeaderViewProps) {

  return (
    <div className={titleContainerClasses}>
      <h2 className={titleClasses}>{title}</h2>
    </div>
  );
}
