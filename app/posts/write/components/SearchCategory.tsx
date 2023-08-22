"use client";
import Fetch from "@/lib/api-client/base-api";
import React, { useEffect, useState } from "react";
import { IconType } from "react-icons";
import { VscLoading } from "react-icons/vsc";

type BaseSearchInputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
type customSearchInputProps = {
  label?: {
    text: string;
    position?: "left" | "center" | "right";
  };
  containerClass?: string;
  addon?: {
    icon?: IconType;
    text?: string;
    position?: "left" | "center" | "right";
    element?: React.ElementType;
  };
  onSelectValue?: (value: any) => void;
};

type searchInputProps = BaseSearchInputProps & customSearchInputProps;

const SearchCategory = ({ label, containerClass, addon, onSelectValue, ...props }: searchInputProps) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [keyword, setKeyword] = useState<string>("");

  const [categoryList, setCategoryList] = useState<category[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const id = props.id ? props.id : generateRandomString(5);
  let debounceTimeout: any;
  const handleSearch = async (keyword: string) => {
    if (isFocus) {
      clearTimeout(debounceTimeout);

      debounceTimeout = setTimeout(async () => {
        setIsLoading(true);
        const response = await Fetch.get<category[]>(`/categories?search=${keyword}`);
        if (response.status) {
          setCategoryList(response.payload);
        }
        setIsLoading(false);
      }, 500);
    }
  };
  useEffect(() => {
    window.addEventListener("click", () => {
      setIsFocus(false);
    });

    return () =>
      window.removeEventListener("click", () => {
        setIsFocus(false);
      });
  }, []);
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      className={`space-y-2 w-full ${containerClass} relative`}
    >
      {label && (
        <label id={id} htmlFor="password" className="block">
          {label.text}
        </label>
      )}
      <input
        onFocus={() => setIsFocus(true)}
        onChange={(e) => {
          setKeyword(e.target.value);
          handleSearch(e.target.value);
        }}
        value={keyword}
        {...props}
        id={id}
        className={`placeholder:text-sm w-full block border rounded border-dark/50 focus:outline-sky-700 px-2 py-1 ${props.className}`}
      />
      <div className={`absolute top-full w-full z-50 bg-white border rounded border-dark/50 focus:outline-sky-700py-1 min-h-[2rem] ${isFocus ? "block" : "hidden"} duration-200 overflow-hidden`}>
        {isLoading ? (
          <div className="w-full py-4 flex justify-center items-center">
            <VscLoading className="text-2xl animate-spin" />{" "}
          </div>
        ) : (
          <ul className="text-sm">
            {categoryList.map((item) => {
              return (
                <li key={item.id}>
                  <button
                    className="w-full py-2 hover:bg-dark/20 text-left px-2"
                    onFocus={() => setIsFocus(true)}
                    onClick={() => {
                      if (onSelectValue) onSelectValue(item);
                      setKeyword("");
                      setIsFocus(false);
                    }}
                  >
                    {item.category_name}
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchCategory;

function generateRandomString(length: number) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomString = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters[randomIndex];
  }

  return randomString;
}
