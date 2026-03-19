var status = -1;
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  status++;
  if (cm.getInfoQuest(34843) == "start=1") {
    action34843(f, E, e);
  } else if (cm.isQuestFinished(34837) && cm.getQuestStatus(34838) == 0) {
    action34838(f, E, e);
  } else {
    cm.curNodeEventEnd(true);
    cm.setInGameDirectionMode(true, false, false);
    cm.setStandAloneMode(true);
    cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
    cm.onTeleport(0, 3, cm.getPlayer().getId(), 1, 35);
    cm.setStandAloneMode(false);
    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
    cm.setInGameDirectionMode(false, true, false);
    cm.dispose();
  }
}
function action34838(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 1, 35);
      cm.sendNormalTalk_Bottom("#face0#希纳斯女皇的提议，大家怎么看？", 37, 3001354, false, true, 1);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk_Bottom("#face3#我不想平白无故插手其他人的事。", 37, 3001311, true, true, 1);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#可惜我们还太嫩了！那些家伙看起来很厉害……接受他们的帮助没什么坏处。", 37, 3001310, true, true, 1);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face3#变强以后？凭我们的力量足够对付他们了！莫里奥你，难道不相信伊利温？这个胆小鬼！", 37, 3001311, true, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face3#希娜，这话有点过了吧。莫里奥说得有道理。他们对于冒险岛了如指掌，说不定能帮我们尽早找到圣所。", 37, 3001354, true, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#你说能很快找到圣所？", 37, 3001311, true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#那……好吧。就这么办。", 37, 3001311, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face2#希娜，知道吗？你有时候可真奇怪！太没劲了。", 37, 3001310, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face3#多管闲事。你算哪根葱？", 37, 3001311, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#够了。快回去跟女皇报告吧。", 37, 3001354, true, true, 1);
                      } else if (status === V++) {
                        cm.forceStartQuest(34838, '');
                        cm.updateInfoQuest(34838, "talk=1");
                        cm.dispose();
                        cm.warp(130000000, 0, false);
                        cm.setStandAloneMode(false);
                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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
function action34843(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.npc_ChangeController(3001352, "oid=252802", -352, 81, 15, -402, -302, 0, false, 0, false);
      cm.npc_ChangeController(3001355, 'oid=252803', -244, 81, 15, -294, -194, 0, false, 0, false);
      cm.npc_ChangeController(3001356, 'oid=252804', 442, 81, 16, 392, 482, 1, false, 0, false);
      cm.npc_ChangeController(3001357, "oid=252805", 294, 81, 16, 244, 344, 1, false, 0, false);
      cm.npc_ChangeController(3001382, "oid=252806", 188, 81, 16, 138, 238, 1, false, 0, false);
      cm.npc_ChangeController(3001383, "oid=252807", 111, 81, 16, 61, 161, 1, false, 0, false);
      cm.npc_ChangeController(3001314, "oid=252808", -631, 81, 17, -681, -581, 4, true, 0, false);
      cm.npc_ChangeController(3001315, 'oid=252809', -720, 81, 17, -770, -670, 4, true, 0, false);
      cm.npc_ChangeController(3001316, "oid=252810", -807, 81, 17, -857, -757, 4, true, 0, false);
      cm.npc_ChangeController(3001317, "oid=252811", 575, 81, 19, 525, 625, 5, true, 0, false);
      cm.npc_ChangeController(3001318, "oid=252812", 640, 81, 19, 590, 690, 5, true, 0, false);
      cm.npc_ChangeController(3001319, "oid=252813", 733, 81, 19, 683, 783, 5, true, 0, false);
      cm.npc_ChangeController(3001320, 'oid=252814', 828, 81, 19, 778, 878, 5, true, 0, false);
      cm.npc_ChangeController(3001342, "oid=252815", -499, 81, 17, -549, -499, 0, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 1, 35);
      cm.sendNormalTalk_Bottom("#face0#据希娜的情报，有人在米纳尔森林看到过水晶门。", 37, 3001354, false, true, 1);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk_Bottom("#face0#可除了米纳尔森林，并不知道准确的位置。", 37, 3001354, true, true, 1);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face2#啊！那里不是超大嘛！？", 37, 3001307, true, true, 1);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face3#呃……要想全转完……一定很累……", 37, 3001310, true, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#不如我们分头找找看吧？", 37, 3001311, true, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#似乎是个不错的主意呢，希娜？", 37, 3001308, true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#好。那就分头找吧。", 37, 3001354, true, true, 1);
                } else if (status === V++) {
                  cm.setStandAloneMode(false);
                  cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                  cm.setInGameDirectionMode(false, true, false);
                  cm.dispose();
                  cm.warp(940202049, 0, false);
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
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {}
  }
}
function randomNum(f, E) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * f + 1, 10);
    case 2:
      return parseInt(Math.random() * (E - f + 1) + f, 10);
    default:
      return 0;
  }
}