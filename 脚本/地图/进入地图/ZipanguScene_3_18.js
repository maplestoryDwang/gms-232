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
      cm.forceCompleteQuest(58754);
      cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) * 4);
      cm.gainExp(Math.pow(cm.getLevel(), 3) * 4);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1500);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_同时移动镜头和人(2, 500);
            cm.inGameDirectionEvent_AskAnswerTime(5000);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_同时移动镜头和人(1, 150);
              cm.inGameDirectionEvent_AskAnswerTime(1500);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_同时移动镜头和人(2, 100);
                cm.inGameDirectionEvent_AskAnswerTime(1500);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("(没人在吗……)", 57, 0, false, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_同时移动镜头和人(1, 50);
                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_同时移动镜头和人(2, 50);
                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("(话说回来，大太法师好像说过水之五行创造了神……)", 57, 0, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("(可是鵺并不能称为神啊……嗯……)", 57, 0, true, true);
                        } else {
                          if (status === V++) {
                            cm.npc_ChangeController(9111000, "oid=3835643", 2405, -290, 12, 2355, 2455, 1, true, 0, false);
                            cm.npc_SetSpecialAction("oid=3835643", "summon", 0, 0);
                            cm.sendNormalTalk_Bottom("#face0#你回来了！带回水之五行了吗？", 37, 9111000, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("啊，是的。给你。", 57, 0, true, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/JP_zipang/getWater", "oid=3835643"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                cm.sendNormalTalk_Bottom("#face0#谢谢你！已经集齐三个了……", 37, 9111000, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("镰鼬和天狗有帮了我很多……", 57, 0, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#……你说妖怪帮忙了……。", 37, 9111000, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#……你有时候说的话跟竹野子一样啊。", 37, 9111000, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                          cm.sendNormalTalk_Bottom("(呃！我是要挨训了吗！)", 57, 0, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#……谢谢。", 37, 9111000, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                cm.sendNormalTalk_Bottom("#face0#……接下来还剩2个五行。\r\n以后也要多多拜托你了。", 37, 9111000, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("……哈哈，没问题。", 57, 0, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_SlideText('#fs15#继续。', 1, 1);
                                                    } else if (status === V++) {
                                                      cm.eventSKill(0);
                                                      cm.warp(800000000, 1, true);
                                                      cm.setInGameDirectionMode(false, true, false);
                                                      cm.npc_LeaveField("oid=3835643");
                                                      cm.npc_LeaveField("oid=3835643");
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