var status = -1;
var selectionLog = [];
function action(f, E, e) {
  var V = cm.getNumberFromQuestInfo(64085, "dir");
  if (V >= 2) {
    action2(f, E, e);
  } else {
    action1(f, E, e);
  }
}
function action1(f, E, e) {
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
      cm.npc_ChangeController(9400626, "oid=203295", 605, 438, 50, 555, 655, 1, false, false);
      cm.npc_ChangeController(9400627, "oid=203296", 667, 371, 51, 617, 717, 1, false, false);
      cm.npc_ChangeController(9400628, "oid=203297", 1012, 349, 52, 962, 1062, 1, false, false);
      cm.npc_ChangeController(9400624, "oid=203298", 310, 397, 49, 260, 360, 1, false, false);
      cm.npc_ChangeController(9400625, 'oid=203299', 440, 408, 14, 390, 490, 1, false, false);
      cm.setPartner(1, 9400646, 80011692, 0);
      cm.sendNormalTalk_Bottom("#b一个人都没有啊。", 57, 0, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face0#对啊，虽然看起来是匆忙离开的，但是没有怪物袭击的痕迹呢。", 37, 9400580, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face3#她们应该是逃到了安全的地方吧？", 37, 9400580, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom('#b如果是那样……', 57, 0, true, true);
          } else if (status === V++) {
            cm.playerMessage(-1, '寻找老婆婆的痕迹。');
            cm.dispose();
          }
        }
      }
    }
  }
}
function action2(f, E, e) {
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
      cm.npc_ChangeController(9400626, "oid=203295", 605, 438, 50, 555, 655, 1, false, false);
      cm.npc_ChangeController(9400627, "oid=203296", 667, 371, 51, 617, 717, 1, false, false);
      cm.npc_ChangeController(9400628, "oid=203297", 1012, 349, 52, 962, 1062, 1, false, false);
      cm.npc_ChangeController(9400624, 'oid=203298', 310, 397, 49, 260, 360, 1, false, false);
      cm.npc_ChangeController(9400625, "oid=203299", 440, 408, 14, 390, 490, 1, false, false);
      cm.setPartner(1, 9400646, 80011692, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 385, 353);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak"], [2000, 0, 0, 1, 0, 1, 0, 0]);
        cm.inGameDirectionEvent_AskAnswerTime(3000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#他们这是要去哪儿呢？", 37, 9400580, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#b我们跟上去看看吧。希望不是去村子里……", 57, 0, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#b小心点，艾丽卡。", 57, 0, true, true);
            } else if (status === V++) {
              cm.setInGameDirectionMode(false, true, false);
              cm.forceCompleteQuest(64085);
              cm.playerMessage(5, "出门去看看情况吧。");
              cm.playerMessage(-1, "出门去看看情况吧。");
              cm.dispose();
            }
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