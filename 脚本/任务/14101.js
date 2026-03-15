var status = -1;

function start(c, b, a) {
    if (c == 1) {
        status++
    } else {
        status--
    }
    if (status == 0) {
        cm.sendOk("You can participate in Maple Bingo 10 times each day per account. That means you can play #b10 more times#k today, #h0#！Match it up!");
        cm.dispose()
    }
};