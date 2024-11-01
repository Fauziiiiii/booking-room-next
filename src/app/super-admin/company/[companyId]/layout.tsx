import { Card } from '@/components/ui/card';

export default function EditUserLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="min-h-[90vh] sm:mt-10 flex items-center justify-center">
            <Card className='w-full max-w-screen-lg p-6'>
                {children}
            </Card>
        </div>
    );
  }
  