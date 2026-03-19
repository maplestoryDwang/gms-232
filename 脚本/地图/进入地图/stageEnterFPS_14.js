var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_AskAnswerTime(30);
      cm.inGameDirectionEvent_SetHideEffect(1);
    } else {
      if (status === V++) {
        cm.onCreateGun();
        cm.onSetGun('shotgun', 'shotgun', 1, 200, -8, -8, 8, 8);
        cm.onSetAmmo(40);
        cm.setNumberForQuestInfo(42013, 'ammo', 40);
        var O = em.getMapFactoryMap(cm.getMapId());
        var b = [9309116, 9309117];
        b.forEach(function (w) {
          for (var L = 0; L < 10; L++) {
            var S = em.getMonster(w);
            O.spawnMonsterOnGroundBelow(S, new java.awt.Point(cm.rand(-300, 300), cm.rand(0, 300)));
          }
        });
        cm.dispose();
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;