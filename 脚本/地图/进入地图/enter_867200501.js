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
      cm.setQuestCustomData(867200400, 867200408);
      cm.monadForceMove('0', 1, 3000);
      cm.onSetBackEffect('0', 1, 1, 0, 0);
      cm.monadForceMove('1', 1, 3000);
      cm.onSetBackEffect('1', 1, 0, 0, 0);
      cm.monadForceMove('2', 1, 3000);
      cm.onSetBackEffect('2', 1, 0, 0, 0);
      cm.monadForceMove('3', 1, 3000);
      cm.onSetBackEffect('3', 1, 0, 0, 0);
      cm.useItem(2210211, false);
      cm.updateInfoQuest(64006, "WC=0;speed=40;man=200;prog=0;Ec=0;weather=0;max=1;food=450");
      cm.setNumberForQuestInfo(64006, 'Ec', 1);
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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.sendNewEffects(12, [0, 2520, -850, 0, 0]);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_复合图片动画(["Map/Effect2.img/Blizzard/skeleton", "normal2", '', ''], [1, 1, 0, 20000, 0, 0, 0, 0]);
        cm.inGameDirectionEvent_AskAnswerTime(3000);
      } else {
        if (status === V++) {
          cm.fieldEffect_ProcessOnOffLayer("title", "Map/EffectPL.img/MONAD1/title", 0, 2000, 0, 350, -80, 1, 1);
          cm.inGameDirectionEvent_AskAnswerTime(15000);
        } else {
          if (status === V++) {
            cm.fieldEffect_ProcessOnOffLayer("title", '', 2, 3000, 0, 0, 0, 0, 0);
            cm.sendNewEffects(12, [3000, 2520, 200, 0, 0]);
          } else if (status === V++) {
            cm.fieldEffect_复合图片动画(["Map/Effect2.img/Blizzard/skeleton", "normal", '', ''], [1, 1, 0, 0, 0, 0, 0, 0]);
            cm.setInGameDirectionMode(false, true, false);
            cm.莫奈德_特效("让哈瓦尔坐上大篷车更方便吧？", [1, 0, 3000], 5);
            cm.莫奈德_特效('还是我抱着他吧。', [1, 1, 3000], 8);
            cm.莫奈德_特效("照顾好负伤者！", [1, 1, 3000], 11);
            cm.莫奈德_特效("帮帮忙，让怕冷的人可以进到里面来。", [1, 0, 3000], 14);
            cm.莫奈德_特效("大家分担着拎行李吧。", [1, 0, 3000], 17);
            cm.莫奈德_特效('没人落后吧？', [1, 1, 3000], 20);
            cm.setNumberForQuestInfo(64006, "speed", 20);
            cm.forceStartQuest(64033, '');
            cm.dispose();
          }
        }
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;