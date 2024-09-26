function Gobibo(props) {
    const { flight, index } = props;
   
    return (
        <div className="row m-0">
            <div className="col-sm-10 border rounded border-secondary mt-2 mb-2" style={{paddingLeft:'50px'}}>
                <div className="col-sm text-start mt-2">
                    <h6>{flight.name}</h6>
                </div>
                <div className="col-sm">
                    <div className="row">
                        <div className="col-sm-6"><h6>{flight.from}</h6></div>
                        <div className="col-sm-6"><h6>{flight.to}</h6></div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3"><h5>{flight.starttime}</h5></div>
                        <div className="col-sm-3"><h5>{flight.duration}</h5></div>
                        <div className="col-sm-3"><h5>{flight.endtime}</h5></div>
                        <div className="col-sm-3"><h5>{flight.price}</h5></div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Gobibo;