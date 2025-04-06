const capitals = {
    Spain: 'Madrid',
    France: 'Paris',
    Italy: 'Rome',
    Germany: 'Berlin',
    Portugal: 'Lisbon',
    Poland: 'Warsaw',
    Greece: 'Athens',
    Austria: 'Vienna',
    Hungary: 'Budapest',
    Ireland: 'Dublin'
  };
  
  function getCapital(country) {
    // insert code

    let objeto = {};
    let ciudad;
     if (capitals [country]){
        ciudad = capitals[country];
        objeto = [country,ciudad];
        return objeto;
    }
    else{
        return "No existe el pais";
    }

    
 }
    console.log(getCapital('Spain'));
    // Output: ['Spain', 'Madrid']
    
    console.log(getCapital('Italy'));
    // Output: ['Italy', 'Rome']
    
    console.log(getCapital('USA'));
    // Output: 'No existe el pais'
    
  