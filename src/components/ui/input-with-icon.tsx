import * as React from "react";
import { Input, InputProps } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { IconType } from "react-icons"; // atau gunakan ikon library lain

interface InputWithIconProps extends InputProps {
  icon: IconType;
}

const InputWithIcon = React.forwardRef<HTMLInputElement, InputWithIconProps>(
  ({ icon: Icon, className, ...props }, ref) => {
    return (
      <div className="relative flex items-center">
        <div className="absolute left-3 text-muted-foreground">
          <Icon size={18} />
        </div>
        <Input
          ref={ref}
          className={cn("pl-10", className)} // menambahkan padding-left untuk memberi ruang ikon
          {...props}
        />
      </div>
    );
  }
);

InputWithIcon.displayName = "InputWithIcon";

export { InputWithIcon };
