import { Dialog } from "@headlessui/react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
};

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
}: ModalProps) {
  return (
    <Dialog
      open={isOpen}
      as="div"
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClose={onClose}
    >
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/60 z-0" aria-hidden="true" />
      {/* Modal Content */}
      <div className="relative z-10 flex min-h-full items-center justify-center w-full p-4">
        <Dialog.Panel className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
          {title && (
            <Dialog.Title as="h3" className="text-base font-medium text-gray-900">
              {title}
            </Dialog.Title>
          )}
          {children}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
