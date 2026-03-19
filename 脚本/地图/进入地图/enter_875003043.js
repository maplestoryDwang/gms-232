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
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.npc_ChangeController(9401277, "oid=2255763", 260, -50, 1, 210, 310, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2255763", 'summon', 0, 0);
      cm.npc_ChangeController(9401285, "oid=2255764", 190, -50, 1, 140, 240, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2255764", 'summon', 0, 0);
      cm.npc_ChangeController(9401286, "oid=2255765", 600, 0, 3, 550, 650, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2255765", 'summon', 0, 0);
      cm.Npc_Fadeout("oid=2255765", 0, 0);
      cm.sendNewEffects(17, [0, 1000, 2000, 535, 45]);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.forceStartQuest(65995, '');
        cm.forceCompleteQuest(65995);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.npc_setForceFlip("oid=2255763", 1);
            cm.sendNormalTalk_Bottom('#face2#' + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + '!?', 37, 9401277, false, true, 1);
          } else {
            if (status === V++) {
              cm.npc_SetForceMove("oid=2255763", 1, 100, 100);
              cm.inGameDirectionEvent_AskAnswerTime(1500);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_同时移动镜头和人(1, 80);
                cm.inGameDirectionEvent_AskAnswerTime(600);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom('#face2#墨玄' + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "！你什么时候来了？！\r\n弟子们增加了不少，对吧？嘿嘿，全都是托墨玄" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + '的福！', 37, 9401277, false, true, 1);
                } else {
                  if (status === V++) {
                    cm.npc_setForceFlip("oid=2255763", -1);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.npc_setForceFlip("oid=2255764", 1);
                      cm.sendNormalTalk_Bottom("#face1#墨玄" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "，你的事迹传遍了冒险岛世界，想要学习拳法的人越来越多。", 37, 9401277, false, true, 1);
                    } else {
                      if (status === V++) {
                        cm.npc_setForceFlip("oid=2255763", 1);
                        cm.sendNormalTalk_Bottom("#face1#因为突然多了很多门徒，大家都忙得不可开交！", 37, 9401277, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.npc_SetForceMove("oid=2255764", 1, 100, 100);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("我一个人教这么多弟子，都快忙不过来了。", 37, 9401285, false, true, 1);
                          } else {
                            if (status === V++) {
                              cm.Npc_Fadeout("oid=2255765", 255, 1000);
                              cm.npc_SetForceMove("oid=2255765", -1, 50, 80);
                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("你知道吃饭睡觉要花多少钱吗？打算盘打得我指甲都要磨秃了！", 37, 9401286, false, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.npc_setForceFlip("oid=2255763", -1);
                                  cm.inGameDirectionEvent_AskAnswerTime(600);
                                } else {
                                  if (status === V++) {
                                    cm.npc_setForceFlip("oid=2255763", 1);
                                    cm.sendNormalTalk_Bottom("#face3#什么嘛？师妹，师兄！墨玄" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "在外面也很辛苦，干嘛说这些？", 37, 9401277, false, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("素笑……不是你先开始的吗？", 37, 9401286, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face4#我只是说很忙！\r\n别再给墨玄" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "使眼色了！", 37, 9401277, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("……我们一点都不累。就算不吃饭，只要看着弟子们就觉得很幸福。谢谢你，墨玄。", 37, 9401286, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("在这个时候说那种话，不是更奇怪吗？", 37, 9401285, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face2#墨玄" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "，希望你能理解。最近师兄们都很高兴。", 37, 9401277, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face1#但是你怎么又变强了？\r\n到底什么时候和我对练啊！", 37, 9401277, true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 600, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(900);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNewEffects(14, [0, 2000, 1000]);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNewEffects(19, [0]);
                                                    } else if (status === V++) {
                                                      cm.updateInfoQuest(65971, "rMap=211000000;chk=1;obj=0");
                                                      cm.npc_LeaveField("oid=2255763");
                                                      cm.npc_LeaveField("oid=2255764");
                                                      cm.dispose();
                                                      cm.warp(875000001, 2, false);
                                                      cm.changeJob(17512);
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