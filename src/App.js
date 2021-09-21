import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="background d-flex flex-column align-items-center text-light">
      <header className='p-5 text-center'>
                <h1>Survey Form</h1>
                <p>Thank you for taking the time to help us improve the platform</p>
            </header>
            <form id='survey-form' className='backgroundForm p-4 m-3 rounded shadow-lg col-12 col-sm-12 col-md-10 col-lg-8 col-xl-6'>
                <div className='d-flex flex-column align-items-start my-4'>
                    <label>Name</label>
                    <input type='text' placeholder='Enter your name' className='p-2 my-2 rounded border-0 col-12' />
                </div>
                <div className='d-flex flex-column align-items-start my-4'>
                    <label>Email</label>
                    <input type='email' placeholder='Enter your Email' className='p-2 my-2 rounded border-0 col-12' />
                </div>
                <div className='d-flex flex-column align-items-start my-4'>
                    <label>Age (optional)</label>
                    <input type='number' placeholder='Age' className='p-2 my-2 rounded border-0 col-12' />
                </div>
                <div className='d-flex flex-column align-items-start my-4'>
                    <label>Which option best describes your current role?</label>
                    <select placeholder='Select a current role' className='p-2 my-2 rounded border-0 col-12'>
                        <option disabled>Select a current role</option>
                        <option>Student</option>
                        <option>Full Time Job</option>
                        <option>Full Time Learner</option>
                        <option>Prefer not to say</option>
                        <option>Other</option>
                    </select>
                </div>
                <div className='d-flex flex-column align-items-start my-4'>
                    <label className='my-2'>Would you recommend freeCodeCamp to a friend?</label>
                    <div>
                        <input type='radio' id='definitely' name='definitely' value='definitely' />
                        <label for='definitely' className='mx-1'>Definitely</label>
                    </div>
                    <div>
                        <input type='radio' id='maybe' name='maybe' value='maybe' />
                        <label for='maybe' className='mx-1'>Maybe</label>
                    </div>
                    <div>
                        <input type='radio' id='not-sure' name='not-sure' value='not-sure' />
                        <label for='not-sure' className='mx-1'>Not sure</label>
                    </div>
                </div>
                <div className='d-flex flex-column align-items-start my-4'>
                    <label>What is your favorite feature?</label>
                    <select placeholder='Select an option' className='p-2 my-2 rounded border-0 col-12'>
                        <option disabled>Select an option</option>
                        <option>Challenges</option>
                        <option>Projects</option>
                        <option>Community</option>
                        <option>Open Source</option>
                    </select>
                </div>
                <div className='d-flex flex-column align-items-start my-4'>
                    <label className='my-2'>What would you like to see improved? (Check all that apply)</label>
                    <div>
                        <input type='checkbox' id='front-end' name='front-end' value='Front-end Projects' />
                        <label for='front-end' className='mx-1'>Front-end Projects</label>
                    </div>
                    <div>
                        <input type='checkbox' id='back-end' name='back-end' value='Back-end Projects' />
                        <label for='back-end' className='mx-1'>Back-end Projects</label>
                    </div>
                    <div>
                        <input type='checkbox' id='data' name='data' value='Data Visualization' />
                        <label for='data' className='mx-1'>Data Visualization</label>
                    </div>
                    <div>
                        <input type='checkbox' id='challenges' name='challenges' value='Challenges' />
                        <label for='challenges' className='mx-1'>Challenges</label>
                    </div>
                    <div>
                        <input type='checkbox' id='community' name='community' value='Open Source Community' />
                        <label for='community' className='mx-1'>Open Source Community</label>
                    </div>
                    <div>
                        <input type='checkbox' id='gitter' name='gitter' value='gitter' />
                        <label for='gitter' className='mx-1'>Gitter help rooms</label>
                    </div>
                    <div>
                        <input type='checkbox' id='videos' name='videos' value='Videos' />
                        <label for='videos' className='mx-1'>Videos</label>
                    </div>
                    <div>
                        <input type='checkbox' id='meet' name='meet' value='City Meetups' />
                        <label for='meet' className='mx-1'>City Meetups</label>
                    </div>
                    <div>
                        <input type='checkbox' id='wiki' name='wiki' value='Wiki' />
                        <label for='wiki' className='mx-1'>Wiki</label>
                    </div>
                    <div>
                        <input type='checkbox' id='forum' name='forum' value='Forum' />
                        <label for='forum' className='mx-1'>Forum</label>
                    </div>
                    <div>
                        <input type='checkbox' id='courses' name='courses' value='Additional Courses' />
                        <label for='courses' className='mx-1'>Additional Courses</label>
                    </div>
                </div>
                <div className='d-flex flex-column align-items-start my-4'>
                    <label>Any comments or suggestions?</label>
                    <textarea rows='5' placeholder='Enter your comment here...' className='p-2 my-2 rounded border-0 col-12' />
                </div>
                <input type='submit' value='Submit' className='bg-success text-light p-2 border-0 shadow-lg col-12' />
            </form>
    </div>
  );
}

export default App;
