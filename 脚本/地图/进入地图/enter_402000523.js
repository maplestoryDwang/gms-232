var status = -1;
var selectionLog = [];
function start() {
  status = -1;
  action(1, 0, 0);
}
;
function action(f, E, e) {
  if (cm.getQuestStatus(34803) == 2 && cm.getQuestStatus(34804) == 0) {
    action34804(f, E, e);
  } else {
    cm.dispose();
  }
}
function action34804(f, E, e) {
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
      cm.updateInfoQuest(34804, "gossip=1");
      cm.updateInfoQuest(34858, "gate=1;cinna=2");
      cm.updateInfoQuest(34859, "dean=2;extra1=1;extra2=1;carn=3");
      cm.updateInfoQuest(34859, "dean=2;extra1=2;extra2=1;carn=3");
      cm.updateInfoQuest(34859, "dean=2;extra1=2;extra2=2;carn=3");
      cm.updateInfoQuest(34859, "dean=2;extra1=2;extra2=2;carn=4");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(3001300, "oid=913393", 150, -1381, 8, 100, 200, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=913393", 'summon', 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -3, -1399);
      cm.inGameDirectionEvent_ForcedFlip(1);
      cm.inGameDirectionEvent_AskAnswerTime(300);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 700, 0);
        cm.inGameDirectionEvent_AskAnswerTime(700);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_同时移动镜头和人(2, 100);
          cm.npc_SetForceMove("oid=913393", 1, 70, 100);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#你知道后来怎么样了吗？", 37, 3001307, false, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom('#face0#是啊。', 37, 3001311, true, true, 1);
            } else {
              if (status === V++) {
                cm.npc_ChangeController(3001307, "oid=913806", -278, -1381, 6, -328, -228, 0, true, 0, false);
                cm.npc_SetSpecialAction("oid=913806", "summon", 0, 0);
                cm.npc_ChangeController(3001311, 'oid=913807', -339, -1381, 6, -389, -289, 0, true, 0, false);
                cm.npc_SetSpecialAction('oid=913807', 'summon', 0, 0);
                cm.sendNormalTalk_Bottom("#face0#超级大声地#fs22##r黑曜石！#k", 37, 3001307, true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face1#还一直发出当啷当啷的响声！可能是觉得那铁桶机器人有些丢脸,整张脸涨得通红……感觉马上就要哭出来了……", 37, 3001307, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face1#那你正好#b路过那。#k", 37, 3001311, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_ForcedFlip(-1);
                      cm.npc_setForceFlip("oid=913393", -1);
                      cm.inGameDirectionEvent_AskAnswerTime(30);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#……？", 37, 3001351, false, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#你好！", 37, 3001307, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face4#你、你好……", 37, 3001351, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face1#不是你！我在跟那个#b滑稽的机器人#k打招呼！噗哈哈！！", 37, 3001307, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#我有好多事情想知道！你到底是怎么进入这所学校的？嗯？", 37, 3001307, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#你的手背水晶为什么没有颜色？", 37, 3001307, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#你的翅膀为什么不发光？", 37, 3001307, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#这机器人是你的宠物吗？嗯？快说啊！说啊！", 37, 3001307, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face4#那个……", 37, 3001351, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#喂,迪恩！", 37, 3001308, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_ChangeController(3001308, "oid=913808", -100, -1381, 7, -150, -50, 1, true, 0, false);
                                            cm.npc_SetSpecialAction('oid=913808', "summon", 0, 0);
                                            cm.sendNormalTalk_Bottom("#face0#欺负别人,你心情很好吗？", 37, 3001308, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face2#啊？你让谁闭嘴啊！？我就是好奇而已嘛！", 37, 3001307, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#如果从入学第一天就被这样对待,就算是你也会觉得走投无路吧？", 37, 3001308, true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face4#喂,真没劲。快走吧。", 37, 3001311, true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face2#嗯？干嘛~多有趣啊！", 37, 3001307, true, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face3#走吧。", 37, 3001311, true, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face1#那有缘再见！", 37, 3001307, true, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.Npc_Fadeout("oid=913806", 0, 800);
                                                          cm.Npc_Fadeout("oid=913807", 0, 800);
                                                          cm.inGameDirectionEvent_AskAnswerTime(800);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.npc_LeaveField("oid=913806");
                                                            cm.npc_LeaveField("oid=913807");
                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face3#……当初不来什么水晶学院是不是更好呢？", 37, 3001351, false, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.npc_setForceFlip("oid=913808", 1);
                                                                cm.inGameDirectionEvent_AskAnswerTime(30);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face1#别在意。迪恩只是性格有些别扭,并没有恶意。", 37, 3001308, false, true, 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#啊……谢谢。", 37, 3001351, true, true, 1);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#你叫什么名字？", 37, 3001308, true, true, 1);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#伊利温。", 37, 3001351, true, true, 1);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face1#我是#b卡尼里恩#k。很高兴见到你。", 37, 3001308, true, true, 1);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#哎呀,我要迟到了！再见！", 37, 3001308, true, true, 1);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.Npc_Fadeout("oid=913808", 0, 800);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(800);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.npc_LeaveField('oid=913808');
                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face0#带你参加下一节课。趁着还没迟到,赶快前往教室吧。", 37, 3001300, false, true, 1);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                          cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                        } else if (status === V++) {
                                                                                          cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                          cm.setInGameDirectionMode(false, true, false);
                                                                                          cm.setStandAloneMode(false);
                                                                                          cm.OnStartNavigation(402000530, 0, '', 0);
                                                                                          cm.npc_LeaveField("oid=913393");
                                                                                          cm.dispose();
                                                                                          cm.warp(402000522, 1, false);
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