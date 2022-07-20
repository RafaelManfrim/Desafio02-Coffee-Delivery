export const cepMask = (value: string) => {
  return value
    .replace(/\D+/g, '') // Permite somente números
    .replace(/(\d{2})(\d)/, '$1.$2') // Coloca ponto entre o segundo e o terceiro dígitos
    .replace(/(\d{3})(\d)/, '$1-$2') // Coloca traço entre o quinto e o sexto dígitos
    .replace(/(-\d{3})\d+?$/, '$1') // Permite digitar apenas 3 dígitos depois do traço
}
