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
      cm.askAcceptDecline("虽然今天已完成的委托不能再次领取，但你可以#r自动放弃正在执行的委托#k，也#b可以再次领取相同的委托#k～对了，你该清楚我们影子商团的规矩吧？找我们办事可是要花钱的……#b1个委托#e50万金币#k#n，价格很公道哦～", 0, 3001106);
    } else if (status === V++) {
      cm.askAcceptDecline("那么，你总共要支付1500000金币吗？", 0, 3001106);
    } else {
      cm.dispose();
    }
  }
}