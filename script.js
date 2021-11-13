let posts;
let tbody = document.getElementById("tbody");
let pageSize = 10;
let currentPage = 0;

fetch('https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json')
  .then(response => response.json())
  .then((result) => {
    posts = result;

    for(let i = 0;i < 10;i++){
        NewRow(posts[i]);
    }
  });

function NewRow(data){
    let row = document.getElementById("tbody").insertRow();

    let cell0 = row.insertCell(0);
    let cell1 = row.insertCell(1);
    let cell2 = row.insertCell(2);

    cell0.innerHTML = data.id;
    cell1.innerHTML = data.name;
    cell2.innerHTML = data.email;
}

function changePage(direction){
    // document.getElementById("tbody").innerHTML= '';

    if (direction == 'next'){
        if(currentPage < 9){
            document.getElementById("tbody").innerHTML= '';
            currentPage++;
            for(let i = (currentPage*pageSize);i < (currentPage*pageSize) + 10;i++){
                NewRow(posts[i]);
            }
        }
    }else{
        if(currentPage > 0){
            document.getElementById("tbody").innerHTML= '';
            currentPage--;
            for(let i = (currentPage*pageSize);i < (currentPage*pageSize) + 10;i++){
                NewRow(posts[i]);
            }
        }
    }
}
