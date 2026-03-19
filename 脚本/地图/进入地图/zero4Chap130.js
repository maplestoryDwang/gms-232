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
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("我们先走啦！稍后我们会用预备动力把灯点亮。那时你们就能见到绑匪啦！感谢你们的帮助！祝你们好运！", 33, 2450002, false, true);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_MoveAction(0);
          cm.inGameDirectionEvent_AskAnswerTime(2000);
          cm.effect_OnUserEff("Effect/OnUserEff.img/questEffect/phantom/tutorial");
        } else {
          if (status === V++) {
            cm.sendNormalTalk('安静点……', 41, 2400006, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("你害怕？要抓住我的手吗？", 41, 2400005, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("女神之泪还没来吗？灯什么时候才会亮啊？", 41, 2400005, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("呵呵呵呵……这是谁啊？这不是时间超越者吗？", 33, 2450000, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else if (status === V++) {
                    cm.dispose();
                    cm.warp(325090140, 0, false);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;