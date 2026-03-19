var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (cm.isQuestFinished(40051)) {
    cm.dispose();
  } else {
    action1(f, E, e);
  }
}
function action1(f, E, e) {
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
      cm.npc_ChangeController(2400006, 'oid=24108', -98, 0, 1, -148, -48, 0, false, 0, false);
      cm.npc_ChangeController(2410009, "oid=24109", 313, 0, 1, 263, 345, 0, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.npc_ChangeController(2410003, "oid=2224570", 113, -15, 1, 63, 163, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2224570", "summon", 0, 0);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_MoveAction(2);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_MoveAction(0);
          cm.inGameDirectionEvent_AskAnswerTime(2000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("#p2410003#……这不是，#p2410003#吗？！……我说呢，之前在神殿里没见到过，难道是留下来当警戒兵了？", 41, 2400005, false, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_OneTimeAction(4, 0);
              cm.sendNormalTalk("#face2#……#p2410008#？真的是#p2410008#吗？等，等一下！先别打我！我不想打架！", 33, 2410003, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("……你们认识？", 41, 2400006, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("#m321000100#里没有我不认识的人……喂，#p2410003#。你不想打架？我怎么可能相信你？", 41, 2400005, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("#face2#怎么相信……你也知道的？我比你弱很多。跟你打架肯定是必输无疑，况且我也不喜欢打架。", 33, 2410003, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("#face2#而且……我还无法相信……你竟然是#r影子骑士团的叛徒#k？这到底怎么回事？", 33, 2410003, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("#face11#影子骑士团的叛徒？是他们这么说的吗？", 41, 2400005, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("#face2#是的……是#p2410002#队长说的。你……#p2410008#砍了#p2410001#队长就逃跑了……全村人都在追捕你。", 33, 2410003, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("#face2#但是#p2410008#怎么可能会那么做，像你这么老实诚实的家伙，有什么理由这么做？我难以想象……", 33, 2410003, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("#face2#真的吗？是真的吗，#p2410008#？你真的打倒了#p2410001#队长和#p2410004#、#p2410005#之后逃跑的吗？", 33, 2410003, true, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_MoveAction(0);
                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                cm.effect_OnUserEff("Effect/OnUserEff.img/questEffect/phantom/tutorial");
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("#face11#…………", 41, 2400005, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("#face2#为什么？为什么这么做？你是我们影子骑士团最引以为豪的王牌啊！我以为你会成为下一任的攻击队长！到底是为什么？", 33, 2410003, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("#face2#我真的无法明白……你为什么会做这种事情。影子骑士团对你做错什么了吗？", 33, 2410003, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("#face11#我没时间和你一一说明，我要到里边拿个东西。如果你不想打架就给我让路……要不就和我打。你选择吧。", 41, 2400005, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_OneTimeAction(4, 0);
                                          cm.sendNormalTalk("#face2#……我刚才也说过，我不想和你打，即使打了也肯定会输……我还把你当成我的伙伴……这肯定有什么误会。", 33, 2410003, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk("#face2#如果是在#m321000100#出生并长大的你，肯定会是天大的误会。但换做是我，就会难以置信的……", 33, 2410003, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk("#face2#但是误会总有一天会解开的……我们也会重新变成伙伴。我不想到那时候尴尬地面对你，所以我打算给你让路。", 33, 2410003, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk("……我们后会有期，一定要。", 33, 2410003, true, true);
                                              } else if (status === V++) {
                                                cm.npc_LeaveField("oid=2224570");
                                                cm.updateInfoQuest(40069, "clear=clear");
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
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;