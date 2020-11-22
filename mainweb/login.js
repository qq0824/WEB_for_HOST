$(document).ready(function () {
    $('#login').css('background-color', '#c77cff');
    $('#login').click(function () {
        $('#login').css('background-color', '#c77cff');
        $('#signup').css('background-color', 'rgba(78, 78, 78, 0.5)');
        $('#table_main').replaceWith('<table class="log_in" id="table_main"><tr><th><label for="iemail">Email</label></th><td><input id="iemail" type="email" placeholder="your email" required="required"></td></tr><tr><th><label for="ipw">P / W</label></th><td><input id="ipw" type="password" placeholder="your password" required="required"></td></tr><tr><td colspan="2"><a href="#">Don\'t remember your password?</a></td></tr></table>');
        $(".sub").html('<input class="sub" id="sub_log" type="submit" value="LOGIN" >');
        $("#sub_sign").attr('id','sub_log');    /*id변경*/
        $('#sub_log').val('LOGIN >');   /*value 변경*/
                

        })

  
    /*바뀌면서 기존 DOM이 삭제되어서 바뀐곳에선 이벤트가 적용안됨*/

    /*function replace() {
        var replacement = $('<table class="log_in" id="table_main"><tr><th><label for="iemail">Email</label></th><td><input id="iemail" type="email" placeholder="your email" required="required"></td></tr><tr><th><label for="ipw">P / W</label></th><td><input id="ipw" type="password" placeholder="your password" required="required"></td></tr><tr><td colspan="2"><a href="#">Don\'t remember your password?</a></td></tr><tr><td colspan="2"><input class="aaa" id="sub_log" type="submit" value="LOGIN >"></td></tr></table>');
         var original = $('#table_main').replaceWith(replacement);
        replacement
            .css('background-color', 'green')
            .html('<table class="log_in" id="table_main"><tr><th><label for="iemail">Email</label></th><td><input id="iemail" type="email" placeholder="your email" required="required"></td></tr><tr><th><label for="ipw">P / W</label></th><td><input id="ipw" type="password" placeholder="your password" required="required"></td></tr><tr><td colspan="2"><a href="#">Don\'t remember your password?</a></td></tr><tr><td colspan="2"><input class="aaa" id="sub_log" type="submit" value="LOGIN >"></td></tr></table>')
            .click(function() 
            {
               replacement.replaceWith(original);
               original.click(replace);
            });
            
        }*/
    /*$('#login').click(replace);*/
    $(document).on('click','#sub_log',function(){
                alert("WRONG USERNAME OR PASSWORD.");
                    
    })
//    $('#sub_log').click(function () {
//        $(document).on('change','#sub_log',function(){
//                alert("WRONG USERNAME OR PASSWORD.");
//                    
//        }) 
//        /*$("#table_main").append('<tr><td colspan="2">NOT AVAILABLE NOW</td></tr>');*/
//        
//        /*$(this).prev('input').prop('sub_sign', 'newId');*/
//    })

    /*$(function () {
        function replace() {
            var replacement = $(document.createElement('span'));
            var original = $(this).replaceWith(replacement);

            replacement
                .css('background-color', 'green')
                .text('replacement for ' + $(this).text())
                .click(function () {
                    replacement.replaceWith(original);
                    original.click(replace);
                });
        }

        $('.x').click(replace);
    });*/


    $('#signup').click(function () {
        $('#login').css('background-color', 'rgba(78, 78, 78, 0.5)');
        $('#signup').css('background-color', '#c77cff');
        /*$( '#table_main' ).contents().unwrap().wrap( '<p></p>' );*/
        $('#table_main').replaceWith('<table class="sign_up" id="table_main"><tr><th><label for="email">Email</label></th><td><input id="email" type="email" placeholder="yours@example.com" required="required"></td></tr><tr><th><label for="pw">P / W</label></th><td><input id="pw" type="password" placeholder="your password" pattern="^[a-zA-Z0-9]{4,12}$" maxlength="12" title="Use 4~12 letters" required="required"></td></tr><tr><th><label for="name">User Name</label></th><td><input id="name" type="text" placeholder="your username"pattern="^[a-zA-Z0-9]{4,20}$" maxlength="20" title="Use 4~20 letters (english)"  required="required"></td></tr></table>');
        $(".sub").html('<input class="sub" id="sub_sign" type="submit" value="SIGUN UP">');
        $("#sub_log").attr('id','sub_sign');    /*id변경*/
        
        //var bbb = document.getElementsByTagName('input')[3];
        //bbb.id = 'sub_sign';
        $('#sub_sign').val('SIGN IN > ');   /*value 변경*/
    })
    /*2020.11.22 02시 까지 함
    여기 이 밑에 구문이 적용이 안됨 이것도 DOM 문제인가;;*/
    //$('#sub_sign').click(function () {
        /*$("#table_main").append('<tr><td colspan="2">NOT AVAILABLE NOW</td></tr>');*/
        
        /*$(this).prev('input').prop('sub_sign', 'newId');*/
    //})
    //2020.11.22 15시 결국 이걸로 해결함
    $(document).on('click','#sub_sign',function(){
                alert("NOT AVAILABLE NOW.");
                    
    }) 
    /*$("#sub_sign").on("click", function(){
        alert("소스 코드를 클릭하셨군요!");
    });*/

});
