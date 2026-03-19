var status = -1;
var selectionLog = [];
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
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -3348, -255);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.npc_ChangeController(2074100, "oid=2586590", -3403, -228, 53, -3453, -3353, 1, true, 500, false);
      cm.npc_SetSpecialAction("oid=2586590", 'summon', 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -3463, -214);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("哎哟喂，小叔子，你这突然往脸上做什么呢？", 37, 2074108, false, true);
      } else {
        if (status === V++) {
          cm.npc_ChangeController(2074108, "oid=2586604", -3484, -228, 71, -3534, -3434, 1, false, 500, false);
          cm.npc_SetSpecialAction("oid=2586604", "summon", 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("老公！你也赶紧出来，别理会这种疯子了。", 37, 2074108, false, true);
          } else {
            if (status === V++) {
              cm.npc_ChangeController(2074107, "oid=2586611", -3588, -228, 60, -3638, -3538, 0, true, 500, false);
              cm.npc_SetSpecialAction("oid=2586611", 'summon', 0, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("哎哟喂，这家伙可真是力大无穷，实在是拦不住啊！", 37, 2074107, false, true);
              } else {
                if (status === V++) {
                  cm.npc_ChangeController(2074106, "oid=2586631", -3540, -228, 60, -3590, -3490, 0, true, 500, false);
                  cm.npc_SetSpecialAction("oid=2586631", "summon", 0, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("大嫂！你这是要往哪儿逃啊！", 37, 2074106, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#哦，那个人好像就是兴夫啊？\r\n让我瞧瞧，#b万花筒#k……在这儿。", 37, 2074100, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#b(将万花筒放在眼睛上。)#k", 57, 0, true, true);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(250);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
                            cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/Downtown2015/DarkEffectM", "oid=2586631"], [8000, 0, 0, 1, 0, 1, 0, 0]);
                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(600);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(700);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#哦，没错！没错，兴夫身上附着宝玉！", 37, 2074100, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#像这样用#b万花筒#k就能看到#r宝玉气息#k了，\r\n那边兴夫身上的正是宝玉气息。", 37, 2074100, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(250);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_InsertCanvas11(0, 0, 0, 0, 0, 0);
                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(600);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(700);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("啊！脸上这是怎么回事嘛！！！！！！！\r\n啊……啊啊", 37, 2074108, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_SetSpecialAction("oid=2586604", 'die', -1, 1);
                                            cm.fieldEffect_PlayFieldSound("Aran/down", 100);
                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2586611"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_setForceFlip("oid=2586631", -1);
                                              cm.sendNormalTalk_Bottom("接下来就轮到大哥了。", 37, 2074106, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom('咦！', 37, 2074107, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_setForceFlip("oid=2586611", -1);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_LeaveField("oid=2586611");
                                                    cm.sendNormalTalk_Bottom("大哥！你觉得还能逃得掉吗？", 37, 2074106, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face2#那个，先等一下！", 37, 2074100, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.npc_LeaveField("oid=2586631");
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face2#该死，可不能错过了啊？", 37, 2074100, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face2#大婶，你没事吗？大婶！", 37, 2074100, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_LeaveField("oid=2586590");
                                                                  cm.npc_SetSpecialAction("oid=2586604", "die2", -1, 1);
                                                                  cm.sendNormalTalk_Bottom("#face2#哎哟，脸上这白的……这是什么？", 37, 2074100, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face2#啊！知道这是什么了吗？\r\n这些都是……#b饭粒#k。\r\n怎么能对女人的脸做这么可怕的事情。", 37, 2074100, true, true);
                                                                  } else if (status === V++) {
                                                                    cm.updateInfoQuest(30404, "gExpCheck=1");
                                                                    cm.forceStartQuest(30404, '');
                                                                    cm.forceCompleteQuest(30404);
                                                                    cm.forceStartQuest(30911, '1');
                                                                    cm.forceStartQuest(30920, '1');
                                                                    cm.forceCompleteQuest(30920);
                                                                    cm.gainExp(142059);
                                                                    cm.forceForfeitQuest(30920);
                                                                    cm.updateInfoQuest(30920, '');
                                                                    cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                                                    cm.npc_LeaveField("oid=2586604");
                                                                    cm.dispose();
                                                                    cm.warp(224000000, 20, true);
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
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;