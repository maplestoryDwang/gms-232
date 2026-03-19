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
      cm.npc_ChangeController(2440021, 'oid=25952', -3519, -20, 140, -3569, -3469, 0, false, 0, false);
      cm.updateInfoQuest(41832, "desert=off;light=enter;three=off;afrien=off;cave=off;west=off");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("#face3#今天不是#p2440000#要和我们回去的日子吗？……这家伙应该没有跑掉吧？", 41, 2400005, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("……？好像#p2440001#在叫我们？", 41, 2400006, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("嗯？什么事？我们不是修炼完了吗。", 41, 2400005, true, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_MoveAction(1);
              cm.inGameDirectionEvent_AskAnswerTime(2000);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_MoveAction(0);
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("不、不好了！#p2440000#和#p2440002#消失了！", 33, 2440021, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("#face7#？！#p2440000#和#p2440002#消失了？该不会他们夜里跑掉的吧？", 41, 2400005, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("再怎么跑……用占卜还不是一样可以追踪吗……", 41, 2400006, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("#face3#啊，对啊。难道他不知道这个就逃跑了吗？", 41, 2400005, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("不是啦！是绑架！绑架！", 33, 2440021, true, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else if (status === V++) {
                            cm.dispose();
                            cm.warp(324000000, 8, false);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;