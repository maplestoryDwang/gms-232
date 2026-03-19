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
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(1052232, "oid=6304520", -258, 119, 1, -308, -208, 0, true, false);
      cm.npc_SetSpecialAction("oid=6304520", "summon", 0, 0);
      cm.npc_ChangeController(1052230, "oid=6304521", -183, 119, 1, -233, -133, 0, true, false);
      cm.npc_SetSpecialAction("oid=6304521", "summon", 0, 0);
      cm.npc_ChangeController(1052233, "oid=6304522", -93, 119, 1, -143, -43, 0, false, false);
      cm.npc_SetSpecialAction("oid=6304522", "summon", 0, 0);
      cm.npc_ChangeController(1052229, "oid=6304523", -21, 119, 1, -71, 29, 0, false, false);
      cm.npc_SetSpecialAction("oid=6304523", 'summon', 0, 0);
      cm.npc_ChangeController(1052234, "oid=6304524", 167, 119, 2, 117, 217, 1, true, false);
      cm.npc_SetSpecialAction("oid=6304524", 'summon', 0, 0);
      cm.npc_ChangeController(1052231, "oid=6304525", 227, 119, 2, 177, 277, 1, false, false);
      cm.npc_SetSpecialAction("oid=6304525", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
        cm.inGameDirectionEvent_AskAnswerTime(3000);
        cm.effect_Text(["#fn黑体##fs20#直播短信投票开始！"], [60, 800, 4, 0, 0, 1, 4, 0, 0, 0]);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_QTE(8);
          cm.effect_NormalSpeechBalloon("来，各位！赶紧投票吧！！！", 0, 0, 0, 4500, 1052229, cm.getPlayer().getId());
          cm.effect_NormalSpeechBalloon("投票！投票！", 0, 0, 0, 4500, 1052231, cm.getPlayer().getId());
          cm.effect_NormalSpeechBalloon("啊！我们就要出道了！！", 0, 0, 0, 4500, 1052232, cm.getPlayer().getId());
          cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 4500, 1052234, cm.getPlayer().getId());
          cm.effect_NormalSpeechBalloon("加油！！", 0, 0, 0, 4500, 1052230, cm.getPlayer().getId());
          cm.effect_NormalSpeechBalloon('投票！', 0, 0, 0, 4500, 1052233, cm.getPlayer().getId());
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1500);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#投票结束了！", 37, 1052217, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#能够登上梦幻舞台的队伍……就是……！！！", 37, 1052217, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#哦，以绝对性的优势拿到了第一名呢！", 37, 1052217, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#是大火娱乐的新人组合！祝贺你们！", 37, 1052217, false, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else if (status === V++) {
                          cm.dispose();
                          cm.warp(103041001, 0);
                          cm.inGameDirectionEvent_SetHideEffect(0);
                          cm.setInGameDirectionMode(false, true, false);
                          cm.updateInfoQuest(34436, "find1=1;find2=1;find3=1;s1=1;vote=1");
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
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;