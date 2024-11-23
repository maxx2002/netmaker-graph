import { FiAlertCircle } from "react-icons/fi";
import Button from "./ui/button";
import { RxReload } from "react-icons/rx";
import { IoSettingsOutline } from "react-icons/io5";

const Header: React.FC = () => {
  return (
    <header className="relative mt-8 text-white bg-neutral-900 lg:mt-0">
      {/* Header Container */}
      <div className="px-4 py-6 sm:px-6 lg:px-8">
        <a href="" className=" text-primary">
          View All Networks
        </a>

        <div className="flex items-center justify-between mt-2 md:flex-row">
          <h1 className="text-4xl">netmaker</h1>

          {/* Right Buttons */}
          <div className="flex mt-1 gap-x-3 md:gap-x-4 md:flex-row">
            <Button>
              <FiAlertCircle />
              <span className="hidden md:block">Take Tour</span>
            </Button>
            <Button>
              <RxReload />
              <span className="hidden md:block">Reload</span>
            </Button>
            <Button>
              <IoSettingsOutline />
              <span className="hidden md:block">Network Settings</span>
            </Button>
          </div>
        </div>
      </div>
      <nav className="flex overflow-x-auto border-b border-neutral-600 tabs-container">
        <div className="flex px-2 space-x-6 md:px-4 lg:px-6">
          <button className="px-2 pb-2 text-lg transition border-b-2 border-transparent hover:border-neutral-500 whitespace-nowrap">
            Nodes (8)
          </button>
          <button className="px-2 pb-2 text-lg transition border-b-2 border-transparent hover:border-neutral-500 whitespace-nowrap">
            Remote Access (1)
          </button>
          <button className="px-2 pb-2 text-lg transition border-b-2 border-transparent hover:border-neutral-500 whitespace-nowrap">
            Egress (0)
          </button>
          <button className="px-2 pb-2 text-lg transition border-b-2 border-transparent hover:border-neutral-500 whitespace-nowrap">
            DNS
          </button>
          <button className="px-2 pb-2 text-lg border-b-2 text-primary border-primary whitespace-nowrap">
            Graph
          </button>
          <button className="px-2 pb-2 text-lg transition border-b-2 border-transparent hover:border-neutral-500 whitespace-nowrap">
            Info
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
