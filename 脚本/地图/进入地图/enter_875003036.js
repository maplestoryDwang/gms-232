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
      cm.npc_ChangeController(9401278, "oid=206942", 361, 707, 225, 311, 411, 4, true, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(9401283, "oid=2153983", 650, 690, 226, 600, 700, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2153983", 'summon', 0, 0);
      cm.sendNewEffects(17, [0, 1000, 2000, 470, 740]);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.npc_SetForceMove("oid=2153983", -1, 100, 100);
            cm.sendNormalTalk_Bottom("#face0#分舵主！分舵主！呀！", 37, 9401283, false, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face1#这里，小兰！", 37, 9401278, true, true, 1);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#好久不见，分舵主！", 37, 9401283, false, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#好了，这位是玄山派墨玄" + (cm.getPlayer().getGender() == 0 ? '公子' : '姑娘') + '。', 37, 9401278, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#你好！我叫小兰！\r\n原来在河津分舵，三年前被派到了金银岛！", 37, 9401283, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0##b我是玄山派墨玄。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face1#你被派出去已经有三年了吧？", 37, 9401278, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#是！我还以为你把我给忘了呢！\r\n为什么我每周给你报告，都没有回音呢？", 37, 9401283, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face2#那个……这里的情况和江湖不太一样，所以需要的情报……\r\n嗯，那个先不说了。对了，你了解这里吗？", 37, 9401278, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face1#这么问太伤人了吧？\r\n现在这里是我的地盘！", 37, 9401283, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face1#呵呵呵，很好，很好。墨玄" + (cm.getPlayer().getGender() == 0 ? '公子' : '姑娘') + "决定暂时留在这里，你好好帮帮他。", 37, 9401278, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face1#是的，我也是在河津出生长大，受了玄山派不少恩惠。现在终于有机会报恩，真是太好了！\r\n请多多关照，大侠！", 37, 9401283, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face1##b那就拜托了。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#让我看看。哪里有能让我们墨玄大侠积累实战经验的同时，又能通过拯救生命之类的义行来提高玄山派形象的事情呢？", 37, 9401278, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#因为我们分舵主总是很难伺候。", 37, 9401283, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face1#有人住的地方不都一样吗？不管在什么地方，各种事件都在接连不断地发生！\r\n其中符合分舵主要求的是发生在#b#e<艾利涅>#k#n和#b#e<列娜海峡>#k#n的事件。", 37, 9401283, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face1#妖精学院艾利涅原本是没有人类涉足的地方，但是最近好像有个人类魔法师闯入那里，还造成了骚乱。列娜海峡的冰川最近正在融化，并引发了一系列异常事件。", 37, 9401283, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face1#墨玄大侠，以你的身手一定能帮上忙！\r\n详细的情况我稍后再说明。", 37, 9401283, true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#是吗？\r\n追踪……大师兄和黑道人物的事情交给我。你就像原来一样去传播玄山派的教诲，在帮助弱者的同时，逐步积蓄力量。", 37, 9401278, true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face1#去不去是你自己的选择。也许在那里也会遇到不错的缘分，收到新的弟子。谁又能知道呢？", 37, 9401278, true, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face1#有什么新的消息，我会通过小兰和你联系。", 37, 9401278, true, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face3#墨玄" + (cm.getPlayer().getGender() == 0 ? '公子' : '姑娘') + "，祝你好运。", 37, 9401278, true, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.forceCompleteQuest(65951);
                                                          cm.gainExp(14072);
                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 600, 0);
                                                          cm.inGameDirectionEvent_AskAnswerTime(900);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNewEffects(14, [0, 2000, 1000]);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNewEffects(19, [0]);
                                                            } else if (status === V++) {
                                                              cm.npc_LeaveField("oid=2153983");
                                                              cm.dispose();
                                                              cm.warp(104000000, 5, false);
                                                              cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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