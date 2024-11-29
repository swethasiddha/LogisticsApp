import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

function MyShipment() {
  const rowData = [
    {
      "Transport Mode": "Air",
      "Price without VAT": "2000",
      "Creation Date": "2024-11-20",
      "Cargo Description": "Electronics",
      Offsetting: "50",
      "Incoterm Location": "Los Angeles",
      "Quote Id": "Q1234",
      "Sales Order No.": "SO5678",
      "Shipment Status": "In Transit",
      "Booking Id": "B9876",
    },
    {
      "Transport Mode": "Sea",
      "Price without VAT": "1500",
      "Creation Date": "2024-11-18",
      "Cargo Description": "Furniture",
      Offsetting: "30",
      "Incoterm Location": "New York",
      "Quote Id": "Q5678",
      "Sales Order No.": "SO1234",
      "Shipment Status": "Delivered",
      "Booking Id": "B1234",
    },
  ];

  const columnDefs = [
    {
      headerCheckboxSelection: true,
      checkboxSelection: true,
      width: 80,
    },
    { field: "Transport Mode", width: 150 },
    { field: "Price without VAT", width: 150 },
    { field: "Creation Date", width: 150 },
    { field: "Cargo Description", width: 150 },
    { field: "Offsetting", width: 130 },
    { field: "Incoterm Location", width: 150 },
    { field: "Quote Id", width: 140 },
    { field: "Sales Order No.", width: 130 },
    { field: "Shipment Status", width: 140 },
    { field: "Booking Id", width: 140 },
  ];

  return (
    <>
      {/* <h1 className="font-bold text-2xl text-left m-5">My Shipment</h1> */}
      <div className="ag-theme-alpine h-screen">
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={{
            headerClass: "text-black font-bold",
            sortable: true,
            // resizable: true,
          }}
        />
      </div>
    </>
  );
}

export default MyShipment;
