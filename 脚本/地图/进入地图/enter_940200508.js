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
      cm.setStandAloneMode(true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.curNodeEventEnd(true);
      cm.inGameDirectionEvent_AskAnswerTime(300);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(3001251, "oid=684943", 658, 11, 4, 608, 708, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=684943", "summon", 0, 0);
        cm.setNpcSpecialActionReset("oid=684943");
        cm.npc_SetSpecialAction("oid=684943", "tieup1", -1, 1);
        cm.npc_ChangeController(3001252, 'oid=684944', 444, 11, 4, 394, 494, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=684944", "summon", 0, 0);
        cm.setNpcSpecialActionReset("oid=684944");
        cm.npc_SetSpecialAction("oid=684944", 'jump', -1, 1);
        cm.inGameDirectionEvent_AskAnswerTime(300);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_QTE(0);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_OneTimeAction(7, 0);
              cm.setNpcSpecialActionReset('oid=684943');
              cm.npc_SetSpecialAction("oid=684943", 'release', 0, 1);
              cm.inGameDirectionEvent_AskAnswerTime(1100);
            } else {
              if (status === V++) {
                cm.setNpcSpecialActionReset("oid=684943");
                cm.npc_SetSpecialAction("oid=684943", "stand2", -1, 1);
                cm.inGameDirectionEvent_AskAnswerTime(2000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#呼，终于脱身了。大家好像都平安逃出来了……只有我差点被抓住！", 37, 3001251, false, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#原来如此。支部长和其他同伴目前正在Mr.哈扎尔据点前跟敌人对峙。", 37, 3001270, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#这里交给我吧，你不如快去跟同伴们会合吧？", 37, 3001270, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#嗯，再被抓到就麻烦了……那我先走一步。祝你好运。", 37, 3001251, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/cadena/0", "oid=684943"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cadena/appear", 100);
                            cm.npc_LeaveField('oid=684943');
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#……棉花团，你别跟着我。害我战斗时总是分心，正好趁现在各走各路吧。", 37, 3001270, false, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#波、波波。", 37, 3001252, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#谢谢你为我指路。懂得知恩图报的孩子今后一定错不了。那你保重啊。", 37, 3001270, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_同时移动镜头和人(2, 200);
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                      } else if (status === V++) {
                                        cm.npc_LeaveField("oid=684944");
                                        cm.dispose();
                                        cm.warp(402000323, 1, false);
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