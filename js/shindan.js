/**
 * Created by takenakariku on 2017/06/20.
 */
$(function () {
    //チェックボックスをクリックするとイベント発火その１
    $(".under3").click(function(){
        var $count = $(".under3:checked").length;
        var $not = $('.under3').not(':checked');

        //チェックが3つ付いたら、チェックされてないチェックボックスにdisabledを加える
        if($count >= 3) {
            $not.attr("disabled",true);
        }else{
            //3つ以下ならisabledを外す
            $not.attr("disabled",false);
        }
    });
    //チェックボックスをクリックするとイベント発火その２
    $(".under3-b").click(function(){
        var $count = $(".under3-b:checked").length;
        var $not = $('.under3-b').not(':checked');

        //チェックが3つ付いたら、チェックされてないチェックボックスにdisabledを加える
        if($count >= 3) {
            $not.attr("disabled",true);
        }else{
            //3つ以下ならisabledを外す
            $not.attr("disabled",false);
        }
    });
    //説明文表示・非表示
    $(function(){
        $(".openBtn").click(function(){
            $($(this).next(".textArea")).animate(
                {height: "toggle", opacity: "toggle"},
                "nomal"
            );
        });
    });
    //ボタンがクリックされた時
    $(".shindan").click(function(e) {

        //一度結果を非表示にする
        $(".result").hide();

        //チェックされているラジオボタンの数を数える
        var $checked_radio_count = $(".radio_button_wrapper").find('input[type="radio"]:checked').size();
        //ラジオボタンが入っているdivの数を数える
        var $radio_count = $(".radio_button_wrapper").size();
        console.log($checked_radio_count);
        console.log($radio_count);

        if ($checked_radio_count != $radio_count) {
            //全てチェックしていなかったらアラートを出す
            alert("未回答の問題があります");
            //クリックしたら作用しないボタンを元に戻す
            document.getElementById("oneclick").disabled = "";
            //以下の操作を行わない
            return;
        } else {
            //チェックされているinputの数を取得
            var typeANum = $(".typeA:checked").length,
                typeBNum = $(".typeB:checked").length,
                typeCNum = $(".typeC:checked").length,
                typeDNum = $(".typeD:checked").length;
            var MAX = 0;
            if(MAX<typeANum){
                MAX = typeANum;
            }
            if(MAX<typeBNum){
                MAX = typeBNum;
            }
            if(MAX<typeCNum){
                MAX = typeCNum;
            }
            if(MAX<typeDNum){
                MAX = typeDNum;
            }

            var MAX_NUM = 0;
            if(MAX == typeANum){
                MAX_NUM++;
            }
            if(MAX == typeBNum){
                MAX_NUM++;
            }
            if(MAX == typeCNum){
                MAX_NUM++;
            }
            if(MAX == typeDNum){
                MAX_NUM++;
            }

            if(MAX_NUM == 1){
                if (typeANum >= typeBNum && typeANum >= typeCNum && typeANum >= typeDNum) {
                    //もしもAの方が多かったらAタイプを表示
                    $(".resultA").fadeIn();
                } else if (typeBNum >= typeANum && typeBNum >= typeCNum && typeBNum >= typeDNum) {
                    //もしもBの方が多かったらBタイプを表示
                    $(".resultB").fadeIn();
                } else if (typeCNum >= typeANum && typeCNum >= typeBNum && typeCNum >= typeDNum) {
                    //もしもCの方が多かったらCタイプを表示
                    $(".resultC").fadeIn();
                } else if (typeDNum >= typeBNum && typeDNum >= typeCNum && typeDNum >= typeANum) {
                    //もしもDの方が多かったらDタイプを表示
                    $(".resultD").fadeIn();
                }
            }else{
                $(".resultE").fadeIn();
            }
        }
        console.log(MAX_NUM);

        var typeANum = $(".typeA:checked").length * 5,
            typeBNum = $(".typeB:checked").length * 5,
            typeCNum = $(".typeC:checked").length * 5,
            typeDNum = $(".typeD:checked").length * 5;

        console.log(typeANum);

        $("#test-circle").circliful({
            text: '林宙紀',
            animation: 1,
            animationStep: 6,
            foregroundBorderWidth: 5,
            backgroundBorderWidth: 1,
            percent: typeANum,
            iconColor: '#9FD6D2',
            // icon: 'f004',
            iconSize: '40',
            iconPosition: 'middle'
        });

        $("#test-circle2").circliful({
            text: '菅原裕典',
            animation: 1,
            animationStep: 6,
            foregroundBorderWidth: 5,
            backgroundBorderWidth: 1,
            percent: typeBNum,
            iconColor: '#9FD6D2',
            // icon: 'f004',
            iconSize: '40',
            iconPosition: 'middle'
        });

        $("#test-circle3").circliful({
            text: '郡和子',
            animation: 1,
            animationStep: 6,
            foregroundBorderWidth: 5,
            backgroundBorderWidth: 1,
            percent: typeCNum,
            iconColor: '#9FD6D2',
            // icon: 'f004',
            iconSize: '40',
            iconPosition: 'middle'
        });

        $("#test-circle4").circliful({
            text: '大久保三代',
            animation: 1,
            animationStep: 6,
            foregroundBorderWidth: 5,
            backgroundBorderWidth: 1,
            percent: typeDNum,
            iconColor: '#9FD6D2',
            // icon: 'f004',
            iconSize: '40',
            iconPosition: 'middle'
        });

        $("#test-circle5").circliful({
            text: '林宙紀',
            animation: 1,
            animationStep: 6,
            foregroundBorderWidth: 5,
            backgroundBorderWidth: 1,
            percent: typeANum,
            iconColor: '#9FD6D2',
            // icon: 'f004',
            iconSize: '40',
            iconPosition: 'middle'
        });

        $("#test-circle6").circliful({
            text: '菅原裕典',
            animation: 1,
            animationStep: 6,
            foregroundBorderWidth: 5,
            backgroundBorderWidth: 1,
            percent: typeBNum,
            iconColor: '#9FD6D2',
            // icon: 'f004',
            iconSize: '40',
            iconPosition: 'middle'
        });

        $("#test-circle7").circliful({
            text: '郡和子',
            animation: 1,
            animationStep: 6,
            foregroundBorderWidth: 5,
            backgroundBorderWidth: 1,
            percent: typeCNum,
            iconColor: '#9FD6D2',
            // icon: 'f004',
            iconSize: '40',
            iconPosition: 'middle'
        });

        $("#test-circle8").circliful({
            text: '大久保三代',
            animation: 1,
            animationStep: 6,
            foregroundBorderWidth: 5,
            backgroundBorderWidth: 1,
            percent: typeDNum,
            iconColor: '#9FD6D2',
            // icon: 'f004',
            iconSize: '40',
            iconPosition: 'middle'
        });

        $("#test-circle9").circliful({
            text: '林宙紀',
            pointSize: 20,
            animation: 1,
            animationStep: 6,
            foregroundBorderWidth: 5,
            backgroundBorderWidth: 1,
            percent: typeANum,
            iconColor: '#9FD6D2',
            // icon: 'f004',
            iconSize: '40',
            iconPosition: 'middle'
        });

        $("#test-circle10").circliful({
            text: '菅原裕典',
            animation: 1,
            animationStep: 6,
            foregroundBorderWidth: 5,
            backgroundBorderWidth: 1,
            percent: typeBNum,
            iconColor: '#9FD6D2',
            // icon: 'f004',
            iconSize: '40',
            iconPosition: 'middle'
        });

        $("#test-circle11").circliful({
            text: '郡和子',
            animation: 1,
            animationStep: 6,
            foregroundBorderWidth: 5,
            backgroundBorderWidth: 1,
            percent: typeCNum,
            iconColor: '#9FD6D2',
            // icon: 'f004',
            iconSize: '40',
            iconPosition: 'middle'
        });

        $("#test-circle12").circliful({
            text: '大久保三代',
            animation: 1,
            animationStep: 6,
            foregroundBorderWidth: 5,
            backgroundBorderWidth: 1,
            percent: typeDNum,
            iconColor: '#9FD6D2',
            // icon: 'f004',
            iconSize: '40',
            iconPosition: 'middle'
        });

        $("#test-circle13").circliful({
            text: '林宙紀',
            animation: 1,
            animationStep: 6,
            foregroundBorderWidth: 5,
            backgroundBorderWidth: 1,
            percent: typeANum,
            iconColor: '#9FD6D2',
            // icon: 'f004',
            iconSize: '40',
            iconPosition: 'middle'
        });

        $("#test-circle14").circliful({
            text: '菅原裕典',
            animation: 1,
            animationStep: 6,
            foregroundBorderWidth: 5,
            backgroundBorderWidth: 1,
            percent: typeBNum,
            iconColor: '#9FD6D2',
            // icon: 'f004',
            iconSize: '40',
            iconPosition: 'middle'
        });

        $("#test-circle15").circliful({
            text: '郡和子',
            animation: 1,
            animationStep: 6,
            foregroundBorderWidth: 5,
            backgroundBorderWidth: 1,
            percent: typeCNum,
            iconColor: '#9FD6D2',
            // icon: 'f004',
            iconSize: '40',
            iconPosition: 'middle'
        });

        $("#test-circle16").circliful({
            text: '大久保三代',
            animation: 1,
            animationStep: 6,
            foregroundBorderWidth: 5,
            backgroundBorderWidth: 1,
            percent: typeDNum,
            iconColor: '#9FD6D2',
            // icon: 'f004',
            iconSize: '40',
            iconPosition: 'middle'
        });

        $("#test-circle17").circliful({
            text: '林宙紀',
            animation: 1,
            animationStep: 6,
            foregroundBorderWidth: 5,
            backgroundBorderWidth: 1,
            percent: typeANum,
            iconColor: '#9FD6D2',
            // icon: 'f004',
            iconSize: '40',
            iconPosition: 'middle'
        });

        $("#test-circle18").circliful({
            text: '菅原裕典',
            animation: 1,
            animationStep: 6,
            foregroundBorderWidth: 5,
            backgroundBorderWidth: 1,
            percent: typeBNum,
            iconColor: '#9FD6D2',
            // icon: 'f004',
            iconSize: '40',
            iconPosition: 'middle'
        });

        $("#test-circle19").circliful({
            text: '郡和子',
            animation: 1,
            animationStep: 6,
            foregroundBorderWidth: 5,
            backgroundBorderWidth: 1,
            percent: typeCNum,
            iconColor: '#9FD6D2',
            // icon: 'f004',
            iconSize: '40',
            iconPosition: 'middle'
        });

        $("#test-circle20").circliful({
            text: '大久保三代',
            animation: 1,
            animationStep: 6,
            foregroundBorderWidth: 5,
            backgroundBorderWidth: 1,
            percent: typeDNum,
            iconColor: '#9FD6D2',
            // icon: 'f004',
            iconSize: '40',
            iconPosition: 'middle'
        });

        window.scrollBy(0, 100);

    });
});
