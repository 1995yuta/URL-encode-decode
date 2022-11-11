$(function(){
    $('.inputArea').on('click', '.urlBtn', function(){
        // あいうえお
        // %2582%25A0%2582%25A2%2582%25A4%2582%25A6%2582%25A8
        var oldUrl = document.getElementById('oldUrl');
        var oldUrlText = oldUrl.value;
        // UTF-8コードのタイプで escape エンコードされた escapedString を元の文字列にデコードした値を返します。
        var sjisUrl = UnescapeUTF8(oldUrlText);
        $('.sjisUrl').html(sjisUrl);
        // Shift_JISコードのタイプで escape エンコードされた escapedString を元の文字列にデコードした値を返します。
        var originText = UnescapeSJIS(sjisUrl);
        $('.origin').html(originText);
        // 文字列 -> UTF8にエンコード
        var utf8Url = EscapeUTF8(originText);
        $('.utf8Url').html(utf8Url);
    });
});