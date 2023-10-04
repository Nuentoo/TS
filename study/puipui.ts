/** 23/09/19 flex: auto; と flex: 1; の違いについて */
let url: string = "https://developer.mozilla.org/ja/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis#:~:text=fle[…]9B%E3%82%8B";
let description = "autoはflex: 1 1 auto;、1はflex: 1 1 0;のショートハンドです。flex-basis(伸長や縮小が発生する前のアイテムの寸法)をどう設定するか。";

/** 23/10/02 プリミティブ型であるstringがインスタンスメソッドを使用できる理由 */
url = "https://jsprimer.net/basic/wrapper-object/";
description = "プリミティブ型の値がなぜメソッド呼び出しできるのかについて。 その仕組みの背景にはプリミティブ型に対応したラッパーオブジェクトの存在があり、プリミティブ型の値のプロパティへアクセスする際に、自動的にラッパーオブジェクトへ変換されることでメソッド呼び出しなどが可能となっているそうです。";

/** return await だけ書くならばasync使わずにPromiseをそのままreturnが良いのでは！とゆうお話！でもasyncは返却値がPromiseであることが明示的になって良いのかな？ */
url = "https://zenn.dev/azukiazusa/articles/difference-between-return-and-return-await";
description = "return と return await の違い。柳さんも話してましたね。rerurn (function) 1mt : return (async function) 3mt : return await (async function) 2mt;。return await だけ書くならばasync使わずにPromiseをそのままreturnが良いのでは！とゆうお話！";

/** jQuery 1-12 で$.ajaxに対して使えるメソッドの話 */
url = "https://api.jquery.com/deferred.then/#deferred-then-doneFilter-failFilter-progressFilter";
url = "https://api.jquery.com/deferred.catch/#deferred-catch-failFilter";
description = "jQuery 1-12 では $.ajaxに対して done fail thenまで。catchは3.0なのでダメ。thenの第二引数にreject処理を書くのはOK！際どい； 柳さんが当日視聴のPromiseラップでやっていたやつ";

/** 関数のメモ化。Mapオブジェクトいいかも話 */
url = "https://github.com/progedu/fibonacci/pull/122/filesr";
description = "多様な引数で同じ関数処理を何度する場合。同じ引数が入ってきたら処理を行わずにメモ化した値を返して処理速度向上！Mapオブジェクトいいかも！";