import React from "react";
import BillingPdf from "../components/BillingPdf";
import { PDFDownloadLink } from "@react-pdf/renderer";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Subscribe from "../components/Subscribe";
import logo from "../assets/img/logoBlack.png";

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
    <div className="mx-12 pt-[120px]">
      <img className="w-[650px] mx-auto" src={logo} alt="" />
      <h1 className="category-title text-[3rem] text-textSecondary text-center mb-2 mt-16">
        Thanks for your purchase
      </h1>
      <h2 className="text-lg font-bold text-textSecondary text-center ">
        TO ENSURE YOUR SAFETY YOU MAY RETRIEVE YOUR PURCHASE
      </h2>
      <h2 className="text-lg font-bold text-textSecondary text-center mb-6">
        INFORMATION BY DOWNLOADING IT ABOVE
      </h2>
      <div className="flex justify-center cols-2">
        <div>
          <PDFDownloadLink
            document={<BillingPdf bill={bill} />}
            fileName="bill #idDeLaFactura"
          >
            {({ loading }) =>
              loading ? (
                <button className="bg-bgTertiaryColor text-textPrimary px-4 py-4  font-primaryFont ">
                  loading document...
                </button>
              ) : (
                <button className="bg-bgTertiaryColor text-textPrimary px-4 py-4 text-lg font-primaryFont ">
                  DOWNLOAD
                </button>
              )
            }
          </PDFDownloadLink>
        </div>
      </div>

      <div>
        <div className="mt-[60px]">
          <Subscribe />
        </div>
      </div>
    </div>
  );
}

export default PdfViewer;
