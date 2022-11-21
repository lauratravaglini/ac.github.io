// PureCounters 

// PC for visitors

new PureCounter({
    selector: ".pc1", // HTML query selector for spesific element
  
    start: 0, // Starting number [uint]
    end: 1160686, // End number [uint]
    duration: 3, // The time in seconds for the animation to complete [seconds]
    delay: 10, // The delay between each iteration (the default of 10 will produce 100 fps) [miliseconds]
    once: false, // Counting at once or recount when the element in view [boolean]
    pulse: false, // Repeat count for certain time [boolean:false|seconds]
    decimals: 0, // How many decimal places to show. [uint]
    legacy: true, // If this is true it will use the scroll event listener on browsers
    filesizing: false, // This will enable/disable File Size format [boolean]
    currency: false, // This will enable/disable Currency format. Use it for set the symbol too [boolean|char|string]
    formater: "us-US", // Number toLocaleString locale/formater, by default is "en-US" [string|boolean:false]
    separator: false, // This will enable/disable comma separator for thousands. Use it for set the symbol too [boolean|char|string]
  });
  
new PureCounter({
    selector: ".pc2", // HTML query selector for spesific element
  
    start: 0, // Starting number [uint]
    end: 1156037, // End number [uint]
    duration: 3, // The time in seconds for the animation to complete [seconds]
    delay: 10, // The delay between each iteration (the default of 10 will produce 100 fps) [miliseconds]
    once: false, // Counting at once or recount when the element in view [boolean]
    pulse: false, // Repeat count for certain time [boolean:false|seconds]
    decimals: 0, // How many decimal places to show. [uint]
    legacy: true, // If this is true it will use the scroll event listener on browsers
    filesizing: false, // This will enable/disable File Size format [boolean]
    currency: false, // This will enable/disable Currency format. Use it for set the symbol too [boolean|char|string]
    formater: "us-US", // Number toLocaleString locale/formater, by default is "en-US" [string|boolean:false]
    separator: false, // This will enable/disable comma separator for thousands. Use it for set the symbol too [boolean|char|string]
});
  
  
  // PC for artworks

  new PureCounter({
    // Setting that can't' be overriden on pre-element
    selector: ".pc3", // HTML query selector for spesific element
  
    // Settings that can be overridden on per-element basis, by `data-purecounter-*` attributes:
    start: 0, // Starting number [uint]
    end: 140848, // End number [uint]
    duration: 3, // The time in seconds for the animation to complete [seconds]
    delay: 10, // The delay between each iteration (the default of 10 will produce 100 fps) [miliseconds]
    once: false, // Counting at once or recount when the element in view [boolean]
    pulse: false, // Repeat count for certain time [boolean:false|seconds]
    decimals: 0, // How many decimal places to show. [uint]
    legacy: true, // If this is true it will use the scroll event listener on browsers
    filesizing: false, // This will enable/disable File Size format [boolean]
    currency: false, // This will enable/disable Currency format. Use it for set the symbol too [boolean|char|string]
    formater: "us-US", // Number toLocaleString locale/formater, by default is "en-US" [string|boolean:false]
    separator: false, // This will enable/disable comma separator for thousands. Use it for set the symbol too [boolean|char|string]
  });
  
  new PureCounter({
    // Setting that can't' be overriden on pre-element
    selector: ".pc4", // HTML query selector for spesific element
  
    // Settings that can be overridden on per-element basis, by `data-purecounter-*` attributes:
    start: 0, // Starting number [uint]
    end: 69201, // End number [uint]
    duration: 3, // The time in seconds for the animation to complete [seconds]
    delay: 10, // The delay between each iteration (the default of 10 will produce 100 fps) [miliseconds]
    once: false, // Counting at once or recount when the element in view [boolean]
    pulse: false, // Repeat count for certain time [boolean:false|seconds]
    decimals: 0, // How many decimal places to show. [uint]
    legacy: true, // If this is true it will use the scroll event listener on browsers
    filesizing: false, // This will enable/disable File Size format [boolean]
    currency: false, // This will enable/disable Currency format. Use it for set the symbol too [boolean|char|string]
    formater: "us-US", // Number toLocaleString locale/formater, by default is "en-US" [string|boolean:false]
    separator: false, // This will enable/disable comma separator for thousands. Use it for set the symbol too [boolean|char|string]
  });
  
// End PureCounters  

// Observer

const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -250px 0px"
  };
  
  const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
      }
    });
  },
  appearOptions);
  
  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
  
  sliders.forEach(slider => {
    appearOnScroll.observe(slider);
  });


// amCharts


    am5.ready(function () {

        // Create root element
        // https://www.amcharts.com/docs/v5/getting-started/#Root_element
        var root = am5.Root.new("cloud_tate");


        // Set themes
        // https://www.amcharts.com/docs/v5/concepts/themes/
        root.setThemes([
            am5themes_Animated.new(root)
        ]);


        // Add series
        // https://www.amcharts.com/docs/v5/charts/word-cloud/
        var series = root.container.children.push(am5wc.WordCloud.new(root, {
            categoryField: "tag",
            valueField: "weight",
            maxFontSize: am5.percent(15)
        }));

        // Configure labels
        series.labels.template.setAll({
            fontFamily: "Courier New"
        });


        // Data from:
        // https://insights.stackoverflow.com/survey/2021#section-most-popular-technologies-programming-scripting-and-markup-languages
        series.data.setAll([
            { tag: "Elisabeth Frink", weight: 125 },
            { tag: "Barbara Hepworth", weight: 124 },
            { tag: "Susanna Duncombe", weight: 76 },
            { tag: "Diane Arbus", weight: 69 },
            { tag: "Elizabeth Rigby", weight: 60 },
            { tag: "Kim Lim", weight: 59 },
            { tag: "Lady Wharncliffe", weight: 55},
            { tag: "Paula Rego", weight: 46 },
            { tag: "Rebecca Horn", weight: 42 },
            { tag: "Helena Almeida", weight: 39 },
            { tag: "Jenny Holzer", weight: 39 },
            { tag: "Helen Frankenthaler", weight: 38 },
            { tag: "Vija Celmins", weight: 35 },
            { tag: "Tracey Moffatt", weight: 34 },
            { tag: "Alison Wilding", weight: 31 },
            { tag: "Tacita Dean", weight: 31 },
            { tag: "Bridget Riley", weight: 31 },
            { tag: "Wilhelmina Barns-Graham", weight: 30 },
            { tag: "Cindy Sherman", weight: 30 }
           
            
        ]);

    }); // end am5.ready()

    am5.ready(function () {

        // Create root element
        // https://www.amcharts.com/docs/v5/getting-started/#Root_element
        var root = am5.Root.new("cloud_moma");


        // Set themes
        // https://www.amcharts.com/docs/v5/concepts/themes/
        root.setThemes([
            am5themes_Animated.new(root)
        ]);

        // Add series
        // https://www.amcharts.com/docs/v5/charts/word-cloud/
        var series = root.container.children.push(am5wc.WordCloud.new(root, {
            categoryField: "tag",
            valueField: "weight",
            maxFontSize: am5.percent(15)
        }));

        // Configure labels
        series.labels.template.setAll({
            fontFamily: "Courier New"
        });

        // Data from:
        // https://insights.stackoverflow.com/survey/2021#section-most-popular-technologies-programming-scripting-and-markup-languages
        series.data.setAll([
            { tag: "Louise Bourgeois", weight: 3336 },
            { tag: "Lilly Reich", weight: 823 },
            { tag: "Dorothea Lange", weight: 480 },
            { tag: "Elaine Lustig Cohen", weight: 235 },
            { tag: "Marianne Wex", weight: 214},
            { tag: "Olga Rozanova", weight: 211 },
            { tag: "Sophie Calle", weight: 203 },
            { tag: "Anni Albers", weight: 198 },
            { tag: "Kiki Smith", weight: 177 },
            { tag: "Aleksandra Mir", weight: 175 },
            { tag: "Frances Benjamin Johnston", weight: 158 },
            { tag: "Natalia Goncharova", weight: 134 },
            { tag: "Lauretta Vinciarelli", weight: 124 },
            { tag: "Claudia Andujar", weight: 109 },
            { tag: "Judith Joy Ross", weight: 106 },
            { tag: "Ilse Bing", weight: 104 },
            { tag: "Sherrie Levine", weight: 103 },
            { tag: "Blanche Parker", weight: 103 },
            { tag: "Elizabeth Murray", weight: 99 }
                 
            
        ]);

    }); // end am5.ready()


    am5.ready(function() {
    
    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("chartdiv");
    
    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root)
    ]);
    
    
    // Create the map chart
    // https://www.amcharts.com/docs/v5/charts/map-chart/
    var chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: "rotateX",
        panY: "rotateY",
        projection: am5map.geoMercator()
      })
    );
    
    // Create series for background fill
    // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/#Background_polygon
    var backgroundSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {}));
    backgroundSeries.mapPolygons.template.setAll({
      fill: root.interfaceColors.get("alternativeBackground"),
      fillOpacity: 0,
      strokeOpacity: 0
    });
    // Add background polygo
    // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/#Background_polygon
    backgroundSeries.data.push({
      geometry: am5map.getGeoRectangle(90, 180, -90, -180)
    });
    
    // Create main polygon series for countries
    // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
    var polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow
      })
    );
    
    polygonSeries.mapPolygons.template.setAll({
      fill: root.interfaceColors.get("alternativeBackground"),
      fillOpacity: 0.15,
      strokeWidth: 0.5,
      stroke: root.interfaceColors.get("background")
    });
    
    // Create polygon series for circles
    // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
    var circleTemplate = am5.Template.new({
      tooltipText: "{name}: {value}"
    });
    
    var bubbleSeries = chart.series.push(
      am5map.MapPointSeries.new(root, {
        calculateAggregates: true,
        valueField: "value",
        polygonIdField: "id"
      })
    );
    
    bubbleSeries.bullets.push(function () {
      return am5.Bullet.new(root, {
        sprite: am5.Circle.new(root, {
          radius: 10,
          templateField: "circleTemplate"
        }, circleTemplate)
      });
    });
    
    bubbleSeries.set("heatRules", [{
      target: circleTemplate,
      min: 3,
      max: 30,
      key: "radius",
      dataField: "value"
    }]);
    
    
    var colors = am5.ColorSet.new(root, {});
    
    
    bubbleSeries.data.setAll([
        {
            id: "GB",
            name: "United Kingdom",
            value: 1522,
            circleTemplate: { fill: colors.getIndex(8) }
        },
        {
            id: "US",
            name: "United States",
            value: 341,
            circleTemplate: { fill: colors.getIndex(4) }
        },
         {
            id: "FR",
            name: "France",
            value: 160,
            circleTemplate: { fill: colors.getIndex(8) }
        },
        {
            id: "DE",
            name: "Germany",
            value: 142,
            circleTemplate: { fill: colors.getIndex(8) }
        },
         {
            id: "IT",
            name: "Italy",
            value: 80,
            circleTemplate: { fill: colors.getIndex(8) }
        },
        {
            id: "IE",
            name: "Ireland",
            value: 51,
            circleTemplate: { fill: colors.getIndex(8) }
        },
        {
            id: "PL",
            name: "Poland",
            value: 44,
            circleTemplate: { fill: colors.getIndex(8) }
        },
        {
            id: "CA",
            name: "Canada",
            value: 40,
            circleTemplate: { fill: colors.getIndex(4) }
        },
        {
            id: "BE",
            name: "Belgium",
            value: 37,
            circleTemplate: { fill: colors.getIndex(8) }
        },
         {
            id: "NL",
            name: "Netherlands",
            value: 35,
            circleTemplate: { fill: colors.getIndex(8) }
        },
         {
            id: "RU",
            name: "Russia",
            value: 32,
            circleTemplate: { fill: colors.getIndex(8) }
        },
         {
            id: "ES",
            name: "Spain",
            value: 30,
            circleTemplate: { fill: colors.getIndex(8) }
        },
         {
            id: "CH",
            name: "Switzerland",
            value: 30,
            circleTemplate: { fill: colors.getIndex(8) }
        },
        {
            id: "BR",
            name: "Brazil",
            value: 30,
            circleTemplate: { fill: colors.getIndex(3) }
        },
        {
            id: "AT",
            name: "Austria",
            value: 29,
            circleTemplate: { fill: colors.getIndex(8) }
        },
         {
            id: "JP",
            name: "Japan",
            value: 27,
            circleTemplate: { fill: colors.getIndex(0) }
        },
        {
            id: "AU",
            name: "Australia",
            value: 24,
            circleTemplate: { fill: colors.getIndex(8) }
        },
        {
            id: "IN",
            name: "India",
            value: 24,
            circleTemplate: { fill: colors.getIndex(0) }
        },
        {
            id: "CN",
            name: "China",
            value: 22,
            circleTemplate: { fill: colors.getIndex(0) }
        },
        {
            id: "ZA",
            name: "South Africa",
            value: 20,
            circleTemplate: { fill: colors.getIndex(2) }
        },
         {
            id: "AR",
            name: "Argentina",
            value: 17,
            circleTemplate: { fill: colors.getIndex(3) }
        },
          {
            id: "UA",
            name: "Ukraine",
              value: 17,
            circleTemplate: { fill: colors.getIndex(8) }
        },
          {
        id: "SE",
        name: "Sweden",
        value: 13,
        circleTemplate: { fill: colors.getIndex(8) }
      },  
        {
            id: "CZ",
            name: "Czech Rep.",
            value: 14,
            circleTemplate: { fill: colors.getIndex(8) }
        },
         {
        id: "SE",
        name: "Sweden",
        value: 13,
        circleTemplate: { fill: colors.getIndex(8) }
      },
        {
            id: "MX",
            name: "Mexico",
            value: 13,
            circleTemplate: { fill: colors.getIndex(4) }
        },
          {
            id: "HU",
            name: "Hungary",
            value: 13,
            circleTemplate: { fill: colors.getIndex(8) }
        },
         {
            id: "RO",
            name: "Romania",
            value: 13,
            circleTemplate: { fill: colors.getIndex(8) }
        },
        {
            id: "IL",
            name: "Israel",
            value: 13,
            circleTemplate: { fill: colors.getIndex(0) }
        },
          {
            id: "IR",
            name: "Iran",
            value: 10,
            circleTemplate: { fill: colors.getIndex(0) }
        },
         {
            id: "NZ",
            name: "New Zealand",
            value: 10,
            circleTemplate: { fill: colors.getIndex(8) }
        },
         {
            id: "GR",
            name: "Greece",
            value: 10,
            circleTemplate: { fill: colors.getIndex(8) }
        },
          {
            id: "CO",
            name: "Colombia",
            value: 10,
            circleTemplate: { fill: colors.getIndex(3) }
        },
         {
            id: "PT",
            name: "Portugal",
            value: 10,
            circleTemplate: { fill: colors.getIndex(8) }
        },
          {
            id: "HR",
            name: "Croatia",
            value: 9,
            circleTemplate: { fill: colors.getIndex(8) }
        },
          {
            id: "CU",
            name: "Cuba",
            value: 9,
            circleTemplate: { fill: colors.getIndex(4) }
        },
          {
            id: "DK",
            name: "Denmark",
            value: 9,
            circleTemplate: { fill: colors.getIndex(8) }
        },
          {
            id: "EG",
            name: "Egypt",
            value: 8,
            circleTemplate: { fill: colors.getIndex(2) }
        },
         {
            id: "LB",
            name: "Lebanon",
            value: 8,
            circleTemplate: { fill: colors.getIndex(0) }
        },
         {
            id: "VE",
            name: "Venezuela",
            value: 7,
            circleTemplate: { fill: colors.getIndex(3) }
        },
         {
            id: "SI",
            name: "Slovenia",
            value: 6,
            circleTemplate: { fill: colors.getIndex(8) }
        },
         {
            id: "TR",
            name: "Turkey",
            value: 6,
            circleTemplate: { fill: colors.getIndex(8) }
        },
          {
            id: "CL",
            name: "Chile",
            value: 5,
            circleTemplate: { fill: colors.getIndex(3) }
        },
    
         {
            id: "PK",
            name: "Pakistan",
            value: 5,
            circleTemplate: { fill: colors.getIndex(0) }
        },
          {
            id: "BY",
            name: "Belarus",
            value: 4,
            circleTemplate: { fill: colors.getIndex(8) }
        },
          {
            id: "LT",
            name: "Lithuania",
            value: 3,
            circleTemplate: { fill: colors.getIndex(8) }
        },
         {
            id: "PE",
            name: "Peru",
            value: 4,
            circleTemplate: { fill: colors.getIndex(3) }
        },
          {
            id: "KP",
            name: "Korea, Dem. Rep.",
            value: 1,
            circleTemplate: { fill: colors.getIndex(0) }
        },
          {
            id: "NO",
            name: "Norway",
            value: 3,
            circleTemplate: { fill: colors.getIndex(8) }
        },
          {
            id: "LK",
            name: "Sri Lanka",
            value: 3,
            circleTemplate: { fill: colors.getIndex(0) }
        },
          {
            id: "LV",
            name: "Latvia",
            value: 3,
            circleTemplate: { fill: colors.getIndex(8) }
        },
         {
            id: "RS",
            name: "Serbia",
            value: 3,
            circleTemplate: { fill: colors.getIndex(8) }
        },
         
        {
            id: "DZ",
            name: "Algeria",
            value: 2,
            circleTemplate: { fill: colors.getIndex(2) }
        },
        {
            id: "VN",
            name: "Vietnam",
            value: 2,
            circleTemplate: { fill: colors.getIndex(0) }
        },
        {
            id: "JM",
            name: "Jamaica",
            value: 2,
            circleTemplate: { fill: colors.getIndex(4) }
        },
        {
            id: "BA",
            name: "Bosnia and Herzegovina",
            value: 2,
            circleTemplate: { fill: colors.getIndex(8) }
        },
        {
            id: "BD",
            name: "Bangladesh",
            value: 2,
            circleTemplate: { fill: colors.getIndex(0) }
        },
        {
            id: "ID",
            name: "Indonesia",
            value: 2,
            circleTemplate: { fill: colors.getIndex(0) }
        },
        {
            id: "SG",
            name: "Singapore",
            value: 2,
            circleTemplate: { fill: colors.getIndex(0) }
        },
         {
            id: "GY",
            name: "Guyana",
            value: 2,
            circleTemplate: { fill: colors.getIndex(3) }
        },
          {
            id: "SY",
            name: "Syria",
            value: 2,
            circleTemplate: { fill: colors.getIndex(0) }
        },
          {
            id: "BG",
            name: "Bulgaria",
            value: 2,
            circleTemplate: { fill: colors.getIndex(8) }
        },
          {
            id: "MU",
            name: "Mauritius",
            value: 2,
            circleTemplate: { fill: colors.getIndex(2) }
        },
         {
            id: "FI",
            name: "Finland",
            value: 1,
            circleTemplate: { fill: colors.getIndex(8) }
        },
        {
            id: "TW",
            name: "Taiwan",
            value: 1,
            circleTemplate: { fill: colors.getIndex(0) }
        },
         {
            id: "MD",
            name: "Moldova",
            value: 1,
            circleTemplate: { fill: colors.getIndex(8) }
        },
        {
            id: "ZW",
            name: "Zimbabwe",
            value: 1,
            circleTemplate: { fill: colors.getIndex(2) }
        },
        {
            id: "LU",
            name: "Luxembourg",
            value: 1,
            circleTemplate: { fill: colors.getIndex(8) }
        },
         {
            id: "SD",
            name: "Sudan",
            value: 1,
            circleTemplate: { fill: colors.getIndex(2) }
        },
          {
            id: "ZM",
            name: "Zambia",
            value: 1,
            circleTemplate: { fill: colors.getIndex(2) }
        },
        {
            id: "MM",
            name: "Myanmar",
            value: 1,
            circleTemplate: { fill: colors.getIndex(0) }
        },
         {
            id: "MY",
            name: "Malaysia",
            value: 1,
            circleTemplate: { fill: colors.getIndex(0) }
        },
        {
            id: "EE",
            name: "Estonia",
            value: 1,
            circleTemplate: { fill: colors.getIndex(8) }
        },
        {
            id: "CM",
            name: "Cameroon",
            value: 1,
            circleTemplate: { fill: colors.getIndex(2) }
        },
        {
            id: "UG",
            name: "Uganda",
            value: 1,
            circleTemplate: { fill: colors.getIndex(2) }
        },
        {
            id: "IQ",
            name: "Iraq",
            value: 1,
            circleTemplate: { fill: colors.getIndex(0) }
        },
          {
            id: "TN",
            name: "Tunisia",
            value: 1,
            circleTemplate: { fill: colors.getIndex(2) }
        },
        {
            id: "AL",
            name: "Albania",
            value: 1,
            circleTemplate: { fill: colors.getIndex(8) }
        },
         {
            id: "TZ",
            name: "Tanzania",
            value: 1,
            circleTemplate: { fill: colors.getIndex(2) }
        },
        {
            id: "BJ",
            name: "Benin",
            value: 1,
            circleTemplate: { fill: colors.getIndex(2) }
        },
        {
            id: "TH",
            name: "Thailand",
            value: 1,
            circleTemplate: { fill: colors.getIndex(0) }
        },
        {
            id: "NI",
            name: "Nicaragua",
            value: 1,
            circleTemplate: { fill: colors.getIndex(4) }
        },
         {
            id: "IS",
            name: "Iceland",
            value: 1,
            circleTemplate: { fill: colors.getIndex(8) }
        },
          {
            id: "MK",
            name: "Macedonia, FYR",
            value: 1,
            circleTemplate: { fill: colors.getIndex(8) }
        },
        {
            id: "PH",
            name: "Philippines",
            value: 1,
            circleTemplate: { fill: colors.getIndex(0) }
        },
        {
            id: "CR",
            name: "Costa Rica",
            value: 1,
            circleTemplate: { fill: colors.getIndex(4) }
        },
          {
            id: "KE",
            name: "Kenya",
            value: 1,
            circleTemplate: { fill: colors.getIndex(2) }
        },
          {
            id: "KR",
            name: "Korea, Rep.",
            value: 3,
            circleTemplate: { fill: colors.getIndex(0) }
        },
          {
            id: "AM",
            name: "Armenia",
            value: 1,
            circleTemplate: { fill: colors.getIndex(8) }
        },
        {
            id: "PA",
            name: "Panama",
            value: 1,
            circleTemplate: { fill: colors.getIndex(4) }
        },
          {
            id: "NG",
            name: "Nigeria",
            value: 1,
            circleTemplate: { fill: colors.getIndex(2) }
        },
    
    
    
    
        ]);
        
        // Add globe/map switch
        var cont = chart.children.push(am5.Container.new(root, {
            layout: root.horizontalLayout,
            x: 20,
            y: 40
        }));
    
        cont.children.push(am5.Label.new(root, {
            centerY: am5.p50,
            text: "Map"
        }));
    
        var switchButton = cont.children.push(
            am5.Button.new(root, {
                themeTags: ["switch"],
                centerY: am5.p50,
                icon: am5.Circle.new(root, {
                    themeTags: ["icon"]
                })
            })
        );
    
        switchButton.on("active", function () {
            if (!switchButton.get("active")) {
                chart.set("projection", am5map.geoMercator());
                backgroundSeries.mapPolygons.template.set("fillOpacity", 0);
            } else {
                chart.set("projection", am5map.geoOrthographic());
                backgroundSeries.mapPolygons.template.set("fillOpacity", 0.1);
            }
        });
    
        cont.children.push(
            am5.Label.new(root, {
                centerY: am5.p50,
                text: "Globe"
            })
        );
    
        // Make stuff animate on load
        chart.appear(1000, 100);
    
    }); 
    
am5.ready()

    am5.ready(function() {
    
    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("map_moma");
    
    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root)
    ]);
    
    
    // Create the map chart
    // https://www.amcharts.com/docs/v5/charts/map-chart/
    var chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: "rotateX",
        panY: "rotateY",
        projection: am5map.geoMercator()
      })
    );
    
    // Create series for background fill
    // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/#Background_polygon
    var backgroundSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {}));
    backgroundSeries.mapPolygons.template.setAll({
      fill: root.interfaceColors.get("alternativeBackground"),
      fillOpacity: 0,
      strokeOpacity: 0
    });
    // Add background polygo
    // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/#Background_polygon
    backgroundSeries.data.push({
      geometry: am5map.getGeoRectangle(90, 180, -90, -180)
    });
    
    // Create main polygon series for countries
    // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
    var polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow
      })
    );
    
    polygonSeries.mapPolygons.template.setAll({
      fill: root.interfaceColors.get("alternativeBackground"),
      fillOpacity: 0.15,
      strokeWidth: 0.5,
      stroke: root.interfaceColors.get("background")
    });
    
    // Create polygon series for circles
    // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
    var circleTemplate = am5.Template.new({
      tooltipText: "{name}: {value}"
    });
    
    var bubbleSeries = chart.series.push(
      am5map.MapPointSeries.new(root, {
        calculateAggregates: true,
        valueField: "value",
        polygonIdField: "id"
      })
    );
    
    bubbleSeries.bullets.push(function () {
      return am5.Bullet.new(root, {
        sprite: am5.Circle.new(root, {
          radius: 10,
          templateField: "circleTemplate"
        }, circleTemplate)
      });
    });
    
    bubbleSeries.set("heatRules", [{
      target: circleTemplate,
      min: 3,
      max: 30,
      key: "radius",
      dataField: "value"
    }]);
    
    
    var colors = am5.ColorSet.new(root, {});
    
    
    bubbleSeries.data.setAll([
        {
            id: "US",
            name: "United States",
            value: 5181,
            circleTemplate: { fill: colors.getIndex(4) }
        },
        {
            id: "DE",
            name: "Germany",
            value: 965,
            circleTemplate: { fill: colors.getIndex(8) }
        },
         {
            id: "GB",
            name: "United Kingdom",
            value: 883,
            circleTemplate: { fill: colors.getIndex(8) }
        },
           {
            id: "FR",
            name: "France",
            value: 847,
            circleTemplate: { fill: colors.getIndex(8) }
        },
           {
            id: "IT",
            name: "Italy",
            value: 536,
            circleTemplate: { fill: colors.getIndex(8) }
        },
             {
            id: "JP",
            name: "Japan",
            value: 537,
            circleTemplate: { fill: colors.getIndex(0) }
        },
            {
            id: "CH",
            name: "Switzerland",
            value: 297,
            circleTemplate: { fill: colors.getIndex(8) }
        },
             {
            id: "NL",
            name: "Netherlands",
            value: 274,
            circleTemplate: { fill: colors.getIndex(8) }
        },
        {
            id: "RU",
            name: "Russia",
            value: 262,
            circleTemplate: { fill: colors.getIndex(8) }
        },
         {
            id: "AT",
            name: "Austria",
            value: 239,
            circleTemplate: { fill: colors.getIndex(8) }
        },
          {
            id: "CA",
            name: "Canada",
            value: 192,
            circleTemplate: { fill: colors.getIndex(4) }
        },
          {
            id: "BR",
            name: "Brazil",
            value: 187,
            circleTemplate: { fill: colors.getIndex(3) }
        },
          {
            id: "ES",
            name: "Spain",
            value: 157,
            circleTemplate: { fill: colors.getIndex(8) }
        },
           {
            id: "AR",
            name: "Argentina",
            value: 142,
            circleTemplate: { fill: colors.getIndex(3) }
        },
          {
            id: "MX",
            name: "Mexico",
            value: 135,
            circleTemplate: { fill: colors.getIndex(4) }
        },
          {
            id: "PL",
            name: "Poland",
            value: 131,
            circleTemplate: { fill: colors.getIndex(8) }
        },
         {
            id: "SE",
            name: "Sweden",
            value: 128,
            circleTemplate: { fill: colors.getIndex(8) }
        },
           {
            id: "DK",
            name: "Denmark",
            value: 121,
            circleTemplate: { fill: colors.getIndex(8) }
        },
        {
            id: "CN",
            name: "China",
            value: 101,
            circleTemplate: { fill: colors.getIndex(0) }
        },
         {
            id: "BE",
            name: "Belgium",
            value: 96,
            circleTemplate: { fill: colors.getIndex(8) }
        },
         {
            id: "CZ",
            name: "Czech Rep.",
            value: 78,
            circleTemplate: { fill: colors.getIndex(8) }
        },
          {
            id: "IL",
            name: "Israel",
            value: 75,
            circleTemplate: { fill: colors.getIndex(0) }
        },
          {
            id: "CL",
            name: "Chile",
            value: 70,
            circleTemplate: { fill: colors.getIndex(3) }
        },
        {
            id: "ZA",
            name: "South Africa",
            value: 67,
            circleTemplate: { fill: colors.getIndex(2) }
        },
          {
            id: "CU",
            name: "Cuba",
            value: 64,
            circleTemplate: { fill: colors.getIndex(4) }
        },
          {
            id: "FI",
            name: "Finland",
            value: 62,
            circleTemplate: { fill: colors.getIndex(8) }
        },
         {
        id: "VE",
        name: "Venezuela",
        value: 62,
        circleTemplate: { fill: colors.getIndex(3) }
      },
       {
            id: "AU",
            name: "Australia",
            value: 55,
            circleTemplate: { fill: colors.getIndex(8) }
        },
          {
            id: "CO",
            name: "Colombia",
            value: 54,
            circleTemplate: { fill: colors.getIndex(3) }
        },
          {
        id: "HU",
        name: "Hungary",
        value: 53,
        circleTemplate: { fill: colors.getIndex(8) }
      },
       {
            id: "NO",
            name: "Norway",
            value: 49,
            circleTemplate: { fill: colors.getIndex(8) }
        },
          {
            id: "IN",
            name: "India",
            value: 39,
            circleTemplate: { fill: colors.getIndex(0) }
        },
          {
            id: "PE",
            name: "Peru",
            value: 39,
            circleTemplate: { fill: colors.getIndex(3) }
        },
          {
            id: "HR",
            name: "Croatia",
            value: 34,
            circleTemplate: { fill: colors.getIndex(8) }
        },
          {
            id: "KP",
            name: "Korea, Dem. Rep.",
            value: 31,
            circleTemplate: { fill: colors.getIndex(0) }
        },
          {
            id: "IE",
            name: "Ireland",
            value: 24,
            circleTemplate: { fill: colors.getIndex(8) }
        },
          {
            id: "UY",
            name: "Uruguay",
            value: 23,
            circleTemplate: { fill: colors.getIndex(3) }
        },
        {
            id: "TR",
            name: "Turkey",
            value: 20,
            circleTemplate: { fill: colors.getIndex(8) }
        },
         {
            id: "RO",
            name: "Romania",
            value: 19,
            circleTemplate: { fill: colors.getIndex(8) }
        },
          {
            id: "HT",
            name: "Haiti",
            value: 17,
            circleTemplate: { fill: colors.getIndex(4) }
        },
        {
            id: "SI",
            name: "Slovenia",
            value: 17,
            circleTemplate: { fill: colors.getIndex(8) }
        },
          {
            id: "RS",
            name: "Serbia",
            value: 16,
            circleTemplate: { fill: colors.getIndex(8) }
        },
          {
            id: "NZ",
            name: "New Zealand",
            value: 16,
            circleTemplate: { fill: colors.getIndex(8) }
        },
         {
            id: "UA",
            name: "Ukraine",
            value: 13,
            circleTemplate: { fill: colors.getIndex(8) }
        },
          {
            id: "IS",
            name: "Iceland",
            value: 12,
            circleTemplate: { fill: colors.getIndex(8) }
        },
        {
            id: "IR",
            name: "Iran",
            value: 11,
            circleTemplate: { fill: colors.getIndex(0) }
        },
         {
            id: "GR",
            name: "Greece",
            value: 11,
            circleTemplate: { fill: colors.getIndex(8) }
        },
          {
            id: "EG",
            name: "Egypt",
            value: 11,
            circleTemplate: { fill: colors.getIndex(2) }
        },
          {
            id: "PT",
            name: "Portugal",
            value: 10,
            circleTemplate: { fill: colors.getIndex(8) }
        },
          {
            id: "LB",
            name: "Lebanon",
            value: 10,
            circleTemplate: { fill: colors.getIndex(0) }
        },
          {
            id: "SK",
            name: "Slovak Republic",
            value: 8,
            circleTemplate: { fill: colors.getIndex(8) }
        },
          {
            id: "PR",
            name: "Puerto Rico",
            value: 7,
            circleTemplate: { fill: colors.getIndex(4) }
        },
        {
            id: "GT",
            name: "Guatemala",
            value: 7,
            circleTemplate: { fill: colors.getIndex(4) }
        },
        {
            id: "GE",
            name: "Georgia",
            value: 6,
            circleTemplate: { fill: colors.getIndex(8) }
        },
         {
            id: "BA",
            name: "Bosnia and Herzegovina",
            value: 6,
            circleTemplate: { fill: colors.getIndex(8) }
        },
        {
            id: "CD",
            name: "Congo, Dem. Rep.",
            value: 6,
            circleTemplate: { fill: colors.getIndex(2) }
        },
        {
            id: "MA",
            name: "Morocco",
            value: 6,
            circleTemplate: { fill: colors.getIndex(2) }
        },
          {
            id: "NG",
            name: "Nigeria",
            value: 6,
            circleTemplate: { fill: colors.getIndex(2) }
        },
          {
            id: "VN",
            name: "Vietnam",
            value: 5,
            circleTemplate: { fill: colors.getIndex(0) }
        },
         {
            id: "CZ",
            name: "Czech Rep.",
            value: 5,
            circleTemplate: { fill: colors.getIndex(8) }
        },
          {
            id: "TW",
            name: "Taiwan",
            value: 5,
            circleTemplate: { fill: colors.getIndex(0) }
        },
          {
            id: "BG",
            name: "Bulgaria",
            value: 5,
            circleTemplate: { fill: colors.getIndex(8) }
        },
          {
            id: "ZW",
            name: "Zimbabwe",
            value: 5,
            circleTemplate: { fill: colors.getIndex(2) }
        },
          {
            id: "MK",
            name: "Macedonia, FYR",
            value: 4,
            circleTemplate: { fill: colors.getIndex(8) }
        },
         {
            id: "PK",
            name: "Pakistan",
            value: 4,
            circleTemplate: { fill: colors.getIndex(0) }
        },
          {
            id: "EC",
            name: "Ecuador",
            value: 4,
            circleTemplate: { fill: colors.getIndex(3) }
        },
        {
            id: "LU",
            name: "Luxembourg",
            value: 3,
            circleTemplate: { fill: colors.getIndex(8) }
        },
          {
            id: "GH",
            name: "Ghana",
            value: 3,
            circleTemplate: { fill: colors.getIndex(2) }
        },
         {
            id: "EE",
            name: "Estonia",
            value: 3,
            circleTemplate: { fill: colors.getIndex(8) }
        },
         {
            id: "PH",
            name: "Philippines",
            value: 3,
            circleTemplate: { fill: colors.getIndex(0) }
        },
        {
            id: "ML",
            name: "Mali",
            value: 3,
            circleTemplate: { fill: colors.getIndex(2) }
        },
        {
            id: "BO",
            name: "Bolivia",
            value: 3,
            circleTemplate: { fill: colors.getIndex(3) }
        },
            {
            id: "DZ",
            name: "Algeria",
            value: 3,
            circleTemplate: { fill: colors.getIndex(2) }
        },
           {
            id: "AL",
            name: "Albania",
            value: 3,
            circleTemplate: { fill: colors.getIndex(8) }
        },
          {
            id: "LV",
            name: "Latvia",
            value: 3,
            circleTemplate: { fill: colors.getIndex(8) }
        },
         {
            id: "LT",
            name: "Lithuania",
            value: 3,
            circleTemplate: { fill: colors.getIndex(8) }
        },
         {
            id: "AE",
            name: "United Arab Emirates",
            value: 2,
            circleTemplate: { fill: colors.getIndex(0) }
        },
          {
            id: "MY",
            name: "Malaysia",
            value: 2,
            circleTemplate: { fill: colors.getIndex(0) }
        },
         {
            id: "NA",
            name: "Namibia",
            value: 2,
            circleTemplate: { fill: colors.getIndex(2) }
        },
          {
            id: "KG",
            name: "Kyrgyzstan",
            value: 2,
            circleTemplate: { fill: colors.getIndex(0) }
        },
          {
            id: "CR",
            name: "Costa Rica",
            value: 2,
            circleTemplate: { fill: colors.getIndex(4) }
        },
          {
            id: "PA",
            name: "Panama",
            value: 2,
            circleTemplate: { fill: colors.getIndex(4) }
        },
          {
            id: "IQ",
            name: "Iraq",
            value: 2,
            circleTemplate: { fill: colors.getIndex(0) }
        },
          {
            id: "CM",
            name: "Cameroon",
            value: 2,
            circleTemplate: { fill: colors.getIndex(2) }
        },
        {
            id: "SN",
            name: "Senegal",
            value: 2,
            circleTemplate: { fill: colors.getIndex(2) }
        },
         {
            id: "PY",
            name: "Paraguay",
            value: 2,
            circleTemplate: { fill: colors.getIndex(3) }
        },
          {
            id: "SD",
            name: "Sudan",
            value: 2,
            circleTemplate: { fill: colors.getIndex(2) }
        },
         {
            id: "NI",
            name: "Nicaragua",
            value: 2,
            circleTemplate: { fill: colors.getIndex(4) }
        },
          {
            id: "ET",
            name: "Ethiopia",
            value: 2,
            circleTemplate: { fill: colors.getIndex(2) }
        },
          {
            id: "SG",
            name: "Singapore",
            value: 2,
            circleTemplate: { fill: colors.getIndex(0) }
        },
          {
            id: "SV",
            name: "El Salvador",
            value: 2,
            circleTemplate: { fill: colors.getIndex(4) }
        },
         {
            id: "TH",
            name: "Thailand",
            value: 2,
            circleTemplate: { fill: colors.getIndex(0) }
        },
           {
            id: "TN",
            name: "Tunisia",
            value: 2,
            circleTemplate: { fill: colors.getIndex(2) }
        },
        {
            id: "TZ",
            name: "Tanzania",
            value: 1,
            circleTemplate: { fill: colors.getIndex(2) }
        },
          {
            id: "UG",
            name: "Uganda",
            value: 1,
            circleTemplate: { fill: colors.getIndex(2) }
        },
         {
            id: "CY",
            name: "Cyprus",
            value: 1,
            circleTemplate: { fill: colors.getIndex(8) }
        },
         {
            id: "KW",
            name: "Kuwait",
            value: 1,
            circleTemplate: { fill: colors.getIndex(0) }
        },
        {
            id: "CI",
            name: "Cote d'Ivoire",
            value: 1,
            circleTemplate: { fill: colors.getIndex(2) }
        },
          {
            id: "BD",
            name: "Bangladesh",
            value: 1,
            circleTemplate: { fill: colors.getIndex(0) }
        },
        {
            id: "KE",
            name: "Kenya",
            value: 1,
            circleTemplate: { fill: colors.getIndex(2) }
        },
         {
            id: "MZ",
            name: "Mozambique",
            value: 1,
            circleTemplate: { fill: colors.getIndex(2) }
        },
          {
            id: "SL",
            name: "Sierra Leone",
            value: 1,
            circleTemplate: { fill: colors.getIndex(2) }
        },
          {
            id: "KH",
            name: "Cambodia",
            value: 1,
            circleTemplate: { fill: colors.getIndex(0) }
        },
         {
            id: "BF",
            name: "Burkina Faso",
            value: 1,
            circleTemplate: { fill: colors.getIndex(2) }
        },
          {
            id: "BJ",
            name: "Benin",
            value: 1,
            circleTemplate: { fill: colors.getIndex(2) }
        },
    
    
    
    
      ]);
    
        // Add globe/map switch
        var cont = chart.children.push(am5.Container.new(root, {
            layout: root.horizontalLayout,
            x: 20,
            y: 40
        }));
    
        cont.children.push(am5.Label.new(root, {
            centerY: am5.p50,
            text: "Map"
        }));
    
        var switchButton = cont.children.push(
            am5.Button.new(root, {
                themeTags: ["switch"],
                centerY: am5.p50,
                icon: am5.Circle.new(root, {
                    themeTags: ["icon"]
                })
            })
        );
    
        switchButton.on("active", function () {
            if (!switchButton.get("active")) {
                chart.set("projection", am5map.geoMercator());
                backgroundSeries.mapPolygons.template.set("fillOpacity", 0);
            } else {
                chart.set("projection", am5map.geoOrthographic());
                backgroundSeries.mapPolygons.template.set("fillOpacity", 0.1);
            }
        });
    
        cont.children.push(
            am5.Label.new(root, {
                centerY: am5.p50,
                text: "Globe"
            })
        );
    
        // Make stuff animate on load
        chart.appear(1000, 100);
    
    }); 
    
am5.ready()


