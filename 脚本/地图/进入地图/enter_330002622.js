var status = -1;
var selectionLog = [];
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
      cm.forceCompleteQuest(33534);
      cm.forceStartQuest(33535, '');
      cm.updateInfoQuest(33524, "enter=1");
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_PushScaleInfo(10, 1500, 10, 0, 100);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(1530629, "oid=40443762", 0, 0, 142, -50, 50, 1, false, false);
        cm.npc_SetSpecialAction("oid=40443762", "summon", 0, 0);
        cm.npc_ChangeController(1530630, "oid=40443763", -240, 0, 137, -290, -190, 1, true, false);
        cm.npc_SetSpecialAction("oid=40443763", "summon", 0, 0);
        cm.npc_ChangeController(1530631, "oid=40443764", 240, 0, 130, 190, 290, 1, false, false);
        cm.npc_SetSpecialAction("oid=40443764", "summon", 0, 0);
        cm.npc_ChangeController(1530624, "oid=40443765", 240, 0, 130, 190, 290, 1, true, false);
        cm.npc_SetSpecialAction("oid=40443765", 'summon', 0, 0);
        cm.npc_ChangeController(1530632, "oid=40443766", 0, 70, 2, -50, 50, 1, false, false);
        cm.npc_SetSpecialAction("oid=40443766", "summon", 0, 0);
        cm.npc_ChangeController(1530645, "oid=40443767", 642, -40, 175, 592, 692, 1, false, false);
        cm.npc_SetSpecialAction("oid=40443767", "summon", 0, 0);
        cm.npc_ChangeController(1530644, "oid=40443768", 731, -40, 147, 681, 781, 1, false, false);
        cm.npc_SetSpecialAction("oid=40443768", "summon", 0, 0);
        cm.npc_ChangeController(1530643, "oid=40443769", 827, -40, 144, 777, 877, 1, false, false);
        cm.npc_SetSpecialAction("oid=40443769", 'summon', 0, 0);
        cm.npcMove(1530624, -360, -30, 0);
        cm.npcMove(1530632, 0, -147, 0);
        cm.npcMove(1530645, 0, 10, 0);
        cm.npcMove(1530644, -10, 20, 0);
        cm.npcMove(1530643, -35, 10, 0);
        cm.npc_SetSpecialAction("oid=40443762", "sing", -1, 1);
        cm.npc_SetSpecialAction("oid=40443763", "sing", -1, 1);
        cm.npc_SetSpecialAction("oid=40443764", 'sing', -1, 1);
        cm.npc_SetSpecialAction("oid=40443765", "sing", -1, 1);
        cm.npc_SetSpecialAction("oid=40443766", "sing", -1, 1);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
        cm.effect_Voice("Bgm42.img/Demon's eye2", 100);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(6000);
          } else {
            if (status === V++) {
              cm.forceCompleteQuest(33535);
              cm.setNpcSpecialActionReset("oid=40443762");
              cm.setNpcSpecialActionReset("oid=40443763");
              cm.setNpcSpecialActionReset("oid=40443764");
              cm.setNpcSpecialActionReset("oid=40443765");
              cm.setNpcSpecialActionReset("oid=40443766");
              cm.inGameDirectionEvent_PushScaleInfo(2000, 1000, 2000, 0, 0);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(3000);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                  cm.effect_Voice("SoundEff.img/Freinds/crowd2", 100);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_PushScaleInfo(2000, 2000, 2000, 700, 0);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#完美的歌曲。让我想起了我的学生时代啊。我年轻时也对Rock有着憧憬之心，从而组建了乐队。金属乐队，齐柏林飞艇，软饼干……", 37, 1530150, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("大家都对这个没兴趣，你还是快点公布分数吧。", 37, 1530160, true, true);
                        } else {
                          if (status === V++) {
                            cm.npc_SetSpecialAction("oid=40443769", "score", -1, 1);
                            cm.sendNormalTalk_Bottom("#face0#……10分。", 37, 1530150, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("哦哦哦！10分啊", 37, 1530270, true, true);
                            } else {
                              if (status === V++) {
                                cm.npc_SetSpecialAction("oid=40443768", "score", -1, 1);
                                cm.sendNormalTalk_Bottom("我也给10分。\r\n那段关于爱情无用的部分很感人。", 37, 1530410, true, true);
                              } else {
                                if (status === V++) {
                                  cm.npc_SetSpecialAction("oid=40443767", 'score7', -1, 1);
                                  cm.sendNormalTalk_Bottom('我给7分。', 37, 1530160, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#虽然技术上很优秀，但是我觉得让人很难有同感。发音也一般，太难懂了。", 37, 1530160, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face2#而且耳朵疼，你们知道噪音对皮肤是有害的吧？而且……", 37, 1530160, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                        } else if (status === V++) {
                                          cm.dispose();
                                          cm.warp(330000680, 0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;