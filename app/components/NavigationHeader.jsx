import React from "react";

const NavigationHeader = () => {
  const NavButton = [
    {
      id: 1,
      title: "Collect",
      icon: "icon",
    },
    {
      id: 2,
      title: "Liked",
      icon: "icon",
    },
    {
      id: 3,
      title: "Edit",
      icon: "icon",
    },
  ];
  return (
    <div className="bg-slate-100 p-2 ">
      {/* warper */}
      <div className="flex justify-between items-center">
        {/* logo   */}
        <div className="flex gap-4 items-center">
          {/* img */}
          <div>
            <div className="avatar">
              <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
          </div>
          {/* img text  */}
          <div>
            <h2>Name saadaf</h2>
            <button>Follow</button>
          </div>
        </div>
        {/* logo   */}
        {/* nav button  */}
        <div className="flex gap-8 items-center">
          {NavButton.map(({ id, title }) => (
            <div className="">
              <button className="btn btn-outline">{title} </button>
            </div>
          ))}
          <div>
            <button className="btn btn-active btn-primary">
              {" "}
              Free Download
            </button>
          </div>
        </div>
        {/* nav button  */}
      </div>
    </div>
  );
};

export default NavigationHeader;
