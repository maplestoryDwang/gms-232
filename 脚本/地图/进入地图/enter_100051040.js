var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (cm.isQuestFinished(35928) && cm.getQuestStatus(35929) == 0) {
    action1(f, E, e);
  } else if (cm.isQuestActive(35966)) {
    action2(f, E, e);
  } else {
    cm.dispose();
  }
}
function action1(f, E, e) {
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
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1, 384000, 0, -51200, 23295);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
          if (status === V++) {
            cm.fieldEffect_PlayBGM("Bgm51.img/TheVillageOfKarupa", 0, 0);
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1400);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#啊……真神奇。两人竟然能同时听到不同的话语。\r\n……从里面的意念那里。", 37, 1013350, false, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#太好了,我们都找到了各自想要的答案。\r\n虽然有点辛苦……唉……让我再来一次,恐怕就做不到了。", 37, 1013350, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0##b(据那个小孩说,从意念那里知道了有关遗迹怪声的事情。\r\n今后怪声将不再会出现。)#k", 37, 1013358, false, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0##b(据意念说,怪声是为了保护后代的卡鲁帕们,\r\n让他们免受邪恶气息的伤害。)#k", 37, 1013358, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0##b(遗迹的堕落之力和古代之力一起传给了遗物……\r\n今后遗迹应该就不会再发出怪声了。)#k", 37, 1013358, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.updateInfoQuest(35947, "30=1;12=1;22=1;16=1;26=1;29=1;2=1;6=1");
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                cm.inGameDirectionEvent_PushScaleInfo(0, 1, 256000, -256, -129, -129);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                      cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                    } else if (status === V++) {
                                      cm.setStandAloneMode(false);
                                      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                      cm.setInGameDirectionMode(false, true, false);
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
function action2(f, E, e) {
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
      cm.npc_ChangeController(1013319, "oid=934", -150, 86, 5, -200, -100, 1, false, false);
      cm.npc_ChangeController(1013424, "oid=935", -115, 86, 5, -165, -65, 0, false, false);
      cm.npc_ChangeController(1013425, "oid=936", -469, 86, 3, -519, -419, 0, false, false);
      cm.npc_ChangeController(1013426, "oid=937", 116, 86, 16, 66, 166, 1, false, false);
      cm.npc_ChangeController(1013427, "oid=938", 174, 86, 16, 124, 224, 1, false, false);
      cm.npc_ChangeController(1013428, "oid=939", 237, 86, 17, 187, 287, 1, false, false);
      cm.sendNormalTalk("就在这里面。", 5, 1013441, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("不是野外吗？看上去好像很危险……", 3, 0, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk('怎么了？害怕了吗？', 5, 1013441, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("（对方是小孩……又不能揍他。）", 3, 0, true, true);
          } else if (status === V++) {
            cm.updateInfoQuest(35950, "00=h1;01=h0;02=h0;03=h0;04=h0;05=h0;06=h0;07=h0;08=h0;27=h0;28=h1");
            cm.updateInfoQuest(35950, "00=h1;01=h0;02=h0;03=h0;04=h0;05=h0;06=h0;07=h0;08=h0;27=h0;28=h0");
            cm.updateInfoQuest(35950, "00=h1;01=h0;02=h0;03=h0;04=h0;05=h0;06=h0;07=h0;08=h0;09=h1;27=h0;28=h0");
            cm.updateInfoQuest(35950, "00=h1;10=h1;01=h0;02=h0;03=h0;04=h0;05=h0;06=h0;07=h0;08=h0;09=h1;27=h0;28=h0");
            cm.updateInfoQuest(35966, "dir=end");
            cm.OnStartNavigation(100051050, 0, "west00", 35966);
            cm.dispose();
          }
        }
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;