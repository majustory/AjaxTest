$(document).ready(function(){

	$("#login").click(function(){
		var status = true;
		if(status){
		  //입력된 사용자의 아이디와 비밀번호를 얻어냄
		  var query = {id : $("#id").val(), 
				       passwd:$("#passwd").val()};
		  
		  $.ajax({
		     type: "POST",
		     url: "form_ok.jsp",
		     data: query,
		     success: function(data){
		    	 if(data == 1)//로그인 성공
		    		 $("#main_auth").load("success.jsp");	
		    	 else if(data == 0){//비밀번호 틀림
		    	  	 alert("비밀번호가 맞지 않습니다.");
		    	  	 $("#passwd").val("");
		    	  	 $("#passwd").focus();
		    	 }else if(data == -1){//아이디 틀림
		    		 alert("아이디가 맞지 않습니다.");
		    		 $("#id").val("");
		    		 $("#passwd").val("");
		    	  	 $("#id").focus();
		    	 }
		     }
		  });
		}
	});
	
	
	
	//[회원가입]버튼을 클릭하면 자동실행		
	$("#register").click(function(){//[회원가입]버튼 클릭
		//회원가입폼 registerForm.jsp 페이지를 
		//id 속성값이 main_auth인 영역에 로드
		$("#main_auth").load("registerForm.jsp");
	});

});