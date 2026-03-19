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
      cm.forceCompleteQuest(58779);
      cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 3);
      cm.gainExp(Math.pow(cm.getLevel(), 3) / 3);
      cm.updateInfoQuest(58711, "10=4;11=3;0=2;1=3;2=3;3=3;4=2;5=2;6=3;7=2;8=3;9=1");
      cm.updateInfoQuest(58711, "10=4;11=3;0=2;1=3;2=3;3=3;4=2;5=2;6=3;7=2;8=3;9=2");
      cm.forceStartQuest(58708, "appear");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9111039, "oid=3968722", 530, -60, 17, 480, 580, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=3968722", 'summon', 0, 0);
      cm.npc_ChangeController(9111018, "oid=3968723", 1260, -60, 57, 1210, 1310, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=3968723", "summon", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("天狗！", 57, 0, false, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1500);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#天狗！！", 37, 9111018, false, true);
            } else {
              if (status === V++) {
                cm.npc_SetForceMove("oid=3968723", -1, 600, 150);
                cm.inGameDirectionEvent_AskAnswerTime(4000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#……干得好。以你的实力，应该可以守护五行。", 37, 9111008, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("天狗……。", 57, 0, true, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/JP_zipang/relGet", "oid=3968722"], [0, 0, 0, 1, 0, 1, 0, 0]);
                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#……五行……你拿去吧。你已经获得了真知，现在可以持有五行了。", 37, 9111008, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#……我想休息一会儿。你快去……救竹野子……", 37, 9111008, true, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/JP_zipang/relBreak", "oid=3968723"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#天狗他这样做……是想让你们提高警戒心。\r\n因为你们聚集了过分强大的力量，所以他想考验一下你们是否具备相应的素质！", 37, 9111018, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#可你居然质疑天狗的用心……像你这样的大笨蛋能通过天狗的试炼简直就是奇迹。", 37, 9111018, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("……。", 57, 0, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#天狗我来照顾，你快去取走木之五行吧。", 37, 9111018, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("……。我知道了。我一定会救竹野子的。", 57, 0, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_LeaveField("oid=3968722");
                                                  cm.npc_LeaveField("oid=3968722");
                                                  cm.npc_LeaveField("oid=3968723");
                                                  cm.npc_LeaveField("oid=3968723");
                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                } else if (status === V++) {
                                                  cm.eventSKill(0);
                                                  cm.dispose();
                                                  cm.warp(800024010, 0, false);
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
      }
    }
  }
}