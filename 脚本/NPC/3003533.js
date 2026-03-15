var status = 0;
var sel = -1;
function start() {
  status = -1;
  action(1, 0, 0);
}
function action(f, W, U) {
  var V = cm.getMapId();
  if (f == -1) {
    cm.dispose();
  } else {
    if (f == 0) {
      cm.dispose();
      return;
    }
    if (f == 1) {
      status++;
    } else {
      status--;
    }
    switch (V) {
      case 450007040:
        action0(f, W, U);
        break;
      case 450010700:
        if (cm.getMap().getNumMonsters() > 0) {
          cm.playerMessage(-1, "必须消灭掉所有怪物，继续向神殿深处前进。");
          cm.dispose();
        } else {
          cm.dispose();
          cm.openNpc(2008, 'BOSS奖励结算');
        }
        break;
      default:
        cm.dispose();
    }
  }
}
function action0(f, W, U) {
  if (status == 0) {
    cm.askAcceptDecline_Bottom("必须进去看看。", 56, 3003533);
  } else if (status == 1) {
    cm.updateInfoQuest(34560, "30=h0;50=h0;31=h0;51=h0;32=h1;52=h0;33=h1;53=h0;34=h0;54=h0;35=h0;55=h1;36=h0;56=h0;37=h0;57=h0;38=h0;58=h0;39=h0;59=h0;40=h0;60=h0;41=h0;42=h0;43=h0;44=h0;45=h0;46=h0;47=h0;48=h0;49=h0");
    cm.dispose();
    cm.warp(450007200, 2);
  }
}
function action1(f, W, U) {
  if (status == 0) {
    cm.sendNormalTalk("再这样下去，一切都会凋零的，不管是我，是你，还是我们所有人。\r\n\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000？悲观的精灵", 4, 3003337, false, true);
    cm.dispose();
  }
}
function action2(f, W, U) {
  if (status == 0) {
    cm.sendNormalTalk("再这样下去，一切都会凋零的，不管是我，是你，还是我们所有人。\r\n\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000？悲观的精灵", 4, 3003337, false, true);
    cm.dispose();
  }
}