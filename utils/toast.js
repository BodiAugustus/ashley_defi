import { Loader } from '@components/ui/common';
import { toast } from 'react-toastify';


export const withToast = (promise) => {
    toast.promise(
        promise,
          {
            pending: {
                position: toast.POSITION.TOP_LEFT,
              render(){
                return (
                    <div className='p-4 py-2 '>
                    
                   <div className="flex items-center">
                   <Loader
                        size='sm'
                    />
                    <div className="pl-3">
                    <p className="mb-2">
                        Your TX is processing!
                    </p>
                    <p>
                        One moment please...
                    </p>
                    </div>
                   </div>

                    </div>
                )
              },
              icon: false,
            },
            success: {
                position: toast.POSITION.TOP_LEFT,
              render({data}){
                return (
                    <div>
                        <p className='font-bold'>TX: {data.transactionHash.slice(0,18)}...</p>
                        <p>TX was successful!</p>
                        <a target="_blank" rel='noreferrer' href={`https://ftmscan.com/tx/${data.transactionHash}`}>
                            <i className='text-sky-400 underline'>See TX details</i>
                        </a>
                    </div>
                )
              },
              // other options
              icon: "🟢",
            },
            error: {
                position: toast.POSITION.TOP_LEFT,
              render({data}){
                // When the promise reject, data will contains the error
                return <div>{data.message ?? "Transaction has failed!"}</div>
              }
            }
          },
          {
              closeButton: true
          }
      )
}