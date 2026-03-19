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
      if (cm.isQuestFinished(35731)) {
        cm.dispose();
        return;
      }
      cm.npc_ChangeController(3003716, "oid=51172", 38, 266, 10, -12, 88, 1, false, 0, false);
      cm.npc_ChangeController(3003708, "oid=51173", 270, 57, 23, 270, 270, 1, false, 0, false);
      cm.updateInfoQuest(35750, "01=h0;02=h0;11=h0;03=h1;21=h2;04=h0;22=h2;05=h5;14=h0;23=h2;15=h1;06=h0;07=h0;08=h1;17=h0;09=h0;79=h1");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.sendNormalTalk_Bottom("那个！", 57, 0, false, true);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk_Bottom("和之前见过的迷宫之核不一样……！", 57, 0, true, true);
      } else {
        if (status === V++) {
          cm.OverlapScreenDetail19(0, 1000, 3000, 1);
          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(300);
            } else {
              if (status === V++) {
                cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
              } else if (status === V++) {
                cm.setStandAloneMode(false);
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