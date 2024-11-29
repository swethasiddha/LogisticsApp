function Transport() {
  return (
    <div className="bg-white w-[600px] h-[400px] m-5 text-left rounded-lg ">
      <div className="flex flex-wrap justify-between">
        <h1 className="font-bold text-2xl p-4  top-0 left-0">
          Click.Ship.Done.
        </h1>
        <div className="flex flex-wrap m-4">
          <button className="bg-gray-400 hover:bg-gray-500 px-3 py-2 text-white font-bold">
            Land
          </button>
          <button className="bg-gray-400 hover:bg-gray-500 px-3 py-2 text-white font-bold">
            Air
          </button>
          <button className="bg-gray-400 hover:bg-gray-500 px-3 py-2 text-white font-bold">
            Ocean
          </button>
        </div>
      </div>

      <input
        type="text"
        className="w-64 p-2 m-4 ml-7 bg-gray-200 "
        placeholder="From Country"
      />
      <input
        type="text"
        className="w-64 p-2 m-4 bg-gray-200 "
        placeholder="From Address"
      />

      <input
        type="text"
        className="w-64 p-2 m-4 ml-7 bg-gray-200 "
        placeholder="To Country"
      />
      <input
        type="text"
        className="w-64 p-2 m-4 bg-gray-200 "
        placeholder="To Address"
      />

      <button className="w-[400px] h-10 bg-gray-400 m-28 text-white font-bold">
        Book Now
      </button>
    </div>
  );
}

export default Transport;
