// export function observe(receive) {
//   const randPos = () => Math.floor(Math.random() * 4)
//   setInterval(() => receive([randPos(), randPos()]), 2000)
// }

let diePosition = [1, 1]
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

export function moveDie(toX, toY) {
  diePosition = [toX, toY]
  emitChange()
}
