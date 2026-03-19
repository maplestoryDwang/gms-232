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
      cm.npc_ChangeController(9400932, 'oid=262120', -234, 318, 23, -284, -205, 5, true, 0, false);
      cm.npc_ChangeController(9400933, "oid=262121", -170, 318, 26, -170, -120, 5, true, 0, false);
      cm.npc_ChangeController(9400934, "oid=262122", -41, 318, 26, -91, 9, 5, true, 0, false);
      cm.npc_ChangeController(9400935, "oid=262123", -113, 318, 26, -163, -63, 5, true, 0, false);
      cm.npc_ChangeController(9400936, "oid=262124", -550, 279, 1, -570, -500, 4, true, 0, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
      cm.npc_ChangeController(9400928, "oid=91885574", -350, 300, 23, -400, -300, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=91885574", "summon", 0, 0);
      cm.npc_ChangeController(9400929, "oid=91885575", -430, 300, 23, -480, -380, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=91885575", "summon", 0, 0);
      cm.sendNewEffects(17, [0, 1000, 2000, -350, 400]);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(2000);
        } else {
          if (status === V++) {
            cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/amy/drink", 128);
            cm.npc_SetSpecialAction("oid=91885574", "drink", 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/amy/drink", 128);
              cm.inGameDirectionEvent_AskAnswerTime(1500);
            } else {
              if (status === V++) {
                cm.npc_SetSpecialAction("oid=91885574", "juice", -1, 0);
                cm.sendNormalTalk_Bottom("#face5#（咕咚咕咚……）", 37, 9400920, false, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/shade", "oid=91885574"], [0, 0, 0, 1, 0, 1, 0, 0]);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#b…", 57, 0, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom('#face0#…', 37, 9400921, true, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/shade", "oid=91885574"], [0, 0, 0, 1, 0, 1, 0, 0]);
                            cm.sendNormalTalk_Bottom("#face5#不是的……", 37, 9400920, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face5#也不是这个味道！！！！！", 37, 9400920, true, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whatl"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                cm.inGameDirectionEvent_AskAnswerTime(600);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom('#b怎么会呢？！', 57, 0, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face5#虽然很相似，但还不是当时喝过的那个果汁的味道。好像有什么不足……是什么呢……", 37, 9400920, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face3#艾米，够了……", 37, 9400921, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=91885574"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                          cm.setNpcSpecialActionReset("oid=91885574");
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face4#不是这样的。我要自己做！我一定要重现那个味道！", 37, 9400920, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#每次看到她那副歉意欲满满的样子，我就害怕……", 37, 9400923, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#（点头点头）", 37, 9400924, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face2##h0#！埃尔宾！！！", 37, 9400920, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#b嗯？", 57, 0, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face3#嗯……？", 37, 9400921, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face1#从现在开始，听好我需要的材料！一个都不许偷吃，一定要帮我找到！", 37, 9400920, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face1#首先，我需要味道酸甜的水果。", 37, 9400920, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face2#10个芒果，10个荔枝，3个火龙果，1个西瓜，3个苹果，3个橙子，1个柠檬，10个黄昏之露，10个冰块。很容易吧？", 37, 9400920, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#哎，艾米。那得找到什么时候……", 37, 9400921, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/flop", 100);
                                                                  cm.npc_SetSpecialAction("oid=91885574", 'flop', -1, 0);
                                                                  cm.sendNormalTalk_Bottom("#face5#果……汁……", 37, 9400920, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.npc_setForceFlip("oid=91885575", -1);
                                                                      cm.sendNormalTalk_Bottom("#face3#哎呦……#h0#。对不起……", 37, 9400921, false, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#b没关系，你要去寻找水果……吗？", 57, 0, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#所幸水果可以在市场上买到。我去市场看看。#h0#，你可以帮忙找到清晨之露和冰块吗？", 37, 9400921, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#b好的。", 57, 0, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face1#清晨之露可在村子药水店中获得，冰块可通过消灭冰峰雪域冰雪峡谷金海滩怪物后获得。", 37, 9400921, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face1##h0#，拜托你了。只要艾米恢复，我会请你吃大餐的。", 37, 9400921, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#b没关系的，你真的不用这样。", 57, 0, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.forceStartQuest(65434, '');
                                                                                    cm.sendNewEffects(14, [0, 2000, 1000, 0, 0]);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNewEffects(19, [0]);
                                                                                    } else if (status === V++) {
                                                                                      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                      cm.warp(871000000, 2, true);
                                                                                      cm.eventSKill(0);
                                                                                      cm.setInGameDirectionMode(false, true, false);
                                                                                      cm.npc_LeaveField("oid=91885574");
                                                                                      cm.npc_LeaveField("oid=91885575");
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
                }
              }
            }
          }
        }
      }
    }
  }
}