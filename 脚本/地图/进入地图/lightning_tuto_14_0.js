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
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.npc_ChangeController(1032203, "oid=85302356", 0, 0, 10, -50, 50, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=85302356", 'summon', 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1500);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk('……我，做了什么？', 17, 0, false, true);
      } else {
        if (status === V++) {
          cm.effect_Voice("Voice.img/Luminous_F/0", 100);
          cm.inGameDirectionEvent_PushMoveInfo(0, 300, 0, 27);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1671);
          } else {
            if (status === V++) {
              cm.sendNormalTalk('拉尼娅……', 17, 0, false, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushMoveInfo(0, 300, 500, 27);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1667);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("房子……", 17, 0, false, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(0);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("还有森林……这些全都是我做的。", 17, 0, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("黑魔法师最后说的话原来是这个意思。那时候流泻的黑暗力量一直藏在我的身体里。", 17, 0, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("但为什么是现在？难道黑魔法师解开封印啦？不然黑暗力量不会突然爆发的。", 17, 0, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("怎么办？失去了光之力量的我，我……", 17, 0, true, true);
                              } else {
                                if (status === V++) {
                                  cm.onScriptMessage_选择转职道路(0);
                                } else {
                                  var O = "action" + selectionLog[15];
                                  eval(O)(f, E, e, V);
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
    }
  }
}
function action0(f, E, e, V) {
  if (status <= V++) {
    cm.sendNormalTalk("……我不能被这力量侵蚀。我必须救出拉尼娅，阻止黑暗力量再次破坏世界。哪怕是永远是被封印也没关系。", 17, 0, false, true);
  } else {
    if (status === V++) {
      cm.inGameDirectionEvent_MoveAction(2);
      cm.effect_Voice("Voice.img/Luminous_F/2", 100);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else {
      if (status === V++) {
        cm.updateInfoQuest(25505, "route=0");
        cm.updateInfoQuest(25980, 'normal=#');
        cm.updateInfoQuest(25980, "normal=#;hard=#");
        cm.updateInfoQuest(39391, "level=1");
        cm.updateInfoQuest(1073, "2700=10");
        while (cm.getLevel() < 10) {
          cm.getPlayer().levelUp();
        }
        cm.changeJob(2700);
        cm.gainItem(1142478, 1);
        cm.npc_LeaveField("oid=738407");
        cm.dispose();
        cm.warp(101000100, 0, false);
        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
        cm.setInGameDirectionMode(false, true, false);
      }
    }
  }
}
function action1(f, E, e, V) {
  if (status <= V++) {
    cm.sendNormalTalk("……黑暗力量占据了我的身体。那种感觉，是在光之力量从未感受过的原始而冲动的……", 17, 0, false, true);
  } else {
    if (status === V++) {
      cm.sendNormalTalk("拉尼娅，可惜我们的缘分只能到这里了。潜藏在我身体的黑暗力量，现在仍在肆虐。咳咳。", 17, 0, true, true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_头顶图片(["Effect/Direction8.img/effect/tuto/floodEffect/0", "oid=16777215"], [5000, 0, 0, 1, 0, 251, 0, 0]);
        cm.inGameDirectionEvent_AskAnswerTime(2000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_MoveAction(1);
          cm.effect_Voice("Voice.img/Luminous_F/1", 100);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            while (cm.getLevel() < 10) {
              cm.getPlayer().levelUp();
            }
            cm.changeJob(2700);
            cm.updateInfoQuest(25505, "route=1");
            cm.updateInfoQuest(25980, "normal=#");
            cm.updateInfoQuest(25980, "normal=#;hard=#");
            cm.updateInfoQuest(39391, "level=1");
            cm.updateInfoQuest(1073, "2700=10");
            cm.gainItem(1142479, 1);
            cm.npc_LeaveField("oid=85302356");
            cm.npc_LeaveField("oid=85302356");
            cm.gainItem(1142479, 1);
            cm.npc_LeaveField(1032203);
            cm.dispose();
            cm.warp(101020100, 9, false);
            cm.setInGameDirectionMode(false);
            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
            cm.setInGameDirectionMode(false, true, false);
          }
        }
      }
    }
  }
}