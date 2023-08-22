"use client";
import React, { useEffect, useState } from "react";
import { RiCloseLine } from "react-icons/ri";
type SnackbarProps = {
  message: string | null;
};
const Snackbar = ({ message }: SnackbarProps) => {
  const [localMessage, setLocalMessage] = useState<string | null>(null);

  useEffect(() => {
    setLocalMessage(message);
  }, [message]);
  return (
    <>
      {localMessage && (
        <div className="bg-rose-100 text-rose-600 border border-rose-600 rounded text-center py-4 px-8 flex justify-center items-center">
          <span className="flex-grow">{localMessage}</span>
          <button
            className=""
            onClick={() => {
              setLocalMessage(null);
            }}
          >
            <RiCloseLine />
          </button>
        </div>
      )}
    </>
  );
};

export default Snackbar;
