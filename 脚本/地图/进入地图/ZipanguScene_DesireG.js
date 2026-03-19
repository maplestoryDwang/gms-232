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
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(9111035, "oid=3900991", 340, -50, 22, 290, 390, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=3900991", "summon", 0, 0);
      cm.npc_ChangeController(9111036, "oid=3900992", 735, -50, 15, 685, 785, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=3900992", "summon", 0, 0);
      cm.npc_ChangeController(9111036, "oid=3900993", 800, -50, 15, 750, 850, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=3900993", "summon", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1500);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#……该死的佣人，你竟敢把我们的话当耳旁风？", 37, 9111036, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#……放肆的家伙！就因为住持大师有点看重你，你就蹬鼻子上脸了？", 37, 9111036, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#……我是为了救命才……", 37, 9111035, true, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/angry", "oid=3900992"], [0, 0, 0, 1, 0, 1, 0, 0]);
                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#你要嘴硬到底是吧！", 37, 9111036, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#我看这家伙脑子不太好使！", 37, 9111036, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face1#……够了。", 37, 9111038, true, true);
                      } else {
                        if (status === V++) {
                          cm.npc_ChangeController(9111038, "oid=3901377", 1000, -50, 24, 950, 1050, 1, true, 0, false);
                          cm.npc_SetSpecialAction("oid=3901377", "summon", 0, 0);
                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=3900992"], [0, 0, 0, 1, 0, 1, 0, 0]);
                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=3900993"], [0, 0, 0, 1, 0, 1, 0, 0]);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face1#审讯到此为止，对他的傲慢给点合理的惩罚，这事就此不提吧。", 37, 9111038, false, true);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.npc_LeaveField("oid=3900991");
                                  cm.npc_LeaveField("oid=3900991");
                                  cm.npc_LeaveField("oid=3900992");
                                  cm.npc_LeaveField("oid=3900992");
                                  cm.npc_LeaveField("oid=3900993");
                                  cm.npc_LeaveField("oid=3900993");
                                  cm.npc_LeaveField("oid=3901377");
                                  cm.npc_LeaveField("oid=3901377");
                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_ChangeController(9112018, "oid=3901591", 340, -50, 22, 290, 390, 1, false, 0, false);
                                      cm.npc_SetSpecialAction("oid=3901591", "summon", 0, 0);
                                      cm.sendNormalTalk_Bottom("#face0#不……不行……！！", 37, 9111035, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(1400);
                                        } else if (status === V++) {
                                          cm.eventSKill(0);
                                          cm.setInGameDirectionMode(false, true, false);
                                          em.schedule('刷怪', 1000);
                                          em.schedule('刷怪', 11000);
                                          em.schedule('刷怪', 21000);
                                          em.schedule("提示1", 1000);
                                          em.schedule("提示2", 5000);
                                          em.schedule("提示3", 9000);
                                          em.schedule("提示4", 13000);
                                          em.schedule("提示5", 17000);
                                          em.schedule('完成', 30000);
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
      }
    }
  }
}