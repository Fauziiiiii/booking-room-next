import React from 'react';
import {
  ResponsiveModal,
  ResponsiveModalContent,
  ResponsiveModalDescription,
  ResponsiveModalHeader,
  ResponsiveModalTitle,
  ResponsiveModalTrigger,
} from '@/components/ui/responsive-modal';

const ResponsiveModalDemo = () => {
  return (
    <ResponsiveModal>
      <ResponsiveModalTrigger asChild>
        <p className='text-sm text-[#666c77]'>Change</p>
      </ResponsiveModalTrigger>
      <ResponsiveModalContent>
        <ResponsiveModalHeader>
          <ResponsiveModalTitle>Are you absolutely sure?</ResponsiveModalTitle>
          <ResponsiveModalDescription>
            This action cannot be undone. This will permanently delete your account and remove your
            data from our servers.
          </ResponsiveModalDescription>
        </ResponsiveModalHeader>
      </ResponsiveModalContent>
    </ResponsiveModal>
  );
};

export default ResponsiveModalDemo;
