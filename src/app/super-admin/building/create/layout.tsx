import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function CreateUserLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="min-h-[90vh] sm:mt-10 flex items-center justify-center">
            <Card className='w-full max-w-screen-lg p-6'>
                <CardHeader>
                    <CardTitle className='font-extrabold text-2xl'>Create Building</CardTitle>
                    <CardDescription>Create your new Building in one-click.</CardDescription>
                </CardHeader>
                <CardContent>
                    {children}
                </CardContent>
            </Card>
        </div>
    );
  }
  