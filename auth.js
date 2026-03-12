export function checkLogin(){
  const email = localStorage.getItem("user_email");
  if(!email){
    alert("Bạn chưa đăng nhập!");
    location.href="index.html";
  }
}

export function checkAdmin(){
  const ADMIN = "phanvo0001@gmail.com";
  const email = localStorage.getItem("user_email");

  if(!email){
    location.href="index.html";
  }

  if(email.toLowerCase() !== ADMIN.toLowerCase()){
    alert("Không có quyền truy cập!");
    location.href="home.html";
  }
}