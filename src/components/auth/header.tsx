interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-4 w-full">
      <h1 className="font-semibold text-3xl">Auth</h1>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};
