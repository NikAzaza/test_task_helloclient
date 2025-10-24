type DefaultSidebarItemIconViewProps = {
  imageSrc: string;
};

export function DefaultSidebarItemIconView({
  imageSrc,
}: DefaultSidebarItemIconViewProps) {

  return (
    <img className='w-8 ' src={imageSrc} alt=""/>
  );
}
