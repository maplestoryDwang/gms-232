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
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -3237, 289);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1500, 0, -3100, 350);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(2074114, "oid=2592219", -2945, 327, 490, -2995, -2895, 1, true, 500, false);
        cm.npc_SetSpecialAction("oid=2592219", "summon", 0, 0);
        cm.npc_ChangeController(2074119, "oid=2592220", -3314, 329, 487, -3364, -3264, 0, false, 500, false);
        cm.npc_SetSpecialAction("oid=2592220", "summon", 0, 0);
        cm.npc_ChangeController(2074100, "oid=2592221", -3272, 329, 487, -3322, -3222, 0, true, 500, false);
        cm.npc_SetSpecialAction("oid=2592221", "summon", 0, 0);
        cm.npc_ChangeController(2074129, "oid=2592222", -3047, 329, 492, -3097, -2997, 1, false, 500, false);
        cm.npc_SetSpecialAction("oid=2592222", "summon", 0, 0);
        cm.npc_ChangeController(2074129, "oid=2592223", -2950, 329, 490, -3000, -2900, 1, false, 500, false);
        cm.npc_SetSpecialAction("oid=2592223", "summon", 0, 0);
        cm.sendNormalTalk_Bottom("啊呜！大婶，我又来了！\r\n今天应该准备了不少年糕吧？", 37, 2074114, false, true);
      } else {
        if (status === V++) {
          cm.npc_ChangeController(2074120, "oid=2592224", -3183, 327, 488, -3233, -3133, 0, true, 500, false);
          cm.npc_SetSpecialAction("oid=2592224", "summon", 0, 0);
          cm.npc_SetSpecialAction("oid=2592224", "standup", -1, 1);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("哼！行了，你这家伙，都拿去吃吧！", 37, 2074130, false, true);
          } else {
            if (status === V++) {
              cm.setNpcSpecialActionReset("oid=2592224");
              cm.npc_SetForceMove("oid=2592224", 1, 100, 100);
              cm.inGameDirectionEvent_AskAnswerTime(1500);
            } else {
              if (status === V++) {
                cm.npc_SetSpecialAction("oid=2592224", "standup", -1, 1);
                cm.npc_SetSpecialAction("oid=2592223", 'standt3', -1, 1);
                cm.sendNormalTalk_Bottom("啊呜？喔喔喔喔！比平时要多得多呢！\r\n好开心啊，好开心！", 37, 2074114, false, true);
              } else {
                if (status === V++) {
                  cm.npc_SetSpecialAction("oid=2592219", "eat", -1, 1);
                  cm.sendNormalTalk_Bottom("#face3#哎哟……光是看着那些肚子就饿了呢。\r\n我能不能也来点……是不是不太行啊？\r\n额……这可是种拷问啊。", 37, 2074100, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                  } else {
                    if (status === V++) {
                      cm.npc_SetSpecialAction("oid=2592223", 'standt2', -1, 1);
                      cm.sendNormalTalk_Bottom("哎哟，真的！真的太美味了！\r\n大婶，你到底有什么秘方啊？", 37, 2074114, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("什么秘方啊，你这家伙！\r\n不过就是我亲手做的味道，你慢点吃！得噎着了。", 37, 2074130, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("实在是，啊呜啊呜，没法慢着吃啊！\r\n哇啊啊啊啊啊！", 37, 2074114, true, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                          } else {
                            if (status === V++) {
                              cm.npc_SetSpecialAction("oid=2592223", 'standt1', -1, 1);
                              cm.setNpcSpecialActionReset("oid=2592219");
                              cm.sendNormalTalk_Bottom("#face2#难不成……它是真的要把那些都给吃了吗？\r\n它的胃到底是怎么长的啊？", 37, 2074100, false, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("哎哟，稍微有点撑着了。\r\n好像只要再吃一~~点点就可以了，\r\n大婶还有没有多余的啊？", 37, 2074114, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("你都狂吃那么多了肚子还饿吗？\r\n哎哟，你是被饿死鬼上身了吗，明天再来吧！", 37, 2074130, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("好可惜啊……啧啧，\r\n啊呜，大婶，那，我明天再来。\r\n保重，啊呜！", 37, 2074114, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_SetSpecialAction("oid=2592219", "skill2", -1, 1);
                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_LeaveField("oid=2592219");
                                        cm.sendNormalTalk_Bottom("#face2#哇……它可真是个怪物，\r\n居然把那么多全都给吃了。", 37, 2074100, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("不！终于有希望了！", 37, 2074119, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_SetSpecialAction("oid=2592224", "sit", 1, 1);
                                            cm.sendNormalTalk_Bottom('#face0#嗯？', 37, 2074100, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("那个家伙还是头一次会说那种话，\r\n它说只要再稍微吃一点点就饱了！", 37, 2074119, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#是吗？嗯……那就做得比今天再稍微多一点点？", 37, 2074100, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("是，再试一次，只要再帮我这一次。\r\n就试着按今天两倍的量再做一遍。", 37, 2074119, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.forceStartQuest(30918, '1');
                                                    cm.forceCompleteQuest(30918);
                                                    cm.forceForfeitQuest(30918);
                                                    cm.gainExp(142059);
                                                    cm.updateInfoQuest(30918, '');
                                                    cm.forceStartQuest(30912, '1');
                                                    cm.updateInfoQuest(30417, "gExpCheck=1");
                                                    cm.forceStartQuest(30417, '');
                                                    cm.forceCompleteQuest(30417);
                                                    cm.inGameDirectionEvent_AskAnswerTime(400);
                                                    cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                                  } else if (status === V++) {
                                                    cm.dispose();
                                                    cm.warp(224000000, 24, true);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;