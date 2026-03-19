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
      cm.npc_ChangeController(2074100, "oid=2597047", 1583, 304, 557, 1533, 1633, 0, true, 500, false);
      cm.npc_SetSpecialAction("oid=2597047", "summon", 0, 0);
      cm.npc_ChangeController(2074105, "oid=2597048", 1642, 304, 559, 1592, 1692, 1, false, 500, false);
      cm.npc_SetSpecialAction("oid=2597048", "summon", 0, 0);
      cm.sendNormalTalk_Bottom("现在稍微好点了吗。", 37, 2074105, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face0#是，好点了。", 37, 2074100, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face3#我……到底是谁呢？", 37, 2074100, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face3#我之所以会对宝玉有反应，会不会……是因为我和它们有什么关联呢？", 37, 2074100, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("估计是，\r\n也许若是能找到九尾狐和鬼怪，就能查出点什么了。", 37, 2074105, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face3#……嗯。", 37, 2074100, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("你也不要太难过，\r\n不管你是谁，我和威兹都会把你看得很珍重。", 37, 2074105, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#这个嘛！是啊，毕竟过去就只是过去而已。", 37, 2074100, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#因为那点记都记不起来的事情而伤心难过可怎么行？\r\n好！我没事的。", 37, 2074100, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom('……', 37, 2074105, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#多亏于此，我还有了能够和宝玉产生共鸣的能力嘛？\r\n这可是相当了不起的！虽然……目前为止还没怎么能派上用场……", 37, 2074100, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("真是……谢谢你了。\r\n能够成长得这么开朗。", 37, 2074105, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#哎，爷爷怎么反倒比我伤心了。\r\n我没事的，来，我得赶紧去找到剩下的宝玉啊！", 37, 2074100, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("是啊，等到这场旅途结束时，要是你能知晓你的过去就再好不过了。\r\n#b剩下的宝玉#k也要麻烦你了，小可爱。", 37, 2074105, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("话说回来，#b小山泉#k那里好像发生了一些奇妙的事情，\r\n也许就和宝玉有关。", 37, 2074105, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.updateInfoQuest(30429, "gExpCheck=1");
                                    cm.gainExp(852359);
                                    cm.forceCompleteQuest(30429);
                                    cm.inGameDirectionEvent_AskAnswerTime(400);
                                    cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                  } else if (status === V++) {
                                    cm.dispose();
                                    cm.warp(224000000, 21, true);
                                    cm.setInGameDirectionMode(false, true, false);
                                    cm.OnStartNavigation(224000102, 0, '', 0);
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