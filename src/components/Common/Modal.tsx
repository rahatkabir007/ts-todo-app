"use client"
import React, { useState, useEffect } from "react";
import { AiOutlineCloseSquare } from "react-icons/ai";

interface ModalProps {
    isModalOpen: boolean,
    setIsModalOpen: (value: boolean) => void,
    children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ isModalOpen, setIsModalOpen, children }) => {
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        if (isModalOpen) {
            setTimeout(() => {
                setModalVisible(true);
            }, 100);
        }
    }, [isModalOpen]);

    const closeModal = () => {
        setModalVisible(false);
        setTimeout(() => {
            setIsModalOpen(false);
        }, 300);
    };

    return (
        <>
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-[99] px-5 lg:px-0">
                    <div
                        className="fixed inset-0 bg-black opacity-50 transition-opacity"
                        onClick={closeModal}
                    ></div>
                    <div
                        className={`flex flex-col gap-y-8 bg-white rounded-lg w-full lg:w-1/3 p-6 transform transition-all duration-300 ${modalVisible ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"
                            }`}
                    >
                        <div className="py-2 flex justify-end mr-5">
                            <button
                                className="absolute top-0 right-0 m-4 text-gray-500 hover:text-red-500 focus:outline-none"
                                onClick={closeModal}
                            >
                                <AiOutlineCloseSquare className="text-3xl text-red-700" />
                            </button>
                        </div>
                        <div className="flex flex-col gap-2">
                            {children}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;