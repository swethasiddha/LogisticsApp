function Shipment(){
    return(<>
<div className="bg-white w-[600px] h-[400px] m-5 text-left rounded-lg">
  <div className="flex items-center ml-4 pt-4 w-full">
    <p className="text-2xl font-bold p-2">MyShipments</p>
    <button className="text-xl bg-gray-400 hover:bg-gray-400 px-3 py-1 rounded">↗</button>
  </div>

  <div className="flex items-center ml-4 pt-4 w-full">
    <input
      type="text"
      className="w-96 p-2 m-4 bg-gray-200 text-center"
      placeholder="You can enter STT, Booking Id..."
    />
    <button className="text-xl bg-gray-400 hover:bg-gray-500 m-4 px-4 py-2 rounded text-white font-bold">
      Search
    </button>
  </div>

  <div className=" flex flex-col justify-center items-center mt-10">
    <p className="text-center text-2xl font-bold p-4">It's time to book your first Shipment!</p>
    <p className="text-center">
      Once you book your first booking, you will start seeing information about your shipment in this area.
    </p>
  </div>
</div>
    </>);
}

export default Shipment;