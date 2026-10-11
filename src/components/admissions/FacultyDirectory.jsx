import { FiUsers } from "react-icons/fi";

const faculty = [
  {
    name: "Mukesh Mishra",
    designation: "Principal",
    qualification: "M.Sc., B.Ed.",
  },
  {
    name: "Priti Rai",
    designation: "P.R.T.",
    qualification: "M.A., D.El.Ed.",
  },
  {
    name: "Anupama Shah",
    designation: "P.R.T.",
    qualification: "B.Sc., D.El.Ed.",
  },
  {
    name: "Akanksha Mishra",
    designation: "P.R.T.",
    qualification: "B.Sc., D.El.Ed.",
  },
  {
    name: "Kalpana Chandra",
    designation: "P.R.T.",
    qualification: "M.A., B.Ed.",
  },
  {
    name: "Prashant Tiwari",
    designation: "P.R.T.",
    qualification: "M.Sc., BTC",
  },
  {
    name: "Ritu Patel",
    designation: "P.R.T.",
    qualification: "B.Sc., D.El.Ed.",
  },
  {
    name: "Manisha Prasad",
    designation: "P.R.T.",
    qualification: "B.Sc., D.El.Ed.",
  },
  {
    name: "Jyoti Dubey",
    designation: "P.R.T.",
    qualification: "M.B.A.",
  },
  {
    name: "Manish Paswan",
    designation: "T.G.T. (English)",
    qualification: "M.A., B.Ed.",
  },
  {
    name: "Poonam",
    designation: "T.G.T. (Hindi)",
    qualification: "M.A., B.Ed.",
  },
  {
    name: "Shyam Singh",
    designation: "T.G.T. (Mathematics)",
    qualification: "B.Sc., B.Ed.",
  },
  {
    name: "Akash Singh",
    designation: "T.G.T. (Science)",
    qualification: "M.Sc., B.Ed.",
  },
  {
    name: "Anamika Tiwari",
    designation: "T.G.T. (Social Studies)",
    qualification: "M.A., B.Ed.",
  },
  {
    name: "Vibha Pandey",
    designation: "T.G.T. (Computer)",
    qualification: "B.Com., BCA",
  },
  {
    name: "Govind Kumar",
    designation: "Librarian",
    qualification: "B.LIS.",
  },
  {
    name: "Sanjum Tarik",
    designation: "P.T.I.",
    qualification: "B.P.Ed.",
  },
  {
    name: "Shreetika Maurya",
    designation: "Special Educator",
    qualification: "M.A., B.Ed.S.E.",
  },
  {
    name: "Ramya Singh",
    designation: "Wellness Teacher",
    qualification: "M.A. in Psychology",
  },
];

export default function FacultyDirectory() {
  return (
    <section
      id="school-team"
      className="bg-[#F6F6F3] px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20 xl:px-40"
    >
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <p className="eyebrow text-gold">Our School Team</p>

          <h2 className="h-section mt-2">
            Educators Who Guide Our Students
          </h2>

          <span className="mt-4 block h-0.5 w-10 bg-gold" />

          <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-600">
            Our school team includes academic leadership, primary and
            subject teachers, and staff supporting students' wider
            learning and wellbeing.
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-2 text-sm font-medium text-navy">
          <FiUsers className="text-lg text-gold-600" />
          {faculty.length} team members
        </div>
      </div>

      <div className="mt-8 overflow-hidden border border-gray-200 bg-white">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <caption className="sr-only">
              S. R. P. Global School teacher and support staff directory.
            </caption>

            <thead className="bg-navy text-white">
              <tr>
                <th scope="col" className="px-4 py-4 font-semibold sm:px-5">
                  S. No.
                </th>

                <th scope="col" className="px-4 py-4 font-semibold sm:px-5">
                  Teacher Name
                </th>

                <th scope="col" className="px-4 py-4 font-semibold sm:px-5">
                  Designation
                </th>

                <th scope="col" className="px-4 py-4 font-semibold sm:px-5">
                  Qualification
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {faculty.map(({ name, designation, qualification }, index) => (
                <tr
                  key={`${name}-${designation}`}
                  className="transition-colors hover:bg-gray-50"
                >
                  <td className="px-4 py-3.5 text-gray-500 sm:px-5">
                    {String(index + 1).padStart(2, "0")}
                  </td>

                  <td className="px-4 py-3.5 font-medium text-navy sm:px-5">
                    {name}
                  </td>

                  <td className="px-4 py-3.5 text-gray-700 sm:px-5">
                    {designation}
                  </td>

                  <td className="px-4 py-3.5 text-gray-600 sm:px-5">
                    {qualification}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <p className="mt-3 text-xs leading-6 text-gray-500">
        Qualifications and designations are displayed as provided by
        the school. Please verify the current staff list before publishing.
      </p>
    </section>
  );
}