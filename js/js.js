window.onload=function() {
    at_id0.style.display="block";
    at_id1.style.display="none";
    at_id2.style.display="none";
    at_id3.style.display="none";
    at_id4.style.display="none";
    at_id5.style.display="none";
    at_id6.style.display="none";
    at_id7.style.display="none";
    at_id8.style.display="none";
    at_id9.style.display="none";
    at_id10.style.display="none";
    at_id11.style.display="none";
    at_id12.style.display="none";
    at_id13.style.display="none";
    at_id14.style.display="none";
    
    //아티클 3번 스킨케어 서브메뉴
    at3_pic1.style.display="block";
    at3_pic2.style.display="none";
    at3_pic3.style.display="none";
    at3_pic4.style.display="none";
    at3_pic5.style.display="none";
    at3_pic6.style.display="none";
    at3_pic7.style.display="none";
    at3_pic8.style.display="none";
    at3_pic9.style.display="none";
    
    //아티클 4번 메이크업 서브메뉴
    at4_pic1.style.display="block";
    at4_pic2.style.display="none";
    at4_pic3.style.display="none";
    at4_pic4.style.display="none";
    at4_pic5.style.display="none";
    at4_pic6.style.display="none";
    
}

function sub_func(js) {
    at_id0.style.display="none";
    at_id1.style.display="none";
    at_id2.style.display="none";
    at_id3.style.display="none";
    at_id4.style.display="none";
    at_id5.style.display="none";
    at_id6.style.display="none";
    at_id7.style.display="none";
    at_id8.style.display="none";
    at_id9.style.display="none";
    at_id10.style.display="none";
    at_id11.style.display="none";
    at_id12.style.display="none";
    at_id13.style.display="none";
    at_id14.style.display="none";
    this["at_id"+js].style.display="block";
    
    at3_pic1.style.display="block";
    
    
    
}

//아티클 3번 스킨케어 서브메뉴
function at3_sub_func(js){
    at3_pic1.style.display="none";
    at3_pic2.style.display="none";
    at3_pic3.style.display="none";
    at3_pic4.style.display="none";
    at3_pic5.style.display="none";
    at3_pic6.style.display="none";
    at3_pic7.style.display="none";
    at3_pic8.style.display="none";
    at3_pic9.style.display="none";
    this["at3_pic"+js].style.display="block";
}

//아티클 4번 메이크업 서브메뉴
function at4_sub_func(js){
    at4_pic1.style.display="none";
    at4_pic2.style.display="none";
    at4_pic3.style.display="none";
    at4_pic4.style.display="none";
    at4_pic5.style.display="none";
    at4_pic6.style.display="none";
    this["at4_pic"+js].style.display="block";
}


// 아티클0번 메인페이지 best상품 팝업창 내용
const at14_picA=["img/at0-main/best1.png", "img/at0-main/best2.png", "img/at0-main/best3.png", "img/at0-main/best4.png", "img/at0-main/best5.png"]
const at14_nameA=["스템III앰플", "레티놀 엑스퍼트", "바이오 컨디셔닝 에센스","슈퍼바이탈 크림 리치", "더 비타민 C23"];
const at14_hashtagA=["#안티에이징 #피부결개선 #피부탄력", "#슈퍼레티놀 #2주만에주름개선", 
"#시작이_바에다 #투명항산화 #반짝결", "#탄력크림, #안티에이징크림", "#비타민앰플 #리프팅광채앰플 #미백앰플 #안티에이징"];
const at14_mlA=["50ml", "30ml", "84ml", "50ml", "17g | 밤"];
const at14_priceA=["80,000원","50,000원", "70,000원", "60,000원", "40,000원"];


// 아티클0번 메인페이지 latter 후기 팝업창 내용
const at14_picB=["img/at0-main/best1.png", "img/at0-main/best4.png"]
const at14_nameB=["스템III앰플", "슈퍼바이탈 크림 리치"];
const at14_hashtagB=["#안티에이징 #피부결개선 #피부탄력", "#탄력크림, #안티에이징크림"];
const at14_mlB=["50ml", "50ml",];
const at14_priceB=["80,000원", "60,000원"];


// 아티클2번 신제품 상품 팝업창 내용
const at14_picC=["img/at2-new/new1.png", "img/at2-new/new2.png", "img/at2-new/new3.png", "img/at2-new/new4.png", 
"img/at2-new/new5.png", "img/at2-new/new6.png"]
const at14_nameC=["슈퍼바이탈 에센셜 세럼", "슈퍼바이탈 에센셜 아이크림", "리얼 비타민 C21 앰플", "UV 쉴드 에센셜 톤업 선", 
"UV 쉴드 안티폴루션 선 세럼", "프로 필링 트리플 AHA 클렌저"];
const at14_hashtagC=["#토탈안티에이징 #탄력세럼 #속부터빛나는피부", "#360도토탈케어 #눈가주름개선 #고밀착아이크림", 
"#고함량21% #리얼광채", "#톤업선크림 #4중차단 #메베겸용선", "#안티폴루션선 #7중케어 #반전사용감", "#원스텝필링클렌저 #AHA #보들보들"];
const at14_mlC=["40ml", "50ml",  "60ml", "40ml", "50ml", "40ml"];
const at14_priceC=["50,000원", "30,000원",  "35,000원", "20,000원", "30,000원", "60,000원"];


// 아티클3,4번 상품 팝업창 내용
const at14_picD=["img/at3-skincare/at3-1/1.png", "img/at3-skincare/at3-1/2.png", "img/at3-skincare/at3-1/3.png", 
"img/at3-skincare/at3-1/4.png", "img/at3-skincare/at3-1/5.png", "img/at3-skincare/at3-2/1.png", "img/at3-skincare/at3-2/2.png", 
"img/at3-skincare/at3-3/1.png", "img/at3-skincare/at3-4/1.png", "img/at3-skincare/at3-5/1.png", "img/at3-skincare/at3-6/1.png", 
"img/at3-skincare/at3-7/1.png", "img/at3-skincare/at3-8/1.png", "img/at3-skincare/at3-9/1.png", "img/at4-makeup/at4-1/1.png", 
"img/at4-makeup/at4-1/2.png", "img/at4-makeup/at4-1/3.png", "img/at4-makeup/at4-2/1.png", "img/at4-makeup/at4-3/1.png", 
"img/at4-makeup/at4-4/1.png", "img/at4-makeup/at4-5/1.png", "img/at4-makeup/at4-6/1.png"]
const at14_nameD=["레티놀 엑스퍼트 0.1% (미니)", "레티놀 엑스퍼트 0.1%, 0.2%, 0.3%", "레티놀 포 링클 0.1%, 0.3%", "에이지 코렉터 2500", 
"레티놀 엑스퍼트 0.1% (미니)", "비타민 E세라마이드 밀크 소프너", "리얼 비타민 C21앰플", "멜라솔브 스팍 클리어링 에센스", 
"프로 필링 트리플 AHA클렌저", "비타민E세라마이드 밀크 소프너", "에이스 비타민 C30", "바이오 컨디셔닝 에센스", "에이스 비타민 C30", 
"스템|||앰플 리페어 마스크", "에어쿠션®커버", "에어쿠션®내추럴", "에어쿠션®스킨핏 톤업", "슈퍼바이탈 크림팩트", 
"퍼펙트 커버 파우더 SPF 25 PA++", "에어쿠션®커버", "퍼펙트 커버 쿠션", "슈퍼바이탈 크림팩트"];
const at14_hashtagD=["#쫀쫀 #탱탱", "#슈퍼레티놀 #2주만에주름개선", "#슈퍼레티놀 #2주만에주름개선", 
"#주름세럼 #팔자주름", "#쫀쫀 #탱탱", "#장벽강화 #유수분밸런스", "#고함량21% #리얼광채", "#독자미백성분멜라솔브 #NET인증획득", 
" #원스텝필링클렌저 #AHA", " #장벽강화 #유수분밸런스", "#순수비타민c30% #초고함량", "#시작이_바에다 #투명항산화", 
" #순수비타민 #초고함량", "#앰플마스크 #1회사용피부개선", "#한겹커버 #초밀착", "#더블보습 #착붙윤기", "#회사에어 #가볍에어", 
"#크림 타입 팩트 #톤업 팩트", "#피부톤보정 #피부결보정", "#한겹커버 #초밀착", "#고커버쿠션 #잡티커버", "#크림 타입 팩트 #톤업 팩트"];
const at14_mlD=["40ml", "50ml",  "60ml", "40ml", "50ml", "40ml", "40ml", "50ml", "60ml", "40ml", "50ml", "40ml", "50ml", "17g 1매", "16g", "16g", "15g", "15g", "16g", "16g", "15g", "15g" ];
const at14_priceD=["50,000원", "30,000원",  "35,000원", "20,000원", "30,000원", "60,000원", "50,000원", "30,000원",  "35,000원", "20,000원", "30,000원", "60,000원", "30,000원", "20,000원", "31,500원", "30,000원", "42,000원", "32,000원","40,000원", "32,000원", "34,000원", "41,000원"];




$(function(){
    
    // 아티클 0번 메인페이지 베스트 상품 클릭시 팝업창 열기
    $(".tool_pic").on("click", function(){

        no=$(".tool_pic").index(this);
        console.log(no);

        
        //상품 사진
        $(".at14_pic").css("background","url("+at14_picA[no]+") center center").css("background-size", "100% 100%");
        
        // 상품명
        $(".at14_name").html(at14_nameA[no]);

        // 해시태그
        $(".at14_hashtag").html(at14_hashtagA[no]);

        // ml
        $(".at14_ml").html(at14_mlA[no]);

        // 가격
        $(".at14_price").html('&#8361;'+at14_priceA[no]);


        // 팝업창 나오는 것
        $(".at14").css("display","block");

        // 아티클 14번 높이 값
        $(".at14").css("height","3720px");
        
        // 아티클 14번 판업창 위치
        $(".at14_box").css("top","800px");
        
        // 닫기 버튼
        $(".at14_close").on("click", function(){
            $(".at14").css("display","none");
            $(".at14_value").html(1);
        });

        // 팝업창 구매수량
        let at14_count=0;

        $(".at14_minus").on("click", function() {
            if(at14_count>1){
                at14_count--;
                $(".at14_value").html(+at14_count);
            }
        })
        $(".at14_plus").on("click", function() {
            if(at14_count<10){
                at14_count++;
                $(".at14_value").html(+at14_count);
            }
        })
        
        


    });


    // 아티클 0번 메인페이지 latter 후기 클릭시 팝업창 열기
    $(".latter_button").on("click", function(){

        no=$(".latter_button").index(this);
        console.log(no);


        //상품 사진
        $(".at14_pic").css("background", "url("+at14_picB[no]+") center center").css("background-size", "100% 100%");

        // 상품명
        $(".at14_name").html(at14_nameB[no]);

        // 해시태그
        $(".at14_hashtag").html(at14_hashtagB[no]);

        // ml
        $(".at14_ml").html(at14_mlB[no]);

        // 가격
        $(".at14_price").html('&#8361;'+at14_priceB[no]);


        // 팝업창 나오는 것
        $(".at14").css("display","block");

        // 아티클 14번 높이 값
        $(".at14").css("height","3720px");
        
        // 아티클 14번 판업창 위치
        $(".at14_box").css("top","2150px");
        
        // 닫기 버튼
        $(".at14_close").on("click", function(){
            $(".at14").css("display","none");
            $(".at14_value").html(1);
        });

        // 팝업창 구매수량
        let at14_count=0;

        $(".at14_minus").on("click", function() {
            if(at14_count>1){
                at14_count--;
                $(".at14_value").html(+at14_count);
            }
        })
        $(".at14_plus").on("click", function() {
            if(at14_count<10){
                at14_count++;
                $(".at14_value").html(+at14_count);
            }
        })

    });


    // 아티클 2번 신제품 상품 클릭시 팝업창 열기
    $(".at2_product1_li1_pic").on("click", function(){

        no=$(".at2_product1_li1_pic").index(this);
        console.log(no);


        //상품 사진
        $(".at14_pic").css("background", "url("+at14_picC[no]+") center center").css("background-size", "100% 100%");

        // 상품명
        $(".at14_name").html(at14_nameC[no]);

        // 해시태그
        $(".at14_hashtag").html(at14_hashtagC[no]);

        // ml
        $(".at14_ml").html(at14_mlC[no]);

        // 가격
        $(".at14_price").html('&#8361;'+at14_priceC[no]);


        // 팝업창 나오는 것
        $(".at14").css("display","block");

        // 아티클 14번 높이 값
        $(".at14").css("height","1820px");
        
        // 아티클 14번 판업창 위치
        $(".at14_box").css("top","800px");
        
        // 닫기 버튼
        $(".at14_close").on("click", function(){
            $(".at14").css("display","none");
            $(".at14_value").html(1);
        });

        // 팝업창 구매수량
        let at14_count=0;

        $(".at14_minus").on("click", function() {
            if(at14_count>1){
                at14_count--;
                $(".at14_value").html(+at14_count);
            }
        })
        $(".at14_plus").on("click", function() {
            if(at14_count<10){
                at14_count++;
                $(".at14_value").html(+at14_count);
            }
        })

    });


    // 아티클 3,4번 상품 클릭시 팝업창 열기
    $(".at34_pic").on("click", function(){

        no=$(".at34_pic").index(this);
        console.log(no);


        //상품 사진
        $(".at14_pic").css("background", "url("+at14_picD[no]+")no-repeat center center").css("background-size", "contain");

        // 상품명
        $(".at14_name").html(at14_nameD[no]);

        // 해시태그
        $(".at14_hashtag").html(at14_hashtagD[no]);

        // ml
        $(".at14_ml").html(at14_mlD[no]);

        // 가격
        $(".at14_price").html('&#8361;'+at14_priceD[no]);


        // 팝업창 나오는 것
        $(".at14").css("display","block");

        // 아티클 14번 높이 값
        $(".at14").css("height","1320px");
        
        // 아티클 14번 판업창 위치
        $(".at14_box").css("top","300px");
        
        // 닫기 버튼
        $(".at14_close").on("click", function(){
            $(".at14").css("display","none");
            $(".at14_value").html(1);
        });

        // 팝업창 구매수량
        let at14_count=0;

        $(".at14_minus").on("click", function() {
            if(at14_count>1){
                at14_count--;
                $(".at14_value").html(+at14_count);
            }
        })
        $(".at14_plus").on("click", function() {
            if(at14_count<10){
                at14_count++;
                $(".at14_value").html(+at14_count);
            }
        })

    });





    // 검색 버튼 속에 추천 검색어 클릭하면 해당 페이지로 이동
    $(".search_box2 ul li:eq(0)").on("click", function() {
        $("html,body").animate({"scrollTop":0},10);
        $(".at").css("display","none");
        $(".at1").css("display","block");
        $(".search").slideUp();
        $(".menu_search1").css("display","block");
        $(".menu_search2").css("display","none");
    })

    // 검색 버튼 속에 추천 검색어 클릭하면 해당 페이지로 이동
    $(".search_box2 ul li:eq(1), .search_box2 ul li:eq(2)").on("click", function() {
        $("html,body").animate({"scrollTop":0},10);
        $(".at").css("display","none");
        $(".at3").css("display","block");
        $(".search").slideUp();
        $(".menu_search1").css("display","block");
        $(".menu_search2").css("display","none");
    })


    // 메인페이지 3번째 pic 둘러보기 클릭시 해당 페이지로 이동
    $(".pic ul li:eq(1)").on("click", function() {
        $("html,body").animate({"scrollTop":0},10);
        $(".at").css("display","none");
        $(".at8").css("display","block");
    })

    // 메인페이지 5번째 pic2 자세히 보기 클릭시 해당 페이지로 이동
    $(".pic2 ul li:eq(1)").on("click", function() {
        $("html,body").animate({"scrollTop":0},10);
        $(".at").css("display","none");
        $(".at7").css("display","block");
    })

    //아티클 10번 로그인 페이지 회원가입 버튼 누르면 해당 페이지로 이동
    $(".at10_left_under> div:eq(2)").click(function() {
        $("html, body").animate({"scrollTop":"0"},10);
        $(".at").css("display","none");
        $(".at11").css("display","block");
    });




    //---상단 메뉴바 제품, 아이오페 소개, 아이오페 랩 을 호버시 메뉴바 내려옴
    $(".down").on("mouseenter", function(){
        no=$(".down").index(this);
        
        $(".sub_down").slideDown(200);
        $(".topdown").hide().eq(no).show();
    });
    
    $(".sub_down").on("mouseleave", function(){
        no=$(".down").index(this);
        
        $(".sub_down").hide();
        $(".topdown").hide().eq(no);
    });
    
    
    
    //--------상단 아이콘 메뉴(로그인, 회원가입, 회원계시판) 클릭시---------
    let member_i=0;
    $(".menu_member").on("click", function(){
        if(member_i==0){
            $(".menu_member1").css("display","block"); 
            member_i=1;
        } else{
            $(".menu_member1").css("display","none");
            member_i=0;
        }
    });
    

    
    //--------상단 아이콘 검색버튼 클릭시---------
    let search_i=0;
    $(".menu_search").on("click", function() {
        
        if(search_i==0){
            $(".search").slideDown();
            $(".menu_search2").css("display","block");
            $(".menu_search1").css("display","none");
            search_i=1;
        }else{
            $(".search").slideUp();
            $(".menu_search1").css("display","block");
            $(".menu_search2").css("display","none");
            search_i=0;
        }
        
    });
    

    
    
    // --------아티클 0번 메인페이지 베스트 사진 이동--------------------------------
    let size= $(".tool> li").length;
    let count=0;
    let no; 
    let position=400;
    $(".best_right").on("click", function() { 
        if(count<size-3){            
            count++;
            no= position*count;
            $(".tool").animate({"left":-no+"px"},500);
            $(".best_stick div").animate({"left":no+"px"},500);
        } else{
            alert("더 이상 제품이 없습니다.");
        }
    })
    
    $(".best_left").on("click", function() { 
        if(count>0){            
            count--;
            no= position*count;
            $(".tool").animate({"left":-no+"px"},500);
            $(".best_stick div").animate({"left":no+"px"},500);
        } else{
            alert("더 이상 제품이 없습니다.");
        }
    })   
    
    
    
    //-----아티클 0번 메인페이지 latter 사진 바꾸기-------------------------------------
    $(".latter_1").css("background", "url(img/at0-main/latter1.jpg)")
                    .css("backgroundSize", "100% 100%");
    $(".latter_text2").css("display", "none");
    $(".latter_btn1").css("background", "black");
       
    $(".latter_3 div").on("click", function() {
        no=$(this).index()+1;
        
        $(".latter_1").css("background", "url(img/at0-main/latter"+no+".jpg)")
                    .css("backgroundSize", "100% 100%");
        $(".latter_1").css("display", "none");
        $(".latter_1").fadeIn();
        
        $(".latter_text").hide();
        $(".latter_text"+no).fadeIn();
        
        $(".latter_btn").css("background","rgba(0,0,0,0.4)");
        $(".latter_btn"+no).css("background","black");
    })
    


    //-------아티클 1번 스페셜페이지 보기 버튼 호버시 애니메이션-------------  
    $(".at1_box_1_btn").on("mouseenter", function(){
        $(".at1_box_1_pic> li:eq(0)").stop().animate({"top":"0px"},1000);
        $(".at1_box_1_pic> li:eq(1)").stop().animate({"top":"625px","opacity":"1"},1000);
    })

    $(".at1_box_1_btn").on("mouseleave", function(){
        $(".at1_box_1_pic> li:eq(0)").stop().animate({"top":"-20px"},1000);
        $(".at1_box_1_pic> li:eq(1)").css({"top":"350px","opacity":"0"});
    })



    // ---------------아티클 3번 스킨케어 페이지 트리메뉴---------------------------   
    $(".at3_menu_sub2").hide();
    $(".at3_menu_sub3").hide();
 
    $(".at3_menu_title").on("click", function(){
        
        $(".at3_menu_sub").slideUp();
        if($(this).next().css("display")=="none")
            $(this).next().slideDown();
        else
            $(this).next().slideUp();
           
    }) 
    
    
    
    // ---------------아티클 4번 메이크업 페이지 트리메뉴---------------------------    
    $(".at4_menu_sub2").hide();
    
    $(".at4_menu_title").on("click", function(){
        
        $(".at4_menu_sub").slideUp();
        if($(this).next().css("display")=="none")
            $(this).next().slideDown();
        else
            $(this).next().slideUp(); 
        
    }) 
    
    
    
    //-------------아티클 7번 휠 이동---------------
    $(".at7>.at7box").on("mousewheel", function(e){
        
        e.preventDefault();
        var delta= 0;
        delta = e.originalEvent.wheelDelta;
        
        if(delta>0){ //마우스 휠 올린 것
            try{
                var prev = $(this).prev().offset().top;
                                   
            } catch(e) {return false;}
            $("html, body").stop().animate({scrollTop:prev}, 1000 );
        }
        else{ // 마우스휠을 내린것
            try{
                var next = $(this).next().offset().top;
                if(next==0){
                    return false;
                }
            } catch(e) { return false;}
            $("html, body").stop().animate({scrollTop:next}, 1000);
        }
        
    });
    
    
    
    //-------------아티클 8번 왼쪽 숫자 클릭시 사진 변경---------------
    $(".at8_tool2_box3> li").on("click", function() {
        no=$(this).index();
        
        $(".at8_tool2_box3 li").css({"background":"none", "color":"white"});
        $(".at8_tool2_box3 li:eq("+no+")").css({"background":"white", "color":"blue"});
        
        $(".at8_tool2_box1 li").hide();
        $(".at8_tool2_box1 li:eq("+no+")").show();
        
        $(".at8_tool2_box2 li").hide();
        $(".at8_tool2_box2 li:eq("+no+")").show();
        
    });
    
    
    
    
    //------------아티클 9번 애니메이션 ---------------  
    let at9_count=0;
    let at9_no=0;
    
    $(".at9_box2_right").on("click", function() {
        
        if(at9_count<7){
            at9_count++;
            at9_no = at9_count*400;
            $(".at9_box2_header_long").animate({"left":-at9_no+"px"},300);
        };
        
        $(".at9_tool_box1 li").css("display","none");
        $(".at9_tool_box1 li:eq("+at9_count+")").css("display","block");
        
        $(".at9_box3_text li").css("display","none");
        $(".at9_box3_text li:eq("+at9_count+")").css("display","block");
        
        $(".at9_box3_pic li").css("display","none");
        $(".at9_box3_pic li:eq("+at9_count+")").css("display","block");
        
    });
    
    $(".at9_box2_left").on("click", function() {
        
        if(at9_count>0){
            at9_count--;
            at9_no = at9_count*400;
            $(".at9_box2_header_long").animate({"left":-at9_no+"px"},300);
        };
        
        $(".at9_tool_box1 li").css("display","none");
        $(".at9_tool_box1 li:eq("+at9_count+")").css("display","block");
        
        $(".at9_box3_text li").css("display","none");
        $(".at9_box3_text li:eq("+at9_count+")").css("display","block");
        
        $(".at9_box3_pic li").css("display","none");
        $(".at9_box3_pic li:eq("+at9_count+")").css("display","block");
        
    }); 
    
    

    //--------아티클 12번 공지사항---------------

    $(".at12_content").hide();
    $(".at12_title").on("click", function() {

        $(".at12_content ").slideUp();
        if($(this).next().css("display")=="none"){
            $(this).next().slideDown();
        }
        else{
            $(this).next().slideUp();
        }
    });



    
    //-----------아티클 13번 지도 ---------------- 
    $(".at13_map_box1 li").on("click", function() {

        no=$(this).index();
        $(".at13_map_num").css("background","#ccc");
        $(".at13_map_num:eq("+no+")").css("background","rgb(59, 126, 193)");

        $(".at13_map_box2 div").css("display","none");
        $(".at13_map_box2 div:eq("+no+")").css("display","block");

    });



    
    //----윈도우 스크롤시 ----//
    $(window).scroll(function(e){
        
        //------------아티클 5번 휠 스크롤시 애니메이션---------------  
        at5_animation();
        
        //------------아티클 6번 휠 스크롤시 애니메이션--------------- 
        at6_animation();
        
        //-------------아티클 8번 애니메이션 효과---------------
        at8_animation_after();
       
    })
    
    //---다른 서브 페이지 클릭시 스크롤 탑0, 애니메이션 효과 이전 상태로------
    $(".reset").on("click", function() {

        $("html, body").animate({"scrollTop":0},10);
        at5_animation_before();
        at6_animation_before();
        at8_animation_before();
    });
    
    
    
    
});





// -----------아티클 0번 메인 페이지 큰 그림 5초 간격으로 바뀜---------
let timer=setInterval("big_pic_show()",3000);
count=0;
function big_pic_show(){
    
    $(".big_pic").animate({"left":"-=100%"},1000, function(){
        $(".big_pic > div:first").appendTo(".big_pic");
        $(".big_pic").css({"left":"+=100%"});
       
        if(count<4){
            count++;

        } else{
            count=0;
        }
        
        $(".big_btn li").css("background", "rgba(0, 0, 0, 0.2)").css("color","white");
        $(".big_btn li:eq("+count+")").css("background", "white").css("color","black");
    })
    
    $(".big_text > div").animate({"left":"-=100%"},1000, function(){
        $(".big_text > div> ul:first").appendTo(".big_text div");
        $(".big_text > div").css({"left":"+=100%"});
    })
    
}




//-------------아티클 5번 주요 수상내역 애니메이션 효과---------------
function at5_animation() {
    
    pos=$(window).scrollTop();
    if(130<pos){
        $(".at5_box2_back").css({"background":"white"});
        $(".at5_box2_back> div").stop().animate({"left":"0"},500);
        $(".at5_box2_text1").stop().animate({"opacity":"1"},500);
        $(".at5_box2_pic").stop().animate({"opacity":"1"},500);
        $(".at5_box2_text2").stop().animate({"opacity":"1"},500);
    } 
    if(800<pos){
        $(".at5_box3_1_back> div").stop().animate({"left":"0"},500);
        $(".at5_box3_1_text").stop().animate({"opacity":"1"},500);
        $(".at5_box3_1_list").stop().animate({"opacity":"1"},500);
        $(".at5_box3_1_pic").stop().animate({"opacity":"1"},500);
        $(".at5_box3_1_under").stop().animate({"opacity":"1"},500);

        $(".at5_box3_2_back> div").stop().animate({"left":"0"},500);
        $(".at5_box3_2_text").stop().animate({"opacity":"1"},500);
        $(".at5_box3_2_list").stop().animate({"opacity":"1"},500);
        $(".at5_box3_2_pic").stop().animate({"opacity":"1"},500);
        $(".at5_box3_2_under").stop().animate({"opacity":"1"},500);
    }
    if(1300<pos){
        $(".at5_box4_1_back> div").stop().animate({"left":"0"},500);
        $(".at5_box4_1_text").stop().animate({"opacity":"1"},500);
        $(".at5_box4_1_list").stop().animate({"opacity":"1"},500);
        $(".at5_box4_1_pic").stop().animate({"opacity":"1"},500);
        $(".at5_box4_1_under").stop().animate({"opacity":"1"},500);

        $(".at5_box4_2_back> div").stop().animate({"left":"0"},500);
        $(".at5_box4_2_text").stop().animate({"opacity":"1"},500);
        $(".at5_box4_2_list").stop().animate({"opacity":"1"},500);
        $(".at5_box4_2_pic").stop().animate({"opacity":"1"},500);
        $(".at5_box4_2_under").stop().animate({"opacity":"1"},500);
    } 
    if(1800<pos){
        $(".at5_box5_back> div").stop().animate({"left":"0"},500);
        $(".at5_box5_under").stop().animate({"opacity":"1"},500);
        $(".at5_box5_pic").stop().animate({"opacity":"1"},500);
        $(".at5_box5_text").stop().animate({"opacity":"1"},500);
    } 
    
};

function at5_animation_before() {
    
    pos=$(window).scrollTop();
    
        $(".at5_box2_back").css({"background":"none"});
        $(".at5_box2_back> div").css({"left":"-100%"});
        $(".at5_box2_text1").css({"opacity":"0"});
        $(".at5_box2_pic").css({"opacity":"0"});
        $(".at5_box2_text2").css({"opacity":"0"});

 
        $(".at5_box3_1_back> div").css({"left":"-100%"});
        $(".at5_box3_1_text").css({"opacity":"0"});
        $(".at5_box3_1_list").css({"opacity":"0"});
        $(".at5_box3_1_pic").css({"opacity":"0"});
        $(".at5_box3_1_under").css({"opacity":"0"});

        $(".at5_box3_2_back> div").css({"left":"-100%"});
        $(".at5_box3_2_text").css({"opacity":"0"});
        $(".at5_box3_2_list").css({"opacity":"0"});
        $(".at5_box3_2_pic").css({"opacity":"0"});
        $(".at5_box3_2_under").css({"opacity":"0"});

   
        $(".at5_box4_1_back> div").css({"left":"-100%"});
        $(".at5_box4_1_text").css({"opacity":"0"});
        $(".at5_box4_1_list").css({"opacity":"0"});
        $(".at5_box4_1_pic").css({"opacity":"0"});
        $(".at5_box4_1_under").css({"opacity":"0"});

        $(".at5_box4_2_back> div").css({"left":"-100%"});
        $(".at5_box4_2_text").css({"opacity":"0"});
        $(".at5_box4_2_list").css({"opacity":"0"});
        $(".at5_box4_2_pic").css({"opacity":"0"});
        $(".at5_box4_2_under").css({"opacity":"0"});
    

        $(".at5_box5_back> div").css({"left":"-100%"});
        $(".at5_box5_under").css({"opacity":"0"});
        $(".at5_box5_pic").css({"opacity":"0"});
        $(".at5_box5_text").css({"opacity":"0"});
    
    
};



//-------------아티클 6번 브랜드 스토리 애니메이션 효과---------------
function at6_animation() {
    
    pos=$(window).scrollTop();
    
    if(350<pos && pos<1600){
        $(".at6_box1_back1").stop().animate({"left":"0"},1200);
        $(".at6_box1_back2").stop().animate({"left":"0"},800);
        
        $(".at6_box1_text").stop().animate({"opacity":"1"},1500);
        $(".at6_box1_line").stop().animate({"opacity":"1"},1500);
    }
    if(1000<pos){
        $(".at6_box2_back1").stop().animate({"left":"0"},1200);
        $(".at6_box2_back2").stop().animate({"left":"0"},800);
        
        $(".at6_box2_text").stop().animate({"opacity":"1"},1500);
        $(".at6_box2_line").stop().animate({"opacity":"1"},1500);
    }
    if(1500<pos){
        $(".at6_box3_back1").stop().animate({"left":"0"},1200);
        $(".at6_box3_back2").stop().animate({"left":"0"},800);
        
        $(".at6_box3_text").stop().animate({"opacity":"1"},1500);
        $(".at6_box3_line").stop().animate({"opacity":"1"},1500);
    }
};

function at6_animation_before() {
    
    pos=$(window).scrollTop();

        $(".at6_box1_back1").css({"left":"-100%"});
        $(".at6_box1_back2").css({"left":"-100%"});
        
        $(".at6_box1_text").css({"opacity":"0"});
        $(".at6_box1_line").css({"opacity":"0"});


        $(".at6_box2_back1").css({"left":"-100%"});
        $(".at6_box2_back2").css({"left":"-100%"});
        
        $(".at6_box2_text").css({"opacity":"0"});
        $(".at6_box2_line").css({"opacity":"0"});


        $(".at6_box3_back1").css({"left":"-100%"});
        $(".at6_box3_back2").css({"left":"-100%"});
        
        $(".at6_box3_text").css({"opacity":"0"});
        $(".at6_box3_line").css({"opacity":"0"});
    
};


//-------------아티클 8번 애니메이션 효과---------------
function at8_animation_after(){
    
    pos=$(window).scrollTop();

    if(pos>1700){
        $(".at8_tool3_box1").stop().animate({"top":"50px","opacity":"1"},500);
        $(".at8_tool3_box2").stop().animate({"top":"50px","opacity":"1"},500);
        $(".at8_tool3_box3").stop().animate({"top":"0px","opacity":"1"},500);
    }
    if(pos>2500){
        $(".at8_tool4_bigbox").stop().animate({"opacity":"1"},500);
    } 
    
}

function at8_animation_before(){
     
    $(".at8_tool3_box1").stop().animate({"top":"100px","opacity":"0"},0);
    $(".at8_tool3_box2").stop().animate({"top":"100px","opacity":"0"},0);
    $(".at8_tool3_box3").stop().animate({"top":"50px","opacity":"0"},0);
   
    $(".at8_tool4_bigbox").stop().animate({"opacity":"0"},0);
    
}




















