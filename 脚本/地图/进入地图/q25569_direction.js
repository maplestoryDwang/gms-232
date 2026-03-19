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
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.npc_ChangeController(1032208, "oid=46359649", -106, 182, 16, -156, -56, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=46359649", "summon", 0, 0);
      cm.inGameDirectionEvent_MoveAction(1);
      cm.inGameDirectionEvent_AskAnswerTime(30);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_MoveAction(0);
        cm.sendNormalTalk("拿到了想要的东西，就快走吧。", 1, 1032208, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("什么？给我这么个内容不全的东西，还敢对我说这种话？", 3, 1032208, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("哼哼哼。一个小小的书童，就想愚弄我吗？你必须为此付出代价。", 3, 1032208, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("什，什么话啊？我只是想在汉斯来之前，清理图书馆而已啊。", 1, 1032208, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("不要辩解。消……失……吧。", 3, 1032208, true, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_SetFaceOff(20071);
                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction8.img/effect/tuto/floodEffect/1", "oid=16777215"], [2100, 0, 0, 1, 0, 251, 0, 0]);
                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction8.img/effect/tuto/floodEffect/2", "oid=16777215"], [2100, 0, 0, 1, 0, 250, 0, 0]);
                  cm.inGameDirectionEvent_AskAnswerTime(300);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction8.img/effect/story/roroEffect", "oid=46359649"], [0, 0, 0, 1, 0, 1, 0, 0]);
                    cm.npc_SetSpecialAction("oid=46359649", "hit", 0, 1);
                    cm.inGameDirectionEvent_AskAnswerTime(660);
                  } else {
                    if (status === V++) {
                      cm.npc_LeaveField("oid=46359649");
                      cm.npc_LeaveField("oid=46359649");
                      cm.inGameDirectionEvent_AskAnswerTime(1140);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_SetFaceOff(0);
                        cm.sendNormalTalk("？？？？？？？？。", 3, 1032208, false, true);
                      } else if (status === V++) {
                        cm.forceCompleteQuest(25569);
                        cm.gainExp(758);
                        cm.eventSKill(0);
                        cm.setInGameDirectionMode(false, true, false);
                        cm.forceStartQuest(25570, '');
                        cm.dispose();
                        cm.warp(101000000, 7, false);
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