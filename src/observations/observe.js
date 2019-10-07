export function observe(receive) {
  const randPos = () => Math.floor(Math.random() * 4)
  setInterval(() => receive([randPos(), randPos()]), 1000)
}
