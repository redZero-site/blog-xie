const toTop = (doms, funs) => {
  let hallRolling = document.querySelector('.' + doms)
  if (!hallRolling) {
    hallRolling = document.querySelector('#' + doms)
  }
  if (!hallRolling) {
      return
  }
  let setIn = setInterval(() => {
    if (hallRolling.scrollTop > 0) {
      if (hallRolling.scrollTop > 640) {
        hallRolling.scrollTop = hallRolling.scrollTop - 32
      } else if (hallRolling.scrollTop > 320) {
        hallRolling.scrollTop = hallRolling.scrollTop - 16
      } else if (hallRolling.scrollTop > 160) {
        hallRolling.scrollTop = hallRolling.scrollTop - 8
      } else if (hallRolling.scrollTop > 80) {
        hallRolling.scrollTop = hallRolling.scrollTop - 4
      } else if (hallRolling.scrollTop > 40) {
        hallRolling.scrollTop = hallRolling.scrollTop - 2
      } else {
        hallRolling.scrollTop = hallRolling.scrollTop - 1
      }
    } else {
      clearInterval(setIn)
      if (funs && typeof funs === 'function') {
        funs()
      }
    }
  }, 1)
}
export default { toTop }
