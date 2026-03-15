var status = -1;
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  status++;
  if (status == 0) {
    cm.askMenu("这里是位于彩虹岛东北部的叫#b#m1010000##k的村落...你已经知道彩虹岛是新手练习的地方吧？这里只出现比较弱的怪兽，所以你放心吧。");
  } else if (status == 1) {
    cm.askMenu("如果你希望变得更强大，就去#b#m60000##k，在那里乘船去#b金银岛#k。那个岛的规模很大，这里可是比不上得。");
  } else {
    status = -1;
    cm.askMenu("听说在金银岛可以学到专门的职业技能。好象是叫#b#m102000000##k来着...？有人说那里还有非常荒凉的高原村庄，在那里有很多战士。是高原...到底是怎么样的地方呢？");
    cm.dispose();
  }
}