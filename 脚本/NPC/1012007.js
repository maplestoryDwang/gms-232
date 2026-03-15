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
      var w = cm.getPlayer().getPosition();
      if (Math.abs(w.x + 1590) < 160 && Math.abs(w.y + 1590) < 160) {
        if (cm.haveItem(4031035, 1)) {
          cm.sendNormalTalk("哎哟~ 那是我哥哥的信吧！他又怪我不工作贪玩了吧？嗯？啊~ 你按我哥说的，一路上带着宠物一起上来的吗？好！你这么辛苦地上来了，我给你提高你跟宠物之间的亲密度。", 0, 1012007, false, true);
        } else {
          cm.sendNormalTalk("我哥哥在下面似乎有事找我，你能帮忙带个话吗？", 0, 1012007, false, false);
          cm.dispose();
        }
      } else {
        cm.sendOk("……快来啊你怎么离我这么远！？");
        cm.dispose();
      }
    } else {
      if (status === V++) {
        cm.sendNormalTalk("怎么样？是不是觉得宠物跟你更亲密了！\r\n以后你可以召唤出来三只宠物。兴奋吗？", 0, 1012007, true, true);
      } else {
        if (status === V++) {
          if (cm.getJob() == 2001 || cm.getJob() >= 2200 && cm.getJob() <= 2218) {
            cm.teachSkill(20011024, 1, 0);
          } else {
            if (cm.getJob() == 2000 || cm.getJob() >= 2100 && cm.getJob() <= 2112) {
              cm.teachSkill(20000024, 1, 0);
            } else if (cm.getJob() >= 1000 && cm.getJob() <= 1512) {
              cm.teachSkill(10000018, 1, 0);
            } else {
              cm.teachSkill(8, 1, 0);
            }
          }
          cm.gainItem(4031035, -1);
          cm.playerMessage(-1, "学会技能：群宠");
          cm.playerMessage(1, "学会技能：群宠");
          cm.dispose();
        }
      }
    }
  }
}