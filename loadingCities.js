let cities = [];

fetch("worldcities.csv")
.then(response => response.text())
.then(csvText =>{
    //splicting by rows
    const rows = csvText.trim().split("\n")
    
    //splicting the header and data rows
    const headers = rows[0]; //.split(",");
    
    rows.forEach((row) => {
        const values = row.split(',')
        cities.push(values[1].replace(/"/g,''));
        // cityCountry.city = values[1].replace(/"/g,'');
        // cityCountry.country = values[4].replace(/"/g,'');
    })
  
    //actual data
    // const data = rows.slice(1).map(row =>{
    //     const values = row.split(",");
    //     const obj = {};
    //     headers.forEach((headers,index) => {
    //         obj[headers.trim()] = values[index].trim();
    //     });
    //     return obj;
    // })

    // const names = data.map(row => row["Name"]);
    // console.log(names);
})
