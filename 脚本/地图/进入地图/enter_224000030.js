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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 2231, 360);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(2074124, "oid=2595803", 2273, 323, 566, 2223, 2323, 1, false, 500, false);
        cm.npc_SetSpecialAction("oid=2595803", "summon", 0, 0);
        cm.npc_ChangeController(2074100, "oid=2595804", 2216, 323, 564, 2166, 2266, 0, true, 500, false);
        cm.npc_SetSpecialAction("oid=2595804", 'summon', 0, 0);
        cm.sendNormalTalk_Bottom("什么？你说大哥去表白了？", 37, 2074124, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#是，所以最后会是什么结果，我们只要再等一等……", 37, 2074100, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("为什么没有告诉我！", 37, 2074124, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom('哎！', 37, 2074124, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face2#哎哟？哦，等一下！", 37, 2074100, true, true);
              } else {
                if (status === V++) {
                  cm.npc_LeaveField("oid=2595803");
                  cm.sendNormalTalk_Bottom("#face2#嗯，两个人都要去表白吗？", 37, 2074100, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face1#总之现在应该能有个结果了吧？这么一来这场嫉妒也会停止，\r\n我们也去看看吧？", 37, 2074100, true, true);
                  } else {
                    if (status === V++) {
                      cm.updateInfoQuest(30425, "gExpCheck=1");
                      cm.forceStartQuest(30425, '');
                      cm.forceCompleteQuest(30425);
                      cm.gainExp(284119);
                      cm.inGameDirectionEvent_AskAnswerTime(400);
                      cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                    } else if (status === V++) {
                      cm.dispose();
                      cm.warp(224000000, 27, true);
                      cm.setInGameDirectionMode(false, true, false);
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