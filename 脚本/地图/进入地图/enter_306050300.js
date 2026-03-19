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
      cm.setAmbience("Ambience.img/blizzard_soft", 80, 60);
      cm.fieldEffect_复合图片动画(["Map/Effect2.img/Blizzard/skeleton", "normal", '', ''], [1, 1, 0, 0, 0, 0, 0, 0]);
      cm.setAmbience("SoundEff.img/DLep4/war2", 80, 60);
      if (cm.isQuestFinished(32693)) {
        cm.dispose();
        return;
      }
      cm.userSetFieldFloating(306050300, 3, 3, 50);
      cm.npc_ChangeController(2550001, "oid=1772008", 1900, -200, 10, 1850, 1950, 1, true, 1000, false);
      cm.npc_SetSpecialAction("oid=1772008", "summon", 0, 0);
      cm.npc_ChangeController(2550015, "oid=1772009", 421, -315, 30, 371, 471, 1, false, 1000, false);
      cm.npc_SetSpecialAction("oid=1772009", "summon", 0, 0);
      cm.npc_ChangeController(2550013, "oid=1772010", 1001, 25, 86, 951, 1051, 1, false, 1000, false);
      cm.npc_SetSpecialAction("oid=1772010", 'summon', 0, 0);
      cm.npc_ChangeController(2550012, "oid=1772011", 1630, -154, 13, 1580, 1680, 1, false, 1000, false);
      cm.npc_SetSpecialAction("oid=1772011", 'summon', 0, 0);
      cm.updateInfoQuest(32694, "enter=1");
      cm.forceCompleteQuest(32693);
      cm.gainExp(186336);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/headache", 100);
      cm.sendNormalTalk_Bottom('呃呃呃……', 57, 0, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("后退……后退！！！", 37, 2550007, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("不行！不能撤退！！", 37, 2550007, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("咳呃……", 57, 0, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("队长！打起精神来！！", 37, 2550007, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("(要发送……爆破信号才行。去烽火台吧。)", 57, 0, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("呵呵呵……我就猜到你会这么做。", 37, 2550006, true, true);
                    } else if (status === V++) {
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
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;