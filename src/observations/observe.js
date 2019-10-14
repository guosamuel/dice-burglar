// export function observe(receive) {
//   const randPos = () => Math.floor(Math.random() * 4)
//   setInterval(() => receive([randPos(), randPos()]), 2000)
// }

let diePosition = [1, 0]
let observer = null

function emitChange() {
  observer(diePosition)
}

export function observe(o) {
  if (observer) {
    throw new Error('Multiple observers not implemented.')
  }

  observer = o
  emitChange()
}

export function canMoveDie(toX, toY) {
  //COPIED FROM THE REACT DND TO TEST IT OUT
  const [x, y] = diePosition
  const dx = toX - x
  const dy = toY - y

  return (
    (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
    (Math.abs(dx) === 1 && Math.abs(dy) === 2)
  )
}

export function moveDie(toX, toY) {
  if (canMoveDie(toX, toY)) {
    diePosition = [toX, toY]
  }
  emitChange()
}
