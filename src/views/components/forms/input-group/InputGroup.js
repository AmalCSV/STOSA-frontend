import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFormCheck,
  CFormControl,
  CFormLabel,
  CFormSelect,
  CInputGroup,
  CInputGroupText,
  CRow,
  CForm,
  CFormText

} from '@coreui/react'
import { DocsCallout, Example } from 'src/reusable'

const Select = () => {
  const saveMember =(target) => {
    // call to api using id, field, value
    console.log(3, target.value, target.id);
    
    try {
      updateOne(3, target.id, target.value);
    } catch (error) {
      console.log(error);
    }
  }

  async function updateOne(id, field, value) {
   const requestOptions = {
       method: 'PUT',
       mode: 'cors',
       //crossDomain:true,
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({id: id, field: field, value: value })
   };
   const response = await fetch('http://127.0.0.1/stosa/Member/updateOne', requestOptions);
   const data = response.json();
   console.log(data)
}
  return (
    <div>
      <CRow>
        <CCol xs={6}>
          <CCard>
            <CCardHeader>Personal Details</CCardHeader>
            <CCardBody>
              <CForm>
                <div className="mb-3">
                  <CFormLabel htmlFor="Full Name">Full Name</CFormLabel>
                  <CFormControl type="text" id="Full name" placeholder="Enter your Full Name" />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="Name With Initials">Name With Initials</CFormLabel>
                  <CFormControl type="text" id="Name With Initials" placeholder="Enter your name with initials" />
                </div>
                <div classname="mb-3">
                  <CFormLabel htmlFor="Address">Address</CFormLabel>
                  <CFormControl type="text" id="Address" placeholder="Address Line 1" /> <br></br>
                  <CFormControl type="text" id="Address" placeholder="Address Line 2" />
                </div>
                <div classname="mb-3">
                  <CFormLabel htmlFor="GN Division">GN Division</CFormLabel>
                  <CFormControl type="text" id="GN Division" placeholder="Enter your Grama Niladari Division" />
                </div>
                <div classname="mb-3">
                  <CFormLabel htmlFor="DS Division">DS Division</CFormLabel>
                  <CFormControl type="text" id="DS Division" placeholder="Enter your Divisional Secretrait Division" />
                </div>
                <div classname="mb-3">
                  <CFormLabel htmlFor="District">District</CFormLabel>
                  <CFormControl type="text" id="District" placeholder="Enter your District" onBlur={(event) =>saveMember(event.target)} />
                </div>
                <div classname="mb-3">
                  <CFormLabel htmlFor="Birthday">Date of Birth</CFormLabel>
                  <CFormControl type="date" id="Birthday" />
                </div>
                <div classname="mb-3">
                  <CFormLabel htmlFor="ID/Passport">ID/Passport number</CFormLabel>
                  <CFormControl type="text" id="ID/Passport" placeholder="Enter your ID/Passport number" />
                </div>
                <div classname="mb-3">
                  <CFormLabel htmlFor="Contact No">Contact Number</CFormLabel>
                  <CFormControl type="tel" id="Contact No" placeholder="Home/Mobile" />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleInputEmail1">Email address</CFormLabel>
                  <CFormControl type="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="name@example.com" />
                  <CFormText id="emailHelp">We'll never share your email with anyone else.</CFormText>
                </div>
                <div classname="mb-3">
                  <CFormLabel htmlFor="Family">Family Members</CFormLabel>
                  <CFormControl type="number" id="Family" placeholder="No.of Family Members" />
                </div>
                <div classname="mb-3">
                  <CFormLabel htmlFor="T-shirt">Select T-Shirt Size</CFormLabel><br></br>
                  <CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox1" value="option1" label="S" />
                  <CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox2" value="option2" label="M" />
                  <CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox3" value="option3" label="L" />
                  <CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox3" value="option3" label="XL" />
                </div>

                <CFormCheck
                  className="mb-3"
                  label="Check me out"
                  onChange={(e) => {
                    console.log(e.target)
                  }}
                />
                <CButton type="submit" color="primary">
                  Submit
                </CButton>
              </CForm>

            </CCardBody>
          </CCard>
        </CCol>

        <CCol xs={6}>
          <CCard>
            <CCardHeader>Office Details</CCardHeader>
            <CCardBody>
              <CForm>
                <div className="mb-3">
                  <CFormLabel htmlFor="Organization">Organization name</CFormLabel>
                  <CFormControl type="text" id="Organization" placeholder="Enter Your Organization Name" />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="Designation">Designation/Job Title</CFormLabel>
                  <CFormControl type="text" id="Designation" placeholder="Enter Your Job Title" />
                </div>
                <div classname="mb-3">
                  <CFormLabel htmlFor="Address">Address</CFormLabel>
                  <CFormControl type="text" id="Address" placeholder="Office Address" />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="Contact">Contact Number</CFormLabel>
                  <CFormControl type="text" id="Contact" placeholder="Office No" />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleInputEmail1">Email address</CFormLabel>
                  <CFormControl type="email" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  <CFormText id="emailHelp">We'll never share your email with anyone else.</CFormText>
                </div>
                <CFormCheck
                  className="mb-3"
                  label="Check me out"
                  onChange={(e) => {
                    console.log(e.target)
                  }}
                />
                <CButton type="submit" color="primary">
                  Submit
                </CButton>
              </CForm>
            </CCardBody>
          </CCard>

          <CCol xs={12}>
            <CCard>
              <CCardHeader>Education Details</CCardHeader>
              <CCardBody>
                <CForm>
                  <div className="mb-3">
                    <CFormLabel htmlFor="O-Level">O-Level</CFormLabel>
                    <CFormControl type="text" id="O-Level" placeholder="Enter your O-Level results" />
                  </div>
                  <div className="mb-3">
                    <CFormLabel htmlFor="A-Level">A-Level</CFormLabel>
                    <CFormControl type="text" id="A-Level" placeholder="Enter your A-Level results" />
                  </div>
                  <div classname="mb-3">
                    <CFormLabel htmlFor="Diploma">Diploma Courses</CFormLabel>
                    <CFormControl type="text" id="Diploma" placeholder="Enter your Diploma courses" />
                  </div>
                  <div className="mb-3">
                    <CFormLabel htmlFor="Degree">Degree Courses</CFormLabel>
                    <CFormControl type="text" id="Degree" placeholder="Enter your Degree courses" />
                  </div>
                  <div className="mb-3">
                    <CFormLabel htmlFor="Graduate">Post-Graduate Courses</CFormLabel>
                    <CFormControl type="text" id="Graduate" placeholder="Enter your Post-Graduate courses" />
                  </div>
                  <CFormCheck
                    className="mb-3"
                    label="Check me out"
                    onChange={(e) => {
                      console.log(e.target)
                    }}
                  />
                  <CButton type="submit" color="primary">
                    Submit
                  </CButton>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CCol>

        <CCol xs={12}>
          <CCard >
            <CCardHeader>Scouting Details</CCardHeader>
            <CCardBody>
              <CForm>
                <CRow className="mb-3">
                  <CFormLabel htmlFor="Name" className="col-sm-2 col-form-label">Name</CFormLabel>
                  <CCol sm={10} >
                    <CFormControl type="text" id="Name" placeholder="Name of Student" />
                  </CCol>
                </CRow>
                <CRow className="mb-3">
                  <CFormLabel htmlFor="School" className="col-sm-2 col-form-label">School Admission Year</CFormLabel>
                  <CCol sm={10} >
                    <CFormControl type="text" id="School" />
                  </CCol>
                </CRow>
                <CRow className="mb-3">
                  <CFormLabel htmlFor="Date Joined" className="col-sm-2 col-form-label">Date Joined for Scouting</CFormLabel>
                  <CCol sm={10} >
                    <CFormControl type="Date" id="Date Joined" />
                  </CCol>
                </CRow>
                <CRow className="mb-3">
                  <CFormLabel htmlFor="Badges" className="col-sm-2 col-form-label">School Admission Year</CFormLabel>
                  <CCol sm={10} >
                    <CFormControl type="text" id="Badges" />
                  </CCol>
                </CRow>
                <CRow className="mb-3">
                  <CFormLabel htmlFor="Awards" className="col-sm-2 col-form-label">Awards</CFormLabel>
                  <CCol sm={10} >
                    <CFormControl type="text" id="Awards" />
                  </CCol>
                </CRow>

              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  )
}

export default Select
