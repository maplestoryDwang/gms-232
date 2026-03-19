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
      cm.updateInfoQuest(61333, "act1=610061570;act2=610062450;act3=610063420");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(9201539, "oid=2724017", 530, 150, 34, 480, 580, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2724017", "summon", 0, 0);
      cm.npc_ChangeController(9201566, "oid=2724018", 600, 150, 39, 550, 650, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2724018", 'summon', 0, 0);
      cm.npc_ChangeController(9201566, "oid=2724019", 700, 150, 40, 650, 750, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2724019", "summon", 0, 0);
      cm.npc_ChangeController(9201567, "oid=2724020", 340, 214, 19, 290, 390, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2724020", 'summon', 0, 0);
      cm.inGameDirectionEvent_同时移动镜头和人(2, 950);
      cm.inGameDirectionEvent_PushMoveInfo(0, 500, 530, 117);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(2813);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(2200);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 270, 250);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("终于杀光了！", 57, 0, false, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                    } else {
                      if (status === V++) {
                        cm.npc_SetForceMove("oid=2724017", -1, 100, 50);
                        cm.inGameDirectionEvent_AskAnswerTime(2200);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face5#你还真是锲而不舍啊。", 37, 9201539, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("我会阻止你和纳瑞坎，守护幻日！", 57, 0, true, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face2#这么做对你有什么好处？\r\n明明与你毫不相干！", 37, 9201539, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("如果你改变了过去，谁知道会对现实产生什么影响！", 57, 0, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("又有谁知道纳瑞坎会做出什么事来？", 57, 0, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("冒险岛世界有难，我便义不容辞。", 57, 0, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("你才是那个多管闲事的人呢。", 57, 0, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face5#我只是将幻日归还给它名正言顺的主人而已。", 37, 9201539, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face5#你要是没那么笨，也不至于不理解。", 37, 9201539, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#可惜，你就是这么笨，还中了我的陷阱。", 37, 9201539, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_SetSpecialAction("oid=2724017", "attack", 0, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_ChangeController(9201566, "oid=2724597", -260, 273, 3, -310, -210, 1, true, 0, false);
                                                  cm.npc_SetSpecialAction("oid=2724597", "summon", 0, 0);
                                                  cm.npc_ChangeController(9201567, "oid=2724598", -260, 273, 3, -310, -210, 1, true, 0, false);
                                                  cm.npc_SetSpecialAction("oid=2724598", "summon", 0, 0);
                                                  cm.npc_ChangeController(9201567, "oid=2724599", -260, 273, 3, -310, -210, 1, true, 0, false);
                                                  cm.npc_SetSpecialAction("oid=2724599", "summon", 0, 0);
                                                  cm.npc_SetForceMove("oid=2724597", 1, 300, 200);
                                                  cm.npc_SetForceMove("oid=2724598", 1, 200, 200);
                                                  cm.npc_SetForceMove("oid=2724597", 1, 100, 200);
                                                  cm.inGameDirectionEvent_ForcedFlip(-1);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_ForcedFlip(1);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("你在做什么？", 57, 0, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face5#这问题真够蠢的。\r\n我当然是在一劳永逸地排除你了。", 37, 9201539, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3));
                                                                    cm.updateInfoQuest(61370, "1=1;2=1;3=1;4=1");
                                                                    cm.gainExp(Math.pow(cm.getLevel(), 3));
                                                                    cm.inGameDirectionEvent_AskAnswerTime(4200);
                                                                    cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                                                  } else if (status === V++) {
                                                                    cm.eventSKill(0);
                                                                    cm.warp(610063430, 0, true);
                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                    cm.npc_LeaveField("oid=2724017");
                                                                    cm.npc_LeaveField("oid=2724017");
                                                                    cm.npc_LeaveField("oid=2724018");
                                                                    cm.npc_LeaveField("oid=2724018");
                                                                    cm.npc_LeaveField("oid=2724019");
                                                                    cm.npc_LeaveField("oid=2724019");
                                                                    cm.npc_LeaveField("oid=2724020");
                                                                    cm.npc_LeaveField("oid=2724020");
                                                                    cm.npc_LeaveField("oid=2724597");
                                                                    cm.npc_LeaveField("oid=2724597");
                                                                    cm.npc_LeaveField("oid=2724598");
                                                                    cm.npc_LeaveField("oid=2724598");
                                                                    cm.npc_LeaveField("oid=2724599");
                                                                    cm.npc_LeaveField("oid=2724599");
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
            }
          }
        }
      }
    }
  }
}