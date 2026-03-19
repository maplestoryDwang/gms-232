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
      cm.npc_ChangeController(3004910, "oid=363579", -413, 63, 1, -463, -363, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -321, 29);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_同时移动镜头和人(1, 5, 0);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#门开着。", 36, 3004910, false, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#看样子是有谁人为毁坏的。", 36, 3004910, true, true, 1);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else if (status === V++) {
                cm.updateInfoQuest(39400, "51=h0;52=h0;53=h0;73=h0;54=h0;74=h0;56=h0;75=h0;76=h0;57=h0;77=h0;58=h0;78=h0;59=h0;79=h0;60=h1;80=h0;61=h0;81=h0;62=h0;82=h0;63=h0;83=h0;64=h0;84=h0;65=h0;66=h0;85=h0;67=h1;68=h1;69=h1");
                cm.updateInfoQuest(39400, "51=h0;52=h0;53=h0;73=h0;54=h0;74=h0;56=h0;75=h0;76=h0;57=h0;77=h0;58=h0;78=h0;59=h0;79=h0;60=h1;80=h0;61=h0;81=h0;62=h0;82=h0;63=h0;83=h0;64=h0;84=h0;65=h0;66=h0;85=h0;67=h1;68=h0;69=h1");
                cm.forceCompleteQuest(39425);
                cm.gainExp(7977);
                cm.dispose();
                cm.warp(410000408, 0, true);
                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                cm.setInGameDirectionMode(false, true, false);
                cm.setStandAloneMode(false);
              }
            }
          }
        }
      }
    }
  }
}