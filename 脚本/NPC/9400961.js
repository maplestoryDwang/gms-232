var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.askMenu("呵呵，你准备好享受这个沙漠中最火热的狩猎场--日蚀地带了吗？呵呵，你准备好应对被日蚀气息所蚕食的怪物了吗！\r\n\r\n#L0#进入#e<日蚀地带>#n#l\r\n#L1#重新听取#e<日蚀地带>#n的说明#l", 4, 9400961);
    } else {
      if (selectionLog[1] == 0) {
        action0(f, W, U, V);
      } else if (selectionLog[1] == 1) {
        action1(f, W, U, V);
      }
    }
  }
}
function action0(f, W, U, V) {
  if (status <= V++) {
    cm.dispose();
    var w = cm.getEventManager("活动_日蚀地带");
    w.startInstance(cm.getPlayer());
  }
}
function action1(f, W, U, V) {
  if (status <= V++) {
    cm.askMenu("呵呵，你准备好享受这个沙漠中最火热的狩猎场--日蚀地带了吗？呵呵，你准备好应对被日蚀气息所蚕食的怪物了吗！\r\n\r\n#L0#进入#e<日蚀地带>#n#l\r\n#L1#重新听取#e<日蚀地带>#n的说明#l", 4, 9400961);
  } else {
    if (status === V++) {
      cm.sendNormalTalk("咳咳……黑暗让你的脑袋都一片黑暗了，我再来说明一次吧……", 4, 9400961, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("在这个日蚀地带，到处都是被日蚀的火热气息所侵蚀的怪物，这些家伙都是能给你带来#e大量经验值#k的非常可爱的家伙哦。", 4, 9400961, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("根据你的#b日冕等级#k，在日蚀地带#b能够停留的时间#k和获得的#b额外经验值#k的量就会增加。\r\n呵呵……一开始#b每30可以获得110%的额外经验值#k，但是如果一直坚持参与，就能在#b45分钟内获得足足140%的额外经验值#k！", 4, 9400961, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("但是，一定要注意，如果角色的等级在#r#e200级以上，获得的经验值将大幅减少#k#n！你得去寻找符合你的水平的更强的敌人！", 4, 9400961, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("对了，我都差点忘了，呵呵。如果能获得在日蚀地带短暂开放的#b沙漠的日冕玫瑰#k，就能#b暂时获得极强的力量#K。你得在黑暗沙漠中独自战斗，这可以说是给你的一个小小礼物吧？呵呵", 4, 9400961, true, true);
            } else if (status === V++) {
              cm.dispose();
            }
          }
        }
      }
    }
  }
}