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
      cm.npc_ChangeController(1540801, "oid=60082", -117, 16, 4, -167, -103, 4, true, 0, false);
      cm.npc_ChangeController(1540802, "oid=60083", -438, 16, 4, -488, -388, 4, true, 0, false);
      cm.npc_ChangeController(1540803, 'oid=60084', -189, 16, 4, -239, -139, 4, true, 0, false);
      cm.npc_ChangeController(1540804, "oid=60085", -271, 16, 4, -321, -221, 4, true, 0, false);
      cm.npc_ChangeController(1540806, 'oid=60086', -376, 16, 4, -426, -326, 4, true, 0, false);
      cm.npc_ChangeController(1540807, "oid=60087", -610, 16, 4, -660, -560, 4, true, 0, false);
      cm.npc_ChangeController(1540805, "oid=60088", 13, 16, 3, -37, 63, 4, true, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(1540932, "oid=295018543", 330, 0, 3, 280, 380, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=295018543", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 0, 0);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#果然这次也是你们做到了，阻挡住黑魔法师的也是你们吧。", 37, 1540932, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face19#戴米安实在是太荒谬了。\r\n想要复原被破坏的世界的生命力，要用多久呢？", 37, 1540805, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#这个嘛，估计得耗费上千年吧？", 37, 1540932, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face19#……！！", 37, 1540805, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#在这之前，这片土地上的生命体就都无法存活了。", 37, 1540801, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face19#难道就没有其他方法了吗，世界树？", 37, 1540805, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom('方法倒是有的。', 37, 1540932, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("现在我的力量被奇怪的石头所束缚，\r\n也就是说，我的力量被分为了多个，分散在了这片世界上。", 37, 1540932, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face3#！！那难道就表示你的消亡吗？", 37, 1540804, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#只是我该待的地方有点不同罢了。", 37, 1540932, true, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_PushScaleInfo(3000, 1000, 3000, 150, 0);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#戴米安，那个人……用最悲惨的方式将自己的不幸留在了这个世界上。", 37, 1540932, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#为了防止这片土地再次遭遇这样的不幸，你们得照看好这个世界。", 37, 1540932, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act4/alicia", 100);
                                      cm.npc_SetSpecialAction("oid=295018543", 'special1', 0, 1);
                                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(1600);
                                      } else if (status === V++) {
                                        cm.dispose();
                                        cm.warp(350144100, 0, true);
                                        cm.npc_LeaveField("oid=295018543");
                                        cm.npc_LeaveField("oid=295018543");
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