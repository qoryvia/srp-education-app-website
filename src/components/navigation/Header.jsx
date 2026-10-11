import { FiUsers, FiGlobe, FiAward, FiPhone, FiMail } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";

const utilityLinks = [
  { label: "Campus Tour", icon: FiGlobe },
  { label: "Apply Now", icon: FaGraduationCap },
  { label: "Current Students", icon: FiUsers },
  { label: "Faculty & Staff", icon: FiAward },
];

const Header = () => {
  return (
    <div className="hidden border-b border-gray-200 bg-gray-50 text-[11px] text-gray-700 md:block">
      <div className="px-5 xl:px-40 flex items-center justify-between py-2.5">
        <ul className="flex items-center gap-6">
          {utilityLinks.map(({ label, icon: Icon }) => (
            <li key={label}>
              <a href="#" className="flex items-center gap-1.5 hover:text-navy">
                <Icon className="text-gold-600" /> {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-6">
          <a
            href="tel:9170316993"
            className="flex items-center gap-1.5 hover:text-navy"
          >
            <FiPhone className="text-navy" /> +91-9170316993
          </a>
          <a
            href="mailto:info@plsglobalschool.com"
            className="flex items-center gap-1.5 hover:text-navy"
          >
            <FiMail className="text-navy" /> info@plsglobalschool.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
