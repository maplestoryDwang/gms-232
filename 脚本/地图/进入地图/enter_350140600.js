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
      cm.spawnMobLimit(8240180, 1, 586, -1097, 100);
      cm.spawnMobLimit(8240180, 1, -240, 187, 100);
      cm.spawnMobLimit(8240180, 1, 256, -365, 100);
      cm.spawnMobLimit(8240180, 1, -544, -401, 100);
      cm.spawnMobLimit(8240180, 1, 419, -1126, 100);
      cm.spawnMobLimit(8240184, 1, 98, 189, 100);
      cm.spawnMobLimit(8240184, 1, -258, -593, 100);
      cm.spawnMobLimit(8240182, 1, 136, -705, 100);
      cm.spawnMobLimit(8240180, 1, 497, -722, 100);
      cm.spawnMobLimit(8240180, 1, 204, -717, 100);
      cm.spawnMobLimit(8240180, 1, 656, -697, 100);
      cm.spawnMobLimit(8240180, 1, 341, -730, 100);
      cm.spawnMobLimit(8240180, 1, 53, -679, 100);
      cm.spawnMobLimit(8240180, 1, -171, -604, 100);
      cm.spawnMobLimit(8240180, 1, -944, -313, 100);
      cm.spawnMobLimit(8240180, 1, -761, -363, 100);
      cm.spawnMobLimit(8240180, 1, -286, -408, 100);
      cm.spawnMobLimit(8240180, 1, 109, -397, 100);
      cm.spawnMobLimit(8240180, 1, 440, 131, 100);
      cm.spawnMobLimit(8240180, 1, 313, 167, 100);
      cm.spawnMobLimit(8240180, 1, -61, 218, 100);
      cm.spawnMobLimit(8240180, 1, -453, 164, 100);
      cm.spawnMobLimit(8240180, 1, -659, 96, 100);
      cm.onSetMapTagedObjectVisible(1, "pt00", 512);
      cm.onSetMapTagedObjectVisible(1, "pt01", 512);
      cm.onSetMapTagedObjectVisible(1, "pt02", 512);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.onSetMapTagedObjectVisible(1, "pt02", 64);
      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act4/ptout", 100);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else if (status === V++) {
      cm.inGameDirectionEvent_SetHideEffect(0);
      cm.setInGameDirectionMode(false, true, false);
      cm.showMapleHero();
      cm.getTopMsgFont("只有将区域内的所有怪物全都消灭掉才能够前往下一地区。", 3, 20, 20, 0);
      cm.spawnMobLimit(8240180, 1, 499, -1115, 100);
      cm.spawnMobLimit(8240180, 1, 857, -1054, 100);
      cm.spawnMobLimit(8240180, 1, 729, -680, 100);
      cm.spawnMobLimit(8240180, 1, -175, -602, 100);
      cm.spawnMobLimit(8240180, 1, 186, -715, 100);
      cm.spawnMobLimit(8240180, 1, 702, -686, 100);
      cm.spawnMobLimit(8240180, 1, 173, -714, 100);
      cm.spawnMobLimit(8240180, 1, 377, -733, 100);
      cm.spawnMobLimit(8240180, 1, -298, -1193, 100);
      cm.spawnMobLimit(8240180, 1, -76, -1155, 100);
      cm.spawnMobLimit(8240180, 1, 485, -1117, 100);
      cm.spawnMobLimit(8240180, 1, -758, -1248, 100);
      cm.spawnMobLimit(8240180, 1, -238, -1179, 100);
      cm.spawnMobLimit(8240180, 1, -855, -1253, 100);
      cm.spawnMobLimit(8240180, 1, -491, -1220, 100);
      cm.spawnMobLimit(8240180, 1, 655, -1080, 100);
      cm.spawnMobLimit(8240180, 1, -251, -1182, 100);
      cm.spawnMobLimit(8240180, 1, -908, -1265, 100);
      cm.spawnMobLimit(8240180, 1, -1081, -1298, 100);
      cm.spawnMobLimit(8240180, 1, -908, -1265, 100);
      cm.spawnMobLimit(8240180, 1, 606, -1091, 100);
      cm.spawnMobLimit(8240180, 1, -429, -1213, 100);
      cm.spawnMobLimit(8240180, 1, -821, -1251, 100);
      cm.spawnMobLimit(8240180, 1, -1081, -1298, 100);
      cm.spawnMobLimit(8240180, 1, -1058, -1292, 100);
      cm.spawnMobLimit(8240180, 1, 542, -1107, 100);
      cm.spawnMobLimit(8240180, 1, -610, -1234, 100);
      cm.spawnMobLimit(8240180, 1, -1081, -1298, 100);
      cm.spawnMobLimit(8240180, 1, -701, -1245, 100);
      cm.spawnMobLimit(8240180, 1, -1081, -1298, 100);
      cm.spawnMobLimit(8240180, 1, 777, -1064, 100);
      cm.spawnMobLimit(8240180, 1, -278, -1189, 100);
      cm.spawnMobLimit(8240180, 1, -1081, -1298, 100);
      cm.spawnMobLimit(8240180, 1, -783, -1249, 100);
      cm.spawnMobLimit(8240180, 1, -1081, -1298, 100);
      cm.spawnMobLimit(8240180, 1, 834, -1057, 100);
      cm.spawnMobLimit(8240180, 1, -464, -1218, 100);
      cm.spawnMobLimit(8240180, 1, -1081, -1298, 100);
      cm.dispose();
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;