//This is the order modal file

import useEthPrice, { useFtmPrice } from '@components/hooks/useEthPrice';
import { Modal, Button } from '@components/ui/common';
import { useEffect, useState } from 'react';

const defaultOrder = {
  price: '',
  email: '',
  confirmationEmail: '',
};

//controls if the order modal form can be submitted or not
const _createFormState = (isDisabled = false, message = '') => ({
  isDisabled,
  message,
});

//This is a validator function for the order form modal
const createFormState = (
  { price, email, confirmationEmail },
  hasAgreedTOS,
  isNewPurchase
) => {
  if (!price || Number(price) <= 0) {
    return _createFormState(true, 'Price is not valid!');
  }
  if (isNewPurchase) {
    if (confirmationEmail.length === 0 || email.length === 0) {
      return _createFormState(true, 'Please provide an email address.');
    } else if (email !== confirmationEmail) {
      return _createFormState(true, 'Emails are not matching.');
    }
  }
  if (!hasAgreedTOS) {
    return _createFormState(
      true,
      'You must accept the terms & conditions to submit the form.'
    );
  }

  return _createFormState();
};

const OrderModal = ({ course, onClose, onSubmit, isNewPurchase }) => {
  //When orderModal receives course data then we open the modal with that course info
  const [isOpen, setIsOpen] = useState(false);
  //order is the membership in the modal
  const [order, setOrder] = useState(defaultOrder);
  const [enablePrice, setEnablePrice] = useState(false); // for the modal checkbox
  const [hasAgreedTOS, setHasAgreedTOS] = useState(false); // for TOS checkbox in modal
  const { ftm } = useFtmPrice();
  const { eth } = useEthPrice();

  //the useEffect is used to respond to changes, like a change in course being selected from a purchase button
  useEffect(() => {
    if (!!course) {
      //double !! will result a null or undefined returned value into false to avoid throwing an error
      setIsOpen(true);
      setOrder({
        ...defaultOrder,
        price: ftm.perItem, //sets new price on default order
      });
    }
  }, [course]);

  const closeModal = () => {
    setIsOpen(false);
    setOrder(defaultOrder);
    setEnablePrice(false);
    setHasAgreedTOS(false);
    onClose();
  };

  const formState = createFormState(order, hasAgreedTOS, isNewPurchase); //gives us isDisabled and message properties

  return (
    <Modal isOpen={isOpen}>
      <div className="inline-block align-bottom bg-white rounded-lg text-left  shadow-xl transform transition-all sm:my-8 sm:align-middle xs:max-w-lg xs:w-full">
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 ">
          <div className="sm:flex sm:items-start ">
            <div className="mt-3 sm:mt-0 sm:ml-4 sm:text-left ">
              <h3
                className="mb-7 text-lg font-bold leading-6 text-gray-900"
                id="modal-title"
              >
                {course?.title} Member Pass
              </h3>
              <div className="mt-1 relative rounded-md">
                <div className="mb-1">
                  <label className="mb-2 font-bold">Price(ftm)</label>
                  {/*  */}
                  <div className="text-xs text-gray-700 flex">
                    <label className="flex items-center mr-2">
                      <input
                        checked={enablePrice} // Checks if checkbox has been checked or not
                        onChange={({ target: { checked } }) => {
                          setOrder({
                            ...order,
                            price: checked ? order.price : ftm.perItem, //If checked, can set own price, otherwise is default
                          });
                          setEnablePrice(checked); //allows price to be changed when checkbox checked
                        }}
                        type="checkbox"
                        className="form-checkbox"
                      />
                    </label>
                    <span>
                      Adjust Price - the avg cost of our competitors is $250 per
                      month in case you are feeling more generous 🙂 (Putting
                      less than the subscription price will result in a failed
                      transaction!)
                    </span>
                  </div>
                  {/*  */}
                </div>
                <input
                  disabled={!enablePrice} //disables price input unless checkbox checked
                  value={order.price} //Shows price in modal
                  onChange={({ target: { value } }) => {
                    if (isNaN(value)) {
                      return;
                    } //If price input is not a number then nothing is returned, if it is then the price is updated with that value
                    setOrder({
                      ...order,
                      price: value,
                    });
                  }}
                  type="text"
                  name="price"
                  id="price"
                  className="disabled:opacity-50 w-80 mb-1 focus:ring-indigo-500 shadow-md focus:border-indigo-500 block pl-7 p-4 sm:text-sm border-gray-300 rounded-md"
                />
                <p className="text-xs text-gray-700">
                  Price will be verified at the time of the order. If the price
                  will be lower, order can be declined (+- 2% slipage is
                  allowed)
                </p>
              </div>
              {isNewPurchase && (
                <>
                  <div className="mt-2 relative rounded-md">
                    <div className="mb-1">
                      <label className="mb-2 font-bold">Email</label>
                    </div>
                    <input
                      onChange={({ target: { value } }) => {
                        setOrder({
                          ...order,
                          email: value.trim(),
                        });
                      }}
                      type="email"
                      name="email"
                      id="email"
                      className="w-80 focus:ring-indigo-500 shadow-md focus:border-indigo-500 block pl-7 p-4 sm:text-sm border-gray-300 rounded-md"
                      placeholder="Enter an email address here."
                    />
                    <p className="text-xs text-gray-700 mt-1">
                      It&apos;s important to remember the email address you use.
                      Emails are NOT stored anywhere in our system and are only
                      used by yourself in case a transaction needs to be
                      verified. You do not need to use your actual email, any
                      correctly formatted email will do.
                    </p>
                  </div>
                  <div className="my-2 relative rounded-md">
                    <div className="mb-1">
                      <label className="mb-2 font-bold">Repeat Email</label>
                    </div>
                    <input
                      onChange={({ target: { value } }) => {
                        setOrder({
                          ...order,
                          confirmationEmail: value.trim(),
                        });
                      }}
                      type="email"
                      name="confirmationEmail"
                      id="confirmationEmail"
                      className="w-80 focus:ring-indigo-500 shadow-md focus:border-indigo-500 block pl-7 p-4 sm:text-sm border-gray-300 rounded-md"
                      placeholder="Enter some email here."
                    />
                  </div>
                </>
              )}
              <div className="text-xs text-gray-700 mt-4 flex">
                <label className="flex items-center mr-2">
                  <input
                    checked={hasAgreedTOS}
                    onChange={({ target: { checked } }) => {
                      setHasAgreedTOS(checked);
                    }}
                    type="checkbox"
                    className="form-checkbox"
                  />
                </label>
                <span>
                  I accept that my subscription can be rejected in the case that
                  the data provided above is not correct.
                </span>
              </div>
              {formState.message && (
                <div className="p-4 my-3 text-sky-700 bg-yellow-200 rounded-lg text-sm">
                  {formState.message}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex">
          {/* order is handled in the Marketplace component. purchaseCourse gets passed down as a prop from there. */}
          <Button
            className="mr-2"
            disabled={formState.isDisabled}
            onClick={() => {
              onSubmit(order, course);
            }}
          >
            Submit
          </Button>
          <Button onClick={closeModal} variant="red">
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default OrderModal;
