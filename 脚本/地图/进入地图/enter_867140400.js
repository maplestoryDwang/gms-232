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
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(9390300, "oid=19883586", -1229, 701, 22, -1279, -1179, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=19883586", "summon", 0, 0);
      cm.npc_ChangeController(9390302, "oid=19883587", -1089, 701, 22, -1139, -1039, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=19883587", "summon", 0, 0);
      cm.npc_ChangeController(9390301, "oid=19883588", -986, 701, 22, -1036, -936, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=19883588", "summon", 0, 0);
      cm.npc_ChangeController(9390303, "oid=19883589", -1009, 578, 8, -1059, -959, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=19883589", "summon", 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.npc_setForceFlip("oid=19883586", -1);
      cm.npc_setForceFlip("oid=19883587", -1);
      cm.npc_setForceFlip("oid=19883588", -1);
      cm.npc_setForceFlip("oid=19883589", -1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 1300, 3000, -1317, 701);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(3800);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("嘿嘿，亚柏兰依旧这么安宁呢。真的太好了！", 57, 0, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#安宁的村子今天分外热闹啊！", 37, 9390300, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#是因为货真价实的英雄来过了哦！", 37, 9390300, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#Yas~(姿势够swag吧？) BOSS！BOSS虽然很小只，却是拯救冒险岛世界的大英雄。", 37, 9390302, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#我吃了很多好吃的呢。嘿嘿嘿。", 37, 9390301, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#哎呦，这个只知道吃的笨蛋。", 37, 9390303, true, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("嗯……要说是大英雄……", 57, 0, false, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_ForcedFlip(1);
                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("我在冒险岛世界中结识了许多人，经历了许多困难后才醒悟。", 57, 0, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("我没有成为童话中无所不能的大英雄。", 57, 0, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("我一个人的力量微乎其微。都是因为大家的力量，我才能成功。", 57, 0, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("朋友们，真正的英雄不是我，而是你们啊。", 57, 0, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#哎呀~哎呀~什么嘛。平常也要有点BOSS的样子嘛。", 37, 9390302, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#你是不是吃得太少了？肚子饿才会那样的。波波肚子饿的话也会没有力气的。", 37, 9390301, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#我知道你的心意。但这些傻瓜没有你可怎么办啊？", 37, 9390303, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#我们都是因为有你的存在才相伴至今啊。", 37, 9390303, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0##h0#，还记得我们第一次见面的场景吗？", 37, 9390300, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#你把我从笼中救了出来。", 37, 9390300, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#我一直觉得所谓英雄并不需要有多么了不起的事迹。当你把我从铁栅栏里救出来的那一瞬间，你就已经是我心目中的英雄啦！", 37, 9390300, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("各位……谢谢你们。", 57, 0, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_OneTimeAction(113, 1000);
                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("太太太太太棒了！我不会满足于仅做冒险岛世界的英雄！", 57, 0, false, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("朋友们！我们以后会一直在一起吧？", 57, 0, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#BOSS，就是这个feel！走起！", 37, 9390302, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#嘿嘿，波波也喜欢这样！波波好饿哦！我们去吃好吃的吧！", 37, 9390301, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#哼，没办法。还有谁能照顾这些傻瓜呢？", 37, 9390303, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#很好！#h0#，让我们动物英雄团的美名广为人知吧！！", 37, 9390300, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_同时移动镜头和人(1, 100);
                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1500, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.fieldEffect_ProcessOnOffLayer('00', "Effect/DirectionPL.img/effect/restart_BT/0", 0, 1500, 0, -60, 12, 4, 0);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("更广阔的的世界正在召唤我！成为大英雄的路还很漫长！", 57, 0, false, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.fieldEffect_Hero9(0, 3000);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk("喳喳！！", 4, 3004150, false, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk("嗯？摩柯？又有什么事？", 2, 0, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk("(摩柯递过来一封信。)", 4, 3004150, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk("啊！发件人是女皇陛下。", 2, 0, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                  cm.sendNormalTalk("亲爱的#h0#，\r\n\r\n不知你近来过得可好，在历经数百年的战争消弭之后，我和我的骑士团正过着平静又繁忙的日子。\r\n\r\n（……中间省略）\r\n\r\n还请你谅解，事关重大，我没办法在信中详述，希望能尽快在#r前哨基地#k见一面。\r\n\r\n\t\t\t\t\t\t\t\t\t女皇#b希纳斯#k敬上。", 4, 3003916, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk("该不会是出了什么事吧？赶紧过去看看吧。", 2, 0, true, true);
                                                                                                  } else if (status === V++) {
                                                                                                    cm.forceStartQuest(39701, '');
                                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                                    cm.dispose();
                                                                                                    cm.warp(993120000, 5, false);
                                                                                                    cm.npc_LeaveField("oid=19883586");
                                                                                                    cm.npc_LeaveField("oid=19883586");
                                                                                                    cm.npc_LeaveField("oid=19883587");
                                                                                                    cm.npc_LeaveField("oid=19883587");
                                                                                                    cm.npc_LeaveField("oid=19883588");
                                                                                                    cm.npc_LeaveField("oid=19883588");
                                                                                                    cm.npc_LeaveField("oid=19883589");
                                                                                                    cm.npc_LeaveField("oid=19883589");
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
}