import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [selected, setSelected] = useState("");

  const handleSelect = (link) => {
    setSelected(link);
  };

  return (
    <nav className="bg-gradient-to-r from-[#FBCC94] to-[#8463F8] px-4 py-5">
      <ul className="flex justify-center items-center gap-5">
        <li className={`text-white ${selected === "form" ? "underline" : ""}`}>
          <Link to="/form" onClick={() => handleSelect("form")}>
            تبرع
          </Link>
        </li>
        <li
          className={`text-white ${selected === "services" ? "underline" : ""}`}
        >
          <Link to="/services" onClick={() => handleSelect("services")}>
            الخدمات
          </Link>
        </li>
        <li className={`text-white ${selected === "goal" ? "underline" : ""}`}>
          <Link to="goal" onClick={() => handleSelect("goal")}>
            الأهداف
          </Link>
        </li>
        <li className={`text-white ${selected === "home" ? "underline" : ""}`}>
          <Link to="/" onClick={() => handleSelect("home")}>
            الصفحة الرئيسية
          </Link>
        </li>
        <li
          className={`text-white ${selected === "support" ? "underline" : ""}`}
        >
          <Link to="/support" onClick={() => handleSelect("support")}>
            الدعم
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
