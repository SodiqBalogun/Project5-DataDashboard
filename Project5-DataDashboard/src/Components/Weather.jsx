const Weather = ({dates, temps, humidities, pressures} = props) => {
    return (
        <div className="Weather">
            <p> This is my Weather Component! </p>
            <div className="weatherCols">
                <div className="dateCol">
                    <h3> Date </h3>
                    {dates}
                </div>
                <div className="tempCol">
                    <h3> Temperature </h3>
                    {temps}
                </div>
                <div className="humidCol">
                    <h3> Humidity (Relative) </h3>
                    {humidities}
                </div>
                <div className="pressureCol">
                    <h3> Pressure </h3>
                    {pressures}
                </div>
            </div>
        </div>
    )
}

export default Weather;