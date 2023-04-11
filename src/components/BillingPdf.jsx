import React from "react";
import { Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";
import { useSelector } from "react-redux";

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
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

const BillingPdf = () => {
  return (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.title} fixed>
          Sold by: Luxe Harmony S.A.
        </Text>
        <Text style={styles.text}>
          Shipping Address: street, city, state, country
        </Text>
        <Text style={styles.text}>Order date: createdAt</Text>
        <Text style={styles.text}>Products: item + precio</Text>
        <Text style={styles.text}>Total price: totalPrice</Text>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
        />
      </Page>
    </Document>
  );
};

export default BillingPdf;
