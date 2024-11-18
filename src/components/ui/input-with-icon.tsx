import * as React from "react";
import { Input, InputProps } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { IconType } from "react-icons"; // atau gunakan ikon library lain
import { InputCustom } from "./input-custom";
import { InputCustomSearch } from "@/app/(user)/_component/search-input";

interface InputWithIconProps extends InputProps {
  icon: IconType;
}

const InputWithIcon = React.forwardRef<HTMLInputElement, InputWithIconProps>(
  ({ icon: Icon, className, ...props }, ref) => {
    return (
      <div className="relative flex items-center h-12 w-full rounded-3xl">
        <div className="absolute left-3 text-muted-foreground">
          <Icon size={18} />
        </div>
        <InputCustomSearch
          ref={ref}
          className={cn("pl-10", className)}
          {...props}
        />
      </div>
    );
  }
);

InputWithIcon.displayName = "InputWithIcon";

export { InputWithIcon };
