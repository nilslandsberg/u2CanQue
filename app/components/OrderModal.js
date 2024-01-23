"use client";

import { useModal } from '../contexts/ModalContext';
import ItemOrderOptions from './ItemOrderOptions';
import LunchItemBreadOptions from './LunchItemBreadOptions';

const OrderModal = () => {
  const { modalItem, closeModal, isModalOpen, modalItemOptions, modalItemBread } = useModal();
  console.log("Is Modal Open: ", isModalOpen);
  console.log("Modal Item: ", modalItem);
  console.log("Modal Item Option Selected: ", modalItemOptions);
  console.log("Bread Selected: ", modalItemBread)

  return (
    <>
    {isModalOpen ? (
      <>
        <div className="fixed inset-0 z-50 bg-black opacity-50 backdrop-filter backdrop-blur-lg"></div>
        <div
          className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            {/*content*/}
            <div className="border-2 border-white rounded-lg shadow-lg relative flex flex-col w-full bg-black outline-none focus:outline-none text-white">
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                <h3 className="text-3xl font-semibold">
                  {modalItem.name}
                </h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => closeModal()}
                >
                  <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                  </span>
                </button>
              </div>
              {modalItem.options && (
                <>
                  <div>Select One of the Following Options:</div>
                  <ItemOrderOptions itemOptions={modalItem.options}/>
                </>
              )}
              {modalItem.type && (<LunchItemBreadOptions />)}
              {/*footer*/}
              <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                <div className="flex flex-row mt-4">
                  <button
                    onClick={() => closeModal()}
                    className="z-30 py-2 px-3 bg-orange-600 rounded text-gray-900 hover:bg-orange-400 hover:text-white transition duration-300 mr-2"
                  >
                    Return to Menu
                  </button>
                  <button 
                    className="z-30 py-2 px-3 bg-orange-600 rounded text-gray-900 hover:bg-orange-400 hover:text-white transition duration-300"
                    onClick={() => closeModal()}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
    ) : null}
    </>
  );
};

// Export the component
export default OrderModal;
