import {useEffect, useRef, useState} from "react";
import {useSelector} from "react-redux";
import {usePDF} from "@react-pdf/renderer";
import {Document, Page, pdfjs} from "react-pdf";
import Resume from "./Pdf/index";
import {FaDownload, FaEye} from "react-icons/fa";
import {Link} from "react-router-dom";
import Loader from "../Loader";

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   "pdfjs-dist/build/pdf.worker.min.js",
//   import.meta.url
// ).toString();

import {GlobalWorkerOptions} from "pdfjs-dist";

GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const pdfPreview = (url) => {
  console.log(url);
  window.open(
    url,
    "Resume Preview",
    "toolbar=no,location=no,menubar=no width=600,height=800"
  );
};
function Preview() {
  const parentRef = useRef(null);
  const resumeData = useSelector((state) => state.resume);
  const document = <Resume data={resumeData} />;
  const [instance, updateInstance] = usePDF({document});
  console.log(document, parentRef, instance, resumeData);
  console.log(instance.url);
  // useEffect(() => {
  //   updateInstance({document});
  // }, [resumeData]);
  useEffect(() => {
    if (resumeData.saved) {
      updateInstance(document);
    }
  }, [resumeData.saved]);
  return (
    <div
      ref={parentRef}
      className="relative w-full md:max-w-[24rem] 2xl:max-w-[28rem]">
      {instance.loading ? (
        <Loader />
      ) : (
        <Document file={instance?.url} loading={<Loader />}>
          <Page
            pageNumber={1}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            loading={<Loader />}
            width={parentRef.current?.clientWidth}
          />
        </Document>
      )}
      {!instance.loading && (
        <div className="mt-4 flex justify-around">
          <button
            onClick={() => pdfPreview(instance.url)}
            className="btn text-sm">
            <span>Preview</span>
            <FaEye />
          </button>
          <a
            href={instance.url}
            download={`${resumeData.contact.name || "resume"}.pdf`}
            className="btn text-sm">
            <span>Download</span>
            <FaDownload />
          </a>
        </div>
      )}
    </div>
  );
}

export default Preview;
