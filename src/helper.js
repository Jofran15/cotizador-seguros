export function diferenciaYear(year) {
  return new Date().getFullYear() - year;
}
export function diferenciaPrecio(costoBase, diferenciaAño) {
  let resultado;

  switch (diferenciaAño) {
    case "":
      console.log("Elija un año");
      break;

    default:
      resultado = costoBase - diferenciaAño * 0.03 * costoBase;

      break;
  }
  return resultado;
}
export function diferenciaOrigen(marca) {
  let incremento;

  switch (marca) {
    case "americano":
      incremento = 1.15;
      break;
    case "asiatico":
      incremento = 1.05;

      break;

    case "europeo":
      incremento = 1.3;
      break;
    default:
      console.log("Elija un modelo");
      break;
  }
  return incremento;
}
export function obtenerPlan(plan){
    return (plan==='basico')?1.20:1.50
}