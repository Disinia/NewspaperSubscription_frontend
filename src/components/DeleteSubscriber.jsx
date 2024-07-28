import React from 'react';

const DeleteSubscriber = () => {
    return (
        <div className="container mt-4">
            <h2>Delete Subscriber</h2>
            <form>
                <div className="mb-3">
                    <label className="form-label">Subscriber Name</label>
                    <input type="text" className="form-control" />
                </div>
                <button type="submit" className="btn btn-danger">Delete</button>
            </form>
        </div>
    );
};

export default DeleteSubscriber;
