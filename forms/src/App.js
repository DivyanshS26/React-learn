import React,{useState} from 'react'

function App() {

   const [formData, setFormData] = useState({
      email: "", password: "", confirm: "", newsletter: false
   })
   console.log(formData);
   function handleChange(e){
      const {name, value, type,checked} = e.target
      setFormData(prevData => (
         {
            ...prevData,
            [name]: type === "checkbox" ? checked : value 
         }
      ))
   }

   function handleSubmit(event) {
      event.preventDefault()

      if(formData.confirm === formData.password){
         console.log("Successfully signed In!");
      }else{
         console.log("Passwords do not Match");
         return
      }
      
      formData.newsletter && console.log("Thanks for signing up for our newsletter!");
  }
  
  return (
      <div className="form-container">
          <form className="form" onSubmit={handleSubmit}>
              <input 
                  type="email" 
                  placeholder="Email address"
                  onChange={handleChange}
                  className="form--input"
                  name="email"
              />
              <input 
                  type="password" 
                  placeholder="Password"
                  onChange={handleChange}
                  className="form--input"
                  name='password'
              />
              <input 
                  type="password" 
                  placeholder="Confirm password"
                  onChange={handleChange}
                  className="form--input"
                  name='confirm'
              />
              
              <div className="form--marketing">
                  <input
                      id="okayToEmail"
                      type="checkbox"
                      onChange={handleChange}
                      checked={formData.newsletter}
                      name='newsletter'
                  />
                  <label htmlFor="okayToEmail">I want to join the newsletter</label>
              </div>
              <button 
                  className="form--submit"
              >
                  Sign up
              </button>
          </form>
      </div>
  )
}

export default App;

/*
1. In a vanilla JS app, at what point in the form submission
   process do you gather all the data from the filled-out form?
Right before the form is submitted.


2. In a React app, when do you gather all the data from
   the filled-out form?
As the form is being filled out. The data is all held in local state.


3. Which attribute in the form elements (value, name, onChange, etc.)
   should match the property name being held in state for that input?
`name` property.


4. What's different about saving the data from a checkbox element
   vs. other form elements?
A checkbox uses the `checked` property to determine what should
be saved in state. Other form elements use the `value` property instead.


5. How do you watch for a form submit? How can you trigger
   a form submit?
- Can watch for the submit with an onSubmit handler on the `form` element.
- Can trigger the form submit with a button click.
*/