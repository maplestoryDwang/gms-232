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
      cm.spawnMobLimit(8240179, 1, -531, -243, 100);
      cm.spawnMobLimit(8240179, 1, -1397, -353, 100);
      cm.spawnMobLimit(8240179, 1, -1235, -377, 100);
      cm.spawnMobLimit(8240179, 1, -1066, -375, 100);
      cm.spawnMobLimit(8240179, 1, -909, -353, 100);
      cm.spawnMobLimit(8240181, 1, 187, -420, 100);
      cm.spawnMobLimit(8240181, 1, 68, -382, 100);
      cm.spawnMobLimit(8240181, 1, -46, -365, 100);
      cm.spawnMobLimit(8240181, 1, -157, -363, 100);
      cm.spawnMobLimit(8240181, 1, -1214, 92, 100);
      cm.spawnMobLimit(8240181, 1, -738, 176, 100);
      cm.spawnMobLimit(8240181, 1, -479, 133, 100);
      cm.spawnMobLimit(8240180, 1, -1364, 44, 100);
      cm.spawnMobLimit(8240180, 1, -1061, 130, 100);
      cm.spawnMobLimit(8240180, 1, -382, 132, 100);
      cm.spawnMobLimit(8240180, 1, -899, 147, 100);
      cm.spawnMobLimit(8240180, 1, -588, 165, 100);
      cm.spawnMobLimit(8240180, 1, -231, 97, 100);
      cm.onSetMapTagedObjectVisible(1, "pt00", 512);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.onSetMapTagedObjectVisible(1, "pt00", 64);
      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act4/ptout", 100);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_SetHideEffect(0);
        cm.setInGameDirectionMode(false, true, false);
        cm.showMapleHero();
        cm.getTopMsgFont("只有将区域内的所有怪物全都消灭掉才能够前往下一地区。", 3, 20, 20, 0);
        cm.spawnMobLimit(8240184, 1, -693, -391, 100);
        cm.spawnMobLimit(8240184, 1, -169, -362, 100);
        cm.spawnMobLimit(8240184, 1, -2, -590, 100);
        cm.spawnMobLimit(8240180, 1, -1620, -932, 100);
        cm.spawnMobLimit(8240180, 1, -860, -793, 100);
        cm.spawnMobLimit(8240180, 1, -916, -794, 100);
        cm.spawnMobLimit(8240180, 1, -1632, -930, 100);
        cm.spawnMobLimit(8240184, 1, -829, -792, 100);
        cm.spawnMobLimit(8240184, 1, -1067, -970, 100);
        var O = cm.getNumberFromQuestInfo(34021, "hero1");
        cm.addPopupSay(1540807, 1000, "主人，村子里的人都还好吧？", '', 0);
        cm.addPopupSay(1540805, 1000, "#face3#还好。有联盟守护呢！", '', 0);
        cm.addPopupSay(1540801 + O, 1000, "#face3#是啊，有赫丽娜在，所以可以放心。问题就是这棵树！", '', 0);
        cm.addPopupSay(1540805, 1000, "#face3#赶快爬吧，向着顶峰！", '', 0);
        cm.spawnMobLimit(8240184, 1, -169, -362, 100);
        cm.spawnMobLimit(8240179, 1, -206, -1387, 100);
        cm.spawnMobLimit(8240179, 1, -265, -1368, 100);
        cm.spawnMobLimit(8240179, 1, -382, -1331, 100);
        cm.spawnMobLimit(8240179, 1, -150, -1407, 100);
        cm.spawnMobLimit(8240179, 1, -451, -1330, 100);
        cm.spawnMobLimit(8240179, 1, -113, -1420, 100);
        cm.spawnMobLimit(8240179, 1, -625, -1323, 100);
        cm.spawnMobLimit(8240179, 1, -437, -1330, 100);
        cm.spawnMobLimit(8240179, 1, 287, -1463, 100);
        cm.spawnMobLimit(8240179, 1, -219, -1383, 100);
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