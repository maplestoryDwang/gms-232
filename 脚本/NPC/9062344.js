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
      cm.sendNormalTalk("#r#e狩猎等级范围怪物#n#k，有一定概率找到捣蛋鬼威舍们藏起来的#e#b月亮糖#k#n。\r\n\r\n\r\n#r※ 等级范围怪物指的是以角色等级为准，#e-20级到+20级范围#n内的怪物。#k", 4, 9062344, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("逐渐熟悉后，你就能找到躲起来的#b#e捣蛋鬼威舍#n#k了。\r\n\r\n#r※每周能找到月亮糖的地方会逐渐增加。", 4, 9062344, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("例，自#r#e4月14日#n#k起，每获得一个#r#e连杀珠#n#k即可找到 #b#e1个#n#k月亮糖。\r\n\r\n另外，自#r#e4月21日#n#k起，消灭#r#e精英怪物， 精英冠军，精英BOSS#n#k，可额外找到 #b#e10个#n#k月亮糖。\r\n\r\n\r\n#r ※ 只有造成伤害量最大的1名玩家\r\n    可以获得月亮糖。\r\n ※ 使用黑暗符文召唤出的精英怪物\r\n    不提供月亮糖。#k", 4, 9062344, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("自#r#e4月28日#n#k起，每使用一张 #e#r符文#k#n即可多找到 #b#e15个#n#k 月亮糖。\r\n\r\n最后，自#r#e5月5日#n#k起，退出#r#e保罗和普利托的悬赏狩猎#n#k 时，也可以找到#b#e20个#n#k月亮糖。", 4, 9062344, true, false);
          } else if (status === V++) {
            cm.dispose();
          }
        }
      }
    }
  }
}