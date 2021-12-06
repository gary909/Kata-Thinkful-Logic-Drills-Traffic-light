function updateLight(current) {
  
    let trafLight = '';
    switch (current) {
        case 'green':
            return trafLight = 'yellow';
            break;
        case 'yellow':
            return trafLight = 'red';
            break;
        case 'red':
            return trafLight = 'green';
            break;
    }
}

console.log(updateLight("green")); // Return 'yellow'
console.log(updateLight("yellow")); // Return 'red'
console.log(updateLight("red")); // Return 'green'