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
      cm.setStandAloneMode(true);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 1150, 105);
      cm.npc_ChangeController(3004430, 'oid=859793', 1360, 105, 4, 1310, 1410, 1, true, 0, false);
      cm.npc_SetSpecialAction('oid=859793', "summon", 0, 0);
      cm.npc_ChangeController(3004431, "oid=859794", 1290, 105, 4, 1240, 1340, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=859794", "summon", 0, 0);
      cm.npc_ChangeController(3004436, 'oid=859795', 980, 105, 3, 930, 1030, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=859795", "summon", 0, 0);
      cm.npc_ChangeController(3004435, "oid=859796", 1050, 105, 4, 1000, 1100, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=859796", 'summon', 0, 0);
      cm.npc_ChangeController(3004437, 'oid=859797', 1550, 105, 5, 1500, 1600, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=859797", "summon", 0, 0);
      cm.npc_ChangeController(3004437, "oid=859798", 1620, 105, 5, 1570, 1670, 1, true, 0, false);
      cm.npc_SetSpecialAction('oid=859798', 'summon', 0, 0);
      cm.npc_ChangeController(3004437, 'oid=859799', 1690, 105, 5, 1640, 1740, 1, true, 0, false);
      cm.npc_SetSpecialAction('oid=859799', "summon", 0, 0);
      cm.npc_ChangeController(3004441, "oid=859800", -150, 105, 1, -200, -100, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=859800", "summon", 0, 0);
      cm.npc_ChangeController(3004439, "oid=859801", -270, 105, 1, -320, -220, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=859801", "summon", 0, 0);
      cm.npc_ChangeController(3004439, 'oid=859802', -340, 105, 1, -390, -290, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=859802", "summon", 0, 0);
      cm.npc_ChangeController(3004437, "oid=859803", 850, 105, 3, 800, 900, 0, true, 0, false);
      cm.npc_SetSpecialAction('oid=859803', "summon", 0, 0);
      cm.npc_ChangeController(3004437, 'oid=859804', 780, 105, 3, 730, 830, 0, true, 0, false);
      cm.npc_SetSpecialAction('oid=859804', "summon", 0, 0);
      cm.npc_ChangeController(3004437, "oid=859805", 700, 105, 3, 650, 750, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=859805", "summon", 0, 0);
      cm.npc_ChangeController(3004444, 'oid=859806', 570, 105, 3, 520, 620, 0, true, 0, false);
      cm.npc_SetSpecialAction('oid=859806', 'summon', 0, 0);
      cm.npc_ChangeController(3004444, "oid=859807", 500, 105, 3, 450, 550, 0, true, 0, false);
      cm.npc_SetSpecialAction('oid=859807', "summon", 0, 0);
      cm.npc_ChangeController(3004437, "oid=859808", 430, 105, 3, 380, 480, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=859808", 'summon', 0, 0);
      cm.npc_ChangeController(3004442, "oid=859809", 300, 105, 2, 250, 350, 0, true, 0, false);
      cm.npc_SetSpecialAction('oid=859809', "summon", 0, 0);
      cm.npc_ChangeController(3004442, 'oid=859810', 220, 105, 2, 170, 270, 0, true, 0, false);
      cm.npc_SetSpecialAction('oid=859810', "summon", 0, 0);
      cm.npc_ChangeController(3004437, "oid=859811", 100, 105, 2, 50, 150, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=859811", "summon", 0, 0);
      cm.npc_ChangeController(3004433, "oid=859812", 1450, 105, 5, 1400, 1500, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=859812", 'summon', 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 3000, 0, 1360, 120);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face4#呼……呼……", 37, 3004430, false, true);
      } else {
        if (status === V++) {
          cm.npc_SetSpecialAction("oid=859793", "special3", -1, 1);
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1400);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face4#……", 37, 3004430, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom('#face0#……。', 37, 3004431, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom('#face6#……', 37, 3004430, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#你做噩梦了吗？", 37, 3004431, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face6#不……不是的。", 37, 3004430, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#我知道从那以后，你连着好几天不眠不休地战斗，现在很是疲倦……", 37, 3004431, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#塞伦，你流口水了哦。", 37, 3004431, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face6#是、是吗？", 37, 3004430, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face1#我开玩笑的。", 37, 3004431, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face4#嗯？", 37, 3004430, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#看啊。敌人正在撤退。", 37, 3004436, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", 'oid=859793'], [0, 0, 0, 1, 0, 1, 0, 0]);
                                    cm.inGameDirectionEvent_AskAnswerTime(700);
                                  } else {
                                    if (status === V++) {
                                      cm.setNpcSpecialActionReset("oid=859793");
                                      cm.inGameDirectionEvent_AskAnswerTime(700);
                                    } else {
                                      if (status === V++) {
                                        cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 1360, 64);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#快看那里！敌人正在撤退！", 37, 3004437, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#是真的！敌人撤退了！！", 37, 3004437, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/victoryshout", 100);
                                                  cm.sendNormalTalk_Bottom("#face0#哇啊啊！！！", 37, 3004437, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_SetSpecialAction("oid=859797", "special7", -1, 1);
                                                    cm.npc_SetSpecialAction("oid=859798", "special8", -1, 1);
                                                    cm.npc_SetSpecialAction("oid=859799", "special8", -1, 1);
                                                    cm.npc_SetSpecialAction("oid=859803", "special9", -1, 1);
                                                    cm.npc_SetSpecialAction("oid=859804", "special9", -1, 1);
                                                    cm.npc_SetSpecialAction("oid=859805", "special8", -1, 1);
                                                    cm.npc_SetSpecialAction("oid=859808", 'special9', -1, 1);
                                                    cm.npc_SetSpecialAction("oid=859811", "special8", -1, 1);
                                                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face5#呼……", 37, 3004430, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#咻~我这次也很厉害吧？", 37, 3004435, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#虽然伤亡惨重，但还是守下来了。", 37, 3004436, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.npc_setForceFlip("oid=859793", 1);
                                                              cm.sendNormalTalk_Bottom("#face0#这一切都是托了大家的福。\r\n尤其是对抗者作战时的英勇身姿，真是令人难忘。", 37, 3004433, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#我谨代表圣地塞尔提乌，向对抗者大人，还有冒险岛联盟表达谢意。", 37, 3004433, false, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/victoryshout", 100);
                                                                      cm.sendNormalTalk_Bottom("#face0#守护者塞伦万岁！！！", 37, 3004437, false, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#冒险岛联盟万岁！！", 37, 3004437, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#对抗者万岁！！", 37, 3004437, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_PushScaleInfo(5000, 0, 1500, 5000, -170, 64);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(6000);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face0#……", 37, 3004441, false, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                    } else if (status === V++) {
                                                                                      cm.warp(993151002, 0, false);
                                                                                      cm.npc_LeaveField("oid=859793");
                                                                                      cm.npc_LeaveField("oid=859793");
                                                                                      cm.npc_LeaveField("oid=859794");
                                                                                      cm.npc_LeaveField("oid=859794");
                                                                                      cm.npc_LeaveField('oid=859795');
                                                                                      cm.npc_LeaveField('oid=859795');
                                                                                      cm.npc_LeaveField("oid=859796");
                                                                                      cm.npc_LeaveField("oid=859796");
                                                                                      cm.npc_LeaveField('oid=859797');
                                                                                      cm.npc_LeaveField("oid=859797");
                                                                                      cm.npc_LeaveField("oid=859798");
                                                                                      cm.npc_LeaveField("oid=859798");
                                                                                      cm.npc_LeaveField("oid=859799");
                                                                                      cm.npc_LeaveField("oid=859799");
                                                                                      cm.npc_LeaveField("oid=859800");
                                                                                      cm.npc_LeaveField('oid=859800');
                                                                                      cm.npc_LeaveField("oid=859801");
                                                                                      cm.npc_LeaveField("oid=859801");
                                                                                      cm.npc_LeaveField("oid=859802");
                                                                                      cm.npc_LeaveField("oid=859802");
                                                                                      cm.npc_LeaveField("oid=859803");
                                                                                      cm.npc_LeaveField("oid=859803");
                                                                                      cm.npc_LeaveField("oid=859804");
                                                                                      cm.npc_LeaveField("oid=859804");
                                                                                      cm.npc_LeaveField('oid=859805');
                                                                                      cm.npc_LeaveField('oid=859805');
                                                                                      cm.npc_LeaveField("oid=859806");
                                                                                      cm.npc_LeaveField("oid=859806");
                                                                                      cm.npc_LeaveField('oid=859807');
                                                                                      cm.npc_LeaveField("oid=859807");
                                                                                      cm.npc_LeaveField('oid=859808');
                                                                                      cm.npc_LeaveField("oid=859808");
                                                                                      cm.npc_LeaveField("oid=859809");
                                                                                      cm.npc_LeaveField("oid=859809");
                                                                                      cm.npc_LeaveField("oid=859810");
                                                                                      cm.npc_LeaveField('oid=859810');
                                                                                      cm.npc_LeaveField("oid=859811");
                                                                                      cm.npc_LeaveField("oid=859811");
                                                                                      cm.npc_LeaveField('oid=859812');
                                                                                      cm.npc_LeaveField('oid=859812');
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