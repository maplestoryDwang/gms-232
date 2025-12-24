package net.swordie.ms.client.guild.bbs;

import net.swordie.ms.connection.Encodable;
import net.swordie.ms.connection.OutPacket;

import java.util.List;

/**
 * @author Sjonnie
 * Created on 8/12/2018.
 */
public class GuildBBSPacket implements Encodable {

    private GuildBBSType type;
    private BBSRecord record;
    private int totalSize;
    private int pageType;
    private List<BBSRecord> records;

    @Override
    public void encode(OutPacket outPacket) {
        outPacket.encodeByte(type.getVal());
        switch (type) {
            case Res_LoadPages:
                outPacket.encodeInt(totalSize);
                outPacket.encodeInt(1);

                outPacket.encodeInt(records.size()); // nSize

                for (var record : records) {
                    record.encodeForPagesLoad(outPacket);
                }
                break;
            case Res_LoadRecord:
                outPacket.encodeInt(record.getIdForBbs());
                outPacket.encodeByte(false);
                outPacket.encodeInt(record.getReplies().size());
                for (var record : record.getReplies()) {
                    record.encode(outPacket);
                }
                break;
        }
    }

    public static GuildBBSPacket loadPages(int totalSize, List<BBSRecord> pageRecords, int pageType) {
        GuildBBSPacket gbp = new GuildBBSPacket();

        gbp.type = GuildBBSType.Res_LoadPages;
        gbp.totalSize = totalSize;
        gbp.pageType = pageType;
        gbp.records = pageRecords;

        return gbp;
    }

    public static GuildBBSPacket loadRecord(BBSRecord record) {
        GuildBBSPacket gbp = new GuildBBSPacket();

        gbp.type = GuildBBSType.Res_LoadRecord;
        gbp.record = record;

        return gbp;
    }
}
