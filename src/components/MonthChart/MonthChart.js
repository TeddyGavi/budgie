import React, { useState, useRef, useEffect } from 'react';
import * as d3 from 'd3';
import './MonthChart.scss';

export const MonthChart = () => {

  const [bar, setBar] = useState([])
  const svgRef = useRef();
  // set the dimensions and margins of the graph

  // Parse the Data
  useEffect(() => {
    const margin = { top: 20, right: 30, bottom: 40, left: 90 },
      width = 460 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    const svg = d3.select(svgRef.current)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    const color = d3.scaleOrdinal()
      .range(["#161747", "#8a89a6", "#297ca6", "#9acce3", "#fddc01", "#e5e8ed", "#6d89e"])


    d3.csv("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/7_OneCatOneNum_header.csv").then(function (data) {
      setBar(data);
      const x = d3.scaleLinear()
        .domain([0, 13000])
        .range([0, width]);
      svg.append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(d3.axisBottom(x))
        .selectAll("text")
        .attr("transform", "translate(-10,0)rotate(-45)")
        .style("text-anchor", "end");

      // Y axis
      const y = d3.scaleBand()
        .range([0, height])
        .domain(data.map(d => d.Country))
        .padding(.1);
      svg.append("g")
        .call(d3.axisLeft(y))

      //Bars
      svg.selectAll("myRect")
        .data(data)
        .join("rect")
        .attr("x", x(0))
        .attr("y", d => y(d.Country))
        .attr("width", d => x(d.Value))
        .attr("height", y.bandwidth())
        .attr('fill', d => { return color([0]) })
    })
  }, []);


  return (
    <div className="Bar">
      <svg ref={svgRef}></svg>
    </div>
  );
}