var status = -1;
var selectionLog = [];

function start(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    var a = -1;
    selectionLog[status] = b;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNext("呵呵……呵呵！\r\n……我实在是太高兴了，忍不住要笑呢……终于……我终于能实现拥有家的梦想了！\r\n#h0#，你也听说了吧？#b[我的小屋]#k升级的消息！", 9010010)
        } else {
            if (status === a++) {
                cm.sendNextPrev("终于能够在属于我的小小空间中，用我喜欢的家具打造我独有的风格，光是想象就觉得太幸福了！对了，有这样的好事，我可不能什么都不做，所以我做了准备！\r\n\r\n#b#fn黑体##fs20#“[我的小屋]DIY装修的第一步！”活动！", 9010010)
            } else {
                if (status === a++) {
                    cm.sendNextPrev("你认为装修家时最重要的是什么？就是寻找专属于自己的风格。为了知道自己究竟喜欢什么，需要有很多的经验才行。所以在活动期间，如果你能搜集#b30个家具，20个建筑图纸#k，每个世界内的账号就能获得一次礼物！\r\n\r\n啦啦！名字就叫做我的小屋家庭派对套装！\r\n\r\n - 活动奖励 ：1个#i2672054:##t2672054:#，1个#i2671008:##t2671008:#", 9010010)
                } else {
                    if (status === a++) {
                        cm.sendOk("对了，[我的小屋]只有200级以上的角色才能参加。完成教程后，账号内的所有角色都能使用我的小屋，所以你可以用账号内的其他角色来进行，或者努力升级当前角色后来参加！你一定能做到的。", 9010010)
                    } else {
                        if (status == a++) {
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
}

function end(d, c, b) {
    (d == 1) ? status++ : status--;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.dispose()
        }
    }
};