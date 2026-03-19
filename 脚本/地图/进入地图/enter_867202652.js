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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9400592, "oid=7532224", -550, 130, 8, -600, -500, 1, true, false);
      cm.npc_SetSpecialAction("oid=7532224", "summon", 0, 0);
      cm.npc_ChangeController(9400589, "oid=7532225", -460, 130, 9, -510, -410, 0, true, false);
      cm.npc_SetSpecialAction("oid=7532225", "summon", 0, 0);
      cm.npc_ChangeController(9400611, "oid=7532226", -300, 130, 10, -350, -250, 1, true, false);
      cm.npc_SetSpecialAction("oid=7532226", "summon", 0, 0);
      cm.sendNewEffects(17, [0, 1000, 2000, -600, 200]);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_SetSpecialAction("oid=7532226", "attack1", -1, 0);
        cm.npc_SetSpecialAction("oid=7532225", 'attack1', -1, 0);
        cm.npc_SetForceMove("oid=7532224", -1, 100, 70);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#那… 那个… ", 37, 9400592, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#你… 你们相信我现在没醉酒？", 37, 9400592, true, true);
          } else {
            if (status === V++) {
              cm.setNpcSpecialActionReset("oid=7532226");
              cm.setNpcSpecialActionReset("oid=7532225");
              cm.npc_SetSpecialAction("oid=7532226", "die1", 0, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1200);
            } else {
              if (status === V++) {
                cm.npc_setForceFlip("oid=7532225", -1);
                cm.npc_LeaveField("oid=7532226");
                cm.npc_LeaveField("oid=7532226");
                cm.sendNormalTalk_Bottom("#face0#当然，自从那天之后没看到你这么清醒过。", 37, 9400589, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#b我也是。", 57, 0, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#… 那天，是我从斯库亚斯市集里卖了肉和皮之后回来的路上。", 37, 9400592, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#阿尔西…！", 37, 9400589, true, true);
                      } else {
                        if (status === V++) {
                          cm.npc_SetForceMove("oid=7532225", -1, 100, 70);
                          cm.sendNormalTalk_Bottom("#face0#拜托你！这一次让我把话说完吧，佩图尔。", 37, 9400592, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom('#b请继续。', 57, 0, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#回来后发现村子已经变的面目全非，地上也有许多脚印。在那些脚印的尽头… 看到了抓住我家人的怪物…", 37, 9400592, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#我用这双眼睛看的清清楚楚，身穿雪白的钢甲和钢盔的那个恶魔！！", 37, 9400592, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#我承认我很懦弱，我什么都没有做，只是躲在一旁望着这一切。", 37, 9400592, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#但我没有说谎… 从那天起到现在我没有说过半句假话。你们就不能相信我吗？", 37, 9400592, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#b… 我知道了。", 57, 0, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#没有目击者，也没有任何线索… ", 37, 9400589, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#b说不定其他的居民也看到过，我们得去问一下。", 57, 0, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.playerMessage(-1, '去寻找其他目击者。');
                                            cm.updateInfoQuest(64039, "chk1=1");
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#谢… 谢啦！那就足够了。", 37, 9400592, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#总算可以结束了，我们再加把劲。", 37, 9400589, false, true);
                                                } else if (status === V++) {
                                                  cm.warp(867202600, 0);
                                                  cm.setInGameDirectionMode(false, true, false);
                                                  cm.forceCompleteQuest(64108);
                                                  cm.npc_LeaveField("oid=7532224");
                                                  cm.npc_LeaveField("oid=7532224");
                                                  cm.npc_LeaveField("oid=7532225");
                                                  cm.npc_LeaveField("oid=7532225");
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;