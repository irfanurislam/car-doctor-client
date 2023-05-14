import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingRow from "./BookingRow";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBookings(data);
      });
  }, [url]);

  console.log(bookings);


  const handleDelete = id =>{
    const proceed = confirm('are sure want to delete')
   
    if(proceed){
        fetch(`http://localhost:5000/bookings/${id}`,{
        method:'DELETE'
        
    })
    .then(res => res.json())
    .then(data => {
        if(data.deletedCount > 0){
            alert('deleted succesfully')
            const remaining = bookings.filter( book => book._id !== id)
            setBookings(remaining)
        }
    })
    }

    
  }


  const handleBookConfirm = (id) =>{
    fetch(`http://localhost:5000/bookings/${id}`,{
        method:'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({status:'confirm'})
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
       if(data.modifiedCount > 0){
        const remaining = bookings.filter(book => book._id !== id)
        const updated = bookings.find(book => book._id === id)
        updated.status = 'confirm'
        const newBooking = [updated, ...remaining]
        setBookings(newBooking)
       } 
    })
  }
 
  return (
    <div>
      <h2 className="text-5xl">Your bookings: {bookings.length}</h2>

      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Image</th>
              <th>Service</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <BookingRow
                key={booking._id}
                booking={booking}
                handleDelete = {handleDelete}
                handleBookConfirm = {handleBookConfirm}
              ></BookingRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
