const mutants = [
    { name: 'Wolverine', power: 'regeneration' },
    { name: 'Magneto', power: 'magnetism' },
    { name: 'Professor X', power: 'telepathy' },
    { name: 'Jean Grey', power: 'telekinesis' },
    { name: 'Rogue', power: 'power absorption' },
    { name: 'Storm', power: 'weather manipulation' },
    { name: 'Mystique', power: 'shape-shifting' },
    { name: 'Beast', power: 'superhuman strength' },
    { name: 'Colossus', power: 'steel skin' },
    { name: 'Nightcrawler', power: 'teleportation' }
  ];
  
  function findMutantByPower(mutants, power) {
    // insert code
     let heroes = [];
     let a = true;
      for(x of mutants){
       if(x.power === power){
         heroes.push(x.name);
         a = true;
       }
          else{
            a = false;
          }
         }
         if(a)
         {
          return heroes;
         }
          else{
            return 'No se encontró';
          
  }
  
      }
      console.log(findMutantByPower(mutants, 'telepathy')); // ['Professor X']
      console.log(findMutantByPower(mutants, 'telekinesis')); // ['Jean Grey']
