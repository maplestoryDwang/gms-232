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
      cm.npc_ChangeController(1530031, 'oid=30385', 729, 136, 10, 679, 779, 1, false, false);
      cm.npc_ChangeController(1530501, "oid=30386", 511, 136, 12, 461, 561, 1, false, false);
      cm.updateInfoQuest(33518, "enter=1");
      cm.setAmbience("Ambience.img/loud", 100, 60);
      cm.npc_ChangeController(1530270, "oid=40241090", 800, 136, 9, 750, 850, 0, true, false);
      cm.npc_SetSpecialAction("oid=40241090", "summon", 0, 0);
      cm.npc_ChangeController(1530300, "oid=40241091", 900, 136, 8, 850, 950, 1, true, false);
      cm.npc_SetSpecialAction("oid=40241091", 'summon', 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_PushScaleInfo(10, 1000, 10, 0, 0);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushScaleInfo(5000, 1000, 5000, 860, 0);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(4000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("你，听说了吗？今天伊莉娜乐队要和戴米安乐队比赛呢！", 37, 1530270, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("什么？真的？肯定会很有趣！", 37, 1530300, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("但是，那些人能赢过戴米安乐队吗？", 37, 1530270, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("听说输的一方要在舞台上用屁股写名字呢！！", 37, 1530300, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom('#fs30#哇啊~！', 37, 1530270, true, true);
                    } else if (status === V++) {
                      cm.dispose();
                      cm.warp(330000661, 0);
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