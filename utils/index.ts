export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "fbf572f880msh432987ca91b10b0p192fb7jsnd7b924b02613",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch("https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla", {
    headers: headers,
  });

  const result = await response.json();

  return result;
}
