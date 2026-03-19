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
      cm.npc_ChangeController(2159326, 'oid=246602', 802, 215, 4, 752, 852, 1, false, 0, false);
      cm.npc_ChangeController(2159325, 'oid=246603', 689, 236, 6, 639, 739, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.npc_ChangeController(2159324, "oid=999055", 500, 260, 8, 450, 550, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=999055", 'summon', 0, 0);
      cm.setSessionValue("minorMage", "999055");
      cm.npc_SetForceMove('oid=999055', 1, 70, 100);
      cm.inGameDirectionEvent_MoveAction(2);
      cm.inGameDirectionEvent_AskAnswerTime(300);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg1/3"], [2000, 0, -100, 0, 0, 0, 0, 0, 0]);
        cm.sendNormalTalk("虽然中途出现了妨碍者，但是找到了炼金书的另一半。", 1, 2159324, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("#b(听不到在说什么。)#k", 3, 2159324, true, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_MoveAction(2);
            cm.curNodeEventEnd(true);
            cm.sendNormalTalk("辛苦了。但是妨碍者跟来了。", 1, 2159326, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("#b(被发现了吗……)#k", 3, 2159326, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("让我看看你的脸。快出来吧！", 1, 2159326, true, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_MoveAction(2);
                  cm.curNodeEventEnd(true);
                  cm.npc_SetForceMove('oid=999055', -1, 2, 100);
                  cm.sendNormalTalk("那个家伙是……刚才的妨碍者！力量相当强。", 1, 2159324, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("#b你们好像是想通过传送口逃走，但是我好像先到了一步。你能把炼金书还给我吗？#k", 3, 2159324, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("别开玩笑！为了得到这个东西，你知道我们付出了多少努力？你这个无耻的恶徒！", 1, 2159326, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("#b等等……那个好像不是你们的台词吧……#k", 3, 2159326, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("如果不能把它交给#p2159308#的话，我们就会吃不了兜着走！你能理解我们这些底层部下的悲哀吗？？？", 1, 2159325, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("#b#p2159308#？你们是黑魔法师的手下吗？#p2159308#想用禁忌炼金书干什么！？#k", 3, 2159325, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("你以为我会告诉你吗！", 1, 2159324, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("#b#p2159308#是个喜欢策划阴谋的卑鄙家伙。你们应该比我更清楚。#k", 3, 2159324, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("不许侮辱#p2159308#！他不像#p2159310#那样不冷不热！这个东西，本来就是那个伟大的人的。", 1, 2159326, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("如果这次的事情能成功，就能清除掉所有封印石，让那个伟大的人复活！", 1, 2159324, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("你这笨蛋……说这么多废话……\r\n既然这样，就只能把他干掉了。孩子们！上！", 1, 2159326, true, true);
                                    } else if (status === V++) {
                                      cm.setStandAloneMode(false);
                                      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                      cm.setInGameDirectionMode(false, true, false);
                                      cm.npc_LeaveField("oid=999055");
                                      cm.dispose();
                                      cm.warp(926030010, 0, false);
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