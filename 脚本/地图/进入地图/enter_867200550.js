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
      cm.setNumberForQuestInfo(64005, "duringEvent", 0);
      var O = cm.getNumberFromQuestInfo(64006, 'Ec');
      if (O > 0) {
        var b = cm.getMap().getPortal(O - 1).getPosition();
        cm.onTeleport(1, cm.getPlayer().getId(), b.getX(), b.getY());
      }
      var E = Math.min(0, Math.floor((O - 1) % 8 / 2));
      for (var V = 0; V < 4; V++) {
        cm.monadForceMove(V, V == E ? 1 : 0, 0);
        cm.onSetBackEffect(V, V == E ? 1 : 0, 1, 0, 0);
      }
      cm.useItem(2210207, false);
      cm.setPartnerAction(1, 9400643, 80011648, 120, 200, 0);
      cm.setPartnerAction(1, 9400647, 80011650, 190, 200, 0);
      cm.setPartnerAction(1, 9400648, 80011651, 260, 200, 0);
      cm.setPartnerAction(1, 9400644, 80011652, 210, 200, 0);
      cm.setPartnerAction(1, 9400649, 80011654, 220, 200, 0);
      cm.setPartnerAction(1, 9400650, 80011655, 250, 200, 0);
      cm.setPartnerAction(1, 9400651, 80011656, 280, 200, 0);
      cm.setPartnerAction(1, 9400652, 80011657, 310, 200, 0);
      cm.setPartnerAction(1, 9400653, 80011654, 260, 200, 0);
      cm.setPartnerAction(1, 9400654, 80011654, 330, 200, 0);
      cm.setPartnerAction(1, 9400655, 80011655, 400, 200, 0);
      cm.setPartnerAction(1, 9400656, 80011656, 470, 200, 0);
      cm.setPartnerAction(1, 9400657, 80011656, 540, 200, 0);
      cm.setPartnerAction(1, 9400658, 80011657, 610, 200, 0);
      cm.莫奈德_特效(null, [7, (O - 1) * 5]);
      cm.莫奈德_特效(null, [8, 0, 0, 0, 0]);
      cm.莫奈德_特效(null, [0, 2]);
      cm.dispose();
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;