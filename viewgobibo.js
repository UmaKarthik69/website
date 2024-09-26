import { useState } from "react";
import Gobibo from "../views/gobibo";

function Viewgobibo() {
  const [flights, setFlights] = useState([
            {
            name: 'airforce',
            duration: '20hrs',
            from: 'hyderabad',
            to: 'varanasi',
            starttime: '4:50am',
            endtime: '5:33pm',
            price: '40000'

        },
        {
            name: 'airforce',
            duration: '20hrs',
            from: 'hyderabad',
            to: 'varanasi',
            starttime: '7:50am',
            endtime: '5:30am',
            price: '40000'
        },
        {
            name: 'airforce',
            duration: '20hrs',
            from: 'hyderabad',
            to: 'varanasi',
            starttime: '8:50am',
            endtime: '5:30am',
            price: '40000'
        },
        {
            name: 'airforce',
            duration: '20hrs',
            from: 'hyderabad',
            to: 'varanasi',
            starttime: '10:50pm',
            endtime: '5:30am',
            price: '40000'

        },
        {
            name: 'airforce',
            duration: '20hrs',
            from: 'hyderabad',
            to: 'varanasi',
            starttime: '16:50pm',
            endtime: '5:30am',
            price: '40000'
        },
        {
            name: 'airforce',
            duration: '20hrs',
            from: 'hyderabad',
            to: 'varanasi',
            starttime: '4:50am',
            endtime: '5:30am',
            price: '40000'
        },
        {
            name: 'airforce',
            duration: '20hrs',
            from: 'hyderabad',
            to: 'varanasi',
            starttime: '4:50am',
            endtime: '5:30am',
            price: '40000'

        },
        {
            name: 'airforce',
            duration: '20hrs',
            from: 'hyderabad',
            to: 'varanasi',
            starttime: '2:50am',
            endtime: '5:30pm',
            price: '40000'
        },
        {
            name: 'airforce',
            duration: '20hrs',
            from: 'hyderabad',
            to: 'varanasi',
            starttime: '3:50am',
            endtime: '5:30am',
            price: '40000'
        }
    
   
  ]);

  const [selectedFilter, setSelectedFilter] = useState(null);

  const Filters = [
    {
      name: 'filters',
      showing: 'showing24flights',
      departure: 'departure',
      before6am: 'Before6am',
      time: '6am-12pm',
      times: '12pm-6am',
      after: '6am',
      Stop: 'Stops',
      direct: 'direct',
      onestop: 'onestop',
      stop: '+2stops',
    },
  ];

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
  };

  const filteredFlights = flights.filter((flight) => {
    if (selectedFilter === 'Before6am') {
      // Filter flights that start before 6am
      const startTime = parseInt(flight.starttime.split(':')[0], 10);
      return startTime < 6;
    }
    // Add more conditions for other filters if needed
    return true;
  });

  return (
    <div className="row mb-5 g-0" style={{ marginLeft: '70px' }}>
      <div className="col-sm-2">
        {Filters.map((filter, index) => (
          <div key={index} className="row mt-2">
            <div className="row g-0 border primary mb-3 rounded" style={{ backgroundColor: 'whitesmoke' }}>
              <div className="col-sm-12">
                <h4>{filter.name}</h4>
                <h6>{filter.showing}</h6>
              </div>
            </div>
            <div className="row g-0 border primary rounded ">
              <div className="col-sm-12 mb-2">{filter.departure}</div>
              <div className="col-sm-12">
                <div className="row g-0 mb-2">
                  <div className="col-sm-6 rounded">
                    <button
                      className={`btn btn-secondary btn-sm ${selectedFilter === filter.before6am ? 'active' : ''}`}
                      onClick={() => handleFilterClick(filter.before6am)}>
                      {filter.before6am}
                    </button>
                  </div>
                  <div className="col-sm-6">
                    {/* Add more buttons for other filters if needed */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="col-sm-10" style={{ paddingLeft: '100px' }}>
        {filteredFlights.map((flight, index) => (
          <div className="col-sm " key={index}>
            <Gobibo flight={flight} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Viewgobibo;