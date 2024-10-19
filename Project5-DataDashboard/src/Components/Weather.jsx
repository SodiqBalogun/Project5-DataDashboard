const Weather = ({} = props) => {
    return (
        <div className="Weather">
            <p> This is my Weather Component! </p>
            <div class="weatherCols">
                <div class="dateCol">
                    <h3> Date </h3>
                </div>
                <div class="tempCol">
                    <h3> Temperature </h3>
                </div>
                <div class="humidCol">
                    <h3> Humidity </h3>
                </div>
                <div class="pressureCol">
                    <h3> Pressure </h3>
                </div>
            </div>
        </div>
    )
}

export default Weather;