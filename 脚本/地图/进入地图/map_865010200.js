var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (cm.isQuestFinished(17603) && cm.getQuestStatus(17608) == 0) {
    action1(f, E, e);
  } else {
    cm.fieldEffect_ScreenMsg("Map/EffectBT.img/dawnveil1/temaD");
    cm.dispose();
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
      cm.npc_ChangeController(9390201, "oid=109389", -445, 128, 74, -445, -395, 1, false, 0, false);
      cm.npc_ChangeController(9390241, "oid=109390", 852, 128, 93, 802, 881, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_MoveAction(4);
      cm.emotion(7, 7000);
      cm.inGameDirectionEvent_AskAnswerTime(3000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("唉哟……这里是什么地方啊……", 3, 0, false, true);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_MoveAction(2);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_MoveAction(0);
            cm.sendNormalTalk("船呢……？帕尔巴特呢……？我一个人被卷到这里了吗……？船……翻了……？究竟发生了什么，我完全想不起来了……", 3, 0, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("总之，幸好似乎没有什么地方受重伤。这里……看起来像是渔村，先去随便找人问一下这里是哪里吧？", 3, 0, true, true);
            } else if (status === V++) {
              cm.forceStartQuest(17608, '');
              cm.fieldEffect_ScreenMsg("Map/EffectBT.img/dawnveil1/temaD");
              cm.setInGameDirectionMode(false, true, false);
              cm.setStandAloneMode(false);
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