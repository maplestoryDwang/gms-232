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
      cm.npc_ChangeController(9401277, "oid=367383", -1000, 10, 30, -1050, -950, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=367383", "summon", 0, 0);
      cm.sendNewEffects(17, [0, 1000, 2000, -1400, 60]);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.effect_Text(["#fn黑体##fs18##e第二天早晨，玄山派入口。", ''], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0, 0]);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.npc_SetForceMove("oid=367383", -1, 330, 150);
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face2#" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + '？' + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "！墨玄" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + '！', 37, 9401277, false, true, 1);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face2#难道？！" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "，你要和我一起下山去吗？", 37, 9401277, false, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face1##b素笑，好像很少有事情会让你这么紧张吧。你在旁边看着。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face2#就差一点点，不过~！墨玄" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + '，还是你最厉害！', 37, 9401277, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face2#我去商店买糖果给你吃！", 37, 9401277, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face2##b哈哈，是啊，真好。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.npc_ChangeController(9401279, 'oid=367393', -1000, 10, 30, -1050, -950, 1, true, 0, false);
                            cm.npc_SetSpecialAction("oid=367393", "summon", 0, 0);
                            cm.npc_SetForceMove('oid=367393', -1, 220, 100);
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.npc_setForceFlip("oid=367383", 1);
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.sendNewEffects(13, [1000, 80, 0]);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#准备好了么？", 37, 9401279, false, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face3#是，大师兄！", 37, 9401277, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#因为有客人，但是掌门人无法亲自过来。大家别太失望。", 37, 9401279, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#从玄山派出去之后，凡事必须小心，不要给玄山派抹黑。", 37, 9401279, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face3#别担心，大师兄！", 37, 9401277, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#……墨玄，有你一起去我就放心了。照顾好" + (cm.getPlayer().getGender() == 0 ? '师弟' : '师妹') + '。', 37, 9401279, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0##b是。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#……一定要在天黑之前回来。", 37, 9401279, true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#好的好的，知道了！", 37, 9401277, true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.forceCompleteQuest(65926);
                                                    cm.gainExp(857);
                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 600, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(900);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNewEffects(14, [0, 2000, 1000]);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNewEffects(19, [0]);
                                                      } else if (status === V++) {
                                                        cm.dispose();
                                                        cm.warp(875000000, 1, false);
                                                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                        cm.setInGameDirectionMode(false, true, false);
                                                        cm.npc_LeaveField("oid=367383");
                                                        cm.npc_LeaveField('oid=367393');
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}