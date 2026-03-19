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
      cm.updateInfoQuest(58804, "state=2");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(9111001, "oid=47357016", 78, -59, 2, 28, 128, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=47357016", "summon", 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom('咦？怎么没看见鵺？', 57, 0, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#是啊，你不是说他会先过来等吗……", 37, 9111002, true, true);
          } else {
            if (status === V++) {
              cm.npc_ChangeController(9111008, "oid=47358422", -770, -58, 23, -820, -720, 0, true, 0, false);
              cm.npc_SetSpecialAction("oid=47358422", 'summon', 0, 0);
              cm.npc_SetForceMove("oid=47358422", 1, 250, 130);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#竹野子，你在这里干什么。", 37, 9111008, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#你好，天狗。鵺说有话要跟我讲，我就过来了。", 37, 9111001, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#鵺吗……？", 37, 9111008, true, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=47358422"], [0, 0, 0, 1, 0, 1, 0, 0]);
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#哎呀我差点儿忘了，刚才鵺让我帮他带话给你。", 37, 9111008, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#他说你会在这里……让我转告你说他很忙来不了了。", 37, 9111008, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#啊，真的吗？我说他怎么还不来呢，呵呵。那我得早点回去了，免得挨姐姐骂。", 37, 9111001, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#我晕……", 37, 9111002, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom('我倒……', 57, 0, true, true);
                                } else if (status === V++) {
                                  cm.warp(800000000, 5, false);
                                  cm.npc_LeaveField("oid=47357016");
                                  cm.npc_LeaveField("oid=47357016");
                                  cm.npc_LeaveField("oid=47358422");
                                  cm.npc_LeaveField("oid=47358422");
                                  cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                  cm.eventSKill(0);
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
                }
              }
            }
          }
        }
      }
    }
  }
}