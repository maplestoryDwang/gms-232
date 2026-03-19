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
      cm.npc_ChangeController(9330204, "oid=852013", 339, -7, 1, 289, 389, 1, true, 0, false);
      cm.npc_SetSpecialAction('oid=852013', 'summon', 0, 0);
      cm.setSessionValue("Suha5", "852013");
      cm.sendNormalTalk('现在有提起精神了吗？', 1, 9330204, false, true);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.spawnMobLimit(9410157, 1, -100, 5, 100);
        cm.spawnMobLimit(9410158, 1, -540, -145, 100);
        cm.spawnMobLimit(9410158, 1, -540, -145, 100);
        cm.sendNormalTalk("咻。秀禾。这里是哪里呢？父亲呢？", 3, 9330204, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("幸好我的伤口没有哪么深，所以还算可以帮忙掩护你。", 1, 9330204, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("已经说好将会在渡口见面，所以，赶紧去吧。", 1, 9330204, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("是喔? 真的吗? ", 3, 9330204, true, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(720);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk('嘘，稍等一下。', 1, 9330204, false, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("好像还有跟踪我们的家伙的样子。", 1, 9330204, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("我来除掉这些家伙。得在此地分手了。请记住。要在渡口见面！", 1, 9330204, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("我会除掉追逐你们的家伙，可是前往的路上仍然不太顺遂。我会在路上放上告知的标志板，请多小心。", 1, 9330204, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("恩，知道了!", 3, 9330204, true, true);
                          } else {
                            if (status === V++) {
                              cm.npc_SetSpecialAction("oid=852013", "teleportation", 0, 1);
                              cm.inGameDirectionEvent_AskAnswerTime(720);
                            } else {
                              if (status === V++) {
                                cm.npc_LeaveField("oid=852013");
                                cm.sendNormalTalk("父亲真的会没事吗？", 3, 9330204, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("如果回头的话？不是的。渡口！先去渡口！秀禾不可能说谎！在渡口见父亲。", 3, 9330204, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("好吧，就照秀禾说的去见面吧。", 3, 9330204, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else if (status === V++) {
                                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                        cm.setInGameDirectionMode(false, true, false);
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