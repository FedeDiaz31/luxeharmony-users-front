import React from "react";
import BillingPdf from "../components/BillingPdf";
import { PDFDownloadLink } from "@react-pdf/renderer";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function PdfViewer() {
  const [bills, setBills] = useState("");
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const getBill = async () => {
      const response = await axios({
        headers: { Authorization: `Bearer ${user.token}` },
        method: "get",
        url: `${process.env.REACT_APP_API_URL}/bills/${user.id}`,
      });
      setBills(response.data);
    };
    getBill();
  }, []);

  const lastBillNumber = bills.length - 1;
  const bill = bills[lastBillNumber];

  return (
    <div className="mx-12 pt-[200px]">
      <h1>ESTA ES NUESTRA SECCION PARA DESCARGAR LA FACTURA</h1>
      <PDFDownloadLink
        document={<BillingPdf bill={bill} />}
        fileName="bill #idDeLaFactura"
      >
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
    </div>
  );
}

export default PdfViewer;
