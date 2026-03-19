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
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(9130105, "oid=538211653", 139, 161, 5, 89, 189, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=538211653", "summon", 0, 0);
      cm.npc_ChangeController(9130106, "oid=538211654", 483, 170, 6, 433, 533, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=538211654", 'summon', 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1600);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_Monologue("正如你所知，我收到了作为浓姬的间谍重新回去的任务。", 0);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_Monologue("而且在我作为间谍潜入之前，信包大人给了我家族的信物。", 1);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1600);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("我真是没脸见你了。", 5, 9130105, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("没关系，多亏了信包大人，我才能获得了新的人生。我很享受这段时间。", 5, 9130106, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("你为什么说得像是我们不能再见了一样？你一定要回来。收下这个吧。", 5, 9130105, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("这是……？", 5, 9130106, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("这是我们家代代相传的镜子。传说这个镜子在世界陷入混乱时，会告知结束乱世的方法。这个应该能帮到你。", 5, 9130105, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("……你不就是我们家族的人吗？你是我们的家人。", 5, 9130105, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("浓姬也知道这个镜子的存在。据说她为了得到这个镜子，曾经潜入过我们家。", 5, 9130105, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("……谢谢你……信包大人…… ", 5, 9130106, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("你一定要平安回来，我会等着你的。", 5, 9130105, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_Monologue("我带着信包大人给我的信物，回到了我曾经侍奉的主人", 0);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_Monologue("…..浓姬那里", 0);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_Monologue("不出所料，浓姬一见到我就说要杀了我，但是她看到信包给我的信物后，改变了主意。", 0);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_Monologue("虽然她接受了我和信物，但并没有完全信任我，总是以任务为借口，把我派到很远的地方。", 0);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_Monologue("就在这时，我听说了因为织田信长，信包大人的家族被灭，樱乃也被他绑架了的消息。", 0);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_Monologue("虽然我很想立即跑回来……但是没有什么我能做的事情。", 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_Monologue("有一天，我执行任务后回来……", 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_SetHideEffect(0);
                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                    } else if (status === V++) {
                                                      cm.warp(811000011, 0, false);
                                                      cm.npc_LeaveField("oid=538211653");
                                                      cm.npc_LeaveField("oid=538211653");
                                                      cm.npc_LeaveField("oid=538211654");
                                                      cm.npc_LeaveField("oid=538211654");
                                                      cm.eventSKill(0);
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
          }
        }
      }
    }
  }
}