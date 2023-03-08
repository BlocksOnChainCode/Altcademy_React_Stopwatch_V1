var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StopWatch = function (_React$Component) {
  _inherits(StopWatch, _React$Component);

  function StopWatch(props) {
    _classCallCheck(this, StopWatch);

    // The initial state of the component is set with timePassedInMilliSeconds property which is used to keep track of time
    var _this = _possibleConstructorReturn(this, (StopWatch.__proto__ || Object.getPrototypeOf(StopWatch)).call(this, props));

    _this.state = {
      timePassedInMilliSeconds: 0

      // Declare a timer variable to hold the setInterval function that will be used to update the state every 250 millisecond
    };_this.timer = null;

    // Bind the functions to the current instance of the component using bind method
    _this.start = _this.start.bind(_this);
    _this.stop = _this.stop.bind(_this);
    _this.reset = _this.reset.bind(_this);
    return _this;
  }

  // Function to start the timer


  _createClass(StopWatch, [{
    key: "start",
    value: function start() {
      var _this2 = this;

      // Check if the timer is not already running
      if (!this.timer) {
        // Get the current time as a starting point for the timer
        var startTime = Date.now();

        // Set a setInterval function to run every 250 millisecond
        this.timer = setInterval(function () {
          // Get the current time
          var stopTime = Date.now();

          // Calculate the time difference between the start and stop time, and add it to the previously accumulated time
          var timePassedInMilliSeconds = stopTime - startTime + _this2.state.timePassedInMilliSeconds;

          // Update the state of the component with the new time
          _this2.setState({
            timePassedInMilliSeconds: timePassedInMilliSeconds
          });

          // Reset the start time to the stop time for the next interval
          startTime = stopTime;
        }, 250);
      }
    }

    // Function to stop the timer

  }, {
    key: "stop",
    value: function stop() {
      // Clear the setInterval function
      window.clearInterval(this.timer);

      // Set the timer to null so we can restart it later
      this.timer = null;
    }

    // Function to reset the timer

  }, {
    key: "reset",
    value: function reset() {
      // Call the stop function to clear the timer
      this.stop();

      // Reset the time to 0
      this.setState({
        timePassedInMilliSeconds: 0
      });
    }

    // Render function to display the timer and buttons to start, stop, and reset the timer

  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h2",
          { className: "border px-3 py-4 rounded my-3 mx-auto text-center", style: { maxWidth: "300px" } },
          Math.floor(this.state.timePassedInMilliSeconds / 1000),
          " s"
        ),
        React.createElement(
          "div",
          { className: "d-flex justify-content-center" },
          React.createElement(
            "button",
            { className: "btn btn-outline-primary mr-2", onClick: this.start },
            "start"
          ),
          React.createElement(
            "button",
            { className: "btn btn-outline-danger mr-2", onClick: this.stop },
            "stop"
          ),
          React.createElement(
            "button",
            { className: "btn btn-outline-warning", onClick: this.reset },
            "reset"
          )
        )
      );
    }
  }]);

  return StopWatch;
}(React.Component);

// Render the StopWatch component to the DOM


ReactDOM.render(React.createElement(StopWatch, null), document.getElementById('root'));