/* eslint-disable react/prop-types */
import  { useEffect } from "react";
import Button from "./Button";



const ConfirmationAlert = ({
  isLoading,
  isOpen,
  onConfirm,
  onCancel,
  title,
  message,
  confirmText = "Confirm",
  cancelText = "Cancel",
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/30 transition-opacity"
        aria-hidden="true"
      />

      <div className="flex min-h-screen items-center justify-center p-4 text-center">
        <div
          className="inline-block w-full max-w-md transform overflow-hidden rounded-lg bg-white text-left align-middle shadow-xl transition-all"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-white p-6">
            <h3 className="text-xl font-medium leading-6 text-gray-900">
              {title}
            </h3>
            <div className="mt-2">
              <p className=" text-gray-500">{message}</p>
            </div>
          </div>
          <div className="flex justify-end space-x-3 bg-gray-50 px-6 py-4">
            <Button
              onClick={onCancel}
              className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {cancelText}
            </Button>
            <Button
              isLoading={isLoading}
              onClick={onConfirm}
              className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {confirmText}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationAlert;