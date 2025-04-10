"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function ZoomImage({ src, alt }) {
  const [open, setOpen] = useState(false);

  const [finite, setFinite] = useState(false);
  const [closeOnPullUp, setCloseOnPullUp] = useState(false);
  const [closeOnPullDown, setCloseOnPullDown] = useState(false);
  const [closeOnBackdropClick, setCloseOnBackdropClick] = useState(false);

  return (
    <>
      <img
        src={src}
        alt={alt}
        onClick={() => setOpen(true)}
        style={{ cursor: "zoom-in", maxWidth: "100%", borderRadius: "0.25rem" }}
      />
      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={[{ src }]}
          controller={{
            closeOnPullDown: true,
            closeOnPullUp: true,
            closeOnBackdropClick: true,
          }}
          carousel={{ finite: true }}
          render={{
            buttonPrev: () => null,
            buttonNext: () => null,
          }}
        />
      )}
    </>
  );
}
