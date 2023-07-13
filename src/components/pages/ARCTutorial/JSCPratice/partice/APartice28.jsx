const APartice28 = () => {
  const invoiceNumbers = [12, 45, 54, 67, 2, 56, 88];

  // Index always start from 0
  const element = 3;
  const insertAt = 2;

  const newInvoiceNumbers = [
    ...invoiceNumbers.slice(0, insertAt),
    element,
    ...invoiceNumbers.slice(insertAt),
  ];

  console.log(newInvoiceNumbers);

  return (
    <>
      <h1> APartice28</h1>
    </>
  );
};

export default APartice28;
