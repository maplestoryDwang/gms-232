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
      cm.npc_ChangeController(9401277, "oid=2750508", 450, 90, 19, 400, 500, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2750508", "summon", 0, 0);
      cm.npc_ChangeController(9401278, "oid=2750509", 580, 35, 5, 530, 630, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2750509", 'summon', 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.sendNewEffects(17, [0, 1000, 2000, 450, 140]);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#打个招呼吧。这是玄山派墨玄" + (cm.getPlayer().getGender() == 0 ? '公子' : '姑娘') + "和素笑姑娘。", 37, 9401278, false, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#哎呀，谁说不知道了？", 37, 9401299, true, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#河津的乞丐中，有哪个没吃过墨玄" + (cm.getPlayer().getGender() == 0 ? '公子' : '姑娘') + '一碗饭啊。', 37, 9401299, true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face1#……事情我听说了。请节哀顺变……", 37, 9401299, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0##b……谢谢。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face3#好了，这个先不说。最近在后巷徘徊的黑衣外乡人找到了吗？", 37, 9401278, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#大概从半个月前开始一直在眼前晃悠，去找的时候却发现不见了。", 37, 9401299, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face3#最后见到的人？", 37, 9401278, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face1#我是在三四天前见到的。在外围。", 37, 9401299, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face3#三四天吗……", 37, 9401278, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face2#嗯……不知道我有没有看错……", 37, 9401299, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom('#face3#说吧。', 37, 9401278, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face2#嗯，我……看见大师兄和黑衣人在一起。", 37, 9401299, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face3##b大师兄？", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face3#玄山派大师兄？你是说云雾公子吗？", 37, 9401278, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face1#哎呀，一定是看错了。", 37, 9401299, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#是的，我可不是信口开河。", 37, 9401299, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face8#……大师兄……为什么会……？", 37, 9401277, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#有可能是他看错了。你大师兄看到陌生人之后有可能会很警惕。", 37, 9401278, true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face2#哎呀，云雾公子应该不是那种人吧？呃，呃！", 37, 9401299, true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face2#喂，干嘛捂嘴啊？", 37, 9401299, true, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#拜托有点眼色，你这家伙。", 37, 9401299, true, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face1#别管那些家伙。我再打听一下。", 37, 9401278, true, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0##b……最好到街上去找找看有没有其他目击者。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#好主意。我们马上去吧！", 37, 9401278, true, true, 1);
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
                                                                  cm.forceCompleteQuest(65937);
                                                                  cm.gainExp(4779);
                                                                  cm.npc_LeaveField("oid=2750508");
                                                                  cm.npc_LeaveField("oid=2750509");
                                                                  cm.dispose();
                                                                  cm.warp(875001000, 5, false);
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
        }
      }
    }
  }
}