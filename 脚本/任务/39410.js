var status = -1;
var selectionLog = [];
function start(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.sendNormalTalk_Bottom("#face2#（果然……立刻就出现了呢。）", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#该隐，你已经脱离了作战地区啊。", 36, 3004907, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#啊，就是因为这个才无能为力的，你看。\r\n（……这么敷衍一下就可以了吧。）", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#这是手册呢，嗯……这东西是哪儿来的？", 36, 3004907, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0#在那个可疑的家伙手上，不过那家伙现在逃走了。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0#你还记得对方的长相和穿着打扮吗？", 36, 3004907, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom('#face0#嗯。', 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face0#那你就先回去吧，我得向上级报告，再组织追剿部队才行。", 36, 3004907, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.curNodeEventEnd(true);
                      cm.setInGameDirectionMode(true, false, false);
                      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
                      cm.setStandAloneMode(true);
                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                    } else {
                      if (status === v++) {
                        cm.npc_ChangeController(3004909, "oid=564630", -400, -800, 1, -450, -350, 0, true, 0, false);
                        cm.npc_SetSpecialAction("oid=564630", "summon", 0, 0);
                        cm.npc_ChangeController(3004912, 'oid=564631', -470, -800, 1, -520, -420, 0, true, 0, false);
                        cm.npc_SetSpecialAction('oid=564631', "summon", 0, 0);
                        cm.npc_ChangeController(3004912, "oid=564632", -540, -800, 1, -590, -490, 0, true, 0, false);
                        cm.npc_SetSpecialAction('oid=564632', 'summon', 0, 0);
                        cm.inGameDirectionEvent_PushScaleInfo(5000, 0, 1500, 5000, -403, -800);
                      } else {
                        if (status === v++) {
                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                        } else {
                          if (status === v++) {
                            cm.fieldEffect_PlayBGM("Bgm56/DoubtYou", 0, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(4000);
                          } else {
                            if (status === v++) {
                              cm.sendNormalTalk_Bottom('#face0#……', 36, 3004909, false, true, 1);
                            } else {
                              if (status === v++) {
                                cm.inGameDirectionEvent_AskAnswerTime(2500);
                              } else {
                                if (status === v++) {
                                  cm.sendNormalTalk_Bottom("#face0#看起来情况并不太妙。", 36, 3004910, false, true, 1);
                                } else {
                                  if (status === v++) {
                                    cm.npc_ChangeController(3004910, "oid=564633", -500, -900, 2, -550, -450, 0, true, 1000, false);
                                    cm.npc_SetSpecialAction("oid=564633", "summon", 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === v++) {
                                      cm.npc_setForceFlip('oid=564630', -1);
                                      cm.npc_ChangeController(3004911, "oid=564634", -570, -900, 2, -620, -520, 0, true, 1000, false);
                                      cm.npc_SetSpecialAction("oid=564634", "summon", 0, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(2500);
                                    } else {
                                      if (status === v++) {
                                        cm.sendNormalTalk_Bottom("#face0#这样一来，情况就变得不一样了吧？\r\n不如趁现在撤……", 36, 3004911, false, true, 1);
                                      } else {
                                        if (status === v++) {
                                          cm.sendNormalTalk_Bottom("#face0#……事到如今总不能由着他脱身。", 36, 3004910, true, true, 1);
                                        } else {
                                          if (status === v++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                          } else {
                                            if (status === v++) {
                                              cm.sendNormalTalk_Bottom("#face0#一定要想办法处理啊。", 36, 3004910, false, true, 1);
                                            } else {
                                              if (status === v++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                              } else {
                                                if (status === v++) {
                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                } else if (status === v++) {
                                                  cm.npc_LeaveField("oid=564630");
                                                  cm.npc_LeaveField("oid=564631");
                                                  cm.npc_LeaveField("oid=564632");
                                                  cm.npc_LeaveField('oid=564633');
                                                  cm.npc_LeaveField("oid=564634");
                                                  cm.dispose();
                                                  cm.warp(993164009, 0, true);
                                                  cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                  cm.setInGameDirectionMode(false, true, false);
                                                  cm.setStandAloneMode(false);
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function stage0(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceStartQuest();
      cm.dispose();
    }
  }
}
function end(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      var e = cm.getQuest();
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceCompleteQuest();
      cm.dispose();
    }
  }
}