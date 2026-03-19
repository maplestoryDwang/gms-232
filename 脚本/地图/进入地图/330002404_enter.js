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
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(1530180, "oid=37413488", 860, 20, 3, 810, 910, 1, true, false);
      cm.npc_SetSpecialAction("oid=37413488", "summon", 0, 0);
      cm.npc_ChangeController(1530240, "oid=37413489", 660, 20, 2, 610, 710, 0, true, false);
      cm.npc_SetSpecialAction("oid=37413489", "summon", 0, 0);
      cm.npc_ChangeController(1530300, "oid=37413490", 600, 20, 2, 550, 650, 0, true, false);
      cm.npc_SetSpecialAction("oid=37413490", "summon", 0, 0);
      cm.npc_ChangeController(1530310, "oid=37413491", 540, 20, 2, 490, 590, 0, true, false);
      cm.npc_SetSpecialAction("oid=37413491", "summon", 0, 0);
      cm.npc_ChangeController(1530270, "oid=37413492", 480, 20, 1, 430, 530, 0, true, false);
      cm.npc_SetSpecialAction("oid=37413492", "summon", 0, 0);
      cm.npc_ChangeController(1530280, "oid=37413493", 420, 20, 1, 370, 470, 0, true, false);
      cm.npc_SetSpecialAction("oid=37413493", "summon", 0, 0);
      cm.npc_ChangeController(1530110, "oid=37413494", 320, 20, 1, 270, 370, 0, true, false);
      cm.npc_SetSpecialAction("oid=37413494", "summon", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushMoveInfo(0, 120, 700, 58);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(6048);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("唉，吓死我了…… 你的尖叫声让我更害怕了！", 37, 1530110, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom('对，对不起……', 37, 1530240, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("最后那个孩子怎么样了？", 37, 1530270, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("他当时就晕倒了，第二天早上才被人发现。据说他一周后就转学了。", 37, 1530180, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("没错，我之前好像也听说过，说是有个孩子转学了。", 37, 1530270, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("我听说，最近天黑时音乐室总是会传出音乐声……\r\n呃呃，我再也不敢靠近音乐室了。", 37, 1530310, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("那个……难道真的有鬼吗？", 37, 1530240, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("哎咦，怎么可能！世界上哪来的鬼啊！", 37, 1530110, true, true);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                              cm.setAmbience("Ambience.img/horrorpiano", 100, 60);
                              cm.npc_setForceFlip("oid=37413492", -1);
                              cm.npc_setForceFlip("oid=37413493", -1);
                              cm.npc_setForceFlip("oid=37413491", -1);
                              cm.npc_setForceFlip("oid=37413490", -1);
                              cm.npc_setForceFlip("oid=37413489", -1);
                              cm.inGameDirectionEvent_PushMoveInfo(0, 120, 400, 58);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(2997);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("奥兹说的没错，世界上或许没有鬼。", 37, 1530180, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("不过，你不觉得很重吗？", 37, 1530180, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("什么很重？", 37, 1530110, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face1##r就是现在坐在你肩膀上的女孩#k啊。", 37, 1530180, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=37413494"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/shade", "oid=37413490"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/shade", "oid=37413489"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/shade", "oid=37413491"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/shade", "oid=37413492"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/shade", "oid=37413493"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                              cm.inGameDirectionEvent_AskAnswerTime(2500);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else {
                                                if (status === V++) {
                                                  cm.playSoundEffDirectly("Ambience.img/horrorpiano");
                                                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                  cm.effect_Voice("Voice2.img/Friends/CH2_06/17", 100);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.playVideoByScript("friendsStory.avi");
                                                      } else {
                                                        if (status === V++) {
                                                          cm.setAmbience("Ambience.img/schoolbell", 100, 60);
                                                          cm.inGameDirectionEvent_AskAnswerTime(200);
                                                          cm.effect_Text(["#fn黑体##fs24#Chapter 4\r\n#fs18#~ 占卜少女卡珊德拉与学校怪谈 ~"], [100, 2500, 4, 0, 0, 1, 4, 0, 0, 0]);
                                                          cm.effect_Voice("UI.img/MenuDown", 100);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(200);
                                                            cm.effect_Voice("UI.img/MenuUp", 100);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(200);
                                                              cm.effect_Voice("UI.img/WorldmapOpen", 100);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                cm.effect_Voice("UI.img/MenuDown", 100);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                  cm.effect_Voice("UI.img/MenuDown", 100);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                    cm.effect_Voice("UI.img/MenuUp", 100);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                      cm.effect_Voice("UI.img/WorldmapOpen", 100);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                        cm.effect_Voice("UI.img/WorldmapOpen", 100);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                          cm.effect_Voice("UI.img/MenuDown", 100);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                            cm.effect_Voice("UI.img/MenuUp", 100);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                              cm.effect_Voice("UI.img/DragStart", 100);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                cm.effect_Voice("UI.img/WorldmapOpen", 100);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                  cm.effect_Voice("UI.img/DragStart", 100);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                    cm.effect_Voice("UI.img/WorldmapOpen", 100);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                      cm.effect_Voice("UI.img/MenuUp", 100);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                        cm.effect_Voice("UI.img/DragStart", 100);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_Monologue("#fs30#\r\n\r\n#fNpc/1530115.img/stand/0#    Hidden Mission：民以食为天#fs18#\r\n\r\n                   HINT：有什么办法能安慰哭泣的奥兹呢？", 1);
                                                                                            cm.effect_Voice("Field.img/flowervioleta/wink", 100);
                                                                                          } else if (status === V++) {
                                                                                            cm.forceStartQuest(33049, '');
                                                                                            cm.forceStartQuest(32850, '');
                                                                                            cm.forceCompleteQuest(32850);
                                                                                            cm.gainExp(Math.pow(cm.getLevel(), 3));
                                                                                            cm.forceStartQuest(32704, '');
                                                                                            cm.dispose();
                                                                                            cm.cancelItem(2210132);
                                                                                            cm.warp(330000000, 1);
                                                                                            cm.inGameDirectionEvent_SetHideEffect(0);
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
                      }
                    }
                  }
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