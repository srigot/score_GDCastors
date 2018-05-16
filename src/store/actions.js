import * as types from './mutation_types'

export default {
  creerNouvellePartie ({ commit }, listeJoueurs, nombreParties) {
    return new Promise((resolve) => {
      const liste = []
      listeJoueurs.forEach((element, index) => {
        liste.push({ id: index + 1, nom: element, listeScore: [] })
      })
      commit(types.INIT_LISTE, { liste, nombreParties })
      resolve()
    })
  },
  ajouterScorePartie ({ commit }, listeScore) {
    if (!listeScore.some(element => isNaN(parseInt(element, 10)))) {
      commit(types.UPDATE_SCORE, listeScore)
    }
  },
  retirerScorePartie ({ commit }) {
    commit(types.UNDO_SCORE)
  }
}
