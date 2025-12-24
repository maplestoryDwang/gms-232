package net.swordie.ms.client.trunk;

import net.swordie.ms.connection.OutPacket;

/**
 * Created on 4/7/2018.
 */
public class TrunkDlg {

    private TrunkType type;
    private Trunk trunk;
    private int templateId;

    public TrunkDlg(TrunkType type) {
        this.type = type;
    }

    public void encode(OutPacket outPacket) {
        outPacket.encodeByte(type.getVal());
        switch (type) {
            case TrunkRes_OpenTrunkDlg:
                outPacket.encodeInt(templateId);
                trunk.encodeItems(outPacket);
                break;
            case TrunkRes_PutSuccess:
            case TrunkRes_GetSuccess:
            case TrunkRes_MoneySuccess:
            case TrunkRes_SortItem:
                trunk.encodeItems(outPacket);
                break;
        }
    }

    public static TrunkDlg message(TrunkType type) {
        return new TrunkDlg(type);
    }

    public static TrunkDlg open(int templateId, Trunk trunk) {
        var dlg = new TrunkDlg(TrunkType.TrunkRes_OpenTrunkDlg);

        dlg.templateId = templateId;
        dlg.trunk = trunk;

        return dlg;
    }

    public static TrunkDlg update(TrunkType type, Trunk trunk) {
        var dlg = new TrunkDlg(type);
        dlg.trunk = trunk;
        return dlg;
    }
}
