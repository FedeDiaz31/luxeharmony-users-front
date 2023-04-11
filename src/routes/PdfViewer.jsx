import React from "react";
import BillingPdf from "../components/BillingPdf";
import { PDFDownloadLink } from "@react-pdf/renderer";

function PdfViewer() {
  return (
    <div className="mx-12 pt-[200px]">
      <h1>ESTA ES NUESTRA SECCION PARA DESCARGAR LA FACTURA</h1>
      <PDFDownloadLink document={<BillingPdf />} fileName="bill #idDeLaFactura">
        {({ loading }) =>
          loading ? (
            <button className="bg-bgTertiaryColor text-textPrimary p-2   mt-4 font-primaryFont">
              loading document...
            </button>
          ) : (
            <button className="bg-bgTertiaryColor text-textPrimary p-2   mt-4 font-primaryFont">
              Download
            </button>
          )
        }
      </PDFDownloadLink>
      {/* <PDFViewer>
        <BillingPdf />
      </PDFViewer> */}
    </div>
  );
}

export default PdfViewer;
