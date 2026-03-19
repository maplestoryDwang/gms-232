var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  if (cm.isQuestFinished(34950)) {
    action2(f, E, e);
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
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(3001557, "oid=147894023", 286, 30, 68, 236, 336, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=147894023", 'summon', 0, 0);
      cm.npc_ChangeController(3001557, "oid=147894024", 519, 30, 68, 469, 569, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=147894024", "summon", 0, 0);
      cm.npc_ChangeController(3001557, "oid=147894025", 666, 30, 70, 616, 716, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=147894025", "summon", 0, 0);
      cm.npc_ChangeController(3001557, "oid=147894026", 799, 30, 70, 749, 849, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=147894026", 'summon', 0, 0);
      cm.npc_ChangeController(3001542, "oid=147894027", 395, 30, 68, 345, 445, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=147894027", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1000, 1000, 550, -90);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(2000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#我知道你是影子商团的人。嘿嘿，因为你的朋友犯了罪。你也得一起受点教训。", 37, 3001557, 0, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#呃呃……那家伙……竟然抢走了我们的战利品……哎呀，如果不能报仇……", 37, 3001557, 1, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#（黑市……果然是个危险的地方。有人在打架吗？）", 37, 3001500 + cm.getPlayer().getGender(), 1, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#啊，别拽我耳朵！真卑鄙……竟然抓最弱的我来做人质……帮帮我……卡，卡德娜，卡德娜！", 37, 3001550, 1, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#嘿嘿，喊救命也没用。我的同伙们正在抓她呢……哈哈，今天终于可以教训教训她了！", 37, 3001557, 1, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#喂，菜鸟！快跟上来，呃……", 37, 3001557, 1, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#啊！", 37, 3001550, 1, 1);
                      } else {
                        if (status === V++) {
                          cm.askAcceptDecline_Bottom("#face2#（那个孩子……好像有危险。必须救救他。）\r\n\r\n#b（接受时切换地图。）", 37, 3001500 + cm.getPlayer().getGender());
                        } else if (status === V++) {
                          cm.setStandAloneMode(false);
                          cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                          cm.eventSKill(0);
                          cm.dispose();
                          cm.openNpc("影魂异人_救出科尼");
                          cm.setInGameDirectionMode(false, true, false);
                          cm.playerMessage(5, "必须从黑市的好事之徒手上救出科尼。");
                          cm.playerMessage(-1, "必须从黑市的好事之徒手上救出科尼。");
                          cm.npc_LeaveField("oid=147894023");
                          cm.npc_LeaveField("oid=147894024");
                          cm.npc_LeaveField("oid=147894025");
                          cm.npc_LeaveField("oid=147894026");
                          cm.npc_LeaveField("oid=147894027");
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
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.npc_ChangeController(3001541, "oid=147901202", 286, 30, 68, 236, 336, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=147901202", "summon", 0, 0);
      cm.npc_ChangeController(3001541, "oid=147901203", 519, 30, 68, 469, 569, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=147901203", "summon", 0, 0);
      cm.npc_ChangeController(3001541, "oid=147901204", 666, 30, 70, 616, 716, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=147901204", "summon", 0, 0);
      cm.npc_ChangeController(3001541, "oid=147901205", 799, 30, 70, 749, 849, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=147901205", "summon", 0, 0);
      cm.npc_ChangeController(3001550, "oid=147901206", 395, 30, 68, 345, 445, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=147901206", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1000, 1000, 550, -90);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#呃……那家伙是谁？跟影子商团一伙的吗？", 37, 3001557, 0, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#太，太强了！", 37, 3001557, 1, 1);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else if (status === V++) {
                    cm.setStandAloneMode(false);
                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                    cm.warp(402000200, 0, false);
                    cm.eventSKill(0);
                    cm.setInGameDirectionMode(false, true, false);
                    cm.npc_LeaveField("oid=147901202");
                    cm.npc_LeaveField("oid=147901203");
                    cm.npc_LeaveField("oid=147901204");
                    cm.npc_LeaveField("oid=147901205");
                    cm.npc_LeaveField("oid=147901206");
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