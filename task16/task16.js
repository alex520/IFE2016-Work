/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
	var city = document.getElementById('aqi-city-input').value;
	var quality = document.getElementById("aqi-value-input").value;
	aqiData[city] = quality;
	return aqiData;
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
	var table = document.getElementById('aqi-table');
	table.innerHTML = "<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";

	// 添加其它 td
	for(var i in aqiData) {
		var deltd = document.createElement('td');
		var delbtn = document.createElement('button');
		delbtn.className = 'del';
		delbtn.textContent = "删除";
		deltd.appendChild(delbtn);
		var tr = document.createElement('tr');
		var city = document.createElement('td');
		city.textContent = i;
		var quality = document.createElement('td');
		quality.textContent = aqiData[i];
		tr.appendChild(city);
		tr.appendChild(quality);
		tr.appendChild(deltd);
		table.appendChild(tr);
	}

	var delBtn = document.getElementsByClassName('del');
  for(var i = 0; i < delBtn.length; i++) {
  	delBtn[i].onclick = delBtnHandle;
  }
	return table;
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle() {
  // do sth.
  var parent = this.parentNode.parentNode.parentNode;
  var child = this.parentNode.parentNode;
  parent.removeChild(child);
  var value = this.parentNode.parentNode.firstChild.textContent;
  delete aqiData[value];
  renderAqiList();
}

function init() {

  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
  var btn = document.getElementById('add-btn');
  btn.onclick = addBtnHandle;
  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数

}

init();