import Link from "next/link";
import Dashboard from "../components/Dashboard";

const layout = ({ children }) => {
  return (
    <div className="flex gap-3 pr-3">
      <Dashboard />
      {children}
    </div>
  );
};

export default layout;
