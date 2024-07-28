import React from 'react';

const SearchSubscriber = () => {
    return (
        <div className="container mt-4">
            <h2>Search Subscriber</h2>
            <form>
                <div className="mb-3">
                    <label className="form-label">Subscriber Name</label>
                    <input type="text" className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">Search</button>
            </form>
        </div>
    );
};

export default SearchSubscriber;
