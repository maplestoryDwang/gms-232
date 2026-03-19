var status = -1;
var selectionLog = [];
function start() {
  status = -1;
  action(1, 0, 0);
}
;
function action(f, E, e) {
  cm.cancelItem(2210191);
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
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -727, -90);
      cm.npc_ChangeController(2074154, "oid=1943302", -990, -137, 11, -1040, -940, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=1943302", "summon", 0, 0);
      cm.npc_ChangeController(2074100, "oid=1943303", -795, -68, 7, -845, -745, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=1943303", "summon", 0, 0);
      cm.npc_ChangeController(2074105, "oid=1943304", -657, -64, 5, -707, -607, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=1943304", "summon", 0, 0);
      cm.npc_ChangeController(2074136, "oid=1943305", -600, -33, 5, -650, -550, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=1943305", "summon", 0, 0);
      cm.npc_ChangeController(2074107, "oid=1943306", -547, -19, 4, -597, -497, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=1943306", "summon", 0, 0);
      cm.npc_ChangeController(2074150, "oid=1943307", -499, -19, 4, -549, -449, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=1943307", "summon", 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.sendNormalTalk_Bottom("小，小可爱啊？", 37, 2074105, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face0#……我现在都想起来了，\r\n我曾经是谁，还有这到底是怎么一回事，\r\n包括……我到底该做什么……", 37, 2074100, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("我说，你这是什么意思啊。", 37, 2074105, true, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.npc_SetForceMove("oid=1943303", -1, 100, 100);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("小可爱啊！不可以！你回来！", 37, 2074105, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#额啊啊！你什么状况？你想先死吗？", 37, 2074154, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#……一直以来你都一个人，很孤单吧？", 37, 2074100, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#你说什么胡话呢？你别打算安慰我！", 37, 2074154, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#你过来……", 37, 2074100, true, true);
                      } else {
                        if (status === V++) {
                          cm.npc_SetForceMove("oid=1943303", -1, 20, 100);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#搞什么？你，你做什么，\r\n你打算耍什么花招！", 37, 2074154, false, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(300);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 300, 0);
                                cm.npc_SetSpecialAction("oid=1943303", "pain3", -1, 1);
                                cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/Downtown2015/DarkEffectM", "oid=1943303"], [1500, 0, 0, 1, 0, 1, 0, 0]);
                                cm.inGameDirectionEvent_AskAnswerTime(300);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 300, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_InsertCanvas(1, 80, 0, 0, 0, 300, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 300, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("小可爱啊！不可以！你的身体！", 37, 2074105, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face3#额，没关系，现在我不会让你一个人了，\r\n我不过是在偿还我犯下的罪责罢了。", 37, 2074100, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face1#我实在是搞不懂你在说什么，\r\n你，到底是什么人？", 37, 2074154, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face1#我的样子稍微变了点吧……鬼怪啊，是我。", 37, 2074100, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face2#一边去！你想耍什么花招！", 37, 2074154, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom('#face3#额！！', 37, 2074100, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("小可爱啊！", 37, 2074105, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face1#好吧……没关系，\r\n让那么无微不至的你变成这样……\r\n都是我的错……", 37, 2074100, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#说谎……你，搞什么，真的……真的，是你吗？", 37, 2074154, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face1#嗯，小白我，回来了。", 37, 2074100, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face1#你，怎么会……你怎么会，\r\n变成了人类，额！啊啊！宝玉……", 37, 2074154, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 300, 0);
                                                              cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/Downtown2015/DarkEffectM", "oid=1943303"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 300, 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom('该死，宝玉暴走了！', 37, 2074105, false, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face3#啊啊啊！", 37, 2074100, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("小可爱啊！", 37, 2074105, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face1#一边去！离我远点！\r\n我可以阻止暴走……额！啊啊！", 37, 2074154, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face3#不，只要我陪你一起，就可以抑制住……\r\n额！啊啊啊！", 37, 2074100, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face1#求你了！别过来！\r\n求你了……我不想再失去你！", 37, 2074154, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face3#……啊！不，只要我们在一起就可以阻止……\r\n啊啊！", 37, 2074100, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face1#……额啊啊啊啊啊！\r\n求你了……啊……", 37, 2074154, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("该死，难道没有办法了吗！\r\n小可爱啊！鬼怪啊！", 37, 2074105, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face1#额！不，方法……！\r\n没错，额！方法……是有的……", 37, 2074154, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face3#不……不可以，你不要这样……", 37, 2074100, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face2#我这是在偿还……做错的代价。", 37, 2074154, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face3#不要！", 37, 2074100, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom('那个，直接从悬崖上！', 37, 2074105, false, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face2##g(从悬崖上跳了下去。)", 37, 2074154, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face3##fs22#不要！", 37, 2074100, true, true);
                                                                                                } else if (status === V++) {
                                                                                                  cm.dispose();
                                                                                                  cm.warp(224000082, 1, true);
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
      }
    }
  }
}