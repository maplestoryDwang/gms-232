var maps = Array(104010200, 102020500, 103030400, 101040300, 102040600, 120030500, 200080000, 211040000, 200010302, 220011000, 222010310, 220040200, 221040400, 260010500, 261010003, 261020500, 250010504, 251010500, 240010200, 240010600, 240010500, 240020200, 240010901, 211040500, 240040401, 230020100);
function action(f, W, U) {
  for (var V = 0; V < maps.length; V++) {
    if (cm.getMapId() == maps[V]) {
      var w = V == 25 ? 806240100 : 806000000 + V * 10000;
      if (V == 14 && cm.isQuestActive(20696)) {
        w = 806140100;
      } else if (V == 14 && cm.isQuestActive(20697)) {
        w = 806140200;
      }
      var N = cm.getQuestRecord(122600 + V);
      if (N.getCustomData() == null) {
        N.setCustomData('0');
      }
      var u = parseInt(N.getCustomData());
      if (u + 600000 > cm.getCurrentTime()) {
        cm.sendOk("You can enter in " + ((u + 1800000 - cm.getCurrentTime()) / 60000 | 0) + " min.");
      } else if (cm.getMap(w).getCharactersThreadsafe().size() == 0 && (cm.getMap(w + 1) == null || cm.getMap(w + 1).getCharactersThreadsafe().size() == 0)) {
        cm.getMap(w).resetFully();
        cm.warp(w, 0);
        N.setCustomData(cm.getCurrentTime() + '');
      } else {
        cm.sendOk("Please try again later, there exists some characters fighting the boss.");
      }
      cm.dispose();
      return;
    }
  }
  cm.dispose();
}
var status = -1;
function start() {
  status = -1;
  action(1, 0, 0);
}
;