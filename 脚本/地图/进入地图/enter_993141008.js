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
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -202, 80);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(3004431, "oid=529485", -84, 44, 1, -134, -34, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=529485", 'summon', 0, 0);
        cm.npc_ChangeController(3004433, "oid=529486", 4, 44, 2, -46, 54, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=529486", "summon", 0, 0);
        cm.npc_ChangeController(3004444, 'oid=529487', 1180, 92, 4, 1130, 1230, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=529487", "summon", 0, 0);
        cm.npc_ChangeController(3004442, "oid=529488", 1348, 92, 4, 1298, 1398, 1, true, 0, false);
        cm.npc_SetSpecialAction('oid=529488', "summon", 0, 0);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("啊，王子殿下，伊黛娜大人。", 57, 0, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#如果你是来见守护者的，那你来迟一步。看那边。", 37, 3004431, true, true);
              cm.effect_Voice("Voice5.img/CH2/Idea/25", 128);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushScaleInfo(1500, 0, 1500, 1500, 1226, 80);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                } else {
                  if (status === V++) {
                    cm.npc_ChangeController(3004437, "oid=529627", 1530, 92, 5, 1480, 1580, 1, true, 1500, false);
                    cm.npc_SetSpecialAction("oid=529627", "summon", 0, 0);
                    cm.npc_ChangeController(3004437, 'oid=529628', 1417, 92, 5, 1367, 1467, 1, true, 1500, false);
                    cm.npc_SetSpecialAction('oid=529628', 'summon', 0, 0);
                    cm.npc_ChangeController(3004437, "oid=529629", 1117, 92, 4, 1067, 1167, 0, true, 1500, false);
                    cm.npc_SetSpecialAction("oid=529629", "summon", 0, 0);
                    cm.npc_ChangeController(3004437, "oid=529630", 1004, 92, 3, 954, 1054, 0, true, 1500, false);
                    cm.npc_SetSpecialAction('oid=529630', 'summon', 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#呸，一群肮脏的家伙。", 37, 3004444, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#这家伙还真是胆大包天！！", 37, 3004437, true, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_PushScaleInfo(1500, 0, 1500, 1500, -202, 80);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#对他们太严厉了吧。", 37, 3004431, false, true);
                              cm.effect_Voice("Voice5.img/CH2/Idea/26", 128);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#不那样的话就压制不住。尽管如此，最近还是越发严重了。", 37, 3004433, true, true);
                                cm.effect_Voice("Voice5.img/CH2/Carlyle/27", 128);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#眼看战争逼近，双方都难免变得很敏感。\r\n否则……也可能是有人故意引起纠纷。", 37, 3004433, true, true);
                                  cm.effect_Voice("Voice5.img/CH2/Carlyle/28", 128);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom('是谁？', 57, 0, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#你说的是那些#r不信神者#k啊。", 37, 3004431, true, true);
                                      cm.effect_Voice("Voice5.img/CH2/Idea/27", 128);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#他们混在难民中间进入城里，一直在暗中培植势力。", 37, 3004433, true, true);
                                        cm.effect_Voice("Voice5.img/CH2/Carlyle/29", 128);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#目前，他们正轮番刺激各个教团，挑拨离间……\r\n偏偏就是抓不到线索。", 37, 3004433, true, true);
                                          cm.effect_Voice("Voice5.img/CH2/Carlyle/30", 128);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#嗯……事情闹大了。", 37, 3004431, true, true);
                                            cm.effect_Voice("Voice5.img/CH2/Idea/28", 128);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom('什么？', 57, 0, true, true);
                                            } else if (status === V++) {
                                              cm.warp(993141027, 0, false);
                                              cm.npc_LeaveField("oid=529485");
                                              cm.npc_LeaveField('oid=529485');
                                              cm.npc_LeaveField("oid=529486");
                                              cm.npc_LeaveField('oid=529486');
                                              cm.npc_LeaveField("oid=529487");
                                              cm.npc_LeaveField("oid=529487");
                                              cm.npc_LeaveField("oid=529488");
                                              cm.npc_LeaveField('oid=529488');
                                              cm.npc_LeaveField("oid=529627");
                                              cm.npc_LeaveField("oid=529627");
                                              cm.npc_LeaveField("oid=529628");
                                              cm.npc_LeaveField("oid=529628");
                                              cm.npc_LeaveField('oid=529629');
                                              cm.npc_LeaveField("oid=529629");
                                              cm.npc_LeaveField('oid=529630');
                                              cm.npc_LeaveField('oid=529630');
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