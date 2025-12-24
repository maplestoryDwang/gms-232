package net.swordie.webapi.protocol.result;

import java.util.List;

public record UserInfoResult(String username, List<CharInfoRecord> charInfo) {
}
