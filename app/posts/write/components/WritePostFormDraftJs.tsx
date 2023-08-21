"use client";
import Button from "@/app/components/atoms/Button";
import React, { useEffect, useState } from "react";
import { Editor, EditorState } from "draft-js";
const WritePostFormDraftJs = () => {
  const [editorState, setEditorState] = React.useState(() => EditorState.createEmpty());
  const [outputText, setOutputText] = useState<string>("");
  useEffect(() => {}, []);
  return (
    <div>
      <div className="w-full h-fit">
        <Editor editorState={editorState} onChange={setEditorState} spellCheck={false} />
      </div>
      <Button
        onClick={() => {
          console.info(outputText);
        }}
        className="bg-primary text-white"
      >
        Submit
      </Button>
    </div>
  );
};

export default WritePostFormDraftJs;
