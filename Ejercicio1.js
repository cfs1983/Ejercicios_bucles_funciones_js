const characters = [
    { name: 'Luke Skywalker', species: 'Human' },
    { name: 'Darth Vader', species: 'Human' },
    { name: 'Chewbacca', species: 'Wookiee' },
    { name: 'Leia Organa', species: 'Human' },
    { name: 'R2-D2', species: 'Droid' },
    { name: 'C-3PO', species: 'Droid' },
    { name: 'Obi-Wan Kenobi', species: 'Human' },
    { name: 'Yoda', species: 'Unknown' },
    { name: 'Han Solo', species: 'Human' }
  ];
  const humanCharacters = [];
  
  // Añade tu código de bucle aquí
function filterHumans(lisst){
    for (personaje of lisst) {
        if (personaje.species === 'Human') {
            humanCharacters.push(personaje);
        }
    }
    
} 
selecHumans(characters);
console.log(humanCharacters);
