// Función para formatear números como monedas
export function formatCurrency(number, currency = "ARS", locale = "es-AR") {
  return number.toLocaleString(locale, {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}
