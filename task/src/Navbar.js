

export default function Navbar(props) {
    return(
      <div className="">    <nav className=" myNav bg-info text-white " >
      <div className="  row mx-auto justify-content-between">
      
      <div className="col-auto  navbar-brand  ">{props.children}</div>
    <div className="col-auto  navbar-brand m-0">{props.logout}</div>
      </div>
     
     
    </nav>
    </div>

    )
};
	