var status = -1;
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  status++;
  if (!cm.isQuestFinished(34842) && cm.getInfoQuest(34842) == '045=1') {
    action34842(f, E, e);
  } else if (cm.isQuestFinished(34842) && cm.isQuestFinished(34827)) {
    action34827(f, E, e);
  } else {
    cm.dispose();
  }
}
function action34842(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.inGameDirectionEvent_ForcedFlip(1);
      cm.npc_ChangeController(3001300, "oid=670593", -287, 1460, 42, -337, -237, 0, true, 0, false);
      cm.npc_SetSpecialAction('oid=670593', "summon", 0, 0);
      cm.npc_ChangeController(3001312, "oid=670594", 144, 1460, 46, 94, 194, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=670594", "summon", 0, 0);
      cm.npc_ChangeController(3001310, "oid=670595", -389, 1460, 41, -439, -339, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=670595", 'summon', 0, 0);
      cm.npc_ChangeController(3001311, "oid=670596", 240, 1460, 48, 190, 290, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=670596", 'summon', 0, 0);
      cm.npc_ChangeController(3001307, "oid=670597", -520, 1500, 28, -570, -470, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=670597", "summon", 0, 0);
      cm.npc_ChangeController(3001308, "oid=670598", 370, 1500, 37, 320, 420, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=670598", "summon", 0, 0);
      cm.npc_ChangeController(3001389, "oid=670599", 440, 1500, 37, 390, 490, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=670599", 'summon', 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -72, 400);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(100);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushScaleInfo(5500, 0, 1000, 5500, -72, 1540);
        } else {
          if (status === V++) {
            cm.effect_Text(["#fn黑体##fs18#水下世界受难船的墓地", ''], [100, 2200, 6, -50, -50, 1, 4, 0, 0, 0, 0, 0]);
            cm.inGameDirectionEvent_AskAnswerTime(6000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#抵达目的地。", 37, 3001300, false, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#啊？玛奇那和利奥……不是好好的嘛？什么啊，没劲。", 37, 3001307, true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#迪恩，开玩笑也要有点分寸好吗？", 37, 3001308, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face2#我怎么了！？", 37, 3001307, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#妙斯，你说的就是这里？", 37, 3001308, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("其实我是第一次到这么深的地方来……我之前也都是听人说的……", 37, 3001389, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face3#这里深不见底……漆黑一片……感觉好恐怖啊……", 37, 3001310, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face1#像你这种胆小鬼，这也不奇怪。", 37, 3001311, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face3#喂，你说够了吗？", 37, 3001310, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.npc_ChangeController(3001346, 'oid=670602', -50, 1460, 44, -100, 0, 0, false, 0, false);
                                cm.npc_SetSpecialAction("oid=670602", "summon", 0, 0);
                                cm.npc_SetSpecialAction("oid=670602", "obejct_appear", 0, 1);
                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/illium/cg_summon", 100);
                                cm.inGameDirectionEvent_AskAnswerTime(850);
                              } else {
                                if (status === V++) {
                                  cm.setNpcSpecialActionReset("oid=670602");
                                  cm.npc_SetSpecialAction("oid=670602", "object", -1, 1);
                                  cm.sendNormalTalk_Bottom("#face3#那个！", 37, 3001354, false, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_同时移动镜头和人(2, 100);
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.setNpcSpecialActionReset("oid=670602");
                                      cm.npc_SetSpecialAction('oid=670602', 'open', 0, 1);
                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/illium/cg_open", 100);
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face3#水晶门！", 37, 3001354, false, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face3#难道又只对你有反应？切。", 37, 3001311, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face3#别来无恙啊！", 37, 3001307, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face2#快进去看看！", 37, 3001310, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#这么说……", 37, 3001354, true, true, 1);
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
                                                        cm.npc_LeaveField('oid=670593');
                                                        cm.npc_LeaveField("oid=670594");
                                                        cm.npc_LeaveField("oid=670595");
                                                        cm.npc_LeaveField("oid=670596");
                                                        cm.npc_LeaveField("oid=670597");
                                                        cm.npc_LeaveField("oid=670598");
                                                        cm.npc_LeaveField('oid=670599');
                                                        cm.npc_LeaveField("oid=670602");
                                                        cm.dispose();
                                                        cm.warp(940202047, 0, true);
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
function action34827(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.inGameDirectionEvent_ForcedFlip(1);
      cm.npc_ChangeController(3001300, 'oid=670781', -287, 1460, 42, -337, -237, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=670781", "summon", 0, 0);
      cm.npc_ChangeController(3001312, "oid=670782", 144, 1460, 46, 94, 194, 1, false, 0, false);
      cm.npc_SetSpecialAction('oid=670782', 'summon', 0, 0);
      cm.npc_ChangeController(3001310, 'oid=670783', -389, 1460, 41, -439, -339, 0, true, 0, false);
      cm.npc_SetSpecialAction('oid=670783', "summon", 0, 0);
      cm.npc_ChangeController(3001311, "oid=670784", 240, 1460, 48, 190, 290, 1, true, 0, false);
      cm.npc_SetSpecialAction('oid=670784', 'summon', 0, 0);
      cm.npc_ChangeController(3001307, "oid=670785", -520, 1500, 28, -570, -470, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=670785", 'summon', 0, 0);
      cm.npc_ChangeController(3001308, "oid=670786", 370, 1500, 37, 320, 420, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=670786", 'summon', 0, 0);
      cm.npc_ChangeController(3001389, "oid=670787", 440, 1500, 37, 390, 490, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=670787", "summon", 0, 0);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.npc_ChangeController(3001346, "oid=670788", -50, 1460, 44, -100, 0, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=670788", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -72, 1540);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.onTeleport(0, 3, cm.getPlayer().getId(), -45, 1391);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#伊利温！你来啦！", 37, 3001310, false, true, 1);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_ForcedFlip(-1);
            cm.inGameDirectionEvent_同时移动镜头和人(1, 100);
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_ForcedFlip(1);
              cm.npc_SetSpecialAction("oid=670788", "disappeared", 0, 1);
              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/illium/cg_gone", 100);
              cm.inGameDirectionEvent_AskAnswerTime(2000);
            } else {
              if (status === V++) {
                cm.npc_LeaveField("oid=670788");
                cm.sendNormalTalk_Bottom("#face0#到底有什么事？快说！", 37, 3001311, false, true, 1);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_ForcedFlip(-1);
                  cm.sendNormalTalk_Bottom("#face0#(告知古代神之圣所发生的事情)", 37, 3001354, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#你是？天择者？哇塞，好酷啊！!", 37, 3001307, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#天择者？", 37, 3001310, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#水晶的时代到来了？", 37, 3001311, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#嗯。虽然是匆匆路过，但我记得很清楚。", 37, 3001354, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#莫非离获得古代水晶的力量又近了一步。", 37, 3001354, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#阿加特大人……我会拼尽全力完成你的遗愿！", 37, 3001354, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                } else if (status === V++) {
                                  cm.npc_LeaveField('oid=670781');
                                  cm.npc_LeaveField("oid=670782");
                                  cm.npc_LeaveField('oid=670783');
                                  cm.npc_LeaveField("oid=670784");
                                  cm.npc_LeaveField("oid=670785");
                                  cm.npc_LeaveField("oid=670786");
                                  cm.npc_LeaveField('oid=670787');
                                  cm.dispose();
                                  cm.warp(940202000, 0, true);
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
function randomNum(f, E) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * f + 1, 10);
    case 2:
      return parseInt(Math.random() * (E - f + 1) + f, 10);
    default:
      return 0;
  }
}