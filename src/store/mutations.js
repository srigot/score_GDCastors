/* eslint no-param-reassign: ["error",
{ "props": true, "ignorePropertyModificationsFor": ["state"] }] */

import * as types from './mutation_types'

export default {
  [types.INIT_LISTE] (state, { liste, nombreParties }) {
    state.listeJoueurs = liste
    state.partieEnCours = 0
    state.nombreParties = nombreParties
  },
  [types.UPDATE_SCORE] (state, listeScore) {
    if (state.listeJoueurs.length === listeScore.length) {
      listeScore.forEach((element, index) => {
        const numberScore = parseInt(element, 10)
        state.listeJoueurs[index].listeScore.push(numberScore)
      })
      state.partieEnCours++
    }
  },
  [types.UNDO_SCORE] (state) {
    state.listeJoueurs.forEach((element) => {
      element.listeScore.shift()
    })
    state.partieEnCours--
  }
}
