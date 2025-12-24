# Quartermaster Sakaro
# 1540893
# Deserted Camp (105300000)
# Exchanges 300 Faint Stigma Spirit Stones and 2 Twisted Stigma Stones for a Stigma Coin.

faintStigma = 4001868
twistedStigma = 4001869
stigmaCoin = 4310199

faintQuantity = sm.getQuantityOfItem(faintStigma)
twistedQuantity = sm.getQuantityOfItem(twistedStigma)

faintReq = 300
twistedReq = 2

if faintQuantity >= faintReq and twistedQuantity >= twistedReq:
    # How many coins can the user exchange up to?
    faintQuotient = faintQuantity // faintReq
    twistedQuotient = twistedQuantity // twistedReq
    purchaseCap = min(faintQuotient, twistedQuotient, 100)

    sm.sendNext("Ah, a Spirit Stone marked by the stigma of vengeance.")

    sm.sendNext("Give to me " + str(faintReq) + " #i" + str(faintStigma) + "##z" + str(faintStigma)
    + "# and " + str(twistedReq) + " #i" + str(twistedStigma) + "##z" + str(twistedStigma) + "#,\r\n"
    "and I'll give you 1 #i" + str(stigmaCoin) + "##z" + str(stigmaCoin) + "# in return. "
    "What do you say?\r\n"
    "#L0# #i" + str(stigmaCoin) + "##z" + str(stigmaCoin) + "##l")

    quantity = sm.sendAskNumber("You can get up to " + str(purchaseCap) + " #b#z" + str(stigmaCoin) + "#(s)#k. "
    "How many do you want to trade?\r\n"
    "(#t" + str(faintStigma) + "# in your possession: " + str(faintQuantity) + ")\r\n"
    "(#t" + str(twistedStigma) + "# in your possession: " + str(twistedQuantity) + ")\r\n", 1, 1, purchaseCap)

    if not sm.canHold(stigmaCoin):
        sm.sendSayOkay("Please make room in your Etc. inventory.")
    else:
        sm.consumeItem(faintStigma, quantity*faintReq)
        sm.consumeItem(twistedStigma, quantity*twistedReq)
        sm.giveItem(stigmaCoin, quantity)
else:
    sm.sendSayOkay("Come to me when you have " + str(faintReq) + " #i" + str(faintStigma) + "##z" + str(faintStigma) +
    "# and " + str(twistedReq) + " #i" + str(twistedStigma) + "##z" + str(twistedStigma) + "#.")
