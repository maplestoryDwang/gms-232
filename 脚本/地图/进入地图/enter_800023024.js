var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
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
      cm.forceCompleteQuest(58765);
      cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 3);
      cm.gainExp(Math.pow(cm.getLevel(), 3) / 3);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9111060, "oid=3868506", 350, -30, 7, 300, 400, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=3868506", "summon", 0, 0);
      cm.npc_ChangeController(9111061, "oid=3868507", 432, -30, 3, 382, 482, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=3868507", "summon", 0, 0);
      cm.npc_ChangeController(9111061, "oid=3868508", 530, -30, 18, 480, 580, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=3868508", "summon", 0, 0);
      cm.npc_ChangeController(9111060, "oid=3868509", 615, -30, 14, 565, 665, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=3868509", 'summon', 0, 0);
      cm.npc_ChangeController(9111061, "oid=3868510", 33, -30, 8, -17, 83, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=3868510", 'summon', 0, 0);
      cm.npc_ChangeController(9111060, "oid=3868511", -73, -30, 5, -123, -23, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=3868511", "summon", 0, 0);
      cm.npc_ChangeController(9111061, "oid=3868512", -180, -30, 9, -230, -130, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=3868512", "summon", 0, 0);
      cm.npc_ChangeController(9111060, "oid=3868513", -260, -30, 9, -310, -210, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=3868513", "summon", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("人类，看好了！这就是我们狐妖的新技能！", 57, 0, false, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(2500);
            cm.effect_NormalSpeechBalloon("呃，好像不是这座建筑物。不好意思，老大！", 1, 0, 0, 2500, 1, 0, 0, 0, 4, 9111060, null, cm.getPlayer().getId());
            cm.effect_OnUserEff("Effect/OnUserEff.img/emotionBalloon/noSpeak");
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("没关系！谁都有做错事的时候嘛！重要的是，要懂得反省！我有没有说错！", 57, 0, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#对极了！领袖！！", 37, 9111061, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#哇啊啊啊-！", 37, 9111060, true, true);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else if (status === V++) {
                    cm.warp(800023015, 0, false);
                    cm.npc_LeaveField("oid=3868506");
                    cm.npc_LeaveField("oid=3868506");
                    cm.npc_LeaveField("oid=3868507");
                    cm.npc_LeaveField("oid=3868507");
                    cm.npc_LeaveField("oid=3868508");
                    cm.npc_LeaveField("oid=3868508");
                    cm.npc_LeaveField("oid=3868509");
                    cm.npc_LeaveField("oid=3868509");
                    cm.npc_LeaveField("oid=3868510");
                    cm.npc_LeaveField("oid=3868510");
                    cm.npc_LeaveField("oid=3868511");
                    cm.npc_LeaveField("oid=3868511");
                    cm.npc_LeaveField("oid=3868512");
                    cm.npc_LeaveField("oid=3868512");
                    cm.npc_LeaveField("oid=3868513");
                    cm.npc_LeaveField("oid=3868513");
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