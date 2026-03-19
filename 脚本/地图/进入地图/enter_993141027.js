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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 450, 70);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(3004442, 'oid=529901', 600, 30, -1, 0, 1000, 1, true, 0, false);
        cm.npc_SetSpecialAction('oid=529901', 'summon', 0, 0);
        cm.npc_ChangeController(3004444, "oid=529902", 600, 80, -1, 0, 1000, 1, true, 0, false);
        cm.npc_SetSpecialAction('oid=529902', "summon", 0, 0);
        cm.npc_ChangeController(3004430, "oid=529903", 500, 60, -1, 0, 1000, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=529903", "summon", 0, 0);
        cm.npc_ChangeController(3004437, "oid=529904", 550, 90, -1, 0, 1000, 1, true, 0, false);
        cm.npc_SetSpecialAction('oid=529904', "summon", 0, 0);
        cm.npc_ChangeController(3004437, "oid=529905", 725, 80, -1, 0, 1000, 1, true, 0, false);
        cm.npc_SetSpecialAction('oid=529905', "summon", 0, 0);
        cm.npc_ChangeController(3004437, "oid=529906", 725, 25, -1, 0, 1000, 1, true, 0, false);
        cm.npc_SetSpecialAction('oid=529906', "summon", 0, 0);
        cm.npc_ChangeController(3004437, 'oid=529907', 680, 0, -1, 0, 1000, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=529907", 'summon', 0, 0);
        cm.npc_SetForceMove("oid=529901", -1, 450, 70);
        cm.npc_SetForceMove("oid=529902", -1, 450, 70);
        cm.npc_SetForceMove("oid=529903", -1, 450, 70);
        cm.npc_SetForceMove("oid=529904", -1, 450, 70);
        cm.npc_SetForceMove("oid=529905", -1, 450, 70);
        cm.npc_SetForceMove('oid=529906', -1, 450, 70);
        cm.npc_SetForceMove('oid=529907', -1, 450, 70);
        cm.npc_ChangeController(3004443, "oid=530136", -180, 30, -1, -1000, 0, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=530136", "summon", 0, 0);
        cm.npc_ChangeController(3004445, 'oid=530135', -220, 80, -1, -1000, 0, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=530135", "summon", 0, 0);
        cm.npc_ChangeController(3004437, "oid=530137", -325, 80, -1, -1000, 0, 1, true, 0, false);
        cm.npc_SetSpecialAction('oid=530137', "summon", 0, 0);
        cm.npc_ChangeController(3004437, "oid=530138", -350, 25, -1, -1000, 0, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=530138", 'summon', 0, 0);
        cm.npc_ChangeController(3004437, "oid=530139", -300, 0, -1, -1000, 0, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=530139", 'summon', 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(0);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_PushMoveInfo(0, 20, -800, 88);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(8000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#请止步，守护者。", 37, 3004443, false, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushScaleInfo(2500, 0, 1500, 2500, -100, 50);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(4000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#请你退下，大神官大人。我现在正在按规程执行法律。", 37, 3004430, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#莫非您准备驱逐他们？", 37, 3004443, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#如今城外到处是#r不信神者#k，驱逐他们无异于在宣判死刑啊？", 37, 3004443, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#判决不归我管。", 37, 3004430, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#但执行是您的事情。", 37, 3004445, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#恳请您再好好考虑一下。", 37, 3004443, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#该法令将以#b主神密特拉#k以及#b塞尔提乌王室#k的名义执行。", 37, 3004430, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#两位都明白，妨碍它意味着什么。", 37, 3004430, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#可是……密特拉并非我们的神。", 37, 3004443, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=529904"], [0, 0, -50, 1, 0, 1, 0, 0]);
                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=529905"], [0, 0, -50, 1, 0, 1, 0, 0]);
                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#没错，那个名字无法制约我们。", 37, 3004445, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#我们所期望的只有一件事。\r\n那就是找到亵渎黎明的人，然后让他们谢罪。", 37, 3004443, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#我们所期望的还有一事，就是再也不要与他们见面了。", 37, 3004445, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom('#face0#……', 37, 3004430, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#我知道了。", 37, 3004430, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face3#请将他们也一并逮捕。", 37, 3004430, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                          } else if (status === V++) {
                                                            cm.warp(410000620, 0, false);
                                                            cm.eventSKill(0);
                                                            cm.setInGameDirectionMode(false, true, false);
                                                            cm.setStandAloneMode(false);
                                                            cm.forceCompleteQuest(39807);
                                                            cm.gainExp(25 * Math.pow(cm.getLevel(), 3));
                                                            cm.updateInfoQuest(39800, "01=h0;02=h0;11=h1;04=h0;05=h1;06=h1;07=h1;08=h1;09=h1");
                                                            cm.npc_LeaveField('oid=529901');
                                                            cm.npc_LeaveField('oid=529901');
                                                            cm.npc_LeaveField("oid=529902");
                                                            cm.npc_LeaveField('oid=529902');
                                                            cm.npc_LeaveField("oid=529903");
                                                            cm.npc_LeaveField("oid=529903");
                                                            cm.npc_LeaveField('oid=529904');
                                                            cm.npc_LeaveField('oid=529904');
                                                            cm.npc_LeaveField('oid=529905');
                                                            cm.npc_LeaveField("oid=529905");
                                                            cm.npc_LeaveField("oid=530135");
                                                            cm.npc_LeaveField("oid=530135");
                                                            cm.npc_LeaveField("oid=530136");
                                                            cm.npc_LeaveField("oid=530136");
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