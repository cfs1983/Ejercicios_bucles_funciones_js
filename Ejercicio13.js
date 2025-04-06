const actors = [
    { name: 'Leonardo DiCaprio', born: 1974 },
    { name: 'Tom Hanks', born: 1956 },
    { name: 'Meryl Streep', born: 1949 },
    { name: 'Brad Pitt', born: 1963 },
    { name: 'Johnny Depp', born: 1963 },
    { name: 'Scarlett Johansson', born: 1984 },
    { name: 'Jennifer Lawrence', born: 1990 },
    { name: 'Denzel Washington', born: 1954 },
    { name: 'Morgan Freeman', born: 1937 },
    { name: 'Cate Blanchett', born: 1969 }
  ];
  
  function calculateActorsAges(actors) {
    // insert code
    const fecha = new Date();
    const year = fecha.getFullYear();
    let actorAges = [];
    for (actor of actors) {
      actorAge.push (actor.name, year - actor.born);

  }
    return actorAges;
    }
    console.log(calculateActorsAges(actors));
    // ['Leonardo DiCaprio: 49', 'Tom Hanks: 67', 'Meryl Streep: 74', 'Brad Pitt: 60', 'Johnny Depp: 60', 'Scarlett Johansson: 39', 'Jennifer Lawrence: 33', 'Denzel Washington: 69', 'Morgan Freeman: 86', 'Cate Blanchett: 54']
    



  