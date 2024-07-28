import React from 'react';

const AddSubscriber = () => {
    return (
        <div className="container mt-4">
            <h2>Add Subscriber</h2>
            <form>
                <div className="mb-3">
                    <label className="form-label">Subscriber Name</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Phone Number</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Address</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Pincode</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">District</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Village Office</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email ID</label>
                    <input type="email" className="form-control" />
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        </div>
    );
};

export default AddSubscriber;
