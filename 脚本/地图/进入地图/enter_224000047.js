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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -3348, -255);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -3398, -175);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(2074107, "oid=2598196", -3560, -221, 60, -3610, -3510, 0, true, 500, false);
        cm.npc_SetSpecialAction("oid=2598196", 'summon', 0, 0);
        cm.npc_SetSpecialAction("oid=2598196", "normal", -1, 1);
        cm.npc_ChangeController(2074100, "oid=2598197", -3439, -221, 71, -3489, -3389, 1, true, 500, false);
        cm.npc_SetSpecialAction("oid=2598197", "summon", 0, 0);
        cm.inGameDirectionEvent_ForcedFlip(-1);
        cm.sendNormalTalk_Bottom("什么？啊，你就是兴夫说的那个人吗？\r\n哼……我到现在脸颊还火辣辣的呢，他也真是够厚脸皮的。\r\n不过我毕竟也确实是缺人手。", 37, 2074002, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("什么，不是你，是小荳？哼！她最近完全就是个小混混嘛，\r\n她难不成又打算干活干到一半就逃走吗，这件工作可没那么简单。", 37, 2074002, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#到底是什么工作啊？", 37, 2074100, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("那个……是卖东西的工作。", 37, 2074002, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#这么说来，也许小荳反倒能做好……", 37, 2074100, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom('堆肥', 37, 2074002, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#什么？", 37, 2074100, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("得卖堆肥，\r\n明白了吗？得去卖屎。", 37, 2074002, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#这……这有点。\r\n有没有其他的工作啊？", 37, 2074100, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("要是连这种工作都做不来，那我就不打算用小荳这种人了。\r\n不过她真的能挺得住这种事情吗？", 37, 2074002, true, true);
                        } else {
                          if (status === V++) {
                            cm.npc_ChangeController(2074143, "oid=2598231", -3408, -221, 53, -3458, -3358, 1, false, 500, false);
                            cm.npc_SetSpecialAction("oid=2598231", "summon", 0, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(300);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2598197"], [0, 0, 0, 1, 0, 1, 0, 0]);
                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2598196"], [0, 0, 0, 1, 0, 1, 0, 0]);
                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("好，我做。", 37, 2074143, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#小荳啊！", 37, 2074100, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("哎哟，还真是好久没见到你出来晃悠了啊。\r\n你现在是要做这件工作吗？就是卖堆肥的活计。", 37, 2074002, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("这个活可得一整天在堆肥旁边将肥料卖给粗犷的农夫，\r\n你能受得了吗？", 37, 2074002, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("我试试，\r\n我没关系的。", 37, 2074143, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("嗯……就让我看看你能做得多好吧。\r\n工作就从今天，现在这一刻开始，来，跟我来吧。", 37, 2074002, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_setForceFlip("oid=2598196", -1);
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_LeaveField("oid=2598196");
                                              cm.npc_setForceFlip("oid=2598197", 1);
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("姐姐，我听说了。\r\n听说你四处在帮我打听呢，\r\n谢谢你。", 37, 2074143, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face2#可毕竟，我觉得这种工作……", 37, 2074100, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("我要是，还继续挑三拣四的，可就和从前没什么两样了。\r\n我没关系的，走吧，快点。", 37, 2074143, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.forceStartQuest(30925, '1');
                                                      cm.forceStartQuest(30919, '1');
                                                      cm.updateInfoQuest(30438, "gExpCheck=1;NpcSpeech=20740281/20740292/20740013");
                                                      cm.gainExp(198883);
                                                      cm.forceCompleteQuest(30438);
                                                      cm.inGameDirectionEvent_AskAnswerTime(400);
                                                      cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                                    } else if (status === V++) {
                                                      cm.dispose();
                                                      cm.warp(224000000, 15, true);
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