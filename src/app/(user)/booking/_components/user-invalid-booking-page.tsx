import React from 'react';
import { useRouter } from 'next/navigation';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription, 
  DialogFooter 
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface InvalidBookingPageProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InvalidBookingPage: React.FC<InvalidBookingPageProps> = ({ isOpen, onClose }) => {
  const router = useRouter();

  const handleGoToHome = () => {
    router.push('/home');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Details on this page have changed</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          You can return to the search page, then search for the accommodation and reselect the rooms you want.
        </DialogDescription>
        <DialogFooter>
          <Button onClick={handleGoToHome} className="w-full">
            Return to Home
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};