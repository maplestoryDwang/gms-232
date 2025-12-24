# Fraidy Cat
# 9120012
# Showa Town (801000000)
# This is for feeding the fraidy cat food so he can give you experience in traits

# Apple,2010000
# Meat,2010001
# Egg,2010002
# Roasted Chestnut,2010017
# Sweet Potato,2010018
# Fish Cakes,2010023
# Corn Stick,2010024
# Peach,2012007
# Green Apple,2010009
# Pet Food,2120000
# mlg, 4001014

from net.swordie.ms.constants import ContentConstants
from net.swordie.ms.enums import Stat

# Trades in 2 MLGs for fraidy cat
items=[
    {"ItemID": ContentConstants.FRAIDY_CAT_ITEM_ID_TRADE_IN}
]

mlg=ContentConstants.FRAIDY_CAT_ITEM_ID_TRADE_IN
level_30_charm_exp= ContentConstants.LEVEL_30_TRAIT_EXP

chatString=["What would you like to feed me?\r\n"]
formatted_string=sm.selectionString("#L{i}# #i{ItemID}# #z{ItemID}##l", items)
chatString.append(formatted_string)
selection = sm.sendNext(sm.join(chatString))

current_charm = chr.getStat(Stat.charmEXP)
if selection == 0:
    if current_charm < level_30_charm_exp and sm.hasItem(mlg,2):
        if sm.sendAskYesNo(sm.formatString("Meow, I'll eat #b2 #i{ItemID}# #z{ItemID}#s#k to instantly raise your charm level to 30",items)):
            sm.consumeItem(mlg, 2)
            chr.addTraitExp(Stat.charmEXP, level_30_charm_exp-current_charm)
            sm.sendSayOkay("Thank you for the meal!")
    elif not sm.hasItem(mlg,2):
        sm.sendSayOkay(sm.formatString("Meow, you don't have enough #i{ItemID}# #{ItemID}# , I'm going to starve because of you.",items))
    else:
        sm.sendSayOkay("Meow, turns out I'm not hungry anymore.\r\n(You are over level 30 charm)")
