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
      cm.sendNormalTalk("黑暗力量变得更强烈了。得往哪边走？", 17, 0, false, true);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk('……夜光法师。', 1, 1032205, true, true);
      } else {
        if (status === V++) {
          cm.npc_ChangeController(1032203, "oid=67192524", 420, -30, 15, 370, 470, 1, false, 0, false);
          cm.npc_SetSpecialAction("oid=67192524", "summon", 0, 0);
          cm.inGameDirectionEvent_PushMoveInfo(0, 300, 420, -23);
        } else {
          if (status === V++) {
            cm.effect_OnUserEff("Effect/OnUserEff.img/normalEffect/demonSlayer/chatBalloon0");
            cm.inGameDirectionEvent_AskAnswerTime(3762);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("……拉尼娅？", 3, 1032205, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("夜光法师，我……我希望夜光法师……啊啊啊！！", 1, 1032205, true, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction8.img/effect/tuto/floodEffect/1", "oid=67192524"], [0, 0, 0, 1, 0, 1, 0, 0]);
                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction8.img/effect/tuto/floodEffect/2", "oid=67192524"], [0, 0, 0, 1, 0, 1, 0, 0]);
                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(0);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("拉尼娅！！", 3, 1032205, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("(拉尼娅已经被黑暗力量侵蚀了。该怎么做让拉尼娅恢复正常？)", 3, 1032205, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("夜光法师，我遵照黑魔法师的命令，来毁。灭。你。", 1, 1032216, true, true);
                          } else if (status === V++) {
                            cm.npc_LeaveField("oid=67192524");
                            cm.npc_LeaveField("oid=67192524");
                            cm.inGameDirectionEvent_MoveAction(2);
                            cm.spawnMobLimit(9300534, 1, 420, -23, 100);
                            cm.spawnMobLimit(9300534, 1, 420, -23, 100);
                            cm.playerMessage(-1, "打败被黑暗力量侵蚀的拉尼娅，驱散黑暗力量。");
                            cm.forceStartQuest(25660, '');
                            cm.eventSKill(0);
                            cm.setInGameDirectionMode(false, true, false);
                            cm.forceStartQuest(25660, "001");
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
      }
    }
  }
}