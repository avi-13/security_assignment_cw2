import React from 'react';
import '../../../style/AddBloodRequests.css';

const AddBloodRequests = () => {
    return (
        <>
            <div className='reqBody'>
                <div class="addbloodrequestcontainer">
                    <div class="text">
                        Contact us Form
                    </div>
                    <form action="#">
                        <div class="form-row">
                            <div class="input-data">
                                <input placeholder='Patient Name' type="text" required />
                                <div class="underline"></div>
                            </div>
                            <div class="input-data">
                                <input placeholder='Patient Age' type="text" required />
                                <div class="underline"></div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="input-data">
                                <input placeholder='Patient Blood Type' type="text" required />
                                <div class="underline"></div>
                            </div>
                            <div class="input-data">
                                <input placeholder='Phone Number' type="text" required />
                                <div class="underline"></div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="input-data">
                                <input placeholder='Hospital/Clinic Name' type="text" required />
                                <div class="underline"></div>
                            </div>
                            <div class="input-data">
                                <input placeholder='Hospital/Clinic Address' type="text" required />
                                <div class="underline"></div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="input-data">
                                <input placeholder='Quantity of Blood Units Required' type="text" required />
                                <div class="underline"></div>
                            </div>
                            <div class="input-data">
                                <select type="text" required >
                                    <option value="" disabled selected>Urgency of the request</option>
                                    <option value="Critical">Critical</option>
                                    <option value="Urgent">Urgent</option>
                                    <option value="Normal">Normal</option>
                                </select>
                                <div class="underline"></div>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="input-data">
                                <input placeholder='Reason for Blood Request' type="text" required />
                                <div class="underline"></div>
                            </div>
                            <div class="input-data">
                                <input
                                    type="text"
                                    placeholder='Date of Request'
                                    onFocus={(e) => (e.target.type = "date")}
                                    onBlur={(e) => (e.target.type = "text")}
                                />
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="input-data textarea">
                                <textarea placeholder='Any special instructions or requirements' rows="8" cols="80" required />
                                <br />
                                <div class="underline"></div>
                                <br />
                                <div class="form-row submit-btn">
                                    <div class="input-data">
                                        <div class="inner">
                                        </div>
                                        <input type="submit" value="submit" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </>
    );
}

export default AddBloodRequests;