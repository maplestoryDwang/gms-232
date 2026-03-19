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
  } else if (status === V++) {
    cm.莫奈德_特效(null, [7, 100]);
    cm.monadForceMove('0', 1, 3000);
    cm.onSetBackEffect('0', 1, 0, 0, 0);
    cm.monadForceMove('1', 1, 3000);
    cm.onSetBackEffect('1', 1, 1, 0, 0);
    cm.monadForceMove('2', 1, 3000);
    cm.onSetBackEffect('2', 1, 0, 0, 0);
    cm.monadForceMove('3', 1, 3000);
    cm.onSetBackEffect('3', 1, 0, 0, 0);
    cm.useItem(2210211, false);
    cm.setNumberForQuestInfo(64006, "speed", 40);
    cm.setPartner(0, 9400646, 0, 0);
    cm.setPartner(0, 9400647, 0, 0);
    cm.setPartner(0, 9400648, 0, 0);
    cm.setPartner(0, 9400649, 0, 0);
    cm.setPartner(0, 9400650, 0, 0);
    cm.setPartner(0, 9400651, 0, 0);
    cm.setPartner(0, 9400652, 0, 0);
    cm.setPartner(0, 9400653, 0, 0);
    cm.setPartner(0, 9400654, 0, 0);
    cm.setPartner(0, 9400655, 0, 0);
    cm.setPartner(0, 9400656, 0, 0);
    cm.setPartner(0, 9400657, 0, 0);
    cm.setPartner(0, 9400658, 0, 0);
    cm.setPartner(0, 9400659, 0, 0);
    cm.setPartner(0, 9400660, 0, 0);
    cm.setPartner(0, 9400661, 0, 0);
    cm.setPartner(0, 9400662, 0, 0);
    cm.setPartner(0, 9400663, 0, 0);
    cm.setPartner(0, 9400664, 0, 0);
    cm.setPartner(0, 9400665, 0, 0);
    cm.setPartner(0, 9400666, 0, 0);
    cm.setPartnerAction(1, 9400644, 80011692, 200, 400, 0);
    cm.setPartnerAction(1, 9400645, 80011691, 270, 400, 0);
    cm.setPartnerAction(1, 9400646, 80011689, 410, 400, 0);
    cm.setPartnerAction(1, 9400647, 80011693, 550, 400, 0);
    cm.setPartnerAction(1, 9400648, 80011694, 620, 400, 0);
    cm.setPartnerAction(1, 9400649, 80011695, 690, 400, 0);
    cm.setPartnerAction(1, 9400650, 80011696, 760, 400, 0);
    cm.setPartnerAction(1, 9400651, 80011693, 900, 400, 0);
    cm.setPartnerAction(1, 9400652, 80011693, 970, 400, 0);
    cm.setPartnerAction(1, 9400653, 80011694, 1040, 400, 0);
    cm.setPartnerAction(1, 9400654, 80011695, 1110, 400, 0);
    cm.setPartnerAction(1, 9400655, 80011695, 1180, 400, 0);
    cm.setPartnerAction(1, 9400656, 80011696, 1250, 400, 0);
    cm.莫奈德_特效(null, [0, 2]);
    cm.莫奈德_特效("看见木栅了！这回也没有冒烟！", [1, 0, 3000], 3);
    cm.莫奈德_特效("……咱们这下总算安全了吗？", [1, 1, 3000], 6);
    cm.莫奈德_特效("这暴风雪到底什么时候才停……", [1, 0, 3000], 9);
    cm.莫奈德_特效('好想早点回家……', [1, 1, 3000], 12);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;