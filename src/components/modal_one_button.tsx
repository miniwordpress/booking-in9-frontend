import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { color } from "@material-tailwind/react/types/components/alert";
 
type DialogOneButtonProps = {
  title: string;
  body: string;
  buttonText: string;
  buttonColor: string;
  buttonHandler: () => void;
  open: boolean;
  setOpen: (open: boolean) => void;
};

export function DialogOneButton({
  title,
  body,
  buttonText,
  buttonColor,
  buttonHandler,
  open,
  setOpen,
}: DialogOneButtonProps) {
    return (
        <Dialog open={open} handler={setOpen}>
        <DialogHeader>{title}</DialogHeader>
        <DialogBody>{body}</DialogBody>
        <DialogFooter>
            <Button
            variant="gradient"
            className={buttonColor}
            onClick={() => {
                buttonHandler();
                setOpen(false);
            }}
            >
            <span>{buttonText}</span>
            </Button>
        </DialogFooter>
        </Dialog>
    );
}