type PageTitleViewProps = {
  text: string;
};

export function PageTitleView({text}: PageTitleViewProps) {
  return (
      <h1>{text}</h1>
  );
}
