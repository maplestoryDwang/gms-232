package net.swordie.ms.client.character.info;

import net.swordie.ms.client.character.items.BodyPart;

import java.util.Arrays;
import java.util.Set;
import java.util.stream.Collectors;

/**
 * Created on 2/18/2020.
 *
 * @author Asura
 */
public enum ZeroInfoCashLinkFlag {
    ZeroEyeAccessory(0x1),
    ZeroHat(0x2),
    ZeroFaceAccessory(0x4),
    ZeroEarrings(0x8),
    ZeroCape(0x10),
    ZeroTop(0x20),
    ZeroGloves(0x40),
    ZeroWeapon(0x80),
    ZeroBottom(0x100),
    ZeroShoes(0x200),
    ZeroRing1(0x400),
    ZeroRing2(0x800),
    ZeroPendant(0x1000),
    ;
    private int val;

    ZeroInfoCashLinkFlag(int val) {
        this.val = val;
    }

    public int getVal() {
        return val;
    }

    public static Set<ZeroInfoCashLinkFlag> getCashLinksFromFlag(int flag) {
        return Arrays.stream(ZeroInfoCashLinkFlag.values()).filter(f -> (flag & f.getVal()) != 0).collect(Collectors.toSet());
    }

    public static int getMaskByCashLinks(Set<ZeroInfoCashLinkFlag> cashLinks) {
        return cashLinks.stream().mapToInt(ZeroInfoCashLinkFlag::getVal).sum();
    }

    public static ZeroInfoCashLinkFlag getByBetaCashBodyPart(BodyPart bcbp) {
        return Arrays.stream(ZeroInfoCashLinkFlag.values()).filter(f -> f.toString().equals(bcbp.toString())).findFirst().orElse(null);
    }
}