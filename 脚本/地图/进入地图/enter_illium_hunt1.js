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
      cm.setSessionValue('kill_count', '0');
      cm.setPartner(1, 3001300, 80002330, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.spawnMobLimit(2400418, 1, 200, 813, 100);
      cm.spawnMobLimit(2400418, 1, 350, 813, 100);
      cm.spawnMobLimit(2400418, 1, 600, 813, 100);
      cm.sendNormalTalk_Bottom("#face4#呃啊！那些是什么！？", 37, 3001351, false, true, 1);
    } else {
      if (status === V++) {
        cm.updateInfoQuest(26011, '');
        cm.sendNormalTalk_Bottom("#face0#正好在不远的地方,攻击豪猪后,就能获得配件。", 37, 3001300, true, true, 1);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face3#豪猪？呃……我在书上看过,长得超级恐怖！？", 37, 3001351, true, true, 1);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#最基本的攻击法是按#rCtrl键#k发动普通攻击。靠近怪物后按下#rCtrl键#k即可发动攻击。", 37, 3001300, true, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#我能做到吗？毕竟这是我第一次攻击某个东西……", 37, 3001351, true, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#嗯……平复心情……按下Ctrl键发动攻击,对吧？", 37, 3001351, true, true, 1);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                } else if (status === V++) {
                  cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                  cm.setInGameDirectionMode(false, true, false);
                  cm.getTopMsgFont("点击[Ctrl]键可以攻击怪物。", 3, 20, 20, 0, 0);
                  cm.effect_OnUserEff("UI/tutorial.img/illium/attack");
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