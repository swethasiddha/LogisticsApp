import Shipment from "../shipment/Shipment";
import Transport from "../transport/Transport";
import News from "../news/News";
function Dashboard() {
  return <>
  <div className="flex mt-4">
   <div className="bg-white w-[300px] h-[600px] m-4 text-left rounded-lg">
        <p className="ml-4 pt-4 text-lg">Hello</p>
        <p className="font-bold ml-4 text-2xl">Swetha Siddha</p>
    </div>
    <div className="flex flex-wrap">
      <Shipment/>
      <News/>
      <Transport/>
    </div>
    </div>
  </>;
}

export default Dashboard;
