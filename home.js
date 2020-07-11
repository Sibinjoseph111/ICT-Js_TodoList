$(document).ready(()=>{

    var count = 0;

    $.get("https://jsonplaceholder.typicode.com/todos" ,(res,status,xhr)=>{

        if(status == "success"){
           
            for(i=0;i<50;i++){
               var list = `\n<input type="checkbox" class="checkbox"> \t <label for="checkbox">${res[i].title}</label><br>`
               $("#todoList").append(list)

            }
        }

    });

    $(document).on('change', '.checkbox', function() {
        if(this.checked) {
            count ++;
            checkCount().then((message)=>{
                alert(message);
            },(err)=>{});
        }else {
            count --;
        }
    });

    function checkCount(){

        return new Promise((resolve, reject)=>{
            if(count >=5){
                resolve(`Congrats. ${count} Tasks have been Successfully Completed`);
            }else reject();
        });
    }

});