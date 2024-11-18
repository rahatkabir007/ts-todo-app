import React, { useEffect, useState } from "react";

interface PaginationProps {
    dataPerPage: number;
    totalDatas: number;
    currentPage: number;
    setCurrentPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ dataPerPage, totalDatas, currentPage, setCurrentPage }) => {
    const [showPagination, setShowPagination] = useState(false);
    const [arrayStart, setArrayStart] = useState(0);
    const [arrayEnd, setArrayEnd] = useState(2);
    const [clicked, setClicked] = useState<number | null>(null);
    const [lPclick, setLPClicked] = useState(false);
    const [lPclickL, setLPClickedL] = useState(false);
    const [showPaginateNumberArray, setShowPaginateNumberArray] = useState<number[]>([]);
    const pageCount = Math.ceil(totalDatas / dataPerPage);

    const handlePageClick = (page: number) => {
        setCurrentPage(page);
    };

    useEffect(() => {
        if (pageCount) {
            if (currentPage !== 1) {
                setArrayStart(currentPage - 2);
                setArrayEnd(currentPage);
            }
            setShowPaginateNumberArray([...Array(pageCount).keys()]);
            setShowPagination(true);
        }
    }, [currentPage, pageCount]);

    return (
        <div>
            {showPagination && (
                <div className="gap-x-[7px] md:gap-x-[50px] h-[48px] flex items-center">
                    <div className="flex flex-row">
                        <div className="flex flex-row gap-x-[7px] md:gap-x-[50px]">
                            <div
                                className={`cursor-pointer ${currentPage === 1 && "hidden"} rounded text-white bg-pscdarkblue p-[5px]`}
                                onClick={() => {
                                    setClicked(0);
                                    handlePageClick(currentPage - 1);
                                }}
                            >
                                PREV
                            </div>
                            <div>
                                {currentPage > 2 && (
                                    <div className="flex">
                                        <p
                                            onClick={() => {
                                                setLPClicked(true);
                                                handlePageClick(1);
                                            }}
                                            className={`w-[32px] text-black cursor-pointer border-[1px] border-[#C0C0C0] flex justify-center items-center h-[32px] hover:bg-[#C0C0C0] rounded ${lPclick && ' font-bold'}`}
                                        >
                                            1
                                        </p>
                                        <p className="text-black">&nbsp;&nbsp;......&nbsp;&nbsp;</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="flex flex-row gap-x-[8px] md:gap-x-[20px] justify-center m-auto h-full">
                            {showPaginateNumberArray
                                ?.slice(arrayStart, arrayEnd)
                                .map((data, ind) => {
                                    return (
                                        <div
                                            key={ind}
                                            onClick={() => {
                                                if (currentPage !== data + 1) {
                                                    setClicked(ind);
                                                    handlePageClick(data + 1);
                                                }
                                            }}
                                            className="cursor-pointer"
                                        >
                                            <p
                                                className={`w-[32px] flex border-[1px] border-[#C0C0C0] justify-center items-center h-[32px] ${currentPage === data + 1
                                                    ? "text-white rounded bg-pscdarkblue font-bold"
                                                    : 'hover:bg-[#C0C0C0] text-pscdarkblue rounded'} ${clicked === ind && "text-white font-bold"}`
                                                }
                                            >
                                                {data + 1}
                                            </p>
                                        </div>
                                    );
                                })}
                        </div>
                        {currentPage !== pageCount && pageCount > 2 && (
                            <div className="flex">
                                <p className="text-black">&nbsp;&nbsp;......&nbsp;&nbsp;</p>
                                <p
                                    onClick={() => {
                                        setLPClickedL(true);
                                        handlePageClick(pageCount);
                                    }}
                                    className={`w-[32px] text-black cursor-pointer border-[1px] border-[#C0C0C0] flex justify-center items-center h-[32px] hover:bg-[#C0C0C0] rounded ${lPclickL && 'font-bold'}`}
                                >
                                    {pageCount}
                                </p>
                            </div>
                        )}
                    </div>
                    <div className="flex flex-wrap gap-x-[5px] gap-y-[5px] text-white h-[32px]">
                        <div
                            className={`cursor-pointer ${currentPage === pageCount && "invisible"} rounded bg-pscdarkblue p-[5px]`}
                            onClick={() => {
                                if (currentPage === 1) {
                                    setClicked(1);
                                }
                                handlePageClick(currentPage + 1);
                            }}
                        >
                            NEXT
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Pagination;