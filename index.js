var inputPhone = document.getElementById('inputPhone');
var province = document.getElementById('province');
var city = document.getElementById('city');
var sp = document.getElementById('sp');
var result = document.getElementsByClassName('result-wrapper')[0];
var button = document.getElementById('checkBtn');
button.addEventListener('click', check);
function check() {
  showLoading()
  result.style.display = "none"
	fetch('https://v.api.aa1.cn/api/phone/guishu-api.php?phone='+inputPhone.value)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    province.textContent = data.data.province;
    city.textContent = data.data.city;
    sp.textContent = data.data.sp;
    result.style.display = "block"
    hideLoading() 
  })
  .catch(function(error) {
    console.log(error);
    hideLoading() 
  });

}
function showLoading() {
  button.innerHTML = '<span class="loader"></span>'; // 修改按钮内容为加载动画和加载中文本
  button.disabled = true; // 禁用按钮，以防止重复点击
}
function hideLoading() {
  button.innerHTML = "查询"; // 恢复按钮内容为初始状态
  button.disabled = false; // 启用按钮
}

