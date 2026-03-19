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
  if (cm.getQuestStatus(35932) != 1) {
    cm.dispose();
    return;
  }
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.npc_ChangeController(1013318, 'oid=500001', -382, -73, 1, -432, -332, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -384, -300);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1500);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushScaleInfo(4000, 0, 1000, 4000, -384, 0);
          } else {
            if (status === V++) {
              cm.effect_Text(["#fn黑体##fs18#帕勒坦遗迹"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0]);
              cm.inGameDirectionEvent_AskAnswerTime(4500);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#寻找道路之人，你已经将遗物之力完全解放出来了。\r\n我认可你是遗物真正的主人。", 37, 1013360, false, true);
              } else {
                if (status === V++) {
                  cm.askMenu_Bottom("#face0#……但是你心中的迷雾并未消失。\r\n如果需要，我可以解答你的疑惑。\r\n\r\n#b#L0# 几百年前的仪式 #l", 37, 1013360);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#几百年前，穿着黑袍的怪人\r\n想通过仪式重现遗物原本的力量。", 37, 1013360, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#就像之前说的那样，遗物是世界秩序形成前制造出来的东西。\r\n为了让它恢复力量，就必须让时间回到过去。", 37, 1013360, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#但是他说被挡住了。", 37, 1013359, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#没错。他被时间封印挡住，没能让遗物完全恢复力量。\r\n但是……没有什么是不可能的。", 37, 1013360, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#虽然那个怪人没能做到，但也许有一天能够重现古代之力的人就会出现。\r\n不管其意志是善良，还是邪恶……", 37, 1013360, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#所以我一直在期待……\r\n希望有人能恢复那种力量，并用它来守护世界。", 37, 1013360, false, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#遗物就拜托你了，寻找道路之人……", 37, 1013360, false, true);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 2);
                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0##b（那个叫奇拉的人销声匿迹了吗？\r\n但是像他那样执着的人，应该不会轻易放弃。）#k", 37, 1013359, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face6##b（也许有一天他会再次出现，让世界陷入到危机之中……\r\n就像意念说的那样，没有什么是不可能的。）#k", 37, 1013359, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0##b（过去我只是出于兴趣而在世界各地流浪。\r\n但是在冒险的旅途中，我也拥有了很多珍视的东西。）#k", 37, 1013359, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0##b（我要用这种力量来保护他们。\r\n在笼罩世界的黑暗中，为大家照亮前行之路，是我的使命。）#k", 37, 1013359, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else if (status === V++) {
                                                cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                cm.eventSKill(0);
                                                cm.setInGameDirectionMode(false, true, false);
                                                cm.setStandAloneMode(false);
                                                cm.dispose();
                                                cm.warp(240000001, 0, false);
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
    }
  }
}