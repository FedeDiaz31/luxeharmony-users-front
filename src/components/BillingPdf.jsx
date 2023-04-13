import { Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";
import Spinner from "../components/Spinner";
import { useSelector } from "react-redux";
import { PDFDownloadLink } from "@react-pdf/renderer";
import axios from "axios";
import { useState, useEffect } from "react";
// import { BlindsClosedSharp } from "@mui/icons-material";

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 135,
  },
  title: {
    fontSize: 22,
    paddingHorizontal: 65,
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "center",
    fontFamily: "Times-Roman",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

const BillingPdf = ({ bill }) => {
  if (bill) {
    const { city, country, createdAt, lastname, products, totalPrice } = bill;

    return (
      <Document>
        <Page style={styles.body}>
          <Text style={styles.title} fixed>
            Luxe Harmony S.A.
          </Text>
          <Text style={styles.text}>
            This recipe belongs to Mr/Mrs {lastname} purchase made on Luxe
            Harmony S.A.
          </Text>
          <Text style={styles.text}>
            Sold to Mr/Mrs {lastname} on {createdAt}
          </Text>
          {products.map((item, id) => {
            return (
              <Text key={id} style={styles.text}>
                - {item.product.brand.name}, {item.product.model}, at $
                {item.product.price}
              </Text>
            );
          })}
          <Text style={styles.text}>
            Shipped to {country}, {city}
          </Text>
          <Text style={styles.text}>Total price $ {totalPrice}</Text>
          <Text style={styles.text}></Text>
          <Text
            style={styles.pageNumber}
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
          />
        </Page>
      </Document>
    );
  } else {
    return <div>{console.log("no cargo")}</div>;
  }
};

export default BillingPdf;
