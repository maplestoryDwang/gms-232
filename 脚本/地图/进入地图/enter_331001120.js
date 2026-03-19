var status = -1;
function action(f, E, e) {
  status++;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.spawnMobLimit(2700302, 1, 705, 63, 1);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.sendNormalTalk_Bottom("#face9#首先在正式测量战斗力之前，为了进行基本的设置，你先把眼前的训练机器人A打倒。", 37, 1531001, false, true);
      cm.curNodeEventEnd(true);
    } else if (status === V++) {
      cm.getTopMsgFont("使用基本攻击和技能就可以打败敌人了. ", 3, 20, 20, 0, 0);
      cm.setStandAloneMode(false);
      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(false, true, false);
      cm.updateInfoQuest(22700, "V01=1;V02=1;kinetuto=0;E1=1");
      cm.effect_OnUserEff("UI/tutorial.img/kinesis/0");
      cm.effect_Voice("Voice3.img/Kinesis/guide_06", 100);
      cm.dispose();
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;