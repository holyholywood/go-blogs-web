"use client";
import { EDITOR_JS_TOOLS } from "@/config/editorjs-config";
import React, { useState } from "react";
import { createReactEditorJS } from "react-editor-js";

const ReactEditorJS = createReactEditorJS();

const initialData = {
  time: 1556098174501,
  blocks: [
    {
      type: "header",
      data: {
        text: "Editor.js Example",
        level: 2,
      },
    },
    {
      type: "paragraph",
      data: {
        text: "Welcome to the Editor.js example!",
      },
    },
  ],
};
const WritePostFormEditorJs = () => {
  const [outputText, setOutputText] = useState<string>("");
  return (
    <div>
      <ReactEditorJS
        tools={EDITOR_JS_TOOLS}
        defaultValue={{
          time: 1635603431943,
          blocks: [
            {
              id: "sheNwCUP5A",
              type: "header",
              data: {
                text: "Editor.js",
                level: 2,
              },
            },
          ],
        }}
      />
    </div>
  );
};

export default WritePostFormEditorJs;
