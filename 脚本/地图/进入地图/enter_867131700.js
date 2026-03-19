var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  var V = "action" + (cm.getMapId() - 867131000);
  eval(V)(f, E, e);
}
function action601(f, E, e) {
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
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.setStandAloneMode(true);
      cm.sendNormalTalk("\r\n好了，各位！已经到了~", 5, 9100025, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("\r\n嗯？这么多的绿水灵，说什么游泳呀？", 5, 9100026, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("\r\n…这样太严重了吧。", 5, 9100029, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("\r\n……绿水灵……真讨厌……", 5, 9100030, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("\r\n不能这样下去了。#b#h0##k。请你为了大家，消灭金海滩的怪物吧。", 5, 9100025, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("\r\n嗯？你说我？……知道了。\r\n#r（请消灭地区中的全部怪物。#k", 3, 0, true, true);
              } else if (status === V++) {
                cm.addNumberForQuestInfo(64665, 'M1', 1);
                cm.warp(867131700, 0, false);
                cm.setStandAloneMode(false);
                cm.eventSKill(0);
                cm.setInGameDirectionMode(false, true, false);
                cm.dispose();
              }
            }
          }
        }
      }
    }
  }
}
function action700(f, E, e) {
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
    cm.spawnMobLimit(9601247, 1, -899, -85, 100);
    cm.spawnMobLimit(9601247, 1, -752, -85, 100);
    cm.spawnMobLimit(9601247, 1, -593, -85, 100);
    cm.spawnMobLimit(9601247, 1, -339, -145, 100);
    cm.spawnMobLimit(9601247, 1, -90, -145, 100);
    cm.spawnMobLimit(9601247, 1, -197, 116, 100);
    cm.spawnMobLimit(9601247, 1, -442, 116, 100);
    cm.spawnMobLimit(9601247, 1, -7, 116, 100);
    cm.spawnMobLimit(9601247, 1, -213, -145, 100);
    cm.spawnMobLimit(9601247, 1, 151, 116, 100);
    cm.spawnMobLimit(9601247, 1, 153, -25, 100);
    cm.spawnMobLimit(9601247, 1, 263, -25, 100);
    cm.spawnMobLimit(9601247, 1, 385, -25, 100);
    cm.spawnMobLimit(9601247, 1, 622, -85, 100);
    cm.spawnMobLimit(9601247, 1, -705, 116, 100);
    cm.spawnMobLimit(9601247, 1, -508, 116, 100);
    cm.fieldEffect_ScreenMsg("monsterPark/stageEff/stage");
    cm.fieldEffect_ScreenMsg("monsterPark/stageEff/number/1");
    cm.spawnMobLimit(9601247, 1, 662, 116, 100);
    cm.spawnMobLimit(9601247, 1, 766, -85, 100);
    cm.spawnMobLimit(9601247, 1, 909, 116, 100);
    cm.spawnMobLimit(9601247, 1, 907, 116, 100);
    cm.spawnMobLimit(9601247, 1, 1159, 116, 100);
    cm.spawnMobLimit(9601247, 1, -657, -85, 100);
    cm.dispose();
  }
}
function action720(f, E, e) {
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
    cm.spawnMobLimit(9601248, 1, -919, 116, 100);
    cm.spawnMobLimit(9601248, 1, -1034, 116, 100);
    cm.spawnMobLimit(9601248, 1, -733, 116, 100);
    cm.spawnMobLimit(9601248, 1, -894, -85, 100);
    cm.spawnMobLimit(9601248, 1, -729, -85, 100);
    cm.spawnMobLimit(9601248, 1, -535, 116, 100);
    cm.spawnMobLimit(9601248, 1, -590, -85, 100);
    cm.spawnMobLimit(9601248, 1, -342, -25, 100);
    cm.spawnMobLimit(9601248, 1, -133, -25, 100);
    cm.spawnMobLimit(9601248, 1, -214, 116, 100);
    cm.spawnMobLimit(9601248, 1, -68, 116, 100);
    cm.spawnMobLimit(9601248, 1, 163, -25, 100);
    cm.spawnMobLimit(9601248, 1, 290, -25, 100);
    cm.spawnMobLimit(9601248, 1, 340, 116, 100);
    cm.spawnMobLimit(9601248, 1, 460, -25, 100);
    cm.spawnMobLimit(9601248, 1, 537, 116, 100);
    cm.fieldEffect_ScreenMsg("monsterPark/stageEff/stage");
    cm.fieldEffect_ScreenMsg("monsterPark/stageEff/number/2");
    cm.spawnMobLimit(9601248, 1, 614, -85, 100);
    cm.spawnMobLimit(9601248, 1, 919, -85, 100);
    cm.spawnMobLimit(9601248, 1, 530, 116, 100);
    cm.spawnMobLimit(9601248, 1, 1046, 116, 100);
    cm.dispose();
  }
}
function action740(f, E, e) {
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
    cm.spawnMobLimit(9601249, 1, -1223, -265, 100);
    cm.spawnMobLimit(9601249, 1, -1075, -265, 100);
    cm.spawnMobLimit(9601249, 1, -970, -265, 100);
    cm.spawnMobLimit(9601249, 1, -849, -85, 100);
    cm.spawnMobLimit(9601249, 1, -712, -85, 100);
    cm.spawnMobLimit(9601249, 1, -557, -85, 100);
    cm.spawnMobLimit(9601249, 1, -793, 116, 100);
    cm.spawnMobLimit(9601249, 1, -610, 116, 100);
    cm.spawnMobLimit(9601249, 1, -417, 116, 100);
    cm.spawnMobLimit(9601249, 1, -433, -265, 100);
    cm.spawnMobLimit(9601249, 1, -276, -265, 100);
    cm.spawnMobLimit(9601249, 1, -111, -265, 100);
    cm.spawnMobLimit(9601249, 1, -96, -85, 100);
    cm.spawnMobLimit(9601249, 1, 91, -85, 100);
    cm.spawnMobLimit(9601249, 1, 219, -85, 100);
    cm.spawnMobLimit(9601249, 1, -170, 116, 100);
    cm.spawnMobLimit(9601249, 1, 46, 116, 100);
    cm.spawnMobLimit(9601249, 1, 404, 116, 100);
    cm.spawnMobLimit(9601249, 1, 480, -205, 100);
    cm.spawnMobLimit(9601249, 1, 613, 116, 100);
    cm.fieldEffect_ScreenMsg("monsterPark/stageEff/stage");
    cm.fieldEffect_ScreenMsg("monsterPark/stageEff/number/3");
    cm.spawnMobLimit(9601249, 1, 659, -205, 100);
    cm.spawnMobLimit(9601249, 1, 673, -205, 100);
    cm.spawnMobLimit(9601249, 1, 961, 116, 100);
    cm.spawnMobLimit(9601249, 1, 1088, -85, 100);
    cm.spawnMobLimit(9601249, 1, 1092, 116, 100);
    cm.spawnMobLimit(9601249, 1, 659, -205, 100);
    cm.spawnMobLimit(9601249, 1, 703, -205, 100);
    cm.spawnMobLimit(9601249, 1, 961, 116, 100);
    cm.spawnMobLimit(9601249, 1, 1076, -85, 100);
    cm.spawnMobLimit(9601249, 1, 1063, 116, 100);
    cm.dispose();
  }
}
function action760(f, E, e) {
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
    cm.spawnMobLimit(9601250, 1, -1136, -145, 100);
    cm.spawnMobLimit(9601250, 1, -923, -145, 100);
    cm.spawnMobLimit(9601250, 1, -848, 116, 100);
    cm.spawnMobLimit(9601250, 1, -733, -325, 100);
    cm.spawnMobLimit(9601250, 1, -578, 116, 100);
    cm.spawnMobLimit(9601250, 1, -390, 116, 100);
    cm.spawnMobLimit(9601250, 1, -358, -145, 100);
    cm.spawnMobLimit(9601250, 1, -533, -325, 100);
    cm.spawnMobLimit(9601250, 1, -195, -145, 100);
    cm.spawnMobLimit(9601250, 1, -48, -145, 100);
    cm.spawnMobLimit(9601250, 1, -161, 116, 100);
    cm.spawnMobLimit(9601250, 1, 117, 116, 100);
    cm.spawnMobLimit(9601250, 1, 86, -385, 100);
    cm.spawnMobLimit(9601250, 1, 257, -385, 100);
    cm.spawnMobLimit(9601250, 1, 401, -385, 100);
    cm.spawnMobLimit(9601250, 1, 461, -85, 100);
    cm.spawnMobLimit(9601250, 1, 491, 116, 100);
    cm.spawnMobLimit(9601250, 1, 657, -265, 100);
    cm.fieldEffect_ScreenMsg("monsterPark/stageEff/stage");
    cm.fieldEffect_ScreenMsg("monsterPark/stageEff/number/4");
    cm.spawnMobLimit(9601250, 1, 804, -85, 100);
    cm.spawnMobLimit(9601250, 1, 876, 116, 100);
    cm.spawnMobLimit(9601250, 1, 980, -205, 100);
    cm.spawnMobLimit(9601250, 1, 1146, 116, 100);
    cm.spawnMobLimit(9601250, 1, -1159, -145, 100);
    cm.spawnMobLimit(9601250, 1, -901, -145, 100);
    cm.spawnMobLimit(9601250, 1, -754, -325, 100);
    cm.spawnMobLimit(9601250, 1, -521, -325, 100);
    cm.dispose();
  }
}
function action780(f, E, e) {
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
    cm.spawnMobLimit(9601251, 1, -896, -145, 100);
    cm.spawnMobLimit(9601251, 1, -725, 116, 100);
    cm.spawnMobLimit(9601251, 1, -760, -325, 100);
    cm.spawnMobLimit(9601251, 1, -607, -325, 100);
    cm.spawnMobLimit(9601251, 1, -494, -325, 100);
    cm.spawnMobLimit(9601251, 1, 157, -325, 100);
    cm.spawnMobLimit(9601251, 1, 506, -85, 100);
    cm.spawnMobLimit(9601251, 1, -433, 116, 100);
    cm.spawnMobLimit(9601251, 1, 495, 116, 100);
    cm.spawnMobLimit(9601251, 1, -305, -145, 100);
    cm.spawnMobLimit(9601251, 1, -193, 116, 100);
    cm.spawnMobLimit(9601251, 1, 180, 116, 100);
    cm.spawnMobLimit(9601251, 1, -36, -145, 100);
    cm.spawnMobLimit(9601251, 1, -1004, -145, 100);
    cm.spawnMobLimit(9601251, 1, 356, -325, 100);
    cm.spawnMobLimit(9601251, 1, -5, 116, 100);
    cm.fieldEffect_ScreenMsg("monsterPark/stageEff/final");
    cm.spawnMobLimit(9601251, 1, 761, -85, 100);
    cm.spawnMobLimit(9601251, 1, 824, 116, 100);
    cm.spawnMobLimit(9601251, 1, 1135, 116, 100);
    cm.spawnMobLimit(9601251, 1, 1153, -145, 100);
    cm.spawnMobLimit(9601251, 1, -823, -145, 100);
    cm.spawnMobLimit(9601251, 1, -419, -325, 100);
    cm.spawnMobLimit(9601251, 1, -349, -325, 100);
    cm.spawnMobLimit(9601251, 1, -502, -325, 100);
    cm.spawnMobLimit(9601251, 1, -796, -145, 100);
    cm.dispose();
  }
}