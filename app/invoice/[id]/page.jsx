const Invoice = () => {
  return (
    <div className="max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto my-4 sm:my-10">
      <div className="sm:w-11/12 lg:w-3/4 mx-auto">
        <div className="flex flex-col p-4 sm:p-10 bg-white shadow-md  dark:bg-neutral-800">
          <div className="flex justify-between">
            <div className="my-auto">
              <h1 className="text-4xl font-bold text-blue-500">PORTO</h1>
              <p className="indent-10 font-bold text-sm text-blue-500 -mt-2">
                eCommerce
              </p>
            </div>
            <div className="text-end">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-neutral-200">
                Invoice #
              </h2>
              <span className="mt-1 block text-gray-500 dark:text-neutral-500">
                3682303
              </span>

              <address className="mt-4 not-italic text-gray-800 dark:text-neutral-200">
                45 Roker Terrace
                <br />
                Latheronwheel
                <br />
                KW5 8NW, London
                <br />
                United Kingdom
                <br />
              </address>
            </div>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 gap-3">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                Bill to:
              </h3>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                Sara Williams
              </h3>
              <address className="mt-2 not-italic text-gray-500 dark:text-neutral-500">
                280 Suzanne Throughway,
                <br />
                Breannabury, OR 45801,
                <br />
                United States
                <br />
              </address>
            </div>

            <div className="sm:text-end space-y-2">
              <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
                <dl className="grid sm:grid-cols-5 gap-x-3">
                  <dt className="col-span-3 font-semibold text-gray-800 dark:text-neutral-200">
                    Invoice date:
                  </dt>
                  <dd className="col-span-2 text-gray-500 dark:text-neutral-500">
                    03/10/2018
                  </dd>
                </dl>
                <dl className="grid sm:grid-cols-5 gap-x-3">
                  <dt className="col-span-3 font-semibold text-gray-800 dark:text-neutral-200">
                    Due date:
                  </dt>
                  <dd className="col-span-2 text-gray-500 dark:text-neutral-500">
                    03/11/2018
                  </dd>
                </dl>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="border border-gray-200 p-4 rounded-lg space-y-4 dark:border-neutral-700">
              <div className="hidden sm:grid sm:grid-cols-5">
                <div className="sm:col-span-2 text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                  Item
                </div>
                <div className="text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                  Qty
                </div>
                <div className="text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                  Rate
                </div>
                <div className="text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                  Amount
                </div>
              </div>

              <div className="hidden sm:block border-b border-gray-200 dark:border-neutral-700"></div>

              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                <div className="col-span-full sm:col-span-2">
                  <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                    Item
                  </h5>
                  <p className="font-medium text-gray-800 dark:text-neutral-200">
                    Design UX and UI
                  </p>
                </div>
                <div>
                  <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                    Qty
                  </h5>
                  <p className="text-gray-800 dark:text-neutral-200">1</p>
                </div>
                <div>
                  <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                    Rate
                  </h5>
                  <p className="text-gray-800 dark:text-neutral-200">5</p>
                </div>
                <div>
                  <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                    Amount
                  </h5>
                  <p className="sm:text-end text-gray-800 dark:text-neutral-200">
                    $500
                  </p>
                </div>
              </div>

              <div className="sm:hidden border-b border-gray-200 dark:border-neutral-700"></div>

              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                <div className="col-span-full sm:col-span-2">
                  <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                    Item
                  </h5>
                  <p className="font-medium text-gray-800 dark:text-neutral-200">
                    Web project
                  </p>
                </div>
                <div>
                  <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                    Qty
                  </h5>
                  <p className="text-gray-800 dark:text-neutral-200">1</p>
                </div>
                <div>
                  <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                    Rate
                  </h5>
                  <p className="text-gray-800 dark:text-neutral-200">24</p>
                </div>
                <div>
                  <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                    Amount
                  </h5>
                  <p className="sm:text-end text-gray-800 dark:text-neutral-200">
                    $1250
                  </p>
                </div>
              </div>

              <div className="sm:hidden border-b border-gray-200 dark:border-neutral-700"></div>

              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                <div className="col-span-full sm:col-span-2">
                  <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                    Item
                  </h5>
                  <p className="font-medium text-gray-800 dark:text-neutral-200">
                    SEO
                  </p>
                </div>
                <div>
                  <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                    Qty
                  </h5>
                  <p className="text-gray-800 dark:text-neutral-200">1</p>
                </div>
                <div>
                  <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                    Rate
                  </h5>
                  <p className="text-gray-800 dark:text-neutral-200">6</p>
                </div>
                <div>
                  <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                    Amount
                  </h5>
                  <p className="sm:text-end text-gray-800 dark:text-neutral-200">
                    $2000
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex sm:justify-end">
            <div className="w-full max-w-2xl sm:text-end space-y-2">
              <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
                <dl className="grid sm:grid-cols-5 gap-x-3">
                  <dt className="col-span-3 font-semibold text-gray-800 dark:text-neutral-200">
                    Subtotal:
                  </dt>
                  <dd className="col-span-2 text-gray-500 dark:text-neutral-500">
                    $1905.00
                  </dd>
                </dl>
                <dl className="grid sm:grid-cols-5 gap-x-3">
                  <dt className="col-span-3 font-semibold text-gray-800 dark:text-neutral-200">
                    Tax:
                  </dt>
                  <dd className="col-span-2 text-gray-500 dark:text-neutral-500">
                    $285.00
                  </dd>
                </dl>
                <dl className="grid sm:grid-cols-5 gap-x-3">
                  <dt className="col-span-3 font-semibold text-gray-800 dark:text-neutral-200">
                    Total:
                  </dt>
                  <dd className="col-span-2 text-gray-500 dark:text-neutral-500">
                    $2,200.00
                  </dd>
                </dl>
                <dl className="grid sm:grid-cols-5 gap-x-3">
                  <dt className="col-span-3 font-semibold text-gray-800 dark:text-neutral-200">
                    Amount Paid:
                  </dt>
                  <dd className="col-span-2 text-gray-500 dark:text-neutral-500">
                    $0.00
                  </dd>
                </dl>
                <dl className="grid sm:grid-cols-5 gap-x-3">
                  <dt className="col-span-3 font-semibold text-gray-800 dark:text-neutral-200">
                    Due Balance:
                  </dt>
                  <dd className="col-span-2 text-gray-500 dark:text-neutral-500">
                    $2,200.00
                  </dd>
                </dl>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-sm text-gray-500 dark:text-neutral-500">
              Payment terms are 14 days. Please be aware that according to the
              Late Payment of Unwrapped Debt Act 0000, freelancers are entitled
              to claim a 00.00 late fee upon non-payment of debts after this
              time, at which point a new invoice will be submitted with the
              addition of this fee. If payment of the revised invoice is not
              received within a further 14 days, additional interest will be
              charged to the overdue account and a statutory rate of 8% plus
              Bank of England base of 0.5%, totalling 8.5%. Parties cannot
              contract out of the Act’s provisions.
            </p>
          </div>

          <div className="mt-8">
            <p className="text-sm text-gray-500 dark:text-neutral-500">
              If you have any questions concerning this invoice, contact
              <a
                href="#"
                className="hover:underline text-gray-800 dark:text-neutral-200"
              >
                [email protected]
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
