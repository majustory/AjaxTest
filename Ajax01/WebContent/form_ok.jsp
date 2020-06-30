<% 
  String id = request.getParameter("id");
  String passwd  = request.getParameter("passwd");

  if (id.equals("ppk") && passwd.equals("1234")){
       int check = 1; 	  
	   session.setAttribute("id","ppk");
	   out.println(check);//처리결과를 반환
  }else {
	  int check = -1; 
	  out.println(check);//처리결과를 반환
  }
 
  %>
