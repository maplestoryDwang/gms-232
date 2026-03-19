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
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.sendNormalTalk_Bottom("#face0#唔哇……", 37, 9400580, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#b真帅啊。", 57, 0, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#你看到那边的村子了吗？", 37, 9400580, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#b哪里？", 57, 0, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#那里！在悬崖中间！", 37, 9400580, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#b啊！哇，在那种地方居然有村子。", 57, 0, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face3#看起来真坚固啊？在那里大家应该都会很安全吧。", 37, 9400580, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#b因为大家都有自己的生活。", 57, 0, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#……没错。啊！快点重新下去吧？", 37, 9400580, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom('#b好的，抓紧了啊！', 57, 0, true, true);
                      } else if (status === V++) {
                        cm.forceStartQuest(64059, '2');
                        cm.warp(867201560, 0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;