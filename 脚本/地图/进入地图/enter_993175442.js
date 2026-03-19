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
      cm.forceCompleteQuest(100454);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.npc_ChangeController(9062255, "oid=30248886", 100, 16, 1, 50, 150, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=30248886", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 0, 226);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.onTeleport(0, 3, cm.getPlayer().getId(), 38, 14);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("怎么什么都没有？#b忧郁的假面#k明明就在这里来着。", 56, 0, false, true, 1);
          } else {
            if (status === V++) {
              cm.npc_SetForceMove("oid=30248886", 1, 60, 100);
              cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1500, 1000, 170, 226);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(2000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#这个缝纫机……难道是。", 37, 9062255, false, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("你知道是谁的？", 56, 0, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#嗯，这个缝纫机分明……就是#b我爸爸#k的东西……爸爸他曾是#b人偶匠人#k。", 37, 9062255, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("你的父亲？你不是你的家人都被假面绅士杀死了吗？", 56, 0, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#对，我记得我的家人全部惨遭假面绅士的毒手，彻底消失了……\r\n这是怎么一回事呢？", 37, 9062255, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#而且爸爸他……爸爸他一直在这里吗……？\r\n为什么一直以来我都不知道呢？为什么我……", 37, 9062255, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_PushScaleInfo(1500, 0, 2000, 1500, 170, 286);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_InsertCanvas(1, 500, 255, 255, 255, 0, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                    cm.sendNormalTalk_Bottom("#face0#想不起来……我想不起来！", 37, 9062255, false, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 170, 226);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#我必须见到爸……爸爸。说不定，还能看到其他家人。", 37, 9062255, false, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("苏菲莉亚，你冷静一点。", 56, 0, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("忧郁的假面让我找这个照片，\r\n这个房子里是不是还有地方放着你的照片或者画像？", 56, 0, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#我的照片……", 37, 9062255, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#对了！#b2楼客厅#k挂着一幅我们的#b家族照片#k！", 37, 9062255, true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("那如果忧郁的假面就是你的父亲……那他肯定是去了那里。", 56, 0, true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#快！快去看看！", 37, 9062255, true, true, 1);
                                                  } else if (status === V++) {
                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
                                                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                    cm.setInGameDirectionMode(false, true, false);
                                                    cm.setStandAloneMode(false);
                                                    cm.npc_LeaveField("oid=30248886");
                                                    cm.dispose();
                                                    cm.warp(993175540, 0, false);
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}