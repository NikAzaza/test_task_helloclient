type DefaultSidebarItemTextViewProps = {
  text: string;
};

export function DefaultSidebarItemTextView({text}: DefaultSidebarItemTextViewProps) {
  return (
    <p className='flex pl-2'>
      {text}
    </p>
  );
}
