class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    // The initial state of the component is set with timePassedInMilliSeconds property which is used to keep track of time
    this.state = {
      timePassedInMilliSeconds: 0
    }

    // Declare a timer variable to hold the setInterval function that will be used to update the state every 250 millisecond
    this.timer = null;

    // Bind the functions to the current instance of the component using bind method
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.reset = this.reset.bind(this);
  }

  // Function to start the timer
  start() {
    // Check if the timer is not already running
    if (!this.timer) {
      // Get the current time as a starting point for the timer
      let startTime = Date.now();

      // Set a setInterval function to run every 250 millisecond
      this.timer = setInterval(() => {
        // Get the current time
        const stopTime = Date.now();

        // Calculate the time difference between the start and stop time, and add it to the previously accumulated time
        const timePassedInMilliSeconds = stopTime - startTime + this.state.timePassedInMilliSeconds;

        // Update the state of the component with the new time
        this.setState({
          timePassedInMilliSeconds,
        });

        // Reset the start time to the stop time for the next interval
        startTime = stopTime;
      }, 250);
    }
  }

  // Function to stop the timer
  stop() {
    // Clear the setInterval function
    window.clearInterval(this.timer);

    // Set the timer to null so we can restart it later
    this.timer = null;
  }

  // Function to reset the timer
  reset() {
    // Call the stop function to clear the timer
    this.stop();

    // Reset the time to 0
    this.setState({
      timePassedInMilliSeconds: 0
    })
  }

  // Render function to display the timer and buttons to start, stop, and reset the timer
  render() {
    return (
      <div>
        <h2 className="border px-3 py-4 rounded my-3 mx-auto text-center" style={{maxWidth: "300px"}}>
          {/* Display the time in seconds, rounded down to the nearest second */}
          {Math.floor(this.state.timePassedInMilliSeconds / 1000)} s
        </h2>
        <div className="d-flex justify-content-center">
          <button className="btn btn-outline-primary mr-2" onClick={this.start}>
            start
          </button>
          <button className="btn btn-outline-danger mr-2" onClick={this.stop}>
            stop
          </button>
          <button className="btn btn-outline-warning" onClick={this.reset}>
            reset
          </button>
        </div>
      </div>
    )
  }
}

// Render the StopWatch component to the DOM
ReactDOM.render(
  <StopWatch />,
  document.getElementById('root')
);
