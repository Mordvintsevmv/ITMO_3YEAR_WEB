function ShowImg(imgin)  {

        imgin.classList.remove('hide')

        var div = document.querySelectorAll('.load');
                for (const section of div) {
                        if(section.classList.contains(imgin.classList)){
                        section.classList.add('hide')
                }
        }

}

window.onload = function(){
        alert("Странциа наконец загрузилась!")
}

document.addEventListener("DOMContentLoaded", () => {
    alert("DOM готов!");
  });