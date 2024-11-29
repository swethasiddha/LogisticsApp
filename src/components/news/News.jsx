function News(){
    return(
        <div className="bg-white w-[600px] h-[400px] m-5 text-left rounded-lg relative">
        <h1 className="font-bold text-2xl p-4 absolute top-0 left-0">News</h1>
        <div className="flex flex-col justify-center items-center h-full pt-12">
            <p className="font-bold">No News yet</p>
            <p>Check back again to keep up-to-date.</p>
        </div>
    </div>
    )
}

export default News;