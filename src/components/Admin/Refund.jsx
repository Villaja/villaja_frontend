import { useState } from "react"
import styles from "../../styles/styles";
import axios from "axios";
import {server} from '../../server'
import { toast } from "react-toastify";
import Rolling from '../../assets/animations/Rolling.svg'

const Refund = () => {
    const [orderId,setOrderId] = useState('')
    const [amount,setAmount] = useState()
    const [loading,setLoading] = useState(false)

    const processRefundRequest = async() => {
        setLoading(true)
        const token = localStorage.getItem('user-token'); // Retrieve the user token from localStorage
        if (!token) {
            // Handle the case where the user is not authenticated
            toast.error('User is not authenticated.');
            return;
        }
        try
        {
            const response = await axios.post(
        `${server}/refund/create-refund`,
        {
          orderId,
          amount,
        },
        {
          headers: {
            Authorization:token
          },
        }
      );

            console.log(response.data);
            if(response.data.success)
            {
                return toast.success(response.data.message)
            }

            return toast.error(response.data.message)
        }   
        catch(e)
        {
            console.log('error proceessing refund: ', e.message);
            
        }
        finally{
            setLoading(false)
        }
    }

  return (
    <div className="w-full min-h-[120vh] pt-5 rounded flex justify-center bg-[#F4F4F4] p-6">
        <div className="w-full 500px:pl-8 800px:pt-1 bg-white rounded-[0.3125rem]">
              <h1 className="font-semibold text-[2rem] p-4 mb-4 border-b-[0.1rem] border-[#000000/25]">Refund</h1>

              <div className="w-full block p-12 gap-6 ">
                <div className="w-full mb-2 800px:w-[50%] max-w-[400px] ">
                    <label className="block pb-2">OrderId</label>
                    <input
                    type="text"
                    value={orderId}
                    required
                    className={`${styles.input}`}
                    onChange={(e) => setOrderId(e.target.value)}
                    />
                </div>
                <div className="w-full mb-2 800px:w-[50%] max-w-[400px]">
                    <label className="block pb-2">Amount</label>
                    <input
                    type="number"
                    value={amount}
                    required
                    className={`${styles.input}`}
                    onChange={(e) => setAmount(e.target.value)}

                    />
                </div>

                <button
                    type="submit"
                    className={`login-button group relative w-full max-w-[400px] h-[45px] shadow-md flex justify-center items-center mt-6 py-2 px-4 border border-transparent text-[1.05rem] font-light rounded-md text-white ${
                    loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
                    }`}
                    disabled={loading}
                    onClick={processRefundRequest}
                >
                    {loading ? <img src={Rolling} /> : "Refund"}
                </button>
                </div>
        </div>
    </div>
  )
}

export default Refund