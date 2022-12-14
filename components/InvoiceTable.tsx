import { data } from "../data";

type Props = {};

const InvoiceTable = (props: Props) => {
  return (
    <section className="xl:w-11/12 flex flex-col justify-start items-center bg-[#f2f2f2] font-spartan">
      <div className="flex justify-between space-x-24 items-center w-1/2">
        <div className="w-1/2">
          <h1 className="font-bold text-3xl my-3 ">Invoices</h1>
          <h2 className="text-[#858BB2]">There are {data.length} invoices</h2>
        </div>
        <div className="w-1/2">
          <button>New Invoice +</button>
        </div>
      </div>

      {data.map((invoice) => (
        <div
          className="flex space-x-12 justify-center items-center  w-3/5 my-3 bg-white rounded-md py-5"
          key={invoice.id}
        >
          <h3 className="font-bold text-center w-1/5">
            <span className="text-gray-200">#</span> {invoice.id}
          </h3>
          <h3 className="text-center w-1/5 text-[#858BB2]">
            Due {invoice.paymentDue}
          </h3>
          <h3 className="text-center w-1/5 text-[#858BB2]">
            {invoice.clientName}
          </h3>
          <h3 className="text-center w-1/5 font-bold text-xl">
            ${invoice.total.toFixed(2)}
          </h3>
          <h3 className="text-center w-1/5 capitalize p-1">{invoice.status}</h3>
        </div>
      ))}
    </section>
  );
};

export default InvoiceTable;
