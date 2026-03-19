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
      cm.npc_ChangeController(2074100, "oid=1943702", -124, -33, 6, -174, -74, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=1943702", "summon", 0, 0);
      cm.npc_ChangeController(2074102, "oid=1943703", 11, -33, 6, -39, 61, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=1943703", "summon", 0, 0);
      cm.sendNormalTalk_Bottom("#b#h0##k，你来了啊，\r\n还有，这边，捣蛋鬼~小可爱也在呢，", 37, 2074102, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face0#嘿嘿，就算我会捣蛋，也都解决得很好嘛。", 37, 2074100, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("大致的情况我已经通过朴大爷的信都有所了解了，\r\n你也真是……经历了不少事情嘛。", 37, 2074102, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#……这里，他让我转交给“不成器的徒弟”呢，宝玉。", 37, 2074100, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("嗯……他居然这么说出来……\r\n总之，我会好好在这里保管这些的。\r\n小可爱，这段时间你可以先休息休息了。\r\n你可以去看看更宽广的世界，也大可以出去旅游旅游。", 37, 2074102, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#哦……我其实还有事要做。", 37, 2074100, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("有事要做？", 37, 2074102, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#其实，我打算写书。", 37, 2074100, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("书？你说的是童话书吗？", 37, 2074102, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#……良善者会成为佳话。", 37, 2074100, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("这可是句著名的格言。", 37, 2074102, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#我打算将鬼怪的故事写成书，\r\n我记得的一切，\r\n还有在童话村经历过的所有事情……", 37, 2074100, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("……这个想法不错，\r\n良善者会成为佳话，\r\n邪恶者终将会遭到报应。", 37, 2074102, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("虽说那只是个传说，但有时候也是挺准的。", 37, 2074102, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0##b#h0##k，\r\n等书出来了，我最先送给你！", 37, 2074100, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("在这之前就由我来验收吧，\r\n嗯，反正，\r\n#b#h0##k，真的非常感谢你，能够如此优秀地解决了我这么突然的请求。", 37, 2074102, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("果然，找你帮忙我真是找对人了，\r\n#g这本书#k也算是我送给你的小小报答，\r\n真的非常感谢。", 37, 2074102, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0##b#h0##k！再见！再来玩哦！", 37, 2074100, true, true);
                                      } else if (status === V++) {
                                        cm.updateInfoQuest(30458, "gExpCheck=1");
                                        cm.gainExp(2841198);
                                        cm.forceStartQuest(30458, '');
                                        cm.forceCompleteQuest(30458);
                                        cm.gainItem(2433815, 1);
                                        cm.gainItem(2433816, 1);
                                        cm.gainItem(1142871, 1);
                                        cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                        cm.dispose();
                                        cm.warp(222020000, 0, true);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;