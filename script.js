   function convertTemp() {
      const degree = parseFloat(document.getElementById("deg").value);
      const type = document.getElementById("temp").value;
      let result = "";

      if (isNaN(degree)) {
        alert("Please enter a valid number");
        return;
      }

      if (type === "celsius") {
        let f = (degree * 9/5) + 32;
        let k = degree + 273.15;
        result = `${degree}°C = ${f.toFixed(2)}°F, ${k.toFixed(2)}K`;
      } 
      else if (type === "fahrenheit") {
        let c = (degree - 32) * 5/9;
        let k = (degree - 32) * 5/9 + 273.15;
        result = `${degree}°F = ${c.toFixed(2)}°C, ${k.toFixed(2)}K`;
      } 
      else if (type === "kelvin") {
        let c = degree - 273.15;
        let f = (degree - 273.15) * 9/5 + 32;
        result = `${degree}K = ${c.toFixed(2)}°C, ${f.toFixed(2)}°F`;
      }

      document.getElementById("result").value = result;
      document.getElementById("outputBox").style.display = "block";
    }