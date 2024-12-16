import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { DialogHeader, DialogTitle } from "./ui/dialog";
import { Separator } from "./ui/separator";

type CustomDialogHeaderProps = {
  icon?: LucideIcon;
  title: string;
  subTitle?: string;

  iconClassName?: string;
  titleClassName?: string;
  subTitleClassName?: string;
};

function CustomDialogHeader(props: CustomDialogHeaderProps) {
  return (
    <DialogHeader>
      <DialogTitle asChild>
        <div className="mb-2 flex flex-col items-center gap-2">
          {props.icon && (
            <props.icon
              size={30}
              className={cn("stroke-primary", props.iconClassName)}
            />
          )}
          <p className={cn("text-xl text-primary", props.titleClassName)}>
            {props.title}
          </p>
          {props.subTitle && (
            <p
              className={cn(
                "text-sm text-muted-foreground",
                props.subTitleClassName,
              )}
            >
              {props.subTitle}
            </p>
          )}
        </div>
      </DialogTitle>
      <Separator />
    </DialogHeader>
  );
}

export default CustomDialogHeader;
