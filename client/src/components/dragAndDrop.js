import React from "react";
import { DragDrop } from "@uppy/react";
import '@uppy/core/dist/style.css'
import '@uppy/drag-drop/dist/style.css'

export default function MyComponent(props) {
  const { uppy } = props;
  return (
    <DragDrop
      width="100%"
      height="100%"
      note="Images up to 300×300px"
      uppy={uppy}
      locale={{
        strings: {
          dropHereOr: "Drop here or %{browse}",
          browse: "browse",
        },
      }}
    />
  );
}
