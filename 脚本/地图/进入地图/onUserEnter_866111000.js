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
      cm.setInGameDirectionMode(true, true, false);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.setStandAloneMode(true);
      cm.npc_ChangeController(9390383, "oid=2271987", -180, 0, 9, -230, -130, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2271987", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_头顶图片(["Effect/Direction14.img/effect/ShamanBT/balloonMsg/21"], [1500, 0, -150, 1, 0, 0, 0, 0, 0]);
        cm.emotion(5, 5000);
        cm.inGameDirectionEvent_AskAnswerTime(300);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_头顶图片(["Effect/Direction14.img/effect/ShamanBT/balloonMsg/23"], [1500, -180, -150, 1, 0, 0, 0, 0, 0]);
          cm.inGameDirectionEvent_AskAnswerTime(1800);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushMoveInfo(0, 1000, 1496, 0);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(2495);
            } else {
              if (status === V++) {
                cm.npc_ChangeController(9390436, "oid=2271989", 1496, 0, 9, 1446, 1546, 1, true, 0, false);
                cm.npc_SetSpecialAction("oid=2271989", "summon", 0, 0);
                cm.npc_SetForceMove("oid=2271989", -1, 700, 100);
                cm.inGameDirectionEvent_AskAnswerTime(800);
              } else {
                if (status === V++) {
                  cm.npc_ChangeController(9390437, "oid=2271990", 1496, 0, 9, 1446, 1546, 1, true, 0, false);
                  cm.npc_SetSpecialAction("oid=2271990", "summon", 0, 0);
                  cm.npc_SetForceMove("oid=2271990", -1, 600, 100);
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.npc_ChangeController(9390438, "oid=2271991", 1496, 0, 9, 1446, 1546, 1, true, 0, false);
                    cm.npc_SetSpecialAction("oid=2271991", 'summon', 0, 0);
                    cm.npc_SetForceMove("oid=2271991", -1, 900, 100);
                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                  } else {
                    if (status === V++) {
                      cm.npc_ChangeController(9390439, "oid=2271992", 1496, 0, 9, 1446, 1546, 1, true, 0, false);
                      cm.npc_SetSpecialAction("oid=2271992", "summon", 0, 0);
                      cm.npc_SetForceMove("oid=2271992", -1, 1000, 100);
                      cm.inGameDirectionEvent_AskAnswerTime(800);
                    } else {
                      if (status === V++) {
                        cm.npc_ChangeController(9390440, "oid=2271993", 1496, 0, 9, 1446, 1546, 1, true, 0, false);
                        cm.npc_SetSpecialAction("oid=2271993", 'summon', 0, 0);
                        cm.npc_SetForceMove("oid=2271993", -1, 1100, 100);
                        cm.inGameDirectionEvent_AskAnswerTime(900);
                      } else {
                        if (status === V++) {
                          cm.npc_SetForceMove("oid=2271990", -1, 500, 100);
                          cm.inGameDirectionEvent_AskAnswerTime(1300);
                        } else {
                          if (status === V++) {
                            cm.npc_SetSpecialAction("oid=2271989", 'attack1', 0, 1);
                            cm.inGameDirectionEvent_AskAnswerTime(300);
                          } else {
                            if (status === V++) {
                              cm.npc_SetSpecialAction("oid=2271990", "attack1", 0, 1);
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction14.img/effect/ShamanBT/balloonMsg1/11"], [1500, 400, -150, 1, 0, 0, 0, 0, 0]);
                                cm.inGameDirectionEvent_AskAnswerTime(1800);
                              } else {
                                if (status === V++) {
                                  cm.npc_SetSpecialAction("oid=2271991", "attack1", 0, 1);
                                  cm.inGameDirectionEvent_AskAnswerTime(800);
                                } else {
                                  if (status === V++) {
                                    cm.npc_SetSpecialAction("oid=2271989", "attack1", 0, 1);
                                    cm.inGameDirectionEvent_AskAnswerTime(450);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_PushMoveInfo(1, 1000, 0, 0);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(800);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_SetSpecialAction("oid=2271989", "attack1", 0, 1);
                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_SetSpecialAction("oid=2271989", "attack1", 0, 1);
                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_SetSpecialAction("oid=2271993", "attack1", 0, 1);
                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk("嘿~ #老大#k！这些家伙真是顽强。", 1, 9390383, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_SetSpecialAction("oid=2271991", "attack1", 0, 1);
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                    cm.updateInfoQuest(65890, "count=337;todayCount=307;lastDate=20210530");
                                                    cm.updateInfoQuest(65890, "count=337;todayCount=337;lastDate=20210530");
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_SetSpecialAction("oid=2271990", "attack1", 0, 1);
                                                      cm.inGameDirectionEvent_AskAnswerTime(400);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_OneTimeAction(444, 540);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.npc_SetSpecialAction("oid=2271992", "attack1", 0, 1);
                                                          cm.inGameDirectionEvent_AskAnswerTime(200);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk("横扫吧!呀!!", 3, 9390383, false, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk("很满意是吧,#b老大#k!\r\n不过那些家伙们,可比刚才的还要厉害一些哦。\r\n 可别忘了我教给你的#b药水#k使用方法啊。\r\n来,那就赶紧发动#b雪豹的守护模式#k吧!", 1, 9390383, true, true);
                                                            } else if (status === V++) {
                                                              cm.forceCompleteQuest(59011);
                                                              cm.gainExp(372);
                                                              cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                              cm.setStandAloneMode(false);
                                                              cm.dispose();
                                                              cm.warp(866112000, 0, false);
                                                              cm.setInGameDirectionMode(false, true, false);
                                                              cm.npc_LeaveField("oid=2271987");
                                                              cm.npc_LeaveField("oid=2271989");
                                                              cm.npc_LeaveField("oid=2271990");
                                                              cm.npc_LeaveField("oid=2271991");
                                                              cm.npc_LeaveField("oid=2271992");
                                                              cm.npc_LeaveField("oid=2271993");
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