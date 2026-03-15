var status = -1;

function start(c, b, a) {
    if (c == 1) {
        status++
    } else {
        if (status == 0) {
            cm.sendOk("Figures. Young 'uns！Well, let me know if you change your mind. *grumble grumble*");
            cm.dispose()
        }
        status--
    }
    if (status == 0) {
        cm.askAcceptDeclineS("*grumble grumble* Stupid crows！They've stolen all the food people made for the town festival. Young Mapler, will you help get the food back?\r\n#b(Press Yes to get on the waiting list)")
    } else {
        if (status == 1) {
            cm.forceStartQuest();
            cm.dispose()
        }
    }
};