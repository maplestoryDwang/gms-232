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
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_ForcedFlip(1);
      cm.npc_ChangeController(9401123, "oid=17454394", -460, 70, 9, -510, -410, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=17454394", "summon", 0, 0);
      cm.npc_ChangeController(9401124, "oid=17454395", -520, 70, 9, -570, -470, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=17454395", "summon", 0, 0);
      cm.npc_ChangeController(9401052, "oid=17454396", -200, 70, 3, -250, -150, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=17454396", "summon", 0, 0);
      cm.sendNewEffects(17, [0, 1000, 2000, -260, 120]);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(300);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("哦哦～～这里这里。我正等你呢。", 37, 9401052, false, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_同时移动镜头和人(2, 70);
              cm.inGameDirectionEvent_AskAnswerTime(2000);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("先看看物品吧，请交给我吧。", 37, 9401052, false, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_同时移动镜头和人(2, 20);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/questEffect/Abyss/0"], [3000, 0, 0, 1, 0, 0, 0, 0]);
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("我看看……状态真不错呢。谢谢，我会好好使用它的！", 37, 9401052, false, true);
                          cm.npc_LeaveField("oid=17452692");
                          cm.npc_LeaveField("oid=17452693");
                        } else {
                          if (status === V++) {
                            cm.npc_setForceFlip("oid=17454396", 1);
                            cm.inGameDirectionEvent_AskAnswerTime(300);
                          } else {
                            if (status === V++) {
                              cm.npc_SetForceMove("oid=17454396", 1, 1500, 300);
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#b？", 57, 0, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("诶嘿嘿，又解决一件！你就当自己干了件好事吧～～笨笨的远征队队长！", 37, 9401052, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("这也是一种经验，诶嘿嘿嘿！", 37, 9401052, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.Npc_Fadeout("oid=17454396", 0, 3000);
                                      cm.emotion(9, 3000);
                                      cm.sendNormalTalk_Bottom("#b…？", 57, 0, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_ForcedFlip(-1);
                                        cm.sendNormalTalk_Bottom("… ", 37, 9401029, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("… ", 37, 9401030, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                            cm.npc_LeaveField("oid=17454396");
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("我，我们这是……被骗了？", 37, 9401029, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_SetForceMove("oid=17454394", 1, 100, 100);
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("看来是的。", 37, 9401030, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_SetForceMove("oid=17454395", 1, 100, 100);
                                                    cm.sendNormalTalk_Bottom("#b……这……这是什么事…… ", 57, 0, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("诶咦咦咦！", 37, 9401029, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_ForcedFlip(1);
                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_同时移动镜头和人(2, 100);
                                                          cm.sendNewEffects(13, [3000, 1000, 0, 0, 0]);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#b……好快啊，也不知道她去了哪里。", 57, 0, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("……你就算发火也没有用，就像那个骗子少女说的那样，把这当成是一种经验吧。", 37, 9401030, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNewEffects(12, [0, -260, 120, 0, 0]);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("额啊啊啊！我就是生气怎么办！", 37, 9401029, false, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("当你出现这种没有意义的情绪时，当然要用身体发泄了，再去一趟深渊吧。", 37, 9401030, true, true);
                                                                    } else if (status === V++) {
                                                                      cm.eventSKill(0);
                                                                      cm.warp(867147001, 0, false);
                                                                      cm.setInGameDirectionMode(false, true, false);
                                                                      cm.forceCompleteQuest(64773);
                                                                      cm.gainItem(4036661, -2);
                                                                      cm.gainItem(4036662, -2);
                                                                      cm.npc_LeaveField("oid=17454394");
                                                                      cm.npc_LeaveField("oid=17454394");
                                                                      cm.npc_LeaveField("oid=17454395");
                                                                      cm.npc_LeaveField("oid=17454395");
                                                                      cm.npc_LeaveField("oid=17454396");
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