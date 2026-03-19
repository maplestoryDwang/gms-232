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
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 860, 360);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(2074143, "oid=2607086", 806, 322, 525, 756, 856, 0, false, 500, false);
        cm.npc_SetSpecialAction("oid=2607086", "summon", 0, 0);
        cm.npc_ChangeController(2074100, "oid=2607087", 916, 313, 526, 866, 966, 1, true, 500, false);
        cm.npc_SetSpecialAction("oid=2607087", 'summon', 0, 0);
        cm.inGameDirectionEvent_ForcedFlip(-1);
        cm.sendNormalTalk_Bottom("#face3#小荳啊……啊啊！小荳你这个傻瓜……", 37, 2074100, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("嘿嘿，反正，一开始就不行的。\r\n不，其实我也没那么喜欢那个家伙。\r\n那家伙长成那个模样。", 37, 2074143, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face3#小荳啊。", 37, 2074100, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("怎么了，怎么姐姐反倒哭起来了？\r\n我真的没事的，真的！是真的！\r\n嗯……不过这里的衣服是不是真的很漂亮啊？我也在这里工作怎么样？", 37, 2074143, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face3#……", 37, 2074100, true, true);
              } else {
                if (status === V++) {
                  cm.npc_ChangeController(2074145, "oid=2607134", 747, 313, 525, 697, 797, 0, false, 500, false);
                  cm.npc_SetSpecialAction("oid=2607134", "summon", 0, 0);
                  cm.npc_ChangeController(2074144, "oid=2607135", 677, 313, 524, 627, 727, 0, false, 500, false);
                  cm.npc_SetSpecialAction("oid=2607135", "summon", 0, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(300);
                } else {
                  if (status === V++) {
                    cm.npc_setForceFlip("oid=2607086", -1);
                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2607086"], [0, 0, 0, 1, 0, 1, 0, 0]);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("哞哞！你这个傻瓜！", 37, 2074144, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("牛？你怎么会在这里……", 37, 2074150, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("呱呱呱！看不到你人，我们找遍了整个村子！\r\n郡守那家伙都要走了，你在这里做什么！", 37, 2074145, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("哦？哦，我那什么，就暂时帮会儿忙。", 37, 2074150, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("哞哞！！！！我还不知道你这么傻！！！！\r\n你赶紧去找郡守啊！", 37, 2074144, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("不用，不用，我还是别去了。\r\n我要在这里……", 37, 2074150, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("对我们，你还要说谎吗！呱呱呱！", 37, 2074145, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom('…………', 37, 2074150, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("我们也就算了，至少你要看着那家伙走才是吧！\r\n你这个傻子！这里就交给我们，你赶紧去吧！", 37, 2074145, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("郡守那家伙现在真的快要出发了，要是一个不小心，也许就再也看不到了！", 37, 2074145, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("……谢谢。", 37, 2074150, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_setForceFlip("oid=2607086", 1);
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("姐姐，我这就赶紧去。", 37, 2074150, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_setForceFlip("oid=2607086", -1);
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_LeaveField("oid=2607086");
                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whati", "oid=2607135"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("哞哞！你们在做什么呢？", 37, 2074144, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face2#嗯？", 37, 2074100, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("呱呱！赶紧跟上去！\r\n不要让小荳一个人送走郡守！\r\n替我们陪在小荳身边！我们……毕竟是动物……", 37, 2074145, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face3#谢谢你们，真的，你们真是好朋友。\r\n那这里就麻烦你们了。\r\n#b#h0##k，来，我们也赶紧追上去吧。", 37, 2074100, true, true);
                                                              } else if (status === V++) {
                                                                cm.dispose();
                                                                cm.warp(224000057, 20);
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
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;