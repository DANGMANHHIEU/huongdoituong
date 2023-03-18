let plist = [];
//ham luu du lieu
function creat(){
    let id = +document.getElementById('id').value;
    let name = document.getElementById('name').value;
    let price = +document.getElementById('price').value;
    let newprouct = new product(id,name,price);

    if(id && name && price){
        plist.push(newprouct);
    showDisplay();}
}



//hiển thị danh sách
function showDisplay(){
    let conten=` <tr>
            <th>id</th>
            <th>Tên sản phẩm</th>
            <th>giá tiền</th>
            <th>thao tác</th>
        </tr>`;
    for(let i =0;i<plist.length;i++){
        conten += `<tr>
<td>${plist[i].id}</td>
<td>${plist[i].name}</td>
<td>${plist[i].price}</td>
<td><button type="button" onclick="editsp(${i})">edit</button>
 <button type="button" onclick="deletesp(${i})">delete</button> </td>
</tr>`
    }
    document.getElementById('prouct').innerHTML = conten;
    let Total = total();
    document.getElementById('total').innerText= `tong tien:${Total}`
    clear();//hàm xóa
}

// hàm sửa sản phẩm
function editsp(id){
    document.getElementById('id').value=plist[id].id;
    document.getElementById('name').value =plist[id].name;
    document.getElementById('price').value=plist[id].price;
    document.getElementById('index').value=id
    document.getElementById('luu').style.display='none';
    document.getElementById('cap').style.display='block';

}

// hàm cập nhập
function save(){
    let n = document.getElementById('index').value;
        plist[n].id= +document.getElementById('id').value;
        plist[n].name= document.getElementById('name').value;
        plist[n].price= +document.getElementById('price').value;
    showDisplay();
    clear();
    document.getElementById('luu').style.display='block';
    document.getElementById('cap').style.display='none';

}


//hàm xoa du lieu trong o sau khi luu xog du lieeu
function clear(){
    document.getElementById('id').value='';
    document.getElementById('name').value='';
    document.getElementById('price').value='';
}

// ham delete
function deletesp(id){
    plist.splice(id,1);
    showDisplay();
}

//ham tinh tong tien
function total(){
    let sum = 0;
    for(let i =0; i<plist.length; i++){
        sum += plist[i].price;
    }
    return sum;
}