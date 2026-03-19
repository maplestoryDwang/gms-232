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
      cm.npc_ChangeController(2159465, 'oid=217014', -525, -32, 2, -575, -523, 4, true, 0, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.sendNormalTalk("辛苦你了。在天黑之前，必须抓紧时间……", 1, 2159465, false, true);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.npc_ChangeController(2159466, "oid=240820850", 0, -34, 7, -50, 50, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=240820850", "summon", 0, 0);
        cm.npc_ChangeController(2159466, "oid=240820851", 200, -34, 10, 150, 250, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=240820851", "summon", 0, 0);
        cm.npc_ChangeController(2159466, "oid=240820852", 400, -34, 12, 350, 450, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=240820852", "summon", 0, 0);
        cm.npc_ChangeController(2159466, "oid=240820853", 600, -34, 13, 550, 650, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=240820853", 'summon', 0, 0);
        cm.npc_ChangeController(2159466, "oid=240820854", 800, -34, 16, 750, 850, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=240820854", "summon", 0, 0);
        cm.inGameDirectionEvent_PushMoveInfo(0, 350, 400, -34);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(2366);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("好像还有。也许会有危险，最好先退开……", 1, 2159465, false, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.fieldEffect_PlayFieldSound("eunwolTuto/luminus", 100);
                  cm.sendNormalTalk('死亡之刃。', 5, 2159440, false, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_头顶图片(["Skill/2711.img/skill/27111303/effect"], [0, 830, -20, 1, 0, 1, 0, 0]);
                    cm.fieldEffect_PlayFieldSound("eunwolTuto/Use1", 100);
                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                  } else {
                    if (status === V++) {
                      cm.npc_SetSpecialAction("oid=240820850", 'hit', 0, 1);
                      cm.npc_SetSpecialAction("oid=240820851", "hit", 0, 1);
                      cm.npc_SetSpecialAction("oid=240820852", "hit", 0, 1);
                      cm.npc_SetSpecialAction("oid=240820853", "hit", 0, 1);
                      cm.npc_SetSpecialAction("oid=240820854", "hit", 0, 1);
                      cm.inGameDirectionEvent_头顶图片(["Skill/2711.img/skill/27111303/hit/0", "oid=240820850"], [0, 0, -50, 1, 0, 1, 0, 0]);
                      cm.inGameDirectionEvent_头顶图片(["Skill/2711.img/skill/27111303/hit/0", "oid=240820851"], [0, 0, -50, 1, 0, 1, 0, 0]);
                      cm.inGameDirectionEvent_头顶图片(["Skill/2711.img/skill/27111303/hit/0", "oid=240820852"], [0, 0, -50, 1, 0, 1, 0, 0]);
                      cm.inGameDirectionEvent_头顶图片(["Skill/2711.img/skill/27111303/hit/0", "oid=240820853"], [0, 0, -50, 1, 0, 1, 0, 0]);
                      cm.inGameDirectionEvent_头顶图片(["Skill/2711.img/skill/27111303/hit/0", "oid=240820854"], [0, 0, -50, 1, 0, 1, 0, 0]);
                      cm.fieldEffect_PlayFieldSound("eunwolTuto/Hit1", 100);
                      cm.inGameDirectionEvent_AskAnswerTime(600);
                    } else {
                      if (status === V++) {
                        cm.npc_SetSpecialAction("oid=240820850", "die", 0, 1);
                        cm.npc_SetSpecialAction("oid=240820851", "die", 0, 1);
                        cm.npc_SetSpecialAction("oid=240820852", 'die', 0, 1);
                        cm.npc_SetSpecialAction("oid=240820853", "die", 0, 1);
                        cm.npc_SetSpecialAction("oid=240820854", "die", 0, 1);
                        cm.inGameDirectionEvent_AskAnswerTime(450);
                      } else {
                        if (status === V++) {
                          cm.npc_LeaveField("oid=240820850");
                          cm.npc_LeaveField("oid=240820850");
                          cm.npc_LeaveField("oid=240820851");
                          cm.npc_LeaveField("oid=240820851");
                          cm.npc_LeaveField("oid=240820852");
                          cm.npc_LeaveField("oid=240820852");
                          cm.npc_LeaveField("oid=240820853");
                          cm.npc_LeaveField("oid=240820853");
                          cm.npc_LeaveField("oid=240820854");
                          cm.npc_LeaveField("oid=240820854");
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.npc_ChangeController(2159440, "oid=240823459", 850, -34, 16, 800, 900, 1, true, 0, false);
                            cm.npc_SetSpecialAction("oid=240823459", "summon", 0, 0);
                            cm.npc_SetForceMove("oid=240823459", -1, 1000, 100);
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(0);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("夜光法师！你来接我了吗？你来得正好。猴子挡住了路，差一点就回不了家了。", 1, 2159465, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("所以我让你带上守护者机器人。上次你也是一个人出去，结果差点就出了事。这次又……！", 5, 2159440, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("这还不是全都因为你？每次跟你借书，带来的都不是我要的书。晚饭料理材料也搜集不到，所以我只能亲自出马了！而且守护者机器人太慢了，要是带着它的话，可能3天时间都不够！", 1, 2159465, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("那我也一起去不就行了……", 5, 2159440, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk("今天我不是让你去做别的事了吗？我不是说了吗？今天天气很好，最好把被子拿出来晒晒。还有，今天我还带了保镖，所以没有任何问题。是吧？隐月？", 1, 2159465, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk("隐月？那个人……", 5, 2159440, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk("先进去再说吧。天黑之后会很冷的。壁炉烧好了吗？好了，隐月，快到我们家去吧。隐月，你是到我们家来玩的第一位客人。", 1, 2159465, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else if (status === V++) {
                                                cm.npc_LeaveField("oid=240823459");
                                                cm.npc_LeaveField("oid=240823459");
                                                cm.dispose();
                                                cm.warp(910141110, 0, false);
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