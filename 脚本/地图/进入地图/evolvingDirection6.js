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
      cm.npc_ChangeController(9075302, "oid=290918", 522, -104, 10, 472, 572, 0, false, 0, false);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 650, -100);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(9075303, "oid=2289559", 800, -120, 8, 750, 850, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2289559", "summon", 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(3000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("啊，这……斯乌居然流眼泪了，怎么会这样！", 5, 9075303, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("…………", 9, 9075302, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("该死，好像有哪里出现了异常。难道是前几天改造脑子时，镶嵌的螺丝钉刺激了泪腺？让我看看，设计图被我放哪里了？", 5, 9075303, true, true);
            } else {
              if (status === V++) {
                cm.npc_SetForceMove("oid=2289559", 1, 400, 100);
                cm.inGameDirectionEvent_AskAnswerTime(5000);
              } else {
                if (status === V++) {
                  cm.npc_LeaveField("oid=2289559");
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("……奥尔…卡……", 9, 9075302, false, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else if (status === V++) {
                      cm.forceStartQuest(1849, '2');
                      cm.dispose();
                      cm.warp(957000000, 0, false);
                      cm.setInGameDirectionMode(false, true, false);
                      cm.forceStartQuest(1831, '0');
                      cm.forceStartQuest(1839, '0');
                      cm.forceStartQuest(1840, '0');
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