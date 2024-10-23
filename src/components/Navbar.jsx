import notification from "../assets/notification.png";
import message from "../assets/message.png";
function Navbar() {
  return (
    <nav className="col-span-11 flex flex-row justify-between items-center">
      <div></div>

      <div className="flex flex-row gap-3 items-center justify-between">
        {/* Notification */}
        <div className="drawer drawer-end">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label htmlFor="my-drawer-4" className="drawer-button">
              <img className="w-6" src={notification} />
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-4"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu min-h-full w-80 p-4 bg-[#0a5e6f48] rounded-l-2xl backdrop-blur-xl border border-[#0A5F6F] text-white">
              {/* Sidebar content here */}
              Notification Goes Here
            </ul>
          </div>
        </div>

        {/* Message */}
        <a href="">
          <img className="w-12" src={message} />
        </a>
      </div>
    </nav>
  );
}
export default Navbar;
