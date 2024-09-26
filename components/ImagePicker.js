"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/Label";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState(null);
  const inputRef = useRef(null);

  function handleImageUpload() {
    inputRef.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }

  return (
    <div className="w-full">
      <Label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </Label>
      <div className="flex items-center space-x-4">
        <div className="w-32 h-32 relative rounded-md bg-gray-100 overflow-hidden">
          {!pickedImage && (
            <div className="flex items-center justify-center h-full text-gray-500">
              No image selected
            </div>
          )}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="Selected image"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          )}
        </div>
        <div>
          <input
            type="file"
            id={name}
            name={name}
            accept="image/png, image/jpeg"
            ref={inputRef}
            onChange={handleImageChange}
            className="hidden"
          />
          <Button
            type="button"
            variant="outline"
            onClick={handleImageUpload}
            className="px-4 py-2"
          >
            {pickedImage ? "Change Image" : "Upload Image"}
          </Button>
        </div>
      </div>
    </div>
  );
}
