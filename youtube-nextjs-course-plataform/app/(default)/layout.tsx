
type ILayout = Readonly<{ children: React.ReactNode }>;

export default function RootLayout({ children }: ILayout) {
  return (
    <>{children}</>
  );
}
