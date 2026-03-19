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
      cm.npc_ChangeController(3001626, "oid=375518", -793, -171, 0, -843, -769, 1, false, 0, false);
      cm.npc_ChangeController(3001616, "oid=375519", -1243, 35, 13, -1293, -1193, 0, false, 0, false);
      cm.npc_ChangeController(3001634, "oid=375520", -2196, 35, 1, -2246, -2146, 1, false, 0, false);
      cm.npc_ChangeController(3001602, "oid=375521", 400, 32, 0, 350, 450, 1, false, 0, false);
      cm.npc_ChangeController(3001613, 'oid=375522', -4, 35, 32, -54, 46, 0, false, 0, false);
      cm.npc_ChangeController(3001614, "oid=375523", -103, 35, 32, -153, -53, 0, false, 0, false);
      cm.npc_ChangeController(3001615, 'oid=375524', 287, 32, 0, 237, 337, 0, false, 0, false);
      cm.npc_ChangeController(3001635, "oid=375525", 289, 31, 0, 239, 339, 1, false, 0, false);
      cm.npc_ChangeController(3001603, "oid=375526", -1774, 35, 12, -1824, -1724, 0, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2500, 0, 730, 80);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.askAcceptDecline_Bottom("#face11#听过传闻之后，我大概有点感觉了，我决定从这一刻起成为解决师。\r\n我要去那个叫#r#m410000201##k还是什么地方看看。", 36, 3001674 + cm.getPlayer().getGender());
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face1##fc0xFF25f1ca#你该不会打算将时间浪费在无谓的事情上吧？", 36, 3001651, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face10#这当然是为了你和我，我们所有人的，\r\n毕竟事件发生之地出现怪物的可能性也比较高吧？", 36, 3001674 + cm.getPlayer().getGender(), true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face5#所以就别再废话了，\r\n咳咳，那就有请我这个道士登场吧。", 36, 3001674 + cm.getPlayer().getGender(), true, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_同时移动镜头和人(1, 500);
                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                      } else {
                        if (status === V++) {
                          cm.npc_ChangeController(3001651, "oid=2949332", 750, 4, 66, 700, 800, 1, true, 0, false);
                          cm.npc_SetSpecialAction("oid=2949332", "summon", 0, 0);
                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/D_appear", 100);
                          cm.inGameDirectionEvent_AskAnswerTime(2500);
                        } else {
                          if (status === V++) {
                            cm.npc_SetForceMove("oid=2949332", -1, 30, 80);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#唔……这家伙还真就只有这张嘴了，\r\n我怎么就跟这种家伙成了一伙呢，往后的日子可有罪受了。", 36, 3001651, false, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#那家伙的道术还在起步阶段，\r\n能够对付的也就只有那些不入流的小怪吧？看样子还挺会动脑筋的。", 36, 3001651, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#我虽然稍微解除了一些那家伙身上的道术封印，\r\n不过也不会再有所介入了。", 36, 3001651, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#要是随意触碰别人施的法术，搞不好会出事……\r\n剩下的就靠你了。", 36, 3001651, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#快快领悟吧，小鬼，也许自己破除那道封印也不失为一段不错的经历……\r\n不对，要尽快封印那些怪物才行！", 36, 3001651, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_SetSpecialAction("oid=2949332", "special2", 1000, 1);
                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/D_appear", 100);
                                          cm.inGameDirectionEvent_AskAnswerTime(1100);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_LeaveField("oid=2949332");
                                            cm.npc_LeaveField("oid=2949332");
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else {
                                              if (status === V++) {
                                                cm.forceStartQuest(39546, '');
                                                cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                      cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                    } else if (status === V++) {
                                                      cm.warp(410000200, 5, false);
                                                      cm.setStandAloneMode(false);
                                                      cm.eventSKill(0);
                                                      cm.setInGameDirectionMode(false, true, false);
                                                      cm.OnStartNavigation(410000201, 0, '', 39546);
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
  }
}