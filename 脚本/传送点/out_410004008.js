function enter() {
  cm.openScriptNpc();
}
var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(l, B, x) {
  if (status == 0 && l == 0) {
    cm.dispose();
    return;
  }
  if (l == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = x;
  var R = -1;
  if (status <= R++) {
    cm.dispose();
  } else {
    if (status === R++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 122, 152);
    } else {
      if (status === R++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === R++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === R++) {
            cm.npc_ChangeController(3005102, "oid=621715", -39, 101, 1, -89, 11, 0, true, 1000, false);
            cm.npc_SetSpecialAction('oid=621715', "summon", 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === R++) {
              cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（可是那个卷轴……莫名让人有些放心不下。）", 36, 3005102, false, true, 1);
            } else {
              if (status === R++) {
                cm.sendNormalTalk_Bottom("#face0#可再怎么说……也就是那个家伙的奇葩收藏品之一吧。", 36, 3005102, true, true, 1);
              } else {
                if (status === R++) {
                  cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                } else {
                  if (status === R++) {
                    cm.inGameDirectionEvent_Unknown9(1000);
                    cm.inGameDirectionEvent_AskAnswerTime(300);
                  } else if (status === R++) {
                    cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                    cm.npc_LeaveField('oid=621715');
                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                    cm.setInGameDirectionMode(false, true, false);
                    cm.setStandAloneMode(false);
                    cm.updateInfoQuest(36229, 'dir=1');
                    cm.dispose();
                    cm.warp(410004000, 8, false);
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