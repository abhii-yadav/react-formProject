import React from "react"; 
import { useForm } from "react-hook-form"; 
import { useDispatch } from "react-redux"; 
import { addUser } from "../redux/userSlice"; 
import "../styles/FormStyles.css"; 

const ProfileForm = () => { const { register, handleSubmit, formState: { errors }, reset } = useForm(); 
const dispatch = useDispatch(); 
const onSubmit = (data) => { dispatch(addUser(data)); 
alert("Profile details submitted successfully!"); reset();
}; 

return ( <div className="form-container profile-container">
  <div className="profile-header">
      <h2>Personal Details</h2>
      <p>Make changes to your <b>Profile Account</b> here. <span className="warning">Click save when you're done.</span>
      </p>
  </div>
  <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-grid grid-3">
          <div className="form-group">
              <label>First Name <span className="required">*</span>
              </label>
              <input {...register("firstName", { required: "First Name is required" })} /> {errors.firstName && <p className="error">{errors.firstName.message}</p>}
          </div>
          <div className="form-group">
              <label>Middle Name</label>
              <input {...register("middleName")} />
          </div>
          <div className="form-group">
              <label>Last Name <span className="required">*</span>
              </label>
              <input {...register("lastName", { required: "Last Name is required" })} /> {errors.lastName && <p className="error">{errors.lastName.message}</p>}
          </div>
      </div>
      <div className="form-grid grid-2">
          <div className="form-group">
              <label>Email <span className="required">*</span>
              </label>
              <input type="email" {...register("email", { required: "Email is required" , pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email format" , }, })} /> {errors.email && <p className="error">{errors.email.message}</p>}
          </div>
          <div className="form-group">
              <label>Phone <span className="required">*</span>
              </label>
              <input {...register("phone", { required: "Phone is required" , pattern: { value: /^[0-9]{10}$/, message: "Invalid phone number" } })} /> {errors.phone && <p className="error">{errors.phone.message}</p>}
          </div>
      </div>
      <div className="form-group full-width">
          <label>Address <span className="required">*</span>
          </label>
          <textarea {...register("address", { required: "Address is required" })} rows="5" className="form-input" placeholder="Type your address here." /> {errors.address && <p className="error">{errors.address.message}</p>}
      </div>
      <div className="form-grid grid-4">
          <div className="form-group">
              <label>PinCode <span className="required">*</span>
              </label>
              <input {...register("pinCode", { required: "Pin Code is required" })} /> {errors.pinCode && <p className="error">{errors.pinCode.message}</p>}
          </div>
          <div className="form-group">
              <label>Country <span className="required">*</span>
              </label>
              <input {...register("country", { required: "Country is required" })} /> {errors.country && <p className="error">{errors.country.message}</p>}
          </div>
          <div className="form-group">
              <label>State <span className="required">*</span>
              </label>
              <input {...register("state", { required: "State is required" })} /> {errors.state && <p className="error">{errors.state.message}</p>}
          </div>
          <div className="form-group">
              <label>City <span className="required">*</span>
              </label>
              <input {...register("city", { required: "City is required" })} /> {errors.city && <p className="error">{errors.city.message}</p>}
          </div>
      </div>
      <button type="submit" className="submit-btn">Save</button>
  </form>
</div> );
}; 

export default ProfileForm;