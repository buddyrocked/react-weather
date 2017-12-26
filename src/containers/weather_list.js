import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine, SparklinesSpots, SparklinesBars } from 'react-sparklines';


class WeatherList extends Component {
    renderWeather(cityData){
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);

        return (
            <tr key={name}>
                <td>{name}</td>
                <td>
                  <Sparklines height={120} width={180} data={temps}>
                    <SparklinesLine color="red" />
                  </Sparklines>
                </td>
                <td>
                  <Sparklines height={120} width={180} data={pressures}>
                    <SparklinesLine color="blue" />
                    <SparklinesSpots />
                  </Sparklines>
                </td>
                <td>
                  <Sparklines height={120} width={180} data={humidities}>
                    <SparklinesBars style={{ stroke: "white", fill: "#41c3f9", fillOpacity: ".25" }} />
                    <SparklinesLine style={{ stroke: "#41c3f9", fill: "none" }} />
                  </Sparklines>
                </td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ weather }){
    return {weather}; //{weather:weather}
}

export default connect(mapStateToProps)(WeatherList);
