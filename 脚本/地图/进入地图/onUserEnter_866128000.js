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
      cm.funckeySetByScript(1, 110001510, 42);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, false);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.setStandAloneMode(true);
      cm.npc_ChangeController(9390383, "oid=2272254", -150, 0, 9, -200, -100, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2272254", "summon", 0, 0);
      cm.npc_ChangeController(9390382, "oid=2272255", 200, 0, 9, 150, 250, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2272255", 'summon', 0, 0);
      cm.sendNormalTalk("很好! 老大,波波!", 1, 9390383, false, true);
      cm.curNodeEventEnd(true);
      cm.updateInfoQuest(65890, "count=458;todayCount=428;lastDate=20210530");
      cm.updateInfoQuest(65890, "count=458;todayCount=458;lastDate=20210530");
    } else {
      if (status === V++) {
        cm.sendNormalTalk("呃呵,波波做的好吗?", 1, 9390382, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("嘿嘿嘿,嗯!做的很好,可爱的小熊!", 3, 9390382, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("呵…… 老大,我也……", 1, 9390383, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("这么可爱,力气还那么大!!", 3, 9390383, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk('呃呵,呃呵!', 1, 9390382, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("呃…… 老大……这……我?", 1, 9390383, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_PushMoveInfo(0, 1000, 1496, 0);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(2495);
                    } else {
                      if (status === V++) {
                        cm.npc_ChangeController(9390436, "oid=2272267", 1496, 0, 9, 1446, 1546, 1, true, 0, false);
                        cm.npc_SetSpecialAction("oid=2272267", "summon", 0, 0);
                        cm.npc_SetForceMove("oid=2272267", -1, 950, 100);
                        cm.inGameDirectionEvent_AskAnswerTime(800);
                      } else {
                        if (status === V++) {
                          cm.npc_ChangeController(9390437, "oid=2272270", 1496, 0, 9, 1446, 1546, 1, true, 0, false);
                          cm.npc_SetSpecialAction("oid=2272270", "summon", 0, 0);
                          cm.npc_SetForceMove("oid=2272270", -1, 600, 100);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.npc_ChangeController(9390438, "oid=2272271", 1496, 0, 9, 1446, 1546, 1, true, 0, false);
                            cm.npc_SetSpecialAction("oid=2272271", "summon", 0, 0);
                            cm.npc_SetForceMove("oid=2272271", -1, 900, 100);
                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                          } else {
                            if (status === V++) {
                              cm.npc_ChangeController(9390439, "oid=2272272", 1496, 0, 9, 1446, 1546, 1, true, 0, false);
                              cm.npc_SetSpecialAction("oid=2272272", "summon", 0, 0);
                              cm.npc_SetForceMove("oid=2272272", -1, 700, 100);
                              cm.inGameDirectionEvent_AskAnswerTime(800);
                            } else {
                              if (status === V++) {
                                cm.npc_ChangeController(9390440, "oid=2272273", 1496, 0, 9, 1446, 1546, 1, true, 0, false);
                                cm.npc_SetSpecialAction("oid=2272273", 'summon', 0, 0);
                                cm.npc_SetForceMove("oid=2272273", -1, 700, 100);
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_PushMoveInfo(1, 1000, 0, 0);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(800);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_头顶图片(["Effect/Direction14.img/effect/ShamanBT/balloonMsg/22"], [1500, 0, -150, 1, 0, 0, 0, 0, 0]);
                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction14.img/effect/ShamanBT/balloonMsg/22"], [1500, 200, -150, 1, 0, 0, 0, 0, 0]);
                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction14.img/effect/ShamanBT/balloonMsg/23"], [1500, -80, -150, 1, 0, 0, 0, 0, 0]);
                                          cm.inGameDirectionEvent_AskAnswerTime(1800);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk("哇啊!那些家伙还真缠人啊!!!\r\n老大!照此下去,真是没完没了,\r\n最好得赶紧让人们躲一躲才是。", 1, 9390383, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk("我觉得,我觉得,\r\n 波波觉得爬上那个木藤到树上的话,应该就可以。", 1, 9390382, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk("ok,波波。想法很好。\r\n 老大,就是得赶紧让人们躲一躲。", 1, 9390383, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk("知道了,就交给我好了!", 3, 9390383, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(800);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_MoveAction(1);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1300);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_MoveAction(0);
                                                        cm.sendNormalTalk("各位!!!罗斯娜奶奶!布兰! 赫卡大嫂! \r\n 赶紧逃到那棵树上边去吧!!!", 3, 9390383, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                        } else if (status === V++) {
                                                          cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                          cm.setStandAloneMode(false);
                                                          cm.dispose();
                                                          cm.warp(866129000, 0, false);
                                                          cm.setInGameDirectionMode(false, true, false);
                                                          cm.npc_LeaveField("oid=2272254");
                                                          cm.npc_LeaveField("oid=2272255");
                                                          cm.npc_LeaveField("oid=2272267");
                                                          cm.npc_LeaveField("oid=2272270");
                                                          cm.npc_LeaveField("oid=2272271");
                                                          cm.npc_LeaveField("oid=2272272");
                                                          cm.npc_LeaveField("oid=2272273");
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