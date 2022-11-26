import React, { memo } from 'react'

const doctor = memo(() => {
    return (
        <>

            <div className="container mb-5 mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card border-0 p-5">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        placeholder="Enter email"
                                    />
                                    <small id="emailHelp" className="form-text text-muted">
                                        We'll never share your email with anyone else.
                                    </small>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="exampleInputPassword1"
                                        placeholder="Password"
                                    />
                                </div>
                                <div className="form-group form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">
                                        Check me out
                                    </label>
                                </div>
                                <button type="submit" className="btn btn-success">
                                    Next
                                </button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
})

export default doctor

