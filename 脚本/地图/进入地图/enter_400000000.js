var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (cm.isQuestActive(39633)) {
    cm.dispose();
    cm.warp(993162050, 0, true);
  } else {
    if (cm.isQuestActive(34820)) {
      action34820(f, E, e);
    } else if (cm.isQuestActive(34952)) {
      action34952(f, E, e);
    } else {
      cm.dispose();
    }
  }
}
function action34820(f, E, e) {
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
      cm.updateInfoQuest(34820, "kc=10;043=1");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -916, -12);
      cm.npc_ChangeController(3001310, "oid=669097", -1060, 0, 20, -1110, -1010, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=669097", "summon", 0, 0);
      cm.npc_ChangeController(3001311, "oid=669098", -1000, 0, 20, -1050, -950, 1, true, 0, false);
      cm.npc_SetSpecialAction('oid=669098', "summon", 0, 0);
      cm.npc_ChangeController(3001307, "oid=669099", -1130, 0, 24, -1180, -1080, 1, true, 500, false);
      cm.npc_SetSpecialAction("oid=669099", "summon", 0, 0);
      cm.npc_ChangeController(3001308, "oid=669100", -1195, 0, 23, -1245, -1145, 1, true, 500, false);
      cm.npc_SetSpecialAction("oid=669100", "summon", 0, 0);
      cm.npc_ChangeController(3001300, "oid=669101", -850, 0, 21, -900, -800, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=669101", 'summon', 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(10);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.npc_SetForceMove("oid=669097", 1, 650, 150);
        cm.npc_SetForceMove("oid=669098", 1, 650, 150);
        cm.npc_SetForceMove("oid=669099", 1, 650, 150);
        cm.npc_SetForceMove("oid=669100", 1, 650, 150);
        cm.npc_SetForceMove("oid=669101", 1, 700, 170);
        cm.inGameDirectionEvent_同时移动镜头和人(2, 700);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.npc_LeaveField("oid=46475");
          cm.npc_LeaveField("oid=46476");
          cm.npc_LeaveField("oid=46481");
          cm.npc_LeaveField('oid=46482');
          cm.npc_LeaveField("oid=46483");
          cm.npc_LeaveField("oid=46488");
          cm.npc_LeaveField("oid=46493");
          cm.npc_LeaveField("oid=46500");
          cm.npc_LeaveField("oid=46503");
          cm.npc_LeaveField("oid=46507");
          cm.npc_LeaveField("oid=46516");
          cm.npc_LeaveField("oid=46517");
          cm.npc_LeaveField("oid=46518");
          cm.npc_LeaveField("oid=46519");
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(2500);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#诺巴的领土万神殿已经到了。", 37, 3001300, false, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#哇，这又是哪啊？简直棒极了！", 37, 3001310, true, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#跟书上看到的一样，好壮观啊。", 37, 3001300, true, true, 1);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else if (status === V++) {
                  cm.npc_LeaveField("oid=669097");
                  cm.npc_LeaveField("oid=669098");
                  cm.npc_LeaveField("oid=669099");
                  cm.npc_LeaveField("oid=669100");
                  cm.npc_LeaveField("oid=669101");
                  cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                  cm.setInGameDirectionMode(false, true, false);
                  cm.npc_LeaveField("oid=46477");
                  cm.npc_LeaveField("oid=46480");
                  cm.npc_LeaveField("oid=46484");
                  cm.npc_LeaveField("oid=46494");
                  cm.npc_LeaveField("oid=46498");
                  cm.npc_LeaveField("oid=46499");
                  cm.npc_LeaveField('oid=46504');
                  cm.npc_LeaveField("oid=46505");
                  cm.npc_LeaveField("oid=46511");
                  cm.npc_LeaveField("oid=46514");
                  cm.npc_LeaveField("oid=46515");
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
function action34952(f, E, e) {
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
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.setStandAloneMode(true);
      cm.sendNormalTalk_Bottom("#face0#这里是……万神殿？我还以为……是个正在激战的战场……没想到……这么平静。", 37, 3001500 + cm.getPlayer().getGender(), 0, 1);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face1#怎么回事……啊……没力气了……是那个家伙的影响吗……不，感觉不一样……", 37, 3001500 + cm.getPlayer().getGender(), 1, 1);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#喂，喂！快醒醒！你，你是谁！？", 37, 3001551, 0, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#有个可疑的家伙躺在村子中央……那个耳朵和手臂……到底是怎么回事！？", 37, 3001551, 1, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#可能是危险人物，先把他移到远离村子的地方去吧。", 37, 3001551, 1, 1);
              } else if (status === V++) {
                cm.updateInfoQuest(34952, "see1=1");
                cm.dispose();
                cm.warp(400020200, 1, false);
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