var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.npc_ChangeController(1012106, 'oid=116540', 4780, -56, 4);
      cm.npc_ChangeController(1012003, 'oid=116541', 3302, 124, 5);
      cm.npc_ChangeController(1012133, "oid=116542", 5022, -56, 1);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(9400031, "oid=148896356", 4957, -66, 1);
      cm.npc_SetSpecialAction("oid=148896356", "summon");
      cm.npc_ChangeController(9400062, "oid=148896357", 5057, -66, 1);
      cm.npc_SetSpecialAction("oid=148896357", "summon");
      cm.inGameDirectionEvent_AskAnswerTime(1200);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.npc_SetForceMove("oid=148896356", -1, 30, 100);
        cm.sendNextNoESC_Bottom("你好，明明女士！我有件事想问问你！", 9400031);
      } else {
        if (status === V++) {
          cm.sendNextNoESC_Bottom("什么事情？", 1012106);
        } else {
          if (status === V++) {
            cm.sendNextNoESC_Bottom("我正在寻找一只和人一样大的青蛙，名字叫嘟嘟，您听说过吗？！", 9400031);
          } else {
            if (status === V++) {
              cm.sendNextNoESC_Bottom("这个嘛，我似乎没在这附近见过青蛙……", 1012106);
            } else {
              if (status === V++) {
                cm.sendNextNoESC_Bottom("你有听说过其他人看见过吗？", 9400031);
              } else {
                if (status === V++) {
                  cm.sendNextNoESC_Bottom("嗯……我倒是听说最近出现了特别凶残的怪物。", 1012106);
                } else {
                  if (status === V++) {
                    cm.sendNextNoESC_Bottom("我去查看了那些怪物，发现它们身上都有奇怪的小小宝石……不过没什么别的发现。", 9400031);
                  } else {
                    if (status === V++) {
                      cm.sendNextNoESC_Bottom('是吗？……嗯。', 1012106);
                    } else {
                      if (status === V++) {
                        cm.sendNextNoESC_Bottom("#face1#嘤……看来在这里是找不到嘟嘟了……呜呜……它是我的好朋友……", 9400031);
                      } else {
                        if (status === V++) {
                          cm.sendNextNoESC_Bottom("你也挺可怜的，那我再帮你打听一下吧？", 1012106);
                        } else {
                          if (status === V++) {
                            cm.sendNextNoESC_Bottom("真的吗？！您真的要帮我吗？！那我能帮您做什么呢？！", 9400031);
                          } else {
                            if (status === V++) {
                              cm.sendNextNoESC_Bottom("既然如此，我就不客气了……呵呵。", 1012106);
                            } else {
                              if (status === V++) {
                                cm.sendNextNoESC_Bottom("不久前我拎着垃圾去外面，风太大了，把垃圾全都吹跑了。", 1012106);
                              } else {
                                if (status === V++) {
                                  cm.sendNextNoESC_Bottom("我在村子里看了看，到处都是垃圾，真是太让我难堪了。", 1012106);
                                } else {
                                  if (status === V++) {
                                    cm.sendNextNoESC_Bottom("你能把那些地方的垃圾捡起来，然后打扫干净吗？", 1012106);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNextNoESC_Bottom("#face2#好的！我马上去！", 9400031);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNextSNoESC_Bottom("这次是整理垃圾吗？还有垃圾剩余就好了……试试看吧。");
                                        } else if (status === V++) {
                                          cm.warp(cm.getNumberFromQuestInfo(59744, "map"), 0);
                                          cm.inGameDirectionEvent_SetHideEffect(0);
                                          cm.setInGameDirectionMode(false, false, false);
                                          cm.setStandAloneMode(false);
                                          cm.npc_LeaveField("oid=148896356");
                                          cm.npc_LeaveField("oid=148896357");
                                          cm.npc_LeaveField('oid=116540');
                                          cm.npc_LeaveField('oid=116541');
                                          cm.npc_LeaveField("oid=116542");
                                          cm.dispose();
                                        } else {
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;