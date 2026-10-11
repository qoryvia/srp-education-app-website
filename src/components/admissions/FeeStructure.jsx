import { FiInfo, FiFileText } from "react-icons/fi";

const feeRows = [
  {
    id: 1,
    label: "Registration Fee",
    frequency: "As applicable",
    classes123: "₹2,000",
    classes45: "₹2,000",
    classes678: "₹3,000",
  },
  {
    id: 2,
    label: "Admission Fee",
    frequency: "As applicable",
    classes123: "₹2,000",
    classes45: "₹2,000",
    classes678: "₹3,000",
  },
  {
    id: 3,
    label: "Tuition Fee",
    frequency: "Quarterly",
    classes123: "₹1,300",
    classes45: "₹1,300",
    classes678: "₹1,500",
  },
  {
    id: 4,
    label: "Security Deposit (Refundable)",
    frequency: "Please confirm with school",
    classes123: "Not specified",
    classes45: "Not specified",
    classes678: "₹0",
  },
  {
    id: 5,
    label: "Other Facility Charges",
    frequency: "Half-yearly",
    classes123: "₹300",
    classes45: "₹600",
    classes678: "₹600",
  },
];

export default function FeeStructure() {
  return (
    <section
      id="fee-structure"
      className="px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20 xl:px-40"
    >
      <div className="max-w-3xl">
        <p className="eyebrow text-gold">Fees & Payments</p>

        <h2 className="h-section mt-2">
          Fee Structure 2026–27
        </h2>

        <span className="mt-4 block h-0.5 w-10 bg-gold" />

        <p className="mt-4 text-sm leading-7 text-gray-600">
          Refer to the fee details below for Classes I to VIII.
          Please contact the school office to confirm the applicable
          fees for your child's class and any additional charges.
        </p>
      </div>

      {/* Fee table */}
      <div className="mt-8 overflow-hidden border border-gray-200">
        <div className="flex items-center gap-3 border-b border-gray-200 bg-[#F6F6F3] px-4 py-4 sm:px-5">
          <FiFileText className="shrink-0 text-xl text-navy" />

          <div>
            <h3 className="text-sm font-semibold text-navy">
              Annual Fee Schedule
            </h3>

            <p className="mt-1 text-xs text-gray-500">
              Academic session 2026–27 · Amounts in Indian rupees
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[650px] border-collapse text-left text-sm">
            <caption className="sr-only">
              Fee structure for Classes I–III, IV–V and VI–VIII
              for academic session 2026–27.
            </caption>

            <thead className="bg-navy text-white">
              <tr>
                <th scope="col" className="px-4 py-4 font-semibold sm:px-5">
                  Fee Details
                </th>

                <th scope="col" className="px-4 py-4 font-semibold sm:px-5">
                  Classes I–III
                </th>

                <th scope="col" className="px-4 py-4 font-semibold sm:px-5">
                  Classes IV–V
                </th>

                <th scope="col" className="px-4 py-4 font-semibold sm:px-5">
                  Classes VI–VIII
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {feeRows.map((fee) => (
                <tr key={fee.id} className="align-top">
                  <th
                    scope="row"
                    className="px-4 py-4 font-semibold text-navy sm:px-5"
                  >
                    {fee.label}

                    <span className="mt-1 block text-xs font-normal text-gray-500">
                      {fee.frequency}
                    </span>
                  </th>

                  <td className="px-4 py-4 text-gray-700 sm:px-5">
                    {fee.classes123}
                  </td>

                  <td className="px-4 py-4 text-gray-700 sm:px-5">
                    {fee.classes45}
                  </td>

                  <td className="px-4 py-4 text-gray-700 sm:px-5">
                    {fee.classes678}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Fee clarifications */}
      <div className="mt-5 flex items-start gap-3 border-l-2 border-gold pl-4">
        <FiInfo className="mt-0.5 shrink-0 text-lg text-gold-600" />

        <div className="space-y-2 text-xs leading-6 text-gray-600">
          <p>
            The supplied fee details do not specify the refundable
            security deposit for Classes I–V. These amounts should be
            confirmed with the school before publication.
          </p>

          <p>
            Fees for Nursery–UKG and Classes IX–XII were not included in
            the supplied schedule. Please contact the school office for
            the applicable rates.
          </p>

          <p>
            Registration and admission fee collection terms, payment
            dates, and any additional charges should be confirmed
            directly with the school.
          </p>
        </div>
      </div>
    </section>
  );
}