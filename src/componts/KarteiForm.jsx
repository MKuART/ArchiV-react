import React,{useState} from 'react'



const KarteiForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    // email: "",

  })
  let dataArray = [];
  const formDataHandler = (e) => {
    setFormData({...formData,[e.target.name]: e.target.value });
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    const newErrors = {};
    
    if (!formData.firstName) {
      newErrors.firstName = "Vorname ist erforderlich";
    }
    if (!formData.lastName) {
      newErrors.lastName = "Nachname ist erforderlich";
    }
/*     if (!formData.email) {
      newErrors.email = "E-Mail ist erforderlich";
    } */
    // const storedData = localStorage.getItem('formData');
    const localFirstName = localStorage.setItem("Name", formData.firstName )
    console.log(localFirstName)
/*     if (storedData) {
      dataArray = JSON.parse(storedData);
    } */

/*     dataArray.push(dataToStore);
    localStorage.setItem('formData', JSON.stringify(dataArray)); */
/*     if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    } */
  }

  return (
    <div>
  <form className="row g-3" onSubmit={handleSubmit}>
        <div className="row g-3">
  <div className="col">
    <label htmlFor="">Vorname:</label>
    <input 
      type="text" 
      className="form-control" 
      placeholder="Willhelm" 
      aria-label="First name" 
      name='firstName'
      onChange={formDataHandler}
      value={formData.firstName}
      autoFocus={true}
    >
      </input>
  </div>
  <div className="col">
    <label htmlFor="">Nachname:</label>
    <input 
      type="text" 
      className="form-control" 
      placeholder="Willkürlich" 
      aria-label="Last name"
      name='lastName'
      onChange={formDataHandler}
      value={formData.lastName}
      >
      </input>
  </div>
</div>
<div className="m-3">
      <label className="mx-3">Choose file: </label>
      <input className="d-none" type="file" />
      <button className="btn btn-outline-primary">upload file/doc/img</button>
    </div>

{/*   <div className="col-md-6">
    <label htmlFor="inputEmail4" className="form-label">Email</label>
    <input 
      type="email" 
      className="form-control" 
      id="inputEmail4">

      </input>
  </div>
  <div className="col-md-6">
    <label htmlFor="inputPassword4" className="form-label">Password</label>
    <input 
      type="password" 
      className="form-control" 
      id="inputPassword4">

      </input>
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress" className="form-label">Address</label>
    <input 
      type="text" 
      className="form-control" 
      id="inputAddress" 
      placeholder="1234 Main St">
      </input>
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress2" className="form-label">Address 2</label>
    <input 
      type="text" 
      className="form-control" 
      id="inputAddress2" 
      placeholder="Apartment, studio, or floor">
      </input>
  </div>
  <div className="col-md-6">
    <label htmlFor="inputCity" className="form-label">City</label>
    <input 
      type="text" 
      className="form-control" 
      id="inputCity">
      </input>
  </div>
  <div className="col-md-4">
    <label htmlFor="inputState" className="form-label">State</label>
    <select id="inputState" className="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div className="col-md-2">
    <label htmlFor="inputZip" className="form-label">Zip</label>
    <input 
      type="text" 
      className="form-control" 
      id="inputZip">
      </input>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"></input>
      <label className="form-check-label" htmlFor="gridCheck">
        Check me out
      </label>
    </div>
  </div> */}
  <div className="col-12">
    <button type="submit" className="btn btn-primary">Sign in</button>
  </div>
  <p>Hier soll das Array mit Objecten stehen:{dataArray}</p>
</form>
    </div>
  )
}

export default KarteiForm
