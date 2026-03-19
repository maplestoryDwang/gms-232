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
      cm.npc_ChangeController(2400011, "oid=27067", 646, 66, 17, 596, 696, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("我们竟然由于不放心神殿而来到这种地方说话……真是无语了。", 41, 2400005, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("#face11#雷切尔说，拥有蜘蛛之人是叛徒……这是真的吗？", 41, 2400006, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("#face11#……你之前不是也说了嘛。影子骑士团是怎么知道我们要去哪的，还事先准备了假的女神之泪。那话意味着我们的移动路线被提前泄露给了影子骑士团。", 41, 2400005, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("#face11#我们的移动路线是由神殿的占卜器决定的。影子骑士团不可能提前知道。尽管如此，他们还是知道了我们的移动路线的话，那就意味着……#r神官中出现了叛徒#k。", 41, 2400005, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("#face10#…………", 41, 2400006, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("#face10#……不要做出那副表情。我也希望这不是真的。威尔那家伙无比阴险……他可能用了什么我们没想到的手段。说不定，这只是他的离间计。为了离间我们和神官……", 41, 2400005, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("#face11#但我们不能不以防万一。我们不能背负着不安因素出去作战。有着那样的顾虑是无法专心作战的。你明白了吗？", 41, 2400005, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("#face10#……嗯。", 41, 2400006, true, true);
                    } else if (status === V++) {
                      cm.dispose();
                      cm.warp(326000000, 0, false);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;