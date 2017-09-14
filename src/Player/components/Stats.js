import React from 'react';
import * as d3 from "d3";
import * as dimple from 'dimple';



class Stats extends React.Component{
  constructor(){
    super()


  }

  componentWillReceiveProps(nextProps){
      if(nextProps.stats){

        var width = 960,
            height = 800,
            radius = Math.min(width, height) / 1.9,
            spacing = .09;

        var color = d3.scale.linear()
            .range(["hsl(-180,60%,50%)", "hsl(180,60%,50%)"])
            .interpolate(function(a, b) { var i = d3.interpolateString(a, b); return function(t) { return d3.hsl(i(t)); }; });

        var arcBody = d3.svg.arc()
            .startAngle(0)
            .endAngle(function(d) { return d.value * 2 * Math.PI; })
            .innerRadius(function(d) { return d.index * radius; })
            .outerRadius(function(d) { return (d.index + spacing) * radius; })
            .cornerRadius(6);

        var arcCenter = d3.svg.arc()
            .startAngle(0)
            .endAngle(function(d) { return d.value * 2 * Math.PI; })
            .innerRadius(function(d) { return (d.index + spacing / 2) * radius; })
            .outerRadius(function(d) { return (d.index + spacing / 2) * radius; });

        var svg = d3.select("#svg_player_stats").append("svg")
            .attr("width", width)
            .attr("height", height)
          .append("g")
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

        var field = svg.selectAll("g")
            .data(fields)
          .enter().append("g");

        field.append("path")
            .attr("class", "arc-body");

        field.append("path")
            .attr("id", function(d, i) { return "arc-center-" + i; })
            .attr("class", "arc-center");

        field.append("text")
            .attr("dy", ".35em")
            .attr("dx", ".75em")
            .style("text-anchor", "start")
          .append("textPath")
            .attr("startOffset", "50%")
            .attr("class", "arc-text")
            .attr("xlink:href", function(d, i) { return "#arc-center-" + i; });

        tick();

        d3.select("svg").style("height", height + "px");

        function tick() {
          if (!document.hidden) field
              .each(function(d) { this._value = d.value; })
              .data(fields)
              .each(function(d) { d.previousValue = this._value; })
            .transition()
              .ease("elastic")
              .duration(500)
              .each(fieldTransition);


        }

        function fieldTransition() {
          var field = d3.select(this).transition();

          field.select(".arc-body")
              .attrTween("d", arcTween(arcBody))
              .style("fill", function(d) { return color(d.value); });

          field.select(".arc-center")
              .attrTween("d", arcTween(arcCenter));

          field.select(".arc-text")
              .text(function(d) { return d.text; });
        }

        function arcTween(arc) {
          return function(d) {
            var i = d3.interpolateNumber(d.previousValue, d.value);
            return function(t) {
              d.value = i(t);
              return arc(d);
            };
          };
        }

        function convert(){
          let filtered = Object.keys(nextProps.stats).filter(key => ["rating", "ball_control","freekick_accuracy","dribbling","sliding_tackle","standing_tackle","interceptions"].includes(key))
          let x = filtered.map((key, i) => {
            return {
              index: (i / 10) + .1, text: (key + " " + nextProps.stats[key]), value: nextProps.stats[key] / 100
            }
          })

          return x
        }

        function fields() {

          console.log(nextProps.stats)

          console.log(convert())
          return convert();

        }
      }
  }
  render(){
    return(
      <div id="svg_player_stats">
        <h2>Player Stats:</h2>
      </div>
    )
  }
}


export default Stats
