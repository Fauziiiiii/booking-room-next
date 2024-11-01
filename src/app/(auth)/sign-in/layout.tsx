export default function SignInLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="min-h-[90vh] flex justify-center items-center bg-muted/50">
            {children}
        </div>
    );
  }
  