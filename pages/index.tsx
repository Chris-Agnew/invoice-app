import InvoiceTable from "../components/InvoiceTable";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="flex  ">
      <Navbar />
      <InvoiceTable />
    </div>
  );
}
