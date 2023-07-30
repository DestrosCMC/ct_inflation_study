var margin = { top: 30, right: 30, bottom: 70, left: 60 },
	width = 750 - margin.left - margin.right,
	height = 500 - margin.top - margin.bottom;

const Inf2023 = [71330.38918783658,82607.71121994017,70205.41812576566,79890.72555024258]
const Inf2022 = [66877.03571736092,76375.49070713851,64666.48004040189,74896.97144454699]
const Inf2021 = [61929.89285288343,71880.83892950702,60314.063626395386,70254.55597813237]
const Yr2023 = [69220.23143452409,77910.62571676525,64291.19576600201,73837.2428125603]
const Yr2022 = [66044.94437906849,76486.6385130202,65003.331511558645,73970.97626195116]

var y = d3.scaleLinear().domain([60000, 85000]).range([height, 0]);

async function loadScene1() {
	var svg = d3
		.select("#my_dataviz")
		.append("svg")
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom)
		.append("g")
		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	data = await d3.csv("salaries.csv").then(function (data) {
		var x = d3
			.scaleBand()
			.range([0, width])
			.domain(
				data.map(function (d) {
					return d.Agency;
				})
			)
			.padding(0.2);
		svg
			.append("g")
			.attr("transform", "translate(0," + height + ")")
			.call(d3.axisBottom(x))
			.selectAll("text")
			.attr("transform", "translate(-10,0)rotate(-10)")
			.style("text-anchor", "end");

		svg
			.append("text")
			.attr("x", -140)
			.attr("y", -47)
			.attr("transform", "rotate(-90)")
			.attr("text-anchor", "middle")
			.text("Salary ($)");

		// Add Y axis
		var y = d3.scaleLinear().domain([60000, 85000]).range([height, 0]);
		svg.append("g").call(d3.axisLeft(y));

		// Bars
		svg
			.selectAll("mybar")
			.data(data)
			.enter()
			.append("rect")
			.attr("x", function (d) {
				return x(d.Agency);
			})
			.attr("y", function (d) {
				return y(d.Yr2023);
			})
			.attr("width", x.bandwidth())
			.attr("height", function (d) {
				return height - y(d.Yr2023);
			})
			.attr("fill", "#000080")
			.on("mouseover", function (event, data) {
				tooltip.transition().duration(200).style("opacity", 0.9);
				tooltip
					.html("Yearly Salary: " + data.Yr2023)
					.style("left", event.pageX + "px")
					.style("top", event.pageY - 28 + "px");
			})
			.on("mouseout", function (d) {
				tooltip.transition().duration(500).style("opacity", 0);
			});
	});

	var tooltip = d3
		.select("#my_dataviz")
		.append("div")
		.attr("class", "tooltip")
		.style("opacity", 0)
		.style("background-color", "black")
		.style("border-radius", "5px")
		.style("padding", "1px")
		.style("color", "white")
		.style("position", "absolute");
}

async function loadScene2() {
	var svg = d3
		.select("#my_dataviz")
		.append("svg")
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom)
		.append("g")
		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	data = await d3.csv("salaries.csv").then(function (data) {
		var x = d3
			.scaleBand()
			.range([0, width])
			.domain(
				data.map(function (d) {
					return d.Agency;
				})
			)
			.padding(0.2);
		svg
			.append("g")
			.attr("transform", "translate(0," + height + ")")
			.call(d3.axisBottom(x))
			.selectAll("text")
			.attr("transform", "translate(-10,0)rotate(-10)")
			.style("text-anchor", "end");

		svg
			.append("text")
			.attr("x", -140)
			.attr("y", -47)
			.attr("transform", "rotate(-90)")
			.attr("text-anchor", "middle")
			.text("Salary ($)");

		// Add Y axis
		var y = d3.scaleLinear().domain([60000, 85000]).range([height, 0]);
		svg.append("g").call(d3.axisLeft(y));

		// Bars
		svg
			.selectAll("mybar")
			.data(data)
			.enter()
			.append("rect")
			.attr("x", function (d) {
				return x(d.Agency);
			})
			.attr("y", function (d) {
				return y(d.Yr2022);
			})
			.attr("width", x.bandwidth())
			.attr("height", function (d) {
				return height - y(d.Yr2022);
			})
			.attr("fill", "#000080")
			.on("mouseover", function (event, data) {
				tooltip.transition().duration(200).style("opacity", 0.9);
				tooltip
					.html("Yearly Salary: " + data.Yr2023)
					.style("left", event.pageX + "px")
					.style("top", event.pageY - 28 + "px");
			})
			.on("mouseout", function (d) {
				tooltip.transition().duration(500).style("opacity", 0);
			});
	});


	var tooltip = d3
		.select("#my_dataviz")
		.append("div")
		.attr("class", "tooltip")
		.style("opacity", 0)
		.style("background-color", "black")
		.style("border-radius", "5px")
		.style("padding", "1px")
		.style("color", "white")
		.style("position", "absolute");

	const makeAnnotations = d3
		.annotation()
		.type(d3.annotationLabel)
		.annotations(annotations);

	d3.select("svg")
		.append("g")
		.attr("class", "annotation-group")
		.attr("id", "annot")
		.call(makeAnnotations);
}

async function loadScene3() {
	formValidation();
	var y = d3.scaleLinear().domain([60000, 85000]).range([height, 0]);
	var svg = d3
		.select("#my_dataviz")
		.append("svg")
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom)
		.append("g")
		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	data = await d3.csv("salaries.csv").then(function (data) {
		var x = d3
			.scaleBand()
			.range([0, width])
			.domain(
				data.map(function (d) {
					return d.Agency;
				})
			)
			.padding(0.2);
		svg
			.append("g")
			.attr("transform", "translate(0," + height + ")")
			.call(d3.axisBottom(x))
			.selectAll("text")
			.attr("transform", "translate(-10,0)rotate(-10)")
			.style("text-anchor", "end");

		svg
			.append("text")
			.attr("x", -130)
			.attr("y", -47)
			.attr("transform", "rotate(-90)")
			.attr("text-anchor", "middle")
			.text("Salary ($)");

		svg.append("g").call(d3.axisLeft(y));

		svg
			.selectAll("mybar")
			.data(data)
			.enter()
			.append("rect")
			.attr("x", function (d) {
				return x(d.Agency);
			})
			.attr("y", function (d) {
				return y(
					infCalc(
						d.Yr2023,
						
						document.getElementById("quantity").value
					)
				);
			})
			.attr("width", x.bandwidth())
			.attr("height", function (d) {
				return (
					height -
					y(
						infCalc(
							d.Yr2023,
							
							document.getElementById("quantity").value
						)
					)
				);
			})
			.attr("fill", "#99c2ff")
			.on("mouseover", function (event, data) {
				tooltip.transition().duration(200).style("opacity", 0.9);
				tooltip
					.html(
						"Projected Yearly Wage: $" +
							parseInt(
								infCalc(
									data.Yr2023,
									
									document.getElementById("quantity").value
								)
							)
					)
					.style("left", event.pageX + "px")
					.style("top", event.pageY - 28 + "px");
			})
			.on("mouseout", function (d) {
				tooltip.transition().duration(500).style("opacity", 0);
			});
	});

	var tooltip = d3
		.select("#my_dataviz")
		.append("div")
		.attr("class", "tooltip")
		.style("opacity", 0)
		.style("background-color", "black")
		.style("border-radius", "5px")
		.style("padding", "1px")
		.style("color", "white")
		.style("position", "absolute");
}

function update2023(setting) {
	if (setting === "real") {
		d3.select("#my_dataviz")
			.selectAll("rect")
			.transition()
			.duration(2000)
			.attr("fill", "#000080")
			.attr("y", function (d, i) {
				return y(Yr2023[i]);
			})
			.attr("height", function (d, i) {
				return height - y(Yr2023[i]);
			});
	} else {
		d3.select("#my_dataviz")
			.selectAll("rect")
			.transition()
			.duration(2000)
			.attr("fill", "#00cc00")
			.attr("y", function (d, i) {
				return y(Inf2023[i]);
			})
			.attr("height", function (d, i) {
				return height - y(Inf2023[i]);
			});
	}
}

function update2022(setting) {
	if (setting === "real") {
		d3.select("#my_dataviz")
			.selectAll("rect")
			.transition()
			.duration(2000)
			.attr("fill", "#000080")
			.attr("y", function (d, i) {
				return y(Yr2022[i]);
			})
			.attr("height", function (d, i) {
				return height - y(Yr2022[i]);
			});
	} else {
		d3.select("#my_dataviz")
			.selectAll("rect")
			.transition()
			.duration(2000)
			.attr("fill", "#00cc00")
			.attr("y", function (d, i) {
				return y(Inf2022[i]);
			})
			.attr("height", function (d, i) {
				return height - y(Inf2022[i]);
			});
	}
}


function infCalc(Yr2023, inf = 2) {
	// Calculate 2024 Dept of Transportation Salary with Inflation Input
	//const Yr2023Data = 77910.625717;
	salary_2024 = (1+(inf/100))*Yr2023;
	return salary_2024;
}

function updateInf(inf) {
	inf = Number.parseInt(inf);

	var y = d3.scaleLinear().domain([60000, 85000]).range([height, 0]);

	d3.select("#my_dataviz")
		.selectAll("rect")
		.transition()
		.duration(2000)
		.attr("fill", "#000080")
		.attr("y", function (d, i) {
			return y(infCalc(d.Yr2023,inf));
		})
		.attr("height", function (d, i) {
			return height - y(infCalc(d.Yr2023,inf));
		});
}

function formValidation(obj) {
	let inf = obj;

	if (inf < 1 || inf > 200) {
		document.getElementById("button").disabled = true;
	} else {
		document.getElementById("button").disabled = false;
	}
}
