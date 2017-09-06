import React from 'react';
import * as d3 from "d3";

import dimple from 'dimple';


class Stats extends React.Component{

  componentWillReceiveProps(nextProps){

      let objKeys = Object.keys(nextProps.stats)
      let objValues = Object.values(nextProps.stats)


      let filteredKeys = objKeys.filter((key, index) => {
        return isNaN(parseInt(objValues[index])) === false && ["id", "created_at", "updated_at", "player_id", "height"].includes(key) === false
      })

      let data = filteredKeys.map((key, index) => {
        let vals = objValues
        return {"Stats": key, "Stat":parseInt(nextProps.stats[key])}
      })

      var svg = dimple.newSvg("body", 800, 600);

      // var data = [
      //   { "Stats":"Hello", "Awesomeness":"182 cm" },
      //   { "Stats":"World", "Awesomeness":3000 }
      // ];
      var chart = new dimple.chart(svg, data);
      chart.addCategoryAxis("y", "Stats");
      chart.addMeasureAxis("x", "Stat");
      chart.addSeries(null, dimple.plot.bar);
      chart.draw();
  }
  render(){
    return(
      <div>
        <h2>Player Stats:</h2>
      </div>
    )
  }
}


export default Stats
