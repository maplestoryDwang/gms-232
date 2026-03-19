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
      cm.setPartner(1, 1540765, 80001594, 0);
      cm.setPartner(1, 1540766, 80001595, 0);
      cm.setPartner(1, 1540767, 80001596, 0);
      cm.useItem(2023447);
      cm.useItem(2023448);
      cm.useItem(2023449);
      cm.spawnMobLimit(8240060, 1, 103, 28, 8);
      cm.spawnMobLimit(8240060, 1, 113, -784, 8);
      cm.spawnMobLimit(8240060, 1, 113, -784, 8);
      cm.spawnMobLimit(8240060, 1, -42, -784, 8);
      cm.spawnMobLimit(8240060, 1, -42, -784, 8);
      cm.spawnMobLimit(8240060, 1, 654, -1594, 8);
      cm.spawnMobLimit(8240060, 1, 142, -2348, 8);
      cm.spawnMobLimit(8240060, 1, 42, -2348, 8);
      if (cm.getNumberFromQuestInfo(33128, "act4") > 0) {
        cm.dispose();
        return;
      }
      cm.updateInfoQuest(33128, "act1=350013000;act2=350024300;act3=350033100;act4=350040200");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_PushMoveInfo(0, 0, 654, -292);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(3000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushMoveInfo(1, 500, 0, 0);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(3001);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("总觉得有点紧……", 57, 0, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#不要担心，队长。这头盔很适合你！", 37, 1540503, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("好像可以通过外围的梯子，爬到上面去。", 37, 1540504, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("队长，前方好像有进行监视的敌人。\r\n是战斗，还是直接无视，选择权在于队长你。", 37, 1540502, true, true);
                  } else if (status === V++) {
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;