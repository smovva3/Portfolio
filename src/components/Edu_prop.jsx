const Edu_prop = (props) => {
    return (
        <>
            <div className="max-w-[520px] mt-[52px] p-7 max-sm:p-3">
                <div className="flex gap-5">
                    <img
                        src={props.image}
                        alt=""
                        className="w-[90px] h-[90px]"
                    />
                    <h1 className="bg-clip-text text-transparent bg-gradient-to-r max-sm:text-[17px] from-amber-500 via-orange-600 to-yellow-500 dark:from-[#ff6600] dark:to-slate-100 font-semibold text-2xl w-[300px] h-[100px] tracking-wider ">
                        {props.title}
                    </h1>
                </div>

                <div className="mt-7 flex flex-col gap-5 text-left pl-4">
                    <h3 className="capitalize  text-slate-800 dark:text-slate-300 text-xl max-sm:text-lg">
                        {props.degree}
                    </h3>
                    <p className="italic capitalize text-gray-500 dark:text-slate-500 text-xl max-sm:text-lg leading-9">
                        {props.period}
                    </p>

                    <p className="capitalize text-gray-500 dark:text-slate-500 text-xl max-sm:text-lg leading-9">
                        {props.major}
                    </p>
                </div>
            </div>
        </>
    )
}

export default Edu_prop;