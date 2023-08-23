const convertCamelToSnake = (input) => {
    const snakeCase = input.replace(/[A-Z]/g, (match) => `_${match.toLowerCase()}`);
    return snakeCase.substring(1); // Elimina el primer guión bajo
};

const countWordsAndConvert = (camelCaseString) => {
    const words = camelCaseString.split(/(?=[A-Z])/).length;
    const snakeCaseString = convertCamelToSnake(camelCaseString);

    return {
        palabras: words,
        snakeCase: snakeCaseString,
    };
};

const inputString = "MateriaProgramaciónMóvil";
const result = countWordsAndConvert(inputString);
console.log(result);


const generateCombinations = (array) => {
    const result = [[]]; // Incluye el conjunto vacío como punto de partida
  
    for (let i = 0; i < array.length; i++) {
      const currentNumber = array[i];
      const currentLength = result.length;
  
      for (let j = 0; j < currentLength; j++) {
        const combination = result[j];
        result.push([...combination, currentNumber]);
      }
    }
  
    return result;
  };
  
  const inputArray = ['a', 'b', 'c', 'd'];
  const combinations = generateCombinations(inputArray);
  console.log(combinations);


// Función para obtener los datos de la API utilizando Fetch
const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  };
  
  // Filtrar personajes con ID par
  const filterEvenIds = (characters) => {
    return characters.filter(character => character.id % 2 === 0);
  };
  
  // Asignar "Programación Móvil" a personajes sin type
  const assignProgrammingMobile = (characters) => {
    return characters.map(character => {
      if (!character.type) {
        character.type = "Programación Móvil";
      }
      return character;
    });
  };
  
  // Crear arreglo de objetos con información específica
  const createResultArray = (characters) => {
    return characters.map(character => ({
      personaje: character.name,
      episodios: character.episode.length,
      masDeCincoEpisodios: character.episode.length > 5 ? "Si" : "No"
    }));
  };
  
  // Función principal que maneja todo el proceso
  const main = async () => {
    const url = 'https://rickandmortyapi.com/api/character';
    const characters = await fetchData(url);
  
    console.log("Lista de personajes:");
    console.log(characters);
  
    const evenIdCharacters = filterEvenIds(characters);
    console.log("Lista de personajes con ID par:");
    console.log(evenIdCharacters);
  
    const charactersWithProgrammingMobile = assignProgrammingMobile(characters);
    console.log("Lista de personajes con type vacío asignado:");
    console.log(charactersWithProgrammingMobile);
  
    const resultArray = createResultArray(characters);
    console.log("Nuevo arreglo de objetos:");
    console.log(resultArray);
  };
  
  main();
  