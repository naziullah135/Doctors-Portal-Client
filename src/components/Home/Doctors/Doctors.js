import React from 'react';
import Doctor from '../Doctor/Doctor';
const Doctors = () => {
    return (
        <section className="doctors">
            <div className="container">
                <h5 style={{color:'#1cc7c1'}} className="text-center mb-5">Our Doctors</h5>
                <div className="row">
                    <Doctor/>
                    <Doctor/>
                    <Doctor/>
                </div>
            </div>
        </section>
    );
};

export default Doctors;