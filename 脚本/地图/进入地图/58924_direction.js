var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  var V = "action" + cm.getNumberFromQuestCustomData(58900);
  eval(V)(f, E, e);
}
function action0(f, E, e) {
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
      if ("clear" === cm.getStringFromQuestInfo(58973 + cm.getNumberFromQuestCustomData(58900), "dr1")) {
        cm.dispose();
        return;
      }
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.setStandAloneMode(true);
      cm.npc_ChangeController(9131000, "oid=539076876", 0, 0, 5, -50, 50, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=539076876", 'summon', 0, 0);
      cm.sendNormalTalk_Illus_II("感觉在哪里见过啊。", 0, 5, false, true, 9131000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Illus_II("但是又想不起来……看来不强啊。", 0, 5, true, true, 9131000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Illus_II("又是来报仇的？你这种人我见得太多了，现在都烦了。", 0, 5, true, true, 9131000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk(" 我不是追着你来的，没想到你这家伙竟然在这里。", 17, 0, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk('今天就是你的死期！', 17, 0, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Illus_II("啊……听到声音就想起来了。呼，似乎连做给一个人吃都不够啊。", 0, 5, true, true, 9131000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Illus_II("我就随便挑衅一下都成了这样，看来你还是没什么长进。", 0, 5, true, true, 9131000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("让你看看我的剑的厉害吧！", 17, 0, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Illus_II("抱歉，不过我很忙，没空陪小孩子玩。", 0, 5, true, true, 9131000);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Illus_II('真是大放厥词啊。', 0, 5, true, true, 9131000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Illus_II('那我就先走一步了。', 0, 5, true, true, 9131000);
                        } else {
                          if (status === V++) {
                            cm.npc_LeaveField("oid=539076876");
                            cm.npc_LeaveField("oid=539076876");
                            cm.forceCompleteQuest(58937);
                            cm.sendNormalTalk(" 我和你不共戴天！我一定要找到你！ ", 17, 0, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk(" 你还想去哪儿！", 17, 0, true, true);
                            } else if (status === V++) {
                              cm.updateInfoQuest(58973 + cm.getNumberFromQuestCustomData(58900), "m035=clear;dr1=clear");
                              cm.setStandAloneMode(false);
                              cm.eventSKill(0);
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
      if ("clear" === cm.getStringFromQuestInfo(58973 + cm.getNumberFromQuestCustomData(58900), "dr1")) {
        cm.dispose();
        return;
      }
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.setStandAloneMode(true);
      cm.npc_ChangeController(9131004, "oid=539861868", 0, 0, 5, -50, 50, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=539861868", "summon", 0, 0);
      cm.sendNormalTalk_Illus_II("你，怎么我到哪儿都有你？", 0, 5, false, true, 9131004);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Illus_II("嗯，难道是故意的？", 0, 5, true, true, 9131004);
      } else {
        if (status === V++) {
          cm.sendNormalTalk(" 我才不是追着你，而是我在扬善除恶，你在作恶多端。", 17, 0, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk(" 不过你为什么来这儿？", 17, 0, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Illus_II("啊，我最近找到了一个很不错的灵魂，可以用来做式神……", 0, 5, true, true, 9131004);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Illus_II("你不也知道吗？绫小路家族最厉害的阴阳师……也许是你的父亲……？", 0, 5, true, true, 9131004);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("闭嘴！我才不会相信你的话呢！", 17, 0, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Illus_II("不信就算了呗。不过那个式神一直拿着一本书……题目是什么来着？", 0, 5, true, true, 9131004);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Illus_II("没关系，反正你也不知道，我要先走了。", 0, 5, true, true, 9131004);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Illus_II("我有急事呢，告辞了。", 0, 5, true, true, 9131004);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk('你这家伙……', 17, 0, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk(" 你要去哪儿！！难道真的要把父亲的灵魂作为式神……", 17, 0, true, true);
                          } else if (status === V++) {
                            cm.forceCompleteQuest(58965);
                            cm.updateInfoQuest(58973 + cm.getNumberFromQuestCustomData(58900), "m035=clear;dr1=clear");
                            cm.npc_LeaveField("oid=539861868");
                            cm.npc_LeaveField("oid=539861868");
                            cm.setStandAloneMode(false);
                            cm.eventSKill(0);
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
function action2(f, E, e) {
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
      if ("clear" === cm.getStringFromQuestInfo(58973 + cm.getNumberFromQuestCustomData(58900), "dr1")) {
        cm.dispose();
        return;
      }
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.setStandAloneMode(true);
      cm.npc_ChangeController(9130116, "oid=457876386", 312, -46, 21, 262, 362, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=457876386", 'summon', 0, 0);
      cm.sendNormalTalk_Illus_II("你怎么又追着我。", 0, 5, false, true, 9130116);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Illus_II("你不来还好，现在我必须得处理掉你了。", 0, 5, true, true, 9130116);
      } else {
        if (status === V++) {
          cm.sendNormalTalk(" 这，不都是没用的吗？这样做对你有什么好处？", 17, 0, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk(" 这不是为了你自己，而是为了织田那家伙。你，其实也不喜欢这些事情吧。你和我在一起的时候……", 17, 0, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Illus_II("别说废话了，闭嘴。", 0, 5, true, true, 9130116);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Illus_II("我那么爱护你，你居然还是背叛了我。对你这样的庶出，我就不应该手下留情。", 0, 5, true, true, 9130116);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Illus_II("现在只要魔王再次降临，织田信长的时代就会到来了。", 0, 5, true, true, 9130116);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk(" ……已经晚了吗……？", 17, 0, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Illus_II("……不早不晚。你和我就到此为止了。现在真的结束了。我现在要去尽我的本分了。", 0, 5, true, true, 9130116);
                    } else if (status === V++) {
                      cm.forceCompleteQuest(58924);
                      cm.updateInfoQuest(58972, "m035=clear;dr1=clear");
                      cm.npc_LeaveField("oid=457876386");
                      cm.npc_LeaveField("oid=457876386");
                      cm.setStandAloneMode(false);
                      cm.eventSKill(0);
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